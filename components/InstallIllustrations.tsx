import type { ReactNode } from "react";
import type { PasoIcon } from "@/lib/instalacion";

// Mockups vectoriales de cada paso (viewBox 160×120). Paleta compartida con el sitio.
const WALL = "#ebe5dc";
const WOOD = "#b98b5e";
const GRAIN = "#a57850";
const INK = "#2a2420";
const RED = "#c71e2c";

function Slat({ x, y = 10, h = 100, w = 11, dashed = false }: { x: number; y?: number; h?: number; w?: number; dashed?: boolean }) {
  if (dashed) {
    return <rect x={x} y={y} width={w} height={h} rx={1.5} fill="none" stroke={WOOD} strokeWidth={1.4} strokeDasharray="4 3" />;
  }
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={1.5} fill={WOOD} />
      <line x1={x + w * 0.35} y1={y + 6} x2={x + w * 0.35} y2={y + h - 6} stroke={GRAIN} strokeWidth={0.8} />
    </g>
  );
}

function Wall({ children }: { children?: ReactNode }) {
  return (
    <>
      <rect x={12} y={10} width={136} height={100} rx={4} fill={WALL} />
      {children}
    </>
  );
}

const illustrations: Record<PasoIcon, ReactNode> = {
  medir: (
    <Wall>
      <Slat x={24} />
      {/* cota vertical: largo de la tabla */}
      <line x1={44} y1={12} x2={44} y2={108} stroke={INK} strokeWidth={1} />
      <path d="M41 16 L44 11 L47 16 M41 104 L44 109 L47 104" fill="none" stroke={INK} strokeWidth={1} />
      <text x={50} y={62} fontSize={9} fontWeight={600} fill={INK}>2,74 m</text>
      {/* cota horizontal: ancho de la tabla */}
      <line x1={24} y1={4} x2={35} y2={4} stroke={RED} strokeWidth={1.2} />
      <text x={38} y={7} fontSize={7} fontWeight={600} fill={RED}>11 cm</text>
      {/* metro */}
      <rect x={96} y={74} width={34} height={24} rx={5} fill={INK} />
      <circle cx={113} cy={86} r={6} fill="none" stroke="#fff" strokeWidth={1.2} />
      <rect x={70} y={92} width={28} height={5} fill="#e9b949" />
    </Wall>
  ),
  planificar: (
    <Wall>
      <line x1={30} y1={10} x2={30} y2={110} stroke={RED} strokeWidth={1.4} strokeDasharray="5 3" />
      <Slat x={33} />
      {[48, 63, 78, 93, 108, 123].map((x) => (
        <Slat key={x} x={x} dashed />
      ))}
      {/* láser */}
      <rect x={21} y={88} width={18} height={14} rx={3} fill={INK} />
      <circle cx={30} cy={95} r={2.5} fill={RED} />
    </Wall>
  ),
  preparar: (
    <Wall>
      {/* mitad sin preparar */}
      {[
        [26, 30],
        [40, 58],
        [30, 82],
        [54, 40],
        [50, 92],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={3} fill="#d3c8b9" />
      ))}
      <line x1={80} y1={14} x2={80} y2={106} stroke="#d3c8b9" strokeWidth={1} strokeDasharray="3 3" />
      {/* espátula */}
      <path d="M62 52 L84 48 L86 72 L64 74 Z" fill="#c9ccd1" stroke={INK} strokeWidth={1} />
      <rect x={84} y={57} width={26} height={7} rx={3} fill={WOOD} transform="rotate(-6 84 57)" />
      {/* brillo: pared lista */}
      {[
        [116, 32, 5],
        [130, 58, 3.5],
        [112, 84, 4],
      ].map(([x, y, s]) => (
        <path key={`${x}-${y}`} d={`M${x} ${y - s} L${x + s * 0.3} ${y - s * 0.3} L${x + s} ${y} L${x + s * 0.3} ${y + s * 0.3} L${x} ${y + s} L${x - s * 0.3} ${y + s * 0.3} L${x - s} ${y} L${x - s * 0.3} ${y - s * 0.3} Z`} fill={RED} />
      ))}
    </Wall>
  ),
  cortar: (
    <>
      <rect x={8} y={70} width={144} height={18} rx={2} fill={WOOD} />
      <line x1={14} y1={76} x2={146} y2={76} stroke={GRAIN} strokeWidth={0.8} />
      <line x1={104} y1={62} x2={104} y2={96} stroke={RED} strokeWidth={1.4} strokeDasharray="4 3" />
      {/* sierra circular */}
      <circle cx={104} cy={40} r={20} fill="#d7dade" stroke={INK} strokeWidth={3} strokeDasharray="2.5 2" />
      <circle cx={104} cy={40} r={4} fill={INK} />
      <rect x={58} y={28} width={30} height={12} rx={5} fill={INK} />
      {/* aserrín */}
      {[114, 120, 126, 117].map((x, i) => (
        <circle key={x} cx={x} cy={100 + (i % 2) * 6} r={1.5} fill={WOOD} />
      ))}
    </>
  ),
  probar: (
    <Wall>
      {[22, 37, 52, 67, 82, 97].map((x) => (
        <Slat key={x} x={x} dashed />
      ))}
      <circle cx={128} cy={34} r={14} fill={RED} />
      <path d="M121 34 L126 39 L136 28" fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
    </Wall>
  ),
  adhesivo: (
    <>
      {/* dorso de la tabla */}
      <rect x={52} y={6} width={56} height={108} rx={3} fill={GRAIN} />
      {[64, 80, 96].map((x) => (
        <path
          key={x}
          d={`M${x} 16 q4 8 0 16 q-4 8 0 16 q4 8 0 16 q-4 8 0 16 q4 8 0 16`}
          fill="none"
          stroke="#f4f1eb"
          strokeWidth={4}
          strokeLinecap="round"
        />
      ))}
      {/* pomo de adhesivo */}
      <g transform="rotate(35 128 34)">
        <rect x={112} y={26} width={36} height={16} rx={3} fill={INK} />
        <path d="M112 30 L100 34 L112 38 Z" fill={RED} />
      </g>
    </>
  ),
  colocar: (
    <Wall>
      {[20, 34, 48, 62].map((x) => (
        <Slat key={x} x={x} />
      ))}
      {/* tabla entrando en posición */}
      <Slat x={76} dashed />
      <g transform="translate(22 -2) rotate(4 82 60)">
        <Slat x={80} />
      </g>
      <path d="M140 60 L122 60 M128 54 L122 60 L128 66" fill="none" stroke={RED} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </Wall>
  ),
  secar: (
    <Wall>
      {[20, 34, 48, 62, 76, 90].map((x) => (
        <Slat key={x} x={x} />
      ))}
      <circle cx={122} cy={74} r={22} fill="#fff" stroke={INK} strokeWidth={2} />
      <path d="M122 52 A22 22 0 0 1 144 74" fill="none" stroke={RED} strokeWidth={4} />
      <line x1={122} y1={74} x2={122} y2={60} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <line x1={122} y1={74} x2={132} y2={78} stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <circle cx={122} cy={74} r={2} fill={INK} />
    </Wall>
  ),
  terminar: (
    <>
      <defs>
        <linearGradient id="ig-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffd59a" />
          <stop offset="1" stopColor="#f2a65a" />
        </linearGradient>
      </defs>
      <rect x={12} y={10} width={136} height={100} rx={4} fill="#211d1a" />
      <rect x={18} y={10} width={124} height={100} fill="url(#ig-glow)" opacity={0.9} />
      {[18, 32, 46, 60, 74, 88, 102, 116, 130].map((x) => (
        <Slat key={x} x={x} w={12} />
      ))}
      {/* pincel */}
      <g transform="rotate(-30 120 96)">
        <rect x={100} y={92} width={26} height={7} rx={3} fill={INK} />
        <rect x={126} y={90} width={8} height={11} fill="#c9ccd1" />
        <path d="M134 90 L144 92 L144 99 L134 101 Z" fill={RED} />
      </g>
    </>
  ),
};

export default function InstallIllustration({ icon }: { icon: PasoIcon }) {
  return (
    <svg viewBox="0 0 160 120" className="h-full w-full" aria-hidden="true" focusable="false">
      {illustrations[icon]}
    </svg>
  );
}
