import imgNewsCover1 from "@/images/index3.png";
import imgNewsCover2 from "@/images/index4.png";
import imgNewsCover3 from "@/images/index5.png";
import imgNewsCover4 from "@/images/index6.png";
import imgNewsCover5 from "@/images/index7.png";
import imgNewsCover6 from "@/images/index8.png";
import imgNewsCover7 from "@/images/index9.png";
import imgNewsCover8 from "@/images/index2.png";

export type NewsTagId = "announcement" | "event" | "media";

export type NewsItem = {
  id: string;
  slug: string;
  date: string;
  tag: NewsTagId;
  titleZh: string;
  titleEn: string;
  excerptZh: string;
  excerptEn: string;
  /** 详情正文，段落之间用空行分隔 */
  bodyZh: string;
  bodyEn: string;
  /** 详情页底部可选外链 */
  href?: string;
  pinned?: boolean;
  /** 首页卡片等处的可选封面图（Vite 打包后的 URL） */
  coverImage?: string;
};

export function formatNewsDate(iso: string, locale: string) {
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString(locale === "en" ? "en-US" : "zh-CN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export const newsItems: NewsItem[] = [
  {
    id: "nw-1",
    slug: "2026-zg-summit-preview",
    date: "2026-04-18",
    tag: "event",
    pinned: true,
    titleZh: "《止戈之巅》2026 赛季预热开启",
    titleEn: "Zhi Ge Summit 2026 season warm-up opens",
    excerptZh: "全球少年武道铸印大典公布本年度传播节奏与报名窗口，纪录片《寻源武圣山》同步释出先导片。",
    excerptEn:
      "The global youth martial sealing gala unveils this year's comms cadence and entry window; the Tracing Wusheng Mountain doc drops a teaser.",
    bodyZh:
      "本赛季将以「止戈」为叙事主轴，面向全球少年开放报名与分赛区选拔。传播侧将分阶段释放先导内容与信任状素材，便于社群与媒体同步跟进。\n\n纪录片《寻源武圣山》将同步释出先导片，作为赛前文化叙事的重要一环。完整正片与赛程细则将在官方渠道陆续更新。",
    bodyEn:
      "This season centers on Zhi Ge as the narrative spine, opening global youth entry and regional qualifiers. Comms will roll out teaser content and proof points in phases for communities and press.\n\nThe Tracing Wusheng Mountain documentary releases a teaser alongside, as part of the pre-event cultural arc. Full film and schedule details will follow on official channels.",
    coverImage: imgNewsCover1,
  },
  {
    id: "nw-2",
    slug: "site-news-channel",
    date: "2026-04-12",
    tag: "announcement",
    titleZh: "官网新增「最新动态」频道",
    titleEn: "Official site adds a News channel",
    excerptZh: "赛事公告、媒体报道与产品更新将集中在此栏目发布，支持中英文切换浏览。",
    excerptEn: "Event notices, press, and product notes will be published here with bilingual browsing.",
    bodyZh:
      "为便于用户一站式获取官方信息，主站新增「最新动态」栏目。后续赛事节点、合作媒体稿件与产品更新将优先在此汇总。\n\n您可在首页预览最新条目，亦可进入列表页按时间浏览。单条动态支持独立详情页，便于分享与存档。",
    bodyEn:
      "The main site adds a News section so visitors can find official updates in one place. Event milestones, partner press, and product notes will be summarized here first.\n\nYou can scan the latest items on the home page or browse the full list chronologically. Each item has its own detail page for sharing and reference.",
    coverImage: imgNewsCover2,
  },
  {
    id: "nw-3",
    slug: "culture-week-outline",
    date: "2026-03-28",
    tag: "media",
    titleZh: "总决赛文化周：演武、思辨与研学框架公布",
    titleEn: "Finals Culture Week: forms, debate, and study tour outline",
    excerptZh: "三日文化周将串联武道演武、止戈思辨与武圣山研学动线，具体日程以官方赛程为准。",
    excerptEn:
      "The three-day week links martial demonstration, Zhi Ge debate, and mountain study routes; schedules follow the official calendar.",
    bodyZh:
      "总决赛文化周将用三天时间串联三大模块：武道演武呈现技术与礼仪；止戈思辨以现场抽题与即兴表达考核价值观；武圣山研学则把文脉与场域体验写进行程。\n\n具体场次、嘉宾与开放名额以官方赛程与报名系统为准。下方可跳转至项目仓库查看演示站构建说明（占位外链示例）。",
    bodyEn:
      "The finals culture week spans three modules: martial demonstration for technique and etiquette; Zhi Ge debate with on-stage prompts; and Wusheng Mountain study routes for lineage and place.\n\nSessions, guests, and capacity follow the official calendar and registration system. Below is a placeholder link to the demo repository.",
    href: "https://github.com/bayniidt/wuyinyuzhou-web-stitch",
    coverImage: imgNewsCover3,
  },
  {
    id: "nw-4",
    slug: "partner-pipeline",
    date: "2026-03-01",
    tag: "announcement",
    titleZh: "合作与品牌联名通道持续开放",
    titleEn: "Partnership and co-branding intake stays open",
    excerptZh: "企业合作页支持按行业分流提交需求，工作组将在正式流程上线后统一回访。",
    excerptEn: "The partnership page routes requests by sector; the team will follow up when production intake goes live.",
    bodyZh:
      "合作页面向品牌、活动、俱乐部、文旅、投资与媒体等方向开放意向登记。当前为演示分流与表单占位，正式版本将接入工单与商务回访流程。\n\n若您已有明确合作提案，建议在表单中写明目标行业、预期规模与希望对接时间，以便后续路由到对应负责人。",
    bodyEn:
      "The partnership page accepts interest across brand, event, club, tourism, investment, and media tracks. The current flow is a demo router and form; production will connect to ticketing and business follow-up.\n\nIf you have a concrete proposal, note sector, expected scale, and preferred timing so we can route you to the right owner later.",
    coverImage: imgNewsCover4,
  },
  {
    id: "nw-5",
    slug: "regional-qualifier-schedule",
    date: "2026-02-20",
    tag: "event",
    titleZh: "分赛区初选时间表与场地公示",
    titleEn: "Regional qualifier schedule and venues published",
    excerptZh: "各分赛区初选窗口、报到与检录节点公布，请选手按官方赛程与报名系统为准备赛。",
    excerptEn:
      "City qualifier windows, check-in, and staging checkpoints are published—follow the official calendar and registration for prep.",
    bodyZh:
      "为保障公平与可预期性，各分赛区初选时间表与场地信息已同步公示。报到、检录、候场与上场顺序以现场执行为准，具体细则请查阅报名系统与赛区公告。\n\n若遇不可抗力导致档期调整，官方将通过动态频道与报名手机号推送更新。",
    bodyEn:
      "To keep qualifiers fair and predictable, city schedules and venue details are published. Check-in, staging, and order of play follow on-site briefings; see registration and regional notices for specifics.\n\nIf dates shift due to force majeure, updates will go out via News and registered phone numbers.",
    coverImage: imgNewsCover5,
  },
  {
    id: "nw-6",
    slug: "doc-series-episode-two",
    date: "2026-02-08",
    tag: "media",
    titleZh: "《寻源武圣山》第二集：文脉与场域",
    titleEn: "Tracing Wusheng Mountain ep. 2: lineage and place",
    excerptZh: "镜头深入武圣山场域与礼仪细节，呈现少年铸印之路背后的文化厚度。",
    excerptEn: "The episode explores mountain place and ritual detail behind the youth sealing journey.",
    bodyZh:
      "第二集延续「寻源」主线，从场域尺度与礼仪细节切入，呈现武圣文脉如何在当代少年身上被重新激活。片中采访与空镜素材仅作文化叙事，不代表最终赛程规则。\n\n正片与花絮将在官方渠道分批上线，首页动态将同步更新。",
    bodyEn:
      "Episode two continues the tracing arc through place and ritual, showing how Wusheng lineage re-activates in today’s youth. Interviews and b-roll serve cultural narrative, not final rules.\n\nFull cuts and extras will roll out on official channels with News updates on the home page.",
    coverImage: imgNewsCover6,
  },
  {
    id: "nw-7",
    slug: "mentor-and-safety-briefing",
    date: "2026-01-25",
    tag: "announcement",
    titleZh: "导师与安全执裁说明会开放预约",
    titleEn: "Mentor and safety officiating briefing opens booking",
    excerptZh: "面向注册导师与赛区执裁的线上说明会开放预约，涵盖止戈思辨规则与安全底线。",
    excerptEn:
      "An online briefing for registered mentors and regional officials covers Zhi Ge debate rules and safety baselines.",
    bodyZh:
      "说明会将分模块讲解止戈思辨评分维度、现场安全协作与申诉路径。预约成功后可在会前下载议程与材料包；未预约者可在会后查看录播摘要（以官方通知为准）。\n\n本说明会为执裁与导师向内容，选手与家长请关注赛区公开说明安排。",
    bodyEn:
      "Sessions cover debate scoring, on-site safety collaboration, and appeals. Registered attendees get agendas and packs; others may see recap notes after the event per official notice.\n\nThis track targets mentors and officials—players and families should follow regional public briefings.",
    coverImage: imgNewsCover7,
  },
  {
    id: "nw-8",
    slug: "community-code-of-honor",
    date: "2026-01-10",
    tag: "announcement",
    titleZh: "社群公约更新：尊重、边界与反骚扰",
    titleEn: "Community code update: respect, boundaries, anti-harassment",
    excerptZh: "主站社群与线下互动渠道同步更新行为公约，强调尊重对手与边界意识。",
    excerptEn:
      "Online and touchpoint community guidelines now emphasize respect, boundaries, and anti-harassment.",
    bodyZh:
      "为保障少年参与者与家庭的体验，公约补充了线上线下互动的边界示例、举报路径与处理时效说明。赛事合作方与媒体亦需遵守相应传播规范。\n\n完整文本可在「最新动态」列表页查阅；重大修订将通过本频道公告。",
    bodyEn:
      "Guidelines add concrete examples for online/offline boundaries, reporting paths, and response timelines. Partners and press must follow companion comms standards.\n\nFull text lives in News; material changes will be announced here.",
    coverImage: imgNewsCover8,
  },
];

export function getNewsSorted(): NewsItem[] {
  return [...newsItems].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getFeaturedNews(): NewsItem | undefined {
  const sorted = getNewsSorted();
  return sorted.find((x) => x.pinned) ?? sorted[0];
}

export function getLatestNews(n: number): NewsItem[] {
  return getNewsSorted().slice(0, n);
}

export function getNewsBySlug(slug: string | undefined): NewsItem | undefined {
  if (!slug) return undefined;
  return newsItems.find((x) => x.slug === slug);
}
