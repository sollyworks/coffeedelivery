import { coffeeImages } from "../assets/index";

export type ProductImageKey = keyof typeof coffeeImages;

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
  image: ProductImageKey;
}
