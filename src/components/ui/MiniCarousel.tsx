"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SolarImage } from "./SolarImage";

interface MiniCarouselProps {
  images: string[];
  alt: string;
  autoPlay?: boolean;
  interval?: number;
}

export function MiniCarousel({ images, alt, autoPlay = true, interval = 5000 }: MiniCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!autoPlay || isHovered) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, autoPlay, interval, isHovered]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number, e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return prev === images.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  if (!images || images.length === 0) return null;

  return (
    <div 
      className="relative w-full h-full overflow-hidden group/carousel bg-slate-100 dark:bg-slate-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <SolarImage
            src={images[currentIndex]}
            alt={`${alt} - Image ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-700"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls (Visible on Hover) */}
      {images.length > 1 && (
        <>
          <div className="absolute inset-y-0 left-0 flex items-center px-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity z-20">
            <button 
              onClick={(e) => paginate(-1, e)}
              className="w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity z-20">
            <button 
              onClick={(e) => paginate(1, e)}
              className="w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === currentIndex 
                    ? "bg-white w-3" 
                    : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
