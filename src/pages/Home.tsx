import React from 'react';
import Hero from '../components/home/Hero';
import Declaration from '../components/home/Declaration';
import HexagonHub from '../components/home/HexagonHub';

const Home: React.FC = () => {
  return (
    <div className="bg-brand-black w-full min-h-screen">
      <Hero />
      <Declaration />
      <HexagonHub />
      
      {/* Placeholder for News & Questions */}
      <section className="py-48 flex flex-col items-center justify-center bg-zinc-950/50 border-t border-brand-red/5">
        <h2 className="text-3xl font-display text-white mb-12 tracking-widest uppercase">武印之问</h2>
        <div className="italic text-gray-500 text-xl md:text-2xl text-center max-w-3xl px-6 leading-relaxed">
          “ 见自己 · 见众生 · 见天地 ”
        </div>
      </section>
    </div>
  );
};

export default Home;
