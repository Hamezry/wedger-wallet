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
  [key: string]: never; // allow any keys with values
}

interface TransactionTableProps {
  columns: Column[];
  data: Transaction[];
  loading?: boolean;
}

const SortArrow = ({
  direction,
  active,
}: {
  direction: "asc" | "desc";
  active: boolean;
}) => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      opacity: active ? 1 : 0.4,
      transform: direction === "desc" ? "rotate(180deg)" : undefined,
      transition: "opacity 0.2s",
      marginBottom: direction === "asc" ? 2 : 0,
      marginTop: direction === "desc" ? 2 : 0,
    }}
  >
    <path
      d="M2.86274 0.25C1.65111 0.25 1.04529 0.25 0.764766 0.489594C0.521356 0.697486 0.392181 1.00934 0.417296 1.32846C0.446241 1.69624 0.874618 2.12462 1.73137 2.98137L3.86863 5.11863C4.26465 5.51465 4.46265 5.71265 4.69098 5.78684C4.89183 5.8521 5.10817 5.8521 5.30902 5.78684C5.53735 5.71265 5.73535 5.51465 6.13137 5.11863L8.26863 2.98137C9.12538 2.12462 9.55376 1.69624 9.5827 1.32846C9.60782 1.00934 9.47864 0.697486 9.23523 0.489594C8.95471 0.25 8.34889 0.25 7.13726 0.25H2.86274Z"
      fill="#15272D"
      fillOpacity="0.62"
    />
  </svg>
);

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

  // Widths decreasing for first 4 columns, fallback 10%
  const getColumnWidth = (index: number) => {
    switch (index) {
      case 0:
        return "30%";
      case 1:
        return "25%";
      case 2:
        return "20%";
      case 3:
        return "15%";
      default:
        return "10%";
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg">
      <table
        className="w-full"
        style={{
          borderCollapse: "separate",
          borderSpacing: "0 8px",
        }}
      >
        <thead>
          <tr className="">
            {columns.map((col, idx) => {
              const isSorted = sortConfig?.key === col.key;
              return (
                <th
                  key={col.key}
                  onClick={() => col.sortable && handleSort(col.key)}
                  className={`text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200 ml-10 cursor-${
                    col.sortable ? "pointer" : "default"
                  } select-none`}
                  style={{
                    paddingBottom: "0.75rem",
                    width: getColumnWidth(idx),
                  }}
                >
                  <div className="flex items-center">
                    {col.label}
                    <span
                      className={`ml-1 flex flex-col leading-[0.6] ${
                        col.sortable
                          ? isSorted
                            ? "text-gray-900"
                            : "text-gray-400"
                          : "text-gray-300"
                      }`}
                    >
                      <SortArrow
                        direction="asc"
                        active={isSorted && sortConfig?.direction === "asc"}
                      />
                    </span>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-6"
                style={{ paddingTop: "0.75rem" }}
              >
                <Loader color="blue" size="sm" />
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-6 text-gray-500"
                style={{ paddingTop: "0.75rem" }}
              >
                No transactions found.
              </td>
            </tr>
          ) : (
            sortedData().map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition-colors">
                {columns.map((col, idx2) => {
                  const width = getColumnWidth(idx2);
                  if (col.key === "type") {
                    return (
                      <td
                        key={col.key}
                        className="px-4 py-3 border-b border-gray-200"
                        style={{ paddingTop: "0.75rem", width }}
                      >
                        <div className="flex justify-center w-20 p-1 rounded-3xl items-center bg-[#eaeff0] text-center gap-1">
                          <FaCircle
                            size={8}
                            className={
                              row[col.key] === "Credit"
                                ? "text-[#087a2e]"
                                : "text-[#c6381a]"
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
                      className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200"
                      style={{ paddingTop: "0.75rem", width }}
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

