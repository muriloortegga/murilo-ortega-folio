import { Link } from "@tanstack/react-router";

export const brands = [
  { slug: "symplice", name: "Symplice" },
  { slug: "natrave", name: "NaTrave" },
  { slug: "solid", name: "Solid+" },
  { slug: "vogue-design", name: "Vogue Design" },
  { slug: "natural-pure", name: "Natural Pure" },
  { slug: "tech-flow", name: "Tech Flow" },
  { slug: "zen-garden", name: "Zen Garden" },
  { slug: "studio-max", name: "Studio Max" },
];

export function LogoMarquee() {
  // Duplicate the list so the loop is seamless
  const loop = [...brands, ...brands];

  return (
    <section
      aria-label="Marcas com quem trabalhei"
      className="logo-marquee border-y border-border overflow-hidden"
    >
      <div className="container-site py-6">
        <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">
          Marcas com quem trabalhei
        </span>
      </div>
      <div className="logo-marquee-track-wrap">
        <div className="logo-marquee-track">
          {loop.map((b, i) => (
            <Link
              key={`${b.slug}-${i}`}
              to="/marca/$slug"
              params={{ slug: b.slug }}
              className="logo-marquee-item"
              aria-label={`Ver projetos de ${b.name}`}
            >
              <span className="logo-marquee-text">{b.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
