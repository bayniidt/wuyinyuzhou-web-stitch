import { motion } from 'framer-motion';
import { Target, Zap, Waves, Sparkles } from 'lucide-react';

const Universe = () => {
  return (
    <div className="bg-brand-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/images/武印宇宙/unnamed (5).png" 
            alt="Universe Banner" 
            className="w-full h-full object-cover opacity-40 blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display tracking-widest text-white mb-6 uppercase"
          >
            武印宇宙
          </motion.h1>
          <p className="text-gray-400 tracking-[0.4em] uppercase text-sm md:text-base">
            WUYIN LORE · 沉浸式叙事
          </p>
        </div>
      </section>

      {/* Universe Map Module */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 relative group">
              <div className="aspect-[16/10] bg-zinc-900 border border-white/10 overflow-hidden relative">
                <img 
                  src="/src/images/武印宇宙/unnamed.png" 
                  alt="Universe Map" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[10s]"
                />
                
                {/* Hotspots */}
                <div className="absolute top-[40%] left-[30%]">
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1] }} 
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-4 h-4 bg-brand-red rounded-full shadow-glow-red cursor-pointer"
                  />
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-brand-black/80 backdrop-blur-md px-3 py-1 border border-brand-red/30 text-[10px] tracking-widest whitespace-nowrap">
                    山河印
                  </div>
                </div>

                <div className="absolute top-[60%] left-[70%]">
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1] }} 
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                    className="w-4 h-4 bg-brand-gold rounded-full shadow-glow-gold cursor-pointer"
                  />
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-brand-black/80 backdrop-blur-md px-3 py-1 border border-brand-gold/30 text-[10px] tracking-widest whitespace-nowrap">
                    天罡源
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 space-y-8">
              <h2 className="text-3xl font-display text-white tracking-widest">宇宙地图</h2>
              <p className="text-gray-400 leading-relaxed font-light">
                武印大陆横跨三界，每一个区域都承载着一段尘封的武道历史。从常年积雪的“山河印”高峰，到充满科技脉动的“元宇宙观赛席位”，地理即是宿命。
              </p>
              <button className="flex items-center gap-4 text-brand-red tracking-[0.3em] font-bold group">
                <span className="border-b border-brand-red pb-1">探索完整地图</span>
                <Target className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display text-white tracking-widest mb-6">哲学根基</h2>
            <p className="text-gray-500 uppercase tracking-[0.4em] text-xs font-bold">The Core Philosophy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: '止', desc: '止戈为武，意在终结纷争而非开启冲突。', icon: Waves },
              { title: '戈', desc: '武力是最后的制衡，是和平的基石。', icon: Zap },
              { title: '印', desc: '身份的认同，荣耀的见证，生命的刻印。', icon: Sparkles },
            ].map((item) => (
              <div key={item.title} className="p-10 border border-white/5 bg-brand-black hover:border-brand-red/30 transition-all duration-500 group">
                <item.icon className="w-10 h-10 text-brand-red mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-4xl font-display text-white mb-6 tracking-widest">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Characters Placeholder */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display text-white tracking-widest mb-16 text-center">人物谱系</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-[3/4] bg-zinc-900 border border-white/10 relative group overflow-hidden">
                <img 
                  src={`/src/images/武印宇宙/unnamed (${i}).png`} 
                  alt="Character" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <p className="text-brand-red text-xs tracking-widest font-bold mb-2 uppercase">宗师级别</p>
                  <h4 className="text-2xl font-display text-white tracking-widest">武道传承人 #0{i}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Universe;
