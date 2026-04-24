import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/brand/$id")({
  head: ({ params }) => {
    const brand = brands.find((b) => b.id === params.id);
    const name = brand?.name ?? "Marca";
    return {
      meta: [
        { title: `${name} — Murilo Ortega` },
        { name: "description", content: `Projetos e identidade visual desenvolvidos para ${name}.` },
      ],
    };
  },
  component: BrandPage,
});

const brands: BrandData[] = [
  {
    id: "symplice",
    name: "Symplice",
    tagline: "Startup de tecnologia jurídica",
    description:
      "Symplice é uma startup que simplifica processos jurídicos para pequenas e médias empresas. O trabalho envolveu construção de identidade visual do zero, sistema de marca e direção de produto digital.",
    accent: "#1a1a2e",
    accentLight: "#e8e8f5",
    logo: "/hero-brandding.jpg",
    heroImage: "/hero-brandding.jpg",
    services: ["Identidade Visual", "Brandbook", "Direção de Arte"],
    year: "2024",
    projects: [
      { title: "Identidade Visual Completa", image: "/hero-brandding.jpg", desc: "Construção de marca do zero" },
      { title: "Aplicações de Marca", image: "/symplice-full.png", desc: "Sistema visual aplicado" },
    ],
  },
  {
    id: "natrave",
    name: "NaTrave",
    tagline: "Plataforma do futebol amador",
    description:
      "NaTrave é o ecossistema digital do futebol amador brasileiro. O trabalho compreendeu estratégia de produto, identidade visual, social media e direção criativa completa.",
    accent: "#0d3b1e",
    accentLight: "#e8f5ec",
    logo: "/natrave-marca.png",
    heroImage: "/natrave-social.png",
    services: ["Social Media", "Id Visual", "Estratégia Digital"],
    year: "2024",
    projects: [
      { title: "Marca e Sistema Visual", image: "/natrave-marca.png", desc: "Identidade completa" },
      { title: "Social Media", image: "/natrave-social.png", desc: "Conteúdo orgânico e pago" },
    ],
  },
  {
    id: "solid",
    name: "Solid+",
    tagline: "Fintech de gestão financeira",
    description:
      "Solid+ é uma fintech focada em gestão financeira para freelancers e autônomos. O projeto incluiu identidade visual, sistema de marca e toda a interface do produto.",
    accent: "#1c1c1c",
    accentLight: "#f0f0f0",
    logo: "/solid-full.png",
    heroImage: "/solid-full.png",
    services: ["Id Visual", "UI/UX", "Brandbook"],
    year: "2024",
    projects: [
      { title: "Identidade Fintech", image: "/solid-full.png", desc: "Marca e sistema visual" },
    ],
  },
];

type Project = { title: string; image: string; desc: string };
type BrandData = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  accent: string;
  accentLight: string;
  logo: string;
  heroImage: string;
  services: string[];
  year: string;
  projects: Project[];
};

function BrandPage() {
  const { id } = Route.useParams();
  const revealRef = useScrollReveal<HTMLDivElement>();
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  const brand = brands.find((b) => b.id === id);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="container-site text-center">
          <span className="text-[10px] font-mono uppercase tracking-tight text-secondary mb-6 block">404</span>
          <h1 className="mb-8">Marca não<br /><span style={{ color: "var(--secondary)" }}>encontrada</span></h1>
          <Link to="/trabalho" className="btn btn-arrow">
            Ver trabalhos <span className="arrow" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={revealRef}>
      {/* Hero Brand */}
      <section
        className="min-h-screen flex items-end pb-20 relative overflow-hidden"
        style={{ backgroundColor: brand.accent }}
      >
        {/* Parallax BG Image */}
        <div
          ref={heroRef}
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.25}px)`,
            backgroundImage: `url(${brand.heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.18,
          }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to top, ${brand.accent} 40%, transparent 100%)`,
          }}
        />

        <div className="container-site relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <span
                className="text-[10px] font-mono uppercase tracking-tight mb-6 block opacity-60"
                style={{ color: brand.accentLight }}
              >
                Projeto — {brand.year}
              </span>
              <h1
                className="anim-fade-in"
                style={{ color: brand.accentLight, lineHeight: 0.88 }}
              >
                {brand.name}
              </h1>
              <p
                className="mt-8 text-xl lg:text-2xl font-medium anim-fade-in delay-250 max-w-[500px]"
                style={{ color: brand.accentLight, opacity: 0.7 }}
              >
                {brand.tagline}
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-3 items-end justify-end pb-2">
              {brand.services.map((s) => (
                <span
                  key={s}
                  className="text-[10px] font-mono uppercase tracking-tight px-3 py-1.5 border"
                  style={{ borderColor: `${brand.accentLight}40`, color: `${brand.accentLight}99` }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Description */}
      <section className="section-spacing border-b border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">Sobre o Projeto</span>
            </div>
            <div className="lg:col-span-8">
              <p className="scroll-reveal text-2xl lg:text-4xl font-bold line-height-tight tracking-tight uppercase">
                {brand.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Markers — Wireframe Placeholders */}
      <section className="section-spacing border-b border-border">
        <div className="container-site">
          <div className="flex items-center justify-between mb-12">
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">Projetos Realizados</span>
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">{brand.projects.length} entregáveis</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {brand.projects.map((project, i) => (
              <div key={i} className="scroll-reveal" style={{ transitionDelay: `${i * 150}ms` }}>
                <figure className="project-card">
                  <div className="media-wrap" style={{ aspectRatio: "4/3" }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Design Marker Overlay */}
                    <div className="brand-dm-overlay">
                      <span className="brand-dm-label">
                        ✦ {project.desc}
                      </span>
                    </div>
                  </div>
                  <figcaption className="mt-6">
                    <span className="card-label">{brand.name}</span>
                    <span className="font-bold text-xl uppercase leading-tight block">{project.title}</span>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Identity System Showcase — Design Placeholder Grid */}
      <section className="section-spacing border-b border-border bg-foreground text-background">
        <div className="container-site">
          <div className="flex items-center justify-between mb-16">
            <span className="text-[10px] font-mono uppercase tracking-tight opacity-40">Sistema de Identidade Visual</span>
            <span
              className="text-[10px] font-mono uppercase tracking-tight px-3 py-1.5 border border-current opacity-40"
            >
              Em desenvolvimento
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Paleta de Cores", "Tipografia", "Logomark", "Aplicações"].map((label, i) => (
              <div
                key={i}
                className="scroll-reveal aspect-square border border-background/10 flex flex-col items-center justify-center gap-4 p-6"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-[32px] opacity-20">
                  {["◆", "Aa", "◉", "▣"][i]}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-tight text-center opacity-40">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-tight text-secondary mb-6 block">Próximo passo</span>
              <h2 className="uppercase">Vamos trabalhar<br /><span className="text-secondary font-medium">juntos?</span></h2>
            </div>
            <div className="flex gap-6">
              <Link to="/trabalho" className="btn btn-secondary">Ver mais trabalhos</Link>
              <Link to="/contato" className="btn btn-primary">Falar comigo</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
