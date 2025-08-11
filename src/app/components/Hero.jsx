export default function Hero() {
  return (
    <section className="bg-blue-700 text-white py-16 animate-fadeIn">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">أهلاً بكم في مطعمنا</h2>
        <p className="text-xl mb-8">أشهى المأكولات وألذ المشروبات بأيدي خبراء الطهي</p>
        <a href="#menu" className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-100 transition">
          تصفح القائمة
        </a>
      </div>
    </section>
  );
}