// "use client"

// import Link from "next/link"

// export default function CartButton() {
//   return (
//     <> 

//     <div>
//         <div className="mt-2 ml-2"> 
//           <Link href="/cart">
//             <button>
//                 <img src="/img/icons/cart.png" alt="cart" className="w-12" />
//             </button> 
//             </Link>
//         </div>
//     </div>

//     </>
//   )
// }





// components/CartButton.tsx
"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartButton() {
  const { totalUniqueItems } = useCart();

  return (
    <div className="relative mt-2 ml-2 md:ml-10">
      <Link href="/cart">
        <button>
          <img src="/img/icons/cart.png" alt="cart" className="w-12" />
          {totalUniqueItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalUniqueItems}
            </span>
          )}
        </button>
      </Link>
    </div>
  );
}
