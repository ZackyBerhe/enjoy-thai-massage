import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

/**
 * Shared page shell. The landing page keeps its GSAP-driven anchor scrolling;
 * this effect only handles scroll position when React Router changes the page
 * or when a link from another route targets a section on the landing page.
 */
export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';

    if (!hash) {
      window.scrollTo({ top: 0, left: 0 });
    } else {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        const nav = document.querySelector('nav');
        const offset = (nav ? nav.getBoundingClientRect().height : 0) + 12;
        const top = Math.max(
          0,
          target.getBoundingClientRect().top + window.scrollY - offset
        );

        window.scrollTo({ top, left: 0 });
        // Let ScrollTrigger evaluate the new viewport position immediately.
        window.dispatchEvent(new Event('scroll'));
      }
    }

    root.style.scrollBehavior = previousBehavior;
  }, [pathname, hash]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
