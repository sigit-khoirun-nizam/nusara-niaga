"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, CheckCircle2 } from "lucide-react";

export default function CheckoutPage() {
  const { items, getTotalPrice, getTotalItems } = useCartStore();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
  });

  const generateWhatsAppMessage = () => {
    let message = `Halo Nusara Niaga, saya ingin memesan:\n\n`;
    items.forEach((item) => {
      message += `- ${item.name} (${item.variant}) x${item.quantity}\n`;
    });
    message += `\nTotal Harga: Rp ${getTotalPrice().toLocaleString('id-ID')}\n`;
    message += `\nData Pengiriman:\nNama: ${formData.name}\nNo. WhatsApp: ${formData.phone}\nAlamat: ${formData.address}, ${formData.city}\n\nMohon info total dan ongkos kirim. Terima kasih.`;
    
    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Mohon lengkapi data pengiriman.");
      return;
    }
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/6281100000000?text=${message}`, "_blank");
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Tidak ada barang untuk dicheckout</h1>
        <Button onClick={() => router.push("/produk")}>Kembali Belanja</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 min-h-[70vh]">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Customer Info Form */}
          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">1</span>
              Informasi Pengiriman
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nama Lengkap</label>
                  <Input 
                    placeholder="Masukkan nama Anda" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nomor WhatsApp</label>
                  <Input 
                    placeholder="0812xxxxxx" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Alamat Lengkap</label>
                <Input 
                  placeholder="Nama jalan, gedung, no. rumah" 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Kota/Kecamatan</label>
                <Input 
                  placeholder="Kecamatan, Kota" 
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                />
              </div>
            </form>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">2</span>
              Metode Pembayaran
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="border border-primary bg-primary/5 rounded-xl p-4 flex items-center justify-between cursor-pointer">
                  <div className="font-medium">Transfer WhatsApp</div>
                  <CheckCircle2 className="text-primary w-5 h-5" />
               </div>
               <div className="border border-border rounded-xl p-4 flex items-center justify-between opacity-50 cursor-not-allowed">
                  <div className="font-medium">Transfer Bank (Segera)</div>
               </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Saat ini kami memproses pesanan melalui WhatsApp untuk memastikan ketersediaan dan ongkos kirim terbaik untuk Anda.
            </p>
          </div>
        </div>
        
        <div>
          {/* Order Summary */}
          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm sticky top-24">
            <h3 className="font-bold text-xl mb-6">Pesanan Anda</h3>
            
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex justify-between text-sm">
                  <div>
                    <span className="font-medium">{item.name}</span>
                    <p className="text-muted-foreground">{item.variant} x{item.quantity}</p>
                  </div>
                  <span className="font-medium">Rp {(item.price * item.quantity).toLocaleString('id-ID')}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 mb-6 space-y-3">
              <div className="flex justify-between text-muted-foreground text-sm">
                <span>Subtotal ({getTotalItems()} barang)</span>
                <span>Rp {getTotalPrice().toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between text-muted-foreground text-sm">
                <span>Ongkos Kirim</span>
                <span>Dihitung di WA</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-foreground pt-2">
                <span>Total</span>
                <span className="text-primary">Rp {getTotalPrice().toLocaleString('id-ID')}</span>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="w-full h-14 text-base bg-[#25D366] text-white hover:bg-[#128C7E]" 
              onClick={handleWhatsAppOrder}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Pesan via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
