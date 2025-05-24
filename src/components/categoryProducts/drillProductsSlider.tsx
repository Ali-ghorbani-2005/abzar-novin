
"use client"
import React, { useEffect, useState } from "react";
import { fetchProductsByCategory, Product } from "@/services/fetchData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const DrillProductsSlider = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const categoryId = 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductsByCategory(categoryId);
        setProducts(data);
      } catch (err) {
        setError("خطا در دریافت محصولات");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  if (loading) {
    return ( 
      <div className="flex gap-6 ml-3 mt-4">
      <div className="border border-gray-300 p-4 rounded-lg shadow-lg w-48 animate-pulse">
        <div className="w-full h-40 bg-gray-200 rounded"></div>

        <div className="mt-4 space-y-3">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>

          <div className="flex justify-between items-center mt-2">
            <div className="h-4 bg-gray-200 rounded w-8"></div>
            <div className="h-4 bg-gray-200 rounded w-12"></div>
          </div>

          <div className="h-10 bg-gray-300 rounded mt-4"></div>
        </div>
      </div>  

      <div className="border border-gray-300 p-4 rounded-lg shadow-lg w-48 animate-pulse">
        <div className="w-full h-40 bg-gray-200 rounded"></div>

        <div className="mt-4 space-y-3">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>

          <div className="flex justify-between items-center mt-2">
            <div className="h-4 bg-gray-200 rounded w-8"></div>
            <div className="h-4 bg-gray-200 rounded w-12"></div>
          </div>

          <div className="h-10 bg-gray-300 rounded mt-4"></div>
        </div>
      </div> 
      </div>

    );
  }


  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-right">دریل</h2>
      <Swiper spaceBetween={16} slidesPerView={2} loop={true}>
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="border border-gray-300 p-4 rounded-lg shadow-lg w-48">
              <div>
                <img src={product.image} alt="" className="w-full h-40 object-cover" />
              </div>
              <div className="text-right mt-4">
                <h3 className="font-semibold">{product.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-lg">ریال</p>
                  <p className="text-lg text-gray-700 font-bold">{product.price}</p>
                </div>
                <button className="bg-red-500 w-full mt-4 text-white text-xl rounded-lg py-2">مشاهده</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DrillProductsSlider;
