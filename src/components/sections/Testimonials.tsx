"use client";

import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Section, SectionHeader } from "../layout/Section";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Anh Hoàng Minh",
    role: "Chủ hộ gia đình, TP.Thủ Đức",
    content: "Từ khi lắp hệ thống 5kW của E Solar, hóa đơn tiền điện nhà tôi giảm từ 2.5 triệu xuống còn chưa tới 400 ngàn mỗi tháng. Đội ngũ thi công rất chuyên nghiệp, gọn gàng và nhiệt tình hướng dẫn sử dụng app.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 2,
    name: "Chị Ngọc Lan",
    role: "Giám đốc Công ty Bao Bì",
    content: "Chúng tôi đầu tư hệ thống 100kW cho nhà xưởng. E Solar đã tư vấn giải pháp tài chính rất tốt, tính toán điểm hoàn vốn chính xác. Đặc biệt dịch vụ bảo trì định kỳ của các bạn làm tôi rất yên tâm.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 3,
    name: "Chú Trần Văn Hải",
    role: "Chủ Biệt thự vườn, Đồng Nai",
    content: "Tôi chọn lắp hệ thống Hybrid có lưu trữ vì khu vực hay cúp điện. Từ ngày có hệ thống này, nhà tôi luôn sáng đèn, hệ thống camera, tủ lạnh hoạt động bình thường kể cả khi lưới điện gặp sự cố. Rất đáng đồng tiền.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: 4,
    name: "Anh Quang Vinh",
    role: "Chủ chuỗi siêu thị mini",
    content: "Chi phí điện năng cho hệ thống tủ đông, máy lạnh là gánh nặng lớn. Giải pháp điện mặt trời 20kW của E Solar thực sự là vị cứu tinh, giúp siêu thị giảm 60% chi phí vận hành. Sẽ tiếp tục ủng hộ cho các chi nhánh mới.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=14"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay, currentIndex]);

  const nextSlide = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <Section id="testimonials" bgWhite={false} className="bg-slate-50 dark:bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-20 z-0" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <SectionHeader 
          title="Khách Hàng Nói Gì Về E Solar" 
          subtitle="Hàng ngàn khách hàng đã trải nghiệm và hài lòng với chất lượng dịch vụ của chúng tôi."
        />
        
        <div className="relative mt-12 px-4 md:px-12">
          {/* Quote Icon Background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/10 z-0">
            <Quote className="w-32 h-32 rotate-180" />
          </div>
          
          <div className="relative z-10 bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 dark:border-slate-700 min-h-[320px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                
                <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 italic mb-8 leading-relaxed">
                  "{TESTIMONIALS[currentIndex].content}"
                </p>
                
                <div className="flex items-center justify-center gap-4">
                  <img 
                    src={TESTIMONIALS[currentIndex].avatar} 
                    alt={TESTIMONIALS[currentIndex].name}
                    className="w-14 h-14 rounded-full border-2 border-primary/20"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900 dark:text-white">{TESTIMONIALS[currentIndex].name}</h4>
                    <p className="text-sm text-slate-500">{TESTIMONIALS[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-20 md:-mx-4 pointer-events-none hidden md:flex">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors pointer-events-auto"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors pointer-events-auto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(idx);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "bg-primary w-8" : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
