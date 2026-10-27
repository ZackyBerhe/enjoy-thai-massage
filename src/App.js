import About from './components/About';
import Contact from './components/Contact';
import Features from './components/Features';
import Footer from './components/Footer';
import GiftCards from './components/GiftCards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Packages from './components/Packages';
import Pricing from './components/Pricing';
import Services from './components/Services';
import useScrollEffects from './useScrollEffects';

export default function App() {
  useScrollEffects();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <About />
        <Pricing />
        <Packages />
        <GiftCards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
