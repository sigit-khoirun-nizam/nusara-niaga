"use client";

import { motion } from "framer-motion";
import { User, Store, Factory, Wheat, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const flowSteps = [
  { icon: User, label: "Customer" },
  { icon: Store, label: "Nusara Niaga" },
  { icon: Factory, label: "Rice Mill" },
  { icon: Wheat, label: "Local Farmers" },
  { icon: Home, label: "Village Economy" },
];

export function ImpactSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
          >
            Belanja Beras, <span className="text-primary">Ikut Menguatkan Desa.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light"
          >
            Ketika Anda membeli produk Nusara Niaga, Anda tidak hanya membeli beras. Anda ikut mendukung petani lokal, penggilingan lokal, pekerja desa, dan pertumbuhan ekonomi desa secara keseluruhan.
          </motion.p>
        </div>

        <div className="relative py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 max-w-5xl mx-auto relative z-10">
            {flowSteps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: "spring" }}
                className="flex flex-col items-center gap-4 relative z-10"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-card shadow-xl border-4 border-muted flex items-center justify-center text-primary relative group">
                  <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <step.icon className="w-10 h-10 relative z-10" />
                </div>
                <span className="font-bold text-foreground text-center">{step.label}</span>
                
                {/* Mobile connecting line (vertical) */}
                {index < flowSteps.length - 1 && (
                  <div className="h-8 w-1 bg-gradient-to-b from-primary/20 to-primary/60 md:hidden rounded-full my-2" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Desktop connecting line (horizontal) */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-2 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/80 -translate-y-[calc(50%+1rem)] rounded-full z-0 overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-1/3 h-full bg-white/40 blur-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
