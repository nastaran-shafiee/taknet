"use client";

import { useState } from "react";
import { PricingSlider } from "./components/PricingSlider";
import { BillingToggle } from "./components/BillingToggle";
import { Features } from "./components/Features";
import { pricingLevels } from "./types";
import { homeStyles } from "./styles/home";

export default function Home() {
  const [level, setLevel] = useState<number>(2); // index in pricingLevels
  const [isYearly, setIsYearly] = useState<boolean>(false);

  const current = pricingLevels[level];
  const finalPrice = isYearly ? current.price * 0.75 : current.price;

  return (
    <main className={homeStyles.main()}>
      <div className={homeStyles.card()}>
        <div>
          <PricingSlider
            level={level}
            setLevel={setLevel}
            pricingLevels={pricingLevels}
          />

          <div className="flex items-center justify-center my-12">
            <span className={homeStyles.price()}>
              ${finalPrice.toFixed(2)}
            </span>
            <span className={homeStyles.priceLabel()}>/month</span>
          </div>

          <BillingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
        </div>

        <hr />
        <Features />

        <div className="flex justify-center items-center mb-10">
          <button className={homeStyles.button()}>
            Start my trial
          </button>
        </div>
      </div>
    </main>
  );
}
