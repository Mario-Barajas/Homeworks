export interface Price {
  tag: string;
  cost: number;
}

export interface Product {
  id: string;
  title: string;
  prices: Price[];
  photos: string[];
  description: string;
  offerDiscount: number;
}
