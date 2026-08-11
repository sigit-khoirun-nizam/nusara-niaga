import { FAQ } from "@/components/FAQ";

export const metadata = {
  title: "FAQ | Nusara Niaga",
  description: "Pertanyaan yang sering diajukan tentang produk dan layanan Nusara Niaga.",
};

export default function FAQPage() {
  return (
    <div className="pt-0 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-10 md:pt-32 md:pb-16 text-center max-w-5xl mx-auto px-4 md:px-6">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] -z-10 rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
          💡 Pusat Bantuan
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-foreground tracking-tight leading-[1.1]">
          Pertanyaan yang <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#78A85A]">
            Sering Diajukan.
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light mb-8">
          Temukan jawaban cepat untuk pertanyaan umum seputar produk, pengiriman, dan layanan Nusara Niaga.
        </p>
      </section>

      <div className="-mt-16">
        <FAQ hideHeader={true} />
      </div>
    </div>
  );
}
