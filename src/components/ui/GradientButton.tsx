import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function GradientButton({
  className = "",
  children,
  type = "button",
  ...rest
}: Props) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-[1px] bg-linear-to-r from-wuyin-accent to-wuyin-accent-soft px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-wuyin-glow transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-accent-soft active:scale-[0.98] sm:px-8 sm:py-3 sm:text-base ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
