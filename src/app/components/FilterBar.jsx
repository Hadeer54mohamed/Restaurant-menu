export default function FilterBar({ filter, setFilter }) {
    const categories = [
      { key: "all", label: "الكل" },
      { key: "meals", label: "الوجبات" },
      { key: "drinks", label: "المشروبات" },
      { key: "appetizers", label: "المقبلات" },
      { key: "desserts", label: "الحلويات" },
    ];
  
    return (
      <div className="flex flex-wrap justify-center mb-6 gap-2">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            className={`px-4 py-2 rounded-full transition
              ${filter === cat.key
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"}`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    );
  }