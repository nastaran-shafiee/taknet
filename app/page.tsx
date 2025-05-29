"use client";

import { useState } from "react";

type PricingLevel = {
  views: string;
  price: number;
};

const pricingLevels: PricingLevel[] = [
  { views: "10k", price: 8 },
  { views: "50k", price: 12 },
  { views: "100k", price: 16 },
  { views: "500k", price: 24 },
  { views: "1M", price: 36 },
];

export default function Home() {
  const [level, setLevel] = useState<number>(2); // index in pricingLevels
  const [isYearly, setIsYearly] = useState<boolean>(false);

  const current = pricingLevels[level];
  const finalPrice = isYearly ? current.price * 0.75 : current.price;

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <div className="bg-white rounded-2xl p-8 shadow-xl max-w-md w-full h-[680px] flex flex-col justify-between">
        <div className="text-center">
          <p className="uppercase tracking-widest text-sm text-slate-500 mb-6">
            {current.views} PAGEVIEWS
          </p>
          <input
            type="range"
            min={0}
            max={pricingLevels.length - 1}
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
            style={{
              background: `linear-gradient(to right, #5eead4 0%, #5eead4 ${
                (level / (pricingLevels.length - 1)) * 100
              }%, #f8fafc ${
                (level / (pricingLevels.length - 1)) * 100
              }%, #f8fafc 100%)`,
            }}
            className="w-full h-2 rounded-lg appearance-none slider-thumb mt-4"
          />

          <div className="flex items-center justify-center my-12">
            <span className="text-4xl font-bold text-slate-800 ">
              ${finalPrice.toFixed(2)}
            </span>
            <span className="text-slate-500 ml-2">/month</span>
          </div>

          <div className="flex items-center justify-center gap-4 text-sm mb-6">
            <span className="text-slate-500">Monthly Billing</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isYearly}
                onChange={() => setIsYearly((prev) => !prev)}
              />
              <div className="w-14 h-7 bg-gray-200 rounded-full peer peer-checked:bg-teal-400 transition-colors"></div>
              <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-7"></div>
            </label>
            <span className="text-slate-500 flex items-center gap-1">
              Yearly Billing{" "}
              <span className="text-red-400 text-xs bg-red-100 rounded px-1">
                -25%
              </span>
            </span>
          </div>
        </div>

        <hr />
        <ul className="text-sm text-slate-600 space-y-2 text-center">
          <li className="flex justify-center items-center gap-2">
            <span className="text-teal-400 text-lg">✔</span>
            Unlimited websites
          </li>
          <li className="flex justify-center items-center gap-2">
            <span className="text-teal-400  text-lg">✔</span>
            100% data ownership
          </li>
          <li className="flex justify-center items-center gap-2">
            <span className="text-teal-400 text-lg">✔</span>
            Email reports
          </li>
        </ul>

        <div className="flex justify-center items-center mb-10">
          <button className="w-full max-w-[200px] bg-slate-800 text-white py-3 rounded-full hover:bg-slate-900 transition cursor-pointer">
            Start my trial
          </button>
        </div>
      </div>
    </main>
  );
}
