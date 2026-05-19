import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import MaskText from './MaskText';

const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!bgRef.current || !titleRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(
      bgRef.current,
      { scale: 1.2 },
      { scale: 1, duration: 2.5, ease: 'power2.out' }
    );

    // Mouse movement parallax
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(bgRef.current, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with Zoom Effect */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2070")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xs md:text-sm tracking-[0.5em] uppercase font-light mb-6 text-white/70"
        >
          Visual Storyteller / Cinematographer
        </motion.p>
        
        <MaskText className="text-6xl md:text-9xl font-serif tracking-tighter" delay={0.2}>
          AETERNA
        </MaskText>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex flex-col items-center"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent" />
          <p className="mt-4 text-[10px] tracking-widest uppercase text-white/40">Scroll to Explore</p>
        </motion.div>
      </div>

      {/* Ambient particles (CSS) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5,
            }}
            animate={{
              y: ['-10%', '110%'],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
