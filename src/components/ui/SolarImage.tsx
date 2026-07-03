"use client";

import { useState } from "react";
import { solarImages } from "@/data/solarImages";
import { cn } from "@/lib/utils";

interface SolarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export function SolarImage({ src, alt, className, fallbackSrc, ...props }: SolarImageProps) {
  const [imgSrc, setImgSrc] = useState(src || solarImages.fallback);

  const handleError = () => {
    if (imgSrc !== fallbackSrc && imgSrc !== solarImages.fallback) {
      setImgSrc(fallbackSrc || solarImages.fallback);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={cn("w-full h-full object-cover object-center", className)}
      {...props}
    />
  );
}
