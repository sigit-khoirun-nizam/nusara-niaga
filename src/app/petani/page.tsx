import { ImpactSection } from "@/components/ImpactSection";
import { Users, Heart, MapPin, Wheat } from "lucide-react";

export const metadata = {
  title: "Petani & Desa | Nusara Niaga",
  description: "Mengenal para pahlawan di balik produk Nusara Niaga.",
};

export default function PetaniPage() {
  return (
    <div className="pt-8 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Pahlawan di Balik <span className="text-primary">Nusara Niaga.</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Berkenalan lebih dekat dengan para petani dan masyarakat desa yang berdedikasi menghasilkan beras berkualitas untuk meja makan Anda.
        </p>
      </div>

      {/* Story Section Placeholder */}
      <section className="container mx-auto px-4 md:px-6 max-w-5xl mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square md:aspect-auto md:h-[500px] bg-muted rounded-3xl overflow-hidden flex items-center justify-center text-muted-foreground relative">
            <div className="absolute inset-0 bg-primary/10" />
            <Users className="w-16 h-16 opacity-50" />
            <span className="sr-only">Foto Petani</span>
          </div>
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl text-primary mb-2">
              <Wheat className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Kisah Pak Darmo dari Desa Sukamaju</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "Sejak bergabung dengan Nusara Niaga, hasil panen kami diserap dengan harga yang adil. Kami kini bisa lebih fokus merawat padi tanpa khawatir harga anjlok saat panen raya."
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nusara Niaga tidak sekadar membeli gabah, tapi juga membangun kemitraan yang berkelanjutan. Kami memastikan standar kualitas terpenuhi sejak pemilihan benih hingga panen, sehingga konsumen mendapatkan beras terbaik.
            </p>
            <div className="flex items-center gap-2 text-primary font-medium">
              <MapPin className="w-5 h-5" />
              <span>Desa Sukamaju, Jawa Barat</span>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section Component */}
      <ImpactSection />

      {/* Stats */}
      <section className="container mx-auto px-4 md:px-6 max-w-5xl mt-20">
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold text-primary">50+</h3>
              <p className="text-muted-foreground font-medium">Mitra Petani</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold text-primary">12</h3>
              <p className="text-muted-foreground font-medium">Desa Binaan</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold text-primary">100%</h3>
              <p className="text-muted-foreground font-medium">Jejak Lokal</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
