// src/products/interfaces/product.interface.ts

export interface Category {
  id: number;
  imgCoffee: string;
  title: string;
}

export interface Location {
  id: number;
  imgCafe: string;
  title: string;
  address: string;
  workingTime: string;
}

export interface ProductSummary {
  id: string;
  img: string;
  title: string;
  amount: number;
  category: Category;
  location: Location;
}

export interface ProductDetail extends ProductSummary {
  description: string;
  size: string[];
  customize: {
    milk: string[];
    cream: string[];
    syrup: string[];
  };
}
