import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/brand/$id")({
  component: BrandPage,
});

function BrandPage() {
  const { id } = Route.useParams();
  const revealRef = useScrollReveal<HTMLDivElement>();
  
  // Format the brand name from the slug
  const brandName = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div ref={revealRef} className="pt-32 min-h-screen">
      <section className="section-spacing">
        <div className="container-site">
          <Link to="/" className="text-sm uppercase font-bold tracking-tight mb-8 inline-block hover:opacity-50">← Voltar</Link>
          <div className="mb-20">
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-4">Arquivo da Marca</span>
            <h1 className="uppercase line-height-tight tracking-tight">
              {brandName}
            </h1>
          </div>
          
          <div className="aspect-video bg-muted flex items-center justify-center mb-20 overflow-hidden relative group">
            <div className="absolute inset-0 bg-black/5" />
            <span className="text-2xl md:text-4xl font-bold uppercase tracking-widest opacity-20 text-center px-4">
              Espaço Reservado para Identidade Visual
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h3 className="uppercase mb-8">Sobre a marca</h3>
              <p className="text-secondary leading-relaxed text-lg">
                Esta página será dedicada a exibir todos os projetos feitos para {brandName}, incluindo identidade visual, aplicações de marca, e sistema de design.
              </p>
            </div>
            <div>
              <h3 className="uppercase mb-8">Entregáveis</h3>
              <ul className="space-y-4 text-secondary uppercase font-medium text-sm tracking-tight border-t border-border pt-8">
                <li className="flex justify-between border-b border-border/30 pb-4"><span>Estratégia de Marca</span><span>Concluído</span></li>
                <li className="flex justify-between border-b border-border/30 pb-4"><span>Identidade Visual</span><span>Concluído</span></li>
                <li className="flex justify-between border-b border-border/30 pb-4"><span>Brandbook</span><span>Concluído</span></li>
                <li className="flex justify-between border-b border-border/30 pb-4"><span>Aplicações</span><span>Concluído</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
