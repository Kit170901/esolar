"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Info, Filter } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { MiniCarousel } from "@/components/ui/MiniCarousel";
import { SolarImage } from "@/components/ui/SolarImage";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useCart();

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchCategory = activeCategory === "Tất cả" || product.category === activeCategory;
    const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <main className="flex-1 bg-slate-50 min-h-screen pt-24 pb-20">
      {/* Banner */}
      <div className="bg-primary text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-black font-heading mb-4 drop-shadow-md">
            Sản Phẩm Năng Lượng Mặt Trời
          </h1>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Cung cấp thiết bị và giải pháp điện mặt trời chính hãng cho gia đình, doanh nghiệp và nhà xưởng với chế độ bảo hành dài hạn.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar / Filter */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="relative mb-6">
                <input 
                  type="text" 
                  placeholder="Tìm kiếm sản phẩm..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>

              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-slate-900">
                <Filter className="w-5 h-5 text-accent" />
                Danh mục sản phẩm
              </h3>
              
              <ul className="space-y-2">
                {CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                        activeCategory === cat 
                          ? "bg-accent/10 text-accent font-bold" 
                          : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-blue-900 rounded-2xl p-6 shadow-lg text-white text-center">
              <h4 className="font-bold mb-2">Cần tư vấn giải pháp?</h4>
              <p className="text-sm text-white/80 mb-4">Các chuyên gia E Solar luôn sẵn sàng hỗ trợ bạn lựa chọn sản phẩm phù hợp nhất.</p>
              <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold rounded-xl">
                Liên hệ ngay
              </Button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-slate-600 font-medium">Hiển thị {filteredProducts.length} sản phẩm</p>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all group flex flex-col"
                  >
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <Link href={`/products/${product.id}`} className="block w-full h-full">
                        <div className="absolute inset-0 pointer-events-none group-hover:pointer-events-auto">
                          <MiniCarousel images={product.images} alt={product.name} autoPlay={false} />
                        </div>
                        {/* Fallback/Default view when not hovering */}
                        <SolarImage 
                          src={product.images[0]} 
                          alt={product.name}
                          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                        />
                      </Link>
                      
                      <div className="absolute top-2 left-2 flex flex-col gap-1 pointer-events-none">
                        {product.badges.map(badge => (
                          <span key={badge} className={`px-2.5 py-1 text-[10px] font-bold uppercase rounded-md shadow-sm ${
                            badge === 'Bán chạy' ? 'bg-red-500 text-white' : 
                            badge === 'Mới' ? 'bg-blue-500 text-white' : 
                            badge === 'Khuyên dùng' ? 'bg-green-500 text-white' :
                            'bg-accent text-white'
                          }`}>
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      <div className="text-xs font-semibold text-accent mb-2 uppercase tracking-wider">{product.category}</div>
                      
                      <Link href={`/products/${product.id}`}>
                        <h3 className="font-bold text-slate-900 mb-2 line-clamp-2 hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      
                      <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-1">
                        {product.shortDescription}
                      </p>

                      <div className="mb-4">
                        <span className="text-lg font-black text-primary">
                          {typeof product.price === "number" ? product.price.toLocaleString("vi-VN") + " ₫" : product.price}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 mt-auto">
                        <Link href={`/products/${product.id}`} className="w-full">
                          <Button variant="outline" className="w-full text-xs font-bold border-slate-200 hover:bg-slate-50">
                            <Info className="w-4 h-4 mr-1.5" />
                            Chi tiết
                          </Button>
                        </Link>
                        <Button 
                          onClick={() => addToCart(product)}
                          className="w-full text-xs font-bold bg-primary hover:bg-primary/90 text-white"
                        >
                          <ShoppingCart className="w-4 h-4 mr-1.5" />
                          Thêm
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
                <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Không tìm thấy sản phẩm</h3>
                <p className="text-slate-500">Vui lòng thử lại với từ khóa hoặc danh mục khác.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
