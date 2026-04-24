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
    category: "Plataforma · 2023",
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
    category: "Branding · 2023",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
    to: "/trabalho",
  },
];

const filterCategories = ["Social Media", "Id Visual", "Mídia Impressa", "Mídia OOH"];

const archive = ["Vogue Design", "Natural Pure", "Tech Flow", "Zen Garden", "Studio Max"];

function TrabalhoPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="pt-32">
      <section className="section-spacing">
        <div className="container-site">
          <div className="mb-20">
            <h1 className="uppercase line-height-tight tracking-tight">Trabalho<br /><span className="text-secondary font-medium">Selecionado</span></h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* First card: full-width editorial highlight */}
            <Link key={0} to={projects[0].to} className="group md:col-span-2">
              <figure className="scroll-reveal project-card relative cursor-none">
                <div className="media-wrap aspect-[21/9]">
                  <img
                    src={projects[0].image}
                    alt={projects[0].name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-8">
                  <span className="card-label">{projects[0].category}</span>
                  <span className="font-bold text-2xl lg:text-3xl uppercase leading-tight block">{projects[0].name}</span>
                </figcaption>
              </figure>
            </Link>

            {/* Remaining cards: 2-column grid */}
            {projects.slice(1).map((project, i) => (
              <Link key={i + 1} to={project.to} className="group">
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
