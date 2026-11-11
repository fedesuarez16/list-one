export type PasoIcon =
  | "medir"
  | "planificar"
  | "preparar"
  | "cortar"
  | "probar"
  | "adhesivo"
  | "colocar"
  | "secar"
  | "terminar";

export type Paso = {
  icon: PasoIcon;
  title: string;
  /** Una línea: lo que se ve sin expandir. */
  resumen: string;
  /** Texto completo, oculto detrás de "Ver detalle". */
  detalle: string[];
  bullets?: string[];
  closing?: string;
};

export const instalacionIntro = "Nueve pasos para una instalación limpia, pareja y con terminación profesional.";

export const datosClave = [
  { value: "11 cm × 2,74 m", label: "Medida de cada tabla" },
  { value: "+10 %", label: "Extra para cortes y sobrantes" },
  { value: "Hasta 10 m", label: "De la fuente LED al revestimiento" },
];

export const herramientas = ["Metro", "Nivel o láser", "Sierra de dientes finos", "Adhesivo de construcción"];

export const pasosInstalacion: Paso[] = [
  {
    icon: "medir",
    title: "Medí la pared",
    resumen: "Calculá cuántas tablas necesitás y sumá un 10 % para cortes.",
    detalle: [
      "Medí el ancho y la altura de la pared, o de cada sección que quieras cubrir. Tené en cuenta ventanas, muebles fijos, cielorrasos y tomas de corriente antes de cortar.",
      "Cada tabla cubre 0,11 m de ancho × 2,74 m de largo: dividí el ancho de la pared por 0,11 m y sumá un 10 % para cortes, recortes y sobrantes.",
      "Si vas a sumar LED, reservá un lugar para la fuente de alimentación y el controlador: pueden estar hasta a 10 m del revestimiento.",
    ],
  },
  {
    icon: "planificar",
    title: "Planificá el diseño",
    resumen: "Marcá la línea de partida con nivel o láser.",
    detalle: [
      "Antes de pegar, definí cómo se van a distribuir las tablas a lo largo de la pared. Es clave en paredes decorativas, donde buscás que los dos extremos queden equilibrados.",
      "Arrancá desde una línea de referencia recta y evitá que te quede una tabla muy angosta en un borde. Para un acabado impecable, marcá el punto de partida con un nivel o una línea láser.",
    ],
  },
  {
    icon: "preparar",
    title: "Prepará la superficie",
    resumen: "Pared limpia, seca, sin polvo y lo más lisa posible.",
    detalle: [
      "Asegurate de que la pared esté limpia, seca y sin polvo, pintura suelta, grasa ni residuos.",
      "Si tiene textura, protuberancias o irregularidades, alisala primero; si es muy despareja, evaluá corregirla con alfajías. Cuanto más lisa la superficie, mejor se asientan y adhieren las tablas.",
    ],
  },
  {
    icon: "cortar",
    title: "Cortá a medida",
    resumen: "Sierra circular, de calar o serrucho de dientes finos.",
    detalle: [
      "Las tablas se cortan a la medida de tu pared y se ajustan a bordes, esquinas, aberturas y accesorios. Podés usar sierra circular, sierra de calar o serrucho de dientes finos.",
      "Medí con precisión antes de cada corte, cortá despacio y con firmeza, y sujetá bien la tabla. Un corte cuidadoso deja un borde más limpio y evita el astillado.",
    ],
  },
  {
    icon: "probar",
    title: "Probá en seco",
    resumen: "Presentá las tablas sin adhesivo para chequear el ajuste.",
    detalle: [
      "Antes de aplicar el adhesivo, presentá las tablas en su posición para comprobar el ajuste, el espaciado, la alineación y el equilibrio visual final. Este paso evita errores y facilita mucho la instalación.",
    ],
  },
  {
    icon: "adhesivo",
    title: "Aplicá el adhesivo",
    resumen: "Cordones de adhesivo de construcción en el dorso.",
    detalle: [
      "Usá un adhesivo de construcción adecuado y aplicalo en el dorso de la tabla, siguiendo las instrucciones del fabricante.",
      "Normalmente se aplica en cordones a lo largo de la tabla, con cobertura suficiente para una unión firme. No apliques más adhesivo del que puedas manejar antes de que empiece a formar piel.",
    ],
  },
  {
    icon: "colocar",
    title: "Colocá las tablas",
    resumen: "Presioná cada tabla, alineada con la anterior.",
    detalle: [
      "Presioná firmemente la tabla contra la pared en la posición prevista y seguí tabla por tabla, cuidando que cada una quede alineada con la anterior.",
    ],
    bullets: [
      "Comprobá que cada tabla quede bien asentada.",
      "Mantené la alineación del perfil.",
      "Retirá el excedente de adhesivo.",
      "Seguí a lo largo de la pared hasta completarla.",
    ],
    closing: "Si hace falta, usá un soporte temporal para sostener las tablas mientras fragua el adhesivo.",
  },
  {
    icon: "secar",
    title: "Dejá secar",
    resumen: "Respetá el tiempo de secado que indica el fabricante.",
    detalle: [
      "Una vez instalado, dejá que el adhesivo seque por completo según el tiempo que indique el fabricante. Hasta entonces, evitá pintar, sellar o hacer presión sobre las tablas.",
    ],
  },
  {
    icon: "terminar",
    title: "Dale la terminación",
    resumen: "Probá el acabado en un recorte antes de aplicarlo.",
    detalle: [
      "El paso final depende del acabado que elijas. Probalo siempre en una sección chica o en un recorte antes de aplicarlo en toda la instalación.",
    ],
  },
];
