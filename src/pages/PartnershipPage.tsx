import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import ScrollReveal from "@/components/motion/ScrollReveal";
import PartnerLogos from "@/components/partners/PartnerLogos";
import { useMemo } from "react";

export default function PartnershipPage() {
  const domains = useMemo(() => [
    { id: 'brand', title: "品牌合作", code: "BRAND", body: "赞助商权益包、定制数字勋章方案与联名品牌合作。" },
    { id: 'event', title: "赛事合作", code: "EVENT", body: "武印标准输出、赛事承办赋能方案与积分体系接入。" },
    { id: 'club', title: "俱乐部加盟", code: "CLUB", body: "城市分盟政策、加盟流程指导与职业选手输送通道。" },
    { id: 'gov', title: "政府/文旅", code: "GOV", body: "城市名片打造、文旅联动方案与线下综合体开发。" },
    { id: 'invest', title: "投资机构", code: "INVEST", body: "商业计划书下载、融资对接入口与产业资本联动。" },
    { id: 'media', title: "媒体合作", code: "MEDIA", body: "媒体矩阵共建、内容共创计划与 KOL 深度对接。" },
  ], []);

  return (
    <div className="bg-black">
      {/* 沉浸式首屏 */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden border-b border-white/5 bg-[#080706]">
        <SectionGoldenBlocks density="sparse" intensity="subtle" variant={1} />
        <div className="container-wuyin relative z-10 py-20 text-center">
          <ScrollReveal variant="upGlow" className="wuyin-reveal-tech" visibleClassName="wuyin-reveal-tech-visible">
            <p className="text-xs font-bold uppercase tracking-[0.5em] text-wuyin-gold-bright">B端通道</p>
            <h1 className="mt-6 font-serif text-5xl font-black text-white sm:text-7xl">合作入口</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">商业合作的统一入口，分层触达全球伙伴</p>
          </ScrollReveal>
        </div>
      </section>

      {/* 合作伙伴 Logo 墙 */}
      <section className="bg-black">
        <PartnerLogos />
      </section>

      {/* 合作领域网格 */}
      <section id="partnership-brand" className="relative overflow-hidden border-b border-white/5 bg-[#0b0d11] py-20 sm:py-32">
        <SectionGoldenBlocks variant={1} />
        <div className="relative z-10 container-wuyin mx-auto">
          <div className="mb-16 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-4xl text-white sm:text-5xl">战略领域</h2>
              <p className="mt-4 max-w-2xl text-lg text-neutral-400">多元化的合作模式，赋能武道产业新生态</p>
            </div>
            <span className="hidden text-[10px] tracking-[0.3em] text-neutral-500 sm:inline">MATRIX</span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {domains.map((item, i) => (
              <ScrollReveal
                key={item.id}
                delayMs={i * 50}
                className="group relative min-h-[280px] rounded-2xl border border-white/10 bg-linear-to-br from-[#141821] via-[#14161d] to-[#12141a] p-8 transition-all hover:-translate-y-1 hover:border-wuyin-gold-bright/30"
              >
                <div className="mb-10 flex items-start justify-between">
                  <div className="h-10 w-10 rounded-lg bg-wuyin-gold-bright/10 flex items-center justify-center text-wuyin-gold-bright">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                       <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <span className="text-[10px] tracking-[0.2em] text-neutral-600 font-bold">{item.code}</span>
                </div>
                <h3 className="font-serif text-2xl leading-none text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-400">{item.body}</p>
                <p className="mt-10 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-wuyin-gold-bright uppercase cursor-pointer hover:underline">
                  了解详情
                  <span aria-hidden>➜</span>
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 合作流程图解 */}
      <section className="relative overflow-hidden border-b border-white/5 bg-black py-24 sm:py-32">
        <div className="container-wuyin relative z-10">
          <div className="mb-16 text-center">
             <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">合作流程</h2>
             <p className="mt-4 text-wuyin-muted">清晰透明的对接环节，高效促成价值共赢</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-4">
             {[
               { step: "01", label: "在线申请", desc: "提交基础合作需求" },
               { step: "02", label: "方案评审", desc: "专属团队一对一对接" },
               { step: "03", label: "合同签署", desc: "确立战略合作伙伴关系" },
               { step: "04", label: "项目执行", desc: "全方位生态资源导入" },
             ].map((item, i) => (
               <div key={item.step} className="relative p-6 rounded-xl border border-white/5 bg-[#0a0a0a]">
                 <span className="font-serif text-4xl font-black text-wuyin-gold-bright/20">{item.step}</span>
                 <h4 className="mt-4 font-serif text-xl font-bold text-white">{item.label}</h4>
                 <p className="mt-2 text-xs text-neutral-500">{item.desc}</p>
                 {i < 3 && (
                   <div className="hidden sm:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-wuyin-gold-bright/20">➜</div>
                 )}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 合作申请表 */}
      <section id="partnership-form" className="relative overflow-hidden py-24 sm:py-32">
        <SectionGoldenBlocks variant={0} />
        <div className="container-wuyin relative z-10 max-w-3xl mx-auto">
          <ScrollReveal className="rounded-3xl border border-white/10 bg-wuyin-elevated/40 p-8 sm:p-12 backdrop-blur-xl">
             <h2 className="font-serif text-3xl font-bold text-white text-center">合作申请</h2>
             <p className="mt-4 text-sm text-neutral-500 text-center">请填写以下信息，我们将在 2 个工作日内与您联系</p>
             
             <form className="mt-12 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">公司名称</label>
                      <input type="text" className="w-full rounded-lg border border-white/10 bg-black/40 px-5 py-3 text-white focus:border-wuyin-gold-bright/40 focus:outline-none" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">联系人</label>
                      <input type="text" className="w-full rounded-lg border border-white/10 bg-black/40 px-5 py-3 text-white focus:border-wuyin-gold-bright/40 focus:outline-none" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">合作意向</label>
                   <select className="w-full rounded-lg border border-white/10 bg-black/40 px-5 py-3 text-white focus:border-wuyin-gold-bright/40 focus:outline-none appearance-none">
                      <option>品牌赞助</option>
                      <option>赛事承办</option>
                      <option>投资咨询</option>
                      <option>媒体合作</option>
                      <option>其他</option>
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">需求详述</label>
                   <textarea rows={4} className="w-full rounded-lg border border-white/10 bg-black/40 px-5 py-3 text-white focus:border-wuyin-gold-bright/40 focus:outline-none resize-none"></textarea>
                </div>
                <button type="submit" className="w-full rounded-xl bg-linear-to-r from-wuyin-gold-bright to-wuyin-accent py-4 text-xs font-black uppercase tracking-[0.2em] text-black shadow-wuyin-glow transition hover:brightness-110">
                   提交申请
                </button>
             </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
