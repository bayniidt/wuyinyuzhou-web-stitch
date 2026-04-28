import { motion } from "framer-motion";

interface Character {
  name: string;
  role: string;
  blurb: string;
  portrait: string;
  portraitAlt: string;
}

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-wuyin-elevated/80 shadow-wuyin-glow transition-all duration-300 hover:border-wuyin-accent/40"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-950">
        {character.portrait && (
          <img
            src={character.portrait}
            alt={character.portraitAlt}
            className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
            decoding="async"
            loading="lazy"
          />
        )}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"
          aria-hidden
        />
        
        {/* 卡牌发光动效 */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_0%,rgba(228,184,74,0.15),transparent_70%)]" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-wuyin-gold-bright opacity-80">
          {character.role}
        </p>
        <h3 className="mt-2 font-serif text-2xl font-bold text-white group-hover:text-wuyin-gold-bright transition-colors">
          {character.name}
        </h3>
        <div className="mt-4 h-px w-0 group-hover:w-full bg-wuyin-accent/50 transition-all duration-500" />
        <p className="mt-4 text-xs leading-relaxed text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
          {character.blurb}
        </p>
      </div>
      
      {/* 虚拟护照收藏按钮 */}
      <button 
        className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-sm text-wuyin-muted hover:text-wuyin-gold-bright hover:border-wuyin-gold-bright/40 transition-all active:scale-90"
        title="收藏至武印护照"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z" />
        </svg>
      </button>
    </motion.article>
  );
}
