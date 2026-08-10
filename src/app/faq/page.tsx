import { FAQ } from "@/components/FAQ";

export const metadata = {
  title: "FAQ | Nusara Niaga",
  description: "Pertanyaan yang sering diajukan tentang produk dan layanan Nusara Niaga.",
};

export default function FAQPage() {
  return (
    <div className="pt-8">
      <FAQ />
    </div>
  );
}
