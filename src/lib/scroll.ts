/** 平滑滚动到 hash 对应元素（与 `scroll-margin-top` 配合） */
export function scrollToSelector(hash: string) {
  if (!hash.startsWith("#")) return;
  const id = hash.slice(1);
  if (!id) return;
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}
