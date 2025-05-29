interface BillingToggleProps {
  isYearly: boolean;
  setIsYearly: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export function BillingToggle({ isYearly, setIsYearly }: BillingToggleProps) {
  return (
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
  );
} 