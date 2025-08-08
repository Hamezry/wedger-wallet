import type { NextApiRequest, NextApiResponse } from "next";

export type Transaction = {
  date: string;
  remark: string;
  amount: string;
  currency: string;
  type: "Credit" | "Debit";
};

const sampleData: Transaction[] = [
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
  {
    date: "2023-10-10",
    remark: "Freelance Project",
    amount: "$2,500",
    currency: "USD",
    type: "Credit",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Transaction[]>
) {
  res.status(200).json(sampleData);
}

