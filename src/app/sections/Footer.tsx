'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import Link from 'next/link';
import { MountainIcon } from 'lucide-react';
import { footerLinks } from '@/lib/data';

const itemFadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });

  return (
    <footer className="w-full bg-white pt-12">
      <motion.div
        ref={footerRef}
        variants={itemFadeInUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="mx-auto w-full max-w-7xl rounded-t-3xl bg-neutral-900 px-8 py-12 lg:p-16 text-neutral-400"
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-sm">
            <Link href="#" className="flex items-center gap-2 mb-4">
              <MountainIcon className="h-6 w-6 text-white" />
              <span className="text-lg font-bold text-white">LifetimeArt</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Transforming homes with expert craftsmanship and a seamless
              customer experience.
            </p>
          </div>
          <div className="flex-shrink-0">
            <h3 className="text-base font-medium text-white mb-4">
              Quick links
            </h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-2">
              <ul className="space-y-2">
                {footerLinks.column1.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {footerLinks.column2.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <p className="text-sm text-center text-neutral-500">
            © {new Date().getFullYear()} LifetimeArt. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
