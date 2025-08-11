import { useTranslations, useLocale } from 'next-intl';

export default function MenuItem({ item ,onOpenDetails ,hidePrice  }) {
  const t = useTranslations('');
  const locale = useLocale();
  return (
    <div className="menu-item">
      <img
        src={item.image}
        alt={item.alt}
        className="menu-item-image"
      />
      <h3 className="menu-item-title">{item.name}</h3>
      <p className="menu-item-description">{item.description}</p>
      {!hidePrice && (
        <p className="menu-item-price">{t("priceLabel")}: {item.price} {t("currency")}</p>
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
