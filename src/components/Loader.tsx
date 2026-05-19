import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[10000] bg-[#050505] flex flex-col items-center justify-center"
        exit={{ opacity: 0, transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] } }}
      >
        <div className="relative flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-serif tracking-[0.3em] uppercase mb-8"
          >
            AETERNA
          </motion.h1>
          
          <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-white origin-left"
              style={{ scaleX: progress / 100 }}
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            className="mt-4 text-[10px] tracking-widest uppercase font-light"
          >
            Entering the Cinematic Experience
          </motion.p>
        </div>

        <div className="absolute inset-0 noise-bg opacity-10" />
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
