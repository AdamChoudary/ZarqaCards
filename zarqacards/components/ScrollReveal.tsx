"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Null-rendering client component.
 * Attaches an IntersectionObserver to every `.reveal` element on the current page.
 *
 * KEY FIX: depends on `pathname` from usePathname() so it re-runs on every
 * client-side route change. Next.js App Router never re-mounts the root layout
 * during navigation, so without this dependency every inner page would have all
 * its `.reveal` elements permanently invisible (opacity:0 from globals.css).
 *
 * `requestAnimationFrame` delays observation by one paint cycle so React has
 * finished rendering the new route's DOM nodes before we query them.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // -5% bottom margin → elements trigger slightly before they're fully in view
        rootMargin: "0px 0px -5% 0px",
        threshold: 0.05,
      }
    );

    // Wait one animation frame so React has committed the new page's DOM
    const rafId = requestAnimationFrame(() => {
      // :not(.visible) → skip elements that already animated on previous pages
      document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
        observer.observe(el);
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [pathname]); // ← re-run on every route change

  return null;
}
