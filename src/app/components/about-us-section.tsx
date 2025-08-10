'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

export default function AboutUsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth / 2;
      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const images = [
    {
      src: '/placeholder.svg?height=400&width=600',
      alt: 'Modern dining room',
    },
    {
      src: '/placeholder.svg?height=400&width=600',
      alt: 'Cozy living room',
    },
    {
      src: '/placeholder.svg?height=400&width=600',
      alt: 'Modern cabin in forest',
    },
    {
      src: '/placeholder.svg?height=400&width=600',
      alt: 'Sleek modern kitchen',
    },
    {
      src: '/placeholder.svg?height=400&width=600',
      alt: 'Attic bedroom',
    },
  ];

  const stats = [
    {
      number: '8',
      title: 'Years experience',
      description: 'Improving homes with expert craftsmanship for years',
    },
    {
      number: '26',
      title: 'Projects completed',
      description:
        'Over 250 successful projects delivered with quality and care',
    },
    {
      number: '30',
      title: 'Skilled Tradespeople',
      description: 'Our team of 30 experts ensures top-quality results',
    },
    {
      number: '100%',
      title: 'Client satisfaction',
      description: 'All of our clients are satisfied with our work and service',
    },
  ];

  return (
    <section
      id="about-us"
      className="w-full py-12 md:py-24 lg:py-32 bg-white text-black"
    >
      <div className="container px-4 md:px-6">
        {/* Top Section: Title and Intro Text */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-start">
          <div className="flex flex-col items-start space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-light text-white">
              About us
            </div>
            <h2 className="text-4xl font-light tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Home Improvement Specialists
            </h2>
          </div>
          <div className="lg:pl-12">
            <p className="max-w-[700px] text-gray-700 md:text-xl lg:text-lg xl:text-xl leading-relaxed">
              Welcome to LifetimeArt, your trusted home improvement experts,
              dedicated to transforming homes with precision and care. With
              years of experience in building kitchens, bathrooms, garages, and
              more, we take pride in delivering top-quality craftsmanship and a
              seamless customer experience. Our mission is to bring your vision
              to life while ensuring clear communication and expert guidance at
              every step. Let's create a home you'll love!
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="relative mb-16">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 gap-6 lg:gap-8 no-scrollbar"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[30vw] xl:w-[20vw] snap-center rounded-xl overflow-hidden shadow-lg border border-gray-200"
              >
                <Image
                  src={image.src || '/placeholder.svg'}
                  width={600}
                  height={400}
                  alt={image.alt}
                  className="object-cover w-full h-full aspect-[3/2]"
                />
              </div>
            ))}
          </div>
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md z-10 hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md z-10 hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <h3 className="text-5xl font-light text-black">{stat.number}</h3>
              <p className="text-lg font-light text-black">{stat.title}</p>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
