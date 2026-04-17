export default function ManifestoSection() {
  return (
    <section
      id="manifesto"
      className="border-b border-white/5 bg-wuyin-bg py-20 sm:py-28"
    >
      <div className="container-wuyin grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div
          className="relative aspect-square max-h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-wuyin-glow"
          aria-hidden
        >
          <div className="absolute inset-0 bg-[conic-gradient(at_30%_30%,#ff4d4d,#1a0505,#ff8080,#2a0a0a)] opacity-90" />
          <div className="absolute inset-0 mix-blend-multiply bg-[radial-gradient(circle_at_70%_70%,transparent_0%,#000_75%)]" />
        </div>
        <div>
          <h2 className="flex items-center gap-3 font-serif text-3xl font-bold text-white sm:text-4xl">
            <span className="inline-block h-8 w-1 rounded-full bg-linear-to-b from-[#ff4d4d] to-[#ff8080]" />
            Wuyin Manifesto
          </h2>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-neutral-300 sm:text-base">
            <p>
              武印视界将实体武道的节律与数字世界的信号相融合：每一次吐纳、每一步桩功，都可被记录为可验证的数字印记，并在开放的元宇宙叙事中延续。
            </p>
            <p>
              我们相信「古意」不是复古的壳，而是面向未来的内核——以东方美学与武道精神为底盘，连接竞技、藏品、社群与金融工具，构建可持续的数字武道生态。
            </p>
          </div>
          <blockquote className="mt-10 border-l border-white/15 pl-6 font-serif text-lg italic text-neutral-200 sm:text-xl">
            “以印为信，以武为境；虚实相生，方成视界。”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
