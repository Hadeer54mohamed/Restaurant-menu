"use client";

import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import FilterBar from "./FilterBar";
import MenuGrid from "./MenuGrid";
import { useTranslations } from "next-intl";

const menuItems = [
  {
    id: 1,
    category: "meals",
    name: "لحم مشوي",
    description: "لحم بقري مشوي مع أرز بسمتي وخضار مشوية",
    price: "200",
    image: "images/food.jpg",
    alt: "طبق لحم مشوي مع أرز وخضار جانبية"
  },
  {
    id: 2,
    category: "meals",
    name: "دجاج مشوي",
    description: "دجاج مشوي بصوص الليمون والأعشاب مع أرز بخاري",
    price: "200",
    image: "images/food.jpg",
    alt: "دجاج مشوي مع صوص خاص وأرز"
  },
  {
    id: 3,
    category: "drinks",
    name: "عصير ليمون",
    description: "عصير ليمون طازج بالنعناع والثلج",
    price: "50",
    image: "images/food.jpg",
    alt: "كأس كبير من عصير الليمون المنعش مع ثلج وأوراق نعناع"
  },
  {
    id: 4,
    category: "drinks",
    name: "قهوة عربية",
    description: "قهوة عربية أصيلة مع الهيل والزعفران",
    price: "30",
    image: "images/food.jpg",
    alt: "فنجان قهوة عربية مع حبة هيل وزعفران"
  },
  {
    id: 5,
    category: "appetizers",
    name: "سلطة خضراء",
    description: "خضروات طازجة مع زيت الزيتون وعصير الليمون",
    price: "50",
    image: "images/food.jpg",
    alt: "طبق سلطة خضراء طازجة مع طماطم وخيار وزيتون"
  },
  {
    id: 6,
    category: "desserts",
    name: "كنافة بالقشدة",
    description: "كنافة هشة محشوة بالقشدة الطازجة",
    price: "100",
    image: "images/food.jpg",
    alt: "طبق كنافة بالقشدة ومزينة بالفستق الحلبي"
  },
  {
    id: 7,
    category: "desserts",
    name: "بسبوسة",
    description: "بسبوسة محلية الصنع مع صوص الشوكولاتة",
    price: "100",
    image: "images/food.jpg",
    alt: "قطع بسبوسة مثلثة مع لوز محمص"
  }
];

function ItemDetailsModal({ item, onClose }) {
  if (!item) return null;
  const t = useTranslations("");

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close modal"
        >
          &times;
        </button>

        <img
          src={item.image}
          alt={item.alt}
          className="modal-image"
        />

        <h2 className="modal-title">{item.name}</h2>
        <p className="modal-description">{item.description}</p>
        <p className="modal-price">{t("priceLabel")}: {item.price} {t("currency")}</p>
        </div>
    </div>
  );
}

export default function MainContent() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const openDetails = (item) => {
    setSelectedItem(item);
  };

  const closeDetails = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <Header />
      <Hero />
      <main className="min-h-screen container mx-auto px-4 py-8">
        <FilterBar filter={filter} setFilter={setFilter} />
        <MenuGrid
          items={menuItems}
          filter={filter}
          search={search}
          onOpenDetails={openDetails}
          hidePriceOnCard={true}
        />
      </main>
      <ItemDetailsModal item={selectedItem} onClose={closeDetails} />
    </>
  );
}