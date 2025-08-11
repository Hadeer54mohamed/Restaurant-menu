import { FiSearch } from "react-icons/fi";
import { useTranslations } from "next-intl";

export default function FilterBar({ filter, setFilter, search, setSearch }) {
  const t = useTranslations("FilterBar");

  const categories = [
    { key: "all", label: t("all") },
    { key: "meals", label: t("meals") },
    { key: "drinks", label: t("drinks") },
    { key: "appetizers", label: t("appetizers") },
    { key: "desserts", label: t("desserts") },
  ];

  return (
    <section id="menu" className="filterBarSection">
      <div className="filterButtonsContainer">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            className={`filterButton ${
              filter === cat.key ? "filterButtonActive" : "filterButtonInactive"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* حقل البحث */}
      {/*
      <div className="searchInputContainer">
        <input
          type="text"
          placeholder={t("searchPlaceholder")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="searchInput"
        />
        <span className="searchIcon">
          <FiSearch />
        </span>
      </div>
      */}
    </section>
  );
}
