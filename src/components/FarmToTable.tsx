"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const processSteps = [
  { id: "01", title: "Petani Menanam" },
  { id: "02", title: "Perawatan Sawah" },
  { id: "03", title: "Panen" },
  { id: "04", title: "Pengeringan" },
  { id: "05", title: "Penggilingan" },
  { id: "06", title: "Sortir" },
  { id: "07", title: "Pengemasan" },
  { id: "08", title: "Sampai ke Rumah Anda" },
];

export function FarmToTable() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Dari Sawah, Sampai ke Meja Makan Anda.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-primary-foreground/90 font-light"
          >
            Menjaga setiap langkah proses untuk memastikan Anda mendapatkan beras dengan kualitas terbaik.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-primary-foreground/20 -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-background text-primary flex items-center justify-center font-bold text-lg mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.id}
                </div>
                <h4 className="font-medium text-sm md:text-base leading-tight">
                  {step.title}
                </h4>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 mt-2 text-primary-foreground/40 md:hidden" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
