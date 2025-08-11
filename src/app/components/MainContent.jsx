// components/MainContent.jsx
"use client";

import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import FilterBar from "./FilterBar";
import SearchBox from "./SearchBox";
import MenuGrid from "./MenuGrid";

// بيانات القائمة تجريبية
const menuItems = [
  {
    id: 1,
    category: "meals",
    name: "لحم مشوي",
    description: "لحم بقري مشوي مع أرز بسمتي وخضار مشوية",
    price: "45",
    image: "https://placehold.co/600x400?text=وجبة+لحم",
    alt: "طبق لحم مشوي"
  },
  {
    id: 2,
    category: "meals",
    name: "دجاج مشوي",
    description: "دجاج مشوي بصوص الليمون والأعشاب مع أرز بخاري",
    price: "35",
    image: "https://placehold.co/600x400?text=وجبة+دجاج",
    alt: "طبق دجاج مشوي"
  },
  // ... أكمل باقي العناصر
];

export default function MainContent() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  return (
    <>
      <Header />
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <FilterBar filter={filter} setFilter={setFilter} />
        <SearchBox search={search} setSearch={setSearch} />
        <MenuGrid items={menuItems} filter={filter} search={search} />
      </main>
    </>
  );
}