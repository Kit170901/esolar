"use client";

import { useState } from "react";
import { Calculator as CalcIcon, Sun, Wallet, Leaf, Clock, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "../layout/Section";
import { Button } from "@/components/ui/button";

export function Calculator() {
  const [bill, setBill] = useState("2000000");
  const [customerType, setCustomerType] = useState("family");
  const [area, setArea] = useState("50");
  const [result, setResult] = useState<any>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    const monthlyBill = parseFloat(bill);
    const roofArea = parseFloat(area);
    
    if (isNaN(monthlyBill) || isNaN(roofArea)) return;

    // Giả định giá điện trung bình
    const pricePerKwh = customerType === "family" ? 2800 : 2500;
    
    // Nhu cầu điện 1 tháng (kWh)
    const monthlyKwh = monthlyBill / pricePerKwh;
    
    // 1kWp tạo ra khoảng 120kWh / tháng ở miền Nam VN
    let recommendedKwp = monthlyKwh / 120;
    
    // 1kWp cần khoảng 6m2 diện tích
    const maxKwpByArea = roofArea / 6;
    
    // Nếu nhu cầu vượt quá diện tích mái, lấy theo diện tích mái
    if (recommendedKwp > maxKwpByArea) {
      recommendedKwp = maxKwpByArea;
    }
    
    // Đơn giá đầu tư (VNĐ / kWp)
    const pricePerKwp = customerType === "family" ? 14000000 : 12000000;
    const totalInvestment = recommendedKwp * pricePerKwp;
    
    // Tiền tiết kiệm mỗi tháng
    const monthlySaving = recommendedKwp * 120 * pricePerKwh;
    
    // Thời gian hoàn vốn (năm)
    const paybackYears = totalInvestment / (monthlySaving * 12);
    
    // CO2 giảm (tấn/năm) - 1kWh = 0.8122 kg CO2
    const co2Reduction = (recommendedKwp * 120 * 12 * 0.8122) / 1000;

    setResult({
      kwp: recommendedKwp.toFixed(1),
      investment: (totalInvestment / 1000000).toFixed(1),
      saving: (monthlySaving / 1000000).toFixed(1),
      payback: paybackYears.toFixed(1),
      co2: co2Reduction.toFixed(1)
    });
  };

  return (
    <Section id="calculator">
      <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Form Side */}
          <div className="p-8 lg:p-12 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 z-0" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <CalcIcon className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-white font-heading">Tính toán tiết kiệm</h2>
              </div>
              
              <p className="text-white/80 mb-8 max-w-md leading-relaxed">
                Nhập thông tin sử dụng điện hiện tại để ước tính chi phí, sản lượng và thời gian hoàn vốn khi lắp đặt điện mặt trời.
              </p>
              
              <form onSubmit={handleCalculate} className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Loại công trình</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["family", "business", "factory"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setCustomerType(type)}
                        className={`py-3 px-4 rounded-xl text-sm font-semibold transition-colors border ${
                          customerType === type 
                            ? "bg-accent border-accent text-white shadow-lg shadow-accent/20" 
                            : "bg-white/10 border-white/20 text-white/90 hover:bg-white/20"
                        }`}
                      >
                        {type === "family" ? "Gia đình" : type === "business" ? "Doanh nghiệp" : "Nhà xưởng"}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Tiền điện trung bình hàng tháng (VNĐ)</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      value={bill}
                      onChange={(e) => setBill(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Ví dụ: 2000000"
                      required
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 font-medium">VNĐ</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Diện tích mái khả dụng (m²)</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Ví dụ: 50"
                      required
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 font-medium">m²</span>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-14 rounded-xl text-base shadow-lg shadow-accent/20 mt-4 group"
                >
                  Tính toán ngay
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
          
          {/* Result Side */}
          <div className="bg-slate-50 dark:bg-slate-900 p-8 lg:p-12 flex flex-col justify-center border-l border-slate-200 dark:border-slate-800 relative">
            {!result ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 min-h-[300px] relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop" 
                  alt="Kỹ sư tính toán điện mặt trời"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-4">
                    <CalcIcon className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-lg font-medium text-slate-600 dark:text-slate-300">Nhập thông tin và bấm tính toán<br/>để xem kết quả ước tính</p>
                </div>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading mb-6">Kết quả ước tính</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-2">
                      <Sun className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium">Hệ thống đề xuất</span>
                    </div>
                    <div className="text-2xl font-black text-primary dark:text-blue-400">{result.kwp} <span className="text-sm font-semibold text-slate-500">kWp</span></div>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-2">
                      <Wallet className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium">Chi phí dự kiến</span>
                    </div>
                    <div className="text-2xl font-black text-slate-900 dark:text-white">~{result.investment} <span className="text-sm font-semibold text-slate-500">triệu VNĐ</span></div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden mb-6">
                  <div className="p-5 border-b border-slate-100 dark:border-slate-700">
                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Tiết kiệm trung bình mỗi tháng</div>
                    <div className="text-3xl font-black text-green-600 dark:text-green-500">
                      ~{result.saving} <span className="text-base font-semibold text-slate-500">triệu VNĐ</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-slate-100 dark:divide-slate-700 bg-slate-50 dark:bg-slate-800/50">
                    <div className="p-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Thời gian hoàn vốn</div>
                        <div className="font-bold text-slate-900 dark:text-white">{result.payback} năm</div>
                      </div>
                    </div>
                    <div className="p-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                        <Leaf className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Giảm phát thải</div>
                        <div className="font-bold text-slate-900 dark:text-white">{result.co2} tấn/năm</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-sm text-slate-500 dark:text-slate-400 flex items-start gap-2 bg-slate-100 dark:bg-slate-800/50 p-3 rounded-lg">
                  <div className="w-4 h-4 shrink-0 rounded-full border border-slate-400 flex items-center justify-center text-[10px] mt-0.5 font-bold">i</div>
                  <p>Lưu ý: Kết quả trên chỉ mang tính chất tham khảo. Đội ngũ E Solar sẽ khảo sát thực tế và tư vấn phương án chính xác nhất cho bạn.</p>
                </div>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </Section>
  );
}
