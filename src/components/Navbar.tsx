"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ShoppingCart, Leaf, ChevronRight, Phone, Home, Package, Users, Factory, BookOpen, HelpCircle, MapPin } from "lucide-react";

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
  { name: "Beranda", href: "/", icon: Home },
  { name: "Produk", href: "/produk", icon: Package },
  { name: "Tentang Kami", href: "/tentang-kami", icon: Users },
  { name: "Petani", href: "/petani", icon: MapPin },
  { name: "Proses", href: "/proses", icon: Factory },
  { name: "Edukasi", href: "/edukasi", icon: BookOpen },
  { name: "FAQ", href: "/faq", icon: HelpCircle },
  { name: "Kontak", href: "/kontak", icon: Phone },
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
              <SheetTitle className="text-center mt-6 mb-8 font-extrabold text-primary flex items-center justify-center gap-3 text-2xl">
                <div className="bg-primary text-primary-foreground p-1.5 rounded-lg shadow-sm">
                  <Leaf className="w-6 h-6" />
                </div>
                NUSARA NIAGA
              </SheetTitle>
              
              <nav className="grid grid-cols-2 gap-3 mt-4">
                {navigation.map((item) => (
                  <SheetClose
                    key={item.name}
                    render={<Link href={item.href} />}
                    className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/30 hover:bg-primary/5 group transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-sm text-muted-foreground group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-sm text-foreground/80 group-hover:text-primary transition-colors text-center leading-tight">
                      {item.name}
                    </span>
                  </SheetClose>
                ))}
              </nav>
              
              <div className="mt-auto pt-8">
                 <div className="p-5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border border-primary/20 relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
                    <h4 className="font-bold text-primary mb-2 text-lg">Butuh Bantuan?</h4>
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed relative z-10">
                      Hubungi layanan pelanggan kami untuk pertanyaan atau pemesanan skala besar.
                    </p>
                    <a href="https://wa.me/6281100000000" target="_blank" rel="noopener noreferrer" className="block w-full relative z-10">
                      <Button className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] shadow-md h-12 rounded-xl text-base">
                         <Phone className="w-5 h-5 mr-2" />
                         WhatsApp Kami
                      </Button>
                    </a>
                 </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
