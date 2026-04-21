import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { useLocale } from "@/i18n/LocaleProvider";
import manifestoVisual from "@/images/index2.png";
import { motion } from "framer-motion";

export default function ManifestoSection() {
  const { t } = useLocale();

  return (
    <section id="home-manifesto" className="relative overflow-hidden border-b border-white/5 bg-wuyin-bg py-20 sm:py-28">
      <SectionGoldenBlocks variant={0} />
      <ScrollReveal className="relative z-10 container-wuyin grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative aspect-square max-h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-wuyin-glow"
          aria-hidden
        >
          <img
            src={manifestoVisual}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            decoding="async"
          />
          <div className="absolute inset-0 bg-linear-to-br from-black/70 via-neutral-900/20 to-black/80" />
          <div className="absolute inset-0 mix-blend-soft-light bg-[radial-gradient(circle_at_30%_25%,rgba(228,184,74,0.24),transparent_55%)]" />
          
          {/* 水墨叠加效果纹理 */}
          <div 
            className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
            }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="flex items-center gap-3 font-serif text-3xl font-bold text-white sm:text-4xl">
            <span className="inline-block h-8 w-1 rounded-full bg-linear-to-b from-wuyin-accent to-wuyin-seal" />
            {t("home.manifesto.title")}
          </h2>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-neutral-300 sm:text-base">
            <p>{t("home.manifesto.p1")}</p>
            <p>{t("home.manifesto.p2")}</p>
          </div>
          
          {/* 武印宣言 水墨渐现动效 */}
          <motion.blockquote 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="relative mt-10 border-l border-white/15 pl-6 font-serif text-lg  text-neutral-200 sm:text-xl"
          >
            <span className="relative z-10">“{t("home.manifesto.quote")}”</span>
            <div className="absolute -left-2 -top-4 -z-0 h-16 w-16 opacity-20 blur-xl bg-wuyin-accent rounded-full" />
          </motion.blockquote>
        </motion.div>
      </ScrollReveal>
    </section>
  );
}
