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
    <div className="pt-8 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Kenali <span className="text-primary">Beras Anda.</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Temukan berbagai artikel dan panduan untuk mengenali beras yang baik, cara penyimpanannya, hingga proses di balik pengolahannya.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((title, index) => (
            <div key={index} className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow group cursor-pointer flex flex-col h-full">
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <BookOpen className="w-10 h-10 text-primary opacity-50" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-lg leading-tight mb-4 group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <div className="mt-auto text-sm text-primary font-medium flex items-center gap-1">
                  Baca Artikel <span className="text-lg leading-none">&rsaquo;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
