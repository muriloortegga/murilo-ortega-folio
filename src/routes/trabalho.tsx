import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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

type CategoryKey = "all" | "social" | "id-visual" | "impressa" | "ooh";

const categories: { key: CategoryKey; label: string; description: string }[] = [
  { key: "social", label: "Social Media", description: "Conteúdo, formato e ritmo." },
  { key: "id-visual", label: "Identidade Visual", description: "Sistema de marca completo." },
  { key: "impressa", label: "Mídia Impressa", description: "Editorial, embalagem, material." },
  { key: "ooh", label: "Mídia OOH", description: "Out-of-home e ativações." },
];

type Project = {
  name: string;
  category: string;
  cat: Exclude<CategoryKey, "all">;
  image: string;
  to: string;
};

const projects: Project[] = [
  {
    name: "Symplice — Identidade de Marca para Startup",
    category: "Branding · 2024",
    cat: "id-visual",
    image: "/hero-brandding.jpg",
    to: "/symplice",
  },
  {
    name: "NaTrave App — O Ecossistema do Futebol Amador",
    category: "Product & Content · 2024",
    cat: "social",
    image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800&auto=format&fit=crop",
    to: "/natrave",
  },
  {
    name: "Solid + — Fintech Identity & Systems",
    category: "Fintech · 2024",
    cat: "id-visual",
    image: "/solid-full.png",
    to: "/solid",
  },
  {
    name: "Site + posicionamento — Consultoria",
    category: "Plataforma · 2023",
    cat: "ooh",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    to: "/trabalho",
  },
  {
    name: "Social media — Marca wellness",
    category: "Conteúdo · 2024",
    cat: "social",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    to: "/trabalho",
  },
  {
    name: "Brandbook — Infoprodutor",
    category: "Branding · 2023",
    cat: "impressa",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
    to: "/trabalho",
  },
];

const archive = ["Vogue Design", "Natural Pure", "Tech Flow", "Zen Garden", "Studio Max"];

function TrabalhoPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [active, setActive] = useState<CategoryKey>("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.cat === active);

  return (
    <div ref={revealRef} className="pt-32">
      <section className="section-spacing">
        <div className="container-site">
          <div className="mb-20">
            <h1 className="uppercase line-height-tight tracking-tight">
              Conheça meu<br />
              <span className="text-secondary font-medium">Trabalho</span>
            </h1>
          </div>

          {/* Cards de categoria */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">
                Filtrar por área
              </span>
              <button
                onClick={() => setActive("all")}
                className={`text-[10px] font-mono uppercase tracking-tight transition-opacity ${
                  active === "all" ? "text-foreground" : "text-secondary hover:opacity-70"
                }`}
              >
                Mostrar tudo
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
              {categories.map((c, i) => {
                const isActive = active === c.key;
                return (
                  <button
                    key={c.key}
                    onClick={() => setActive(isActive ? "all" : c.key)}
                    className={`category-card scroll-reveal text-left p-8 lg:p-10 transition-colors ${
                      isActive ? "bg-foreground text-background" : "bg-background hover:bg-muted"
                    }`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <span
                      className={`text-[10px] font-mono uppercase tracking-tight block mb-6 ${
                        isActive ? "opacity-70" : "text-secondary"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span className="text-xl lg:text-2xl font-bold uppercase leading-tight block">
                      {c.label}
                    </span>
                    <span
                      className={`text-xs mt-3 block ${
                        isActive ? "opacity-70" : "text-secondary"
                      }`}
                    >
                      {c.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Galeria */}
          <div className="flex items-center justify-between mb-12">
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">
              {active === "all"
                ? `${projects.length} projetos`
                : `${filtered.length} projeto${filtered.length === 1 ? "" : "s"} · ${
                    categories.find((c) => c.key === active)?.label
                  }`}
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="border border-dashed border-border p-16 text-center">
              <p className="text-secondary text-sm">
                Nenhum projeto publicado nessa categoria ainda.
              </p>
            </div>
          ) : (
            <div
              key={active}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 animate-fade-in"
            >
              {filtered.map((project, i) => (
                <Link key={`${active}-${i}`} to={project.to} className="group">
                  <figure
                    className="scroll-reveal project-card relative cursor-none"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="media-wrap aspect-[4/3]">
                      <img src={project.image} alt={project.name} loading="lazy" />
                    </div>
                    <figcaption className="mt-8">
                      <span className="card-label">{project.category}</span>
                      <span className="font-bold text-xl lg:text-2xl uppercase leading-tight block">
                        {project.name}
                      </span>
                    </figcaption>
                  </figure>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-32 pt-12 border-t border-border grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">
                Arquivo de Projetos
              </span>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-12">
                {archive.map((p) => (
                  <span
                    key={p}
                    className="text-sm uppercase tracking-tight font-medium py-2 border-b border-border/50"
                  >
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
