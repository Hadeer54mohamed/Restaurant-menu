"use client";

import { CartProvider } from "./CartProvider";

export function Providers({ children }) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}
