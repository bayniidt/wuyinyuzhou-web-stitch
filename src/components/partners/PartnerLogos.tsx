
const LOGOS = [
  "PARTNER A", "PARTNER B", "PARTNER C", "PARTNER D", "PARTNER E", "PARTNER F"
];

export default function PartnerLogos() {
  return (
    <div className="relative flex overflow-hidden border-y border-white/5 bg-black/20 py-10">
      <div className="flex w-max animate-infinite-scroll">
        {[...LOGOS, ...LOGOS].map((logo, i) => (
          <div key={i} className="mx-12 flex items-center justify-center">
            <span className="text-xl font-black tracking-tighter text-neutral-700 grayscale transition-all hover:text-white hover:grayscale-0 sm:text-2xl">
              {logo}
            </span>
          </div>
        ))}
      </div>
      
      {/* 左右遮罩渐变 */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-black to-transparent" />
    </div>
  );
}
