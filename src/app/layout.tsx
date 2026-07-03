import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E Solar - Giải pháp điện mặt trời cho gia đình và doanh nghiệp",
  description: "E Solar cung cấp giải pháp tư vấn, thiết kế, thi công và bảo trì hệ thống điện mặt trời trọn gói, tối ưu chi phí điện cho hộ gia đình, doanh nghiệp và nhà xưởng.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <CartProvider>
          <Header />
          {children}
          <Footer />
          <FloatingContact />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
