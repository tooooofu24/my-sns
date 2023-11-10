import { ThemeProvider } from "next-themes";
import { memo, ReactNode, useEffect, useState } from "react";

export const Provider = memo(({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider
      defaultTheme="system"
      disableTransitionOnChange={false}
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
});
