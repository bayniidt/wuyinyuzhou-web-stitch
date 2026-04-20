import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const display = useTransform(spring, (current) => Math.floor(current).toLocaleString());

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return <motion.span>{display}</motion.span>;
}

export default function LiveBoard() {
  const [data, setData] = useState({
    nfts: 4209,
    rwa: 12840000,
    nodes: 156,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => ({
        nfts: prev.nfts + Math.floor(Math.random() * 2),
        rwa: prev.rwa + Math.floor(Math.random() * 100),
        nodes: prev.nodes + (Math.random() > 0.9 ? 1 : 0),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "NFT 已铸造", value: data.nfts, unit: "PCS", accent: "var(--color-wuyin-gold-bright)" },
    { label: "RWA 资产估值", value: data.rwa, unit: "USD", accent: "var(--color-wuyin-accent)" },
    { label: "全球节点", value: data.nodes, unit: "NODES", accent: "var(--color-wuyin-seal)" },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="relative overflow-hidden rounded-xl border border-white/5 bg-black/40 p-6">
          <div className="absolute top-0 left-0 h-1 w-full opacity-20" style={{ backgroundColor: stat.accent }} />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">{stat.label}</p>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-serif text-3xl font-bold text-white">
              <AnimatedNumber value={stat.value} />
            </span>
            <span className="text-[10px] font-bold text-neutral-500">{stat.unit}</span>
          </div>
          {/* 背景流光动效 */}
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 h-[1px] w-full bg-linear-to-r from-transparent via-white/10 to-transparent"
          />
        </div>
      ))}
    </div>
  );
}
