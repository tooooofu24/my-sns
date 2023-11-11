import { NextPage } from "next";

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
  return {
    props: {
      tweets: [],
    },
  };
};

export default Home;
