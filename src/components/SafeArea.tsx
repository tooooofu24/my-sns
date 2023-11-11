import { memo } from "react";

export const SafeArea = memo(({ children }: { children?: React.ReactNode }) => {
  return <div className="pb-[env(safe-area-inset-bottom)]">{children}</div>;
});
