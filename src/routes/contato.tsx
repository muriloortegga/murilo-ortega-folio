import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Murilo Ortega" },
      { name: "description", content: "Vamos conversar. Se sua marca está abaixo do nível do seu negócio, é aqui que começa." },
      { property: "og:title", content: "Contato — Murilo Ortega" },
      { property: "og:description", content: "Vamos conversar sobre sua marca." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="pt-24">
      <section className="section-spacing">
        <div className="container-site max-w-[640px]">
          <h1 className="scroll-reveal text-[36px] lg:text-[48px] font-semibold text-foreground leading-tight">
            Vamos conversar.
          </h1>
          <p className="scroll-reveal mt-4 text-[18px] text-muted-foreground leading-[1.7]">
            Se você sente que sua marca está abaixo do nível do seu negócio, é aqui que começa.
          </p>

          <div className="scroll-reveal mt-10 flex flex-col sm:flex-row gap-6">
            <a
              href="mailto:contato@muriloortega.com"
              className="text-link text-foreground hover:underline underline-offset-4"
            >
              Enviar mensagem →
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-foreground hover:underline underline-offset-4"
            >
              Ver no LinkedIn →
            </a>
          </div>

          <div className="scroll-reveal mt-16">
            <hr className="divider" />
            <div className="mt-8">
              <span className="label-upper">O que posso fazer por você</span>
              <p className="tags-row mt-3">
                Estruturação de Marca · Sistema de Conteúdo · Presença Digital
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
