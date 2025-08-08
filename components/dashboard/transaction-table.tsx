import { TransactionTable } from "../reusable-table";
import { useQuery } from "@tanstack/react-query";
import { fetchTransactions } from "../../requests/transactions";
import { Transaction } from "@@/pages/api/transactions";

const columns = [
  { key: "date", label: "Date", sortable: true },
  { key: "remark", label: "Remark" },
  { key: "amount", label: "Amount" },
  { key: "currency", label: "Currency" },
  { key: "type", label: "Type" },
];

export default function TransactionTableView() {
  const { data, isLoading, error } = useQuery<Transaction[]>({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
  });

  if (isLoading) return <div>Loading transactions...</div>;
  if (error instanceof Error)
    return <div>Error loading transactions: {error.message}</div>;

  return (
    <main>
      <TransactionTable
        columns={columns}
        data={data as never}
        loading={false}
      />
    </main>
  );
}

