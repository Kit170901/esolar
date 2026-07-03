"use client";

import { solarImages } from "@/data/solarImages";
import { SolarImage } from "../ui/SolarImage";
import { PiggyBank, TrendingUp, ShieldCheck, Leaf, Smartphone, Wrench } from "lucide-react";
import { Section, SectionHeader } from "../layout/Section";
import { motion } from "framer-motion";

const BENEFITS = [
  {
    id: 1,
    title: "Giảm chi phí tiền điện",
    description: "Tiết kiệm đến 80% hóa đơn tiền điện hàng tháng, bảo vệ bạn trước sự tăng giá điện trong tương lai.",
    icon: PiggyBank,
  },
  {
    id: 2,
    title: "Tăng giá trị công trình",
    description: "Ngôi nhà hoặc nhà xưởng có lắp điện mặt trời sẽ có giá trị chuyển nhượng và cho thuê cao hơn.",
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "Chủ động nguồn năng lượng",
    description: "Hạn chế rủi ro mất điện lưới, đảm bảo hoạt động sinh hoạt và sản xuất liên tục (với hệ thống Hybrid).",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Giảm phát thải CO2",
    description: "Đóng góp tích cực vào việc bảo vệ môi trường, phát triển bền vững và chứng chỉ xanh cho doanh nghiệp.",
    icon: Leaf,
  },
  {
    id: 5,
    title: "Theo dõi sản lượng qua app",
    description: "Kiểm soát sản lượng điện tạo ra và tiêu thụ theo thời gian thực ngay trên điện thoại thông minh.",
    icon: Smartphone,
  },
  {
    id: 6,
    title: "Bảo hành, bảo trì lâu dài",
    description: "Tấm pin bảo hành hiệu suất đến 25 năm, biến tần 5-10 năm, hệ thống hoạt động bền bỉ, an toàn.",
    icon: Wrench,
  },
];

export function Benefits() {
  return (
    <Section id="benefits" bgWhite={false} className="bg-slate-50 dark:bg-slate-900/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[600px]"
        >
          <SolarImage 
          src={solarImages.fallback} 
          alt="Lợi ích điện mặt trời"
          className="w-full h-full object-cover"
        />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 font-heading leading-tight drop-shadow-md">
              Lợi Ích Đầu Tư<br />
              <span className="text-accent">Điện Mặt Trời</span>
            </h2>
            <p className="text-slate-200 text-lg">
              Đầu tư điện mặt trời không chỉ là bài toán kinh tế mà còn là cam kết cho một tương lai xanh và bền vững.
            </p>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
