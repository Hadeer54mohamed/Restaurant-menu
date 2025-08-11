import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://placehold.co/50x50?text=Logo"
            alt="شعار المطعم"
            className="h-10 w-10 rounded-full ml-3"
          />
          <h1 className="text-xl font-bold">مطعمنا اللذيذ</h1>
        </div>

        <nav className="hidden md:flex space-x-6 space-x-reverse">
          <Link href="#menu" className="hover:text-blue-200">قائمة الطعام</Link>
          <Link href="#about" className="hover:text-blue-200">عن المطعم</Link>
          <Link href="#contact" className="hover:text-blue-200">اتصل بنا</Link>
        </nav>

        <button className="md:hidden">
          {/* أيقونة الهامبرغر */}
        </button>
      </div>
    </header>
  );
}