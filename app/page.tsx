import AboutSection from "./components/AboutSection";
import ContactSection from "./components/contactSection";
import FeaturedSection from "./components/FeaturedSection";
import Footer from "./components/Footer";
import Hero from "./components/HeroSection";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 relative">
     
      <Hero />
      <FeaturedSection />
      <AboutSection />
      <ContactSection />
     

    </div>
  );
}
