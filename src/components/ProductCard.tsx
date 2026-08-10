"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface ProductProps {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  variants: string[];
  badges: string[];
  features: string[];
  rating: number;
  imageColor?: string;
  imageUrl?: string;
}

export function ProductCard({ product }: { product: ProductProps }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  return (
    <Card className="group overflow-hidden border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full bg-card">
      <Link href={`/produk/${product.slug}`} className="block relative aspect-square overflow-hidden bg-muted">
        <div className="absolute inset-0 z-10 flex flex-col p-4 gap-2 items-start">
          {product.badges.map((badge) => (
            <Badge key={badge} className="bg-primary text-primary-foreground shadow-sm">
              {badge}
            </Badge>
          ))}
        </div>
        {/* Product Image */}
        <div className={`w-full h-full ${product.imageColor || "bg-secondary/40"} group-hover:scale-105 transition-transform duration-500 flex items-center justify-center relative`}>
          {product.imageUrl ? (
            <Image src={product.imageUrl} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          ) : (
            <span className="text-muted-foreground/60 font-semibold">{product.name} Image</span>
          )}
        </div>
      </Link>
      
      <CardContent className="p-6 flex-grow flex flex-col gap-4">
        <div className="flex justify-between items-start gap-4">
          <div>
            <Link href={`/produk/${product.slug}`} className="hover:text-primary transition-colors">
              <h3 className="font-bold text-xl text-foreground mb-1">{product.name}</h3>
            </Link>
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium text-foreground">{product.rating}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold text-xl text-primary">
              Rp {product.price.toLocaleString('id-ID')}
            </p>
            <p className="text-xs text-muted-foreground">/{selectedVariant}</p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        {/* Variants Selector */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {product.variants.map((variant) => (
            <button
              key={variant}
              onClick={() => setSelectedVariant(variant)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors border ${
                selectedVariant === variant 
                  ? "bg-primary text-primary-foreground border-primary" 
                  : "bg-background text-foreground hover:bg-muted border-border"
              }`}
            >
              {variant}
            </button>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 gap-3">
        <Button 
          render={
            <a 
              href={`https://wa.me/6281100000000?text=${encodeURIComponent(`Halo Nusara Niaga, saya tertarik untuk membeli produk *${product.name}* varian *${selectedVariant}*. Apakah stoknya tersedia?`)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
            />
          } 
          className="w-full group"
        >
          Beli Sekarang
        </Button>
        <Button variant="outline" size="icon" className="shrink-0 text-primary border-primary/20 hover:bg-primary/10">
          <ShoppingCart className="w-5 h-5" />
        </Button>
      </CardFooter>
    </Card>
  );
}
