'use client';

import Link from 'next/link';
import { MountainIcon, MenuIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DesktopHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnWhiteSection, setIsOnWhiteSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);

      const whiteSections = [
        'about-us',
        'services',
        'faqs',
        'our-work',
        'testimonials',
      ];
      const headerHeight = 80;

      let onWhiteSection = false;
      for (const sectionId of whiteSections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= headerHeight && rect.bottom > headerHeight) {
            onWhiteSection = true;
            break;
          }
        }
      }
      setIsOnWhiteSection(onWhiteSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkMode = !isOnWhiteSection;
  const headerBg =
    isScrolled || isOnWhiteSection
      ? isDarkMode
        ? 'bg-black/95 backdrop-blur-sm'
        : 'bg-white/95 backdrop-blur-sm shadow-sm'
      : 'bg-transparent';
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const hoverColor = isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600';

  const navLinks = [
    { name: 'About', href: '#about-us' },
    { name: 'Services', href: '#services' },
    { name: 'Our work', href: '#our-work' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 lg:h-20 flex items-center transition-all duration-300 ${headerBg}`}
    >
      <Link
        href="#"
        className="hidden sm:flex items-center justify-center gap-2"
      >
        <MountainIcon className={`h-6 w-6 ${textColor}`} />
        <span className={`text-lg font-bold ${textColor}`}>LifetimeArt</span>
      </Link>
      <nav className="ml-auto hidden md:flex gap-6">
        {navLinks.map((link) => (
          <div key={link.name}>
            {' '}
            <Link
              href={link.href}
              className={`relative text-sm font-medium ${textColor} ${hoverColor} transition-colors`} // Removed overflow-hidden and group
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </nav>
      <div className="ml-auto md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 ${textColor} ${hoverColor}`}
            >
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle mobile menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full max-w-xs sm:max-w-sm bg-black/95 backdrop-blur-sm p-6 text-white"
          >
            <div className="flex items-center justify-between mb-6">
              <Link href="#" className="flex items-center justify-center gap-2">
                <MountainIcon className="h-6 w-6 text-white" />
                <span className="text-lg font-bold text-white">
                  LifetimeArt
                </span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                <XIcon className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="grid gap-4 text-lg font-medium">
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ staggerChildren: 0.1 }}
                  >
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          className="block py-2 text-white hover:text-gray-300 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
