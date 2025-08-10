import { Bath, Building, CookingPot, Fence, Home, Wrench } from 'lucide-react';

export const aboutUsImages = [
  { src: '/images/img-1.png', alt: 'Modern dining room' },
  { src: '/images/img-2.png', alt: 'Cozy living room' },
  { src: '/images/img-3.png', alt: 'Modern cabin in forest' },
  { src: '/images/img-4.png', alt: 'Sleek modern kitchen' },
  { src: '/images/img-5.png', alt: 'Attic bedroom with bookshelves' },
  { src: '/images/img-6.png', alt: 'Another interior view' },
];

export const aboutUsStats = [
  {
    number: '8',
    title: 'Years experience',
    description: 'Improving homes with expert craftsmanship for years',
  },
  {
    number: '26',
    title: 'Projects completed',
    description: 'Over 250 successful projects delivered with quality and care',
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
export const faqData = [
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

export const footerLinks = {
  column1: [
    { name: 'About us', href: '#about-us' },
    { name: 'Our work', href: '#our-work' },
    { name: 'Services', href: '#services' },
  ],
  column2: [
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ],
};

export const projectsData = [
  {
    title: 'Modern kitchen refit',
    description:
      'This kitchen transformation brought sleek, modern design and enhanced functionality to the heart of the home. We focused on creating a seamless flow for cooking and entertaining. With attention to every detail, we delivered a kitchen that balances style and practicality.',
    tags: ['Kitchen', 'Classic'],
    duration: '6 weeks',
    quote:
      'LifetimeArt completely transformed our kitchen, making it both beautiful and professional and communicative throughout. We couldn&apos;t be happier with the result.',
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
      'The team at LifetimeArt did an amazing job on our garden path. It&apos;s sturdy, looks fantastic, and has completely transformed our outdoor space. They were professional and delivered beautiful work—we would highly recommend!',
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

export const servicesData = [
  {
    id: 'Kitchens',
    title: 'Kitchens',
    description:
      'At LifetimeArt, we design and build stunning kitchens tailored to your style and needs. Whether you prefer sleek modern lines or a timeless, classic look, our team delivers premium craftsmanship, functional layouts, and meticulous attention to detail—creating a kitchen you’ll love to cook and gather in.',
    icon: CookingPot,
    imageSrc: '/images/hero-image.jpg',
  },
  {
    id: 'LoftConversions',
    title: 'Loft Conversions',
    description:
      'Transform unused loft space into a beautiful, practical part of your home. From cozy bedrooms to bright home offices, we handle everything from structural adjustments to finishing touches, ensuring your new space is safe, stylish, and seamlessly integrated with your existing home.',
    icon: Home,
    imageSrc: '/images/img-2.png',
  },
  {
    id: 'Bathrooms',
    title: 'Bathrooms',
    description:
      ' We create bathrooms that balance relaxation and practicality, with designs ranging from spa-inspired retreats to minimalist, functional spaces. Our team sources high-quality fixtures and finishes, ensuring durability, elegance, and comfort for years to come.',
    icon: Bath,
    imageSrc: '/images/img-6.png',
  },
  {
    id: 'Extensions',
    title: 'Extensions',
    description:
      'Expand your living space without compromising on style. Whether it’s a kitchen extension, a new family room, or an entire additional floor, we work closely with you to design and build an extension that complements your home and adds value.',
    icon: Building,
    imageSrc: '/images/img-3.png',
  },
  {
    id: 'Restorations',
    title: 'Restorations',
    description:
      'Preserve the charm of your property while upgrading it for modern living. Our restoration work combines traditional craftsmanship with modern techniques to breathe new life into historic or worn-down spaces.',
    icon: Wrench,
    imageSrc: '/images/img-4.png',
  },
  {
    id: 'ExternalWorks',
    title: 'External Works',
    description:
      'Enhance the beauty and functionality of your outdoor areas. From garden landscaping to patios, pathways, and exterior lighting, we create inviting spaces that connect your home to nature.',
    icon: Fence,
    imageSrc: '/images/img-1.png',
  },
];

export const testimonialsData = [
  {
    rating: 5,
    quote:
      "I couldn't be happier with my loft conversion. The attention to detail and quality of work were outstanding. Reﬁt made the whole process smooth and stress-free!",
    author: 'Emily Carter',
    authorImage: '/people/laura.jpg',
  },
  {
    rating: 5,
    quote:
      'Reﬁt transformed our outdoor space with a beautiful garden path. The work was completed on time, and the ﬁnish is excellent. A great team to work with!',
    author: 'Michael Turner',
    authorImage: '/people/michael.jpg',
  },
  {
    rating: 5,
    quote:
      'Our new bathroom is a dream come true. Professional, communicative, and the results exceeded our expectations. Highly recommend!',
    author: 'Sarah Jones',
    authorImage: '/people/laura.jpg',
  },
  {
    rating: 5,
    quote:
      "The kitchen renovation was handled brilliantly. LifetimeArt's team is skilled, tidy, and a pleasure to have in our home.",
    author: 'David Chen',
    authorImage: '/people/rachel.jpeg',
  },
  {
    rating: 5,
    quote:
      'From start to finish, the service was top-tier. Our extension feels like it has always been a part of the house.',
    author: 'Jessica Williams',
    authorImage: '/people/laura.jpg',
  },
  {
    rating: 5,
    quote:
      'A truly professional and seamless experience. The quality of the restoration work is second to none.',
    author: 'Tom Brown',
    authorImage: '/people/rachel.jpeg',
  },
  {
    rating: 5,
    quote:
      'An incredible job on our external works. The craftsmanship was top-notch, and the finish is highly recommended!',
    author: 'Laura Green',
    authorImage: '/people/laura.jpg',
  },
  {
    rating: 5,
    quote:
      'Brilliant service from start to ﬁnish. The team was professional, communicative, and the results exceeded my expectations. My new bathroom looks amazing!',
    author: 'Chris Davis',
    authorImage: '/people/laura.jpg',
  },
  {
    rating: 5,
    quote:
      "I couldn't be happier with my loft conversion. The attention to detail and quality of work were outstanding. Reﬁt made the whole process smooth and stress-free!",
    author: 'Emily Carter',
    authorImage: '/people/rachel.jpeg',
  },
  {
    rating: 5,
    quote:
      'Reﬁt transformed our outdoor space with a beautiful garden path. The work was completed on time, and the ﬁnish is excellent. A great team to work with!',
    author: 'Michael Turner',
    authorImage: '/people/laura.jpg',
  },
  {
    rating: 5,
    quote:
      "The kitchen renovation was handled brilliantly. LifetimeArt's team is skilled, tidy, and a pleasure to have in our home.",
    author: 'David Chen',
    authorImage: '/people/rachel.jpeg',
  },
  {
    rating: 5,
    quote:
      'From start to finish, the service was top-tier. Our extension feels like it has always been a part of the house.',
    author: 'Jessica Williams',
    authorImage: '/people/laura.jpg',
  },
];
