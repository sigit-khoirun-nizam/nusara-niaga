"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Leaf, ShieldCheck, Heart, Sun } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-secondary/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary px-3 py-1 text-xs md:text-sm shadow-sm backdrop-blur-sm">
                <Leaf className="w-3.5 h-3.5 mr-1.5" /> 100% Lokal
              </Badge>
              <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary px-3 py-1 text-xs md:text-sm shadow-sm backdrop-blur-sm">
                <Sun className="w-3.5 h-3.5 mr-1.5" /> Fresh Harvest
              </Badge>
              <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary px-3 py-1 text-xs md:text-sm shadow-sm backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5" /> Langsung dari Petani
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-2">
              Dari Desa, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#78A85A] to-primary bg-300% animate-gradient">
                Untuk Nusantara.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl font-light">
              Nusara Niaga menghadirkan beras berkualitas dari petani lokal dengan proses yang terjaga, harga bersahabat, dan manfaat yang kembali menggerakkan ekonomi desa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/produk" className="w-full sm:w-auto">
                <Button size="lg" className="w-full h-14 px-8 text-base shadow-lg shadow-primary/20 group">
                    Beli Beras
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/tentang-kami" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full h-14 px-8 text-base border-primary/20 hover:bg-primary/5">
                    Kenali Nusara Niaga
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Hero Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-secondary/30 blur-2xl -z-10 rounded-[3rem] opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative border-4 border-background/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0" />
                <Image 
                  src="/images/hero.png" 
                  alt="Nusara Niaga Rice Field" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  priority 
                />
              </div>
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
