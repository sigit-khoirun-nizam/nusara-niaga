import Link from "next/link";
import { ShoppingCart, Star, MessageCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Dummy data for now
const getProductBySlug = (slug: string) => {
  return {
    id: "1",
    name: slug === "nusara-medium" ? "Nusara Medium" : slug === "nusara-pandan-wangi" ? "Nusara Pandan Wangi" : "Nusara Premium",
    slug: slug,
    description: "Beras pilihan dengan tekstur pulen, bersih, dan cocok untuk keluarga. Setiap butir beras diproses dengan saksama untuk memastikan kualitas terbaik sampai di meja makan Anda.",
    price: slug === "nusara-medium" ? 65000 : slug === "nusara-pandan-wangi" ? 85000 : 75000,
    variants: ["5 KG", "10 KG", "25 KG"],
    badges: ["Premium", "Best Seller", "Fresh Harvest"],
    features: ["Pulen", "Bersih", "Wangi", "Cocok untuk keluarga", "Tidak mudah basi"],
    rating: 4.9,
    reviews: 128,
    imageColor: "bg-primary/20",
    details: {
      asal: "Desa Sukamaju, Jawa Barat",
      varietas: "IR64",
      panen: "Agustus 2026",
      penggilingan: "Mekar Tani Mill"
    }
  };
};

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Product Image Gallery Placeholder */}
        <div className="space-y-4">
          <div className={`w-full aspect-[4/5] md:aspect-square rounded-3xl ${product.imageColor} flex items-center justify-center shadow-sm border border-border/50`}>
             <span className="text-muted-foreground/60 font-semibold text-xl">{product.name} Image</span>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`aspect-square rounded-xl ${product.imageColor} opacity-70 hover:opacity-100 cursor-pointer transition-opacity border border-border/50`} />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.badges.map((badge) => (
                <Badge key={badge} className="bg-primary text-primary-foreground">
                  {badge}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
              {product.name}
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-base font-medium text-foreground">{product.rating}</span>
                <span className="text-muted-foreground text-sm">({product.reviews} ulasan)</span>
              </div>
            </div>
          </div>

          <div className="text-3xl md:text-4xl font-bold text-primary">
            Rp {product.price.toLocaleString('id-ID')}
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-4 pt-4 border-t border-border">
            <h3 className="font-semibold text-lg">Pilih Ukuran</h3>
            <div className="flex flex-wrap gap-3">
              {product.variants.map((variant, idx) => (
                <button
                  key={variant}
                  className={`px-5 py-3 rounded-xl border-2 font-medium transition-all ${
                    idx === 0 
                      ? "border-primary bg-primary/5 text-primary" 
                      : "border-border text-foreground hover:border-primary/50"
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-border">
            <h3 className="font-semibold text-lg">Kuantitas</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-border rounded-xl">
                <button className="px-4 py-3 hover:bg-muted rounded-l-xl transition-colors">-</button>
                <span className="px-4 py-3 font-medium min-w-[3rem] text-center">1</span>
                <button className="px-4 py-3 hover:bg-muted rounded-r-xl transition-colors">+</button>
              </div>
              <span className="text-sm text-muted-foreground">Sisa stok: 45</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
            <Button size="lg" className="flex-1 h-14 text-base">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Tambah ke Keranjang
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              className="flex-1 h-14 text-base bg-[#25D366] text-white hover:bg-[#128C7E]"
              render={
                <a 
                  href={`https://wa.me/6281100000000?text=${encodeURIComponent(`Halo Nusara Niaga, saya tertarik untuk memesan produk *${product.name}*. Apakah stoknya tersedia?`)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                />
              }
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Pesan via WhatsApp
            </Button>
          </div>
          
          <Button 
            render={
              <a 
                href={`https://wa.me/6281100000000?text=${encodeURIComponent(`Halo Nusara Niaga, saya tertarik untuk membeli produk *${product.name}*. Apakah stoknya tersedia?`)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
              />
            } 
            size="lg" 
            variant="outline" 
            className="w-full h-14 text-base"
          >
             Beli Sekarang
          </Button>

        </div>
      </div>

      {/* Detailed Info */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <Info className="text-primary" /> Informasi Produk
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Asal Beras</h3>
              <p className="font-medium text-lg">{product.details.asal}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Varietas</h3>
              <p className="font-medium text-lg">{product.details.varietas}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Panen</h3>
              <p className="font-medium text-lg">{product.details.panen}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Penggilingan</h3>
              <p className="font-medium text-lg">{product.details.penggilingan}</p>
            </div>
          </div>
          
          <div className="bg-muted/30 p-8 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4">Karakteristik</h3>
            <ul className="space-y-3">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
