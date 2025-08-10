'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { aboutUsImages, aboutUsStats } from '@/lib/data';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeInFromBottom: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};
const fadeInFromRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function AboutUsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % aboutUsImages.length);
  const prevImage = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + aboutUsImages.length) % aboutUsImages.length
    );
  const extendedImages = [...aboutUsImages, ...aboutUsImages];
  return (
    <motion.section
      id="about-us"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="w-full py-16 lg:py-32 bg-white text-black overflow-hidden"
    >
      <div className="xl:hidden">
        <div className="px-6 mb-12">
          <motion.div
            variants={fadeInFromBottom}
            className="flex flex-col items-start space-y-6"
          >
            <div className="inline-block rounded-full bg-black px-4 py-2 text-sm font-light text-white">
              About us
            </div>
            <h2 className="text-3xl font-light tracking-tight leading-tight">
              Home
              <br />
              Improvement
              <br />
              Specialists
            </h2>
          </motion.div>
        </div>

        <div className="px-6 mb-12">
          <motion.p
            variants={fadeInFromRight}
            className="text-neutral-600 text-base leading-relaxed"
          >
            Welcome to LifetimeArt, your trusted home improvement experts,
            dedicated to transforming homes with precision and care. With years
            of experience in building kitchens, bathrooms, garages, and more, we
            take pride in delivering top-quality craftsmanship and a seamless
            customer experience. Our mission is to bring your vision to life
            while ensuring clear communication and expert guidance at every
            step. Let&apos;s create a home you&apos;ll love!
          </motion.p>
        </div>

        <motion.div variants={fadeInFromBottom} className="mb-16 px-6">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[280px]">
            <Image
              src="/images/hero-image.jpg"
              width={800}
              height={500}
              alt="Modern interior design"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === 0 ? 'bg-black' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </motion.div>

        <div className="px-6">
          <motion.div variants={containerVariants} className="space-y-12">
            {aboutUsStats.map((stat) => (
              <motion.div
                variants={fadeInFromBottom}
                key={stat.title}
                className="text-left"
              >
                <h3 className="text-5xl font-light text-black mb-2">
                  {stat.number}
                </h3>
                <p className="text-xl font-light text-black mb-1">
                  {stat.title}
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="hidden xl:block">
        <div className="mx-auto w-full max-w-7xl px-6 xl:px-8">
          <div className="grid xl:grid-cols-2 gap-8 xl:gap-16 mb-20 items-start">
            <motion.div
              variants={fadeInFromBottom}
              className="flex flex-col items-start space-y-4"
            >
              <div className="inline-block rounded-full bg-black px-4 py-2 text-sm font-light text-white">
                About us
              </div>
              <h2 className="text-4xl font-light tracking-tight sm:text-5xl xl:text-6xl/tight">
                Home
                <br />
                Improvement
                <br />
                Specialists
              </h2>
            </motion.div>

            <motion.p
              variants={fadeInFromRight}
              className="max-w-[700px] text-neutral-600 text-lg leading-relaxed xl:pt-4"
            >
              Welcome to LifetimeArt, your trusted home improvement experts,
              dedicated to transforming homes with precision and care. With
              years of experience in building kitchens, bathrooms, garages, and
              more, we take pride in delivering top-quality craftsmanship and a
              seamless customer experience. Our mission is to bring your vision
              to life while ensuring clear communication and expert guidance at
              every step. Let&apos;s create a home you&apos;ll love!
            </motion.p>
          </div>
        </div>

        <motion.div
          variants={fadeInFromBottom}
          className="relative mb-24 scroller-container"
        >
          <div className="flex gap-6 xl:gap-8 scroller-inner">
            {extendedImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 rounded-xl overflow-hidden shadow-lg border border-gray-200 w-[70vw] md:w-[40vw] xl:w-[30vw] h-[400px]"
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
        </motion.div>

        <div className="mx-auto w-full max-w-7xl px-6 xl:px-8">
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {aboutUsStats.map((stat) => (
              <motion.div
                variants={fadeInFromBottom}
                key={stat.title}
                className="flex flex-col items-center space-y-2"
              >
                <h3 className="text-6xl font-light text-black">
                  {stat.number}
                </h3>
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
      </div>
    </motion.section>
  );
}
