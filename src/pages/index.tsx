import { Container, createStyles } from "@mantine/core";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";

import { client } from "@/client";
import { Footer, FOOTER_HEIGHT } from "@/components/Footer";
import { Header, HEADER_HEIGHT } from "@/components/Header";
import { Tweet } from "@/components/Tweet/Tweet";
import { TweetType } from "@/types/TweetType";

const useStyles = createStyles((theme) => ({
  main: {
    paddingBottom: FOOTER_HEIGHT,
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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.main}>
        <Header />
        <Container className={classes.container}>
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
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
