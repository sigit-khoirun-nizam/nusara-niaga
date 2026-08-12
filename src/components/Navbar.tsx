"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ShoppingCart, Leaf, ChevronRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Produk", href: "/produk" },
  { name: "Tentang Kami", href: "/tentang-kami" },
  { name: "Petani", href: "/petani" },
  { name: "Proses", href: "/proses" },
  { name: "Edukasi", href: "/edukasi" },
  { name: "FAQ", href: "/faq" },
  { name: "Kontak", href: "/kontak" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm py-3"
          : "bg-background border-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-md group-hover:bg-primary/90 transition-colors">
              <Leaf className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-primary">
              NUSARA NIAGA
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative group w-9 h-9">
              <ShoppingCart className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />
              {/* Optional: Add badge here for cart count later */}
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
            </Button>
          </Link>

          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="lg:hidden" />}>
                <Menu className="w-5 h-5" />
                <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="text-left mb-6 font-bold text-primary flex items-center gap-2">
                <Leaf className="w-5 h-5" />
                NUSARA NIAGA
              </SheetTitle>
              <nav className="flex flex-col mt-4">
                {navigation.map((item) => (
                  <SheetClose
                    key={item.name}
                    render={<Link href={item.href} />}
                    className="flex items-center justify-between py-4 border-b border-border/50 text-lg font-medium text-foreground/90 hover:text-primary transition-colors"
                  >
                    {item.name}
                    <ChevronRight className="w-5 h-5 text-muted-foreground/50" />
                  </SheetClose>
                ))}
              </nav>
              
              <div className="mt-8 space-y-4">
                 <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
                    <h4 className="font-semibold text-primary mb-2">Butuh Bantuan?</h4>
                    <p className="text-sm text-muted-foreground mb-4">Hubungi layanan pelanggan kami untuk pertanyaan atau pemesanan.</p>
                    <Button render={<a href="https://wa.me/6281100000000" target="_blank" rel="noopener noreferrer" />} className="w-full bg-[#25D366] text-white hover:bg-[#128C7E]">
                       <Phone className="w-4 h-4 mr-2" />
                       WhatsApp Kami
                    </Button>
                 </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
