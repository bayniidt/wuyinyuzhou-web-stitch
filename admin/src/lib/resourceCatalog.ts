import homeHeroVideoFallback from "../../../官网首页素材/1.首屏/主屏背景.mp4";
import homeManifestoOverviewFallback from "../../../官网首页素材/2.武印宣言/1-以武印心.jpg";
import homeManifestoWomenFallback from "../../../官网首页素材/2.武印宣言/4-女性之印.jpg";
import homeManifestoYouthFallback from "../../../官网首页素材/2.武印宣言/2-少年之印.jpg";
import homeManifestoMarginFallback from "../../../官网首页素材/2.武印宣言/5-边缘之印.jpg";
import homeManifestoAdultFallback from "../../../官网首页素材/2.武印宣言/3-成年之印.jpg";
import homeManifestoEraFallback from "../../../官网首页素材/2.武印宣言/6-时代之印.jpg";
const homeLotusVideoFallback = "https://homevideo-1319530839.cos.ap-guangzhou.myqcloud.com/homevideo.mp4";
import homeValuesCultureFallback from "../../../官网首页素材/4.武印视界战略价值/01.jpg";
import homeValuesSocialFallback from "../../../官网首页素材/4.武印视界战略价值/02.jpg";
import homeValuesBusinessFallback from "../../../官网首页素材/4.武印视界战略价值/03.jpg";
import homeValuesInvestmentFallback from "../../../官网首页素材/4.武印视界战略价值/04.jpg";
import homeValuesEcosystemFallback from "../../../官网首页素材/4.武印视界战略价值/05.jpg";
import homeMatrixWuyingeLogoFallback from "../../../src/images/logo1000X400透明底/武印阁.png";
import homeMatrixGongfuyinLogoFallback from "../../../src/images/logo1000X400透明底/功夫印.png";
import homeMatrixWuyinmengLogoFallback from "../../../src/images/logo1000X400透明底/武印盟.png";
import homeMatrixStandardLogoFallback from "../../../src/images/logo1000X400透明底/武印标准.png";
import homeMatrixMediaLogoFallback from "../../../src/images/logo1000X400透明底/武印传媒.png";
import homeMatrixYinchengLogoFallback from "../../../src/images/logo1000X400透明底/印承天下.png";
import homeMatrixWuyingeFallback from "../../../官网首页素材/5.武印世界生态布局/01.jpg";
import homeMatrixGongfuyinFallback from "../../../官网首页素材/5.武印世界生态布局/02.jpg";
import homeMatrixWuyinmengFallback from "../../../官网首页素材/5.武印世界生态布局/03.jpg";
import homeMatrixStandardFallback from "../../../官网首页素材/5.武印世界生态布局/04.jpg";
import homeMatrixMediaFallback from "../../../官网首页素材/5.武印世界生态布局/05.jpg";
import homeMatrixYinchengFallback from "../../../官网首页素材/5.武印世界生态布局/06.jpg";

import narrativeHeroFallback from "../../../src/images/index1.png";
import narrativeCoverFallback from "../../../src/images/index2.png";
import narrativeRole1Fallback from "../../../src/images/page3 (1).png";
import narrativeRole2Fallback from "../../../src/images/page3 (2).png";
import narrativeRole3Fallback from "../../../src/images/page3 (3).png";
import narrativeRole4Fallback from "../../../src/images/page3 (4).png";

import timelineHeroFallback from "../../../src/images/page2(6).png";
import timelineTheaterFallback from "../../../src/videos/15440050_1920_1080_30fps.mp4";
import timelineWorkflowFallback from "../../../src/images/page2(2).png";
import timelineDialogueFallback from "../../../public/images/generated/timeline-dialogue-panel.svg?url";
import timelineAestheticsFallback from "../../../public/images/generated/timeline-aesthetics-panel.svg?url";

import pavilionHeroFallback from "../../../src/images/page3 (7).png";
import pavilionBrandFallback from "../../../public/images/generated/pavilion-brand-panel.svg?url";

import partnershipHeroFallback from "../../../src/images/page4 (5).png";
import partnershipBrandFallback from "../../../public/images/generated/partnership-brand.svg?url";
import partnershipEventFallback from "../../../public/images/generated/partnership-event.svg?url";
import partnershipClubFallback from "../../../public/images/generated/partnership-club.svg?url";
import partnershipGovFallback from "../../../public/images/generated/partnership-gov.svg?url";
import partnershipInvestFallback from "../../../public/images/generated/partnership-invest.svg?url";
import partnershipMediaFallback from "../../../public/images/generated/partnership-media.svg?url";

const NARRATIVE_VIDEO_FALLBACK = "https://cdn.51aes.com/video/51Aes/Banner-AES6-logo.mp4";

export interface ManagedResourceDef {
  key: string;
  label: string;
  fallbackUrl: string;
}

interface ResourceViewConfig {
  title: string;
  description: string;
  modules: string[];
  resources: ManagedResourceDef[];
}

export const resourceViews: Record<string, ResourceViewConfig> = {
  ecosystem: {
    title: "首页资源管理",
    description: "管理首页当前前台实际使用的图片与视频资源",
    modules: ["ecosystem"],
    resources: [
      { key: "home_hero_video", label: "首页 Banner 视频", fallbackUrl: homeHeroVideoFallback },
      { key: "home_manifesto_overview_image", label: "宣言总览图", fallbackUrl: homeManifestoOverviewFallback },
      { key: "home_manifesto_women_image", label: "女性之印图", fallbackUrl: homeManifestoWomenFallback },
      { key: "home_manifesto_youth_image", label: "少年之印图", fallbackUrl: homeManifestoYouthFallback },
      { key: "home_manifesto_margin_image", label: "边缘之印图", fallbackUrl: homeManifestoMarginFallback },
      { key: "home_manifesto_adult_image", label: "成年之印图", fallbackUrl: homeManifestoAdultFallback },
      { key: "home_manifesto_era_image", label: "时代之印图", fallbackUrl: homeManifestoEraFallback },
      { key: "home_lotus_video", label: "小莲花视频", fallbackUrl: homeLotusVideoFallback },
      { key: "home_values_culture_image", label: "文化价值图", fallbackUrl: homeValuesCultureFallback },
      { key: "home_values_social_image", label: "社会价值图", fallbackUrl: homeValuesSocialFallback },
      { key: "home_values_business_image", label: "商业价值图", fallbackUrl: homeValuesBusinessFallback },
      { key: "home_values_investment_image", label: "投资价值图", fallbackUrl: homeValuesInvestmentFallback },
      { key: "home_values_ecosystem_image", label: "生态价值图", fallbackUrl: homeValuesEcosystemFallback },
      { key: "home_matrix_wuyinge_logo", label: "生态矩阵-武印阁 Logo", fallbackUrl: homeMatrixWuyingeLogoFallback },
      { key: "home_matrix_gongfuyin_logo", label: "生态矩阵-功夫印 Logo", fallbackUrl: homeMatrixGongfuyinLogoFallback },
      { key: "home_matrix_wuyinmeng_logo", label: "生态矩阵-武印盟 Logo", fallbackUrl: homeMatrixWuyinmengLogoFallback },
      { key: "home_matrix_standard_logo", label: "生态矩阵-武印标准 Logo", fallbackUrl: homeMatrixStandardLogoFallback },
      { key: "home_matrix_media_logo", label: "生态矩阵-武印传媒 Logo", fallbackUrl: homeMatrixMediaLogoFallback },
      { key: "home_matrix_yincheng_logo", label: "生态矩阵-印承天下 Logo", fallbackUrl: homeMatrixYinchengLogoFallback },
      { key: "home_matrix_wuyinge_image", label: "生态矩阵-武印阁背景", fallbackUrl: homeMatrixWuyingeFallback },
      { key: "home_matrix_gongfuyin_image", label: "生态矩阵-功夫印背景", fallbackUrl: homeMatrixGongfuyinFallback },
      { key: "home_matrix_wuyinmeng_image", label: "生态矩阵-武印盟背景", fallbackUrl: homeMatrixWuyinmengFallback },
      { key: "home_matrix_standard_image", label: "生态矩阵-武印标准背景", fallbackUrl: homeMatrixStandardFallback },
      { key: "home_matrix_media_image", label: "生态矩阵-武印传媒背景", fallbackUrl: homeMatrixMediaFallback },
      { key: "home_matrix_yincheng_image", label: "生态矩阵-印承天下背景", fallbackUrl: homeMatrixYinchengFallback },
    ],
  },
  narrative: {
    title: "武印宇宙资源管理",
    description: "管理武印宇宙页面当前前台实际使用的图片与视频资源",
    modules: ["narrative", "news", "pavilion"],
    resources: [
      { key: "phi_hero_bg", label: "武印宇宙 Banner 图", fallbackUrl: narrativeHeroFallback },
      { key: "vis_doc_video", label: "纪录片视频", fallbackUrl: NARRATIVE_VIDEO_FALLBACK },
      { key: "vis_doc_cover", label: "纪录片封面", fallbackUrl: narrativeCoverFallback },
      { key: "gal_hq_role1_image", label: "角色图 1", fallbackUrl: narrativeRole1Fallback },
      { key: "gal_hq_role2_image", label: "角色图 2", fallbackUrl: narrativeRole2Fallback },
      { key: "gal_hq_role3_image", label: "角色图 3", fallbackUrl: narrativeRole3Fallback },
      { key: "gal_hq_role4_image", label: "角色图 4", fallbackUrl: narrativeRole4Fallback },
    ],
  },
  timeline: {
    title: "武印视界资源管理",
    description: "管理武印视界页面当前前台实际使用的图片与视频资源",
    modules: ["timeline"],
    resources: [
      { key: "os_hero_bg", label: "武印视界 Banner 图", fallbackUrl: timelineHeroFallback },
      { key: "os_stage1_video", label: "数字剧场主视频", fallbackUrl: timelineTheaterFallback },
      { key: "os_workflow_bg", label: "机甲武道视觉图", fallbackUrl: timelineWorkflowFallback },
      { key: "timeline_dialogue_image", label: "对话矩阵视觉图", fallbackUrl: timelineDialogueFallback },
      { key: "timeline_aesthetics_image", label: "东方美学视觉图", fallbackUrl: timelineAestheticsFallback },
    ],
  },
  pavilion: {
    title: "武印阁资源管理",
    description: "管理武印阁页面当前前台实际使用的图片资源",
    modules: ["pavilion"],
    resources: [
      { key: "gal_hero_bg", label: "武印阁 Banner 图", fallbackUrl: pavilionHeroFallback },
      { key: "pavilion_brand_image", label: "品牌 IP 视觉图", fallbackUrl: pavilionBrandFallback },
    ],
  },
  partnership: {
    title: "合作入口资源管理",
    description: "管理合作入口页面当前前台实际使用的图片资源",
    modules: ["partnership"],
    resources: [
      { key: "all_hero_bg", label: "合作入口 Banner 图", fallbackUrl: partnershipHeroFallback },
      { key: "partnership_brand_image", label: "品牌合作视觉图", fallbackUrl: partnershipBrandFallback },
      { key: "partnership_event_image", label: "赛事合作视觉图", fallbackUrl: partnershipEventFallback },
      { key: "partnership_club_image", label: "俱乐部加盟视觉图", fallbackUrl: partnershipClubFallback },
      { key: "partnership_gov_image", label: "政企文旅视觉图", fallbackUrl: partnershipGovFallback },
      { key: "partnership_invest_image", label: "投资机构视觉图", fallbackUrl: partnershipInvestFallback },
      { key: "partnership_media_image", label: "全媒体传播视觉图", fallbackUrl: partnershipMediaFallback },
    ],
  },
};

const resourceDefByKey = new Map(
  Object.values(resourceViews)
    .flatMap((view) => view.resources)
    .map((resource) => [resource.key, resource]),
);

export function getResourceView(module: string) {
  return (
    resourceViews[module] ?? {
      title: module,
      description: `管理 ${module} 模块下的前台资源`,
      modules: [module],
      resources: [],
    }
  );
}

export function isLegacyResourcePath(url?: string) {
  return !url || url.includes("/fhzb/");
}

export function resolvePreviewUrl(key: string, rawUrl?: string) {
  const def = resourceDefByKey.get(key);

  if (isLegacyResourcePath(rawUrl)) {
    return def?.fallbackUrl ?? "";
  }

  if (rawUrl?.startsWith("/images/generated/") && def?.fallbackUrl) {
    return def.fallbackUrl;
  }

  return rawUrl ?? def?.fallbackUrl ?? "";
}

export function resolvePreviewType(key: string, rawUrl?: string) {
  const resolved = resolvePreviewUrl(key, rawUrl).toLowerCase();

  if (/\.(mp4|webm|ogg)(\?|$)/i.test(resolved)) {
    return "video" as const;
  }

  if (/\.(png|jpe?g|gif|webp|avif|svg)(\?|$)/i.test(resolved)) {
    return "image" as const;
  }

  return key.toLowerCase().endsWith("_video") ? ("video" as const) : ("image" as const);
}

export function resolveSourceLabel(key: string, rawUrl?: string) {
  if (isLegacyResourcePath(rawUrl)) {
    return "当前前台默认资源";
  }

  if (rawUrl?.startsWith("/uploads/")) {
    return "已上传资源";
  }

  if (rawUrl?.startsWith("/images/generated/")) {
    return "默认后台资源";
  }

  if (rawUrl?.startsWith("http://") || rawUrl?.startsWith("https://")) {
    return "外链资源";
  }

  if (resourceDefByKey.has(key)) {
    return "当前前台资源";
  }

  return "资源";
}
