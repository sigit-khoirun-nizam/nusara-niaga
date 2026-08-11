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
    <div className="pt-0 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 text-center max-w-5xl mx-auto px-4 md:px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-primary/10 blur-[100px] -z-10 rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
          ✨ Cerita Nusara Niaga
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-foreground tracking-tight leading-[1.1]">
          Membangun Perdagangan Desa yang <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#78A85A]">
            Lebih Dekat, Adil, & Modern.
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
          Nusara Niaga hadir untuk memperpendek jarak antara hasil pertanian desa dan kebutuhan masyarakat. Kami memastikan ekosistem yang sehat untuk semua.
        </p>
      </section>

      {/* Vision Mission */}
      <section className="relative py-24 mb-24">
        {/* Background Decorative */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-transparent -z-10" />
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Vision Card */}
            <div className="bg-card border border-border/50 rounded-3xl p-10 md:p-12 shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Visi Kami</h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                "Menjadi brand perdagangan hasil desa terpercaya yang menghubungkan produk lokal dengan masyarakat Indonesia melalui sistem yang adil dan modern."
              </p>
            </div>
            
            {/* Mission Card */}
            <div className="bg-primary text-primary-foreground rounded-3xl p-10 md:p-12 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group">
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all" />
              <div className="w-16 h-16 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-8 shadow-inner backdrop-blur-md">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Misi Kami</h2>
              <ul className="space-y-4 text-primary-foreground/90 text-lg">
                <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" /> Meningkatkan akses pasar petani</li>
                <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" /> Menyediakan produk berkualitas tinggi</li>
                <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" /> Memberikan harga yang kompetitif</li>
                <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" /> Mengembangkan ekonomi kreatif desa</li>
                <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" /> Membangun rantai pasok transparan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Nilai Brand</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Prinsip yang kami pegang teguh dalam setiap langkah membangun Nusara Niaga.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((v) => (
            <div key={v.title} className="bg-card border border-border/40 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <v.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
