import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState, useEffect } from "react";
import { X, Maximize2, Trophy, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/natrave")({
  head: () => ({
    meta: [
      { title: "NaTrave App — O Ecossistema do Futebol Amador — Murilo Ortega" },
      { name: "description", content: "Case study: Branding, UX/UI e estratégia de social media para o aplicativo NaTrave!." },
    ],
  }),
  component: ProjetoNaTrave,
});

function ProjetoNaTrave() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [activeTab, setActiveTab] = useState<"marca" | "social">("marca");
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    if (isFullScreen) {
      document.body.classList.add("has-fullscreen");
    } else {
      document.body.classList.remove("has-fullscreen");
    }
    return () => document.body.classList.remove("has-fullscreen");
  }, [isFullScreen]);

  return (
    <div ref={revealRef} className="pt-32">
      {/* Header */}
      <section className="section-spacing pb-12">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 anim-fade-in">
              <span className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-4 block">Projeto Autoral</span>
              <h1>
                NaTrave App — <br />
                <span className="text-secondary font-medium italic">Virenado o Jogo</span>
              </h1>
            </div>
            <div className="lg:col-span-4 flex items-end anim-fade-in delay-250">
               <p className="text-sm text-secondary leading-relaxed">
                 O futebol amador elevado ao nível de elite. Uma plataforma para conectar jogadores, organizadores e a paixão pelo esporte sem burocracia.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meta Bar */}
      <section className="container-site border-t border-b border-border py-8 mb-20 anim-fade-in delay-250">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-1">Papel</span>
            <span className="text-sm font-bold uppercase">Direção & Design</span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-1">Ano</span>
            <span className="text-sm font-bold uppercase">2024</span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-1">Plataforma</span>
            <span className="text-sm font-bold uppercase">iOS & Android</span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-1">Skills</span>
            <span className="text-sm font-bold uppercase">UX/UI, Social</span>
          </div>
        </div>
      </section>

      {/* Dual Toggle Selection */}
      <section className="container-site mb-20">
        <div className="flex items-center gap-4 anim-fade-in delay-500">
          <button 
            onClick={() => setActiveTab("marca")}
            className={cn(
              "btn px-8 py-3 transition-all",
              activeTab === "marca" ? "bg-foreground text-background" : "bg-transparent text-foreground border border-border"
            )}
          >
            Marca
          </button>
          <button 
            onClick={() => setActiveTab("social")}
            className={cn(
              "btn px-8 py-3 transition-all",
              activeTab === "social" ? "bg-foreground text-background" : "bg-transparent text-foreground border border-border"
            )}
          >
            Social Media
          </button>
        </div>
      </section>

      {/* Content Area */}
      <div className="relative min-h-[800px]">
        {activeTab === "marca" ? (
          <section key="marca" className="anim-fade-in">
            <div className="container-site">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                <div className="lg:col-span-4">
                   <div className="p-8 bg-orange-500/5 border border-orange-500/20 rounded-sm">
                      <Trophy className="text-orange-500 mb-6" size={32} />
                      <h3 className="text-lg font-bold uppercase mb-4">Identidade de Elite</h3>
                      <p className="text-xs text-secondary leading-relaxed font-mono">
                         Criação da marca e sistema visual para um nicho que exige reconhecimento imediato e vigor esportivo.
                      </p>
                   </div>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-2xl lg:text-3xl font-bold uppercase line-height-tight tracking-tight mb-8">
                    Do naming que evoca facilidade à identidade <br />
                    <span className="text-secondary font-medium">que respira eficiência.</span>
                  </p>
                  <p className="text-sm text-secondary leading-relaxed max-w-[600px]">
                    O desafio envolveu a criação de um ecossistema de clareza: cores vibrantes e uma tipografia robusta que respira movimento. O futebol amador elevado ao nível profissional.
                  </p>
                </div>
              </div>

              {/* Showcase Marca */}
              <div className="relative w-full mx-auto h-[700px] overflow-hidden cursor-none border border-border group" onClick={() => setIsFullScreen(true)}>
                 <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 flex items-center justify-center">
                    <div className="bg-background/80 backdrop-blur px-6 py-3 border border-border opacity-0 group-hover:opacity-100 transition-all">
                       <Maximize2 size={18} />
                       <span className="ml-2 text-[10px] font-mono uppercase tracking-widest">Ver Brannding Case</span>
                    </div>
                 </div>
                 <div className="w-full h-full overflow-y-auto no-scrollbar scroll-smooth">
                    <img src="/natrave-marca.png" alt="NaTrave Branding Showcase" className="w-full h-auto" />
                 </div>
              </div>
            </div>
          </section>
        ) : (
          <section key="social" className="anim-fade-in">
            <div className="container-site">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                <div className="lg:col-span-4">
                   <div className="p-8 bg-green-500/5 border border-green-500/20 rounded-sm">
                      <Users className="text-green-600 mb-6" size={32} />
                      <h3 className="text-lg font-bold uppercase mb-4">Comunidade & Engajamento</h3>
                      <p className="text-xs text-secondary leading-relaxed font-mono">
                         Estratégia de conteúdo focada em transformar usuários em atletas da comunidade através de um design dinâmico.
                      </p>
                   </div>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-2xl lg:text-3xl font-bold uppercase line-height-tight tracking-tight mb-8">
                    Mais do que posts, criamos uma linha editorial <br />
                    <span className="text-secondary font-medium">que posiciona o app como o gramado oficial.</span>
                  </p>
                  <p className="text-sm text-secondary leading-relaxed max-w-[600px]">
                    Na frente de Social Media, o NaTrave envolveu gerenciamento estratégico, criação de conteúdo dinâmico e marketing focado em tração real. Design que gera reconhecimento no nicho.
                  </p>
                </div>
              </div>

              {/* Showcase Social */}
              <div className="relative w-full mx-auto h-[700px] overflow-hidden cursor-none border border-border group" onClick={() => setIsFullScreen(true)}>
                 <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 flex items-center justify-center">
                    <div className="bg-background/80 backdrop-blur px-6 py-3 border border-border opacity-0 group-hover:opacity-100 transition-all">
                       <Maximize2 size={18} />
                       <span className="ml-2 text-[10px] font-mono uppercase tracking-widest">Ver Social Media Case</span>
                    </div>
                 </div>
                 <div className="w-full h-full overflow-y-auto no-scrollbar scroll-smooth">
                    <img src="/natrave-social.png" alt="NaTrave Social Media Showcase" className="w-full h-auto" />
                 </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Full Screen Overlay */}
      {isFullScreen && (
        <div className="fixed inset-0 z-[100] bg-background overflow-y-auto no-scrollbar anim-fade-in">
          <div className="sticky top-0 right-0 left-0 h-24 flex items-center justify-between container-site z-[101] bg-background/50 backdrop-blur-sm border-b border-border/10">
            <span className="text-xs font-mono uppercase tracking-widest">NaTrave App Case — {activeTab}</span>
            <button 
              onClick={() => setIsFullScreen(false)}
              className="p-4 bg-foreground text-background transition-transform hover:scale-110"
            >
              <X size={24} />
            </button>
          </div>
          
            <img 
              src={activeTab === "marca" ? "/natrave-marca.png" : "/natrave-social.png"} 
              alt="NaTrave Full Presentation" 
              className="w-full h-auto shadow-2xl"
            />
            {/* Scroll Hint Overlay */}
            <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[102] pointer-events-none flex flex-col items-center gap-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/40">Explore os detalhes</span>
              <div className="hint-scroll h-8 w-px bg-foreground/20" />
            </div>
          </div>
        </div>
      )}

      {/* Footer Nav */}
      <section className="section-spacing border-t border-border mt-32">
        <div className="container-site flex justify-between items-center">
          <Link to="/" className="btn btn-arrow">← Voltar Home <span className="arrow hidden" /></Link>
          <Link to="/symplice" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}
