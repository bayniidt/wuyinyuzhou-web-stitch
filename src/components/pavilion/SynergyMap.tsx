import { motion } from "framer-motion";
import { useState } from "react";

interface Node {
  id: string;
  label: string;
  role: string;
  x: number;
  y: number;
}

const NODES: Node[] = [
  { id: "pavilion", label: "武印阁", role: "品牌中枢与全球资产管理", x: 50, y: 50 },
  { id: "alliance", label: "武印盟", role: "职业赛事矩阵与联盟规则", x: 20, y: 30 },
  { id: "digital", label: "功夫印", role: "NFT、RWA与元宇宙引擎", x: 80, y: 30 },
  { id: "standard", label: "武印标准", role: "武者、裁判与俱乐部认证", x: 20, y: 70 },
  { id: "media", label: "武印传媒", role: "内容生态与全媒体矩阵", x: 80, y: 70 },
  { id: "tourism", label: "印承天下", role: "线下旗舰与文旅综合体", x: 50, y: 15 },
];

export default function SynergyMap() {
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);

  return (
    <div className="relative aspect-square w-full max-w-2xl mx-auto overflow-hidden rounded-3xl border border-white/5 bg-black/40 backdrop-blur-sm">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
        {/* 连接线 */}
        {NODES.map((node) => node.id !== 'pavilion' && (
          <motion.line
            key={`line-${node.id}`}
            x1="50" y1="50"
            x2={node.x} y2={node.y}
            stroke="var(--color-wuyin-gold-bright)"
            strokeWidth="0.5"
            strokeDasharray="2 2"
            initial={{ opacity: 0.1 }}
            animate={{ 
              opacity: hoveredNode?.id === node.id || hoveredNode?.id === 'pavilion' ? 0.8 : 0.1,
              strokeWidth: hoveredNode?.id === node.id || hoveredNode?.id === 'pavilion' ? 1 : 0.5
            }}
          />
        ))}

        {/* 节点 */}
        {NODES.map((node) => (
          <g
            key={node.id}
            className="cursor-pointer"
            onMouseEnter={() => setHoveredNode(node)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.id === 'pavilion' ? 6 : 4}
              fill={hoveredNode?.id === node.id ? "var(--color-wuyin-gold-bright)" : "rgba(228,184,74,0.2)"}
              stroke="var(--color-wuyin-gold-bright)"
              strokeWidth="0.5"
              animate={{ 
                r: (hoveredNode?.id === node.id) 
                  ? (node.id === 'pavilion' ? 7 : 5) 
                  : (node.id === 'pavilion' ? 6 : 4),
                fillOpacity: hoveredNode?.id === node.id ? 1 : 0.2
              }}
            />
            <text
              x={node.x}
              y={node.y + (node.id === 'pavilion' ? 12 : 10)}
              textAnchor="middle"
              className="font-serif text-[3px] fill-white pointer-events-none font-bold"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>

      {/* 浮窗详情 */}
      <div className="absolute bottom-8 left-8 right-8">
        <div className="min-h-[80px] rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
          {hoveredNode ? (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              key={hoveredNode.id}
            >
              <h3 className="font-serif text-lg font-bold text-wuyin-gold-bright">{hoveredNode.label}</h3>
              <p className="mt-1 text-xs text-neutral-400">{hoveredNode.role}</p>
            </motion.div>
          ) : (
            <p className="text-xs text-neutral-500 italic flex items-center h-full justify-center">
              悬停节点查看生态职能
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
