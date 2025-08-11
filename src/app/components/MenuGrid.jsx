import MenuItem from "./MenuItem";
import EmptyState from "./EmptyState";

export default function MenuGrid({ items, filter, search, onOpenDetails, hidePriceOnCard }) {
  const filtered = items.filter(i => {
    const matchesCategory = filter === "all" || i.category === filter;
    const matchesSearch = i.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) return <EmptyState />;

  return (
    <div className="menu-grid">    
      {filtered.map(item => (
        <MenuItem
          key={item.id}
          item={item}
          onOpenDetails={onOpenDetails}
          hidePrice={hidePriceOnCard} 
        />
      ))}
    </div>
  );
}
