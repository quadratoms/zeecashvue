<template>
  <form @submit.prevent="submitForm" novalidate>
    <div class="mb-4">
      <label for="amount" class="block text-sm font-medium text-gray-700"
        >Amount</label
      >
      <input
        id="amount"
        type="number"
        v-model="form.amount"
        :class="{ 'border-red-500': formErrors.amount }"
        @input="validateForm"
        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
      <p v-if="formErrors.amount" class="text-red-500 text-xs mt-1">
        {{ formErrors.amount }}
      </p>
    </div>
    <div class="mb-4">
      <label for="reference" class="block text-sm font-medium text-gray-700"
        >Reference</label
      >
      <input
        type="text"
        id="reference"
        v-model="form.reference"
        :class="{ 'border-red-500': formErrors.reference }"
        @input="validateForm"
        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
      <p v-if="formErrors.reference" class="text-red-500 text-xs mt-1">
        {{ formErrors.reference }}
      </p>
    </div>
    <div class="mb-4">
      <label for="bank_name" class="block text-sm font-medium text-gray-700"
        >Bank Name</label
      >
      <input
        type="text"
        id="bank_name"
        v-model="form.bank_name"
        :class="{ 'border-red-500': formErrors.bank_name }"
        @input="validateForm"
        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
      <p v-if="formErrors.bank_name" class="text-red-500 text-xs mt-1">
        {{ formErrors.bank_name }}
      </p>
    </div>
    <button
      type="submit"
      :disabled="isFormInvalid"
      :class="!isFormInvalid?' bg-indigo-600 hover:bg-indigo-700':' bg-indigo-200 hover:bg-indigo-200'"
      class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Submit
    </button>
  </form>
</template>

<script lang="ts">
import axios from 'axios';

export default {
  props: {
    loanId: {
      type: String,
    },
  },
  data() {
    return {
      base_url: import.meta.env.VITE_API_ENDPOINT,
      activeTab: 0,
      form: {
        amount: '',
        reference: '',
        bank_name: '',
      },
      amountError: false,
      referenceError: false,
      bankNameError: false,
      formErrors: {
        amount: '',
        reference: '',
        bank_name: '',
      },
      formHasError: false,
    };
  },
  computed: {
    isFormInvalid() {
      console.log(9);
      
      return Object.values(this.formErrors).some((error) => error !== '');
    },
  },
  methods: {
    submitForm() {
      this.validateForm();
      if(!this.isFormInvalid){
        if(confirm("Do to really want to approve this loan?")){
        axios.post(`${this.base_url}/staff/payout/${this.$props.loanId}/`,{
          ...this.form
        }, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`,
  
          },
        }).then(res => {
  
        })

      }
        console.log('Form submitted:', this.form);
      }
      // Handle form submission here
    },
    validateForm() {
      console.log(this.isFormInvalid);
      
      this.formErrors = {
        amount: '',
        reference: '',
        bank_name: '',
      };

      if (!this.form.amount) {
        this.formErrors.amount = 'Amount is required';
      }

      if (!this.form.reference) {
        this.formErrors.reference = 'Reference is required';
      }

      if (!this.form.bank_name) {
        this.formErrors.bank_name = 'Bank Name is required';
      }
    },
  },
};
</script>
