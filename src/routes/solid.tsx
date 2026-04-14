import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState, useEffect } from "react";
import { X, Maximize2, ShieldCheck, Zap } from "lucide-react";

export const Route = createFileRoute("/solid")({
  head: () => ({
    meta: [
      { title: "Solid + — Fintech Identity & Systems — Murilo Ortega" },
      { name: "description", content: "Case study: Branding e Identidade Visual para a Solid+, fintech sediada no Reino Unido." },
    ],
  }),
  component: ProjetoSolid,
});

function ProjetoSolid() {
  const revealRef = useScrollReveal<HTMLDivElement>();
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
              <span className="text-secondary font-mono text-[10px] uppercase tracking-[0.2em] mb-4 block">Fintech · UK Based</span>
              <h1>
                Solid + — <br />
                <span className="text-secondary font-medium">Democratizando o Acesso</span>
              </h1>
            </div>
            <div className="lg:col-span-4 flex items-end anim-fade-in delay-250">
               <p className="text-sm text-secondary leading-relaxed">
                 Alinhando identidade visual e narrativa de marca para uma fintech que simplifica a jornada tecnológica de grandes empreendedores.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meta Bar */}
      <section className="container-site border-t border-b border-border py-8 mb-20 anim-fade-in delay-250">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-1">Cliente</span>
            <span className="text-sm font-bold uppercase">Solid +</span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-1">Território</span>
            <span className="text-sm font-bold uppercase">UK / Global</span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-1">Ano</span>
            <span className="text-sm font-bold uppercase">2024</span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-1">Papel</span>
            <span className="text-sm font-bold uppercase">Direção & ID Visual</span>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="section-spacing pt-0">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 anim-fade-in delay-250">
              <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-6">Deliverables</span>
              <ul className="space-y-4">
                {[
                  { icon: ShieldCheck, text: "Gerenciamento de Projetos" },
                  { icon: Zap, text: "Design de Logotipo" },
                  { icon: ShieldCheck, text: "Identidade Visual" },
                  { icon: Zap, text: "Design Thinking" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[11px] uppercase tracking-wider font-medium text-secondary">
                    <item.icon size={14} className="text-foreground" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-8">
              <div className="scroll-reveal space-y-10">
                <p className="text-2xl lg:text-3xl font-bold uppercase line-height-tight tracking-tight">
                  No mercado do Reino Unido, a clareza é o maior ativo. <br />
                  <span className="text-secondary font-medium italic">Simplicidade institucional para empreendedores.</span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <p className="text-sm text-secondary leading-relaxed">
                    A Solid + nos procurou para traduzir tecnologia complexa em uma interface humana e acessível. 
                    Mais do que uma fintech, uma plataforma de democratização digital focado em alta qualidade.
                  </p>
                  <p className="text-sm text-secondary leading-relaxed">
                    Projetamos um sistema visual que equilibra a solidez com a agilidade de uma startup global. 
                    Uma identidade que não apenas comunica segurança, mas inspira eficiência pura.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="pb-32">
        <div className="container-site">
          <div className="relative">
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary mb-6 block">Manual da Marca (Expandir Case)</span>
            
            <div 
              className="relative w-full mx-auto h-[700px] overflow-hidden cursor-none border border-border group"
              onClick={() => setIsFullScreen(true)}
            >
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 flex items-center justify-center">
                <div className="bg-background/80 backdrop-blur px-6 py-3 flex items-center gap-3 border border-border opacity-0 group-hover:opacity-100 transition-all transform translateY-2 group-hover:translateY-0">
                  <Maximize2 size={18} />
                  <span className="text-[10px] font-mono uppercase tracking-widest">Ver Apresentação Completa</span>
                </div>
              </div>
              
              <div className="w-full h-full overflow-y-auto no-scrollbar scroll-smooth">
                <img 
                  src="/solid-full.png" 
                  alt="Solid + Branding Showcase" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Overlay */}
      {isFullScreen && (
        <div className="fixed inset-0 z-[100] bg-background overflow-y-auto no-scrollbar anim-fade-in">
          <div className="sticky top-0 right-0 left-0 h-24 flex items-center justify-between container-site z-[101] bg-background/50 backdrop-blur-sm border-b border-border/10">
            <span className="text-xs font-mono uppercase tracking-widest">Solid + — Brand Engineering Case</span>
            <button 
              onClick={() => setIsFullScreen(false)}
              className="p-4 bg-foreground text-background transition-transform hover:scale-110"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="max-w-[1200px] mx-auto px-4 pb-32 pt-8">
            <img 
              src="/solid-full.png" 
              alt="Solid + Full Presentation" 
              className="w-full h-auto shadow-2xl"
            />
            {/* Scroll Hint Overlay */}
            <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[102] pointer-events-none flex flex-col items-center gap-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/40">Siga o Brand Guidelines</span>
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
