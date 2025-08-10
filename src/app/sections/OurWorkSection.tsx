'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import {
  motion,
  useInView,
  type Variants,
  AnimatePresence,
} from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projectsData } from '@/lib/data';

const sectionContainerVariants: Variants = {
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

interface ProjectCardProps {
  project: (typeof projectsData)[0];
  isReversed?: boolean;
}

function ProjectCard({ project, isReversed = false }: ProjectCardProps) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      variants={itemFadeInUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`grid lg:grid-cols-2 items-center gap-10 lg:gap-16 p-8 rounded-3xl ${
        isReversed ? 'bg-black text-white' : 'bg-gray-100 text-black'
      }`}
    >
      <div
        className={`relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden ${
          isReversed ? 'lg:order-last' : ''
        }`}
      >
        <Image
          src={project.projectImage}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      <div className="flex flex-col space-y-5">
        <h3 className="text-3xl font-light tracking-tight">{project.title}</h3>
        <p
          className={`text-base leading-relaxed ${
            isReversed ? 'text-neutral-300' : 'text-neutral-600'
          }`}
        >
          {project.description}
        </p>
        <div className="flex items-center gap-3 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                isReversed
                  ? 'bg-neutral-700 text-neutral-200'
                  : 'bg-gray-200 text-neutral-700'
              }`}
            >
              {tag}
            </span>
          ))}
          <span className="text-xs text-neutral-500">{project.duration}</span>
        </div>
        <div className="border-t border-neutral-700/50 pt-5 mt-3">
          <div className="flex items-start gap-4">
            <span
              className={`font-serif text-6xl leading-none -mt-2 ${
                isReversed ? 'text-black' : 'text-black'
              }`}
            >
              “
            </span>
            <p
              className={`text-sm italic ${
                isReversed ? 'text-neutral-300' : 'text-neutral-700'
              }`}
            >
              {project.quote}
            </p>
          </div>
          <div className="flex items-center gap-3 mt-4 pl-9">
            <div className="w-8 h-8 rounded-full overflow-hidden relative">
              <Image
                src={project.authorImage}
                alt={project.author}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium">{project.author}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function OurWorkSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length
    );
  };

  return (
    <motion.section
      id="our-work"
      ref={sectionRef}
      variants={sectionContainerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="w-full py-24 lg:py-32 bg-white text-black"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={itemFadeInUp}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-block rounded-full bg-black px-4 py-2 text-sm font-light text-white mb-4">
            Our work
          </div>
          <h2 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl/tight">
            Get inspired by our work
          </h2>
          <p className="mt-4 text-neutral-600 text-lg">
            See how we&apos;ve transformed homes with our expert craftsmanship
            and attention to detail.
          </p>
        </motion.div>

        <div className="hidden lg:block space-y-16 lg:space-y-24">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>

        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={projectsData[currentIndex]} />
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevProject}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {projectsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-black' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextProject}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
