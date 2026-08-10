"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Beras Nusara Niaga berasal dari mana?",
    answer: "Beras Nusara Niaga berasal dari petani dan sentra pertanian lokal di berbagai desa di Indonesia yang telah bekerja sama dengan kami."
  },
  {
    question: "Apakah beras langsung dari petani?",
    answer: "Ya, kami mengambil gabah langsung dari petani lokal atau melalui penggilingan desa yang menjadi mitra kami untuk memastikan kualitas dan jejak produk yang transparan."
  },
  {
    question: "Apa perbedaan Nusara Premium dan Nusara Medium?",
    answer: "Nusara Premium menggunakan varietas pilihan dengan tingkat kepulenan tinggi dan butiran utuh yang lebih banyak. Nusara Medium adalah beras berkualitas standar yang bersih dan cocok untuk konsumsi harian dengan harga lebih ekonomis."
  },
  {
    question: "Apakah tersedia ukuran 5 KG?",
    answer: "Ya, kami menyediakan berbagai pilihan ukuran mulai dari 5 KG, 10 KG, hingga 25 KG sesuai kebutuhan keluarga Anda."
  },
  {
    question: "Apakah bisa membeli dalam jumlah besar?",
    answer: "Tentu. Untuk pembelian dalam partai besar atau untuk kebutuhan bisnis (HORECA), silakan hubungi layanan pelanggan kami via WhatsApp untuk mendapatkan penawaran khusus."
  },
  {
    question: "Apakah bisa COD?",
    answer: "Saat ini fitur Cash on Delivery (COD) tersedia untuk wilayah pengiriman tertentu yang didukung oleh kurir lokal kami."
  },
  {
    question: "Bagaimana cara pembayaran?",
    answer: "Kami menerima berbagai metode pembayaran termasuk Transfer Bank (Virtual Account), QRIS, E-Wallet (GoPay, OVO, Dana), dan COD (di area tertentu)."
  },
  {
    question: "Berapa lama pengiriman?",
    answer: "Untuk layanan Same Day atau pengiriman lokal, pesanan akan sampai di hari yang sama. Untuk pengiriman reguler, biasanya memakan waktu 1-3 hari kerja tergantung lokasi Anda."
  },
  {
    question: "Apakah bisa dikirim ke luar daerah?",
    answer: "Ya, kami melayani pengiriman ke berbagai daerah di Indonesia menggunakan ekspedisi yang telah bekerja sama dengan kami."
  },
  {
    question: "Bagaimana cara menyimpan beras?",
    answer: "Simpan beras di tempat yang sejuk, kering, dan tertutup rapat (seperti wadah kedap udara) agar terhindar dari kutu dan menjaga kualitas kepulenannya."
  },
  {
    question: "Apakah beras memiliki informasi tanggal panen?",
    answer: "Ya, komitmen transparansi kami memastikan Anda dapat mengetahui informasi asal desa, varietas, dan tanggal panen pada kemasan produk tertentu atau halaman detail produk."
  },
  {
    question: "Bagaimana jika produk yang diterima rusak?",
    answer: "Kami memiliki garansi kualitas. Jika kemasan rusak atau beras tidak sesuai standar saat diterima, silakan hubungi Customer Service kami dalam waktu 1x24 jam untuk proses retur atau penukaran."
  }
];

export function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Pertanyaan yang Sering Diajukan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Temukan jawaban untuk pertanyaan umum seputar Nusara Niaga.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion className="w-full bg-card rounded-2xl p-4 md:p-8 shadow-sm border border-border">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
