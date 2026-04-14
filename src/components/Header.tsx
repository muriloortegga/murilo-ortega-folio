import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/trabalho" as const, label: "Trabalho" },
  { to: "/servicos" as const, label: "Serviços" },
  { to: "/sobre" as const, label: "Sobre" },
  { to: "/contato" as const, label: "Contato" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "site-header fixed top-0 left-0 right-0 z-50 bg-background transition-all duration-300",
          scrolled && "border-b border-border"
        )}
      >
        <div className="container-site flex items-center justify-between h-24">
          <Link to="/" className="text-foreground text-lg font-bold tracking-tight uppercase">
            Murilo Ortega
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-regular uppercase tracking-tight text-foreground/60 transition-opacity duration-250 hover:opacity-100"
                activeProps={{
                  className: "text-foreground opacity-100",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-background flex flex-col">
          <div className="container-site flex items-center justify-between h-24">
            <Link
              to="/"
              className="text-foreground text-lg font-bold tracking-tight uppercase"
              onClick={() => setMenuOpen(false)}
            >
              Murilo Ortega
            </Link>
            <button
              className="text-foreground p-2"
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-start container-site mt-12 gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[40px] text-foreground font-bold uppercase leading-none tracking-tight"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
