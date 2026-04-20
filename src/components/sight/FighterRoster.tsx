import { motion } from "framer-motion";

interface Fighter {
  id: string;
  name: string;
  style: string;
  record: string;
  image: string;
  hasNft: boolean;
}

const FIGHTERS: Fighter[] = [
  { id: "01", name: "叶云", style: "咏春 · 意", record: "18-0", image: "/images/fighter-1.jpg", hasNft: true },
  { id: "02", name: "雷萨", style: "泰拳 · 刚", record: "15-2", image: "/images/fighter-2.jpg", hasNft: true },
  { id: "03", name: "林森", style: "散打 · 疾", record: "20-1", image: "/images/fighter-3.jpg", hasNft: false },
];

export default function FighterRoster() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {FIGHTERS.map((fighter, i) => (
        <motion.div
          key={fighter.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-wuyin-elevated/60"
        >
          <div className="aspect-[4/5] overflow-hidden bg-neutral-900">
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-10" />
            {/* 选手照片占位 */}
            <div className="h-full w-full bg-linear-to-br from-neutral-800 to-neutral-950 flex items-center justify-center">
               <span className="text-4xl font-serif text-white/10">{fighter.name}</span>
            </div>
            
            {/* NFT 勋章悬浮发光动效 */}
            {fighter.hasNft && (
              <div className="absolute right-4 top-4 z-20">
                <motion.div
                  animate={{ 
                    rotateY: [0, 180, 360],
                    boxShadow: ["0 0 10px rgba(228,184,74,0.3)", "0 0 20px rgba(228,184,74,0.6)", "0 0 10px rgba(228,184,74,0.3)"]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-wuyin-gold-bright/50 bg-black/60 text-wuyin-gold-bright backdrop-blur-sm"
                  title="持有 NFT 数字勋章"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </motion.div>
              </div>
            )}
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold tracking-widest text-wuyin-gold-bright">{fighter.style}</p>
                <h3 className="mt-1 font-serif text-2xl font-bold text-white">{fighter.name}</h3>
              </div>
              <div className="text-right">
                <p className="text-[9px] text-neutral-500 uppercase tracking-widest">战绩</p>
                <p className="font-serif text-lg text-white">{fighter.record}</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-lg border border-white/10 bg-white/5 py-2.5 text-xs font-semibold text-white transition hover:bg-white/10">
              查看档案
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
