import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/trabalho")({
  head: () => ({
    meta: [
      { title: "Trabalho — Murilo Ortega" },
      { name: "description", content: "Projetos selecionados de branding, conteúdo e presença digital." },
      { property: "og:title", content: "Trabalho — Murilo Ortega" },
      { property: "og:description", content: "Projetos selecionados de branding, conteúdo e presença digital." },
    ],
  }),
  component: TrabalhoPage,
});

const projects = [
  {
    name: "Brand System — Cliente lifestyle",
    type: "video",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
  },
  {
    name: "Identidade visual — Startup tech",
    type: "image",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    name: "Site + posicionamento — Consultoria",
    type: "image",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    name: "Social media — Marca wellness",
    type: "video",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
  },
  {
    name: "Brandbook — Infoprodutor",
    type: "image",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
  },
  {
    name: "Presença digital — Serviço especializado",
    type: "image",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
  },
];

const archive = ["Projeto A", "Projeto B", "Projeto C", "Projeto D", "Projeto E"];

function TrabalhoPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="pt-24">
      <section className="section-spacing">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First card: full-width editorial highlight */}
            <figure className="scroll-reveal project-card group md:col-span-2">
              <div className="overflow-hidden aspect-[16/7]">
                <img
                  src={projects[0].image}
                  alt={projects[0].name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <figcaption>{projects[0].name}</figcaption>
            </figure>

            {/* Remaining cards: 2-column grid */}
            {projects.slice(1).map((project, i) => (
              <figure
                key={i}
                className="scroll-reveal project-card group"
                style={{ transitionDelay: `${(i + 1) * 50}ms` }}
              >
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <figcaption>{project.name}</figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-16">
            <span className="label-upper block mb-4">Outros projetos</span>
            <p className="text-sm text-muted-foreground">
              {archive.join(", ")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
