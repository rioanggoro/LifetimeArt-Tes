'use client';

import Link from 'next/link';
import { MountainIcon, MenuIcon, XIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
      className={`hidden xl:flex fixed top-0 left-0 right-0 z-50 px-4 xl:px-6 h-16 xl:h-20 items-center transition-all duration-300 ${headerBg}`}
    >
      <Link href="#" className="flex items-center justify-center gap-2">
        <MountainIcon className={`h-6 w-6 ${textColor}`} />
        <span className={`text-lg font-bold ${textColor}`}>LifetimeArt</span>
      </Link>
      <nav className="ml-auto flex gap-6">
        {navLinks.map((link) => (
          <div key={link.name}>
            <Link
              href={link.href}
              className={`relative text-sm font-medium ${textColor} ${hoverColor} transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </nav>
    </motion.header>
  );
}
