import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import HomePage from "@/pages/HomePage";
import NarrativePage from "@/pages/NarrativePage";
import NftsPage from "@/pages/NftsPage";
import TimelinePage from "@/pages/TimelinePage";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-dvh bg-wuyin-bg text-neutral-100">
      <SiteHeader />
      <main className="pt-16 lg:pt-[4.25rem]">
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
