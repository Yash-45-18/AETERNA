import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Stories', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 px-6 md:px-12 py-6 flex justify-between items-center ${
          scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center">
          <a href="#" className="text-2xl font-serif tracking-[0.2em] uppercase">
            AETERNA
          </a>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase hover:text-white/70 transition-colors"
        >
          <span className="hidden md:block">Menu</span>
          <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all duration-500" />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[2000] bg-[#0a0a0a] flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 p-4 text-white hover:rotate-90 transition-transform duration-500"
            >
              <X size={32} strokeWidth={1} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease: 'easeOut' }}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl md:text-7xl font-serif hover:italic transition-all duration-300 group relative"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            <div className="absolute bottom-10 left-0 w-full flex justify-center gap-10 text-[10px] tracking-[0.3em] uppercase text-white/40">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Vimeo</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>

            <div className="absolute inset-0 noise-bg opacity-5 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
