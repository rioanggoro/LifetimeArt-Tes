'use client';

import type React from 'react';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonialsData = [
  {
    rating: 5,
    quote:
      "I couldn't be happier with my loft conversion. The attention to detail and quality of work were outstanding. Reﬁt made the whole process smooth and stress-free!",
    author: 'Emily Carter',
    authorImage: '/placeholder.svg?height=32&width=32',
  },
  {
    rating: 5,
    quote:
      'Reﬁt transformed our outdoor space with a beautiful garden path. The work was completed on time, and the ﬁnish is excellent. A great team to work with!',
    author: 'Michael Turner',
    authorImage: '/placeholder.svg?height=32&width=32',
  },
  {
    rating: 5,
    quote:
      'Our new bathroom is a dream come true. Professional, communicative, and the results exceeded our expectations. Highly recommend!',
    author: 'Sarah Jones',
    authorImage: '/placeholder.svg?height=32&width=32',
  },
  {
    rating: 5,
    quote:
      "The kitchen renovation was handled brilliantly. LifetimeArt's team is skilled, tidy, and a pleasure to have in our home.",
    author: 'David Chen',
    authorImage: '/placeholder.svg?height=32&width=32',
  },
  {
    rating: 5,
    quote:
      'From start to finish, the service was top-tier. Our extension feels like it has always been a part of the house.',
    author: 'Jessica Williams',
    authorImage: '/placeholder.svg?height=32&width=32',
  },
  {
    rating: 5,
    quote:
      'A truly professional and seamless experience. The quality of the restoration work is second to none.',
    author: 'Tom Brown',
    authorImage: '/placeholder.svg?height=32&width=32',
  },
  {
    rating: 5,
    quote:
      'An incredible job on our external works. The craftsmanship was top-notch, and the finish is highly recommended!',
    author: 'Laura Green',
    authorImage: '/placeholder.svg?height=32&width=32',
  },
  {
    rating: 5,
    quote:
      'Brilliant service from start to ﬁnish. The team was professional, communicative, and the results exceeded my expectations. My new bathroom looks amazing!',
    author: 'Chris Davis',
    authorImage: '/placeholder.svg?height=32&width=32',
  },
  {
    rating: 5,
    quote:
      "I couldn't be happier with my loft conversion. The attention to detail and quality of work were outstanding. Reﬁt made the whole process smooth and stress-free!",
    author: 'Emily Carter',
    authorImage: '/placeholder.svg?height=32&width=32',
  },
  {
    rating: 5,
    quote:
      'Reﬁt transformed our outdoor space with a beautiful garden path. The work was completed on time, and the ﬁnish is excellent. A great team to work with!',
    author: 'Michael Turner',
    authorImage: '/placeholder.svg?height=32&width=32',
  },
  {
    rating: 5,
    quote:
      "The kitchen renovation was handled brilliantly. LifetimeArt's team is skilled, tidy, and a pleasure to have in our home.",
    author: 'David Chen',
    authorImage: '/placeholder.svg?height=32&width=32',
  },
  {
    rating: 5,
    quote:
      'From start to finish, the service was top-tier. Our extension feels like it has always been a part of the house.',
    author: 'Jessica Williams',
    authorImage: '/placeholder.svg?height=32&width=32',
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemFadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonialsData)[0];
}) => (
  <div className="flex-shrink-0 w-80 md:w-96 bg-gray-100 p-6 rounded-2xl shadow-sm">
    <div className="flex gap-1 mb-4">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
      ))}
    </div>
    <p className="text-neutral-700 text-sm leading-relaxed mb-4">
      {testimonial.quote}
    </p>
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full overflow-hidden relative">
        <Image
          src={testimonial.authorImage || '/placeholder.svg'}
          alt={testimonial.author}
          fill
          className="object-cover"
        />
      </div>
      <span className="text-sm font-medium text-black">
        {testimonial.author}
      </span>
    </div>
  </div>
);

const TestimonialMarqueeRow = ({
  testimonials,
  direction = 'left',
  duration = '60s', // Default duration for marquee
}: {
  testimonials: typeof testimonialsData;
  direction?: 'left' | 'right';
  duration?: string;
}) => (
  <div className="marquee-container overflow-hidden">
    <div
      className={`flex gap-6 lg:gap-8 marquee-inner ${
        direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
      }`}
      style={{ '--marquee-duration': duration } as React.CSSProperties} // Pass duration as CSS variable
    >
      {[...testimonials, ...testimonials].map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </div>
  </div>
);

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Ensure enough data for two rows, duplicating if necessary for continuous scroll
  const firstRowData = testimonialsData.slice(0, 6);
  const secondRowData = testimonialsData.slice(6, 12);

  return (
    <motion.section
      id="testimonials"
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="w-full py-24 lg:py-32 bg-white text-black"
    >
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
        <motion.div variants={itemFadeInUp} className="text-center mb-16">
          <div className="inline-block rounded-full bg-black px-4 py-2 text-sm font-light text-white mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl/tight">
            Hear from our clients
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-neutral-600 text-lg">
            Hear from our happy clients about their experience working with Reﬁt
            and the quality of our craftsmanship.
          </p>
        </motion.div>
      </div>
      <motion.div variants={itemFadeInUp} className="space-y-8">
        <TestimonialMarqueeRow
          testimonials={firstRowData}
          direction="left"
          duration="60s"
        />
        <TestimonialMarqueeRow
          testimonials={secondRowData}
          direction="right"
          duration="60s"
        />
      </motion.div>
    </motion.section>
  );
}
