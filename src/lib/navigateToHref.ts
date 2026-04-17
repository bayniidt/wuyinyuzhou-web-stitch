import type { NavigateFunction } from "react-router-dom";
import { scrollToSelector } from "@/lib/scroll";

/** 顶栏 / 页脚：支持 `#anchor`、`/path` 与 `/path#anchor` */
export function navigateToHref(href: string, navigate: NavigateFunction) {
  const scheduleScroll = (hash: string) => {
    window.setTimeout(() => scrollToSelector(hash), 0);
  };

  if (href.startsWith("/")) {
    const i = href.indexOf("#");
    const pathname = i >= 0 ? href.slice(0, i) : href;
    const hashId = i >= 0 ? href.slice(i + 1) : "";
    if (hashId) {
      navigate({ pathname, hash: hashId });
      scheduleScroll(`#${hashId}`);
    } else {
      navigate(pathname);
    }
    return;
  }

  if (href.startsWith("#")) {
    const id = href.slice(1);
    if (!id) return;
    navigate({ pathname: "/", hash: id });
    scheduleScroll(href);
  }
}
