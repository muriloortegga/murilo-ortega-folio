import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { brands } from "@/components/LogoMarquee";

export const Route = createFileRoute("/marca/$slug")({
  loader: ({ params }) => {
    const brand = brands.find((b) => b.slug === params.slug);
    if (!brand) throw notFound();
    return { brand };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.brand.name ?? "Marca"} — Murilo Ortega` },
      {
        name: "description",
        content: `Projetos desenvolvidos para ${loaderData?.brand.name}.`,
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="pt-32 container-site">
      <h1>Marca não encontrada</h1>
      <Link to="/trabalho" className="text-link mt-8 inline-block">
        Ver trabalho
      </Link>
    </div>
  ),
  component: BrandPage,
});

function BrandPage() {
  const { brand } = Route.useLoaderData();
  const revealRef = useScrollReveal<HTMLDivElement>();

  // Placeholder project blocks for this brand
  const slots = [
    { label: "Identidade Visual", aspect: "aspect-[4/5]" },
    { label: "Sistema de Conteúdo", aspect: "aspect-[16/9]" },
    { label: "Mídia Impressa", aspect: "aspect-[3/4]" },
    { label: "Mídia OOH", aspect: "aspect-[16/9]" },
    { label: "Social Media — Reels", aspect: "aspect-[1/1]" },
    { label: "Social Media — Feed", aspect: "aspect-[4/5]" },
  ];

  return (
    <div ref={revealRef} className="pt-32">
      {/* Hero da marca */}
      <section className="section-spacing border-b border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 anim-fade-in">
              <span className="text-[10px] font-mono uppercase tracking-tight text-secondary mb-6 block">
                Marca · Cliente
              </span>
              <h1 className="uppercase line-height-tight tracking-tight">
                {brand.name}
              </h1>
            </div>
            <div className="lg:col-span-4 anim-fade-in delay-250">
              <p className="text-secondary text-sm leading-relaxed">
                Página dedicada à marca. Aqui entrarão todos os projetos
                desenvolvidos para {brand.name}, com identidade visual e
                tratamento editorial próprios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder hero image */}
      <section className="border-b border-border">
        <div className="container-site py-12">
          <div className="media-wrap aspect-[21/9] bg-muted flex items-center justify-center">
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">
              [ Hero visual da marca {brand.name} ]
            </span>
          </div>
        </div>
      </section>

      {/* Grid de projetos placeholder */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="flex items-center justify-between mb-12">
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">
              Projetos · {brand.name}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">
              Em construção
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {slots.map((slot, i) => (
              <div
                key={i}
                className="scroll-reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className={`media-wrap ${slot.aspect} bg-muted flex items-center justify-center border border-dashed border-border`}
                >
                  <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">
                    [ {slot.label} ]
                  </span>
                </div>
                <div className="mt-6">
                  <span className="card-label">Placeholder · 2024</span>
                  <span className="font-medium text-lg uppercase leading-tight block">
                    {slot.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing border-t border-border">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <h2 className="uppercase line-height-tight tracking-tight">
              Quer um trabalho<br />como o de {brand.name}?
            </h2>
          </div>
          <div className="lg:col-span-4">
            <Link to="/contato" className="btn btn-arrow">
              Conversar <span className="arrow" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
