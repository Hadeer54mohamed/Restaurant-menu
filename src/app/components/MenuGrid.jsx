import MenuItem from "./MenuItem";
import EmptyState from "./EmptyState";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../services/getProducts";

export default function MenuGrid({
  onOpenDetails,
  hidePriceOnCard,
  activeFilter,
}) {
  // جلب المنتجات من API
  const { data: products, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  console.log("Products from API:", products);
  console.log("Loading state:", isLoading);
  console.log("Error state:", error);

  // حالة التحميل
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="text-lg">جاري التحميل...</div>
      </div>
    );
  }

  // حالة الخطأ
  if (error) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="text-red-500">حدث خطأ في تحميل المنتجات: {error.message}</div>
      </div>
    );
  }

  // تطبيق الفلترة فقط
  const filteredProducts = (products || []).filter((p) => {
    if (!activeFilter || activeFilter === "all") return true;

    // فلترة اعتماداً على الوصف
    if (typeof activeFilter === "object") {
      const byAr = p.description && activeFilter.name_ar && p.description === activeFilter.name_ar;
      const byEn = p.description_en && activeFilter.name_en && p.description_en === activeFilter.name_en;
      return Boolean(byAr || byEn);
    }

    // fallback لو كانت قيمة نصية قديمة
    const desc = (p.description || "").toLowerCase();
    return desc === String(activeFilter).toLowerCase();
  });

  // حالة عدم وجود منتجات
  if (!filteredProducts || filteredProducts.length === 0) {
    console.log("No products found, showing empty state");
    return <EmptyState />;
  }

  console.log(`Rendering ${filteredProducts.length} products`);

  return (
    <div className="menu-grid">
      {filteredProducts.map((item) => (
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
