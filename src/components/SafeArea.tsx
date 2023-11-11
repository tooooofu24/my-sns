import { memo } from "react";

export const SafeArea = memo(() => {
  return <div className="pb-[env(safe-area-inset-bottom)]" />;
});
