import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Distance from the top of the viewport that a scrolled-to section should stop
// at, so the sticky navigation never covers the heading.
const navOffset = () => {
  const nav = document.querySelector('nav');
  return (nav ? nav.getBoundingClientRect().height : 0) + 12;
};

/**
 * Scroll choreography for the landing page:
 *  - a short entrance timeline for the hero
 *  - staggered "rise + fade" reveals driven by ScrollTrigger
 *  - subtle parallax on marked images
 *  - eased smooth scrolling for in-page anchor links
 *
 * Everything is wrapped in gsap.matchMedia() so visitors who ask for
 * reduced motion get the page exactly as it is, with no animation at all.
 */
export default function useScrollEffects() {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        // Hero entrance
        const intro = gsap.timeline({
          defaults: { ease: 'power3.out', duration: 1 },
        });
        intro.from('[data-hero] > *', {
          y: 28,
          opacity: 0,
          stagger: 0.09,
        });
        intro.from(
          '[data-hero-photo]',
          { opacity: 0, scale: 1.03, duration: 1.4 },
          0
        );

        // Scroll reveals
        const revealTargets = gsap.utils.toArray('[data-reveal]');
        gsap.set(revealTargets, { opacity: 0, y: 34 });

        ScrollTrigger.batch(revealTargets, {
          start: 'top 88%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.95,
              ease: 'power3.out',
              stagger: 0.09,
              overwrite: true,
            }),
        });

        // Reveal whatever is already on screen (or above it, on a deep link)
        // without waiting for the first scroll event.
        const viewportHeight = window.innerHeight;
        const alreadyVisible = revealTargets.filter(
          (el) => el.getBoundingClientRect().top < viewportHeight * 0.88
        );
        if (alreadyVisible.length) {
          gsap.to(alreadyVisible, {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: 'power3.out',
            stagger: 0.07,
            delay: 0.15,
            overwrite: true,
          });
        }

        // Gentle parallax inside masked image frames
        gsap.utils.toArray('[data-parallax]').forEach((image) => {
          gsap.fromTo(
            image,
            { yPercent: -5, scale: 1.12 },
            {
              yPercent: 5,
              scale: 1.12,
              ease: 'none',
              scrollTrigger: {
                trigger: image.parentElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.6,
              },
            }
          );
        });

        // Layout can settle after fonts and lazy images arrive
        const refresh = () => ScrollTrigger.refresh();
        window.addEventListener('load', refresh);
        if (document.fonts) document.fonts.ready.then(refresh);

        // Smooth scrolling for every in-page anchor
        const onClick = (event) => {
          const link =
            event.target && event.target.closest
              ? event.target.closest('a[href^="#"]')
              : null;
          if (!link) return;

          const hash = link.getAttribute('href');
          if (!hash || hash.length < 2) return;

          const target = document.querySelector(hash);
          if (!target) return;

          event.preventDefault();
          requestAnimationFrame(() => {
            // The stylesheet enables native smooth scrolling; switch it off
            // for this tween so the browser does not animate the same scroll
            // a second time behind GSAP's back.
            const root = document.documentElement;
            const previousBehavior = root.style.scrollBehavior;
            root.style.scrollBehavior = 'auto';

            gsap.to(window, {
              duration: 1.05,
              ease: 'power3.inOut',
              scrollTo: { y: target, offsetY: navOffset() },
              overwrite: 'auto',
              onComplete: () => {
                root.style.scrollBehavior = previousBehavior;
              },
              onInterrupt: () => {
                root.style.scrollBehavior = previousBehavior;
              },
            });
            window.history.replaceState(null, '', hash);
          });
        };
        document.addEventListener('click', onClick);

        return () => {
          window.removeEventListener('load', refresh);
          document.removeEventListener('click', onClick);
        };
      });

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);
}
