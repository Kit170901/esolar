"use client";

import { solarImages } from "@/data/solarImages";
import { SolarImage } from "../ui/SolarImage";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeader } from "../layout/Section";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    id: 1,
    question: "Lắp điện mặt trời có cần xin phép không?",
    answer: "Đối với hệ thống điện mặt trời mái nhà công suất nhỏ cho hộ gia đình, bạn không cần xin giấy phép xây dựng. E Solar sẽ hỗ trợ bạn thực hiện thủ tục thông báo với điện lực địa phương (EVN) và đăng ký kiểm định hệ thống miễn phí."
  },
  {
    id: 2,
    question: "Bao lâu thì hoàn vốn?",
    answer: "Thời gian hoàn vốn phụ thuộc vào công suất hệ thống, lượng điện tiêu thụ và giá điện hiện tại. Trung bình tại Việt Nam, các hệ thống hộ gia đình hoàn vốn trong 4-5 năm, doanh nghiệp từ 3-4 năm. Sau thời gian này, bạn sử dụng điện hoàn toàn miễn phí."
  },
  {
    id: 3,
    question: "Hệ thống có hoạt động khi mất điện không?",
    answer: "Hệ thống điện mặt trời hòa lưới (Grid-tied) sẽ tự động ngắt khi mất điện lưới để đảm bảo an toàn. Nếu muốn sử dụng khi mất điện, bạn cần lắp đặt hệ thống Hybrid có tích hợp pin lưu trữ (Lithium)."
  },
  {
    id: 4,
    question: "Tuổi thọ tấm pin là bao lâu?",
    answer: "Tấm pin năng lượng mặt trời chất lượng cao tại E Solar có tuổi thọ lên đến 25-30 năm. Chúng tôi cam kết bảo hành hiệu suất trên 80% trong vòng 25 năm."
  },
  {
    id: 5,
    question: "Có bảo trì định kỳ không?",
    answer: "Có, hệ thống cần được vệ sinh tấm pin và kiểm tra kết nối định kỳ 1-2 lần/năm để duy trì hiệu suất tốt nhất. E Solar cung cấp gói bảo trì miễn phí trong 1-2 năm đầu và dịch vụ O&M chuyên nghiệp sau đó."
  },
  {
    id: 6,
    question: "Có thể theo dõi sản lượng điện không?",
    answer: "Chắc chắn. Tất cả hệ thống E Solar lắp đặt đều đi kèm bộ wifi kết nối với ứng dụng trên điện thoại (App). Bạn có thể theo dõi sản lượng tạo ra, lượng điện tiêu thụ và tình trạng hoạt động mọi lúc mọi nơi."
  }
];

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <Section id="faq" bgWhite={true}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <SectionHeader 
            title="Câu Hỏi Thường Gặp" 
            subtitle="Giải đáp những thắc mắc phổ biến nhất của khách hàng trước khi quyết định đầu tư hệ thống điện mặt trời."
            leftAlign
          />
          <div className="hidden lg:block mt-8">
            <div className="rounded-3xl overflow-hidden shadow-lg mb-6 h-48">
              <SolarImage 
          src={solarImages.fallback} 
          alt="Tư vấn điện mặt trời"
          className="w-full h-full object-cover"
        />
            </div>
            <div className="bg-primary text-white rounded-3xl p-8 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
              <h3 className="text-xl font-bold mb-4">Vẫn còn thắc mắc?</h3>
              <p className="text-white/80 mb-6">Đội ngũ chuyên gia của E Solar luôn sẵn sàng hỗ trợ bạn 24/7.</p>
              <a href="#contact" className="inline-block bg-accent hover:bg-accent/90 text-white font-bold px-6 py-3 rounded-full transition-colors">
                Liên hệ tư vấn ngay
              </a>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-7 space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div 
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? "bg-white border-primary/20 shadow-md" : "bg-slate-50 border-slate-200 hover:bg-white"}`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className={`font-bold text-lg ${isOpen ? "text-primary" : "text-slate-700"}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "bg-primary/10 rotate-180" : "bg-slate-200"}`}>
                    <ChevronDown className={`w-5 h-5 ${isOpen ? "text-primary" : "text-slate-500"}`} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
