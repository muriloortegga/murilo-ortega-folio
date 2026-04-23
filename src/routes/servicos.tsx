import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Murilo Ortega" },
      { name: "description", content: "Sistemas para organizar sua marca: branding, conteúdo, presença digital, mídia impressa, OOH e marketing de influência." },
      { property: "og:title", content: "Serviços — Murilo Ortega" },
      { property: "og:description", content: "Sistemas para organizar sua marca." },
    ],
  }),
  component: ServicosPage,
});

export type Service = {
  num: string;
  slug: string;
  name: string;
  short: string;
  image: string;
};

export const services: Service[] = [
  {
    num: "01",
    slug: "estruturacao-de-marca",
    name: "Estruturação de Marca",
    short: "Posicionamento, identidade e brandbook que dão coerência ao que já existe.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=1200&q=80",
  },
  {
    num: "02",
    slug: "sistema-de-conteudo",
    name: "Sistema de Conteúdo",
    short: "Linha editorial e produção previsível por canal.",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=1200&q=80",
  },
  {
    num: "03",
    slug: "presenca-digital",
    name: "Presença Digital",
    short: "Site que organiza a comunicação e facilita a conversão.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
  },
  {
    num: "04",
    slug: "midia-impressa",
    name: "Mídia Impressa",
    short: "Editorial, embalagem e material institucional com direção própria.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=80",
  },
  {
    num: "05",
    slug: "midia-ooh",
    name: "Mídia OOH",
    short: "Out-of-home pensado como peça de marca, não como anúncio.",
    image: "https://images.unsplash.com/photo-1542223616-740d5dff7f56?w=1200&q=80",
  },
  {
    num: "06",
    slug: "marketing-de-influencia",
    name: "Marketing de Influência",
    short: "Curadoria e direção de criadores alinhados ao posicionamento.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80",
  },
];

function ServicosPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="pt-32">
      <section className="section-spacing">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 anim-fade-in">
              <h1>Sistemas</h1>
            </div>
            <div className="lg:col-span-8 anim-fade-in delay-250">
              <p className="text-2xl lg:text-4xl font-bold uppercase line-height-tight tracking-tight">
                Cada um resolve um problema específico. <br />
                <span className="text-secondary font-medium">Todos se conectam.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de serviços com paralaxe via CSS */}
      <section className="container-site pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to="/servico/$slug"
              params={{ slug: s.slug }}
              className="service-card group scroll-reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="service-card-media">
                <div
                  className="service-card-image"
                  style={{ backgroundImage: `url(${s.image})` }}
                  aria-hidden="true"
                />
                <div className="service-card-overlay" aria-hidden="true" />
              </div>

              <div className="service-card-content">
                <div className="flex items-start justify-between mb-12">
                  <span className="text-[10px] font-mono uppercase tracking-tight text-background/60">
                    {s.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-tight text-background/60">
                    Ver detalhes →
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold uppercase leading-tight tracking-tight text-background">
                  {s.name}
                </h3>
                <p className="mt-6 text-sm text-background/70 leading-relaxed max-w-[420px]">
                  {s.short}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
