import { FarmToTable } from "@/components/FarmToTable";
import { CheckCircle2, ShieldCheck, Factory } from "lucide-react";

export const metadata = {
  title: "Proses Produksi | Nusara Niaga",
  description: "Bagaimana kami menjaga kualitas beras dari sawah hingga ke meja makan Anda.",
};

export default function ProsesPage() {
  return (
    <div className="pt-8 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Standar Kualitas <span className="text-primary">Nusara Niaga.</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Kami mengontrol setiap langkah proses pascapanen untuk memastikan beras yang Anda terima aman, bersih, dan lezat.
        </p>
      </div>

      <FarmToTable />

      <section className="container mx-auto px-4 md:px-6 max-w-5xl mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Quality Control</h2>
          <p className="text-muted-foreground">Tiga pilar kualitas yang selalu kami jaga.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Kadar Air Terjaga</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Beras kami dikeringkan hingga mencapai kadar air ideal (maks. 14%) agar tahan lama, tidak mudah apek, dan bebas dari jamur.
            </p>
          </div>
          
          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
              <Factory className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Sortasi Modern</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Melalui proses penyaringan ketat menggunakan mesin sortasi warna (color sorter) untuk memisahkan beras menir, kerikil, dan gabah kosong.
            </p>
          </div>
          
          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Higienis & Alami</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tanpa pemutih, tanpa pengawet, dan tanpa pewangi buatan. Murni kualitas beras lokal Indonesia yang diproses secara alami.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
