import homeBannerVideoFallback from "../../../src/videos/index1.mp4";
import homeAscentVideoFallback from "../../../src/videos/16548256-hd_1080_1920_30fps.mp4";
import homeManifestoFallback from "../../../src/images/index2.png";
import homeValuesPanelFallback from "../../../public/images/generated/home-values-panel.svg?url";

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
      { key: "home_banner_video", label: "首页 Banner 视频 1", fallbackUrl: homeBannerVideoFallback },
      { key: "home_ascent_video", label: "首页 Banner 视频 2", fallbackUrl: homeAscentVideoFallback },
      { key: "home_manifesto_video", label: "首页宣言视觉", fallbackUrl: homeManifestoFallback },
      { key: "home_values_panel_image", label: "首页价值视觉图", fallbackUrl: homeValuesPanelFallback },
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
