"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Check, Phone, ShieldCheck, Wrench, Settings } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { SolarImage } from "@/components/ui/SolarImage";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const { addToCart } = useCart();
  
  const product = PRODUCTS.find((p) => p.id === params.id);
  
  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <main className="flex-1 bg-slate-50 min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Trang chủ</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Sản phẩm</Link>
          <span>/</span>
          <Link href="#" className="hover:text-primary transition-colors">{product.category}</Link>
          <span>/</span>
          <span className="text-slate-900 font-medium">{product.name}</span>
        </div>

        {/* Product Info */}
        <div className="bg-white rounded-3xl p-6 lg:p-12 shadow-sm border border-slate-100 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <SolarImage 
                  src={product.images[activeImageIdx]} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveImageIdx(i)}
                    className={`aspect-square rounded-xl overflow-hidden bg-slate-100 transition-all border-2 ${activeImageIdx === i ? 'border-accent ring-2 ring-accent/30' : 'border-transparent hover:border-slate-300'}`}
                  >
                    <SolarImage src={img} alt={`Thumbnail ${i+1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                {product.badges.map(badge => (
                  <span key={badge} className={`px-3 py-1 text-xs font-bold uppercase rounded-full shadow-sm ${
                    badge === 'Bán chạy' ? 'bg-red-500 text-white' : 
                    badge === 'Mới' ? 'bg-blue-500 text-white' : 
                    badge === 'Khuyên dùng' ? 'bg-green-500 text-white' :
                    'bg-accent text-white'
                  }`}>
                    {badge}
                  </span>
                ))}
                <span className="px-3 py-1 text-xs font-bold uppercase rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                  Mã: SP-{product.id}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 font-heading leading-tight">
                {product.name}
              </h1>
              
              <div className="mb-6">
                <span className="text-3xl font-black text-primary">
                  {typeof product.price === "number" ? product.price.toLocaleString("vi-VN") + " ₫" : product.price}
                </span>
                {typeof product.price === "number" && (
                  <span className="text-slate-500 ml-2">(Chưa bao gồm VAT)</span>
                )}
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="space-y-3 mb-8 pb-8 border-b border-slate-100">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-auto">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-medium text-slate-700">Số lượng:</span>
                  <div className="flex items-center border border-slate-200 rounded-lg">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-12 h-10 text-center font-bold border-x border-slate-200 focus:outline-none"
                    />
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button 
                    onClick={() => addToCart(product, quantity)}
                    className="h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Thêm vào giỏ hàng
                  </Button>
                  <Button 
                    variant="outline"
                    className="h-14 border-2 border-accent text-accent hover:bg-accent hover:text-white font-bold rounded-xl transition-colors"
                    onClick={() => window.location.href = '/#contact'}
                  >
                    <Phone className="w-5 h-5 mr-2 fill-current" />
                    Nhận tư vấn dự án
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Specs & Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold font-heading mb-6 flex items-center gap-2">
                <Settings className="w-5 h-5 text-accent" />
                Thông số kỹ thuật
              </h3>
              
              <div className="rounded-xl border border-slate-200 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {Object.entries(product.specs).map(([key, value], index) => (
                      <tr key={key} className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                        <th className="py-3 px-4 font-semibold text-slate-700 w-1/3 border-b border-slate-200">{key}</th>
                        <td className="py-3 px-4 text-slate-600 border-b border-slate-200">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold font-heading mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                Chính sách bảo hành
              </h3>
              <p className="text-slate-600 mb-4">{product.warranty}</p>
              <ul className="space-y-3 text-sm text-slate-500">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                  Bảo hành chính hãng tại Việt Nam
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                  Hỗ trợ kỹ thuật 24/7 từ E Solar
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                  Cam kết thời gian xử lý sự cố trong vòng 48h
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold font-heading mb-6 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-blue-500" />
                Dịch vụ trọn gói
              </h3>
              <ul className="space-y-3 text-sm text-slate-600 font-medium">
                <li>Tư vấn & Khảo sát miễn phí</li>
                <li>Thiết kế hệ thống tối ưu</li>
                <li>Hỗ trợ thủ tục đấu nối EVN</li>
                <li>Thi công nhanh chóng, an toàn</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold font-heading mb-8">Sản phẩm liên quan</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <div key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all group flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <Link href={`/products/${p.id}`}>
                      <SolarImage 
                        src={p.images[0]} 
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </Link>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <Link href={`/products/${p.id}`}>
                      <h4 className="font-bold text-slate-900 mb-2 line-clamp-2 hover:text-primary transition-colors">
                        {p.name}
                      </h4>
                    </Link>
                    <div className="text-lg font-black text-primary mb-4">
                      {typeof p.price === "number" ? p.price.toLocaleString("vi-VN") + " ₫" : p.price}
                    </div>
                    <Link href={`/products/${p.id}`} className="mt-auto block">
                      <Button variant="outline" className="w-full text-xs font-bold">
                        Xem chi tiết
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
