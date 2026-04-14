import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Murilo Ortega — Branding, Conteúdo e Presença Digital" },
      { name: "description", content: "Organizo marcas que precisam funcionar como marcas. Branding, conteúdo e presença digital conectados em um sistema." },
      { property: "og:title", content: "Murilo Ortega — Branding, Conteúdo e Presença Digital" },
      { property: "og:description", content: "Organizo marcas que precisam funcionar como marcas." },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    num: "01",
    title: "Estruturação de Marca",
    body: "Para marcas que cresceram sem base. Posicionamento, identidade visual e brandbook que dão coerência ao que já existe.",
    tags: "Naming · Posicionamento · ID Visual · Brandbook",
  },
  {
    num: "02",
    title: "Sistema de Conteúdo",
    body: "Para marcas que existem mas não têm consistência. Uma linha editorial que transforma presença digital em algo previsível e alinhado.",
    tags: "Linha Editorial · Planejamento · Direção Criativa",
  },
  {
    num: "03",
    title: "Presença Digital",
    body: "Para marcas que não são bem apresentadas online. Site que organiza a comunicação, melhora percepção de valor e facilita a conversão.",
    tags: "UX/UI · Copywriting · SEO básico",
  },
];

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
];

function HomePage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      {/* Hero */}
      <section className="min-h-screen flex items-center">
        <div className="container-site w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-[36px] lg:text-[56px] font-semibold leading-[1.1] text-foreground">
              Organizo marcas que<br />
              precisam <em className="not-italic text-muted-foreground font-semibold">funcionar</em><br />
              como marcas.
            </h1>
            <p className="mt-6 text-[18px] text-muted-foreground leading-[1.7] max-w-[540px]">
              Branding, conteúdo e presença digital conectados em um sistema.
              Para empresas que já faturam, mas ainda comunicam abaixo do nível que entregam.
            </p>
            <Link to="/trabalho" className="text-link mt-8 inline-block hover:underline">
              Ver trabalho →
            </Link>
          </div>
          <div className="block mt-12 lg:mt-0">
            <figure className="project-card group relative">
              <div className="overflow-hidden aspect-[3/4] lg:aspect-[3/4]">
                <img
                  src="/hero-branding.jpg"
                  alt="Projeto de embalagem — exibição de trabalho"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between">
                <span>Embalagem — Marca consumo premium</span>
                <span className="text-[10px] tracking-widest uppercase text-muted-foreground opacity-50">2024</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="section-spacing">
        <div className="container-site flex justify-center">
          <p className="scroll-reveal text-[20px] md:text-[24px] leading-[1.8] text-foreground max-w-[800px] text-center">
            O problema não é falta de ação. É falta de estrutura. Empresas que cresceram
            pela qualidade do serviço, mas cuja marca ainda não sustenta o nível que entregam.
          </p>
        </div>
      </section>

      {/* Work Preview */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <figure
                key={i}
                className="scroll-reveal project-card group"
                style={{ transitionDelay: `${i * 50}ms` }}
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
          <div className="mt-12">
            <Link to="/trabalho" className="text-link hover:underline">
              Todos os projetos →
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {services.map((s, i) => (
              <div key={i} className="scroll-reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                {i > 0 && <hr className="divider mb-8 lg:hidden" />}
                <span className="label-small">{s.num}</span>
                <h3 className="text-[20px] font-semibold text-foreground mt-2">{s.title}</h3>
                <p className="text-[15px] text-surface-foreground leading-[1.7] mt-3">{s.body}</p>
                <p className="tags-row mt-4">{s.tags}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ICP */}
      <section className="section-spacing">
        <div className="container-site max-w-[640px]">
          <div className="scroll-reveal">
            <span className="label-upper">Para quem é isso</span>
            <h2 className="text-[24px] md:text-[32px] font-semibold text-foreground leading-tight mt-4">
              Você já tem operação. O que falta é a marca sustentar o nível do que você entrega.
            </h2>
            <p className="text-[15px] text-surface-foreground leading-[1.7] mt-6">
              Atendo decisores e fundadores em empresas que já faturam e têm potencial de crescimento,
              mas cuja comunicação ainda não acompanhou a evolução do negócio. O problema não é execução — é estrutura.
            </p>
            <p className="tags-row mt-6">
              Lifestyle · Wellness · Fitness · Consultorias · Startups · Infoprodutores
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
