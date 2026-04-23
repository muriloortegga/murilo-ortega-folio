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

      <section className="container-site pb-32">
        {products.map((p, i) => (
          <div key={i} className="scroll-reveal" style={{ transitionDelay: `${i * 100}ms` }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 border-t border-border">
              <div className="lg:col-span-4">
                <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">{p.num}</span>
                <h2 className="text-2xl font-bold uppercase mt-4">{p.name}</h2>
              </div>
              <div className="lg:col-span-8 space-y-12">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">O que resolve</span>
                  <p className="text-lg lg:text-xl text-foreground font-medium mt-4 max-w-[600px]">{p.resolve}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-border/50">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">O que envolve</span>
                    <p className="text-sm text-secondary leading-relaxed mt-4">{p.envolve}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">O que você recebe</span>
                    <p className="text-sm text-foreground font-semibold mt-4">{p.recebe}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
