import { ProductGrid } from "@/components/ProductGrid";
import { Search, ChevronDown, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Produk Kami | Nusara Niaga",
  description: "Pilihan beras lokal berkualitas dari Nusara Niaga untuk kebutuhan keluarga Anda.",
};

export default function ProdukPage() {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-primary/5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-3xl -z-10 rounded-bl-[100px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-secondary/10 blur-3xl -z-10 rounded-tr-[100px] opacity-50" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
              🌾 Hasil Panen Terbaik Nusantara
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
              Semua <span className="text-primary relative">
                Produk
                <svg className="absolute -bottom-2 left-0 w-full text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Jelajahi koleksi beras premium kami yang bersumber langsung dari petani lokal Indonesia. Kualitas tinggi untuk meja makan Anda.
            </p>
            
            {/* Search and Filter Bar */}
            <div className="flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto bg-card p-2 rounded-2xl shadow-lg border border-border/50">
              <div className="relative flex-1 w-full group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input 
                  placeholder="Cari jenis beras..." 
                  className="pl-12 h-12 w-full border-none bg-transparent focus-visible:ring-0 shadow-none text-base"
                />
              </div>
              <div className="w-full sm:w-auto flex items-center gap-2">
                <Button variant="outline" className="h-12 rounded-xl px-4 border-border hover:bg-muted w-full sm:w-auto">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button className="h-12 rounded-xl px-8 w-full sm:w-auto">
                  Cari
                </Button>
              </div>
            </div>
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              <span className="text-sm font-medium text-muted-foreground mr-2">Populer:</span>
              {["Pandan Wangi", "Premium", "Medium", "Beras Merah"].map((cat) => (
                <button key={cat} className="px-4 py-1.5 rounded-full bg-background border border-border text-sm hover:border-primary hover:text-primary transition-colors">
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <div className="-mt-8">
        <ProductGrid hideHeader={true} />
      </div>
    </div>
  );
}
