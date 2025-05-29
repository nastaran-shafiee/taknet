import { cva } from "class-variance-authority";

export const pricingSliderStyles = {
  container: cva("text-center"),
  views: cva("uppercase tracking-widest text-sm text-slate-500 mb-6"),
  slider: cva("w-full h-2 rounded-lg appearance-none slider-thumb mt-4", {
    variants: {
      level: {
        default: "",
      },
    },
  }),
}; 