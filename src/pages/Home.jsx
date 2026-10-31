import { useEffect } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Features from '../components/Features';
import GiftCards from '../components/GiftCards';
import Hero from '../components/Hero';
import Packages from '../components/Packages';
import Pricing from '../components/Pricing';
import Services from '../components/Services';
import useScrollEffects from '../useScrollEffects';

export default function Home() {
  useScrollEffects();

  useEffect(() => {
    document.title = 'Thai Massage ENJOY | Entspannung in Bad Endorf';
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <Services />
      <About />
      <Pricing />
      <Packages />
      <GiftCards />
      <Contact />
    </>
  );
}
