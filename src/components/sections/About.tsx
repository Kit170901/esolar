"use client";

import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "../layout/Section";
import { solarImages } from "@/data/solarImages";
import { SolarImage } from "../ui/SolarImage";

const FEATURES = [
  "Tư vấn chính xác, đúng nhu cầu sử dụng điện",
  "Thiết kế hệ thống tối ưu, đạt hiệu suất cao nhất",
  "Thi công chuyên nghiệp, an toàn, đúng tiêu chuẩn kỹ thuật",
  "Thiết bị chính hãng từ các thương hiệu hàng đầu thế giới",
  "Hỗ trợ bảo hành, bảo trì nhanh chóng sau lắp đặt",
];

export function About() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Image Side */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl z-0" />
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl z-0" />
          
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="rounded-2xl overflow-hidden shadow-lg h-64 relative group">
                <SolarImage 
                  src={solarImages.project[0]} 
                  alt="Kỹ sư thi công điện mặt trời"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-48 relative group">
                <SolarImage 
                  src={solarImages.project[1]} 
                  alt="Lắp đặt pin năng lượng"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg h-56 relative group">
                <SolarImage 
                  src={solarImages.project[2]} 
                  alt="Tấm pin năng lượng mặt trời"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="bg-primary text-white rounded-2xl p-6 shadow-xl flex flex-col justify-center items-center text-center h-56 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="relative z-10">
                  <div className="text-4xl font-black mb-1">10+</div>
                  <div className="text-sm font-medium uppercase tracking-wider text-accent">Năm Kinh Nghiệm</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Side */}
        <div>
          <SectionHeader 
            title="Về E Solar" 
            leftAlign 
            className="mb-8"
          />
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 mb-10">
            <p className="lead text-xl font-medium text-slate-800 dark:text-slate-100 mb-6">
              E Solar là đơn vị uy tín hàng đầu trong lĩnh vực cung cấp giải pháp điện mặt trời trọn gói tại Việt Nam.
            </p>
            <p className="mb-8">
              Chúng tôi cam kết mang đến nguồn năng lượng xanh, sạch và bền vững, giúp khách hàng tiết kiệm tối đa chi phí tiền điện hàng tháng. Với đội ngũ kỹ sư chuyên môn cao, quy trình làm việc bài bản, E Solar tự tin đáp ứng mọi nhu cầu từ hộ gia đình nhỏ đến các dự án nhà xưởng quy mô lớn.
            </p>
          </div>

          <div className="space-y-4">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-200 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`Khách hàng ${i}`} />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-900 bg-accent text-white flex items-center justify-center font-bold text-xs z-10">
                1k+
              </div>
            </div>
            <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Hơn <span className="text-primary font-bold">1,000 khách hàng</span><br/> đã tin tưởng lựa chọn.
            </div>
          </div>
        </div>
        
      </div>
    </Section>
  );
}
