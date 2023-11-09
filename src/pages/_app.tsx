import "@/styles/global.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChakraProvider } from "@chakra-ui/react";
import { M_PLUS_Rounded_1c } from "@next/font/google";
import { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";

const mPlusRounded1c = M_PLUS_Rounded_1c({
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

      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <main className={mPlusRounded1c.className}>
            <Component {...pageProps} />
          </main>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}
