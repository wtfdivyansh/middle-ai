"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="flex">
      <Link href="/" className="mr-8 flex items-center space-x-2">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={50}
          height={50}
          className="rounded-md"
        />
      </Link>
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
      </nav>
    </div>
  );
}