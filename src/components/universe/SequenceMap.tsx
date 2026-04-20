import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

interface Hotspot {
  id: string;
  x: number;
  y: number;
  label: string;
  description: string;
}

const HOTSPOTS: Hotspot[] = [
  { id: "shanhe", x: 30, y: 40, label: "山河印", description: "凝聚大地灵气，守护武圣文脉之基。" },
  { id: "fengyun", x: 65, y: 30, label: "风云决", description: "九天风云变幻，见证历代宗师登顶。" },
  { id: "tiangang", x: 50, y: 70, label: "天罡印", description: "星辰之力加持，少年问道必经之阶。" },
];

export default function SequenceMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  
  // 模拟序列帧索引 (假设有 60 帧)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef} className="relative h-[150vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* 序列帧渲染层 (占位) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-full w-full">
            {/* 实际应用中会是 <img src={`/frames/map_${currentFrame}.jpg`} /> */}
            <div className="absolute inset-0 bg-[url('/images/page2(7).png')] bg-cover bg-center opacity-60 mix-blend-screen" />
            <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
            
            {/* SVG 热点层 */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              {HOTSPOTS.map((spot) => (
                <g key={spot.id} className="pointer-events-auto cursor-pointer" onClick={() => setActiveHotspot(spot)}>
                  <motion.circle
                    cx={spot.x}
                    cy={spot.y}
                    r="1.5"
                    fill="var(--color-wuyin-gold-bright)"
                    initial={{ r: 1 }}
                    animate={{ r: [1, 1.8, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <circle
                    cx={spot.x}
                    cy={spot.y}
                    r="4"
                    fill="transparent"
                    className="hover:fill-wuyin-gold/10 transition-colors"
                  />
                </g>
              ))}
            </svg>
            
            {/* 热点详情弹窗 */}
            {activeHotspot && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute z-20 w-64 rounded-xl border border-white/10 bg-wuyin-elevated/95 p-5 shadow-wuyin-glow backdrop-blur-md"
                style={{ 
                  left: `${activeHotspot.x}%`, 
                  top: `${activeHotspot.y}%`,
                  transform: 'translate(-50%, -120%)'
                }}
              >
                <button 
                  className="absolute right-3 top-3 text-neutral-500 hover:text-white"
                  onClick={() => setActiveHotspot(null)}
                >
                  ✕
                </button>
                <h3 className="font-serif text-lg font-bold text-wuyin-gold-bright">{activeHotspot.label}</h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-300">{activeHotspot.description}</p>
                <div className="mt-4 h-px w-full bg-linear-to-r from-wuyin-accent/50 to-transparent" />
              </motion.div>
            )}
          </div>
        </div>
        
        {/* 中心文案引导 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]) }}
            className="text-center"
          >
            <h2 className="font-serif text-4xl font-black text-white sm:text-6xl">宇宙地图</h2>
            <p className="mt-4 text-wuyin-muted tracking-[0.5em]">滚动探索 3D 秘境</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
