import { cva } from "class-variance-authority";

export const billingToggleStyles = {
  container: cva("flex items-center justify-center gap-4 text-sm mb-6"),
  label: cva("text-slate-500"),
  toggle: cva("relative inline-flex items-center cursor-pointer"),
  input: cva("sr-only peer"),
  track: cva("w-14 h-7 bg-gray-200 rounded-full peer peer-checked:bg-teal-400 transition-colors"),
  thumb: cva("absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-7"),
  discount: cva("text-red-400 text-xs bg-red-100 rounded px-1"),
}; 