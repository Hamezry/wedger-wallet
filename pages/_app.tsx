import "../styles/globals.css";
import Navbar from "@@/components/navigations/nav-bar";
import Sidebar from "@@/components/navigations/side-bar";
import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import "@mantine/core/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-4">
            <Component {...pageProps} />
          </main>
        </div>
      </MantineProvider>
    </QueryClientProvider>
  );
}

