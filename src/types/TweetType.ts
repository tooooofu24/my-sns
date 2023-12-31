export type TweetType = {
  id: string;
  text: string;
  images?: ImageType[];
  isReply?: boolean;
  publishedAt: string;
};

export type ImageType = {
  url: string;
};
