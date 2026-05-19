import { motion } from 'framer-motion';

const LightLeak = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[50] overflow-hidden">
      <motion.div
        animate={{
          x: ['-10%', '10%', '-10%'],
          y: ['-10%', '10%', '-10%'],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-orange-500/20 to-transparent blur-[100px]"
      />
      <motion.div
        animate={{
          x: ['10%', '-10%', '10%'],
          y: ['10%', '-10%', '10%'],
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-blue-500/10 to-transparent blur-[100px]"
      />
    </div>
  );
};

export default LightLeak;
