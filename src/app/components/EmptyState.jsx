"use client"

import React from "react";

const EmptyState = () => {
  return (
    <div id="empty-state" className="text-center py-12">
      <img
        src="https://placehold.co/300x200?text=لا+نتائج"
        alt="رمز اليدين يشير إلى عدم وجود نتائج للبحث"
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-bold text-gray-700">
        لم نتمكن من العثور على ما تبحث عنه
      </h3>
      <p className="text-gray-500">جرب كلمات بحث أخرى أو تصفح فئة مختلفة</p>
    </div>
  );
};

export default EmptyState;
