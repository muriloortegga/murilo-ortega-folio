import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallax } from "@/hooks/use-parallax";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Murilo Ortega — Branding, Conteúdo e Presença Digital" },
      { name: "description", content: "Organizo marcas que precisam funcionar como marcas. Branding, conteúdo e presença digital conectados em um sistema." },
      { property: "og:title", content: "Murilo Ortega — Branding, Conteúdo e Presença Digital" },
      { property: "og:description", content: "Organizo marcas que precisam funcionar como marcas. Branding, conteúdo e presença digital conectados em um sistema." },
    ],
  }),
  component: HomePage,
});

const projects = [
  {
    name: "NaTrave App — O Ecossistema do Futebol Amador",
    category: "Product & Content · 2024",
    image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800&auto=format&fit=crop",
    to: "/natrave",
  },
  {
    name: "Solid + — Fintech Identity & Systems",
    category: "Fintech · 2024",
    image: "/solid-full.png",
    to: "/solid",
    position: "top",
  },
  {
    name: "Site + posicionamento — Consultoria",
    category: "Plataforma · 2023",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    to: "/trabalho",
  },
];

const services = [
  {
    num: "01",
    title: "Estruturação de Marca",
    body: "Para marcas que cresceram sem base. Posicionamento, identidade visual e brandbook que dão coerência ao que já existe.",
  },
  {
    num: "02",
    title: "Sistema de Conteúdo",
    body: "Para marcas que existem mas não têm consistência. Uma linha editorial que transforma presença digital em algo previsível e alinhado.",
  },
  {
    num: "03",
    title: "Presença Digital",
    body: "Para marcas que não são bem apresentadas online. Site que organiza a comunicação, melhora percepção de valor e facilita a conversão.",
  },
];

function HomePage() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const heroParallax = useParallax(0.15);
  const secondaryParallax = useParallax(0.08);

  return (
    <div ref={revealRef}>
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        <div className="container-site w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7" style={{ transform: `translateY(${heroParallax}px)` }}>
            <h1 className="anim-fade-in anim-translate-y">
              Organizo marcas que<br />
              precisam <span className="text-secondary font-medium italic">funcionar</span><br />
              como marcas.
            </h1>
            <p className="mt-10 text-lg lg:text-xl text-secondary leading-relaxed max-w-[600px] anim-fade-in delay-250 anim-translate-y">
              Branding, conteúdo e presença digital conectados em um sistema.
              Para empresas que já faturam, mas ainda comunicam abaixo do nível que entregam.
            </p>
            <div className="mt-12 anim-fade-in delay-500 anim-translate-y">
              <Link to="/trabalho" className="btn btn-arrow group">
                Ver trabalho <span className="arrow group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
          <div 
            className="lg:col-span-5 block mt-12 lg:mt-0 anim-fade-in delay-250"
            style={{ transform: `translateY(${-secondaryParallax}px)` }}
          >
            <Link to="/symplice" className="block group">
              <figure className="project-card relative cursor-none overflow-hidden">
                <div className="media-wrap aspect-[3/4] group-hover:scale-105 transition-transform duration-700">
                  <img
                    src="/hero-brandding.jpg"
                    alt="Symplice project showcase"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <figcaption className="mt-6 flex items-center justify-between">
                  <div>
                    <span className="card-label">Branding · 2024</span>
                    <span className="font-medium text-lg uppercase leading-tight block">Symplice — Identidade de<br />Marca para Startup</span>
                  </div>
                </figcaption>
              </figure>
            </Link>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="section-spacing border-t border-border bg-foreground/[0.01]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">
                Abordagem
              </span>
            </div>
            <div className="lg:col-span-8">
              <p className="scroll-reveal text-2xl lg:text-4xl font-bold line-height-tight tracking-tight uppercase anim-translate-y">
                O problema não é falta de ação. É falta de estrutura. Empresas que cresceram pela qualidade do serviço, mas cuja marca ainda não sustenta o nível que entregam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Preview */}
      <section className="section-spacing border-t border-border">
        <div className="container-site">
          <div className="flex items-center justify-between mb-12">
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">Projetos Selecionados</span>
            <Link to="/trabalho" className="text-link">Ver todos</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {projects.map((project, i) => (
              <Link key={i} to={project.to} className="group">
                <figure className="scroll-reveal project-card relative cursor-none" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="media-wrap aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="group-hover:scale-110 transition-transform duration-1000"
                      style={{ objectPosition: project.position || "center" }}
                    />
                  </div>
                  <figcaption className="mt-6">
                    <span className="card-label">{project.category}</span>
                    <span className="font-medium text-lg leading-tight block group-hover:translate-x-2 transition-transform duration-500">{project.name}</span>
                  </figcaption>
                </figure>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-spacing border-t border-border bg-foreground/[0.01]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">Serviços</span>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12">
              {services.map((s, i) => (
                <div key={i} className="scroll-reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                  <span className="text-[10px] font-mono uppercase tracking-tight text-secondary mb-4 block underline decoration-secondary/30 underline-offset-8">{s.num}</span>
                  <h4 className="text-xl font-bold uppercase mb-4">{s.title}</h4>
                  <p className="text-sm text-secondary leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
