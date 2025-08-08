interface Transaction {
  date: string;
  remark: string;
  amount: string;
  currency: string;
  type: "Credit" | "Debit";
}

// Helper to parse amount string to number
const parseAmount = (amountStr: string) => {
  // Remove $ and commas, then parse float
  return parseFloat(amountStr.replace(/[$,]/g, ""));
};

// Calculate summaries
export function calculateSummary(transactions: Transaction[]) {
  let totalCredits = 0;
  let totalDebits = 0;

  transactions.forEach((tx) => {
    const amt = parseAmount(tx.amount);
    if (tx.type === "Credit") totalCredits += amt;
    else if (tx.type === "Debit") totalDebits += amt;
  });

  const totalBalance = totalCredits - totalDebits;
  const totalTransactions = transactions.length;

  // Placeholder growth %
  return {
    totalBalance,
    totalCredits,
    totalDebits,
    totalTransactions,
    balanceGrowth: 5,
    creditsGrowth: 3,
    debitsGrowth: -2,
    transactionsGrowth: 10,
  };
}

