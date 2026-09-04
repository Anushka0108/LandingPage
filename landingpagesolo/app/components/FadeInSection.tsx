"use client";

import { useEffect, useRef, useState } from "react";

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function FadeInSection({
  children,
  className = "",
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${
        isVisible ? "fade-in-visible" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}