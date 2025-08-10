import AboutUsSection from './components/about-us-section';
import HeroSection from './components/hero-section';
import ServicesSection from './components/service-section';
import SiteHeader from './components/site-header';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />
      </main>
    </div>
  );
}
