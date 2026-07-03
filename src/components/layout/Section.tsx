"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bgWhite?: boolean;
}

export function Section({ id, className, children, bgWhite = true }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 overflow-hidden",
        bgWhite ? "bg-background" : "bg-muted/30",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto px-4 md:px-6 max-w-7xl"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, className, leftAlign = false }: { title: string; subtitle?: string; className?: string, leftAlign?: boolean }) {
  return (
    <div className={cn("mb-12 md:mb-16", leftAlign ? "text-left" : "text-center", className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-outfit mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-muted-foreground text-lg md:text-xl", leftAlign ? "max-w-3xl" : "max-w-2xl mx-auto")}>
          {subtitle}
        </p>
      )}
      <div className={cn("w-20 h-1.5 bg-accent mt-6 rounded-full", leftAlign ? "mr-auto" : "mx-auto")} />
    </div>
  );
}
