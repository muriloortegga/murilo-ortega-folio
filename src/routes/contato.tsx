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
    <div ref={revealRef} className="pt-32">
      <section className="section-spacing">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 anim-fade-in">
              <h1>Contato</h1>
            </div>
            <div className="lg:col-span-8 anim-fade-in delay-250">
              <p className="text-2xl lg:text-4xl font-bold uppercase line-height-tight tracking-tight mb-12">
                Vamos <span className="text-secondary font-medium">conversar.</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-border">
                <div className="space-y-8">
                  <p className="text-lg lg:text-xl text-foreground font-medium leading-relaxed">
                    Se você sente que sua marca está abaixo do nível do seu negócio, é aqui que começa.
                  </p>
                  <div className="flex flex-col gap-4">
                    <a href="mailto:contato@muriloortega.com" className="btn btn-arrow">
                      Enviar mensagem <span className="arrow" />
                    </a>
                    <a href="#" className="btn btn-arrow">
                      Agendar Chamada <span className="arrow" />
                    </a>
                  </div>
                </div>

                <div className="space-y-12">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">E-mail</span>
                    <p className="text-lg font-bold uppercase mt-2">contato@muriloortega.com</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">Social</span>
                    <div className="flex flex-wrap gap-6 mt-2">
                       {["LinkedIn", "Instagram", "Upwork"].map(social => (
                         <a key={social} href="#" className="text-sm font-bold uppercase underline underline-offset-4 decoration-1 hover:text-secondary transition-colors">
                           {social}
                         </a>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
