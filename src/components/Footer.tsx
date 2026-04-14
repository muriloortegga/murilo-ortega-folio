import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer>
      {/* CTA Block */}
      <div className="bg-surface section-spacing">
        <div className="container-site text-center">
          <h2 className="text-[28px] md:text-[40px] font-semibold text-foreground leading-tight tracking-tight">
            Pronto para organizar<br />
            <span className="text-muted-foreground font-normal">sua marca?</span>
          </h2>
          <div className="mt-8 flex items-center justify-center gap-8">
            <a
              href="mailto:contato@muriloortega.com"
              className="text-link hover:underline"
            >
              Fale comigo →
            </a>
            <Link to="/trabalho" className="text-link hover:underline">
              Ver portfólio →
            </Link>
          </div>
        </div>
      </div>

      {/* Footer base */}
      <div className="container-site py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="label-small">© {new Date().getFullYear()} Murilo Ortega</span>
        <div className="flex items-center gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="label-small hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href="https://upwork.com" target="_blank" rel="noopener noreferrer" className="label-small hover:text-foreground transition-colors">
            Upwork
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="label-small hover:text-foreground transition-colors">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
