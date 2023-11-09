import { ReactNode } from "react";

export const TweetWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container max-w-md px-3 py-16 mx-auto">
      <div className="flex flex-col gap-4 w-full">{children}</div>
    </div>
  );
};
