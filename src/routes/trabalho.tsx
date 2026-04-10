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
  { name: "Brand System — Cliente lifestyle", type: "video" },
  { name: "Identidade visual — Startup tech", type: "image" },
  { name: "Site + posicionamento — Consultoria", type: "image" },
  { name: "Social media — Marca wellness", type: "video" },
  { name: "Brandbook — Infoprodutor", type: "image" },
  { name: "Presença digital — Serviço especializado", type: "image" },
];

const archive = ["Projeto A", "Projeto B", "Projeto C", "Projeto D", "Projeto E"];

function TrabalhoPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="pt-24">
      <section className="section-spacing">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <figure
                key={i}
                className="scroll-reveal project-card"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="bg-secondary aspect-[4/3]" />
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
