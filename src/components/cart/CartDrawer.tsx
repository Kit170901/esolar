"use client";

import { X, Trash2, Plus, Minus, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

export function CartDrawer() {
  const { isDrawerOpen, setIsDrawerOpen, items, updateQuantity, removeFromCart } = useCart();

  if (!isDrawerOpen) return null;

  const handleCheckout = () => {
    setIsDrawerOpen(false);
    window.location.href = "/#contact"; // Giả lập chuyển đến form liên hệ
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsDrawerOpen(false)}
      />
      
      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Giỏ hàng của bạn
          </h2>
          <button 
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-500">
              <ShoppingCart className="w-16 h-16 text-slate-200 mb-4" />
              <p>Giỏ hàng đang trống</p>
              <Button 
                onClick={() => setIsDrawerOpen(false)}
                className="mt-4 bg-primary text-white hover:bg-primary/90"
              >
                Tiếp tục xem sản phẩm
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-slate-200">
                    <img
  src={item.product.images?.[0] || "/images/solar/fallback-solar.jpg"}
  alt={item.product.name}
  className="w-full h-full object-cover"
  onError={(e) => {
    e.currentTarget.src = "/images/solar/fallback-solar.jpg";
  }}
/>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="font-semibold text-slate-900 line-clamp-2 text-sm mb-1">
                      {item.product.name}
                    </h3>
                    <div className="text-accent font-bold text-sm mb-2">
                      {typeof item.product.price === "number" 
                        ? item.product.price.toLocaleString("vi-VN") + " ₫" 
                        : item.product.price}
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center border border-slate-200 rounded-md">
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-slate-100 text-slate-600 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-semibold px-2 w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-slate-100 text-slate-600 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-red-500 hover:text-red-600 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-slate-100 bg-slate-50">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium text-slate-600">Tổng cộng (Tạm tính)</span>
              <span className="font-bold text-xl text-primary">
                {items.reduce((total, item) => {
                  if (typeof item.product.price === "number") {
                    return total + item.product.price * item.quantity;
                  }
                  return total;
                }, 0).toLocaleString("vi-VN")} ₫
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-4 text-center">
              (Giá chưa bao gồm VAT và chi phí vận chuyển/lắp đặt)
            </p>
            <Button 
              onClick={handleCheckout}
              className="w-full bg-accent hover:bg-accent/90 text-white h-12 rounded-xl font-bold shadow-lg shadow-accent/20"
            >
              Gửi yêu cầu báo giá/đặt hàng
            </Button>
          </div>
        )}
        
      </div>
    </div>
  );
}
