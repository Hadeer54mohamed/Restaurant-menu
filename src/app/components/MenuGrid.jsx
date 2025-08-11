import MenuItem from "./MenuItem";
import EmptyState from "./EmptyState";

export default function MenuGrid({ items, filter, search }) {
  const filtered = items.filter(i => {
    const matchesCategory = filter === "all" || i.category === filter;
    const matchesSearch = i.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) return <EmptyState />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map(item => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}