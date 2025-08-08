import "@@/styles/globals.css";
import Navbar from "@@/src/components/navigations/nav-bar";
import Sidebar from "@@/src/components/navigations/side-bar";
import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <Component {...pageProps} />
        </main>
      </div>
    </MantineProvider>
  );
}

