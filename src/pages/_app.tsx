import "@/styles/global.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChakraProvider } from "@chakra-ui/react";
import { IBM_Plex_Sans_JP } from "@next/font/google";
import { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";

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

      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <main className={font.className}>
            <Component {...pageProps} />
          </main>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}
