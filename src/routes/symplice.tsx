import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState, useEffect } from "react";
import { X, Maximize2, MousePointer2 } from "lucide-react";

export const Route = createFileRoute("/symplice")({
  head: () => ({
    meta: [
      { title: "Symplice — Identidade de Marca para Startup — Murilo Ortega" },
      { name: "description", content: "Symplice: Criando facilidade e eficiência através de um sistema de marca inovador para grandes corporações." },
    ],
  }),
  component: ProjetoSymplice,
});

function ProjetoSymplice() {
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
            <div className="lg:col-span-12 anim-fade-in">
              <h1>
                Symplice — Identidade de<br />
                <span className="text-secondary font-medium">Marca para Startup</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Meta Bar */}
      <section className="container-site border-t border-b border-border py-8 mb-20 anim-fade-in delay-250">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-1">Cliente</span>
            <span className="text-sm font-bold uppercase">Symplice</span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-1">Serviço</span>
            <span className="text-sm font-bold uppercase">Naming & ID Visual</span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-1">Ano</span>
            <span className="text-sm font-bold uppercase">2024</span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-1">Entregáveis</span>
            <span className="text-sm font-bold uppercase">Logo, Guidelines</span>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="section-spacing pt-0">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 anim-fade-in delay-250">
              <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-6">O Conceito</span>
              <ul className="space-y-2">
                {["Gerenciamento", "Design Gráfico", "Brand Guidelines", "Logotipo"].map((item) => (
                  <li key={item} className="text-[11px] uppercase tracking-wider font-medium text-secondary/70">• {item}</li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-8">
              <div className="scroll-reveal space-y-10">
                <p className="text-2xl lg:text-3xl font-bold uppercase line-height-tight tracking-tight">
                  No mundo das grandes corporações, a complexidade é a norma. <br />
                  <span className="text-secondary font-medium">A Symplice nasceu para subverter essa lógica.</span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <p className="text-sm text-secondary leading-relaxed">
                    Mais do que uma empresa de tecnologia, a Symplice facilita experiências digitais descomplicadas. 
                    O desafio envolveu a criação de um ecossistema de clareza: do naming que evoca facilidade à identidade visual que respira eficiência.
                  </p>
                  <p className="text-sm text-secondary leading-relaxed">
                    Compromisso inabalável com a simplicidade. Uma marca inovadora pronta para simplificar o dia a dia, 
                    onde cada interação é uma oportunidade para tornar a vida digital mais fácil e funcional.
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
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary mb-6 block">Case Study Visual (Clique para expandir)</span>
            
            <div 
              className="relative w-full mx-auto h-[700px] overflow-hidden cursor-none border border-border group"
              onClick={() => setIsFullScreen(true)}
            >
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 flex items-center justify-center">
                <div className="bg-background/80 backdrop-blur px-6 py-3 flex items-center gap-3 border border-border opacity-0 group-hover:opacity-100 transition-all transform translateY-2 group-hover:translateY-0">
                  <Maximize2 size={18} />
                  <span className="text-[10px] font-mono uppercase tracking-widest">Apresentação Vertical Completa</span>
                </div>
              </div>
              
              <div className="w-full h-full overflow-y-auto no-scrollbar scroll-smooth">
                <img 
                  src="/symplice-full.png" 
                  alt="Symplice Branding Vertical Showcase" 
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
            <span className="text-xs font-mono uppercase tracking-widest">Symplice — Brand ID Concept</span>
            <button 
              onClick={() => setIsFullScreen(false)}
              className="p-4 bg-foreground text-background transition-transform hover:scale-110"
            >
              <X size={24} />
            </button>
          </div>
          
            <img 
              src="/symplice-full.png" 
              alt="Symplice Presentation Full" 
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
      <section className="section-spacing border-t border-border">
        <div className="container-site flex justify-between items-center">
          <Link to="/" className="btn btn-arrow">← Voltar Home <span className="arrow hidden" /></Link>
          <Link to="/natrave" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}
