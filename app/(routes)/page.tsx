"use client";
import AutomateReceipt from "@/components/custom/site/automate-receipt";
import { Footer } from "@/components/custom/site/footer/footer";
import Hero from "@/components/custom/site/hero";
import { MarqueeDemo } from "@/components/custom/site/infinite-marquee";
import IntroVideo from "@/components/custom/site/introvideo";
import StressFree from "@/components/custom/site/stressfree";

export default function Home() {
  return (
    <div className="mt-20">
      <Hero />
      <IntroVideo />
      <MarqueeDemo />
      <AutomateReceipt />
      <StressFree />
      <Footer />
    </div>
  );
}
