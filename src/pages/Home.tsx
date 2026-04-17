import React from 'react';
import Hero from '../components/home/Hero';
import Declaration from '../components/home/Declaration';

const Home: React.FC = () => {
  return (
    <div className="bg-brand-black w-full min-h-screen">
      <Hero />
      <Declaration />
      
      {/* Placeholder for next sections */}
      <section className="h-screen flex items-center justify-center bg-zinc-900 border-t border-brand-red/10">
        <span className="text-gray-600 tracking-widest uppercase text-sm">Hexagon Hub Under Construction</span>
      </section>
    </div>
  );
};

export default Home;
