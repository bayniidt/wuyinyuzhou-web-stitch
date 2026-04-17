import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import HomePage from "@/pages/HomePage";
import NarrativePage from "@/pages/NarrativePage";
import NftsPage from "@/pages/NftsPage";
import TimelinePage from "@/pages/TimelinePage";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { Route, Routes, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="min-h-dvh bg-wuyin-bg text-neutral-100">
      <SiteHeader />
      <main
        key={location.pathname}
        className={[
          "pt-16 lg:pt-[4.25rem]",
          reducedMotion ? "" : "wuyin-animate-route-enter",
        ].join(" ")}
      >
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="narrative" element={<NarrativePage />} />
          <Route path="timeline" element={<TimelinePage />} />
          <Route path="nfts" element={<NftsPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
