"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Zap, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";

const NAV_LINKS = [
  { name: "Trang chủ", href: "/" },
  { name: "Giới thiệu", href: "/#about" },
  { name: "Sản phẩm", href: "/products" },
  { name: "Giải pháp", href: "/#services" },
  { name: "Dự án", href: "/#projects" },
  { name: "Bảng giá", href: "/#pricing" },
  { name: "Tin tức", href: "/#blog" },
];

export function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer select-none">
      <div className="relative flex items-center justify-center">
        <Zap className="absolute -left-2 top-0 text-accent fill-accent w-5 h-5 -rotate-12" />
        <span className="text-destructive font-black text-4xl italic tracking-tighter ml-2">E</span>
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-heading font-black text-primary text-2xl tracking-widest leading-none mt-1">SOLAR</span>
        <span className="text-primary text-[0.55rem] font-bold tracking-[0.1em] uppercase mt-0.5 whitespace-nowrap">Giải pháp điện mặt trời</span>
      </div>
    </div>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { cartCount, setIsDrawerOpen } = useCart();
  
  // Nền header luôn trắng nếu không phải trang chủ
  const isHomePage = pathname === "/";
  const shouldBeWhite = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    
    // Nếu là hash link
    if (href.includes("#")) {
      const hash = href.split("#")[1];
      
      // Nếu đang ở trang chủ, smooth scroll
      if (isHomePage) {
        e.preventDefault();
        const target = document.getElementById(hash);
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
      // Nếu đang ở trang khác, để Link tự động chuyển trang rồi cuộn tới hash
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        shouldBeWhite ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={cn(
                        "text-sm font-semibold hover:text-accent transition-colors",
                        shouldBeWhite 
                          ? (isActive ? "text-accent" : "text-slate-700") 
                          : "text-white hover:text-accent drop-shadow-sm"
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsDrawerOpen(true)}
                className={cn(
                  "relative p-2 rounded-full transition-colors",
                  shouldBeWhite ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
                )}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              
              <Button className="bg-accent hover:bg-accent/90 text-white font-bold rounded-full px-6 shadow-lg shadow-accent/20">
                Nhận tư vấn
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle & Cart */}
          <div className="flex items-center gap-4 lg:hidden">
            <button 
              onClick={() => setIsDrawerOpen(true)}
              className={cn(
                "relative p-2 rounded-full",
                shouldBeWhite ? "text-slate-700" : "text-white"
              )}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button
              className={cn("p-2", shouldBeWhite ? "text-slate-900" : "text-white")}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t overflow-hidden shadow-xl"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-2 text-slate-800 font-medium border-b border-slate-100 hover:text-accent"
                >
                  {link.name}
                </Link>
              ))}
              <Button className="w-full mt-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-full">
                Nhận tư vấn miễn phí
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
