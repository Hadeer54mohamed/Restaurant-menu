import { useTranslations, useLocale } from 'next-intl';

export default function MenuItem({ item, onOpenDetails, hidePrice }) {
  const t = useTranslations('');
  const locale = useLocale();
  
  console.log("MenuItem rendering with item:", item);
  
  // Check if item exists and has required properties
  if (!item || !item.name) {
    console.log("MenuItem: Invalid item, returning null");
    return null;
  }
  
  // تحديد النص حسب اللغة
  const displayName = locale === 'ar' ? item.name : (item.name_en || item.name);
  const displayDescription = locale === 'ar' ? item.description : (item.description_en || item.description);
  const displayType = locale === 'ar' ? item.type : (item.type_en || item.type);
  
  // الحصول على السعر المخفض إذا كان متوفراً
  const hasOfferPrice = item.fullData?.sizes?.some(size => size.offer_price);
  const firstSize = item.fullData?.sizes?.[0];
  
  return (
    <div className="menu-item">
      <img
        src={item.image || '/images/food.jpg'}
        alt={displayName}
        className="menu-item-image"
        onError={(e) => {
          e.target.src = '/images/food.jpg';
        }}
      />
      <h3 className="menu-item-title">{displayName}</h3>
      <p className="menu-item-description">{displayDescription || ''}</p>
      {!hidePrice && (item.price || firstSize?.price) && (
        <div className="menu-item-price-container">
          {hasOfferPrice && firstSize?.offer_price && (
            <span className="menu-item-offer-price">
              {firstSize.offer_price} {t("currency")}
            </span>
          )}
          <span className="menu-item-price">
            {t("priceLabel")}: {firstSize?.price || item.price} {t("currency")}
          </span>
        </div>
      )}
      <button
        onClick={() => onOpenDetails(item)}
        className="menu-item-button"
      >
        {t('detailsbtn')}
      </button>
    </div>
  );
}
