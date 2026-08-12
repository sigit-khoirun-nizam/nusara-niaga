import { ImpactSection } from "@/components/ImpactSection";
import { Users, Heart, MapPin, Wheat, TrendingUp, Award, Leaf, Quote } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Petani & Desa | Nusara Niaga",
  description: "Mengenal para pahlawan di balik produk Nusara Niaga.",
};

export default function PetaniPage() {
  return (
    <div className="pt-0 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 text-center max-w-5xl mx-auto px-4 md:px-6">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 blur-[120px] -z-10 rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
          👨‍🌾 Mitra Petani Kami
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-foreground tracking-tight leading-[1.1]">
          Pahlawan di Balik <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#78A85A]">
            Nusara Niaga.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
          Berkenalan lebih dekat dengan para petani dan masyarakat desa yang berdedikasi menghasilkan beras berkualitas untuk meja makan Anda.
        </p>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 md:px-6 max-w-6xl mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl -z-10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-muted rounded-[2rem] overflow-hidden flex items-center justify-center relative shadow-2xl">
              <Image 
                src="/images/petani.png" 
                alt="Foto Petani Pak Darmo" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-background/80 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-lg flex items-center gap-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Dedikasi Tinggi</p>
                  <p className="text-sm text-muted-foreground">Lebih dari 20 tahun bertani</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="space-y-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl text-primary shadow-inner">
              <Wheat className="w-8 h-8" />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Kisah Pak Darmo dari Desa Pucangro</h2>
              <div className="flex items-center gap-2 text-primary font-medium bg-primary/5 w-fit px-4 py-2 rounded-full border border-primary/10">
                <MapPin className="w-5 h-5" />
                <span>Desa Pucangro, Jawa Timur</span>
              </div>
            </div>
            
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/10 -z-10 transform -scale-x-100" />
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed italic">
                "Sejak bergabung dengan Nusara Niaga, hasil panen kami diserap dengan harga yang adil. Kami kini bisa lebih fokus merawat padi tanpa khawatir harga anjlok saat panen raya."
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nusara Niaga tidak sekadar membeli gabah, tapi juga membangun kemitraan yang berkelanjutan. Kami memastikan standar kualitas terpenuhi sejak pemilihan benih hingga panen, sehingga konsumen mendapatkan beras terbaik langsung dari tangan pertama.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section Component */}
      <ImpactSection />

      {/* Stats */}
      <section className="container mx-auto px-4 md:px-6 max-w-6xl mt-32">
        <div className="bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
            <div className="space-y-4 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#78A85A]">50+</h3>
              <p className="text-lg text-muted-foreground font-medium">Mitra Petani</p>
            </div>
            <div className="space-y-4 group md:border-x border-border/50 px-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#78A85A]">12</h3>
              <p className="text-lg text-muted-foreground font-medium">Desa Binaan</p>
            </div>
            <div className="space-y-4 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto group-hover:scale-110 transition-transform">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#78A85A]">100%</h3>
              <p className="text-lg text-muted-foreground font-medium">Jejak Lokal</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
