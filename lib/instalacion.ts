export type Paso = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  closing?: string;
};

export const instalacionIntro =
  "Siga estos pasos para lograr una instalación limpia, equilibrada y con un aspecto profesional.";

export const pasosInstalacion: Paso[] = [
  {
    title: "Mide el área de la pared",
    paragraphs: [
      "Mide el ancho y la altura de la pared, o de cada sección individual que quieras cubrir. Si la pared incluye ventanas, armarios fijos, falsos techos o tomas de corriente, tenlos en cuenta antes de cortar los paneles.",
      "Utilice una calculadora para estimar la cantidad de tablas necesarias, sabiendo que cada tabla cubre 0,11 m (11 cm) de ancho x 2,74 m de largo: divide el largo de la pared por 0,11 m. Calcule aproximadamente un 10 % adicional para cortes, recortes y sobrantes.",
      "En caso de aplicar iluminación LED, prevea el espacio donde alojar la fuente de alimentación y el controlador LED, los cuales pueden estar hasta a 10 metros de distancia del revestimiento a iluminar.",
    ],
  },
  {
    title: "Planifica el diseño",
    paragraphs: [
      "Antes de aplicar el adhesivo, planifique cómo se extenderán las tablas a lo largo de la pared. Esto es especialmente importante para paredes decorativas, donde se busca un aspecto equilibrado en ambos extremos.",
      "Comience con una línea de referencia recta y evite, en lo posible, cortes de tablas muy estrechos en un borde. Coloque primero las tablas en seco para comprobar la disposición final y la alineación del perfil.",
      "Para obtener un acabado impecable, utilice un nivel o una línea láser para marcar el punto de partida.",
    ],
  },
  {
    title: "Prepare la superficie de la pared",
    paragraphs: [
      "Asegúrese de que la pared esté limpia, seca, libre de polvo y sin pintura suelta, grasa o residuos.",
      "Si la pared tiene textura, protuberancias o irregularidades, alíselas primero en la medida de lo posible; si es muy irregular, evalúe una corrección con alfajías. Una superficie más lisa ayudará a que las tablas se asienten correctamente y se adhieran de manera más uniforme.",
    ],
  },
  {
    title: "Cortar las tablas a medida",
    paragraphs: [
      "Las tablas se pueden cortar a la medida de las dimensiones de su pared y se ajustan a los bordes, esquinas, carpintería y accesorios. Entre las herramientas adecuadas se incluyen una sierra circular, una sierra de calar o una sierra de mano de dientes finos.",
      "Mida con precisión antes de cada corte, corte despacio y con firmeza, y sujete bien la tabla durante el proceso. Un corte cuidadoso ayudará a conseguir un borde más limpio y a minimizar el astillado.",
    ],
  },
  {
    title: "Prueba de ajuste antes de la instalación",
    paragraphs: [
      "Antes de aplicar el adhesivo, presente las tablas en su posición para comprobar el ajuste, el espaciado, la alineación y el equilibrio visual final. Este paso ayuda a evitar errores y facilita mucho la instalación final.",
    ],
  },
  {
    title: "Aplicar adhesivo",
    paragraphs: [
      "Aplique un adhesivo de construcción adecuado en la parte posterior de la tabla, siguiendo las instrucciones del fabricante del adhesivo.",
      "El adhesivo se aplica normalmente en cordones o líneas a lo largo de la parte posterior del panel, con una cobertura suficiente para garantizar una unión fuerte en toda la superficie. No aplique más adhesivo del que pueda manejar antes de que comience a formarse una capa superficial.",
    ],
  },
  {
    title: "Instalar los paneles",
    paragraphs: [
      "Presione firmemente la tabla contra la pared en la posición prevista. Continúe tabla por tabla, asegurándose de que cada una quede perfectamente alineada con la anterior.",
    ],
    bullets: [
      "Comprueba que cada tabla esté bien colocada.",
      "Mantener una alineación de perfil coherente.",
      "Retire cualquier exceso de adhesivo.",
      "Continúa a lo largo de la pared hasta completar.",
    ],
    closing:
      "Si es necesario, se puede utilizar un soporte temporal para mantener las tablas en su lugar mientras el adhesivo se fija.",
  },
  {
    title: "Deje que el adhesivo se seque",
    paragraphs: [
      "Una vez instalado, deje que el adhesivo se seque completamente según el tiempo recomendado por el fabricante. Evite pintar, sellar o ejercer presión innecesaria sobre los paneles hasta que el adhesivo se haya secado correctamente.",
    ],
  },
  {
    title: "Finalizando el revestimiento",
    paragraphs: [
      "El paso final depende del tipo de acabado que hayas elegido. Pruebe siempre el acabado seleccionado en una pequeña sección o recorte antes de aplicarlo en toda la instalación.",
    ],
  },
];
