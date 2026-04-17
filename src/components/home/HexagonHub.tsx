import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Target, Smartphone, FileCheck, Tv, TentTree } from 'lucide-react';

const ECOSYSTEM_ITEMS = [
  { id: 'world', name: '武印宇宙', icon: Target, path: '/universe' },
  { id: 'sight', name: '武印视界', icon: Tv, path: '/sight' },
  { id: 'pavilion', name: '武印阁', icon: Shield, path: '/pavilion' },
  { id: 'kungfu', name: '功夫印', icon: Smartphone, path: '/universe' }, // Link to universe/digital for now
  { id: 'alliance', name: '武印盟', icon: FileCheck, path: '/partners' },
  { id: 'tourism', name: '印承天下', icon: TentTree, path: '/pavilion' }
];

const HexTile = ({ item, index }: { item: typeof ECOSYSTEM_ITEMS[0], index: number }) => {
  const Icon = item.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="relative group cursor-pointer"
    >
      <Link to={item.path}>
        <div className="w-48 h-56 relative">
          {/* Hexagon Shape using clip-path */}
          <div className="absolute inset-0 bg-zinc-900 transition-all duration-500 group-hover:bg-brand-red [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]">
            <div className="absolute inset-[2px] bg-brand-black transition-all duration-500 group-hover:bg-brand-red/10 [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)] flex flex-col items-center justify-center p-6 text-center">
              <Icon className="w-10 h-10 text-gray-500 group-hover:text-white transition-colors duration-500 mb-4" />
              <span className="text-sm font-bold tracking-[0.3em] text-gray-400 group-hover:text-white transition-colors duration-500 uppercase">
                {item.name}
              </span>
            </div>
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-glow-red blur-2xl pointer-events-none"></div>
        </div>
      </Link>
    </motion.div>
  );
};

const HexagonHub = () => {
  return (
    <section className="py-32 bg-brand-black overflow-hidden border-t border-brand-red/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-display text-white mb-6 uppercase tracking-[0.2em]">
            六大生态矩阵
          </h2>
          <div className="w-24 h-1 bg-brand-red mx-auto shadow-glow-red"></div>
        </motion.div>

        {/* Hex Grid Layout */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-x-12 md:gap-y-0 max-w-4xl mx-auto">
          {/* Top Row */}
          <div className="flex justify-center gap-4 md:gap-12 w-full">
            {ECOSYSTEM_ITEMS.slice(0, 3).map((item, i) => (
              <HexTile key={item.id} item={item} index={i} />
            ))}
          </div>
          {/* Bottom Row - Offset for Hex Effect */}
          <div className="flex justify-center gap-4 md:gap-12 w-full -mt-10">
            {ECOSYSTEM_ITEMS.slice(3, 6).map((item, i) => (
              <HexTile key={item.id} item={item} index={i + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HexagonHub;
