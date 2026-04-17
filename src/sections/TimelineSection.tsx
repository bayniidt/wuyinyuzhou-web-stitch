export default function TimelineSection() {
  return (
    <section id="timeline" className="border-b border-white/5 py-16 sm:py-20">
      <div className="container-wuyin">
        <div className="rounded-2xl border border-dashed border-white/15 bg-wuyin-surface/50 p-8 text-center sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-wuyin-muted">
            Timeline
          </p>
          <h2 className="mt-4 font-serif text-2xl font-bold text-white sm:text-3xl">
            里程碑即将公布
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-wuyin-muted sm:text-base">
            赛事节点、主网与合作生态将按照路线图逐步释出。此处预留时间轴模块，便于后续接入设计稿或 CMS 内容。
          </p>
        </div>
      </div>
    </section>
  );
}
