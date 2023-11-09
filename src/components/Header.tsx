import Link from "next/link";

import { ThemeButton } from "@/components/ThemeButton";

export function Header() {
  return (
    <div className="navbar fixed bg-base-100 z-10">
      <div className="container max-w-md mx-auto">
        <div className="flex justify-between w-full">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            千葉陶也
          </Link>
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}
