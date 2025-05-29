"use client";

import { useState } from "react";
import { PricingSlider } from "./components/PricingSlider";
import { BillingToggle } from "./components/BillingToggle";
import { Features } from "./components/Features";
import { pricingLevels } from "./types";

export default function Home() {
  const [level, setLevel] = useState<number>(2); // index in pricingLevels
  const [isYearly, setIsYearly] = useState<boolean>(false);

  const current = pricingLevels[level];
  const finalPrice = isYearly ? current.price * 0.75 : current.price;

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <div className="bg-white rounded-2xl p-8 shadow-xl max-w-md w-full h-[680px] flex flex-col justify-between">
        <div>
          <PricingSlider
            level={level}
            setLevel={setLevel}
            pricingLevels={pricingLevels}
          />

          <div className="flex items-center justify-center my-12">
            <span className="text-4xl font-bold text-slate-800">
              ${finalPrice.toFixed(2)}
            </span>
            <span className="text-slate-500 ml-2">/month</span>
          </div>

          <BillingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
        </div>

        <hr />
        <Features />

        <div className="flex justify-center items-center mb-10">
          <button className="w-full max-w-[200px] bg-slate-800 text-white py-3 rounded-full hover:bg-slate-900 transition cursor-pointer">
            Start my trial
          </button>
        </div>
      </div>
    </main>
  );
}
