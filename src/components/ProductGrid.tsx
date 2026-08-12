"use client";

import { motion } from "framer-motion";
import { ProductCard, ProductProps } from "./ProductCard";

const DUMMY_PRODUCTS: ProductProps[] = [
  {
    id: "1",
    name: "Nusara Premium",
    slug: "nusara-premium",
    description: "Beras pilihan dengan tekstur pulen, bersih, dan cocok untuk keluarga.",
    price: 75000,
    variants: ["5 KG", "10 KG", "25 KG"],
    badges: ["Premium", "Best Seller", "Fresh Harvest"],
    features: ["Pulen", "Bersih", "Wangi", "Cocok untuk keluarga"],
    rating: 4.9,
    imageColor: "bg-[#285943]/20",
    imageUrl: "/images/premium.png"
  },
  {
    id: "2",
    name: "Nusara Medium",
    slug: "nusara-medium",
    description: "Beras berkualitas dengan harga ekonomis untuk kebutuhan sehari-hari.",
    price: 65000,
    variants: ["5 KG", "10 KG", "25 KG"],
    badges: ["Ekonomis", "Best Value"],
    features: ["Bersih", "Enak", "Harga terjangkau", "Cocok untuk harian"],
    rating: 4.8,
    imageColor: "bg-[#3F7D45]/20",
    imageUrl: "/images/medium.png"
  },
  {
    id: "3",
    name: "Nusara Pandan Wangi",
    slug: "nusara-pandan-wangi",
    description: "Beras pilihan dengan aroma khas dan tekstur pulen.",
    price: 85000,
    variants: ["5 KG", "10 KG"],
    badges: ["Premium", "Aromatic"],
    features: ["Aroma khas", "Pulen", "Berkualitas", "Pilihan keluarga"],
    rating: 5.0,
    imageColor: "bg-[#78A85A]/20",
    imageUrl: "/images/pandan.png"
  }
];

export function ProductGrid({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Pilihan Beras <span className="text-primary">Nusara Niaga</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground font-light"
            >
              Beras pilihan untuk kebutuhan keluarga sehari-hari.
            </motion.p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DUMMY_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
