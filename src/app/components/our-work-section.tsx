'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const projectsData = [
  {
    title: 'Modern kitchen refit',
    description:
      'This kitchen transformation brought sleek, modern design and enhanced functionality to the heart of the home. We focused on creating a seamless flow for cooking and entertaining. With attention to every detail, we delivered a kitchen that balances style and practicality.',
    tags: ['Kitchen', 'Classic'],
    duration: '6 weeks',
    quote:
      "LifetimeArt completely transformed our kitchen, making it both beautiful and professional and communicative throughout. We couldn't be happier with the result.",
    author: 'Rachel Morgan',
    authorImage: '/people/rachel.jpeg',
    projectImage: '/images/img-2.png',
  },
  {
    title: 'External garden path build',
    description:
      'Our task was to design and build a durable, elegant garden path to enhance the outdoor space. Using premium materials, we created a seamless walkway that blends naturally with the landscape. The project included custom lighting solutions throughout that elevate the overall garden design.',
    tags: ['External', 'Garden'],
    duration: '4 weeks',
    quote:
      "The team at LifetimeArt did an amazing job on our garden path. It's sturdy, looks fantastic, and has completely transformed our outdoor space. They were professional and delivered beautiful work—we would highly recommend!",
    author: 'Michael Turner',
    authorImage: '/people/michael.jpg',
    projectImage: '/images/img-3.png',
  },
  {
    title: 'Bathroom renovation',
    description:
      'We revitalized this bathroom with a fresh, modern design, incorporating high-end tiling, a freestanding bathtub, and custom vanity. The goal was to maximize space while creating a luxurious and relaxing atmosphere. The final result is a beautifully crafted sanctuary.',
    tags: ['Bathroom', 'Classic'],
    duration: '5 weeks',
    quote:
      "LifetimeArt completely transformed our kitchen, making it both beautiful and professional and communicative throughout. We couldn't be happier with the result.",
    author: 'Laura Davies',
    authorImage: '/people/laura.jpg',
    projectImage: '/images/img-1.png',
  },
];

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
        {/* Title Block */}
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
            See how we've transformed homes with our expert craftsmanship and
            attention to detail.
          </p>
        </motion.div>

        {/* Project Cards Container */}
        <div className="space-y-16 lg:space-y-24">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              isReversed={index % 2 !== 0} // Selang-seling layout
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
