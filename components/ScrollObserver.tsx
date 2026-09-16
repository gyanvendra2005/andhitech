'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Function to observe elements
    const observeElements = () => {
      const elements = document.querySelectorAll('.fade-in-scroll:not(.is-visible)');
      if (!elements.length) return;

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              obs.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If already visible in viewport on initial render, reveal immediately
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-visible');
        } else {
          observer.observe(el);
        }
      });
    };

    // Run on mount / route change
    observeElements();

    // A small delayed check to catch dynamic or late-rendered elements
    const timer = setTimeout(observeElements, 250);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
