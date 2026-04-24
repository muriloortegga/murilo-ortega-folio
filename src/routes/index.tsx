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
    body: "Para marcas que cresceram sem base. Posicionamento, identidade visual e brandbook que dão coerência.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    to: "/servico/estruturacao-de-marca"
  },
  {
    num: "02",
    title: "Sistema de Conteúdo",
    body: "Para marcas que existem mas não têm consistência. Uma linha editorial que transforma presença digital em algo previsível e alinhado.",
    image: "https://images.unsplash.com/photo-1542744094-24638ea0b343?q=80&w=800&auto=format&fit=crop",
    to: "/servico/sistema-de-conteudo"
  },
  {
    num: "03",
    title: "Presença Digital",
    body: "Para marcas que não são bem apresentadas online. Site que organiza a comunicação e melhora percepção de valor.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    to: "/servico/presenca-digital"
  },
  {
    num: "04",
    title: "Mídia Impressa",
    body: "Design e produção gráfica de alto padrão. Cartões, embalagens e editoriais com acabamentos premium.",
    image: "https://images.unsplash.com/photo-1562654501-a0ccc0eb3fb1?q=80&w=800&auto=format&fit=crop",
    to: "/servico/midia-impressa"
  },
  {
    num: "05",
    title: "Mídia OOH",
    body: "Comunicação visual para espaços urbanos. Outdoors, painéis e mídias de grande formato que dominam a atenção.",
    image: "https://images.unsplash.com/photo-1542138549-354972e7371e?q=80&w=800&auto=format&fit=crop",
    to: "/servico/midia-ooh"
  },
  {
    num: "06",
    title: "Marketing de Influência",
    body: "Estratégias de conexão entre sua marca e vozes que amplificam a sua mensagem de forma autêntica e focada.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    to: "/servico/marketing-de-influencia"
  }
];

const brands = [
  { name: "Symplice", to: "/brand/symplice" },
  { name: "NaTrave App", to: "/brand/natrave" },
  { name: "Solid +", to: "/brand/solid" },
  { name: "Vogue Design", to: "/brand/vogue-design" },
  { name: "Natural Pure", to: "/brand/natural-pure" },
  { name: "Tech Flow", to: "/brand/tech-flow" },
  { name: "Zen Garden", to: "/brand/zen-garden" },
  { name: "Studio Max", to: "/brand/studio-max" },
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

      {/* Marquee Section */}
      <section className="py-8 border-t border-border overflow-hidden bg-foreground text-background">
        <div className="relative flex whitespace-nowrap">
          <div className="animate-marquee flex gap-16 px-8 items-center">
            {brands.map((brand, i) => (
              <Link key={`a-${i}`} to={brand.to} className="group flex items-center gap-16 transition-opacity hover:opacity-50">
                <span className="text-3xl lg:text-5xl font-bold uppercase tracking-tight">{brand.name}</span>
                <span className="text-xl">✦</span>
              </Link>
            ))}
          </div>
          <div className="animate-marquee flex gap-16 px-8 items-center absolute top-0 left-full">
            {brands.map((brand, i) => (
              <Link key={`b-${i}`} to={brand.to} className="group flex items-center gap-16 transition-opacity hover:opacity-50">
                <span className="text-3xl lg:text-5xl font-bold uppercase tracking-tight">{brand.name}</span>
                <span className="text-xl">✦</span>
              </Link>
            ))}
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">Serviços</span>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((s, i) => (
                <Link key={i} to={s.to} className="group block scroll-reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-md cursor-none">
                    {/* Image with scaling and parallax shift */}
                    <img 
                      src={s.image} 
                      alt={s.title} 
                      className="w-full h-[110%] object-cover absolute top-0 left-0 transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:-translate-y-4"
                    />
                    
                    {/* Gradient overlay + blur */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 group-hover:backdrop-blur-[2px]" />
                    
                    {/* Text content */}
                    <div className="absolute bottom-0 left-0 p-8 w-full z-10 flex flex-col justify-end h-full">
                      <span className="text-[10px] font-mono uppercase tracking-tight text-white/70 mb-4 block transform transition-transform duration-500 group-hover:-translate-y-2">{s.num}</span>
                      <h4 className="text-2xl font-bold uppercase mb-4 text-white transform transition-transform duration-500 group-hover:-translate-y-2">{s.title}</h4>
                      
                      <div className="overflow-hidden">
                        <p className="text-sm text-white/90 leading-relaxed opacity-0 transform translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                          {s.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
