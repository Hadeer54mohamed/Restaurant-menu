import { useCart } from "./CartProvider";

export default function MenuItem({ item }) {
  const { addItem } = useCart();

  return (
    <div className="menu-item bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <img src={item.image} alt={item.alt} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{item.name}</h3>
        <p className="text-gray-600 mb-3">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold">{item.price} ر.س</span>
          <button
            onClick={() => addItem({ name: item.name, price: item.price })}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
          >
            أضف للسلة
          </button>
        </div>
      </div>
    </div>
  );
}