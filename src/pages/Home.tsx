import React from 'react';
import Hero from '../components/home/Hero';
import Declaration from '../components/home/Declaration';
import HexagonHub from '../components/home/HexagonHub';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="bg-brand-black w-full min-h-screen">
      <Hero />
      <Declaration />
      <HexagonHub />
      
      {/* Latest News / Timeline Preview */}
      <section className="py-32 bg-zinc-950/20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md">
            <h2 className="text-3xl font-display text-white tracking-widest mb-6">最新动态</h2>
            <p className="text-gray-500 font-light leading-relaxed">
              实时追踪武印宇宙的扩展进程。从NFT首发计划到全球赛事巡演，每一项进展都将在此刻印。
            </p>
          </div>
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 border border-white/5 bg-brand-black hover:border-brand-red/30 transition-all">
              <span className="text-brand-red text-[10px] font-bold tracking-[0.2em] block mb-4">2026.04.15 · FUTURE</span>
              <p className="text-white text-sm tracking-widest">杭州奥体中心赛事预约正式开启</p>
            </div>
            <div className="p-6 border border-white/5 bg-brand-black hover:border-brand-red/30 transition-all">
               <span className="text-brand-red text-[10px] font-bold tracking-[0.2em] block mb-4">2026.04.10 · ASSETS</span>
               <p className="text-white text-sm tracking-widest">“天罡源”限定系列NFT即将上线</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wuyin's Question - Immersive Finale */}
      <section className="relative py-64 bg-brand-black overflow-hidden flex flex-col items-center justify-center">
        {/* Background Aura */}
        <div className="absolute inset-0 z-0">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[150px] animate-pulse"></div>
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative z-10 text-center"
        >
          <span className="text-brand-red text-xs tracking-[0.6em] font-bold uppercase mb-16 block">THE ULTIMATE QUESTION</span>
          <h2 className="text-4xl md:text-6xl font-display text-white mb-20 tracking-[0.4em]">武印之问</h2>
          
          <div className="space-y-12 max-w-4xl px-6">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-4xl text-gray-200 font-light tracking-widest italic"
            >
              “ 见自己 · 见众生 · 见天地 ”
            </motion.p>
            <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: 80 }}
               className="h-px bg-brand-red mx-auto shadow-glow-red"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
