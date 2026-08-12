import { FarmToTable } from "@/components/FarmToTable";
import { CheckCircle2, ShieldCheck, Factory } from "lucide-react";

export const metadata = {
  title: "Proses Produksi | Nusara Niaga",
  description: "Bagaimana kami menjaga kualitas beras dari sawah hingga ke meja makan Anda.",
};

export default function ProsesPage() {
  return (
    <div className="pt-0 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 text-center max-w-5xl mx-auto px-4 md:px-6">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] -z-10 rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
          ⚙️ Proses Berkualitas
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-foreground tracking-tight leading-[1.1]">
          Standar Kualitas <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#78A85A]">
            Nusara Niaga.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
          Kami mengontrol setiap langkah proses pascapanen untuk memastikan beras yang Anda terima aman, bersih, dan lezat.
        </p>
      </section>

      <FarmToTable />

      <section className="container mx-auto px-4 md:px-6 max-w-6xl mt-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quality Control</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">Tiga pilar utama dalam menjaga kualitas beras Nusantara.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card border border-border/40 p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Kadar Air Terjaga</h3>
            <p className="text-muted-foreground leading-relaxed">
              Beras kami dikeringkan hingga mencapai kadar air ideal (maks. 14%) agar tahan lama, tidak mudah apek, dan bebas dari jamur berbahaya.
            </p>
          </div>
          
          <div className="bg-card border border-border/40 p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-inner">
              <Factory className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Sortasi Modern</h3>
            <p className="text-muted-foreground leading-relaxed">
              Melalui proses penyaringan ketat menggunakan mesin sortasi warna (color sorter) tingkat tinggi untuk memisahkan beras menir, kerikil, dan gabah kosong.
            </p>
          </div>
          
          <div className="bg-card border border-border/40 p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-inner">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Higienis & Alami</h3>
            <p className="text-muted-foreground leading-relaxed">
              Tanpa pemutih, tanpa pengawet, dan tanpa pewangi buatan. Murni kualitas beras lokal Indonesia yang diproses secara sehat dan alami.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
