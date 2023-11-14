import { NextPage } from "next";
import Head from "next/head";
import { lazy, Suspense } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SafeArea } from "@/components/SafeArea";
import { TweetType } from "@/types/TweetType";

const TweetWrapper = lazy(() => import("@/components/Tweet/TweetWrapper"));

type MainPageProps = {
  tweets: TweetType[];
};

export const MainPage: NextPage<MainPageProps> = ({ tweets }) => {
  return (
    <>
      <Head>
        <title>千葉陶也 BLOG</title>
        <meta
          name="description"
          content="LINEのチャット風なブログ。誰でも匿名で返信ができます。"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=5.0 user-scalable=no"
        />

        <meta property="og:url" content="https://toya-blog.vercel.app" />
        <meta property="og:title" content="千葉陶也 BLOG" />
        <meta
          property="og:description"
          content="LINEのチャット風なブログ。誰でも匿名で返信ができます。"
        />
        <meta
          property="og:image"
          content="https://toya-blog.vercel.app/avatar.jpg"
        />
        <meta property="og:site_name" content="千葉陶也 BLOG" />
        <meta property="og:locale" content="ja_JP" />
      </Head>
      <>
        <Header />
        <Suspense fallback={null}>
          <TweetWrapper tweets={tweets} />
        </Suspense>
        <SafeArea />
        <Footer />
      </>
    </>
  );
};
