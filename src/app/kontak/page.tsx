"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function KontakPage() {
  return (
    <div className="pt-8 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Mari Tumbuhkan <span className="text-primary">Ekonomi Desa</span> Bersama.
          </h1>
          <p className="text-lg text-muted-foreground">
            Punya pertanyaan, masukan, atau ingin bekerja sama? Jangan ragu untuk menghubungi tim kami. Kami siap mendengarkan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Informasi Kontak</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">WhatsApp / Telepon</h3>
                  <p className="text-muted-foreground">+62 811-XXXX-XXXX</p>
                  <p className="text-sm text-muted-foreground mt-1">Senin - Sabtu, 08:00 - 17:00 WIB</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground">halo@nusaraniaga.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Kantor Pusat</h3>
                  <p className="text-muted-foreground">
                    Gedung Nusara Niaga<br />
                    Jl. Jenderal Sudirman No. 123<br />
                    Jakarta Selatan, 12190<br />
                    Indonesia
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="font-semibold text-lg mb-4">Media Sosial</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" className="w-12 h-12 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" className="w-12 h-12 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.63-1.07 5.25-2.87 7.12-2.14 2.23-5.25 3.12-8.23 2.54-2.61-.51-4.9-2.22-6.05-4.59-1.25-2.6-1.21-5.75.14-8.31 1.07-2.03 2.96-3.6 5.17-4.2 2.3-.63 4.79-.44 6.94.51v4.36c-1.12-.38-2.39-.47-3.56-.25-1.16.22-2.23.9-2.91 1.87-.66.94-.97 2.12-.86 3.27.12 1.25.79 2.42 1.83 3.1 1.08.7 2.46.88 3.7.53 1.22-.35 2.25-1.25 2.73-2.42.34-.84.45-1.77.42-2.69-.03-2.93-.01-5.86-.01-8.79z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium">Nama Lengkap</label>
                <Input placeholder="Masukkan nama Anda" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Nomor WhatsApp</label>
                <Input placeholder="0812xxxxxx" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="email@contoh.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Pesan</label>
                <textarea 
                  className="w-full min-h-[120px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                ></textarea>
              </div>
              <Button type="submit" size="lg" className="w-full mt-2">
                Hubungi Nusara Niaga
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
