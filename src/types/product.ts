import { Category } from "./categoty";

export class Product {
  id: number;
  title: string;
  price: number;
  descriptions: string;
  category: Category;
  images: string[];
}
