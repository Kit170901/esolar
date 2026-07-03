"use client";

import { Home, Factory, Zap, BatteryCharging, Wrench, FileSearch, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "../layout/Section";
import { motion } from "framer-motion";
import { MiniCarousel } from "../ui/MiniCarousel";
import { solarImages } from "@/data/solarImages";

const SERVICES = [
  {
    id: 1,
    title: "Điện mặt trời hộ gia đình",
    description: "Giải pháp tối ưu hóa chi phí điện sinh hoạt, làm mát mái nhà và tăng giá trị thẩm mỹ cho ngôi nhà của bạn.",
    icon: Home,
    color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
    images: solarImages.service
  },
  {
    id: 2,
    title: "Điện mặt trời doanh nghiệp",
    description: "Giảm chi phí vận hành, sử dụng năng lượng sạch, nâng cao hình ảnh thương hiệu trong mắt đối tác và khách hàng.",
    icon: Factory,
    color: "bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent",
    images: solarImages.service
  },
  {
    id: 3,
    title: "Hệ thống hòa lưới",
    description: "Giải pháp phổ biến nhất, chi phí đầu tư thấp, kết nối trực tiếp với lưới điện quốc gia, hoàn vốn nhanh.",
    icon: Zap,
    color: "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
    images: solarImages.service
  },
  {
    id: 4,
    title: "Hệ thống Hybrid (Lưu trữ)",
    description: "Kết hợp pin lưu trữ lithium, đảm bảo nguồn điện ổn định 24/7 ngay cả khi mất điện lưới quốc gia.",
    icon: BatteryCharging,
    color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400",
    images: solarImages.service
  },
  {
    id: 5,
    title: "Bảo trì, vệ sinh tấm pin",
    description: "Dịch vụ làm sạch, kiểm tra định kỳ bằng thiết bị chuyên dụng giúp duy trì hiệu suất hệ thống 100%.",
    icon: Wrench,
    color: "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
    images: solarImages.service
  },
  {
    id: 6,
    title: "Tư vấn thiết kế hệ thống",
    description: "Khảo sát thực tế, thiết kế bản vẽ 3D, mô phỏng bóng đổ, tính toán sản lượng bằng phần mềm chuyên nghiệp.",
    icon: FileSearch,
    color: "bg-teal-50 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400",
    images: solarImages.service
  }
];

export function Services() {
  return (
    <Section id="services" bgWhite={false}>
      <SectionHeader 
        title="Giải Pháp & Dịch Vụ" 
        subtitle="E Solar mang đến hệ sinh thái năng lượng mặt trời toàn diện, đáp ứng mọi nhu cầu từ tư vấn thiết kế đến thi công, bảo trì."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 hover:border-accent/50 dark:hover:border-accent/50 relative flex flex-col"
            >
              {/* Image Banner Carousel */}
              <div className="h-48 overflow-hidden relative">
                <MiniCarousel images={service.images} alt={service.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <div className={`absolute bottom-4 left-6 w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-lg pointer-events-none`}>
                  <Icon className={`w-6 h-6 ${service.color.split(' ')[1]}`} />
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-heading group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed flex-1">
                  {service.description}
                </p>
                
                <a href="#contact" className="inline-flex items-center text-sm font-bold text-primary dark:text-blue-400 group-hover:text-accent transition-colors mt-auto">
                  Xem chi tiết 
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
