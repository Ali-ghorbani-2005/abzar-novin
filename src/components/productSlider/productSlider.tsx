// // src/components/Slider.tsx 
// "use client"
// import { FC, useState } from "react";
// import Image from "next/image";
// import { Product } from "@/services/fetchData";

// interface SliderProps {
//   products: Product[];
// }

// const Slider: FC<SliderProps> = ({ products }) => {
//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev === products.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? products.length - 1 : prev - 1));
//   };

//   return (
//     <div className="relative w-full overflow-hidden">
//       <div
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {products.map((product) => (
//           <div key={product.id} className="min-w-full flex flex-col items-center">
//             <div className="w-64 h-64 bg-gray-200 rounded-md overflow-hidden mb-2">
//               <Image
//                 src={product.image || '/placeholder.png'}
//                 alt={product.name}
//                 width={256}
//                 height={256}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h3 className="text-lg font-bold">{product.name}</h3>
//             <p className="text-gray-700">{product.brand}</p>
//             <p className="text-green-500 font-bold">{product.price} تومان</p>
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={prevSlide}
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl font-bold bg-white rounded-full p-2 shadow"
//       >
//         ❮
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl font-bold bg-white rounded-full p-2 shadow"
//       >
//         ❯
//       </button>
//     </div>
//   );
// };

// export default Slider;
