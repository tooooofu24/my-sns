import { ReactNode } from "react";

export const DateBadge = ({ children }: { children: ReactNode }) => {
  return <div className="badge">{children}</div>;
};
