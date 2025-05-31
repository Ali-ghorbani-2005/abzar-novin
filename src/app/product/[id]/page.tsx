// "use client";

// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { fetchProductById } from "@/services/fetchData";

// const ProductPage = () => {
//     const params = useParams();
//     const id = params?.id as string; // 👈 Force type to string (with optional chaining)

//     const [product, setProduct] = useState<any>(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         if (!id) return; // 👈 جلوگیری از اجرای fetch اگر id وجود نداشته باشد

//         fetchProductById(id)
//             .then((res) => {
//                 if (!res) throw new Error("محصولی پیدا نشد");
//                 setProduct(res);
//             })
//             .catch(() => setError("محصولی پیدا نشد"))
//             .finally(() => setLoading(false));
//     }, [id]);

//     if (loading) {
//         return (
//             <div className="bg-gray-100 py-10">
//                 <div className="max-w-2xl mx-auto px-6 space-y-6">
//                     {/* لودینگ باکس نام محصول */}
//                     <div className="bg-white border border-gray-200 rounded-xl shadow p-6 animate-pulse h-24" />

//                     {/* لودینگ تصویر محصول */}
//                     <div className="bg-white border border-gray-200 rounded-xl shadow animate-pulse h-64" />

//                     {/* لودینگ قیمت و برند */}
//                     <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow animate-pulse h-24" />

//                     {/* لودینگ توضیحات */}
//                     <div className="bg-white border border-gray-200 rounded-xl p-6 shadow animate-pulse space-y-4">
//                         <div className="h-4 bg-gray-200 rounded w-1/3"></div>
//                         <div className="h-4 bg-gray-200 rounded w-full"></div>
//                         <div className="h-4 bg-gray-200 rounded w-5/6"></div>
//                         <div className="h-4 bg-gray-200 rounded w-2/3"></div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     if (error) return <p className="text-red-500">{error}</p>;

//     return (
//         <div className="bg-gray-100 py-10">
//             <div className="max-w-2xl mx-auto px-6">
//                 {/* نام محصول و وضعیت */}
//                 <div className="bg-white border border-gray-200 rounded-xl shadow p-6 relative">
//                     <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">{product.name}</h1>
//                     <div className="absolute top-4 left-4">
//                         <div className="bg-green-100 px-3 py-1 rounded-full">
//                             <p className="text-green-600 text-sm font-semibold">موجود</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* تصویر */}
//                 <div className="mt-6 bg-white border border-gray-200 rounded-xl overflow-hidden shadow">
//                     <img
//                         src={product.image}
//                         alt={product.name}
//                         className="w-64 h-64 object-cover transition-transform duration-300 hover:scale-105 ml-20"
//                     />
//                 </div>

//                 {/* قیمت و برند */}
//                 <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
//                     <div className="text-center sm:text-right">
//                         <p className="text-sm text-gray-500">قیمت</p>
//                         <p className="text-2xl font-bold text-gray-800">{product.price.toLocaleString()} <span className="text-base font-normal">تومان</span></p>
//                     </div>
//                     <div className="text-center sm:text-left flex items-center gap-2">
//                         <span className="text-red-600 text-lg font-semibold">{product.brand}</span>
//                         <span className="text-gray-600 text-base">:برند</span>
//                     </div>
//                 </div>

//                 {/* توضیحات */}
//                 <div className="mt-6 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
//                     <p className="text-lg font-semibold text-gray-700 mb-2 text-right">توضیحات کالا</p>
//                     <p className="text-base text-right text-gray-800 leading-relaxed">{product.description}</p>
//                 </div>

//                 <div className="flex justify-center items-center mt-7">
//                     <button className="bg-gradient-to-r from-red-500 to-pink-500 w-72 h-12 rounded-full text-2xl text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
//                         افزودن به سبد خرید
//                     </button>
//                 </div>

              

//             </div>
//         </div>
//     );
// };

// export default ProductPage;




















"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchProductById } from "@/services/fetchData";
import { useCart } from "@/context/CartContext";

const ProductPage = () => {
  const params = useParams();
  const id = params?.id as string;
  const router = useRouter();

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { addToCart } = useCart();
  const [showQuantityBox, setShowQuantityBox] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!id) return;

    fetchProductById(id)
      .then((res) => {
        if (!res) throw new Error("محصولی پیدا نشد");
        setProduct(res);
      })
      .catch(() => setError("محصولی پیدا نشد"))
      .finally(() => setLoading(false));
  }, [id]);

  const handleAddToCart = () => {
    setShowQuantityBox(true);
  };

  const handleConfirm = () => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    });

    setShowQuantityBox(false);
    setQuantity(1);
    router.push("/cart");
  };

  if (loading) {
    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-2xl mx-auto px-6 space-y-6">
                {/* لودینگ باکس نام محصول */}
                <div className="bg-white border border-gray-200 rounded-xl shadow p-6 animate-pulse h-24" />

                {/* لودینگ تصویر محصول */}
                <div className="bg-white border border-gray-200 rounded-xl shadow animate-pulse h-64" />

                {/* لودینگ قیمت و برند */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow animate-pulse h-24" />

                {/* لودینگ توضیحات */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow animate-pulse space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div> 

                </div> 
                
            </div>
        </div>
    );
}

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white border border-gray-200 rounded-xl shadow p-6 relative">
          <h1 className="text-2xl font-bold text-center text-gray-800">
            {product.name}
          </h1>
          <div className="absolute top-4 left-4">
            <div className="bg-green-100 px-3 py-1 rounded-full">
              <p className="text-green-600 text-sm font-semibold">موجود</p>
            </div>
          </div>
        </div>

        {/* تصویر */}
        <div className="mt-6 bg-white border border-gray-200 rounded-xl overflow-hidden shadow">
          <img
            src={product.image}
            alt={product.name}
            className="w-64 h-64 object-cover ml-20"
          />
        </div>

        {/* قیمت و برند */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <div className="text-center sm:text-right">
            <p className="text-sm text-gray-500">قیمت</p>
            <p className="text-2xl font-bold text-gray-800">
              {product.price.toLocaleString()}{" "}
              <span className="text-base font-normal">تومان</span>
            </p>
          </div>
          <div className="text-center sm:text-left flex items-center gap-2">
            <span className="text-red-600 text-lg font-semibold">
              {product.brand}
            </span>
            <span className="text-gray-600 text-base">:برند</span>
          </div>
        </div>

        {/* توضیحات */}
        <div className="mt-6 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <p className="text-lg font-semibold text-gray-700 mb-2 text-right">
            توضیحات کالا
          </p>
          <p className="text-base text-right text-gray-800 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* دکمه افزودن */}
        <div className="flex justify-center items-center mt-7">
          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-red-500 to-pink-500 w-72 h-12 rounded-full text-2xl text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            افزودن به سبد خرید
          </button>
        </div>

        {/* کادر انتخاب تعداد */}
        {showQuantityBox && (
          <div className="mt-6 bg-white border border-gray-300 rounded-xl p-5 shadow-md">
            <p className="text-right text-gray-800 mb-3 font-semibold">
              انتخاب تعداد:
            </p>
            <div className="flex justify-between items-center">
              <button
                className="bg-red-500 text-white rounded-full w-8 h-8 text-xl"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span className="text-xl font-bold">{quantity}</span>
              <button
                className="bg-green-500 text-white rounded-full w-8 h-8 text-xl"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={handleConfirm}
                className="bg-blue-600 text-white px-6 py-2 rounded-full mt-3 font-bold hover:bg-blue-700"
              >
                تایید
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;

