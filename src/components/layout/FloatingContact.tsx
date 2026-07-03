"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle, MapPin, ArrowUp, MessageSquare } from "lucide-react";

export function FloatingContact() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 w-12 h-12 bg-white text-slate-800 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-slate-200 transition-all duration-300 z-50 hover:bg-slate-50 hover:-translate-y-1 ${
          showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Main Hotline - Bottom Left or Bottom Right */}
      <div className="fixed bottom-6 left-6 z-50 hidden sm:flex items-center gap-3">
        <a 
          href="tel:0967517968"
          className="relative flex items-center gap-3 bg-red-600 text-white px-5 py-3 rounded-full font-bold shadow-[0_4px_20px_rgba(220,38,38,0.4)] hover:bg-red-700 hover:scale-105 transition-all group"
        >
          <div className="absolute inset-0 rounded-full border border-red-400 animate-ping opacity-75" />
          <Phone className="w-5 h-5 animate-pulse" />
          <span className="tracking-wide">0967 517 968</span>
        </a>
      </div>

      {/* Floating Tools List - Right Side */}
      <div className="fixed top-1/2 -translate-y-1/2 right-4 z-50 flex flex-col gap-3">
        
        {/* Hotline Mobile (only visible on mobile on right side) */}
        <a
          href="tel:0967517968"
          className="w-12 h-12 sm:hidden bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform relative group"
        >
          <div className="absolute inset-0 rounded-full border border-red-400 animate-ping opacity-75" />
          <Phone className="w-5 h-5 animate-pulse" />
        </a>

        <a
          href="#"
          className="w-12 h-12 bg-[#0068FF] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform relative group"
        >
          <MessageCircle className="w-6 h-6" />
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900 text-white text-sm rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
            Chat Zalo
            <div className="absolute top-1/2 -translate-y-1/2 -right-1 border-t-4 border-b-4 border-l-4 border-transparent border-l-slate-900" />
          </div>
        </a>

        <a
          href="#"
          className="w-12 h-12 bg-[#00B2FF] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform relative group"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900 text-white text-sm rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
            Messenger
            <div className="absolute top-1/2 -translate-y-1/2 -right-1 border-t-4 border-b-4 border-l-4 border-transparent border-l-slate-900" />
          </div>
        </a>

        <a
          href="#"
          className="w-12 h-12 bg-[#34A853] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform relative group"
        >
          <MapPin className="w-6 h-6" />
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900 text-white text-sm rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
            Chỉ đường Google Map
            <div className="absolute top-1/2 -translate-y-1/2 -right-1 border-t-4 border-b-4 border-l-4 border-transparent border-l-slate-900" />
          </div>
        </a>

      </div>
    </>
  );
}
