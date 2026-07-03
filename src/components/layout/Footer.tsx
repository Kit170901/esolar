import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { Logo } from "./Header";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M21.582 6.186a2.66 2.66 0 00-1.884-1.885C17.986 4 12 4 12 4s-5.986 0-7.698.301a2.66 2.66 0 00-1.884 1.885C2.115 7.893 2 12 2 12s.115 4.107.418 5.814a2.66 2.66 0 001.884 1.885C5.986 20 12 20 12 20s5.986 0 7.698-.301a2.66 2.66 0 001.884-1.885C21.885 16.107 22 12 22 12s-.115-4.107-.418-5.814zM9.81 15.421V8.579L15.93 12l-6.12 3.421z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-[#0b1121] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="bg-white inline-block p-2 rounded-lg mb-6">
              <Logo />
            </div>
            <p className="mb-6 leading-relaxed">
              E Solar tự hào là đơn vị tiên phong cung cấp giải pháp tư vấn, thiết kế, thi công và bảo trì hệ thống điện mặt trời trọn gói, mang năng lượng xanh đến mọi nhà và doanh nghiệp.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <YoutubeIcon className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-heading">Liên Kết Nhanh</h3>
            <ul className="space-y-3">
              <li><Link href="#about" className="hover:text-accent transition-colors">Về chúng tôi</Link></li>
              <li><Link href="#services" className="hover:text-accent transition-colors">Giải pháp & Dịch vụ</Link></li>
              <li><Link href="#projects" className="hover:text-accent transition-colors">Dự án tiêu biểu</Link></li>
              <li><Link href="#pricing" className="hover:text-accent transition-colors">Bảng giá tham khảo</Link></li>
              <li><Link href="#blog" className="hover:text-accent transition-colors">Tin tức & Kiến thức</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-heading">Dịch Vụ Của Chúng Tôi</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-accent transition-colors">Điện mặt trời hộ gia đình</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Điện mặt trời doanh nghiệp</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Hệ thống hòa lưới lưu trữ (Hybrid)</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Bảo trì & vệ sinh tấm pin</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Tư vấn giải pháp năng lượng</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-heading">Liên Hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Tòa nhà E Solar, 123 Đường Năng Lượng, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="font-semibold text-white">0900 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>info@esolar.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} E Solar. All rights reserved.{" "}
            <span className="block md:inline mt-2 md:mt-0">
              Design by <a href="https://sotagroup.vn" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors">Sotagroup</a>
            </span>
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Chính sách bảo mật</Link>
            <Link href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
