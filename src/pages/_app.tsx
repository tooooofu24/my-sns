import "@/styles/global.css";

import { AppProps } from "next/app";
import { IBM_Plex_Sans_JP } from "next/font/google";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";

import { Provider } from "@/components/Provider";

const font = IBM_Plex_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <QueryClientProvider client={queryClient}>
        <Provider>
          <main className={font.className}>
            <Component {...pageProps} />
          </main>
        </Provider>
      </QueryClientProvider>
    </>
  );
}
