"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(item) {
    setCart(prev => {
      const existing = prev.find(i => i.name === item.name);
      if (existing) {
        return prev.map(i =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }

  function totalItems() {
    return cart.reduce((sum, i) => sum + i.quantity, 0);
  }

  function totalPrice() {
    return cart.reduce((sum, i) => sum + parseFloat(i.price) * i.quantity, 0);
  }

  return (
    <CartContext.Provider value={{ cart, addItem, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}