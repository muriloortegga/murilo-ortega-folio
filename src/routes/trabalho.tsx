import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";

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
    name: "Symplice — Identidade de Marca para Startup",
    category: "Id Visual",
    image: "/hero-brandding.jpg",
    to: "/symplice",
  },
  {
    name: "NaTrave App — O Ecossistema do Futebol Amador",
    category: "Id Visual",
    image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800&auto=format&fit=crop",
    to: "/natrave",
  },
  {
    name: "Solid + — Fintech Identity & Systems",
    category: "Id Visual",
    image: "/solid-full.png",
    to: "/solid",
  },
  {
    name: "Site + posicionamento — Consultoria",
    category: "Mídia OOH",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    to: "/trabalho",
  },
  {
    name: "Social media — Marca wellness",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    to: "/trabalho",
  },
  {
    name: "Brandbook — Infoprodutor",
    category: "Mídia Impressa",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
    to: "/trabalho",
  },
];

const archive = ["Vogue Design", "Natural Pure", "Tech Flow", "Zen Garden", "Studio Max"];

function TrabalhoPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const categories = ["Todos", "Social Media", "Id Visual", "Mídia Impressa", "Mídia OOH"];

  return (
    <div ref={revealRef} className="pt-32">
      <section className="section-spacing">
        <div className="container-site">
          <div className="mb-12">
            <h1 className="uppercase line-height-tight tracking-tight">Conheça meu<br /><span className="text-secondary font-medium">Trabalho</span></h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-20">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`p-4 md:p-6 border flex items-center justify-center text-center uppercase tracking-tight text-xs md:text-sm font-medium transition-colors cursor-pointer ${
                  activeCategory === cat 
                    ? "bg-foreground text-background border-foreground" 
                    : "border-border hover:border-foreground text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {filteredProjects.length > 0 ? (
              <>
                {/* First card: full-width editorial highlight */}
                <Link key={filteredProjects[0].name} to={filteredProjects[0].to} className="group md:col-span-2">
                  <figure className="scroll-reveal project-card relative cursor-none">
                    <div className="media-wrap aspect-[21/9]">
                      <img
                        src={filteredProjects[0].image}
                        alt={filteredProjects[0].name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="mt-8">
                      <span className="card-label">{filteredProjects[0].category}</span>
                      <span className="font-bold text-2xl lg:text-3xl uppercase leading-tight block">{filteredProjects[0].name}</span>
                    </figcaption>
                  </figure>
                </Link>

                {/* Remaining cards: 2-column grid */}
                {filteredProjects.slice(1).map((project, i) => (
                  <Link key={project.name} to={project.to} className="group">
                    <figure className="scroll-reveal project-card relative cursor-none" style={{ transitionDelay: `${(i + 1) * 100}ms` }}>
                      <div className="media-wrap aspect-[4/3]">
                        <img src={project.image} alt={project.name} loading="lazy" />
                      </div>
                      <figcaption className="mt-8">
                        <span className="card-label">{project.category}</span>
                        <span className="font-bold text-xl lg:text-2xl uppercase leading-tight block">{project.name}</span>
                      </figcaption>
                    </figure>
                  </Link>
                ))}
              </>
            ) : (
              <div className="col-span-1 md:col-span-2 py-20 text-center text-secondary uppercase tracking-tight font-medium">
                Nenhum projeto encontrado nesta categoria.
              </div>
            )}
          </div>

          <div className="mt-32 pt-12 border-t border-border grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">Arquivo de Projetos</span>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-12">
                {archive.map((p) => (
                  <span key={p} className="text-sm uppercase tracking-tight font-medium py-2 border-b border-border/50">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
