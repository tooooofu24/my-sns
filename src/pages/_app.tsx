import "@/styles/global.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";

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

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </MantineProvider>
    </>
  );
}
