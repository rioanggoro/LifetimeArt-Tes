'use client';

import { useState, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useInView,
  type Variants,
} from 'framer-motion';
import { Plus, ArrowUpRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const faqData = [
  {
    question: 'What area are you based in?',
    answer:
      'We primarily serve London and the surrounding areas, but depending on the project, we can travel further. Contact us to discuss your location and requirements.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary depending on size and complexity. We’ll provide an estimated schedule during your consultation and keep you updated throughout the process',
  },
  {
    question: 'Do you offer free quotes?',
    answer:
      'Yes, we offer free, no-obligation quotes. Our team will visit your property, assess your needs, and provide a detailed breakdown.',
  },
  {
    question: 'Will I need planning permission for my project?',
    answer:
      'This depends on the type and scope of your project. We can guide you through local regulations and help with applications if needed.',
  },
  {
    question: 'Do you provide a guarantee for your work?',
    answer:
      'Absolutely. All of our work is backed by a guarantee for quality and durability, giving you peace of mind.',
  },
  {
    question: 'Can I stay in my home while the work is being done?',
    answer:
      'In most cases, yes—though it may depend on the scope of work and areas affected. We’ll discuss options to minimise disruption.',
  },
  {
    question: 'How do I get started with a project?',
    answer:
      'Simply get in touch with our team. We’ll arrange a consultation, discuss your ideas, and prepare a tailored plan and quote.',
  },
];

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

interface AccordionItemProps {
  item: (typeof faqData)[0];
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  return (
    <motion.div
      variants={itemFadeInUp}
      className={`p-6 rounded-2xl transition-colors duration-300 ${
        isOpen ? 'bg-white shadow-lg' : 'bg-gray-100'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-base font-medium text-black">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Use X icon when open, Plus when closed */}
          {isOpen ? (
            <X className="h-5 w-5 flex-shrink-0 text-black" />
          ) : (
            <Plus className="h-5 w-5 flex-shrink-0 text-neutral-500" />
          )}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '16px' }} // Adjusted margin-top
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="text-neutral-600 text-sm leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <motion.section
      id="faqs"
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="w-full py-24 lg:py-32 bg-white text-black"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Column: Title and Button (Full width on mobile, centered) */}
          <motion.div
            variants={itemFadeInUp}
            className="lg:sticky lg:top-24 text-center lg:text-left"
          >
            <div className="inline-block rounded-full bg-black px-4 py-2 text-sm font-light text-white mb-4">
              FAQs
            </div>
            <h2 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl/tight mb-6">
              Answering Your Questions
            </h2>
            <p className="text-neutral-600 text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
              Got more questions? Send us your enquiry below.
            </p>
            {/* Custom two-tone button */}
            <div className="inline-flex rounded-full bg-gray-100 pr-2 shadow-sm">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gray-100 text-black hover:bg-gray-200 h-14 px-8 text-base font-medium transition-colors group"
              >
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Link
                href="#contact"
                className="flex items-center justify-center h-14 w-14 rounded-full bg-black text-white transition-colors duration-300 hover:bg-neutral-800"
                aria-label="Get in touch"
              >
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
          {/* Right Column: Accordion List (Full width on mobile) */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                item={faq}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
