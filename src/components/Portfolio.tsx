import { motion } from 'framer-motion';
import Scene from './Scene';
import { cn } from '../lib/utils';

const items = [
  {
    title: 'The Solitude',
    category: 'Cinematic Portrait',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=2070',
    size: 'tall',
  },
  {
    title: 'Velvet Dreams',
    category: 'Fashion Editorial',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=2070',
    size: 'wide',
  },
  {
    title: 'Morning Mist',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80&w=2070',
    size: 'small',
  },
  {
    title: 'Urban Noir',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1449156001935-d2863fb72690?auto=format&fit=crop&q=80&w=2070',
    size: 'small',
  },
  {
    title: 'The Ritual',
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070',
    size: 'tall',
  },
  {
    title: 'Golden Hour',
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2070',
    size: 'wide',
  },
];

const Portfolio = () => {
  return (
    <Scene className="bg-[#080808]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-serif mb-4"
          >
            Selected Works
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[1px] bg-white mx-auto mb-8"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "relative group overflow-hidden cursor-pointer",
                item.size === 'tall' ? "md:col-span-4 h-[600px]" : 
                item.size === 'wide' ? "md:col-span-8 h-[400px]" : 
                "md:col-span-4 h-[400px]"
              )}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                <p className="text-[10px] tracking-[0.4em] uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.category}
                </p>
                <h3 className="text-3xl font-serif transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.title}
                </h3>
                <div className="mt-8 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-150">
                  <span className="text-[10px] uppercase font-bold">View</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Scene>
  );
};

export default Portfolio;
