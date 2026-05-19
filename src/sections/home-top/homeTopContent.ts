import heroBackground from "../../../官网首页素材/首屏/主屏背景.jpg";
import heroTitle from "../../../官网首页素材/首屏/标题.png";
import heroDetailButton from "../../../官网首页素材/首屏/了解详情.png";
import heroGlowRing from "../../../官网首页素材/首屏/椭圆-1.png";
import lotusVisual from "../../../官网首页素材/杭州小莲花/图层-0.png";
import lotusDetailButton from "../../../官网首页素材/杭州小莲花/了解详情.png";

export const heroStageContent = {
  eyebrow: "止戈为道，印证东方未来",
  lead: "以东方武道精神为根，以当代视觉舞台为场，重构一场属于时代的沉浸式盛典。",
  background: heroBackground,
  titleImage: heroTitle,
  detailButtonImage: heroDetailButton,
  glowRing: heroGlowRing,
} as const;

export const featureCarouselItems = [
  {
    id: "shaonian",
    eyebrow: "少年之印",
    title: "轮播图形式",
    description:
      "从武道启蒙到舞台表达，让年轻一代在仪式感与参与感中重新理解东方身体文化。",
  },
  {
    id: "shidai",
    eyebrow: "时代之印",
    title: "从少年之印 一直到 时代之印",
    description:
      "不再停留在单一赛事叙事，而是把文化、表演、传播和城市事件感合为一个完整场域。",
  },
  {
    id: "wuyin",
    eyebrow: "武印之印",
    title: "让武道从记忆走向当下",
    description:
      "借助现代舞台、内容传播与品牌协作，让武印视界成为可感知、可参与、可记住的当代符号。",
  },
] as const;

export const lotusShowcaseContent = {
  eyebrow: "杭州 · 小莲花",
  title: "万人共赴心灵之约",
  description:
    "以城市地标为舞台，将武道精神、科技舞美与沉浸式观演体验凝结为同一束时代聚光。",
  metrics: [
    { label: "目标观演规模", value: "18000+" },
    { label: "核心内容节点", value: "50+" },
  ],
  visual: lotusVisual,
  detailButtonImage: lotusDetailButton,
} as const;
