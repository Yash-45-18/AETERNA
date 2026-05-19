import { motion } from 'framer-motion';

interface MaskTextProps {
  children: string;
  className?: string;
  delay?: number;
}

const MaskText = ({ children, className, delay = 0 }: MaskTextProps) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: [0.33, 1, 0.68, 1],
          delay,
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default MaskText;
