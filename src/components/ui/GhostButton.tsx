import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function GhostButton({
  className = "",
  children,
  type = "button",
  ...rest
}: Props) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-full border border-white/70 bg-transparent px-6 py-2.5 text-sm font-semibold tracking-wide text-white transition hover:border-white hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80 active:scale-[0.98] sm:px-8 sm:py-3 sm:text-base ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
