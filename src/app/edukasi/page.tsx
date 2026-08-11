import { BookOpen } from "lucide-react";

export const metadata = {
  title: "Edukasi | Nusara Niaga",
  description: "Kenali beras Anda dan proses di baliknya.",
};

const articles = [
  "Cara memilih beras berkualitas",
  "Perbedaan beras premium dan medium",
  "Cara menyimpan beras",
  "Mengenal varietas padi Indonesia",
  "Cara mencuci beras yang benar",
  "Berapa kebutuhan beras keluarga?",
  "Dari gabah menjadi beras",
  "Mengenal proses penggilingan padi"
];

export default function EdukasiPage() {
  return (
    <div className="pt-0 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 text-center max-w-5xl mx-auto px-4 md:px-6">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] -z-10 rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
          📚 Jendela Pengetahuan
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-foreground tracking-tight leading-[1.1]">
          Kenali <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#78A85A]">
            Beras Anda.
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
          Temukan berbagai artikel dan panduan untuk mengenali beras yang baik, cara penyimpanannya, hingga proses di balik pengolahannya.
        </p>
      </section>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((title, index) => (
            <div key={index} className="bg-card rounded-3xl overflow-hidden border border-border/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer flex flex-col h-full relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="aspect-[4/3] bg-muted/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                  <BookOpen className="w-12 h-12 text-primary opacity-40 group-hover:opacity-100 group-hover:drop-shadow-lg transition-all duration-500" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-bold text-xl leading-tight mb-4 group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <div className="mt-auto text-sm text-primary font-bold flex items-center gap-2">
                  Baca Artikel <span className="text-xl leading-none group-hover:translate-x-2 transition-transform">&rsaquo;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
