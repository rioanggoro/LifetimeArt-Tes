'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function AboutUsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // Scroll sebanyak lebar satu gambar + gap
      const scrollAmount =
        scrollRef.current.querySelector('div')?.clientWidth || 0;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount - 24 : scrollAmount + 24,
        behavior: 'smooth',
      });
    }
  };

  const images = [
    { src: '/images/img-1.png', alt: 'Modern dining room' },
    { src: '/images/img-2.png', alt: 'Cozy living room' },
    { src: '/images/img-3.png', alt: 'Modern cabin in forest' },
    { src: '/images/img-4.png', alt: 'Sleek modern kitchen' },
    { src: '/images/img-5.png', alt: 'Attic bedroom with bookshelves' },
    { src: '/images/img-6.png', alt: 'Another interior view' },
  ];

  const stats = [
    {
      number: '8',
      title: 'Years experience',
      description: 'Improving homes with expert craftsmanship for years',
    },
    {
      number: '26',
      title: 'Projects completed',
      description:
        'Over 250 successful projects delivered with quality and care',
    },
    {
      number: '30',
      title: 'Skilled Tradespeople',
      description: 'Our team of 30 experts ensures top-quality results',
    },
    {
      number: '100%',
      title: 'Client satisfaction',
      description: 'All of our clients are satisfied with our work and service',
    },
  ];

  return (
    <motion.section
      id="about-us"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="w-full py-24 lg:py-32 bg-white text-black"
    >
      {/* ✨ 1. Container untuk konten atas (Teks) */}
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-20 items-start"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start space-y-4"
          >
            <div className="inline-block rounded-full bg-black px-4 py-2 text-sm font-light text-white">
              About us
            </div>
            <h2 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl/tight">
              <motion.span variants={itemVariants} className="block">
                Home
              </motion.span>
              <motion.span variants={itemVariants} className="block">
                Improvement
              </motion.span>
              <motion.span variants={itemVariants} className="block">
                Specialists
              </motion.span>
            </h2>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="max-w-[700px] text-neutral-600 text-lg leading-relaxed lg:pt-4"
          >
            Welcome to LifetimeArt, your trusted home improvement experts,
            dedicated to transforming homes with precision and care. With years
            of experience in building kitchens, bathrooms, garages, and more, we
            take pride in delivering top-quality craftsmanship and a seamless
            customer experience. Our mission is to bring your vision to life
            while ensuring clear communication and expert guidance at every
            step. Let's create a home you'll love!
          </motion.p>
        </motion.div>
      </div>

      {/* ✨ 2. Galeri Gambar Full-Bleed (di luar container) */}
      <motion.div variants={itemVariants} className="relative mb-24">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 gap-6 lg:gap-8 no-scrollbar ultrawide:h-[500px] h-[450px]"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`flex-shrink-0 snap-center rounded-xl overflow-hidden shadow-lg border border-gray-200 
                         w-[80vw] md:w-[45vw] lg:w-[35vw] xl:w-[28vw] ultrawide:w-[24vw]
                         ${index === 0 ? 'ml-6 lg:ml-8' : ''} 
                         ${index === images.length - 1 ? 'mr-6 lg:mr-8' : ''}`}
            >
              <Image
                src={image.src}
                width={800}
                height={500}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm rounded-full p-3 shadow-md z-10 hidden md:block transition hover:scale-110 active:scale-95"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6 text-gray-800" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm rounded-full p-3 shadow-md z-10 hidden md:block transition hover:scale-110 active:scale-95"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6 text-gray-800" />
        </button>
      </motion.div>

      {/* ✨ 3. Container untuk konten bawah (Statistik) */}
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat) => (
            <motion.div
              variants={itemVariants}
              key={stat.title}
              className="flex flex-col items-center space-y-2"
            >
              <h3 className="text-6xl font-light text-black">{stat.number}</h3>
              <p className="text-lg font-light text-black tracking-tight">
                {stat.title}
              </p>
              <p className="text-sm text-neutral-600 max-w-[200px]">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
