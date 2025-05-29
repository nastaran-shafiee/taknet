import { cva } from "class-variance-authority";

export const featuresStyles = {
  list: cva("text-sm text-slate-600 space-y-2 text-center"),
  item: cva("flex justify-center items-center gap-2"),
  checkmark: cva("text-teal-400 text-lg"),
}; 