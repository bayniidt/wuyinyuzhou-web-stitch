type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-wuyin-muted">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-sm text-wuyin-muted sm:text-base">{subtitle}</p>
      ) : null}
    </div>
  );
}
