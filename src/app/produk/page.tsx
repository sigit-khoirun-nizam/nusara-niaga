import { ProductGrid } from "@/components/ProductGrid";

export const metadata = {
  title: "Produk Kami | Nusara Niaga",
  description: "Pilihan beras lokal berkualitas dari Nusara Niaga untuk kebutuhan keluarga Anda.",
};

export default function ProdukPage() {
  return (
    <div className="pt-8">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Semua <span className="text-primary">Produk</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Jelajahi koleksi beras premium kami yang bersumber langsung dari petani lokal Indonesia.
        </p>
      </div>
      <ProductGrid />
    </div>
  );
}
