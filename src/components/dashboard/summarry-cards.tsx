import { calculateSummary } from "@@/utils";
import React from "react";

export interface Transaction {
  date: string;
  remark: string;
  amount: string;
  currency: string;
  type: "Credit" | "Debit";
}

interface SummaryProps {
  data: Transaction[];
}

export function SummaryCards({ data }: SummaryProps) {
  const {
    totalBalance,
    totalCredits,
    totalDebits,
    totalTransactions,
    balanceGrowth,
    creditsGrowth,
    debitsGrowth,
    transactionsGrowth,
  } = calculateSummary(data);

  // Helper to format number with commas and $ sign
  const formatCurrency = (num: number) =>
    `$${num.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  // Helper to show growth with + or - and color
  const Growth = ({ value }: { value: number }) => (
    <span className={`ml-2 ${value >= 0 ? "text-green-600" : "text-red-600"}`}>
      ({value >= 0 ? "+" : ""}
      {value}%)
    </span>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div className="p-4 max-w-[250px] h-[150px] rounded bg-[#eaeff0]">
        <div className="text-gray-500 text-sm">Total Balance</div>
        <div className="text-xl font-bold flex items-center">
          {formatCurrency(totalBalance)} <Growth value={balanceGrowth} />
        </div>
      </div>

      <div className="p-4 max-w-[250px] h-[150px] rounded bg-[#eaeff0]">
        <div className="text-gray-500 text-sm">Total Credits</div>
        <div className="text-xl font-bold flex items-center">
          {formatCurrency(totalCredits)} <Growth value={creditsGrowth} />
        </div>
      </div>

      <div className="p-4 max-w-[250px] h-[150px] rounded bg-[#eaeff0]">
        <div className="text-gray-500 text-sm">Total Debits</div>
        <div className="text-xl font-bold flex items-center">
          {formatCurrency(totalDebits)} <Growth value={debitsGrowth} />
        </div>
      </div>

      <div className="p-4 max-w-[250px] h-[150px] rounded bg-[#eaeff0]">
        <div className="text-gray-500 text-sm">Transactions</div>
        <div className="text-xl font-bold flex items-center">
          {totalTransactions} <Growth value={transactionsGrowth} />
        </div>
      </div>
    </div>
  );
}

