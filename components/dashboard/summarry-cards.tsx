import { calculateSummary } from "@@/utils";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
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
    <span
      className={`ml-2 font-light text-sm ${
        value >= 0 ? "text-[#3f7383]" : "text-[#3f7383]"
      }`}
    >
      {value >= 0 ? "+" : ""}
      {value}%
    </span>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 space-y-6 mb-1 mt-5">
      <div className="p-6 space-y-3 lg:max-w-[250px] h-[150px] rounded-2xl bg-[#eaeff0]">
        <div className="flex items-center gap-2 justify-between text-gray-900 font-semibold text-base">
          Total Balance <HiOutlineDotsHorizontal size={25} />
        </div>
        <div className="text-3xl font-bold flex flex-col gap-2 ">
          {formatCurrency(totalBalance)} <Growth value={balanceGrowth} />
        </div>
      </div>

      <div className="p-6 space-y-3 lg:max-w-[250px] h-[150px] rounded-2xl bg-[#eaeff0]">
        <div className="flex items-center gap-2 justify-between text-gray-900 font-semibold text-base">
          Total Credits <HiOutlineDotsHorizontal size={25} />
        </div>
        <div className="text-3xl font-bold flex flex-col gap-2 ">
          {formatCurrency(totalCredits)} <Growth value={creditsGrowth} />
        </div>
      </div>

      <div className="p-6 space-y-3 lg:max-w-[250px] h-[150px] rounded-2xl bg-[#eaeff0]">
        <div className="flex items-center gap-2 justify-between text-gray-900 font-semibold text-base">
          Total Debits <HiOutlineDotsHorizontal size={25} />
        </div>
        <div className="text-3xl font-bold flex flex-col gap-2 ">
          {formatCurrency(totalDebits)} <Growth value={debitsGrowth} />
        </div>
      </div>

      <div className="p-6 space-y-3 lg:max-w-[250px] h-[150px] rounded-2xl bg-[#eaeff0]">
        <div className="flex items-center gap-2 justify-between text-gray-900 font-semibold text-base">
          Transactions <HiOutlineDotsHorizontal size={25} />
        </div>
        <div className="text-3xl font-bold flex flex-col gap-2 ">
          {totalTransactions} <Growth value={transactionsGrowth} />
        </div>
      </div>
    </div>
  );
}

