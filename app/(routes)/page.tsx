"use client";
import AutomateReceipt from "@/components/custom/site/automate-receipt";
import { Footer } from "@/components/custom/site/footer/footer";
import StressFree from "@/components/custom/site/stressfree";

export default function Home() {
  return (
    <div className="mt-20">
      <AutomateReceipt />
      <StressFree />
      <Footer />
    </div>
  );
}
