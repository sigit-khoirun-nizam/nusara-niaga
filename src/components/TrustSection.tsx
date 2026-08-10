"use client";

import { motion } from "framer-motion";
import { MapPin, ShieldCheck, Tag, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const trustFeatures = [
  {
    icon: MapPin,
    title: "BERAS LOKAL",
    description: "Beras berasal dari petani dan sentra pertanian lokal.",
  },
  {
    icon: ShieldCheck,
    title: "KUALITAS TERJAGA",
    description: "Setiap proses diperhatikan mulai dari gabah hingga pengemasan.",
  },
  {
    icon: Tag,
    title: "HARGA BERSAHABAT",
    description: "Menghadirkan harga yang adil bagi petani dan konsumen.",
  },
  {
    icon: HeartHandshake,
    title: "DUKUNG EKONOMI DESA",
    description: "Setiap pembelian ikut menggerakkan rantai ekonomi lokal.",
  },
];

export function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Lebih Dekat dengan Sumbernya. <br className="hidden md:block" />
            <span className="text-primary">Lebih Yakin dengan Kualitasnya.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg bg-card hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/30 flex items-center justify-center text-primary mb-6">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
