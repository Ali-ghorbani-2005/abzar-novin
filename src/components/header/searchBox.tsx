// "use client";

// import { useState } from "react";

// export default function SearchBox() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative md:hidden">
//       {/* دکمه آیکون سرچ فقط در موبایل */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="p-2 z-20 relative"
//       >
//         <img src="/img/icons/search.png" alt="search" className="w-7" />
//       </button>

//       {/* فیلد جستجو با ترنزیشن از بالا */}
//       <div
//         className={` top-0 left-0 w-full px-1 transition-all duration-300 ${
//           isOpen ? "opacity-100 translate-y-12" : "opacity-0 -translate-y-10 pointer-events-none"
//         }`}
//       > 
//         <div className="-mt-20 bg-gray-400 w-full">
//         <input
//           type="text"
//           placeholder="...جست‌وجو کنید"
//           className="w- py-2 px-4 rounded-md border border-gray-300 shadow-md bg-white focus:outline-none"
//         /> 
//         </div>
//       </div>
//     </div>
//   );
// } 





"use client";

import { useState } from "react";

export default function SearchBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      {/* دکمه آیکون سرچ فقط در موبایل */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 z-20 relative ml-5 mt-2"
      >
        <img src="/img/icons/search.png" alt="search" className="w-11" />
      </button>

      {/* فیلد جستجو با ترنزیشن از بالا */}
      <div
         className={`fixed top-0 left-0 w-full px-2 transition-all duration-300 z-50 ${isOpen
          ? "opacity-100 translate-y-12"
          : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="bg-gray-300 rounded-md shadow-md border border-gray-300 p-3 flex items-center gap-2">
          <input
            type="text"
            placeholder="...جست‌وجو کنید"
            className="flex-1 py-2 px-4 rounded-md border border-gray-300 focus:outline-none"
          />

          {/* دکمه بستن */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-red-500 text-xl font-bold"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}


