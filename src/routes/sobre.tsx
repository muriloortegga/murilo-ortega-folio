import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Murilo Ortega" },
      { name: "description", content: "Quase 10 anos organizando marcas. Estratégia e execução no mesmo lugar." },
      { property: "og:title", content: "Sobre — Murilo Ortega" },
      { property: "og:description", content: "Estratégia e execução no mesmo lugar." },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="pt-24">
      <section className="section-spacing">
        <div className="container-site max-w-[640px]">
          <h1 className="scroll-reveal text-[36px] lg:text-[48px] font-semibold text-foreground leading-tight">
            Estratégia e execução no mesmo lugar.
          </h1>

          <div className="scroll-reveal mt-8 space-y-6">
            <p className="text-[15px] text-surface-foreground leading-[1.7]">
              Quase 10 anos organizando marcas. Trabalhei de ponta a ponta —
              do posicionamento ao pixel, do conceito à entrega. Não terceirizo o raciocínio.
            </p>
            <p className="text-[15px] text-surface-foreground leading-[1.7]">
              Opero como um sistema enxuto: controlo a estratégia, aciono
              colaboradores quando necessário e mantenho a qualidade centralizada.
              Sem burocracia. Com resultado.
            </p>
          </div>

          <p className="scroll-reveal tags-row mt-8">
            Branding · Comunicação · Design · Conteúdo · Presença Digital
          </p>

          <div className="scroll-reveal mt-16">
            <span className="label-upper">Onde estou</span>
            <div className="mt-4 space-y-2">
              <p className="text-[15px] text-surface-foreground">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline underline-offset-4">LinkedIn</a>
                <span className="text-muted-foreground"> — autoridade</span>
              </p>
              <p className="text-[15px] text-surface-foreground">
                <a href="https://upwork.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline underline-offset-4">Upwork</a>
                <span className="text-muted-foreground"> — projetos internacionais</span>
              </p>
              <p className="text-[15px] text-surface-foreground">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline underline-offset-4">Instagram</a>
                <span className="text-muted-foreground"> — processo e rotina</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
