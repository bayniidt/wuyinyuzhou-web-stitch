import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Universe from "./pages/Universe";
import Sight from "./pages/Sight";
import Pavilion from "./pages/Pavilion";
import Partners from "./pages/Partners";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-red selection:text-white transition-colors duration-500">
      <main key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/universe" element={<Universe />} />
          <Route path="/sight" element={<Sight />} />
          <Route path="/pavilion" element={<Pavilion />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </main>
    </div>
  );
}
