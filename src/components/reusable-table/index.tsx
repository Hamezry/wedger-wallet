// components/TransactionTable.tsx
"use client";
import { useState } from "react";
import { Loader, Text } from "@mantine/core";
import { FaCircle } from "react-icons/fa";

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
}

interface Transaction {
  [key: string]: never;
}

interface TransactionTableProps {
  columns: Column[];
  data: Transaction[];
  loading?: boolean;
}

export const TransactionTable = ({
  columns,
  data,
  loading,
}: TransactionTableProps) => {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);

  const handleSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = () => {
    if (!sortConfig) return data;
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key])
        return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key])
        return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  };

  return (
    <div className="overflow-x-auto  rounded-lg">
      <table className="w-full border-collapse">
        <thead className="">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className={`text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200 cursor-${
                  col.sortable ? "pointer" : "default"
                }`}
                onClick={() => col.sortable && handleSort(col.key)}
              >
                {col.label}
                {sortConfig?.key === col.key && (
                  <span className="ml-1 text-xs">
                    {sortConfig.direction === "asc" ? "▲" : "▼"}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-6">
                <Loader color="blue" size="sm" />
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-6 text-gray-500"
              >
                No transactions found.
              </td>
            </tr>
          ) : (
            sortedData().map((row, idx) => (
              <tr key={idx} className=" hover:bg-gray-50 transition-colors">
                {columns.map((col) => {
                  if (col.key === "type") {
                    return (
                      <td
                        key={col.key}
                        className="px-4 py-3 border-b border-gray-200"
                      >
                        <div className="flex items-center gap-2">
                          <FaCircle
                            size={8}
                            className={
                              row[col.key] === "Credit"
                                ? "text-green-500"
                                : "text-red-500"
                            }
                          />
                          <Text size="sm">{row[col.key]}</Text>
                        </div>
                      </td>
                    );
                  }
                  return (
                    <td
                      key={col.key}
                      className="px-4 py-3 text-sm text-gray-700  border-b border-gray-200"
                    >
                      {row[col.key]}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

