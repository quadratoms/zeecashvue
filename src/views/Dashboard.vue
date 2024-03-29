<template>
  <KeepAlive>
    <div>
      <h3 class="text-3xl font-medium text-gray-700">{{ role }} Dashboard</h3>

      <div class="mt-4">
        <div class="flex flex-wrap -mx-6">
          <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
            <div
              class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
            >
              <div class="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
                <svg
                  class="w-8 h-8 text-white"
                  viewBox="0 0 28 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                    fill="currentColor"
                  />
                  <path
                    d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                    fill="currentColor"
                  />
                  <path
                    d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                    fill="currentColor"
                  />
                  <path
                    d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                    fill="currentColor"
                  />
                  <path
                    d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                    fill="currentColor"
                  />
                  <path
                    d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <div class="mx-5">
                <h4 class="text-2xl font-semibold text-gray-700">8,282</h4>
                <div class="text-gray-500">Total collected</div>
              </div>
            </div>
          </div>

          <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
            <div
              class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
            >
              <div class="p-3 bg-blue-600 bg-opacity-75 rounded-full">
                <svg
                  class="w-8 h-8 text-white"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z"
                    fill="currentColor"
                  />
                  <path
                    d="M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z"
                    fill="currentColor"
                  />
                  <path
                    d="M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <div class="mx-5">
                <h4 class="text-2xl font-semibold text-gray-700">200,521</h4>
                <div class="text-gray-500">Total Orders</div>
              </div>
            </div>
          </div>

          <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
            <div
              class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
            >
              <div class="p-3 bg-pink-600 bg-opacity-75 rounded-full">
                <svg
                  class="w-8 h-8 text-white"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>

              <div class="mx-5">
                <h4 class="text-2xl font-semibold text-gray-700">215,542</h4>
                <div class="text-gray-500">Available Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8">
        <h2 class="text-xl font-semibold leading-tight text-gray-700">
          Orders
        </h2>

        <div class="flex flex-col mt-3 sm:flex-row">
          <div class="flex">
            <div class="relative">
              <select
                class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border border-gray-400 rounded-l appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>5</option>
                <option>10</option>
                <option>20</option>
              </select>

              <div
                class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>

            <div class="relative">
              <select
                class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border-t border-b border-r border-gray-400 rounded-r appearance-none sm:rounded-r-none sm:border-r-0 focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
              >
                <option>All</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>

              <div
                class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div class="relative block mt-2 sm:mt-0">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                viewBox="0 0 24 24"
                class="w-4 h-4 text-gray-500 fill-current"
              >
                <path
                  d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                />
              </svg>
            </span>

            <input
              placeholder="Search"
              class="block w-full py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-col mt-8">
        <div
          class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        >
          <div
            class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
          >
            <table class="min-w-full">
              <thead>
                <tr>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                  >
                    Loan Ref
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                  >
                    Costumer Name
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                  >
                    Amount
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                  >
                    Amount Paid
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                  >
                    Outstanding
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                  >
                    collection information
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                  >
                    collection status
                  </th>
                  <th
                    class="px-6 py-3 border-b border-gray-200 bg-gray-50"
                  ></th>
                </tr>
              </thead>

              <tbody class="bg-white">
                <tr v-for="(u, index) in Loans" :key="index">
                  <td
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <div class="flex-shrink-0 w-10 h-10">
                        <img
                          class="w-10 h-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>

                      <div class="ml-4">
                        <div
                          class="text-sm font-medium leading-5 text-gray-900"
                        >
                          {{ u.id }}
                        </div>
                        <!-- <div class="text-sm leading-5 text-gray-500">
                        {{ u.phone }}
                      </div> -->
                      </div>
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="text-sm leading-5 text-gray-900">
                      {{ u.customer.fullname }}
                    </div>
                    <!-- <div class="text-sm leading-5 text-gray-500">
                    {{ u.title2 }}
                  </div> -->
                  </td>

                  <td
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="text-sm leading-5 text-gray-900">
                      {{ u.amount }}
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                  >
                    {{ u.total_repayment }}
                  </td>

                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                  >
                    {{ u.get_due_payment[0] - u.total_repayment }}
                  </td>

                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                  >
                    {{
                      u.customer?.comments &&
                      u.customer?.comments[u.customer?.comments.length - 1]
                        ?.collection_comment
                    }}
                  </td>

                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                  >
                    <span
                      class="inline-flex px-2 text-xs font-semibold leading-5 text-blue-800 bg-blue-100 rounded-full"
                      >{{
                        u.customer?.comments &&
                        u.customer?.comments[u.customer?.comments.length - 1]
                          ?.collection_status
                      }}</span
                    >
                  </td>

                  <td
                    class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                  >
                    <a
                      href="#"
                      @click="goto(u.id)"
                      class="text-indigo-600 hover:text-indigo-900"
                      >View</a
                    >
                    <!-- <a v-if="!u.disburst" href="#" @click="(e) => { payoutloan(u.id, e) }" 
                      class="px-2 ml-4 font-bold text-green-600  bg-yellow-100 rounded-lg hover:text-indigo-900">Disburse
                      out</a> -->
                    <Disburse v-if="!u.disburst" :loan-id="u.id" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              class="flex flex-col items-center px-5 py-5 bg-white border-t xs:flex-row xs:justify-between"
            >
              <span class="text-xs text-gray-900 xs:text-sm"
                >Showing {{ page + 1 }} to {{ end }} of
                {{ count }} Entries</span
              >

              <div class="inline-flex mt-2 xs:mt-0">
                <button
                  @click="prev && getdata(prev, false)"
                  class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-l hover:bg-gray-400"
                >
                  Prev
                </button>
                <button
                  @click="next && getdata(next, true)"
                  class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-r hover:bg-gray-400"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </KeepAlive>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';
// import axios from "axios";
import { useCostumerRoute, useCurrentRoute } from '../hooks/useSidebar';
import router from '../router';
import Disburse from '../components/Disburse.vue';
// import { useTableData } from "../hooks/useTableData";

const { customerRoute } = useCostumerRoute();
const { currentRoute } = useCurrentRoute();
// const { Loans } = useTableData()

const goto = (loanRef: string) => {
  console.log('click');
  currentRoute.value = loanRef;
  if (!customerRoute.value.includes(loanRef)) {
    customerRoute.value = [...customerRoute.value, loanRef];
  }
  router.push('/tables/' + loanRef);
};

// const testLoan: Loan = {
//   Ref: "ZUB8759475038383893",
//   name: "Chizom tajudeen",
//   amount: "2,000",
//   amountPaid: "0",
//   outstanding: "2,000",
//   information: "",
//   status: "WTP",

// };

// const Loans = ref<Loan[]>(loans);

// const Loans = ref<Loan[]>([...Array(10).keys()].map(() => testLoan));
</script>
<script lang="ts">
import axios from 'axios';
import { useTableData } from '../hooks/useTableData';
// import { useCookies } from "vue3-cookies";

export default defineComponent({
  activated() {},
  data() {
    return {
      role: '',
      next: null,
      prev: null,
      count: 0,
      page: 1,
      end: 1,
      Loans: [
        {
          id: '',
          customer: {
            fullname: '',
            information: '',
            comments: [],
          },
          amount: '',
          interest_rate: '',
          request_date: '',
          accept: '',
          accept_date: '',
          duration: '',
          status: '',
          paid: '',
          get_due_payment: [],
          disburst: '',
          total_repayment: 0,
        },
      ],
      base_url: import.meta.env.VITE_API_ENDPOINT,
    };
  },
  methods: {
    // payoutloan(id: any, e: any) {
    //   e.srcElement.hidden = true
    //   console.log(e);

    //   // console.log(this.$refs["id"]);
    //   axios.get(`${this.base_url}/staff/payout/${id}/`, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Authorization": `Token ${localStorage.getItem("token")}`,

    //     },
    //   }).then(res => {

    //   })

    // },
    getdata(
      url = `http://localhost:8000/staff/orderss/?limit=10&offset=0`,
      next = false
    ) {
      axios
        .get(url, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${localStorage.getItem('token')}`,
          },
        })
        .then((res) => {
          console.log(res);

          this.Loans = res.data.results;
          useTableData().Loans.value = res.data.results;
          this.prev = res.data.previous;
          this.next = res.data.next;
          this.count = res.data.count;

          this.page = next ? this.page + 1 : this.page - 1;
          this.end = Math.floor(res.data.count / 2);

          // Loans.value = res.data
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    const hooks = useTableData();
    hooks.fetchCollector();
    this.collectors = hooks.Collectors;
    //     console.log(useCookies().cookies.keys());
    // console.log(useCookies().cookies.get("_ga"));
    let role = localStorage.getItem('role');
    this.role = role.toUpperCase();
    if (!useTableData().Loans.value.length) {
      this.getdata(
        `${this.base_url}/staff/${
          role == 'admin' ? 'allorders' : 'orderss'
        }/?limit=2&offset=0`
      );
    } else {
      this.Loans = useTableData().Loans.value;
    }
  },
});
</script>
