import { featuresStyles } from "../styles/features";

export function Features() {
  return (
    <ul className={featuresStyles.list()}>
      <li className={featuresStyles.item()}>
        <span className={featuresStyles.checkmark()}>✔</span>
        Unlimited websites
      </li>
      <li className={featuresStyles.item()}>
        <span className={featuresStyles.checkmark()}>✔</span>
        100% data ownership
      </li>
      <li className={featuresStyles.item()}>
        <span className={featuresStyles.checkmark()}>✔</span>
        Email reports
      </li>
    </ul>
  );
} 