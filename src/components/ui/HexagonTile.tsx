import type { ReactNode } from "react";

type Props = {
  label: string;
  icon: ReactNode;
};

export default function HexagonTile({ label, icon }: Props) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="flex h-28 w-24 items-center justify-center bg-wuyin-elevated sm:h-32 sm:w-28"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      >
        <div
          className="flex h-[88%] w-[88%] items-center justify-center bg-wuyin-surface"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        >
          <span className="text-wuyin-accent [&>svg]:h-7 [&>svg]:w-7 sm:[&>svg]:h-8 sm:[&>svg]:w-8">
            {icon}
          </span>
        </div>
      </div>
      <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-300 sm:text-xs">
        {label}
      </p>
    </div>
  );
}
