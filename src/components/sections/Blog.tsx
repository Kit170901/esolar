"use client";

import { Calendar, User, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "../layout/Section";
import { motion } from "framer-motion";
import { solarImages } from "@/data/solarImages";
import { SolarImage } from "../ui/SolarImage";

const POSTS = [
  {
    id: 1,
    title: "Điện mặt trời mái nhà là gì? Tổng quan từ A-Z",
    excerpt: "Tìm hiểu chi tiết về cấu tạo, nguyên lý hoạt động và những lợi ích thiết thực của hệ thống điện mặt trời mái nhà đối với các hộ gia đình.",
    date: "15/10/2023",
    author: "Admin",
    image: solarImages.blog[0]
  },
  {
    id: 2,
    title: "Doanh nghiệp có nên đầu tư điện mặt trời ngay lúc này?",
    excerpt: "Phân tích bài toán kinh tế, các lợi ích về thuế, chứng chỉ xanh và lý do tại sao đầu tư điện mặt trời đang là xu hướng tất yếu của các doanh nghiệp.",
    date: "22/10/2023",
    author: "E Solar Expert",
    image: solarImages.blog[1]
  },
  {
    id: 3,
    title: "Cách tính thời gian hoàn vốn khi lắp điện mặt trời",
    excerpt: "Hướng dẫn chi tiết công thức tính toán sản lượng điện sinh ra và thời gian thu hồi vốn đầu tư dựa trên hóa đơn tiền điện thực tế.",
    date: "05/11/2023",
    author: "Kỹ sư Minh",
    image: solarImages.blog[2]
  }
];

export function Blog() {
  return (
    <Section id="blog" bgWhite={true}>
      <SectionHeader 
        title="Tin Tức & Kiến Thức" 
        subtitle="Cập nhật những thông tin mới nhất về công nghệ điện mặt trời và xu hướng năng lượng xanh."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {POSTS.map((post, index) => (
          <motion.article 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-accent/30 transition-all duration-300 group flex flex-col"
          >
            <div className="relative h-56 overflow-hidden">
              <SolarImage 
                src={post.image} 
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-accent" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-accent" />
                  {post.author}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading group-hover:text-primary transition-colors line-clamp-2">
                <a href="#">{post.title}</a>
              </h3>
              
              <p className="text-slate-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-1">
                {post.excerpt}
              </p>
              
              <a href="#" className="inline-flex items-center text-sm font-bold text-primary group-hover:text-accent transition-colors mt-auto">
                Đọc tiếp 
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
