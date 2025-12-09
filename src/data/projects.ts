export interface Project {
  id: number;
  title: string;
  slug: string;
  image: string;
  location: string;
  year: string;
  area: string;
  description: string[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Casa Fachada Interior",
    slug: "casa-fachada-interior",
    image: "/photos/FACHADA INTERIOR 1.png",
    location: "Ciudad de México",
    year: "2024",
    area: "450 m²",
    description: [
      "Un proyecto residencial que redefine la relación entre el espacio interior y exterior. La fachada interior se convierte en el corazón de la vivienda, creando un diálogo constante con la naturaleza.",
      "El diseño incorpora materiales nobles como el concreto aparente, madera de encino y cristal de piso a techo, logrando una estética contemporánea que respeta el entorno.",
      "Los espacios fluyen naturalmente, permitiendo que la luz natural bañe cada rincón de la casa durante el día, mientras que por la noche, la iluminación arquitectónica resalta las líneas curvas características de CURVA."
    ],
    gallery: ["/photos/FACHADA INTERIOR 1.png"]
  },
  {
    id: 2,
    title: "Residencia Render",
    slug: "residencia-render",
    image: "/photos/RENDER FINAL 2.png",
    location: "Monterrey",
    year: "2024",
    area: "680 m²",
    description: [
      "Una residencia que desafía las convenciones arquitectónicas tradicionales. El volumen principal se eleva sobre el terreno, creando espacios de sombra y contemplación en la planta baja.",
      "La paleta de materiales combina superficies blancas inmaculadas con acentos de madera tropical, generando un contraste cálido y sofisticado.",
      "Cada espacio ha sido diseñado pensando en la experiencia del habitante, desde las vistas enmarcadas hasta la ventilación cruzada natural que reduce la dependencia de sistemas mecánicos."
    ],
    gallery: ["/photos/RENDER FINAL 2.png"]
  },
  {
    id: 3,
    title: "Proyecto Escena",
    slug: "proyecto-escena",
    image: "/photos/Escena 13.png",
    location: "Guadalajara",
    year: "2023",
    area: "520 m²",
    description: [
      "Un proyecto que explora las posibilidades del espacio como escenario de la vida cotidiana. La arquitectura se convierte en el telón de fondo perfecto para momentos memorables.",
      "El diseño aprovecha la topografía del terreno para crear niveles que se integran orgánicamente con el paisaje circundante.",
      "Los interiores se caracterizan por su amplitud y luminosidad, con dobles alturas que magnifican la sensación de libertad y conexión con el exterior."
    ],
    gallery: ["/photos/Escena 13.png"]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAdjacentProjects(currentSlug: string): { prev: Project | null; next: Project | null } {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
}

