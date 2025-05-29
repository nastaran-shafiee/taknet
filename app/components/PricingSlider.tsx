import { PricingLevel } from "../types";
import { pricingSliderStyles } from "../styles/pricing-slider";

interface PricingSliderProps {
  level: number;
  setLevel: (level: number) => void;
  pricingLevels: PricingLevel[];
}

export function PricingSlider({ level, setLevel, pricingLevels }: PricingSliderProps) {
  return (
    <div className={pricingSliderStyles.container()}>
      <p className={pricingSliderStyles.views()}>
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
        className={pricingSliderStyles.slider()}
      />
    </div>
  );
} 