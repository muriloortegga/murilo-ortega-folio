import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { services } from "./servicos";

type ServiceDetail = {
  problem: string;
  approach: string[];
  deliverables: string[];
  gallery: string[];
};

const details: Record<string, ServiceDetail> = {
  "estruturacao-de-marca": {
    problem:
      "A empresa cresceu pela qualidade do serviço, mas a marca ainda não sustenta o nível que entrega. Falta posicionamento, identidade coerente e material de referência.",
    approach: [
      "Diagnóstico de marca e mercado",
      "Definição de posicionamento e narrativa",
      "Construção de identidade visual completa",
      "Direção de naming quando necessário",
      "Documentação em brandbook",
    ],
    deliverables: [
      "Brandbook",
      "Sistema visual aplicado",
      "Guia de tom e voz",
      "Templates de aplicação",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=1200&q=80",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80",
    ],
  },
  "sistema-de-conteudo": {
    problem:
      "A marca publica, mas sem linha. Sem frequência previsível, sem reforço de posicionamento, sem critério editorial.",
    approach: [
      "Definição de pilares e linha editorial",
      "Planejamento por canal e formato",
      "Diretrizes de tom, voz e estética",
      "Direção criativa dos primeiros ciclos",
    ],
    deliverables: [
      "Linha editorial documentada",
      "Calendário e frequência",
      "Templates de conteúdo",
      "Guia de produção",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=1200&q=80",
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80",
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80",
    ],
  },
  "presenca-digital": {
    problem:
      "O site não comunica valor, a jornada do visitante é confusa, e a conversão depende de sorte.",
    approach: [
      "Estratégia de conteúdo para web",
      "Wireframe e direção de UX/UI",
      "Copywriting orientado a conversão",
      "Implementação com foco em performance e SEO básico",
    ],
    deliverables: [
      "Site publicado",
      "Documentação de jornada",
      "Setup analítico",
      "Guia de manutenção",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80",
    ],
  },
  "midia-impressa": {
    problem:
      "Material impresso tratado como tarefa operacional. Sem direção, sem coerência com a marca, sem valor percebido.",
    approach: [
      "Direção de arte editorial",
      "Especificação técnica e gráfica",
      "Curadoria de papel e acabamento",
      "Acompanhamento de produção",
    ],
    deliverables: [
      "Editorial impresso",
      "Embalagem ou material institucional",
      "Guia de aplicação impressa",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=80",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&q=80",
      "https://images.unsplash.com/photo-1517842645767-c639042777db?w=1200&q=80",
    ],
  },
  "midia-ooh": {
    problem:
      "Out-of-home tratado como anúncio. Sem leitura à distância, sem presença, sem reforço de marca.",
    approach: [
      "Estratégia de pontos e contexto",
      "Direção de arte para grandes formatos",
      "Hierarquia tipográfica para leitura rápida",
      "Acompanhamento técnico de impressão e instalação",
    ],
    deliverables: [
      "Peças OOH",
      "Plano de veiculação",
      "Registro fotográfico",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542223616-740d5dff7f56?w=1200&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&q=80",
      "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?w=1200&q=80",
    ],
  },
  "marketing-de-influencia": {
    problem:
      "Parcerias com criadores feitas por alcance, não por afinidade. Resultado: ruído, não construção de marca.",
    approach: [
      "Curadoria de criadores por afinidade",
      "Briefing alinhado ao posicionamento",
      "Direção criativa das ativações",
      "Mensuração qualitativa e quantitativa",
    ],
    deliverables: [
      "Plano de parcerias",
      "Briefings",
      "Relatório de campanha",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80",
      "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
    ],
  },
};

export const Route = createFileRoute("/servico/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    const detail = details[params.slug];
    if (!service || !detail) throw notFound();
    return { service, detail };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.service.name ?? "Serviço"} — Murilo Ortega` },
      { name: "description", content: loaderData?.service.short ?? "" },
      { property: "og:title", content: `${loaderData?.service.name} — Murilo Ortega` },
      { property: "og:description", content: loaderData?.service.short ?? "" },
      { property: "og:image", content: loaderData?.service.image ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="pt-32 container-site">
      <h1>Serviço não encontrado</h1>
      <Link to="/servicos" className="text-link mt-8 inline-block">
        Ver serviços
      </Link>
    </div>
  ),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service, detail } = Route.useLoaderData();
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="pt-32">
      {/* Hero */}
      <section className="section-spacing border-b border-border">
        <div className="container-site">
          <span className="text-[10px] font-mono uppercase tracking-tight text-secondary mb-6 block">
            Serviço · {service.num}
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 anim-fade-in">
              <h1 className="uppercase line-height-tight tracking-tight">
                {service.name}
              </h1>
            </div>
            <div className="lg:col-span-4 anim-fade-in delay-250">
              <p className="text-secondary text-sm leading-relaxed">
                {service.short}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image with parallax-like fixed bg */}
      <section className="border-b border-border">
        <div
          className="service-hero-image"
          style={{ backgroundImage: `url(${service.image})` }}
          aria-hidden="true"
        />
      </section>

      {/* O problema */}
      <section className="section-spacing border-b border-border">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">
              O problema
            </span>
          </div>
          <div className="lg:col-span-8">
            <p className="scroll-reveal text-2xl lg:text-3xl font-bold uppercase line-height-tight tracking-tight">
              {detail.problem}
            </p>
          </div>
        </div>
      </section>

      {/* Como executo */}
      <section className="section-spacing border-b border-border">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">
              Como executo
            </span>
            <h2 className="mt-6">Processo</h2>
          </div>
          <div className="lg:col-span-8">
            <ol className="divide-y divide-border border-y border-border">
              {detail.approach.map((a, i) => (
                <li
                  key={i}
                  className="scroll-reveal py-6 flex gap-8 items-baseline"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="text-[10px] font-mono uppercase tracking-tight text-secondary w-8 shrink-0">
                    0{i + 1}
                  </span>
                  <span className="text-lg lg:text-xl font-medium">{a}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="section-spacing border-b border-border">
        <div className="container-site">
          <div className="flex items-center justify-between mb-12">
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">
              Referências visuais
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
            {detail.gallery.map((src, i) => (
              <div
                key={i}
                className="scroll-reveal media-wrap aspect-[3/4]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img
                  src={src}
                  alt={`Referência ${service.name} ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que você recebe */}
      <section className="section-spacing border-b border-border">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">
              Entregáveis
            </span>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {detail.deliverables.map((d, i) => (
              <div
                key={i}
                className="scroll-reveal border border-border p-6"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-2">
                  0{i + 1}
                </span>
                <span className="text-lg font-bold uppercase">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <h2 className="uppercase line-height-tight tracking-tight">
              Quer conversar sobre<br />
              <span className="text-secondary font-medium">{service.name}?</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex gap-8">
            <Link to="/contato" className="btn btn-arrow">
              Iniciar projeto <span className="arrow" />
            </Link>
            <Link to="/servicos" className="text-link self-center">
              Ver outros
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
