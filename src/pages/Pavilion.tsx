import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Network, Crown, Users, Cpu, FileCheck, Film, Building2 } from 'lucide-react';

const ENTITIES = [
  { id: 'ip', name: '武印阁IP运营', icon: Crown, desc: '品牌中枢：世界观构建、IP授权、全球资产管理', color: '#e61c23', img: '/src/images/武印阁/unnamed.png' },
  { id: 'alliance', name: '武印盟赛事', icon: Users, desc: '产业聚合：职业赛事矩阵、联盟规则、积分体系', color: '#ff4d4d', img: '/src/images/武印阁/unnamed (1).png' },
  { id: 'crypto', name: '功夫印数字科技', icon: Cpu, desc: '数字引擎：NFT发行、RWA、数据中台、元宇宙', color: '#ff8080', img: '/src/images/武印阁/unnamed (2).png' },
  { id: 'standard', name: '武印标准认证', icon: FileCheck, desc: '规则制定：武者/裁判/俱乐部认证体系', color: '#d4af37', img: '/src/images/武印阁/unnamed (3).png' },
  { id: 'media', name: '武印传媒', icon: Film, desc: '内容生态：纪录片、短视频、播客、影视合作', color: '#ffffff', img: '/src/images/武印阁/1.png' },
  { id: 'tourism', name: '印承天下文旅', icon: Building2, desc: '线下旗舰：天印擂台、功夫印巷、文旅综合体', color: '#a0a0a0', img: '/src/images/武印阁/unnamed.png' },
];

const Pavilion = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeEntity = ENTITIES.find(e => e.id === activeId);

  return (
    <div className="bg-brand-black min-h-screen text-white pt-24">
      {/* Ecosystem Header */}
      <section className="py-20 px-6 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
        >
          <div className="flex justify-center mb-8">
             <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center border border-brand-red/30 shadow-glow-red animate-pulse">
                <Network className="w-10 h-10 text-brand-red" />
             </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-display tracking-widest uppercase mb-4">武印阁生态</h1>
          <p className="text-gray-500 tracking-[0.4em] uppercase text-xs md:text-sm">Six-in-one Synergy System</p>
        </motion.div>
      </section>

      {/* Interactive Synergy Map */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
         {/* Background Connections (SVG) */}
         <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <defs>
               <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#e61c23" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
               </radialGradient>
            </defs>
            <circle cx="50%" cy="50%" r="100" fill="url(#center-glow)" />
            {/* Energy Lines */}
            {ENTITIES.map((_, i) => {
               const angle = (i * 60) * (Math.PI / 180);
               const x2 = 50 + 35 * Math.cos(angle);
               const y2 = 50 + 35 * Math.sin(angle);
               return (
                  <motion.line 
                     key={i}
                     x1="50%" y1="50%" x2={`${x2}%`} y2={`${y2}%`} 
                     stroke="#e61c23" strokeWidth="1" strokeDasharray="5,5"
                     animate={{ strokeDashoffset: [0, -10] }}
                     transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
               );
            })}
         </svg>

         {/* Entity Nodes */}
         <div className="relative z-10 w-full max-w-4xl h-full flex items-center justify-center">
            {ENTITIES.map((entity, i) => {
               const angle = (i * 60) * (Math.PI / 180);
               const x = 35 * Math.cos(angle);
               const y = 35 * Math.sin(angle);
               
               return (
                  <motion.div
                     key={entity.id}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1, x: `${x}vw`, y: `${y}vh` }}
                     className="absolute"
                  >
                     <motion.button
                        whileHover={{ scale: 1.1 }}
                        onClick={() => setActiveId(entity.id)}
                        className={`group relative w-16 h-16 md:w-24 md:h-24 rounded-full border flex items-center justify-center bg-brand-black transition-all duration-300 ${
                           activeId === entity.id ? 'border-brand-red shadow-glow-red scale-110' : 'border-white/10 hover:border-brand-red/50'
                        }`}
                     >
                        <entity.icon className={`w-6 h-6 md:w-10 md:h-10 transition-colors duration-300 ${
                           activeId === entity.id ? 'text-brand-red' : 'text-gray-500 group-hover:text-white'
                        }`} />
                        <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] md:text-xs tracking-widest text-gray-500 uppercase font-bold group-hover:text-white opacity-0 md:opacity-100">
                           {entity.name}
                        </span>
                     </motion.button>
                  </motion.div>
               );
            })}
            
            {/* Center Core */}
            <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full bg-brand-black border border-brand-red/30 flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-brand-red/5 animate-pulse"></div>
               <span className="text-2xl md:text-4xl font-display text-white tracking-[0.2em]">武印阁</span>
            </div>
         </div>
      </section>

      {/* Detail Overlay */}
      <AnimatePresence>
         {activeId && (
            <motion.div
               initial={{ opacity: 0, x: 100 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: 100 }}
               className="fixed right-0 top-0 w-full md:w-[400px] h-full bg-zinc-950 border-l border-brand-red/20 z-[60] p-10 backdrop-blur-xl"
            >
               <button 
                  onClick={() => setActiveId(null)}
                  className="mb-12 text-gray-500 hover:text-white flex items-center gap-2 tracking-widest text-xs uppercase"
               >
                  [ CLOSE ]
               </button>

               {activeEntity && (
                  <div className="space-y-8">
                     <div className="aspect-[4/3] bg-zinc-900 overflow-hidden border border-white/5">
                        <img src={activeEntity.img} className="w-full h-full object-cover" alt={activeEntity.name} />
                     </div>
                     <div className="flex items-center gap-4">
                        <activeEntity.icon className="w-8 h-8 text-brand-red" />
                        <h3 className="text-2xl font-display text-white tracking-widest">{activeEntity.name}</h3>
                     </div>
                     <p className="text-gray-400 font-light leading-relaxed">
                        {activeEntity.desc}
                     </p>
                     <div className="pt-10">
                        <button className="w-full py-4 border border-brand-red text-brand-red font-bold tracking-widest hover:bg-brand-red hover:text-white transition-all">
                           访问官网
                        </button>
                     </div>
                  </div>
               )}
            </motion.div>
         )}
      </AnimatePresence>

      {/* Trust Signal Section */}
      <section className="py-32 px-6 border-t border-brand-red/5">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-4">
               <h4 className="text-lg font-bold tracking-widest uppercase">品牌影响力</h4>
               <p className="text-gray-500 text-sm leading-relaxed">武印阁通过世界观IP构建，在全球范围内打造东方武道文化地标。</p>
            </div>
            <div className="space-y-4 text-center">
               <h4 className="text-lg font-bold tracking-widest uppercase">全球覆盖</h4>
               <p className="text-4xl font-display text-brand-red">50+ 城市</p>
            </div>
            <div className="space-y-4 text-right">
               <h4 className="text-lg font-bold tracking-widest uppercase">数字生态</h4>
               <p className="text-gray-500 text-sm leading-relaxed">基于功夫印技术的数字资产已实现合规上链与多维赋能。</p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Pavilion;
