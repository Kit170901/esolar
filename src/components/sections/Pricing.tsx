"use client";

import { Check, Home, Building2, Factory } from "lucide-react";
import { Section, SectionHeader } from "../layout/Section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const PRICING_PLANS = [
  {
    id: 1,
    title: "Gói Gia Đình",
    icon: Home,
    power: "3kW – 10kW",
    suitableFor: "Nhà phố, Biệt thự",
    features: [
      "Khảo sát địa hình & tư vấn miễn phí",
      "Thiết kế 3D hệ thống khung giàn",
      "Sử dụng pin & Inverter Tier 1",
      "Bảo hành biến tần 5 năm",
      "Bảo hành hiệu suất pin 25 năm",
      "Hỗ trợ thủ tục EVN",
    ],
    highlighted: false,
  },
  {
    id: 2,
    title: "Gói Doanh Nghiệp",
    icon: Building2,
    power: "20kW – 100kW",
    suitableFor: "Văn phòng, Cửa hàng, Xưởng nhỏ",
    features: [
      "Tất cả quyền lợi của gói Gia đình",
      "Tối ưu hướng nắng bằng phần mềm chuyên dụng",
      "Hệ thống giám sát sản lượng độc lập",
      "Miễn phí bảo trì & vệ sinh 2 năm đầu",
      "Cam kết sản lượng điện hàng năm",
      "Hỗ trợ hồ sơ tín dụng xanh",
    ],
    highlighted: true,
  },
  {
    id: 3,
    title: "Gói Nhà Xưởng",
    icon: Factory,
    power: "100kW+",
    suitableFor: "KCN, Nhà máy sản xuất",
    features: [
      "Giải pháp thiết kế riêng theo đặc thù mái",
      "Hỗ trợ cơ chế DPPA (Mua bán điện trực tiếp)",
      "Thiết bị tiêu chuẩn công nghiệp hạng nặng",
      "Đội ngũ vận hành & bảo trì chuyên trách (O&M)",
      "Chứng nhận giảm phát thải CO2 (I-REC)",
      "Giải pháp Hybrid công suất lớn (Tùy chọn)",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <Section id="pricing" bgWhite={true} className="relative pt-24">
      {/* Decorative Background Image */}
      <div className="absolute top-0 left-0 right-0 h-[400px] z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1548611716-10705a697669?q=80&w=2070&auto=format&fit=crop" 
          alt="Bảng giá điện mặt trời"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/80 to-white" />
      </div>

      <div className="relative z-10">
        <SectionHeader 
          title="Bảng Giá Tham Khảo" 
          subtitle="Mỗi dự án đều được thiết kế tối ưu theo nhu cầu và ngân sách riêng của từng khách hàng."
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {PRICING_PLANS.map((plan, index) => {
          const Icon = plan.icon;
          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 ${
                plan.highlighted 
                  ? "bg-primary text-white shadow-2xl scale-100 lg:scale-105 z-10 border-none" 
                  : "bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-xl"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 left-0 bg-accent text-center py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                  Phổ biến nhất
                </div>
              )}
              
              <div className={`p-8 ${plan.highlighted ? "pt-12 border-b border-white/10" : "border-b border-slate-100"}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    plan.highlighted ? "bg-white/10" : "bg-slate-100"
                  }`}>
                    <Icon className={`w-6 h-6 ${plan.highlighted ? "text-accent" : "text-primary"}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading">{plan.title}</h3>
                    <div className={plan.highlighted ? "text-white/70 text-sm" : "text-slate-500 text-sm"}>
                      Phù hợp: {plan.suitableFor}
                    </div>
                  </div>
                </div>
                
                <div className="mb-2">
                  <span className={`text-sm font-semibold uppercase tracking-wider ${plan.highlighted ? "text-accent" : "text-slate-500"}`}>
                    Công suất
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black font-heading">{plan.power}</span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.highlighted ? "text-accent" : "text-primary"}`} />
                      <span className={plan.highlighted ? "text-white/90" : "text-slate-600"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-6 border-t border-dashed mt-auto mb-6">
                  <div className="text-center font-bold text-lg mb-1">Liên hệ báo giá</div>
                  <div className={`text-center text-sm ${plan.highlighted ? "text-white/70" : "text-slate-500"}`}>
                    Cam kết chi phí tối ưu nhất
                  </div>
                </div>
                
                <Button 
                  className={`w-full h-14 rounded-xl font-bold text-base transition-transform hover:scale-[1.02] ${
                    plan.highlighted 
                      ? "bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20" 
                      : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                  }`}
                >
                  Yêu cầu tư vấn
                </Button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
