import AboutUsSection from './components/about-us-section';
import FaqSection from './components/faq-section';
import Footer from './components/footer';
import GetInTouchSection from './components/get-in-touch-section';
import HeroSection from './components/hero-section';
import OurWorkSection from './components/our-work-section';
import ServicesSection from './components/service-section';
import DesktopHeader from './components/desktop-header';
import MobileHeader from './components/mobile-header';
import TestimonialsSection from './components/testimonial-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <DesktopHeader />
      <MobileHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />
        <OurWorkSection />
        <TestimonialsSection />
        <FaqSection />
        <GetInTouchSection />
        <Footer />
      </main>
    </div>
  );
}
