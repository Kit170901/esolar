"use client";

import { useState } from "react";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Section, SectionHeader } from "../layout/Section";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type: "Gia đình",
    bill: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({
        name: "", phone: "", email: "", type: "Gia đình", bill: "", message: ""
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Section id="contact" bgWhite={false} className="bg-slate-50 dark:bg-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Info Side */}
        <div>
          <SectionHeader 
            title="Sẵn Sàng Cho Tương Lai Xanh?" 
            subtitle="Để lại thông tin, các chuyên gia của E Solar sẽ liên hệ khảo sát và tư vấn giải pháp tối ưu nhất cho bạn trong vòng 24h."
            leftAlign
            className="mb-8"
          />
          
          <div className="rounded-3xl overflow-hidden shadow-lg h-48 md:h-64 mb-8">
            <img 
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop" 
              alt="Tư vấn lắp đặt điện mặt trời"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6 mt-12">
            <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Trụ sở chính</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Tòa nhà E Solar, 123 Đường Năng Lượng, Quận 1, TP. Hồ Chí Minh</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="w-12 h-12 rounded-full bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Hotline tư vấn</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">0900 000 000 (Zalo/Viber 24/7)</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Email liên hệ</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">info@esolar.vn</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Form Side */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 relative overflow-hidden">
          {/* Success Toast / Overlay */}
          <div className={`absolute inset-0 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center transition-all duration-500 ${submitted ? "opacity-100 visible" : "opacity-0 invisible"}`}>
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Gửi thành công!</h3>
            <p className="text-slate-600 text-center max-w-xs">Cảm ơn bạn, E Solar sẽ liên hệ tư vấn trong thời gian sớm nhất.</p>
          </div>

          <h3 className="text-2xl font-bold text-primary mb-6 font-heading">Yêu cầu báo giá chi tiết</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Họ và tên *</label>
                <input 
                  type="text" required
                  name="name" value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="Nhập họ tên của bạn"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Số điện thoại *</label>
                <input 
                  type="tel" required
                  name="phone" value={formData.phone} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="Nhập số điện thoại"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Loại công trình</label>
              <select 
                name="type" value={formData.type} onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              >
                <option value="Gia đình">Điện mặt trời Gia đình</option>
                <option value="Doanh nghiệp">Điện mặt trời Doanh nghiệp</option>
                <option value="Nhà xưởng">Điện mặt trời Nhà xưởng</option>
                <option value="Hybrid">Hệ thống Hybrid (có lưu trữ)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Tiền điện trung bình hàng tháng</label>
              <input 
                type="text"
                name="bill" value={formData.bill} onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                placeholder="VD: 3 triệu VNĐ"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nội dung cần tư vấn</label>
              <textarea 
                rows={3}
                name="message" value={formData.message} onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                placeholder="Ghi chú thêm về vị trí, yêu cầu đặc biệt..."
              ></textarea>
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full h-14 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl text-base shadow-lg shadow-accent/20 flex items-center justify-center gap-2 mt-2"
            >
              {isSubmitting ? (
                <span className="animate-pulse">Đang gửi...</span>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Gửi yêu cầu tư vấn
                </>
              )}
            </Button>
            <p className="text-center text-xs text-slate-500 mt-4 flex items-center justify-center gap-1">
              <Clock className="w-3 h-3" /> Cam kết bảo mật thông tin cá nhân của bạn
            </p>
          </form>
        </div>
        
      </div>
    </Section>
  );
}
