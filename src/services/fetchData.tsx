// /services/fetchProducts.ts

import axios from "axios";

// نوع داده محصولات
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  brand: string;
  image: string;
}

// تابع برای فچ محصولات بر اساس آیدی دسته‌بندی
export const fetchProductsByCategory = async (categoryId: number): Promise<Product[]> => {
  const response = await axios.get(`http://localhost:4000/categories/${categoryId}`);
  return response.data.product; // فرض میکنیم در ساختار شما، محصولات در فیلد product هستند
};
