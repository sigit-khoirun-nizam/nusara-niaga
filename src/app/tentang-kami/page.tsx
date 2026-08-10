import { Leaf, Target, Eye, Handshake, Sprout, ShieldCheck, Scale, Lightbulb } from "lucide-react";

export const metadata = {
  title: "Tentang Kami | Nusara Niaga",
  description: "Membangun perdagangan desa yang lebih dekat, adil, dan modern.",
};

const values = [
  { icon: MapPin, title: "Lokal", desc: "Mengutamakan potensi dan hasil desa." },
  { icon: ShieldCheck, title: "Kualitas", desc: "Menjaga kualitas produk secara konsisten." },
  { icon: Eye, title: "Transparansi", desc: "Terbuka mengenai produk dan prosesnya." },
  { icon: Scale, title: "Keadilan", desc: "Membangun hubungan yang sehat antara petani dan konsumen." },
  { icon: Lightbulb, title: "Inovasi", desc: "Menggunakan teknologi untuk mempermudah perdagangan." },
  { icon: Sprout, title: "Keberlanjutan", desc: "Membangun ekosistem ekonomi desa untuk jangka panjang." }
];

import { MapPin } from "lucide-react"; // Import MapPin here just in case

export default function AboutPage() {
  return (
    <div className="pt-8 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-20 text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
          Membangun Perdagangan Desa yang Lebih <span className="text-primary">Dekat, Adil, dan Modern.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Nusara Niaga hadir untuk memperpendek jarak antara hasil pertanian desa dan kebutuhan masyarakat.
          Kami memulai dari beras dan terus membangun ekosistem perdagangan produk lokal yang memberikan manfaat bagi petani, desa, dan konsumen.
        </p>
      </section>

      {/* Vision Mission */}
      <section className="bg-primary text-primary-foreground py-20 mb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-background/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">Visi Kami</h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed font-medium">
                "Menjadi brand perdagangan hasil desa terpercaya yang menghubungkan produk lokal dengan masyarakat Indonesia."
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-background/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">Misi Kami</h2>
              <ul className="space-y-3 text-primary-foreground/90">
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-background mt-2" /> Meningkatkan akses pasar petani</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-background mt-2" /> Menyediakan produk berkualitas</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-background mt-2" /> Memberikan harga yang kompetitif</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-background mt-2" /> Mengembangkan ekonomi desa</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-background mt-2" /> Membangun rantai pasok yang transparan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nilai Brand</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-card border border-border p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                <v.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{v.title}</h3>
              <p className="text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
