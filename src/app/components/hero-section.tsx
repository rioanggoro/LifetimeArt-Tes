'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="w-full bg-[#1a1a1a] text-white relative min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-16 items-center max-w-7xl">
        {/* Left Content Area */}
        <div className="flex flex-col items-start space-y-10 lg:pr-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 rounded-full bg-neutral-800/80 px-5 py-3 text-sm font-medium text-neutral-300 border border-neutral-700/50"
          >
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-5xl font-light tracking-tight sm:text-6xl lg:text-7xl leading-[1.1] text-white"
          >
            Your trusted partner for quality home improvement
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-[520px] text-neutral-300 text-lg leading-relaxed"
          >
            LifetimeArt delivers expert home improvements, creating beautiful
            and functional spaces with quality craftsmanship.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="pt-4"
          >
            <Button
              asChild
              className="rounded-full bg-white text-black hover:bg-neutral-100 h-16 px-10 text-lg font-medium transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
            >
              <Link href="#">
                Work with us
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Right Content Area */}
        <div className="relative w-full h-[500px] lg:h-[700px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/hero-image.jpg"
              fill
              alt="Modern kitchen and dining area"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>
          {/* Testimonial Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl max-w-[340px] text-gray-900 border border-gray-100/50"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 text-amber-400 fill-amber-400"
                />
              ))}
            </div>
            <p className="text-sm leading-relaxed text-gray-700 font-medium">
              "LifetimeArt has been a game-changer for my home. Their ability to
              blend functionality with exquisite design is unparalleled."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
