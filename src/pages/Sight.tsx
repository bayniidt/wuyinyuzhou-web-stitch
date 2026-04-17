import { motion } from 'framer-motion';
import { Ticket, Calendar, MapPin, ChevronRight, Zap } from 'lucide-react';

const Sight = () => {
  return (
    <div className="bg-brand-black min-h-screen text-white">
      {/* Event Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-110">
          <img 
            src="/src/images/武印视界/unnamed.png" 
            alt="Event Background" 
            className="w-full h-full object-cover opacity-30 brightness-[0.4] blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-brand-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-brand-red tracking-[0.6em] font-bold text-sm uppercase mb-6 block">2026 HANGZHOU · 中国 · 杭州</span>
            <h1 className="text-6xl md:text-8xl font-display text-white mb-8 tracking-wider">
               武印视界<span className="text-brand-red">·</span>首秀
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-400 tracking-widest text-sm md:text-lg">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-brand-red" />
                <span>2026.10.01 - 10.07</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-red" />
                <span>杭州奥体中心 · 小莲花</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -track-x-1/2 text-brand-red opacity-50"
        >
          <ChevronRight className="w-8 h-8 rotate-90" />
        </motion.div>
      </section>

      {/* Ritual Theater */}
      <section className="py-32 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-3xl md:text-5xl font-display text-white tracking-widest mb-6">仪式感剧场</h2>
             <p className="text-gray-500 uppercase tracking-[0.4em] text-xs font-bold">The Grand Ceremony</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-4">
             <div className="aspect-video bg-zinc-900 border border-white/5 relative group overflow-hidden">
                <img src="/src/images/武印视界/unnamed (1).png" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Ritual 1" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-brand-red/20 w-16 h-16 rounded-full flex items-center justify-center border border-brand-red group-hover:scale-125 transition-transform">
                      <Zap className="w-6 h-6 text-white" />
                   </div>
                </div>
                <div className="absolute bottom-6 left-6">
                   <span className="text-xs tracking-widest text-brand-red font-bold">STAGE 01</span>
                   <p className="text-white font-display text-xl tracking-wider">天罡三十六阶</p>
                </div>
             </div>
             <div className="aspect-video bg-zinc-900 border border-white/5 relative group overflow-hidden">
                <img src="/src/images/武印视界/unnamed (2).png" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Ritual 2" />
                <div className="absolute bottom-6 left-6 text-right w-full pr-12">
                   <span className="text-xs tracking-widest text-brand-red font-bold">STAGE 02</span>
                   <p className="text-white font-display text-xl tracking-wider">封印加冕仪式</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Mecha vs Traditional Split View */}
      <section className="h-[80vh] flex flex-col md:flex-row relative">
        <div className="flex-1 relative group overflow-hidden border-r border-brand-red/20">
           <img src="/src/images/武印视界/unnamed (3).png" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[5s]" alt="Traditional" />
           <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
           <div className="absolute bottom-20 left-20 z-10">
              <h3 className="text-5xl font-display text-white tracking-widest mb-4">传统功法</h3>
              <p className="text-gray-400 tracking-[0.3em] font-light">Oriental Heritage</p>
           </div>
        </div>
        <div className="flex-1 relative group overflow-hidden">
           <img src="/src/images/武印视界/unnamed (4).png" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[5s]" alt="Mecha" />
           <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
           <div className="absolute bottom-20 right-20 z-10 text-right">
              <h3 className="text-5xl font-display text-brand-red tracking-widest mb-4">未来机甲</h3>
              <p className="text-gray-400 tracking-[0.3em] font-light uppercase">Cybernetic Evolution</p>
           </div>
        </div>
        
        {/* Interaction Center Line */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center">
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-brand-red to-transparent"></div>
            <div className="w-16 h-16 rounded-full bg-brand-black border border-brand-red flex items-center justify-center text-brand-red font-bold tracking-tighter text-2xl shadow-glow-red bg-red-glow">
               VS
            </div>
            <div className="w-px h-32 bg-gradient-to-t from-transparent via-brand-red to-transparent"></div>
        </div>
      </section>

      {/* Ticketing Center */}
      <section className="py-48 px-6 bg-brand-black relative">
        <div className="max-w-4xl mx-auto text-center">
           <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
           >
              <h2 className="text-4xl md:text-6xl font-display text-white mb-16 tracking-widest uppercase">
                 预约入场 <span className="text-brand-red">/</span> TICKET
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                   { name: '普通席', price: '¥ 380', border: 'border-white/10' },
                   { name: 'VIP · 荣耀席', price: '¥ 1280', border: 'border-brand-red/50 shadow-glow-red' },
                   { name: '元宇宙席位', price: '¥ 199', border: 'border-brand-gold/50 shadow-glow-gold' },
                 ].map((tier) => (
                   <div key={tier.name} className={`p-8 bg-zinc-900 border ${tier.border} flex flex-col items-center group hover:bg-zinc-800 transition-all duration-300`}>
                      <Ticket className="w-10 h-10 text-brand-red mb-6" />
                      <h4 className="text-lg font-bold tracking-widest mb-2 uppercase">{tier.name}</h4>
                      <p className="text-3xl font-display text-white mb-8">{tier.price}</p>
                      <button className="w-full py-3 bg-white text-black text-xs font-bold tracking-[0.2em] group-hover:bg-brand-red group-hover:text-white transition-colors">
                         立即预约
                      </button>
                   </div>
                 ))}
              </div>
           </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sight;
