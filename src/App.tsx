import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Scene from './components/Scene';
import Portfolio from './components/Portfolio';
import StorySection from './components/StorySection';
import HorizontalGallery from './components/HorizontalGallery';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import LightLeak from './components/LightLeak';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  const [loading, setLoading] = useState(true);
  useSmoothScroll();

  return (
    <main className="relative bg-black min-h-screen text-white font-sans">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <>
          <CustomCursor />
          <LightLeak />
          <Navbar />
          
          <div className="relative z-10">
            <Hero />
            
            <Scene>
              <div className="max-w-4xl text-center">
                <p className="text-[10px] tracking-[0.5em] uppercase text-white/50 mb-12">The Philosophy</p>
                <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                  Capturing the <span className="italic">unseen</span>, <br />
                  preserving the <span className="italic">ephemeral</span>.
                </h2>
                <div className="mt-16 text-white/40 max-w-xl mx-auto text-sm md:text-base leading-relaxed tracking-widest uppercase">
                  We don&apos;t just take photographs. We weave visual tapestries of light and shadow, 
                  documenting the raw essence of existence through a cinematic lens.
                </div>
              </div>
            </Scene>

            <Portfolio />
            
            <StorySection />
            
            <HorizontalGallery />
            
            <Scene className="bg-[#050505]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1496302662116-35cc4f36df92?auto=format&fit=crop&q=80&w=2070" 
                    alt="Process"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-serif mb-8 italic text-white">The Craft</h3>
                  <p className="text-white/60 mb-8 leading-loose tracking-wide font-light">
                    Every project is approached with the same dedication as a feature film. 
                    From the initial concept to the final color grade, we ensure that every frame 
                    resonates with emotion and artistic integrity.
                  </p>
                  <ul className="space-y-4 text-[10px] tracking-[0.3em] uppercase">
                    <li className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-white/40" />
                      Art Direction
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-white/40" />
                      Cinematography
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-white/40" />
                      Post-Production
                    </li>
                  </ul>
                </div>
              </div>
            </Scene>

            <Footer />
          </div>

          {/* Global Overlays */}
          <div className="noise-bg" />
          <div className="vignette" />
        </>
      )}
    </main>
  );
}

export default App;
