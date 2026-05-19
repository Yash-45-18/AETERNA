import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=300%',
        scrub: true,
        pin: true,
      },
    });

    tl.to('.story-img-1', { scale: 1.2, opacity: 0, duration: 1 })
      .from('.story-img-2', { xPercent: 100, duration: 1 }, '-=0.5')
      .to('.story-text-1', { opacity: 0, y: -20, duration: 0.5 }, '-=1')
      .from('.story-text-2', { opacity: 0, y: 20, duration: 0.5 }, '-=0.5')
      .to('.story-img-2', { scale: 1.2, opacity: 0, duration: 1 })
      .from('.story-img-3', { scale: 0.5, opacity: 0, duration: 1 }, '-=0.5')
      .from('.story-text-3', { opacity: 0, y: 20, duration: 0.5 }, '-=0.5');

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen relative w-full overflow-hidden bg-black">
      {/* Background Images */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070"
          className="story-img-1 absolute inset-0 w-full h-full object-cover"
          alt="Story 1"
        />
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2070"
          className="story-img-2 absolute inset-0 w-full h-full object-cover"
          alt="Story 2"
        />
        <img
          src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=2070"
          className="story-img-3 absolute inset-0 w-full h-full object-cover"
          alt="Story 3"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <div className="story-text-1 absolute inset-0 flex flex-col items-center justify-center px-4">
            <h2 className="text-4xl md:text-7xl font-serif mb-6 italic">The Vow of Silence</h2>
            <p className="text-lg md:text-xl font-light tracking-widest uppercase">Chapter I: The Arrival</p>
          </div>
          
          <div className="story-text-2 absolute inset-0 flex flex-col items-center justify-center px-4 opacity-0">
            <h2 className="text-4xl md:text-7xl font-serif mb-6 italic">Echoes of Gold</h2>
            <p className="text-lg md:text-xl font-light tracking-widest uppercase">Chapter II: The Ceremony</p>
          </div>

          <div className="story-text-3 absolute inset-0 flex flex-col items-center justify-center px-4 opacity-0">
            <h2 className="text-4xl md:text-7xl font-serif mb-6 italic">Eternal Light</h2>
            <p className="text-lg md:text-xl font-light tracking-widest uppercase">Chapter III: The Legacy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
