import { billingToggleStyles } from "../styles/billing-toggle";

interface BillingToggleProps {
  isYearly: boolean;
  setIsYearly: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export function BillingToggle({ isYearly, setIsYearly }: BillingToggleProps) {
  return (
    <div className={billingToggleStyles.container()}>
      <span className={billingToggleStyles.label()}>Monthly Billing</span>
      <label className={billingToggleStyles.toggle()}>
        <input
          type="checkbox"
          className={billingToggleStyles.input()}
          checked={isYearly}
          onChange={() => setIsYearly((prev) => !prev)}
        />
        <div className={billingToggleStyles.track()}></div>
        <div className={billingToggleStyles.thumb()}></div>
      </label>
      <span className={billingToggleStyles.label()}>
        Yearly Billing{" "}
        <span className={billingToggleStyles.discount()}>
          -25%
        </span>
      </span>
    </div>
  );
} 