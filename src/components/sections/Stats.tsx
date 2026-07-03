"use client";

import { solarImages } from "@/data/solarImages";
import { SolarImage } from "../ui/SolarImage";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Users, HardHat, Zap, Clock } from "lucide-react";
import { Section } from "../layout/Section";

function Counter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;
      
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        // Use easeOut cubic for smoother finish
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * end));
        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(step);
        }
      };
      animationFrame = window.requestAnimationFrame(step);
      return () => window.cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const STATS = [
  {
    id: 1,
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Hệ thống đã tư vấn",
  },
  {
    id: 2,
    icon: HardHat,
    value: 120,
    suffix: "+",
    label: "Dự án thi công",
  },
  {
    id: 3,
    icon: Zap,
    value: 10,
    suffix: "MW+",
    label: "Tổng công suất",
  },
  {
    id: 4,
    icon: Clock,
    value: 24,
    suffix: "/7",
    label: "Hỗ trợ kỹ thuật",
    staticValue: "24/7" // For values that don't need counter
  },
];

export function Stats() {
  return (
    <Section bgWhite={false} className="relative py-16 md:py-24 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <SolarImage 
          src={solarImages.fallback} 
          alt="E Solar Stats Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/20">
        {STATS.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={stat.id} className={`flex flex-col items-center text-center ${index !== 0 ? 'pl-8 md:pl-0' : ''}`}>
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20">
                <Icon className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl md:text-5xl font-black font-heading mb-2 drop-shadow-md">
                {stat.staticValue ? (
                  stat.staticValue
                ) : (
                  <Counter end={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-white/80 font-medium text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
