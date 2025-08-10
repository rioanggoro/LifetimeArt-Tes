'use client';

import Link from 'next/link';
import { MountainIcon, MenuIcon, XIcon } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about-us',
        'services',
        'our-work',
        'faqs',
        'contact',
      ];
      const scrollY = window.scrollY;
      const headerHeight = 80;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= headerHeight && rect.bottom > headerHeight) {
            setCurrentSection(sectionId);
            return;
          }
        }
      }

      if (scrollY < 100) {
        setCurrentSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about-us' },
    { name: 'Services', href: '#services' },
    { name: 'Our work', href: '#our-work' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  const isDarkSection = currentSection === 'hero';
  const headerBg = isOpen
    ? 'bg-transparent'
    : isDarkSection
    ? 'bg-transparent'
    : 'bg-white/95 backdrop-blur-sm shadow-sm';
  const textColor = isOpen || isDarkSection ? 'text-white' : 'text-black';
  const buttonBg =
    isOpen || isDarkSection ? 'hover:bg-white/10' : 'hover:bg-black/10';

  return (
    <header
      className={`xl:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="mx-auto flex h-16 w-full items-center justify-between px-4">
        <Link href="#" className="flex items-center justify-center gap-2">
          <MountainIcon
            className={`h-5 w-5 ${textColor} transition-colors duration-300`}
          />
          <span
            className={`text-lg font-bold ${textColor} transition-colors duration-300`}
          >
            LifetimeArt
          </span>
        </Link>

        <Button
          variant="ghost"
          size="icon"
          className={`h-10 w-10 relative z-50 ${textColor} ${buttonBg} transition-colors duration-300`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={isOpen ? 'x' : 'menu'}
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? (
                <XIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </motion.div>
          </AnimatePresence>
          <span className="sr-only">Toggle mobile menu</span>
        </Button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex flex-col justify-start pt-24 px-6 h-full">
                <div className="flex items-center gap-2 mb-12">
                  <MountainIcon className="h-6 w-6 text-white" />
                  <span className="text-xl font-light text-white">
                    LifetimeArt
                  </span>
                </div>

                <motion.nav
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      variants={itemVariants}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                      }}
                    >
                      <Link
                        href={link.href}
                        className="block text-2xl font-light text-white hover:text-neutral-300 transition-colors duration-200 py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
