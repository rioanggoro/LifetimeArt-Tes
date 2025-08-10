'use client';
import Link from 'next/link';
import { MountainIcon, MenuIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about-us' },
    { name: 'Services', href: '#services' },
    { name: 'Our work', href: '#our-work' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-black text-white z-50 relative">
      <Link href="#" className="flex items-center justify-center gap-2">
        <MountainIcon className="h-6 w-6 text-white" />
        <span className="text-lg font-bold">LifetimeArt</span>
      </Link>
      <nav className="ml-auto hidden md:flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium hover:underline underline-offset-4 text-white"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="ml-auto md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white">
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
                <span className="text-lg font-bold">LifetimeArt</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white"
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
                          className="block py-2 text-white hover:text-gray-300"
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
    </header>
  );
}
