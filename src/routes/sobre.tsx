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
    <div ref={revealRef} className="pt-32">
      <section className="section-spacing">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 anim-fade-in">
              <h1>Sobre</h1>
            </div>
            <div className="lg:col-span-8 anim-fade-in delay-250">
              <p className="text-2xl lg:text-4xl font-bold uppercase line-height-tight tracking-tight mb-12">
                Estratégia e execução <br />
                <span className="text-secondary font-medium">no mesmo lugar.</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-border">
                <div className="space-y-6">
                  <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">A Trajetória</span>
                  <p className="text-sm text-secondary leading-relaxed">
                    Quase 10 anos organizando marcas. Trabalhei de ponta a ponta —
                    do posicionamento ao pixel, do conceito à entrega. Não terceirizo o raciocínio.
                  </p>
                </div>
                <div className="space-y-6">
                  <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">O Modelo</span>
                  <p className="text-sm text-secondary leading-relaxed">
                    Opero como um sistema enxuto: controlo a estratégia, aciono
                    colaboradores quando necessário e mantenho a qualidade centralizada.
                    Sem burocracia. Com resultado.
                  </p>
                </div>
              </div>

              <div className="mt-20 pt-12 border-t border-border space-y-8">
                <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">Conecte-se</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {[
                    { name: "LinkedIn", detail: "Autoridade", url: "#" },
                    { name: "Upwork", detail: "Internacional", url: "#" },
                    { name: "Instagram", detail: "Processo", url: "#" }
                  ].map((link) => (
                    <a key={link.name} href={link.url} className="group block">
                      <span className="text-xs font-mono uppercase text-secondary block mb-1">{link.detail}</span>
                      <span className="text-lg font-bold uppercase group-hover:text-secondary transition-colors underline underline-offset-4 decoration-1">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
