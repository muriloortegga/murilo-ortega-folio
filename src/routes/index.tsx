import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

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
    name: "Brand System — Cliente lifestyle",
    category: "Branding · 2024",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
  },
  {
    name: "Identidade visual — Startup tech",
    category: "Digital · 2023",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    name: "Site + posicionamento — Consultoria",
    category: "Plataforma · 2023",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
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

  return (
    <div ref={revealRef}>
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-24 pb-12">
        <div className="container-site w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="anim-fade-in">
              Organizo marcas que<br />
              precisam <span className="text-secondary font-medium">funcionar</span><br />
              como marcas.
            </h1>
            <p className="mt-10 text-lg lg:text-xl text-secondary leading-relaxed max-w-[600px] anim-fade-in delay-250">
              Branding, conteúdo e presença digital conectados em um sistema.
              Para empresas que já faturam, mas ainda comunicam abaixo do nível que entregam.
            </p>
            <div className="mt-12 anim-fade-in delay-500">
              <Link to="/trabalho" className="btn btn-arrow">
                Ver trabalho <span className="arrow" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 block mt-12 lg:mt-0 anim-fade-in delay-250">
            <Link to="/symplice" className="block group">
              <figure className="project-card relative cursor-none">
                <div className="media-wrap aspect-[3/4]">
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
      <section className="section-spacing border-t border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">
                Abordagem
              </span>
            </div>
            <div className="lg:col-span-8">
              <p className="scroll-reveal text-2xl lg:text-4xl font-bold line-height-tight tracking-tight uppercase">
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
              <figure key={i} className="scroll-reveal project-card group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="media-wrap aspect-[4/3]">
                  <img src={project.image} alt={project.name} />
                </div>
                <figcaption className="mt-6">
                  <span className="card-label">{project.category}</span>
                  <span className="font-medium text-lg leading-tight block">{project.name}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-spacing border-t border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">Serviços</span>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12">
              {services.map((s, i) => (
                <div key={i} className="scroll-reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                  <span className="text-[10px] font-mono uppercase tracking-tight text-secondary mb-4 block">{s.num}</span>
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
