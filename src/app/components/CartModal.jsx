"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";

export default function CartModal() {
  const { cart, totalPrice } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">سلة المشتريات</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center py-8">السلة فارغة</p>
        ) : (
          <>
            <div className="space-y-3 mb-4">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">الكمية: {item.quantity}</p>
                  </div>
                  <span className="font-semibold">{item.price} ريال</span>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold">المجموع:</span>
                <span className="font-bold">{totalPrice().toFixed(2)} ريال</span>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                إتمام الطلب
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
