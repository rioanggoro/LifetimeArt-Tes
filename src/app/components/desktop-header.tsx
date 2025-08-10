'use client';

import Link from 'next/link';
import { MountainIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnWhiteSection, setIsOnWhiteSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);

      // Check if we're on a white background section (like About Us)
      const aboutSection = document.getElementById('about-us');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const headerHeight = 80; // header height
        setIsOnWhiteSection(
          rect.top <= headerHeight && rect.bottom > headerHeight
        );
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = isOnWhiteSection ? 'text-black' : 'text-white';

  const navLinks = [
    { name: 'About', href: '#about-us' },
    { name: 'Services', href: '#services' },
    { name: 'Our work', href: '#our-work' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOnWhiteSection
          ? 'bg-white/90 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 lg:px-6">
        <Link href="#" className="flex items-center justify-center gap-2">
          <MountainIcon className={`h-6 w-6 ${textColor}`} />
          <span className={`text-lg font-bold ${textColor}`}>LifetimeArt</span>
        </Link>
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isOnWhiteSection
                  ? 'text-gray-600 hover:text-black'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
