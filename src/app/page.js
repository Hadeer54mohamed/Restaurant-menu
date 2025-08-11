// app/page.jsx
import MainContent from "./components/MainContent";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CartButton from "./components/CartButton";
import CartModal from "./components/CartModal";

export default function HomePage() {
  return (
    <>
      <MainContent />
      <About />
      <Contact />
      <Footer />
      <CartButton />
      <CartModal />
    </>
  );
}