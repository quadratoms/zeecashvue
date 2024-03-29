import { ref } from "vue";

const isOpen = ref(false)
const customerRoute = ref<String[]>([])
const currentRoute = ref('1')

export function useSidebar() {
  return {
    isOpen
  };
}



export function useCostumerRoute() {
  return {
    customerRoute
  };
}

export function useCurrentRoute() {
  return {
    currentRoute
  };
}


