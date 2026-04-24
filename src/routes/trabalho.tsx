import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState, useRef, useEffect } from "react";

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

// ─── Data ──────────────────────────────────────────────────────────────────

type CategoryId = "social-media" | "id-visual" | "midia-impressa" | "midia-ooh";

const categories: { id: CategoryId; label: string; num: string }[] = [
  { id: "social-media", label: "Social Media", num: "01" },
  { id: "id-visual", label: "Id Visual", num: "02" },
  { id: "midia-impressa", label: "Mídia Impressa", num: "03" },
  { id: "midia-ooh", label: "Mídia OOH", num: "04" },
];

type Project = {
  name: string;
  category: string;
  categoryId: CategoryId;
  image: string;
  to: string;
  span?: "full";
};

const projects: Project[] = [
  {
    name: "NaTrave — Social Media & Conteúdo Digital",
    category: "Social Media · 2024",
    categoryId: "social-media",
    image: "/natrave-social.png",
    to: "/natrave",
    span: "full",
  },
  {
    name: "Social media — Marca wellness",
    category: "Social Media · 2024",
    categoryId: "social-media",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    to: "/trabalho",
  },
  {
    name: "Symplice — Identidade de Marca para Startup",
    category: "Id Visual · 2024",
    categoryId: "id-visual",
    image: "/hero-brandding.jpg",
    to: "/symplice",
    span: "full",
  },
  {
    name: "Solid + — Fintech Identity & Systems",
    category: "Id Visual · 2024",
    categoryId: "id-visual",
    image: "/solid-full.png",
    to: "/solid",
  },
  {
    name: "Brandbook — Infoprodutor",
    category: "Id Visual · 2023",
    categoryId: "id-visual",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
    to: "/trabalho",
  },
  {
    name: "Catálogo Impresso — Consultoria",
    category: "Mídia Impressa · 2023",
    categoryId: "midia-impressa",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    to: "/trabalho",
    span: "full",
  },
  {
    name: "Site + posicionamento — Consultoria",
    category: "Mídia Impressa · 2023",
    categoryId: "midia-impressa",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    to: "/trabalho",
  },
  {
    name: "Campanha OOH — Marca urbana",
    category: "Mídia OOH · 2024",
    categoryId: "midia-ooh",
    image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80",
    to: "/trabalho",
    span: "full",
  },
  {
    name: "Painel Urbano — Lançamento",
    category: "Mídia OOH · 2024",
    categoryId: "midia-ooh",
    image: "https://images.unsplash.com/photo-1579621970590-9d624316904b?w=800&q=80",
    to: "/trabalho",
  },
];

// ─── Logo Marquee data ──────────────────────────────────────────────────────

const brands = [
  { id: "symplice", name: "Symplice", logo: "/hero-brandding.jpg", initials: "Sy" },
  { id: "natrave", name: "NaTrave", logo: "/natrave-marca.png", initials: "NT" },
  { id: "solid", name: "Solid+", logo: "/solid-full.png", initials: "S+" },
  { id: "symplice", name: "Symplice", logo: "/hero-brandding.jpg", initials: "Sy" },
  { id: "natrave", name: "NaTrave", logo: "/natrave-marca.png", initials: "NT" },
  { id: "solid", name: "Solid+", logo: "/solid-full.png", initials: "S+" },
  { id: "symplice", name: "Symplice", logo: "/hero-brandding.jpg", initials: "Sy" },
  { id: "natrave", name: "NaTrave", logo: "/natrave-marca.png", initials: "NT" },
  { id: "solid", name: "Solid+", logo: "/solid-full.png", initials: "S+" },
];

// ─── Category Card ──────────────────────────────────────────────────────────

function CategoryCard({
  cat,
  isOpen,
  onClick,
}: {
  cat: (typeof categories)[0];
  isOpen: boolean;
  onClick: () => void;
}) {
  const filteredProjects = projects.filter((p) => p.categoryId === cat.id);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="category-card-wrapper border-t border-border">
      {/* Trigger */}
      <button
        id={`category-btn-${cat.id}`}
        onClick={onClick}
        className="category-card-trigger w-full"
        aria-expanded={isOpen}
        aria-controls={`category-panel-${cat.id}`}
      >
        <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">{cat.num}</span>
        <h3 className="category-card-title">{cat.label}</h3>
        <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">
          {filteredProjects.length} projetos
        </span>
        <span className={`category-card-chevron ${isOpen ? "open" : ""}`}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7L9 12L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      {/* Dropdown */}
      <div
        id={`category-panel-${cat.id}`}
        role="region"
        aria-labelledby={`category-btn-${cat.id}`}
        className="category-panel"
        style={{ height }}
      >
        <div ref={contentRef} className="pb-16 pt-8">
          {filteredProjects.length === 0 ? (
            <p className="text-sm text-secondary py-8">Em breve.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {filteredProjects.map((project, i) => (
                <Link
                  key={i}
                  to={project.to}
                  className={`group ${project.span === "full" ? "md:col-span-2" : ""}`}
                >
                  <figure className="project-card relative cursor-none">
                    <div
                      className="media-wrap"
                      style={{ aspectRatio: project.span === "full" ? "21/9" : "4/3" }}
                    >
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="mt-6">
                      <span className="card-label">{project.category}</span>
                      <span className="font-bold text-xl uppercase leading-tight block">
                        {project.name}
                      </span>
                    </figcaption>
                  </figure>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Logo Marquee ───────────────────────────────────────────────────────────

function LogoMarquee() {
  // Duplicar para loop contínuo
  const doubled = [...brands, ...brands];

  return (
    <div className="marquee-outer border-t border-b border-border">
      <div className="marquee-track">
        {doubled.map((brand, i) => (
          <a
            key={i}
            href={`/brand/${brand.id}`}
            className="marquee-item group"
            title={brand.name}
          >
            <div className="marquee-logo-wrap">
              <img
                src={brand.logo}
                alt={brand.name}
                className="marquee-logo-img"
                loading="lazy"
              />
              <div className="marquee-logo-overlay">
                <span className="marquee-logo-name">{brand.name}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

function TrabalhoPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [openCategory, setOpenCategory] = useState<CategoryId | null>("id-visual");

  const toggleCategory = (id: CategoryId) => {
    setOpenCategory((prev) => (prev === id ? null : id));
  };

  return (
    <div ref={revealRef} className="pt-32">
      {/* ── Hero headline ── */}
      <section className="section-spacing pb-0">
        <div className="container-site">
          <div className="mb-20">
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary mb-6 block anim-fade-in">
              Portfólio
            </span>
            <h1 className="uppercase line-height-tight tracking-tight anim-fade-in delay-100">
              Conheça<br />
              <span className="text-secondary font-medium">meu Trabalho</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ── Logo Marquee ── */}
      <LogoMarquee />

      {/* ── Category Cards ── */}
      <section className="section-spacing border-t border-border">
        <div className="container-site">
          <div className="mb-12 flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">
              Áreas de atuação
            </span>
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">
              {projects.length} projetos no total
            </span>
          </div>

          <div className="flex flex-col">
            {categories.map((cat) => (
              <CategoryCard
                key={cat.id}
                cat={cat}
                isOpen={openCategory === cat.id}
                onClick={() => toggleCategory(cat.id)}
              />
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </section>

      {/* ── Archive ── */}
      <section className="section-spacing border-t border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">
                Arquivo de Projetos
              </span>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-12">
                {["Vogue Design", "Natural Pure", "Tech Flow", "Zen Garden", "Studio Max"].map((p) => (
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
