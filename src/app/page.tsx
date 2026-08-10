import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { ProductGrid } from "@/components/ProductGrid";
import { FarmToTable } from "@/components/FarmToTable";
import { FAQ } from "@/components/FAQ"; // We will create this next
import { ImpactSection } from "@/components/ImpactSection"; // We will create this next

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ProductGrid />
      <FarmToTable />
      <ImpactSection />
      <FAQ />
    </>
  );
}
