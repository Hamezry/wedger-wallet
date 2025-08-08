import { Tabs } from "@mantine/core";
import DashboardHeader from "@@/components/dashboard/header";
import { SummaryCards } from "@@/components/dashboard/summarry-cards";
import TransactionTableView from "@@/components/dashboard/transaction-table";
import { fetchTransactions } from "../requests/transactions";
import { Transaction as summarry } from "@@/pages/api/transactions";
import { useQuery } from "@tanstack/react-query";
import { Loader, Center, Text } from "@mantine/core";

export default function HomePage() {
  const { data, isLoading, error } = useQuery<summarry[]>({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
  });

  if (isLoading)
    return (
      <Center style={{ height: 100, flexDirection: "column" }}>
        <Loader size="sm" color="blue" />
        <Text mt="sm" color="gray">
          Loading transactions...
        </Text>
      </Center>
    );
  if (error instanceof Error)
    return <div>Error loading transactions: {error.message}</div>;

  return (
    <>
      <DashboardHeader />
      <Tabs
        defaultValue="overview"
        color="#4A8B9F"
        styles={(theme) => ({
          tab: {
            fontWeight: 500,
            color: theme.colors.gray[7],
            "&[data-active]": {
              color: "#4A8B9F !important",
              fontWeight: 700,
              borderBottomColor: "#4A8B9F",
            },
          },
          tabLabel: {
            "&[data-active]": {
              color: "#4A8B9F !important",
            },
          },
          tabsList: {
            borderBottom: `2px solid ${theme.colors.gray[3]}`,
          },
        })}
        className="p-4 space-y-10"
      >
        <Tabs.List className=" space-x-4 ">
          <Tabs.Tab value="overview">Overview</Tabs.Tab>
          <Tabs.Tab value="#">Transactions</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="overview">
          <h1 className="text-lg font-semibold mb-2">Summarry</h1>
          <SummaryCards data={data as never} />
          <TransactionTableView />
        </Tabs.Panel>
      </Tabs>
    </>
  );
}

