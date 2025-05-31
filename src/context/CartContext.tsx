"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// نوع آیتم‌های سبد خرید
export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

// نوع کانتکست
type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  totalUniqueItems: number;
};

// ساخت کانتکست
const CartContext = createContext<CartContextType | undefined>(undefined);

// provider اصلی
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // لود کردن اطلاعات از localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // ذخیره‌سازی در localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // افزودن به سبد خرید
  const addToCart = (product: CartItem) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) =>
          item.id === product.id &&
          item.name === product.name &&
          item.price === product.price &&
          item.image === product.image
      );

      if (existingIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingIndex].quantity += product.quantity;
        return updatedItems;
      }

      return [...prevItems, product];
    });
  };

  // بروزرسانی تعداد
  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // حذف محصول
  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // تعداد آیتم منحصربه‌فرد
  const totalUniqueItems = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        totalUniqueItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// هوک استفاده از کانتکست
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart باید درون CartProvider استفاده شود");
  }
  return context;
};
