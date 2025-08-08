import { TransactionTable } from "../reusable-table";

const columns = [
  { key: "date", label: "Date", sortable: true },
  { key: "remark", label: "Remark" },
  { key: "amount", label: "Amount" },
  { key: "currency", label: "Currency" },
  { key: "type", label: "Type" },
];

const sampleData = [
  {
    date: "2023-10-01",
    remark: "Salary",
    amount: "$3,000",
    currency: "USD",
    type: "Credit",
  },
  {
    date: "2023-10-02",
    remark: "Groceries",
    amount: "-$150",
    currency: "USD",
    type: "Debit",
  },
  {
    date: "2023-10-03",
    remark: "Gym Membership",
    amount: "-$50",
    currency: "USD",
    type: "Debit",
  },
  {
    date: "2023-10-04",
    remark: "Dinner",
    amount: "-$40",
    currency: "USD",
    type: "Debit",
  },
  {
    date: "2023-10-05",
    remark: "Movie Tickets",
    amount: "-$30",
    currency: "USD",
    type: "Debit",
  },
  {
    date: "2023-10-06",
    remark: "Rent",
    amount: "-$1,200",
    currency: "USD",
    type: "Debit",
  },
  {
    date: "2023-10-07",
    remark: "Utilities",
    amount: "-$100",
    currency: "USD",
    type: "Debit",
  },
  {
    date: "2023-10-08",
    remark: "Car Payment",
    amount: "-$400",
    currency: "USD",
    type: "Debit",
  },
  {
    date: "2023-10-09",
    remark: "Insurance",
    amount: "-$200",
    currency: "USD",
    type: "Debit",
  },
];

export default function TransactionTableView() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Transactions</h1>
      <TransactionTable
        columns={columns}
        data={sampleData as never}
        loading={false}
      />
    </main>
  );
}

