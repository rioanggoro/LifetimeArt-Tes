'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    // Perbaikan: Menggunakan warna background yang sedikit lebih soft (off-black)
    <section className="w-full bg-[#111111] text-white relative">
      <div className="container mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content Area */}
        <div className="flex flex-col items-start space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            // Perbaikan: Styling pill agar lebih sesuai desain
            className="inline-flex items-center gap-3 rounded-full bg-neutral-800/90 px-4 py-2 text-sm font-medium text-neutral-300"
          >
            {/* Perbaikan: Warna dot menjadi hijau */}
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Available for work
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            // Perbaikan: Ukuran font disesuaikan agar tidak terlalu besar dan line-height lebih pas
            className="text-4xl font-normal tracking-tight sm:text-5xl lg:text-6xl leading-tight"
          >
            Your trusted partner for quality home improvement
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            // Perbaikan: Menggunakan warna dari palet neutral untuk konsistensi
            className="max-w-[600px] text-neutral-400 md:text-lg"
          >
            LifetimeArt delivers expert home improvements, creating beautiful
            and functional spaces with quality craftsmanship.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {/* Perbaikan: Styling tombol dibuat lebih sederhana dan sesuai desain */}
            <Button
              asChild
              className="rounded-full bg-neutral-800 text-white hover:bg-neutral-700 h-14 px-8 text-base transition-colors flex items-center gap-2"
            >
              <Link href="#">
                Work with us
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Right Content Area */}
        <div className="relative w-full h-[400px] lg:h-[600px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/hero-image.jpg" // Pastikan path ini benar
              fill
              alt="Modern kitchen and dining area"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>
          {/* Testimonial Badge */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            // Perbaikan: Posisi dan styling disesuaikan untuk efek glassmorphism yang lebih baik
            className="absolute bottom-8 right-8 bg-black/30 backdrop-blur-lg p-5 rounded-xl shadow-xl max-w-[320px] text-white border border-white/10"
          >
            <div className="flex gap-1 mb-3">
              {/* Perbaikan: Warna bintang menjadi kuning/emas */}
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <p className="text-sm font-light text-neutral-200">
              {
                '"LifetimeArt has been a game-changer for my home. Their ability to blend functionality with exquisite design is unparalleled."'
              }
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
