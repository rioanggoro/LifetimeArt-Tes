import AboutUsSection from './sections/AboutUsSection';
import FaqSection from './sections/FaqSection';
import Footer from './sections/Footer';
import GetInTouchSection from './sections/GetInTouchSection';
import HeroSection from './sections/HeroSection';
import OurWorkSection from './sections/OurWorkSection';
import ServicesSection from './sections/ServicesSection';
import DesktopHeader from './layout/DesktopHeader';
import MobileHeader from './layout/MobileHeader';
import TestimonialsSection from './sections/TestimonialsSection';

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
