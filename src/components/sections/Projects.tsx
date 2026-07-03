"use client";

import { useState } from "react";
import { MapPin, Zap, ArrowRight, Battery } from "lucide-react";
import { Section, SectionHeader } from "../layout/Section";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MiniCarousel } from "../ui/MiniCarousel";
import { solarImages } from "@/data/solarImages";

const CATEGORIES = ["Tất cả", "Hộ gia đình", "Doanh nghiệp", "Nhà xưởng"];

const PROJECTS = [
  {
    id: 1,
    title: "Biệt thự Vinhome Tân Cảng",
    category: "Hộ gia đình",
    power: "5 kWp",
    location: "Bình Thạnh, TP.HCM",
    output: "600 kWh/tháng",
    images: solarImages.project,
  },
  {
    id: 2,
    title: "Nhà xưởng Công ty Dệt May",
    category: "Nhà xưởng",
    power: "50 kWp",
    location: "KCN Sóng Thần, Bình Dương",
    output: "6,000 kWh/tháng",
    images: solarImages.project,
  },
  {
    id: 3,
    title: "Tòa nhà Văn phòng",
    category: "Doanh nghiệp",
    power: "100 kWp",
    location: "Quận 1, TP.HCM",
    output: "12,000 kWh/tháng",
    images: solarImages.project,
  },
  {
    id: 4,
    title: "Hệ thống Hybrid Biệt thự",
    category: "Hộ gia đình",
    power: "10 kWp + 15kWh Lưu trữ",
    location: "Thảo Điền, TP.HCM",
    output: "1,200 kWh/tháng",
    images: solarImages.project,
  },
  {
    id: 5,
    title: "Xưởng Gỗ Nội Thất",
    category: "Nhà xưởng",
    power: "80 kWp",
    location: "Đồng Nai",
    output: "9,600 kWh/tháng",
    images: solarImages.project,
  },
  {
    id: 6,
    title: "Siêu thị Mini",
    category: "Doanh nghiệp",
    power: "20 kWp",
    location: "Quận 7, TP.HCM",
    output: "2,400 kWh/tháng",
    images: solarImages.project,
  },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("Tất cả");

  const filteredProjects = PROJECTS.filter(
    (project) => activeFilter === "Tất cả" || project.category === activeFilter
  );

  return (
    <Section id="projects" bgWhite={false}>
      <SectionHeader 
        title="Dự Án Đã Thi Công" 
        subtitle="Hàng ngàn hệ thống điện mặt trời đã được E Solar thiết kế và lắp đặt thành công trên toàn quốc."
      />
      
      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={cn(
              "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
              activeFilter === cat
                ? "bg-primary text-white shadow-md"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            )}
          >
            {cat}
          </button>
        ))}
      </div>
      
      {/* Gallery */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 dark:border-slate-700 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <MiniCarousel images={project.images} alt={project.title} />
                <div className="absolute top-4 left-4 z-20 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-md pointer-events-none">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-heading group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 gap-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 gap-3">
                    <Zap className="w-4 h-4 text-accent" />
                    <span className="font-semibold text-slate-900 dark:text-white">{project.power}</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 gap-3">
                    <Battery className="w-4 h-4 text-green-500" />
                    <span>Sản lượng: <span className="font-semibold">{project.output}</span></span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full rounded-xl border-primary/20 text-primary hover:bg-primary hover:text-white group-hover:border-primary transition-all">
                  Xem chi tiết
                </Button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      <div className="text-center mt-12">
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full font-bold px-8">
          Xem tất cả dự án
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </Section>
  );
}
