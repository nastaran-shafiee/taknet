import { cva } from "class-variance-authority";

export const homeStyles = {
  main: cva("flex min-h-screen items-center justify-center bg-slate-100 p-4"),
  card: cva("bg-white rounded-2xl p-8 shadow-xl max-w-md w-full h-[680px] flex flex-col justify-between"),
  price: cva("text-4xl font-bold text-slate-800"),
  priceLabel: cva("text-slate-500 ml-2"),
  button: cva("w-full max-w-[200px] bg-slate-800 text-white py-3 rounded-full hover:bg-slate-900 transition cursor-pointer"),
}; 