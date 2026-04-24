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
    category: "Id Visual",
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
    category: "Id Visual",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
    to: "/trabalho",
  },
];

const filterCategories = ["Social Media", "Id Visual", "Mídia Impressa", "Mídia OOH"];

const archive = ["Vogue Design", "Natural Pure", "Tech Flow", "Zen Garden", "Studio Max"];

function TrabalhoPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProjects = activeCategory 
    ? projects.filter(p => p.category === activeCategory)
    : projects;

  return (
    <div ref={revealRef} className="pt-32">
      <section className="section-spacing">
        <div className="container-site">
          <div className="mb-20">
            <h1 className="uppercase line-height-tight tracking-tight">Conheça meu<br /><span className="text-secondary font-medium">Trabalho</span></h1>
          </div>
          
          <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {filterCategories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className={`py-8 px-6 text-left border transition-all duration-300 ${
                  activeCategory === cat ? 'bg-foreground text-background border-foreground' : 'bg-transparent text-foreground border-border hover:bg-border/20'
                }`}
              >
                <span className="font-bold uppercase block">{cat}</span>
                <span className="text-xs uppercase mt-2 opacity-60">Ver projetos</span>
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {filteredProjects.length === 0 && (
              <div className="md:col-span-2 py-12 text-center text-secondary uppercase font-medium">
                Nenhum projeto encontrado nesta categoria no momento.
              </div>
            )}
            {filteredProjects.map((project, i) => (
              <Link key={i} to={project.to} className={`group ${i === 0 && !activeCategory ? 'md:col-span-2' : ''}`}>
                <figure className="scroll-reveal project-card relative cursor-none" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className={`media-wrap ${i === 0 && !activeCategory ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <figcaption className="mt-8">
                    <span className="card-label">{project.category}</span>
                    <span className={`font-bold uppercase leading-tight block ${i === 0 && !activeCategory ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'}`}>{project.name}</span>
                  </figcaption>
                </figure>
              </Link>
            ))}
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
