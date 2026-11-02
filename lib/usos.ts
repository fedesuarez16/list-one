export type Uso = {
  slug: string;
  keyword: string;
  title: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
  points: { title: string; description: string }[];
};

export const usos: Uso[] = [
  {
    slug: "interior",
    keyword: "Revestimiento alistonado interior",
    title: "Revestimiento alistonado interior para paredes y respaldos",
    description:
      "Revestimiento alistonado de madera para interior: paredes de living, respaldos de cama, recepciones y oficinas. Listones de eucalipto, guatambú, freijó, guayubira y paraíso.",
    intro:
      "Los listones de madera en vertical convierten una pared lisa en el punto focal del ambiente. Suman calidez, estilizan la altura y generan un juego de sombras que cambia a lo largo del día.",
    image: "/images/usecases/living.webp",
    imageAlt: "Living con pared de revestimiento alistonado de madera",
    points: [
      {
        title: "Pared protagonista en el living",
        description: "Una sola pared revestida alcanza para ordenar el espacio y darle carácter sin recargar.",
      },
      {
        title: "Respaldo de cama en el dormitorio",
        description: "El revestimiento alistonado detrás de la cama aporta textura y una sensación más cálida y envolvente.",
      },
      {
        title: "Recepciones, locales y oficinas",
        description: "Un recurso de diseño que comunica calidad y sirve de fondo para logos, mostradores o iluminación.",
      },
    ],
  },
  {
    slug: "exterior",
    keyword: "Revestimiento alistonado exterior",
    title: "Revestimiento alistonado exterior para patios, galerías y fachadas",
    description:
      "Revestimiento alistonado de madera para exterior: patios, galerías, cercos y fachadas. Opciones como pino impregnado CCA preparadas para la intemperie.",
    intro:
      "Afuera, los listones de madera suavizan muros y medianeras y acompañan la vegetación. Elegir una madera preparada para la intemperie es lo que hace que el revestimiento dure.",
    image: "/images/usecases/euca-2.webp",
    imageAlt: "Patio exterior con revestimiento alistonado de madera e iluminación",
    points: [
      {
        title: "Patios y medianeras",
        description: "Transforman una pared ciega en un fondo cálido que integra el patio con el resto de la casa.",
      },
      {
        title: "Galerías y quinchos",
        description: "El ritmo de los listones acompaña la arquitectura y define el espacio de encuentro.",
      },
      {
        title: "Madera tratada para intemperie",
        description: "El pino impregnado CCA es una de las opciones pensadas para exterior. Te orientamos según la exposición de tu pared.",
      },
    ],
  },
  {
    slug: "con-led",
    keyword: "Revestimiento alistonado con LED",
    title: "Revestimiento alistonado con LED integrado",
    description:
      "Revestimiento alistonado de madera con iluminación LED entre los listones. Disponible en eucalipto, guatambú, guayubira, paraíso y pino base negra.",
    intro:
      "La luz entre los listones resalta la veta de la madera y convierte la pared en la iluminación del ambiente. De día es un revestimiento de madera; de noche, una pared que brilla.",
    image: "/images/listone-prendido.webp",
    imageAlt: "Revestimiento alistonado con iluminación LED encendida",
    points: [
      {
        title: "Luz indirecta y cálida",
        description: "La iluminación queda integrada entre los listones, sin artefactos a la vista.",
      },
      {
        title: "Varias maderas disponibles",
        description: "Eucalipto, guatambú, guayubira, paraíso y pino base negra con versiones iluminadas.",
      },
      {
        title: "Ideal para living, dormitorio y locales",
        description: "Una pared iluminada genera ambiente y es un recurso muy fotografiable para espacios comerciales.",
      },
    ],
  },
];
