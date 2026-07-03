import { solarImages } from "@/data/solarImages";
export type Product = {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  specs: Record<string, string>;
  price: number | "Liên hệ báo giá";
  images: string[];
  badges: string[];
  features: string[];
  warranty: string;
};

export const CATEGORIES = [
  "Tất cả",
  "Tấm pin năng lượng mặt trời",
  "Inverter năng lượng mặt trời",
  "Pin lưu trữ",
  "Combo hệ thống điện mặt trời",
  "Phụ kiện lắp đặt"
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Tấm pin năng lượng mặt trời 550W",
    category: "Tấm pin năng lượng mặt trời",
    shortDescription: "Tấm pin Mono Half-cell công suất 550W, hiệu suất cao, chuyên dụng cho dự án dân dụng và công nghiệp.",
    description: "Tấm pin năng lượng mặt trời 550W sử dụng công nghệ Mono Half-cell tiên tiến nhất, giảm suy hao điện năng và tối ưu hóa diện tích lắp đặt. Khung nhôm chắc chắn, mặt kính cường lực chịu tải trọng tuyết và gió cực tốt. Hoạt động ổn định ngay cả trong điều kiện ánh sáng yếu.",
    specs: {
      "Công suất định mức": "550W",
      "Loại Cell": "Monocrystalline",
      "Hiệu suất": "21.3%",
      "Trọng lượng": "28.6 kg",
      "Kích thước": "2278 x 1134 x 35 mm"
    },
    price: 3500000,
    images: solarImages.product,
    badges: ["Bán chạy", "Nổi bật"],
    features: [
      "Công nghệ Multi Busbar giảm trở kháng",
      "Chống suy giảm điện áp PID tuyệt vời",
      "Bảo hành sản phẩm 12 năm, hiệu suất 25 năm"
    ],
    warranty: "12 năm vật lý, 25 năm hiệu suất trên 84.8%"
  },
  {
    id: "p2",
    name: "Tấm pin Mono hiệu suất cao 450W",
    category: "Tấm pin năng lượng mặt trời",
    shortDescription: "Tấm pin năng lượng mặt trời Mono 450W nhỏ gọn, hiệu suất cao phù hợp cho các mái nhà phố có diện tích hẹp.",
    description: "Phiên bản 450W tối ưu cho các mái nhà dân dụng nhờ kích thước vừa phải, dễ dàng thi công lắp đặt nhưng vẫn đảm bảo hiệu suất năng lượng vượt trội. Được kiểm định nghiêm ngặt về khả năng chống chịu sương muối, amoniac.",
    specs: {
      "Công suất định mức": "450W",
      "Loại Cell": "Monocrystalline",
      "Hiệu suất": "20.7%",
      "Trọng lượng": "24.0 kg",
      "Kích thước": "2094 x 1038 x 35 mm"
    },
    price: 2800000,
    images: solarImages.product,
    badges: [],
    features: [
      "Tương thích cao với đa số các loại Inverter",
      "Công nghệ Half-cut cell giảm ảnh hưởng của bóng che",
      "Chịu tải cơ học tốt"
    ],
    warranty: "12 năm vật lý, 25 năm hiệu suất"
  },
  {
    id: "p3",
    name: "Inverter Hybrid 5kW",
    category: "Inverter năng lượng mặt trời",
    shortDescription: "Bộ hòa lưới có lưu trữ (Hybrid) 5kW, cung cấp nguồn điện liên tục kể cả khi mất điện lưới.",
    description: "Inverter Hybrid 5kW là trái tim của hệ thống điện mặt trời thông minh, cho phép kết hợp cả tính năng hòa lưới bán điện và lưu trữ dùng khi mất điện. Tích hợp màn hình LCD cảm ứng, theo dõi qua wifi bằng ứng dụng điện thoại dễ dàng.",
    specs: {
      "Công suất đầu ra": "5000W",
      "Dải điện áp ắc quy": "40V - 60V",
      "Hiệu suất tối đa": "97.6%",
      "Kết nối": "Wi-Fi / LAN / RS485",
      "Chống nước/bụi": "IP65"
    },
    price: 24500000,
    images: solarImages.product,
    badges: ["Mới", "Nổi bật"],
    features: [
      "Chuyển mạch lưới tự động dưới 10ms",
      "Tương thích hầu hết các loại pin Lithium trên thị trường",
      "Thiết kế không quạt tản nhiệt, hoạt động siêu êm"
    ],
    warranty: "5 năm"
  },
  {
    id: "p4",
    name: "Inverter hòa lưới 10kW 3 Pha",
    category: "Inverter năng lượng mặt trời",
    shortDescription: "Biến tần hòa lưới công suất 10kW 3 pha dành cho hệ thống điện mặt trời áp mái dân dụng và doanh nghiệp nhỏ.",
    description: "Inverter hòa lưới 10kW 3 pha với 2 MPPT độc lập, cho phép linh hoạt trong thiết kế hệ thống khi mái nhà có nhiều hướng. Công nghệ giải nhiệt tự nhiên thông minh tăng tuổi thọ linh kiện.",
    specs: {
      "Công suất định mức": "10kW",
      "Số MPPT": "2",
      "Điện áp khởi động": "160V",
      "Hiệu suất tối đa": "98.3%",
      "Trọng lượng": "16 kg"
    },
    price: 18000000,
    images: solarImages.product,
    badges: ["Bán chạy"],
    features: [
      "Tích hợp chống sét lan truyền Type II DC/AC",
      "Dải điện áp hoạt động rộng",
      "Theo dõi dữ liệu đám mây qua wifi/4G"
    ],
    warranty: "5 năm (Có thể mở rộng lên 10 năm)"
  },
  {
    id: "p5",
    name: "Pin lưu trữ Lithium 5kWh",
    category: "Pin lưu trữ",
    shortDescription: "Khối pin Lithium sắt phốt phát (LiFePO4) dung lượng 5kWh, an toàn tuyệt đối và tuổi thọ trên 6000 chu kỳ sạc xả.",
    description: "Giải pháp lưu trữ năng lượng hàng đầu sử dụng cell pin LiFePO4 thế hệ mới nhất. Hệ thống quản lý pin BMS thông minh bảo vệ toàn diện chống sạc/xả quá mức, quá nhiệt, ngắn mạch. Thiết kế dạng module dễ dàng mở rộng dung lượng lên đến hàng chục kWh.",
    specs: {
      "Dung lượng lưu trữ": "5.12 kWh",
      "Điện áp danh định": "51.2V",
      "Chu kỳ sống": ">6000 vòng (@80% DOD)",
      "Độ xả sâu tối đa (DOD)": "90%",
      "Kích thước": "442 x 420 x 132 mm"
    },
    price: 29000000,
    images: solarImages.product,
    badges: ["Cao cấp"],
    features: [
      "Vòng đời sử dụng dài hơn 15 năm",
      "Tương thích với các hãng Inverter phổ biến",
      "Lắp đặt gắn tường hoặc tủ rack"
    ],
    warranty: "10 năm"
  },
  {
    id: "p6",
    name: "Combo hệ thống điện mặt trời 5kW",
    category: "Combo hệ thống điện mặt trời",
    shortDescription: "Gói lắp đặt trọn gói hệ thống hòa lưới 5kW cho hộ gia đình (bao gồm vật tư và thi công).",
    description: "Combo hòa lưới 5kW bao gồm: Tấm pin năng lượng mặt trời công suất lớn, Inverter hòa lưới cao cấp, tủ điện, dây cáp, khung giá đỡ nhôm và dịch vụ thi công trọn gói. Sản lượng điện sinh ra khoảng 600 - 720 kWh/tháng, phù hợp cho gia đình có hóa đơn tiền điện từ 1.5 - 2.5 triệu VNĐ.",
    specs: {
      "Tổng công suất pin": "5.5 kWp",
      "Inverter": "5kW 1 Pha",
      "Sản lượng dự kiến": "600 kWh/tháng",
      "Diện tích mái yêu cầu": "25 - 30 m²",
      "Thời gian thi công": "1 - 2 ngày"
    },
    price: "Liên hệ báo giá",
    images: solarImages.product,
    badges: ["Bán chạy", "Khuyên dùng"],
    features: [
      "Bao trọn gói vật tư và chi phí thi công",
      "Hỗ trợ thủ tục đấu nối EVN miễn phí",
      "Bảo trì, vệ sinh hệ thống miễn phí năm đầu tiên"
    ],
    warranty: "Bảo hành hệ thống 5 năm, bảo hành thiết bị theo tiêu chuẩn nhà sản xuất"
  },
  {
    id: "p7",
    name: "Khung giá đỡ nhôm định hình",
    category: "Phụ kiện lắp đặt",
    shortDescription: "Thanh ray nhôm định hình chuyên dụng AL6005-T5 lắp đặt tấm pin năng lượng mặt trời.",
    description: "Hệ thống khung giá đỡ bằng hợp kim nhôm cường độ cao AL6005-T5 kết hợp phụ kiện Inox 304 (SUS304). Khả năng chống gỉ sét cực tốt, nhẹ nhưng vô cùng vững chắc, chịu được gió giật cấp 12. Phù hợp cho mọi loại mái tôn, mái ngói.",
    specs: {
      "Vật liệu": "Nhôm AL6005-T5",
      "Xử lý bề mặt": "Anodized màng oxit > 10µm",
      "Chịu tải gió": "60m/s",
      "Chịu tải tuyết": "1.4kN/m²",
      "Chiều dài tiêu chuẩn": "2.1m, 4.2m"
    },
    price: 150000,
    images: solarImages.product,
    badges: [],
    features: [
      "Chống ăn mòn tuyệt đối trong điều kiện ngoài trời",
      "Thiết kế ngàm kẹp linh hoạt, lắp đặt nhanh",
      "Phù hợp với nhiều kích thước tấm pin"
    ],
    warranty: "12 năm"
  },
  {
    id: "p8",
    name: "Cáp điện DC chuyên dụng Solar",
    category: "Phụ kiện lắp đặt",
    shortDescription: "Cáp điện DC tiết diện 4mm² / 6mm², lõi đồng mạ thiếc, vỏ cách điện XLPE chống tia UV.",
    description: "Cáp năng lượng mặt trời (Solar cable) được thiết kế đặc biệt để kết nối các tấm pin năng lượng mặt trời. Lớp vỏ cách điện XLPE liên kết chéo chống chịu tia UV, ozon, chịu nhiệt độ cao lên đến 120°C, đảm bảo an toàn phòng chống cháy nổ trong suốt tuổi thọ 25 năm của dự án.",
    specs: {
      "Tiết diện lõi": "4.0 mm² / 6.0 mm²",
      "Vật liệu dẫn điện": "Đồng mạ thiếc (Tinned Copper)",
      "Điện áp định mức": "1500V DC",
      "Chứng nhận": "TUV, EN50618",
      "Đóng gói": "Cuộn 250m hoặc 1000m"
    },
    price: 18000,
    images: solarImages.product,
    badges: [],
    features: [
      "Kháng tia cực tím (UV) và kháng nước",
      "Chống cháy lan, ít khói, không sinh khí halogen",
      "Độ mềm dẻo cao, dễ luồn ống"
    ],
    warranty: "Lỗi 1 đổi 1 do nhà sản xuất"
  }
];
