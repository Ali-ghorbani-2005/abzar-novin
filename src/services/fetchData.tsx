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




export async function fetchProductById(id: string) {
  try {
    // گرفتن کل دسته‌ها با محصولات‌شون
    const response = await fetch('http://localhost:4000/categories');
    if (!response.ok) throw new Error("خطا در دریافت دسته‌بندی‌ها");
    const categories = await response.json();

    // جستجو در دسته‌ها برای محصول با id مشخص
    for (const category of categories) {
      const product = category.product.find((p: any) => p.id.toString() === id);
      if (product) return product;
    }
    return null; // اگر محصولی پیدا نشد
  } catch (error) {
    console.error(error);
    return null;
  }
}


