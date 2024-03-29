import axios from 'axios';
import { ref } from 'vue';

const baseUrl = import.meta.env.VITE_API_ENDPOINT;
export interface Loan {
  id: string;
  customer: any;
  amount: string;
  interest_rate: string;
  request_date: string;
  accept: string;
  accept_date: string;
  duration: string;
  status: string;
  paid: string;
  get_due_payment: Array<number>;
  disburst: string;
  total_repayment: number;
  collector: any;
}
export interface IWideTableData {
  name: string;
  email: string;
  title: string;
  title2: string;
  status: string;
  role: string;
}

const fetchCollector = () => {
  if (!Collectors.value.length) {
    axios
      .get(`${baseUrl}/staff/collectors/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        Collectors.value = response.data;
      })
      .catch((error) => {
        console.error('Error fetching collectors:', error);
      });
  }
};

const Loans = ref<Loan[]>([]);
const Collectors = ref<any[]>([]);
export function useTableData() {
  return {
    Loans,
    Collectors,
    fetchCollector,
  };
}
