import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/servico/$id")({
  component: ServicoPage,
});

function ServicoPage() {
  const { id } = Route.useParams();
  const revealRef = useScrollReveal<HTMLDivElement>();
  
  // Format the service name from the slug
  const serviceName = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div ref={revealRef} className="pt-32 min-h-screen">
      <section className="section-spacing">
        <div className="container-site">
          <Link to="/" className="text-sm uppercase font-bold tracking-tight mb-8 inline-block hover:opacity-50">← Voltar</Link>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-4 anim-fade-in">
              <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-4">Serviço</span>
              <h1 className="text-4xl lg:text-5xl">{serviceName}</h1>
            </div>
            <div className="lg:col-span-8 anim-fade-in delay-250">
              <p className="text-2xl lg:text-4xl font-bold uppercase line-height-tight tracking-tight">
                Processo imersivo e <br />
                <span className="text-secondary font-medium">resultados tangíveis.</span>
              </p>
            </div>
          </div>

          <div className="aspect-[21/9] bg-muted mb-20 relative overflow-hidden group">
            <img 
               src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
               alt="Service preview" 
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h3 className="uppercase mb-8">Como funciona</h3>
              <p className="text-secondary leading-relaxed text-lg">
                Esta página explica os detalhes e a metodologia de execução do serviço de {serviceName}. O processo é desenhado para ser fluido e transparente, garantindo alinhamento em cada etapa.
              </p>
            </div>
            <div className="space-y-12">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-2">01. Descoberta</span>
                <p className="text-sm text-foreground">Imersão no contexto do projeto, análise de necessidades e definição de objetivos.</p>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-2">02. Desenvolvimento</span>
                <p className="text-sm text-foreground">Criação focada, explorando os melhores caminhos de design e estratégias aplicadas a {serviceName}.</p>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-2">03. Entrega</span>
                <p className="text-sm text-foreground">Apresentação, refinamento final e hand-off de todos os arquivos e especificações.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
