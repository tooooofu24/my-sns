import { ReactNode } from "react";

export const Time = ({ children }: { children: ReactNode }) => {
  return <time className="text-xs opacity-70 py-1">{children}</time>;
};
