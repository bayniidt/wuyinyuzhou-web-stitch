import { useLocale } from "@/i18n/LocaleProvider";
import mapVideo from "@/videos/15440050_1920_1080_30fps.mp4";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef, useState } from "react";

interface Hotspot {
  id: string;
  x: number;
  y: number;
  label: string;
  description: string;
}

export default function SequenceMap() {
  const { t } = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  const HOTSPOTS: Hotspot[] = useMemo(() => [
    { id: "shanhe", x: 30, y: 40, label: t("narrative.map.hotspots.shanhe.label"), description: t("narrative.map.hotspots.shanhe.description") },
    { id: "fengyun", x: 65, y: 30, label: t("narrative.map.hotspots.fengyun.label"), description: t("narrative.map.hotspots.fengyun.description") },
    { id: "tiangang", x: 50, y: 70, label: t("narrative.map.hotspots.tiangang.label"), description: t("narrative.map.hotspots.tiangang.description") },
  ], [t]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef} className="relative h-[150vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* 视频背景层 */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-60 mix-blend-screen"
          >
            <source src={mapVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
        </div>

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
        
        {/* 中心文案引导 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]) }}
            className="text-center"
          >
            <h2 className="font-serif text-4xl font-black text-white sm:text-6xl">{t("narrative.map.title")}</h2>
            <p className="mt-4 text-wuyin-muted tracking-[0.5em]">{t("narrative.map.subtitle")}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
