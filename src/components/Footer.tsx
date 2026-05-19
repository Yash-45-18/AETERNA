import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black pt-32 pb-12 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl md:text-[12vw] font-serif tracking-tighter text-center leading-[0.9] mb-12"
          >
            LET&apos;S CREATE <br />
            <span className="italic">ETERNITY</span>
          </motion.h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 border border-white/20 rounded-full text-[10px] tracking-[0.5em] uppercase hover:bg-white hover:text-black transition-all duration-500"
          >
            Start a Project
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-12 text-[10px] tracking-[0.3em] uppercase text-white/40">
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-white mb-6">Contact</h4>
            <p className="mb-2">hello@aeterna.studio</p>
            <p>+1 (555) 0123 4567</p>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-white mb-6">Social</h4>
            <a href="#" className="block mb-2 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="block mb-2 hover:text-white transition-colors">Vimeo</a>
            <a href="#" className="block hover:text-white transition-colors">Behance</a>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="text-white mb-6">Location</h4>
            <p className="mb-2">New York City, NY</p>
            <p>Paris, FR</p>
          </div>

          <div className="col-span-1 md:col-span-1 md:text-right">
            <h4 className="text-white mb-6">AETERNA STUDIO</h4>
            <p className="mb-2">© {currentYear} ALL RIGHTS RESERVED</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        <div className="mt-32 text-center text-[8px] tracking-[0.8em] uppercase text-white/20">
          Directed by Aeterna • Cinematography by Nature • Edited by Light
        </div>
      </div>

      {/* Credits-like background text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02]">
        <h1 className="text-[30vw] font-serif whitespace-nowrap -mb-20">AETERNA CINEMA</h1>
      </div>
    </footer>
  );
};

export default Footer;
