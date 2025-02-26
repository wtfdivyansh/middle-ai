// import { LogoLarge } from "@/components/logo-large";
import Link from "next/link";
// import { GithubStars } from "./github-stars";
// import { SocialLinks } from "./social-links";
// import { StatusWidget } from "./status-widget";
import Image from "next/image";


export function Footer() {
  return (
    <footer className="w-full justify-center flex border-t px-4 md:px-6 pt-10 mb-10">
      <div className="container">
        <div className="flex justify-between items-center border-border border-b pb-10 md:pb-16 mb-12">
          <div className="flex items-center">
            <Link href="/" className="scale-50 -ml-[52px] md:ml-0 md:scale-100" >
              <Image  src="/images/logo.png" alt="middleai" width={70} height={70} />
            </Link>
            <h1 className="flex-1 text-3xl">middle.ai</h1>
          </div>

          <span className="font-normal md:text-2xl text-right">
            Run your business smarter.
          </span>
        </div>
      </div>

      {/* <h5 className="dark:text-[#161616] text-[#F4F4F3] text-[500px] leading-none text-center pointer-events-none">
        middle
      </h5> */}
    </footer>
  );
}