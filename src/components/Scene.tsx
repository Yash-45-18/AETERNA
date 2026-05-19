import { useRef, useEffect, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface SceneProps {
  children: ReactNode;
  className?: string;
}

const Scene = ({ children, className }: SceneProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    gsap.fromTo(
      element,
      {
        scale: 0.85,
        filter: 'blur(10px)',
        opacity: 0,
      },
      {
        scale: 1,
        filter: 'blur(0px)',
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom-=10%',
          end: 'top center+=20%',
          scrub: true,
        },
      }
    );

    // Exit animation
    gsap.to(element, {
      opacity: 0,
      scale: 1.1,
      filter: 'blur(5px)',
      ease: 'power2.in',
      scrollTrigger: {
        trigger: element,
        start: 'bottom top+=20%',
        end: 'bottom top-=20%',
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-20 px-4 md:px-20",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Scene;
