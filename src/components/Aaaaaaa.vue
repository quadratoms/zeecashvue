<template>
  <div class="flex w-full">
    <div class="w-1/3 px-2 border  rounded-lg bg-white mx-auto shadow-lg max-w-xs">
      <div class="font-bold text-2xl pb-2">Loan Details</div>

      <div class="flex justify-between">
        <div class="font-bold">Ref:</div>
        <div>{{ loan.id }}</div>
      </div>

      <div class="flex justify-between">
        <div class="font-bold">Due For:</div>
        <div>{{ loan.get_due_payment[1] }} day{{ loan.get_due_payment[1] > 1 ? "s" : "" }}</div>
      </div>
      <div class="flex justify-between">
        <div class="font-bold">Requested date:</div>
        <div>{{ (new Date(loan.request_date)).toLocaleDateString() }}</div>
      </div>
      <div class="flex justify-between">
        <div class="font-bold">Payment date:</div>
        <div>{{ (new Date(loan.accept_date)).toLocaleDateString() }}</div>
      </div>
      <div class="flex justify-between">
        <div class="font-bold">Amount taken:</div>
        <div>{{ loan.amount }}</div>
      </div>
      <div class="flex justify-between">
        <div class="font-bold">Amount due:</div>
        <div>{{ loan.get_due_payment[0] }}</div>
      </div>
      <div class="flex justify-between">
        <div class="font-bold">Amount Remaining:</div>
        <div>{{ loan.get_due_payment[0] - loan.total_repayment }}</div>
      </div>
      <div class="flex justify-between">
        <div class="font-bold">Due Amount:</div>
        <div>{{ (new Date(loan.accept_date)).toLocaleDateString() }}</div>
      </div>

      <div class="font-bold  mt-5 text-2xl pb-2">Bankdetails details</div>

      <div class="flex justify-between">
        <div class="font-bold">Bank name:</div>
        <div>{{ loan.customer.bankdetail?.bank_name }}</div>
      </div>
      <div class="flex justify-between">
        <div class="font-bold">Account no:</div>
        <div>{{ loan.customer.bankdetail?.account_no }}</div>
      </div>
      <div class="flex justify-between">
        <div class="font-bold">Card provider:</div>
        <!-- <div>{{}}</div> -->
      </div>
      <div class="flex justify-between">
        <div class="font-bold">Card number:</div>
        <!-- <div>{{}}</div> -->
      </div>
      <div class="flex justify-between">
        <div class="font-bold">Card expire at:</div>
        <div>11/11/1992</div>
      </div>

    </div>
    <div class="w-1/3 px-2 border  rounded-lg bg-white mx-auto shadow-lg max-w-xs">
      <div class="font-bold  text-2xl pb-2">Personal details</div>
      <div class="flex justify-between">
        <div class="font-bold">Firstname:</div>
        <div>{{ loan.customer.fullname }}</div>
      </div>
      <div class="flex justify-between">
        <div class="font-bold">Lastname:</div>
        <div>tunde</div>
      </div>
      <div class="flex justify-between">
        <div class="font-bold">Middle name:</div>
        <div>tunde</div>
      </div>
      <div class="flex justify-between">
        <div class="font-bold">DOB:</div>
        <div>{{ loan.customer.age }}</div>
      </div>
      <div class="flex justify-between">
        <div class="font-bold">Phone number:</div>
        <div>{{ loan.customer.phone }}</div>
      </div>
      <div class="flex justify-between">
        <div class="font-bold">Occupation:</div>
        <div>{{ loan.customer.job }}</div>
      </div>
      <div class="flex justify-between">
        <div class="font-bold">Card provider:</div>
        <div>{{}}</div>
      </div>
      <div class="flex justify-between">
        <div class="font-bold">Card number:</div>
        <div>{{}}</div>
      </div>
      <div class="flex justify-between">
        <div class="font-bold">Card expire at:</div>
        <div>{{}}</div>
      </div>


      <div class="font-bold  mt-5 text-2xl pb-2">Guarantor Details</div>
      <div class="flex justify-between">
        <div class="font-bold">Guarantor1 name:</div>
        <div>{{ loan.customer?.guarantors[0]?.name }}</div>
      </div>
      <div class="flex justify-between">
        <div class="font-bold">Relationship:</div>
        <div>{{ loan.customer?.guarantors[0]?.relationship }}</div>
      </div>
      <div class="flex justify-between">
        <div class="font-bold">Job:</div>
        <div>{{ loan.customer?.guarantors[0]?.job }}</div>
      </div>
      <div class="flex justify-between">
        <div class="font-bold">Phone no:</div>
        <div>{{ loan.customer?.guarantors[0]?.phone }}</div>
      </div>
      <br>
      <div class="flex justify-between">
        <div class="font-bold">Guarantor2 name:</div>
        <div>{{ loan.customer?.guarantors[1]?.name }}</div>
      </div>
      <div class="flex justify-between">
        <div class="font-bold">Relationship:</div>
        <div>{{ loan.customer?.guarantors[1]?.relationship }}</div>
      </div>
      <div class="flex justify-between">
        <div class="font-bold">Job:</div>
        <div>{{ loan.customer?.guarantors[1]?.job }}</div>
      </div>
      <div class="flex justify-between">
        <div class="font-bold">Phone no:</div>
        <div>{{ loan.customer?.guarantors[1]?.phone }}</div>
      </div>
      <div class="flex  my-2">
        <div class="font-bold cursor-pointer text-white bg-blue-800 rounded-lg px-2 py-1">Phonebook</div>

      </div>

    </div>

    <div class="w-1/3">
      <div class="flex justify-between">
        <img src="d" alt="" class="w-5/6 h-36">
      </div>
    </div>
  </div>

  <div class="mt-8">
    <div class="flex flex-col w-full">
      <div class="flex justify-between w-full bg-blue-200 ">
        <div @click="tabitem = 'collection'"
          :class="tabitem == 'collection' ? 'bg-blue-800 text-center w-1/3  py-2 text-white' : 'bg-transparent  text-center w-1/3  py-2 text-blue-900 cursor-pointer'">
          Collection
        </div>
        <div @click="tabitem = 'history'"
          :class="tabitem == 'history' ? 'bg-blue-800 text-center w-1/3  py-2 text-white' : 'bg-transparent  text-center w-1/3  py-2 text-blue-900 cursor-pointer'">
          Loan History
        </div>
        <div @click="tabitem = 'repayment'"
          :class="tabitem == 'repayment' ? 'bg-blue-800 text-center w-1/3  py-2 text-white' : 'bg-transparent  text-center w-1/3  py-2 text-blue-900 cursor-pointer'">
          Repayment History
        </div>
      </div>
      <div class="flex flex-col  w-full ">
        <div :class="tabitem == 'collection' ? 'flex my-10 px-5 overflow-auto' : 'hidden'">
          <!-- form -->
          <div class="flex w-full">
            <div class="w-1/2">
              <div class="flex flex-col text-sm py-2">
                <label class="font-bold" for="">Collection Type</label>
                <select v-model="collection_type"
                  class="w-full my-2 py-1 px-1 border border-gray-700 rounded-md focus:border-blue-600 focus:ring focus:ring-opacity-40 focus:ring-blue-500">
                  <option value="">Please select collectiontyppe</option>
                  <option>Call</option>
                  <option>Message</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="flex flex-col text-sm py-2">
                <label class="font-bold" for="">Collection Object</label>
                <select v-model="collection_object"
                  class="w-full my-2 py-1 px-1 border border-gray-700 rounded-md focus:border-blue-600 focus:ring focus:ring-opacity-40 focus:ring-blue-500">
                  <option value="">Please select an object</option>
                  <option>family</option>
                  <option>friend</option>
                  <option>other</option>
                  <option>friend</option>
                </select>
              </div>
              <div class="flex flex-col text-sm py-2">
                <label class="font-bold" for="">Collection contact</label>
                <input v-model="collection_contact"
                  class="w-full my-2 py-1 px-1 border border-gray-700 rounded-md focus:border-blue-600 focus:ring focus:ring-opacity-40 focus:ring-blue-500"
                  placeholder="Contact" />
              </div>
              <div class="flex flex-col text-sm py-2">
                <label class="font-bold" for="">Collection information</label>
                <textarea v-model="collection_comment"
                  class="w-full my-2 py-1 px-1 border border-gray-700 rounded-md focus:border-blue-600 focus:ring focus:ring-opacity-40 focus:ring-blue-500"
                  placeholder="add comment here"></textarea>
              </div>
              <div class="flex flex-col text-sm py-2">
                <label class="font-bold" for="">Collection status</label>
                <select v-model="collection_status"
                  class="w-full my-2 py-1 px-1 border border-gray-700 rounded-md focus:border-blue-600 focus:ring focus:ring-opacity-40 focus:ring-blue-500">
                  <option value="">Please select a status</option>
                  <option>willing to pay</option>
                </select>
              </div>
              <button @click="addComment"
                class="bg-blue-500 flex items-center justify-center hover:bg-blue-700 text-px-4 py-2 text-gray-200 rounded-md focus:outline-none focus:bg-gray-700"
                type="button">
                <!-- <svg class="animate-spin " v-if="loading" height="25" viewBox="0 0 154 156" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="76.9125" cy="78" rx="56.2232" ry="57.0181" stroke="#ffffff" stroke-opacity="0.25"
                    stroke-width="14" />
                  <path
                    d="M76.5232 20.9833C91.4342 20.8786 105.775 26.7853 116.392 37.4039C127.009 48.0226 133.031 62.4834 133.134 77.6052"
                    stroke="url(#paint0_linear_274_857)" stroke-width="14" stroke-linecap="round"
                    stroke-dasharray="4 4" />
                  <defs>
                    <linearGradient id="paint0_linear_274_857" x1="125.45" y1="106.776" x2="27.6853" y2="50.4202"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#ffffff" />
                      <stop offset="0.755208" stop-color="#ffffff" stop-opacity="0.01" />
                      <stop offset="1" stop-color="#ffffff" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg> -->
                <div class="pl-5">Add comment</div>

              </button>
            </div>
            <div class="w-1/2">
            </div>
          </div>
        </div>
        <div :class="tabitem == 'history' ? 'flex my-10 px-5 overflow-auto' : 'hidden'">
          <table class="  border border-slate-400 w-full whitespace-nowrap overflow-scroll">
            <thead class="">
              <tr>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Loan Ref</th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Amount</th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Amount Paid</th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Disbursed at</th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Due date</th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Repayment date</th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(loanitem, index) in loan.customer.loans " :key="index">
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1 font-bold">{{ loanitem.id }}
                </td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">{{ loanitem.get_due_payment[0] }}
                </td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">{{ loanitem.total_repayment }}</td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">{{ (new
                    Date(loanitem.accept_date)).toLocaleDateString()
                }}</td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">{{ (new
                    Date()).toLocaleDateString()
                }}</td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">{{ (new
                    Date()).toLocaleDateString()
                }}</td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">{{ loanitem.status }}</td>
              </tr>


            </tbody>
          </table>
        </div>
        <div :class="tabitem == 'repayment' ? 'flex my-10 px-5 overflow-auto' : 'hidden'">
          <table class="  border border-slate-400 w-full whitespace-nowrap overflow-scroll">
            <thead class="">
              <tr>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Loan Ref</th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Amount</th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Amount Paid</th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Disbursed at</th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Due date</th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Repayment date</th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1 font-bold">ZUB8759475038383893
                </td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">2,000</td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">2,000</td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">{{ (new
                    Date()).toLocaleDateString()
                }}</td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">{{ (new
                    Date()).toLocaleDateString()
                }}</td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">{{ (new
                    Date()).toLocaleDateString()
                }}</td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">Over due</td>
              </tr>
              <tr>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1 font-bold">ZUB8759475038383893
                </td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">2,000</td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">2,000</td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">{{ (new
                    Date()).toLocaleDateString()
                }}</td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">{{ (new
                    Date()).toLocaleDateString()
                }}</td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">{{ (new
                    Date()).toLocaleDateString()
                }}</td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">Over due</td>
              </tr>
              <tr>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1 font-bold">ZUB8759475038383893
                </td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">2,000</td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">2,000</td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">{{ (new
                    Date()).toLocaleDateString()
                }}</td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">{{ (new
                    Date()).toLocaleDateString()
                }}</td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">{{ (new
                    Date()).toLocaleDateString()
                }}</td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">Over due</td>
              </tr>
              <tr>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1 font-bold">ZUB8759475038383893
                </td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">2,000</td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">2,000</td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">{{ (new
                    Date()).toLocaleDateString()
                }}</td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">{{ (new
                    Date()).toLocaleDateString()
                }}</td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">{{ (new
                    Date()).toLocaleDateString()
                }}</td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap p-1">Over due</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import {PropType, defineComponent } from 'vue';
import { Loan } from '../hooks/useTableData';
import axios from "axios";
export default defineComponent({
  props: {
    loan: {
      type: Object as PropType<Loan>,
      default: {},
    },
  },
  data() {
    return {
      tabitem: "collection",
      customer: this.loan.customer.id,
      collection_type: "",
      collection_object: "",
      collection_contact: "",
      collection_comment: "",
      collection_status: "",

    }
  },
  methods: {
    addComment() {

      axios.post('http://localhost:8000/staff/addcomment/', {
        customer: this.customer,
        collection_type: this.collection_type,
        collection_object: this.collection_object,
        collection_contact: this.collection_contact,
        collection_comment: this.collection_comment,
        collection_status: this.collection_status
      }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("token")}`
        }
      })
        .then((res) => {
          console.log(res.data);

          // Loans.value = res.data


        })
        .catch((error) => {
          console.log(error);
        });

    },
    switchtab(tabitem: string) {
      this.tabitem = tabitem
    }

  },

})

</script>
