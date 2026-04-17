import GradientButton from "@/components/ui/GradientButton";

export default function FinalCtaSection() {
  return (
    <section
      id="final-cta"
      className="border-b border-white/5 bg-[radial-gradient(ellipse_at_center,_rgba(255,77,77,0.12),_transparent_60%)] py-24 sm:py-32"
    >
      <div className="container-wuyin flex flex-col items-center text-center">
        <h2 className="max-w-3xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          Ready to define your path?
        </h2>
        <GradientButton className="mt-10 px-10 py-3.5 text-base sm:px-14 sm:py-4 sm:text-lg">
          Join the Ecosystem
        </GradientButton>
      </div>
    </section>
  );
}
