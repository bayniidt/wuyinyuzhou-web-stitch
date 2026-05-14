import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { useLocale } from "@/i18n/LocaleProvider";
import { useModuleResources } from "@/hooks/useModuleResources";
import { motion } from "framer-motion";
import imgManifestoFallback from "@/images/index2.png";
import { useState } from "react";

export default function ManifestoSection() {
  const { t } = useLocale();
  const { resources, loading } = useModuleResources(['', 'ecosystem']);
  const isBrokenPath = (url: string | undefined) => !url || url.includes('/fhzb/');
  const manifestoVisual = isBrokenPath(resources['home_manifesto_video']) ? imgManifestoFallback : resources['home_manifesto_video'];
  const [activeVoice, setActiveVoice] = useState("youth");
  const voices = [
    {
      key: "youth",
      title: t("home.manifesto.voices.youth.title"),
      body: t("home.manifesto.voices.youth.body"),
    },
    {
      key: "adult",
      title: t("home.manifesto.voices.adult.title"),
      body: t("home.manifesto.voices.adult.body"),
    },
    {
      key: "women",
      title: t("home.manifesto.voices.women.title"),
      body: t("home.manifesto.voices.women.body"),
    },
    {
      key: "margin",
      title: t("home.manifesto.voices.margin.title"),
      body: t("home.manifesto.voices.margin.body"),
    },
    {
      key: "era",
      title: t("home.manifesto.voices.era.title"),
      body: t("home.manifesto.voices.era.body"),
    },
  ];
  const questions = [
    {
      key: "self",
      title: t("home.manifesto.questions.self.title"),
      body: t("home.manifesto.questions.self.body"),
    },
    {
      key: "people",
      title: t("home.manifesto.questions.people.title"),
      body: t("home.manifesto.questions.people.body"),
    },
    {
      key: "world",
      title: t("home.manifesto.questions.world.title"),
      body: t("home.manifesto.questions.world.body"),
    },
  ];

  if (loading) return null;

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
          {manifestoVisual && (
            manifestoVisual.endsWith('.mp4') ? (
              <video
                key={manifestoVisual}
                src={manifestoVisual}
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={manifestoVisual}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                decoding="async"
              />
            )
          )}
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
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-wuyin-gold-bright/80">
            {t("home.manifesto.eyebrow")}
          </p>
          <h2 className="mt-4 flex items-center gap-3 font-serif text-3xl font-bold text-white sm:text-4xl">
            <span className="inline-block h-8 w-1 rounded-full bg-linear-to-b from-wuyin-accent to-wuyin-seal" />
            {t("home.manifesto.title")}
          </h2>
          <p className="mt-5 font-serif text-lg text-neutral-200 sm:text-xl">
            {t("home.manifesto.subtitle")}
          </p>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-neutral-300 sm:text-base">
            <p>{t("home.manifesto.intro")}</p>
            <p>{t("home.manifesto.bridge")}</p>
          </div>

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

          <div className="mt-10 space-y-3">
            {voices.map((voice) => {
              const isActive = activeVoice === voice.key;
              return (
                <div
                  key={voice.key}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                >
                  <button
                    type="button"
                    onClick={() => setActiveVoice(isActive ? "" : voice.key)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  >
                    <span className="font-serif text-lg text-white">{voice.title}</span>
                    <span className="text-xl leading-none text-wuyin-gold-bright">
                      {isActive ? "−" : "+"}
                    </span>
                  </button>
                  {isActive ? (
                    <div className="border-t border-white/10 px-5 py-4 text-sm leading-7 text-neutral-300 sm:px-6">
                      {voice.body}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-[28px] border border-white/10 bg-black/25 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-wuyin-gold-bright/85">
              {t("home.manifesto.questions.eyebrow")}
            </p>
            <h3 className="mt-4 font-serif text-2xl text-white sm:text-3xl">
              {t("home.manifesto.questions.title")}
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {questions.map((question) => (
                <article key={question.key} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="font-serif text-lg text-white">{question.title}</p>
                  <p className="mt-3 text-sm leading-7 text-neutral-300">{question.body}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-neutral-300">
              {t("home.manifesto.closer")}
            </p>
          </div>
        </motion.div>
      </ScrollReveal>
    </section>
  );
}
