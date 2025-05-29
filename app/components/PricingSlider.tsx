import { PricingLevel } from "../types";

interface PricingSliderProps {
  level: number;
  setLevel: (level: number) => void;
  pricingLevels: PricingLevel[];
}

export function PricingSlider({ level, setLevel, pricingLevels }: PricingSliderProps) {
  return (
    <div className="text-center">
      <p className="uppercase tracking-widest text-sm text-slate-500 mb-6">
        {pricingLevels[level].views} PAGEVIEWS
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
    </div>
  );
} 