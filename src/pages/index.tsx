import { NextPage } from "next";

import { client } from "@/client";
import { MainPage } from "@/components/MainPage";
import { TweetType } from "@/types/TweetType";

export type HomeProps = {
  tweets: TweetType[];
};

const Home: NextPage<HomeProps> = ({ tweets }) => {
  return <MainPage tweets={tweets} />;
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  // if (process.env.ENV === "local") {
  //   return {
  //     props: {
  //       tweets: fakeTweets,
  //     },
  //   };
  // }

  const data = await client.get({
    endpoint: "tweets",
    queries: { orders: "-createdAt", limit: 100 },
  });

  const tweets = data.contents;
  tweets.reverse();

  return {
    props: {
      tweets,
    },
  };
};

export default Home;
