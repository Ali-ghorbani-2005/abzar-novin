// "use client"

// import { useCart } from "@/context/CartContext";
// import { useState } from "react";

// const Cart = () => {
//   const { cartItems, updateQuantity, removeFromCart } = useCart();
//   const [confirmId, setConfirmId] = useState<string | null>(null);

//   const handleDelete = (id: string) => {
//     if (window.confirm("آیا از حذف این محصول مطمئن هستید؟")) {
//       removeFromCart(id);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">سبد خرید شما</h2>
//       {cartItems.length === 0 ? (
//         <p>سبد خرید خالی است.</p>
//       ) : (
//         <div className="space-y-4">
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex justify-between items-center border p-4 rounded">
//               <div className="flex items-center space-x-4">
//                 <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
//                 <div>
//                   <h3 className="font-bold">{item.name}</h3>
//                   <p className="text-sm text-gray-600">{item.price} تومان</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-2">
//                 <input
//                   type="number"
//                   value={item.quantity}
//                   min={1}
//                   className="w-16 border px-2 py-1 rounded"
//                   onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
//                 />
//                 <button
//                   onClick={() => handleDelete(item.id)}
//                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                 >
//                   حذف
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;








"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [confirmId, setConfirmId] = useState<string | null>(null);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const confirmDelete = () => {
    if (confirmId) {
      removeFromCart(confirmId);
      setConfirmId(null);
    }
  };

  return (
    <div className="p-4 relative">
      <h2 className="text-xl font-bold mb-4">سبد خرید شما</h2>

      {cartItems.length === 0 ? (
        <p>سبد خرید خالی است.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={item.id || index}
              className="flex justify-between items-center border p-4 rounded"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    قیمت واحد: {item.price.toLocaleString()} تومان
                  </p>
                  <p className="text-sm text-gray-500">
                    مجموع: {(item.price * item.quantity).toLocaleString()} تومان
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  className="w-16 border px-2 py-1 rounded text-center"
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value) || 1)
                  }
                />
                <button
                  onClick={() => setConfirmId(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  حذف
                </button>
              </div>
            </div>
          ))}

          {/* ✅ کارت جمع کل */}
          <div className="mt-6 p-4 bg-gray-100 border rounded shadow text-right space-y-2">
            <p className="text-lg font-semibold">
              مجموع قیمت کل:{" "}
              <span className="text-green-600 text-xl">
                {totalPrice.toLocaleString()} تومان
              </span>
            </p>
            <p className="text-md font-medium">
              تعداد کل کالاها:{" "}
              <span className="text-blue-600 text-lg">{totalQuantity} عدد</span>
            </p>
          </div>
        </div>
      )}

      {/* ✅ Modal تأیید حذف */}
      {confirmId && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-sm">
            <h3 className="text-lg font-bold mb-4">تأیید حذف</h3>
            <p className="mb-6">آیا از حذف این محصول مطمئن هستید؟</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setConfirmId(null)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                لغو
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                حذف
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

