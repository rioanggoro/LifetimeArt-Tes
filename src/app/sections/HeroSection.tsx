'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 10, duration: 0.5 },
  },
};

const lineVariants: Variants = {
  hidden: { y: '100%' },
  visible: { y: '0%', transition: { duration: 0.6, ease: 'easeOut' } },
};

const buttonHoverVariants: Variants = {
  hover: {
    y: -4,
    transition: { type: 'spring', stiffness: 300, damping: 15 },
  },
};

const arrowHoverVariants: Variants = {
  hover: {
    x: 4,
    transition: { type: 'spring', stiffness: 300, damping: 15 },
  },
};

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const headlineLines = [
    'Your trusted partner',
    'for quality home',
    'improvement',
  ];

  return (
    <section
      ref={ref}
      className="w-full bg-[#1a1a1a] text-white relative min-h-screen flex items-center"
    >
      {/* Mobile/Tablet Layout - Maksimal 1280px */}
      <div className="xl:hidden w-full px-4 py-8 flex flex-col min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-image.jpg"
            fill
            alt="Modern kitchen and dining area"
            className="object-cover opacity-40"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative z-10 flex flex-col justify-center flex-1 space-y-8 max-w-sm mx-auto text-center pt-20"
        >
          <motion.div
            variants={pillVariants}
            className="inline-flex items-center gap-3 rounded-full bg-neutral-800/80 px-4 py-2 text-sm font-medium text-neutral-300 border border-neutral-700/50 self-center backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </motion.div>

          <motion.h1
            variants={containerVariants}
            className="text-4xl font-light tracking-tight leading-[1.1] text-white"
          >
            {headlineLines.map((line, index) => (
              <div key={index} className="overflow-hidden py-1">
                <motion.span variants={lineVariants} className="block">
                  {line}
                </motion.span>
              </div>
            ))}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-neutral-300 text-base leading-relaxed px-4"
          >
            LifetimeArt delivers expert home improvements, creating beautiful
            and functional spaces with quality craftsmanship.
          </motion.p>

          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="pt-4"
          >
            <motion.div variants={buttonHoverVariants}>
              <Button
                asChild
                className="rounded-full bg-neutral-800/80 text-white hover:bg-neutral-700/80 h-14 px-8 text-base font-medium transition-colors duration-200 flex items-center gap-3 backdrop-blur-sm border border-neutral-700/50"
              >
                <Link href="#">
                  Work with us
                  <motion.span
                    variants={arrowHoverVariants}
                    className="inline-block"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Desktop Layout - 1281px ke atas */}
      <div className="hidden xl:flex container mx-auto px-6 py-16 xl:py-24 items-center max-w-7xl">
        <div className="grid xl:grid-cols-2 gap-16 items-center w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col items-start space-y-10 xl:pr-8"
          >
            <motion.div
              variants={pillVariants}
              className="inline-flex items-center gap-3 rounded-full bg-neutral-800/80 px-5 py-3 text-sm font-medium text-neutral-300 border border-neutral-700/50"
            >
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Available for work
            </motion.div>
            <motion.h1
              variants={containerVariants}
              className="text-5xl font-light tracking-tight sm:text-6xl xl:text-7xl leading-[1.1] text-white"
            >
              {headlineLines.map((line, index) => (
                <div key={index} className="overflow-hidden py-1">
                  <motion.span variants={lineVariants} className="block">
                    {line}
                  </motion.span>
                </div>
              ))}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="max-w-[520px] text-neutral-300 text-lg leading-relaxed"
            >
              LifetimeArt delivers expert home improvements, creating beautiful
              and functional spaces with quality craftsmanship.
            </motion.p>
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="pt-4"
            >
              <motion.div variants={buttonHoverVariants}>
                <Button
                  asChild
                  className="rounded-full bg-white text-black hover:bg-neutral-100 h-16 px-10 text-lg font-medium transition-colors duration-200 flex items-center gap-3 shadow-lg"
                >
                  <Link href="#">
                    Work with us
                    <motion.span
                      variants={arrowHoverVariants}
                      className="inline-block"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <div className="relative w-full h-[500px] xl:h-[700px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
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
          </div>
        </div>
      </div>
    </section>
  );
}
