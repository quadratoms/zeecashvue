<template>
  <div>
    <button @click="open = true"
      class="px-6 py-3 mt-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none">
      Phonebook
    </button>

    <div :class="`modal ${!open && 'opacity-0 pointer-events-none'
    } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`">
      <div @click="open = false" class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"></div>

      <div class="z-50 h-screen mx-auto overflow-y-auto bg-white rounded shadow-lg  md:max-w-lg">
        <!-- <div
          class="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close">
          <svg class="text-white fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
            viewBox="0 0 18 18">
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
          </svg>
          <span class="text-sm">(Esc)</span>
        </div> -->

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="px-6 py-4  h-5/6">
          <!--Title-->
          <div class="flex items-center justify-between pb-3">
            <p class="text-2xl text-black font-bold">Modal Title</p>
            <div class="z-50 cursor-pointer modal-close" @click="open = false">
              <svg class="text-black fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                viewBox="0 0 18 18">
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
              </svg>
            </div>
          </div>

          <!--Body-->
          <table class=" text-xs border border-slate-400 w-full">
            <thead class="">
              <tr>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  No</th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Name</th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Phone</th>

              </tr>
            </thead>
            <tbody class="text-black">
              <tr v-for="(contact, index) in contacts" :key="index">
                <td>{{ index }}</td>
                <td class="px-6 py-4 border-b border-gray-200  p-1 font-bold">{{ contact?.displayName }}
                </td>
                <td class="px-6 py-4 border-b border-gray-200  p-1">{{contact?.phoneNumbers[0]?.number}}</td>

              </tr>


            </tbody>
          </table>
          <p class="text-black">{{ contacts }}</p>

          <!--Footer-->
          <div class="flex justify-end pt-2">
            <button @click="open = false"
              class="p-3 px-6 py-3 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none">
              Close
            </button>
            <button @click="open = false"
              class="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none">
              Action
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    contacts: {
      type: Array as PropType<any[]>,
      default: [],
    },
  },
  data() {
    return {
      open: ref(false)
    }
  },
})
</script>

<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>