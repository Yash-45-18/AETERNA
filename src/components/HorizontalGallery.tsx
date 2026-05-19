import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=2070',
];

const HorizontalGallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = gsap.to(
      sectionRef.current,
      {
        x: () => -(sectionRef.current?.scrollWidth! - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: () => `+=${sectionRef.current?.scrollWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div ref={triggerRef} className="overflow-hidden">
      <div
        ref={sectionRef}
        className="h-screen flex items-center gap-[10vw] px-[10vw] w-max bg-black"
      >
        <div className="w-[40vw] flex flex-col justify-center">
          <h2 className="text-5xl md:text-7xl font-serif mb-6">Fragments of Time</h2>
          <p className="text-sm md:text-base text-white/50 max-w-sm leading-relaxed uppercase tracking-widest">
            A collection of moments captured in the silence of nature, where every frame tells a story of existence.
          </p>
        </div>
        
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-[80vw] md:w-[60vw] h-[60vh] md:h-[70vh] flex-shrink-0 overflow-hidden group shadow-2xl"
          >
            <img
              src={src}
              alt={`Gallery ${index}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-[10px] tracking-[0.3em] uppercase bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                Landscape {index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalGallery;
