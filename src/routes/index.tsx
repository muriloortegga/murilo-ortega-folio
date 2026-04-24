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
    image: "/hero-brandding.jpg",
    to: "/servico/estruturacao-de-marca",
  },
  {
    num: "02",
    title: "Sistema de Conteúdo",
    body: "Para marcas que existem mas não têm consistência. Uma linha editorial que transforma presença digital em algo previsível e alinhado.",
    image: "/natrave-social.png",
    to: "/servico/sistema-de-conteudo",
  },
  {
    num: "03",
    title: "Presença Digital",
    body: "Para marcas que não são bem apresentadas online. Site que organiza a comunicação, melhora percepção de valor e facilita a conversão.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    to: "/servico/presenca-digital",
  },
  {
    num: "04",
    title: "Mídia Impressa",
    body: "Catálogos, folders, papelaria e materiais físicos que levam a força da sua marca para o mundo tangível.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    to: "/servico/midia-impressa",
  },
  {
    num: "05",
    title: "Mídia OOH",
    body: "Outdoor, busdoor e painéis urbanos. Comunicação de impacto nos ambientes onde seu público está.",
    image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80",
    to: "/servico/midia-ooh",
  },
  {
    num: "06",
    title: "Marketing de Influência",
    body: "Parcerias com creators alinhados à marca. Alcance orgânico com autenticidade e precisão estratégica.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
    to: "/servico/marketing-de-influencia",
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
              <Link key={i} to={project.to} className="group">
                <figure className="scroll-reveal project-card relative cursor-none" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="media-wrap aspect-[4/3]">
                    <img src={project.image} alt={project.name} />
                  </div>
                  <figcaption className="mt-6">
                    <span className="card-label">{project.category}</span>
                    <span className="font-medium text-lg leading-tight block">{project.name}</span>
                  </figcaption>
                </figure>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-spacing border-t border-border">
        <div className="container-site">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-tight text-secondary mb-4 block">Serviços</span>
              <h2 className="uppercase">
                Como posso<br />
                <span className="text-secondary font-medium">te ajudar</span>
              </h2>
            </div>
            <Link to="/servicos" className="text-link hidden md:block">Ver todos</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link key={i} to={s.to} className="group service-card scroll-reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                {/* Image with blur + parallax */}
                <div className="service-card-media">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="service-card-img"
                    loading="lazy"
                  />
                  <div className="service-card-blur" />
                </div>
                {/* Content overlay */}
                <div className="service-card-body">
                  <span className="text-[10px] font-mono uppercase tracking-tight text-background/50 mb-3 block">{s.num}</span>
                  <h4 className="text-lg font-bold uppercase text-background leading-tight mb-3">{s.title}</h4>
                  <p className="text-xs text-background/60 leading-relaxed">{s.body}</p>
                  <span className="service-card-cta">
                    Saiba mais <span className="arrow" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
