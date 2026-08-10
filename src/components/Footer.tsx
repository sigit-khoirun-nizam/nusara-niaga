import Link from "next/link";
import { Leaf, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-background text-primary p-1.5 rounded-md">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="font-bold text-2xl tracking-tight">
                NUSARA NIAGA
              </span>
            </Link>
            <p className="text-primary-foreground/90 font-medium italic">
              "Dari Desa, Untuk Nusantara."
            </p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-sm">
              Nusara Niaga menghubungkan hasil pertanian lokal dengan kebutuhan
              masyarakat melalui perdagangan yang modern, transparan, dan
              berkelanjutan.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-background">
              Jelajahi
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Beranda", href: "/" },
                { name: "Produk", href: "/produk" },
                { name: "Tentang Kami", href: "/tentang-kami" },
                { name: "Petani & Desa", href: "/petani" },
                { name: "Proses Produksi", href: "/proses" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/70 hover:text-background transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-background">
              Bantuan
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Edukasi", href: "/edukasi" },
                { name: "FAQ", href: "/faq" },
                { name: "Kontak", href: "/kontak" },
                { name: "Lacak Pesanan", href: "/lacak-pesanan" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/70 hover:text-background transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service & Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-background">
              Layanan Pelanggan
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 mt-0.5" />
                <span>+62 811-XXXX-XXXX</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 mt-0.5" />
                <span>halo@nusaraniaga.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>

            <div className="flex items-center gap-4 mt-6">
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-background hover:text-primary transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-background hover:text-primary transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-background hover:text-primary transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.63-1.07 5.25-2.87 7.12-2.14 2.23-5.25 3.12-8.23 2.54-2.61-.51-4.9-2.22-6.05-4.59-1.25-2.6-1.21-5.75.14-8.31 1.07-2.03 2.96-3.6 5.17-4.2 2.3-.63 4.79-.44 6.94.51v4.36c-1.12-.38-2.39-.47-3.56-.25-1.16.22-2.23.9-2.91 1.87-.66.94-.97 2.12-.86 3.27.12 1.25.79 2.42 1.83 3.1 1.08.7 2.46.88 3.7.53 1.22-.35 2.25-1.25 2.73-2.42.34-.84.45-1.77.42-2.69-.03-2.93-.01-5.86-.01-8.79z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2026 Nusara Niaga. Semua Hak Dilindungi.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm text-primary-foreground/50 hover:text-background transition-colors"
            >
              Syarat & Ketentuan
            </Link>
            <Link
              href="#"
              className="text-sm text-primary-foreground/50 hover:text-background transition-colors"
            >
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
