import Link from "next/link";
import Logo from "../../logo";
import NoiseBg from "../../noise-bg";
import { GithubStars } from "./github-star";
import { SocialLinks } from "./social-links";
import { SubscribeInput } from "./subscribe-input";

export function Footer() {
  return (
    <footer className="relative w-full flex flex-col items-center border-t px-4 md:px-6 pt-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none h-full">
        <NoiseBg
          patternSize={150}
          patternScaleX={3}
          patternScaleY={5}
          patternRefreshInterval={5}
          patternAlpha={15}
        />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center border-b pb-4">
          <div className="flex items-start justify-center flex-col">
            <div className="flex items-center">
              <Logo size="lg" />
            </div>
          </div>

          <span className="font-semibold text-lg md:text-2xl text-center md:text-right">
            Smart, Secure, and Seamless Deals.
          </span>
        </div>
        <div className="flex flex-col md:flex-row w-full mt-4">
          <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:w-6/12 justify-between leading-8">
            <div>
              <span className="font-medium">Features</span>
              <ul>
                <li className="transition-colors text-[#878787]">
                  <Link href="/overview">Overview</Link>
                </li>
                <li className="transition-colors text-[#878787]">
                  <Link href="/inbox">Inbox</Link>
                </li>
                <li className="transition-colors text-[#878787]">
                  <Link href="/vault">Vault</Link>
                </li>
                <li className="transition-colors text-[#878787]">
                  <Link href="/tracker">Tracker</Link>
                </li>
                <li className="transition-colors text-[#878787]">
                  <Link href="/invoice">Invoice</Link>
                </li>
                <li className="transition-colors text-[#878787]">
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li className="transition-colors text-[#878787]">
                  <Link href="/engine">Engine</Link>
                </li>
                <li className="transition-colors text-[#878787]">
                  <Link href="/download">Download</Link>
                </li>
              </ul>
            </div>

            <div>
              <span>Resources</span>
              <ul>
                <li className="transition-colors text-[#878787]">
                  <Link href="https://git.new/midday">Github</Link>
                </li>
                <li className="transition-colors text-[#878787]">
                  <Link href="/support">Support</Link>
                </li>
                <li className="transition-colors text-[#878787]">
                  <Link href="/policy">Privacy policy</Link>
                </li>
                <li className="transition-colors text-[#878787]">
                  <Link href="/terms">Terms and Conditions</Link>
                </li>
                <li className="transition-colors text-[#878787]">
                  <Link href="/branding">Branding</Link>
                </li>
                <li className="transition-colors text-[#878787]">
                  <Link href="/feature-request">Feature Request</Link>
                </li>
              </ul>
            </div>

            <div>
              <span>Company</span>
              <ul>
                <li className="transition-colors text-[#878787]">
                  <Link href="/story">Story</Link>
                </li>
                <li className="transition-colors text-[#878787]">
                  <Link href="/updates">Updates</Link>
                </li>
                <li className="transition-colors text-[#878787]">
                  <Link href="/open-startup">Open startup</Link>
                </li>
                <li className="transition-colors text-[#878787]">
                  <Link href="/oss-friends">OSS friends</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:w-6/12 flex mt-8 md:mt-0 md:justify-end">
            <div className="flex md:items-end flex-col">
              <div className="flex items-start md:items-center flex-col md:flex-row space-y-6 md:space-y-0 mb-8">
                <GithubStars />
                <SocialLinks />
              </div>

              <div className="mb-8">
                <SubscribeInput />
              </div>
              <div className="md:mr-0 mt-auto mr-auto">
                {/* <StatusWidget /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Large Text - Closer to Border */}
      <div className="hidden lg:flex w-full items-center justify-center overflow-hidden leading-none">
        <h1 className="font-bold text-[260px] tracking-wide text-muted text-center translate-y-1/3">
          Middle-Ai
        </h1>
      </div>
    </footer>
  );
}