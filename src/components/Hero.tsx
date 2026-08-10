"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Leaf, ShieldCheck, Heart, Sun } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-muted/30 pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-secondary/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-background border-primary/20 text-primary">
                <Leaf className="w-3 h-3 mr-1" /> 100% Lokal
              </Badge>
              <Badge variant="outline" className="bg-background border-primary/20 text-primary">
                <Sun className="w-3 h-3 mr-1" /> Fresh Harvest
              </Badge>
              <Badge variant="outline" className="bg-background border-primary/20 text-primary">
                <ShieldCheck className="w-3 h-3 mr-1" /> Langsung dari Petani
              </Badge>
              <Badge variant="outline" className="bg-background border-primary/20 text-primary">
                <Heart className="w-3 h-3 mr-1" /> Mendukung Desa
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Dari Desa, <br />
              <span className="text-primary">Untuk Nusantara.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-xl">
              Nusara Niaga menghadirkan beras berkualitas dari petani lokal dengan proses yang terjaga, harga yang bersahabat, dan manfaat yang kembali menggerakkan ekonomi desa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button render={<Link href="/produk" />} size="lg" className="h-14 px-8 text-base shadow-lg shadow-primary/20 group">
                  Beli Beras
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button render={<Link href="/tentang-kami" />} size="lg" variant="outline" className="h-14 px-8 text-base border-primary/20 hover:bg-primary/5">
                  Kenali Nusara Niaga
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Hero Image */}
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative border-4 border-background">
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10" />
              <Image 
                src="/images/hero.png" 
                alt="Nusara Niaga Rice Field" 
                fill 
                className="object-cover" 
                priority 
              />
            </div>

            {/* Floating Element */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-background p-4 md:p-6 rounded-2xl shadow-xl border border-border flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-foreground/60 font-medium">Kualitas Terjamin</p>
                <p className="text-lg font-bold text-foreground">100% Organik</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
