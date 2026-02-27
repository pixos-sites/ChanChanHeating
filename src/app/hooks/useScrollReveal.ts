import { useEffect, useRef, useState } from "react";

type RevealOptions = {
  threshold?: number;
  rootMargin?: string;
};

export function useScrollReveal(options: RevealOptions = {}) {
  const { threshold = 0.16, rootMargin = "0px 0px -10% 0px" } = options;
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible, rootMargin, threshold]);

  return { ref, isVisible };
}
