'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useInView,
  type Variants,
} from 'framer-motion';
import {
  CookingPot,
  Home,
  Bath,
  Building,
  Wrench,
  Fence,
  Plus,
} from 'lucide-react';
import { servicesData } from '@/lib/data';

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.4 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};
const descriptionVariants: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2, ease: 'easeIn' } },
};

export default function ServicesSection() {
  const [openAccordion, setOpenAccordion] = useState<string | null>('Kitchens');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const activeService = servicesData.find((s) => s.id === openAccordion);

  const handleToggle = (id: string) => {
    setOpenAccordion((prevId) => (prevId === id ? null : id));
  };

  return (
    <motion.section
      id="services"
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="w-full py-24 lg:py-32 bg-white text-black"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-block rounded-full bg-black px-4 py-2 text-sm font-light text-white mb-4">
            Services
          </div>
          <h2 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl/tight">
            What we do
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-neutral-600 text-lg">
            Find out which one of our services fit the needs of your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ✅ PERBAIKAN DI SINI: `sticky` diubah menjadi `lg:sticky` */}
          <motion.div
            variants={itemVariants}
            className="lg:sticky top-24 h-[500px] lg:h-[600px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService ? activeService.id : 'empty'}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full h-full"
              >
                {activeService && (
                  <Image
                    src={activeService.imageSrc}
                    alt={activeService.title}
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            {servicesData.map((service) => {
              const isOpen = openAccordion === service.id;
              return (
                <div
                  key={service.id}
                  className="border-b border-neutral-200 py-4"
                >
                  <button
                    onClick={() => handleToggle(service.id)}
                    className="w-full flex justify-between items-center text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <service.icon
                        className={`h-6 w-6 text-neutral-500 transition-colors duration-300 ${
                          isOpen ? 'text-black' : 'group-hover:text-black'
                        }`}
                      />
                      <span
                        className={`text-xl font-light transition-colors duration-300 ${
                          isOpen
                            ? 'text-black'
                            : 'text-neutral-700 group-hover:text-black'
                        }`}
                      >
                        {service.title}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <Plus
                        className={`h-5 w-5 text-neutral-600 transition-colors duration-300 ${
                          isOpen ? 'text-black' : 'group-hover:text-black'
                        }`}
                      />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: 'auto',
                          opacity: 1,
                          transition: {
                            height: { duration: 0.3 },
                            opacity: { duration: 0.2, delay: 0.1 },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: { duration: 0.3 },
                            opacity: { duration: 0.2 },
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <motion.p
                          variants={descriptionVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="text-neutral-600 leading-relaxed pl-10 pt-4"
                        >
                          {service.description}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
