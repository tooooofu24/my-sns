import { Container, createStyles } from "@mantine/core";
import { format } from "date-fns";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";

import { client } from "@/client";
import { Footer } from "@/components/Footer";
import { Header, HEADER_HEIGHT } from "@/components/Header";
import { Tweet } from "@/components/Tweet/Tweet";
import { TweetType } from "@/types/TweetType";

const useStyles = createStyles((theme) => ({
  main: {
    paddingBottom: HEADER_HEIGHT,
    paddingTop: HEADER_HEIGHT,
    minHeight: "100%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    height: "100%",
    width: "100%",
    maxWidth: 500,
    gap: theme.spacing.xs,
    paddingBottom: theme.spacing.sm,
    paddingTop: theme.spacing.sm,
    paddingLeft: theme.spacing.xs,
    paddingRight: theme.spacing.xs,
  },
}));

type HomeProps = {
  tweets: TweetType[];
};

const Home: NextPage<HomeProps> = ({ tweets }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref?.current?.scrollIntoView();
  }, []);
  const { classes } = useStyles();
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
          content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=1.0"
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
      <main className={classes.main}>
        <Header />
        <Container className={classes.container}>
          {tweets.map((tweet, i) => {
            const current = new Date(tweet.createdAt);
            const prev = new Date(tweets[i - 1]?.createdAt ?? null);
            const showDate =
              format(current, "yyyy-MM-dd") != format(prev, "yyyy-MM-dd");
            return <Tweet key={tweet.id} tweet={tweet} showDate={showDate} />;
          })}
        </Container>
        <div ref={ref} />
        <Footer />
      </main>
    </>
  );
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "tweets",
    queries: { orders: "createdAt", limit: 100 },
  });

  return {
    props: {
      tweets: data.contents,
    },
  };
};

export default Home;
