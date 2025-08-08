import axios from "axios";
import type { Transaction } from "../pages/api/transactions";

export const fetchTransactions = async (): Promise<Transaction[]> => {
  const response = await axios.get<Transaction[]>("/api/transactions");
  return response.data;
};

