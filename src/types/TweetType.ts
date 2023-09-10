export type TweetType = {
  id: string;
  text: string;
  images?: ImageType[];
  isReply?: boolean;
  createdAt: string;
};

export type ImageType = {
  url: string;
};
