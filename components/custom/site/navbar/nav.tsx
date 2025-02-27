"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../logo";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="flex">
      <div className="mr-8">
      <Logo/>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
        <Link
          href="/about"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/about")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          About
        </Link>
        <Link
          href="/features"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/features")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Features
        </Link>
        <Link
          href="/pricing"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/pricing")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Pricing
        </Link>
      </nav>
    </div>
  );
}