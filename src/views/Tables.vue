<template>
  <div v-show="name==route" v-for="(route, index) in customerRoute" :key="index">
    <!-- <customers /> -->
     <Customers :loan="loans.find(x => x.id==route)"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

import Customers from "./Customers.vue";
import { useCostumerRoute, useCurrentRoute, useSidebar } from "../hooks/useSidebar";
import { Loan, useTableData } from '../hooks/useTableData';
import router from "../router";
// import Customer from "./Customer.vue";
// import Customer from '../components/Customer.vue';
// // import Customer from "../components/Customer.vue";


export default defineComponent({
    // components: { Aaaaaaa },
    // components: { Customers },
    data() {
        return {
            customerRoute: useCostumerRoute().customerRoute,
            currentRoute: useCurrentRoute().currentRoute,
            tabitem: "collection",
            loans: useTableData().Loans
        };
    },
    methods: {
        hello() {
            console.log(router.currentRoute.value.params);
        },
        switchtab(tabitem: string) {
            this.tabitem = tabitem;
        }
    },
    computed: {
        name() {
            return router.currentRoute.value.params?.loanRef;
        }
    },
    components: { Customers }
})
</script>


