"use client";

import { MapPin, Phone, Mail, User, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function KontakPage() {
  return (
    <div className="pt-0 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 text-center max-w-5xl mx-auto px-4 md:px-6">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-primary/10 blur-[120px] -z-10 rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
          📞 Hubungi Kami
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-foreground tracking-tight leading-[1.1]">
          Mari Tumbuhkan <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#78A85A]">
            Ekonomi Desa Bersama.
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
          Punya pertanyaan, masukan, atau ingin bekerja sama? Jangan ragu untuk menghubungi tim kami. Kami siap mendengarkan.
        </p>
      </section>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl mt-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact Info */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Informasi Kontak</h2>
              <p className="text-muted-foreground text-lg">Anda juga dapat menghubungi kami melalui saluran di bawah ini.</p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors">WhatsApp / Telepon</h3>
                  <p className="text-foreground text-lg">+62 811-XXXX-XXXX</p>
                  <p className="text-sm text-muted-foreground mt-1">Senin - Sabtu, 08:00 - 17:00 WIB</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors">Email</h3>
                  <p className="text-foreground text-lg">halo@nusaraniaga.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors">Kantor Pusat</h3>
                  <p className="text-muted-foreground leading-relaxed">
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
          <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden">
            {/* Decorative background blur */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            
            <h2 className="text-3xl font-bold mb-2">Kirim Pesan</h2>
            <p className="text-muted-foreground mb-8">Kami akan membalas pesan Anda secepatnya.</p>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label className="text-sm font-medium flex items-center gap-2 text-foreground/80 group-focus-within:text-primary transition-colors">
                    <User className="w-4 h-4" />
                    Nama Lengkap
                  </label>
                  <Input 
                    placeholder="Masukkan nama Anda" 
                    className="h-12 rounded-xl bg-muted/50 border-transparent focus:bg-background focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-sm font-medium flex items-center gap-2 text-foreground/80 group-focus-within:text-primary transition-colors">
                    <Phone className="w-4 h-4" />
                    Nomor WhatsApp
                  </label>
                  <Input 
                    placeholder="0812xxxxxx" 
                    className="h-12 rounded-xl bg-muted/50 border-transparent focus:bg-background focus:border-primary transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2 group">
                <label className="text-sm font-medium flex items-center gap-2 text-foreground/80 group-focus-within:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="email@contoh.com" 
                  className="h-12 rounded-xl bg-muted/50 border-transparent focus:bg-background focus:border-primary transition-all"
                />
              </div>
              
              <div className="space-y-2 group">
                <label className="text-sm font-medium flex items-center gap-2 text-foreground/80 group-focus-within:text-primary transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  Pesan
                </label>
                <textarea 
                  className="w-full min-h-[150px] rounded-xl border-transparent bg-muted/50 px-4 py-3 text-sm shadow-sm placeholder:text-muted-foreground focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none"
                  placeholder="Ceritakan detail pertanyaan atau kerja sama yang Anda inginkan..."
                ></textarea>
              </div>
              
              <Button type="submit" size="lg" className="w-full h-14 rounded-xl text-base font-medium group transition-all mt-4">
                Kirim Pesan Sekarang
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
