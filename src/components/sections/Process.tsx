"use client";

import { solarImages } from "@/data/solarImages";
import { SolarImage } from "../ui/SolarImage";
import { PhoneCall, Map, PenTool, FileText, Wrench } from "lucide-react";
import { Section, SectionHeader } from "../layout/Section";
import { motion } from "framer-motion";

const PROCESS_STEPS = [
  {
    id: 1,
    title: "Tiếp nhận nhu cầu",
    description: "Tư vấn sơ bộ, giải đáp thắc mắc và ghi nhận thông tin dự án.",
    icon: PhoneCall,
  },
  {
    id: 2,
    title: "Khảo sát thực tế",
    description: "Kỹ sư đến tận nơi đo đạc mái, kiểm tra kết cấu và điểm đấu nối.",
    icon: Map,
  },
  {
    id: 3,
    title: "Thiết kế phương án",
    description: "Lên bản vẽ 3D, tính toán sản lượng và chọn thiết bị phù hợp nhất.",
    icon: PenTool,
  },
  {
    id: 4,
    title: "Báo giá & Ký HĐ",
    description: "Thống nhất phương án, chi phí đầu tư và ký kết hợp đồng.",
    icon: FileText,
  },
  {
    id: 5,
    title: "Thi công & Bảo trì",
    description: "Lắp đặt, nghiệm thu bàn giao và bảo hành, bảo trì định kỳ.",
    icon: Wrench,
  },
];

export function Process() {
  return (
    <Section id="process" bgWhite={true}>
      <SectionHeader 
        title="Quy Trình Làm Việc" 
        subtitle="Chuẩn hóa 5 bước làm việc chuyên nghiệp, minh bạch giúp khách hàng hoàn toàn an tâm khi lựa chọn E Solar."
      />
      
      {/* Background Image Banner */}
      <div className="relative w-full h-[300px] mt-12 rounded-3xl overflow-hidden shadow-xl mb-12">
        <SolarImage 
          src={solarImages.fallback} 
          alt="Quy trình lắp đặt điện mặt trời"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 flex items-center justify-center text-center px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white max-w-2xl leading-relaxed">
            Nhanh chóng, Chuyên nghiệp và An toàn tuyệt đối trong từng công đoạn triển khai.
          </h3>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto mt-12">
        {/* Connection Line */}
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-slate-100 rounded-full" />
        <div className="hidden md:block absolute top-12 left-[10%] h-1 bg-accent rounded-full transition-all duration-1000 w-0" />
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-row md:flex-col items-center text-left md:text-center gap-6 md:gap-4 group"
              >
                <div className="relative shrink-0">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 group-hover:border-accent flex items-center justify-center shadow-lg transition-colors duration-300 relative z-10">
                    <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold font-heading shadow-md z-20">
                    {step.id}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-heading">{step.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
