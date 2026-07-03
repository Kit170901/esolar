"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "../layout/Header";
import { solarImages } from "@/data/solarImages";
import { SolarImage } from "../ui/SolarImage";

const HERO_SLIDES = [
  {
    id: 1,
    title: "GIẢI PHÁP ĐIỆN MẶT TRỜI CHO GIA ĐÌNH & DOANH NGHIỆP",
    description: "Tối ưu chi phí điện hàng tháng, chủ động nguồn năng lượng sạch, vận hành bền vững.",
    image: solarImages.hero[0]
  },
  {
    id: 2,
    title: "HỆ THỐNG HYBRID KẾT HỢP PIN LƯU TRỮ",
    description: "Nguồn điện dự phòng ổn định, phù hợp cho gia đình, văn phòng, nhà xưởng và khu vực cần điện liên tục.",
    image: solarImages.hero[1]
  },
  {
    id: 3,
    title: "THI CÔNG ĐIỆN MẶT TRỜI NHÀ XƯỞNG",
    description: "Giải pháp công suất lớn, tối ưu sản lượng, giảm chi phí vận hành cho doanh nghiệp.",
    image: solarImages.hero[2]
  },
  {
    id: 4,
    title: "BẢO TRÌ & VỆ SINH HỆ THỐNG SOLAR",
    description: "Kiểm tra hiệu suất, vệ sinh tấm pin, bảo trì inverter và đảm bảo hệ thống hoạt động ổn định.",
    image: solarImages.hero[3]
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 group pt-20 lg:pt-0">
      
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <SolarImage 
              src={HERO_SLIDES[currentSlide].image} 
              alt="E Solar Background" 
              className="w-full h-[100vh] object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Gradient Overlay: Dark on left, transparent on right */}
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, rgba(5,15,35,0.88) 0%, rgba(5,15,35,0.55) 45%, rgba(5,15,35,0.25) 100%)' }} />
      </div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl lg:max-w-4xl pt-10 md:pt-0">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 hidden md:block"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2.5 rounded-xl inline-block shadow-lg">
              <Logo />
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-accent tracking-widest mb-3 uppercase drop-shadow-md">
                E SOLAR - GIẢI PHÁP ĐIỆN MẶT TRỜI TOÀN DIỆN
              </h2>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6 uppercase font-heading drop-shadow-xl" style={{ fontStretch: 'condensed' }}>
                {HERO_SLIDES[currentSlide].title}
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md font-medium border-l-4 border-accent pl-4">
                {HERO_SLIDES[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full font-bold px-8 h-14 text-base shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all hover:-translate-y-1 group">
              Nhận tư vấn miễn phí
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/50 text-slate-900 md:text-white md:bg-white/10 hover:bg-white hover:text-primary rounded-full font-bold px-8 h-14 text-base backdrop-blur-sm transition-all hover:-translate-y-1 flex items-center gap-2">
              <Play className="w-5 h-5 fill-current" />
              Xem dự án đã thi công
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-4 md:left-8 right-4 md:right-8 flex items-center justify-between z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={prevSlide}
          className="w-14 h-14 rounded-full bg-white/10 hover:bg-accent border border-white/20 hover:border-accent text-white flex items-center justify-center backdrop-blur-md transition-all pointer-events-auto hover:scale-110"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-14 h-14 rounded-full bg-white/10 hover:bg-accent border border-white/20 hover:border-accent text-white flex items-center justify-center backdrop-blur-md transition-all pointer-events-auto hover:scale-110"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-30">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentSlide(idx);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 border border-white/50 ${
              currentSlide === idx 
                ? "bg-accent border-accent w-10 shadow-[0_0_10px_rgba(245,158,11,0.5)]" 
                : "bg-white/20 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
      
    </section>
  );
}
