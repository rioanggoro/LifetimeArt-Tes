'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import Link from 'next/link';

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 0.4 },
  },
};
const itemFadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function GetInTouchSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="contact" className="w-full py-24 lg:py-32 bg-white">
      <motion.div
        ref={sectionRef}
        variants={itemFadeInUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="mx-auto w-full max-w-7xl rounded-3xl bg-black text-white p-12 lg:p-20"
      >
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start"
        >
          <motion.div variants={itemFadeInUp}>
            <div className="inline-block rounded-full bg-neutral-800 border border-neutral-700 px-4 py-2 text-sm font-light text-neutral-300 mb-4">
              Contact
            </div>
            <h2 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl/tight mb-6">
              Get in touch
            </h2>
            <p className="text-neutral-400 text-lg mb-10 max-w-lg">
              For any inquiries or to explore your vision further, we invite you
              to contact our professional team using the details provided below.
            </p>

            <div className="space-y-4 text-sm border-t border-neutral-800 pt-8">
              <div className="flex">
                <span className="w-20 font-medium text-neutral-400">
                  Office
                </span>
                <span className="text-neutral-200">
                  150 Old Park Ln, London W1K 1QZ
                </span>
              </div>
              <div className="flex">
                <span className="w-20 font-medium text-neutral-400">Email</span>
                <span className="text-neutral-200">hello@refit.com</span>
              </div>
              <div className="flex">
                <span className="w-20 font-medium text-neutral-400">
                  Telephone
                </span>
                <span className="text-neutral-200">07716 534984</span>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-neutral-800">
              <p className="text-sm font-medium text-neutral-400 mb-3">
                Follow us
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </Link>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemFadeInUp}
            className="bg-white border border-neutral-800 p-8 rounded-2xl"
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Name*
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Smith"
                  className="bg-gray-50 border-gray-200 text-black placeholder:text-neutral-400 rounded-lg"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Email*
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="johnsmith@gmail.com"
                  className="bg-gray-50 border-gray-200 text-black placeholder:text-neutral-400 rounded-lg"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+44789 123456"
                  className="bg-gray-50 border-gray-200 text-black placeholder:text-neutral-400 rounded-lg"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Message*
                </label>
                <Textarea
                  id="message"
                  placeholder="Hello, I'd like to enquire about..."
                  rows={5}
                  className="bg-gray-50 border-gray-200 text-black placeholder:text-neutral-400 rounded-lg"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-neutral-600 text-white hover:bg-neutral-700 rounded-lg h-12"
              >
                Send message
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
