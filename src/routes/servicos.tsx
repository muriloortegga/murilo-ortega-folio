import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Murilo Ortega" },
      { name: "description", content: "Três sistemas para organizar sua marca: estruturação, conteúdo e presença digital." },
      { property: "og:title", content: "Serviços — Murilo Ortega" },
      { property: "og:description", content: "Três sistemas para organizar sua marca." },
    ],
  }),
  component: ServicosPage,
});

const products = [
  {
    num: "01",
    name: "Estruturação de Marca",
    resolve: "Marcas que cresceram sem base. Sem posicionamento definido, sem identidade coerente, sem material de referência. Tudo existe, mas nada se conecta.",
    envolve: "Diagnóstico de marca, definição de posicionamento, construção de identidade visual (logo, tipografia, paleta, sistema visual), direção de naming quando necessário, e documentação completa em brandbook.",
    recebe: "Um brandbook completo e uma marca que funciona como sistema.",
  },
  {
    num: "02",
    name: "Sistema de Conteúdo",
    resolve: "Marcas que publicam sem estratégia. Conteúdo existe, mas não segue uma linha, não tem frequência previsível e não reforça o posicionamento.",
    envolve: "Definição de linha editorial, planejamento de conteúdo por canal, criação de diretrizes de tom e voz, direção criativa para primeiros ciclos de produção.",
    recebe: "Uma linha editorial documentada e um sistema de produção que se sustenta.",
  },
  {
    num: "03",
    name: "Presença Digital",
    resolve: "Marcas que não são bem apresentadas online. O site não comunica valor, a jornada do visitante é confusa, e a conversão depende de sorte.",
    envolve: "Estratégia de conteúdo para web, wireframe e direção de UX/UI, copywriting orientado a conversão, implementação com foco em performance e SEO básico.",
    recebe: "Um site que organiza a comunicação e facilita a conversão.",
  },
];

function ServicosPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="pt-24">
      <section className="section-spacing">
        <div className="container-site max-w-[800px]">
          <h1 className="scroll-reveal text-[36px] lg:text-[48px] font-semibold text-foreground leading-tight">
            Os três sistemas.
          </h1>
          <p className="scroll-reveal mt-4 text-[18px] text-muted-foreground leading-[1.7]">
            Cada um resolve um problema específico. Todos se conectam.
          </p>
        </div>
      </section>

      <section className="container-site max-w-[800px] pb-16">
        {products.map((p, i) => (
          <div key={i} className="scroll-reveal" style={{ transitionDelay: `${i * 50}ms` }}>
            {i > 0 && <hr className="divider my-12" />}
            <span className="label-small">{p.num}</span>
            <h2 className="text-[24px] font-semibold text-foreground mt-2">{p.name}</h2>

            <div className="mt-6 space-y-4">
              <div>
                <span className="label-upper">O que resolve</span>
                <p className="text-[15px] text-surface-foreground leading-[1.7] mt-2">{p.resolve}</p>
              </div>
              <div>
                <span className="label-upper">O que envolve</span>
                <p className="text-[15px] text-surface-foreground leading-[1.7] mt-2">{p.envolve}</p>
              </div>
              <div>
                <span className="label-upper">O que você recebe</span>
                <p className="text-[15px] text-foreground font-semibold leading-[1.7] mt-2">{p.recebe}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="section-spacing border-t border-border">
        <div className="container-site max-w-[800px]">
          <div className="scroll-reveal">
            <span className="label-upper">Como funciona o modelo</span>
            <p className="text-[15px] text-surface-foreground leading-[1.7] mt-4">
              O ponto de entrada é sempre um projeto fechado, com escopo e prazo definidos.
              A partir da entrega, abre-se espaço para recorrência e evolução. O ticket cresce
              com a relação, não com a pressão.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
