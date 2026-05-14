import { useLocale } from "@/i18n/LocaleProvider";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

interface Node {
  id: string;
  label: string;
  role: string;
  x: number;
  y: number;
}

export default function SynergyMap() {
  const { t } = useLocale();
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);

  const nodes: Node[] = useMemo(
    () => [
      { id: "ip", label: t("pavilion.map.nodes.ip.label"), role: t("pavilion.map.nodes.ip.role"), x: 50, y: 50 },
      { id: "events", label: t("pavilion.map.nodes.events.label"), role: t("pavilion.map.nodes.events.role"), x: 22, y: 28 },
      { id: "digital", label: t("pavilion.map.nodes.digital.label"), role: t("pavilion.map.nodes.digital.role"), x: 78, y: 28 },
      { id: "inheritance", label: t("pavilion.map.nodes.inheritance.label"), role: t("pavilion.map.nodes.inheritance.role"), x: 22, y: 72 },
      { id: "standard", label: t("pavilion.map.nodes.standard.label"), role: t("pavilion.map.nodes.standard.role"), x: 78, y: 72 },
      { id: "media", label: t("pavilion.map.nodes.media.label"), role: t("pavilion.map.nodes.media.role"), x: 50, y: 14 },
    ],
    [t],
  );

  const centerId = "ip";

  return (
    <div className="relative mx-auto aspect-square w-full max-w-2xl overflow-hidden rounded-3xl border border-white/5 bg-black/40 backdrop-blur-sm">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
        {nodes.map((node) =>
          node.id !== centerId ? (
            <motion.line
              key={`line-${node.id}`}
              x1="50"
              y1="50"
              x2={node.x}
              y2={node.y}
              stroke="var(--color-wuyin-gold-bright)"
              strokeWidth="0.5"
              strokeDasharray="2 2"
              initial={{ opacity: 0.12 }}
              animate={{
                opacity: hoveredNode?.id === node.id || hoveredNode?.id === centerId ? 0.8 : 0.12,
                strokeWidth: hoveredNode?.id === node.id || hoveredNode?.id === centerId ? 1 : 0.5,
              }}
            />
          ) : null,
        )}

        {nodes.map((node) => (
          <g
            key={node.id}
            className="cursor-pointer"
            onMouseEnter={() => setHoveredNode(node)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.id === centerId ? 6 : 4}
              fill={hoveredNode?.id === node.id ? "var(--color-wuyin-gold-bright)" : "rgba(228,184,74,0.2)"}
              stroke="var(--color-wuyin-gold-bright)"
              strokeWidth="0.5"
              animate={{
                r: hoveredNode?.id === node.id ? (node.id === centerId ? 7 : 5) : node.id === centerId ? 6 : 4,
                fillOpacity: hoveredNode?.id === node.id ? 1 : 0.2,
              }}
            />
            <text
              x={node.x}
              y={node.y + (node.id === centerId ? 12 : 10)}
              textAnchor="middle"
              className="pointer-events-none font-serif text-[3px] fill-white font-bold"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>

      <div className="absolute bottom-8 left-8 right-8">
        <div className="min-h-[84px] rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
          {hoveredNode ? (
            <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} key={hoveredNode.id}>
              <h3 className="font-serif text-lg font-bold text-wuyin-gold-bright">{hoveredNode.label}</h3>
              <p className="mt-1 text-xs text-neutral-400">{hoveredNode.role}</p>
            </motion.div>
          ) : (
            <p className="flex h-full items-center justify-center text-xs italic text-neutral-500">
              {t("pavilion.map.helper")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
