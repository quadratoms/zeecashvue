<template>
  <div class="tabs">
    <div class="border-b border-gray-200">
      <nav class="-mb-px flex">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: activeTab === index }"
          class="whitespace-nowrap py-4 w-[30%] px-1 border-b-2 font-medium text-sm focus:outline-none"
          @click="activeTab = index"
        >
          {{ tab.name }}
        </button>
      </nav>
    </div>
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      v-show="activeTab === index"
      class="py-6"
    >
      <!-- Tab content -->
      <!-- {{ tab.content }} -->
      <DisburseManual :loan-id="$props.loanId"  v-if="tab.name=='Manual'"/>
      <a v-else href="#" @click="(e) => { payoutloan() }" 
                      class="px-2 ml-4 font-bold text-green-600  bg-yellow-100 rounded-lg hover:text-indigo-900">Disburse
                      out</a>{{ $props.loanId }}llo
    </div>
  </div>
</template>

<script >

import DisburseManual from './DisburseManual.vue';
import axios from "axios";
import { ref, defineComponent } from 'vue';

export default defineComponent({
  components: { DisburseManual },
  props: {
    loanId: {
      type: String,
    },
  },
  data() {
    return {
      base_url: import.meta.env.VITE_API_ENDPOINT,
      activeTab: 0,
      tabs: [
        { name: 'Manual', content:''},
        { name: 'Auto', content: 'Content of Tab 2' },
      ],
    };
  },
  methods: {
    payoutloan() {
      // e.srcElement.hidden = true
      // console.log(e);

      // console.log(this.$refs["id"]);
      if(confirm("Do to really want to approve this loan?")){
        axios.get(`${this.base_url}/staff/payout/${this.$props.loanId}/`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`,
  
          },
        }).then(res => {
  
        })

      }

    },
  },
});



</script>

<style>

.tabs {
  /* Add any custom styles here */
}

.tabs .active {
  border-bottom: 5px solid green;
}

</style>
