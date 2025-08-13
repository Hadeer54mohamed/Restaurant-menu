"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import FilterBar from "./FilterBar";
import MenuGrid from "./MenuGrid";
import { useTranslations, useLocale } from "next-intl";

function ItemDetailsModal({ item, onClose }) {
  const t = useTranslations("");
  const locale = useLocale();

  // إغلاق بـ ESC + منع تمرير الصفحة
  useEffect(() => {
    if (!item) return;
    
    const onEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = old;
    };
  }, [onClose, item]);

  if (!item) return null;

  const displayName = locale === "ar" ? item.name : (item.name_en || item.name);
  const displayDescription = locale === "ar" ? item.description : (item.description_en || item.description);
  const displayType = locale === "ar" ? item.type : (item.type_en || item.type);

  return (
    <div
    className="modal-backdrop"
    onClick={onClose}
    role="dialog"
    aria-modal="true"
  >
    <div
      className="modal-container"
      onClick={(e) => e.stopPropagation()}
    >
      {/* زر الإغلاق */}
      <button
        type="button"
        onClick={onClose}
        aria-label={locale === 'ar' ? 'إغلاق' : 'Close'}
        className="modal-close-btn"
      >
        &times;
      </button>
  
      {/* صورة المنتج */}
      <div className="modal-image-section">
        <img
          src={item.image || "/images/food.jpg"}
          alt={displayName}
          className="modal-image"
          onError={(e) => { e.currentTarget.src = '/images/food.jpg'; }}
        />
      </div>
  
      {/* تفاصيل المنتج */}
      <div className="modal-details">
        <div>
          <h2 className="modal-title">{displayName}</h2>
  
          {displayType && (
            <p className="modal-type">
              {locale === "ar" ? "النوع:" : "Type:"} {displayType}
            </p>
          )}
  
          {displayDescription && (
            <p className="modal-description">{displayDescription}</p>
          )}
  
          {/* الأحجام والأسعار */}
          {item.fullData?.sizes?.length > 0 && (
            <div className="modal-sizes-list">
              {item.fullData.sizes.map((size, index) => (
                <div key={index} className="modal-size-item">
                  <span className="modal-size-name">
                    {locale === "ar" ? size.size_ar : (size.size_en || size.size_ar)}
                  </span>
                  <div className="modal-price-group">
                    {size.offer_price && (
                      <span className="modal-offer-price">
                        {size.offer_price} {t("currency")}
                      </span>
                    )}
                    <span className={`modal-price ${size.offer_price ? "modal-price-old" : ""}`}>
                      {size.price} {t("currency")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
  
        {/* السعر الافتراضي */}
        {item.price && !item.fullData?.sizes && (
          <div className="modal-single-price">
            {item.price} {t("currency")}
          </div>
        )}
      </div>
    </div>
  </div>
  
  );
}


export default function MainContent() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState("all");
  const t = useTranslations("");

  const openDetails = (item) => {
    console.log("Opening details for item:", item);
    setSelectedItem(item);
  };

  const closeDetails = () => {
    setSelectedItem(null);
  };

  console.log("MainContent rendering");

  return (
    <>
      <Header />
      <Hero />
      <main className="min-h-screen container mx-auto px-4 py-8">
      <FilterBar
        filter={filter}
        setFilter={setFilter}
      />
      {/*   <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">قائمة الطعام</h2>
          <p className="text-gray-600">أشهى المأكولات وألذ المشروبات</p>
        </div> */}
        <MenuGrid 
          onOpenDetails={openDetails}
          hidePriceOnCard={true}
          activeFilter={filter}
        />
      </main>
      <ItemDetailsModal item={selectedItem} onClose={closeDetails} />
    </>
  );
}