import AboutSection from "./components/AboutSection";
import ContactSection from "./components/contactSection";
import FeaturedSection from "./components/FeaturedSection";
import Footer from "./components/Footer";
import Hero from "./components/HeroSection";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 relative">
      <Navbar />
      <Hero />
      <FeaturedSection />
      <AboutSection />
      <ContactSection />
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+254716794384" // Replace with your actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.89.53 3.66 1.44 5.17L2 22l4.83-1.44A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.67 0-3.22-.51-4.55-1.37l-.32-.21-2.84.85.85-2.83-.21-.32A7.962 7.962 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm1.67-5.5l-.15-.11c-.4-.29-.79-.52-1.16-.71a3.35 3.35 0 00-1.51-.37c-.28 0-.51.08-.72.21-.21.14-.41.3-.64.47-.16.12-.31.25-.44.36-.07.06-.13.1-.19.15-.36.28-.79.5-1.3.67a5.34 5.34 0 01-1.19.2c-.44 0-.79-.08-1.1-.23-.3-.14-.58-.31-.84-.5-.05-.03-.08-.07-.11-.1-.04-.04-.05-.08-.07-.12-.02-.05-.03-.09-.03-.13a1.37 1.37 0 01.29-.95c.13-.15.29-.3.46-.47.07-.08.15-.17.24-.26l.11-.11c.15-.14.3-.28.44-.42.22-.21.47-.4.76-.56.3-.16.63-.25 1-.27.24-.02.47-.01.69.04.15.03.29.09.44.17.15.08.29.17.44.29.12.09.24.18.35.28.1.1.19.19.27.27.02.03.04.05.06.07.03.03.05.07.07.1.03.05.05.1.07.15l.04.1.03.12c.03.14.06.26.09.39.06.22.1.44.14.66.01.08.02.15.02.22.01.08.01.15.01.22v.02c0 .15-.01.31-.02.46-.03.32-.09.64-.19.97-.1.33-.23.66-.39 1l-.07.14z"/>
        </svg>
        Chat with us
      </a>
    </div>
  );
}
