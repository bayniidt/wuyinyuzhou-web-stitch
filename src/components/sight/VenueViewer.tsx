import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Viewpoint {
  id: string;
  label: string;
  image: string;
  description: string;
}

const VIEWPOINTS: Viewpoint[] = [
  { id: "vip", label: "VIP 席位", image: "/images/venue-vip.jpg", description: "近距离感受武者博弈的呼吸与汗水，极致震撼。" },
  { id: "standard", label: "普通席位", image: "/images/venue-standard.jpg", description: "全景视角俯瞰“小莲花”赛场，尽收武道盛典全局。" },
  { id: "meta", label: "元宇宙观赛", image: "/images/venue-meta.jpg", description: "跨越虚实，在元宇宙空间与全球武者同步共振。" },
];

export default function VenueViewer() {
  const [activeId, setActiveId] = useState(VIEWPOINTS[0].id);
  const activeView = VIEWPOINTS.find(v => v.id === activeId)!;

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-10">
      <div className="relative aspect-video flex-1 overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            {/* 实际应用中会是真实的场馆预览图 */}
            <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center text-wuyin-muted/20">
              <svg viewBox="0 0 24 24" className="h-24 w-24" fill="none" stroke="currentColor" strokeWidth="0.5">
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-serif text-xl font-bold text-white sm:text-2xl">{activeView.label}</p>
              <p className="mt-2 text-sm text-neutral-300 max-w-md">{activeView.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="flex flex-col justify-center gap-3 lg:w-64">
        {VIEWPOINTS.map((v) => (
          <button
            key={v.id}
            onClick={() => setActiveId(v.id)}
            className={`group relative flex items-center justify-between rounded-xl border p-4 text-left transition-all ${
              activeId === v.id 
                ? 'border-wuyin-gold-bright/40 bg-wuyin-gold-bright/5' 
                : 'border-white/5 bg-black/40 hover:border-white/20'
            }`}
          >
            <span className={`font-serif text-sm font-bold ${activeId === v.id ? 'text-wuyin-gold-bright' : 'text-neutral-400 group-hover:text-white'}`}>
              {v.label}
            </span>
            <div className={`h-1.5 w-1.5 rounded-full ${activeId === v.id ? 'bg-wuyin-gold-bright shadow-[0_0_8px_rgba(228,184,74,0.8)]' : 'bg-neutral-700'}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
