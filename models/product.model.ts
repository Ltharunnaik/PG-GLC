export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  sku: string;
  categories: string[];
  images: string[];
  inStock: boolean;
  reviews?: {
    rating: number;
    count: number;
  };
}