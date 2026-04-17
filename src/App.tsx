import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import HomePage from "@/pages/HomePage";
import NarrativePage from "@/pages/NarrativePage";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-dvh bg-wuyin-bg text-neutral-100">
      <SiteHeader />
      <main className="pt-16 lg:pt-[4.25rem]">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="narrative" element={<NarrativePage />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
