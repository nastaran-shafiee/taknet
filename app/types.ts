export type PricingLevel = {
  views: string;
  price: number;
};

export const pricingLevels: PricingLevel[] = [
  { views: "10k", price: 8 },
  { views: "50k", price: 12 },
  { views: "100k", price: 16 },
  { views: "500k", price: 24 },
  { views: "1M", price: 36 },
]; 