"use client";

import Link from "next/link";
import { Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice, getTotalItems } = useCartStore();

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 min-h-[70vh]">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Keranjang Belanja</h1>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center text-muted-foreground mb-6">
            <ShoppingBag className="w-12 h-12" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Keranjang Anda kosong</h2>
          <p className="text-muted-foreground mb-8">
            Sepertinya Anda belum menambahkan produk apapun ke keranjang.
          </p>
          <Button render={<Link href="/produk" />} size="lg">
            Mulai Belanja
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Cart Items List */}
            {items.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4 md:gap-6 p-4 md:p-6 bg-card rounded-2xl border border-border shadow-sm">
                <div className={`w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-xl ${item.imageColor} flex items-center justify-center`}>
                   <span className="text-xs text-muted-foreground/60 text-center px-2">{item.name} Image</span>
                </div>
                
                <div className="flex-grow flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">Variasi: {item.variant}</p>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id, item.variant)}
                      className="text-muted-foreground hover:text-destructive transition-colors p-2"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-end mt-4">
                    <div className="flex items-center border border-border rounded-lg bg-background">
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-muted rounded-l-lg transition-colors"
                      >-</button>
                      <span className="px-3 py-1 font-medium min-w-[2.5rem] text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-muted rounded-r-lg transition-colors"
                      >+</button>
                    </div>
                    <p className="font-bold text-lg text-primary">
                      Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            <Link href="/produk" className="inline-flex items-center text-primary font-medium hover:underline">
              <ArrowLeft className="w-4 h-4 mr-2" /> Kembali Belanja
            </Link>
          </div>
          
          <div>
            {/* Order Summary */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm sticky top-24">
              <h3 className="font-bold text-xl mb-6">Ringkasan Belanja</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Total Barang ({getTotalItems()})</span>
                  <span>Rp {getTotalPrice().toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Diskon</span>
                  <span>Rp 0</span>
                </div>
                <div className="border-t border-border pt-4 flex justify-between font-bold text-lg text-foreground">
                  <span>Total Harga</span>
                  <span className="text-primary">Rp {getTotalPrice().toLocaleString('id-ID')}</span>
                </div>
              </div>
              
              <Button render={<Link href="/checkout" />} size="lg" className="w-full h-14 text-base">
                Lanjut ke Pembayaran
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
