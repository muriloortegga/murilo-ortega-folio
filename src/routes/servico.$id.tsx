import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/servico/$id")({
  head: ({ params }) => {
    const servico = servicos.find((s) => s.id === params.id);
    const name = servico?.title ?? "Serviço";
    return {
      meta: [
        { title: `${name} — Murilo Ortega` },
        { name: "description", content: servico?.description ?? "Como executo este serviço." },
      ],
    };
  },
  component: ServicoPage,
});

type Deliverable = { icon: string; label: string };
type Phase = { num: string; title: string; body: string };
type ServicoData = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  accent: string;
  accentRgb: string;
  resolve: string;
  envolve: string;
  recebe: string;
  deliverables: Deliverable[];
  phases: Phase[];
  gallery: { src: string; caption: string }[];
};

const servicos: ServicoData[] = [
  {
    id: "identidade-visual",
    title: "Identidade Visual",
    subtitle: "Id Visual",
    description: "Construção de marcas que funcionam como sistema — coerentes, memoráveis e escaláveis.",
    heroImage: "/hero-brandding.jpg",
    accent: "#1a1a2e",
    accentRgb: "26,26,46",
    resolve:
      "Marcas que cresceram sem base. Sem posicionamento definido, sem identidade coerente, sem material de referência. Tudo existe, mas nada se conecta.",
    envolve:
      "Diagnóstico de marca, definição de posicionamento, construção de identidade visual (logo, tipografia, paleta, sistema visual), direção de naming quando necessário, e documentação completa em brandbook.",
    recebe: "Um brandbook completo e uma marca que funciona como sistema.",
    deliverables: [
      { icon: "◉", label: "Logomark & Logotipo" },
      { icon: "◆", label: "Paleta de Cores" },
      { icon: "Aa", label: "Tipografia" },
      { icon: "▣", label: "Sistema Visual" },
      { icon: "◎", label: "Brandbook PDF" },
      { icon: "✦", label: "Arquivos Fonte" },
    ],
    phases: [
      { num: "01", title: "Imersão", body: "Entendemos o negócio, o público, o mercado e o que a marca precisa comunicar. Diagnóstico completo." },
      { num: "02", title: "Conceituação", body: "Desenvolvemos o DNA visual: conceito criativo, referências, moodboard e direção estética." },
      { num: "03", title: "Criação", body: "Construção do logotipo, sistema de cores, tipografia e todos os elementos visuais da marca." },
      { num: "04", title: "Entrega", body: "Brandbook completo com manual de uso, arquivos em todos os formatos e suporte de transição." },
    ],
    gallery: [
      { src: "/hero-brandding.jpg", caption: "Identidade Symplice" },
      { src: "/solid-full.png", caption: "Identidade Solid+" },
    ],
  },
  {
    id: "social-media",
    title: "Social Media",
    subtitle: "Conteúdo",
    description: "Presença digital consistente, estratégica e visualmente alinhada à identidade da sua marca.",
    heroImage: "/natrave-social.png",
    accent: "#0d3b1e",
    accentRgb: "13,59,30",
    resolve:
      "Marcas que publicam sem estratégia. Conteúdo existe, mas não segue uma linha, não tem frequência previsível e não reforça o posicionamento.",
    envolve:
      "Definição de linha editorial, planejamento de conteúdo por canal, criação de diretrizes de tom e voz, direção criativa e produção de peças.",
    recebe: "Uma linha editorial documentada e conteúdo que funciona como sistema de marca.",
    deliverables: [
      { icon: "◉", label: "Linha Editorial" },
      { icon: "◆", label: "Templates Criativos" },
      { icon: "✦", label: "Calendário Mensal" },
      { icon: "▣", label: "Stories & Feed" },
      { icon: "◎", label: "Reels & Vídeos" },
      { icon: "Aa", label: "Tom de Voz" },
    ],
    phases: [
      { num: "01", title: "Diagnóstico", body: "Análise do perfil atual, benchmarking de mercado e identificação de oportunidades de posicionamento." },
      { num: "02", title: "Estratégia", body: "Definição de linha editorial, personas, pilares de conteúdo e frequência de publicação." },
      { num: "03", title: "Produção", body: "Criação de templates, produção de conteúdo alinhado à identidade visual e copywriting." },
      { num: "04", title: "Gestão", body: "Publicação, análise de métricas e refinamento contínuo da estratégia." },
    ],
    gallery: [
      { src: "/natrave-social.png", caption: "Social Media NaTrave" },
      { src: "/natrave-marca.png", caption: "Marca NaTrave" },
    ],
  },
  {
    id: "midia-impressa",
    title: "Mídia Impressa",
    subtitle: "Print Design",
    description: "Design editorial e materiais físicos que carregam a força da sua marca para o mundo tangível.",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    accent: "#2d1b00",
    accentRgb: "45,27,0",
    resolve:
      "Marcas que precisam de presença física mas não têm materiais de comunicação que estejam à altura da sua identidade digital.",
    envolve:
      "Criação de catálogos, folders, flyers, papelaria corporativa, embalagens, banners e qualquer material impresso que a marca precise.",
    recebe: "Arquivos prontos para impressão em todos os formatos necessários, com perfeita aderência à identidade de marca.",
    deliverables: [
      { icon: "▣", label: "Catálogos & Folders" },
      { icon: "◉", label: "Papelaria Corporativa" },
      { icon: "◆", label: "Embalagens" },
      { icon: "✦", label: "Banners & Displays" },
      { icon: "◎", label: "Arquivos de Impressão" },
      { icon: "Aa", label: "Editorial & Revistas" },
    ],
    phases: [
      { num: "01", title: "Briefing", body: "Entendemos o objetivo da peça, o canal de distribuição, o público e as especificações técnicas de impressão." },
      { num: "02", title: "Conceituação", body: "Desenvolvimento do conceito visual alinhado à identidade de marca e ao objetivo comunicacional." },
      { num: "03", title: "Diagramação", body: "Criação das peças com atenção a tipografia, grid editorial, hierarquia visual e linguagem fotográfica." },
      { num: "04", title: "Arte-Final", body: "Preparação técnica dos arquivos para impressão: sangria, CMYK, perfis de cor e formatos necessários." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", caption: "Design Editorial" },
      { src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80", caption: "Papelaria Corporativa" },
    ],
  },
  {
    id: "midia-ooh",
    title: "Mídia OOH",
    subtitle: "Out-of-Home",
    description: "Comunicação de impacto nos ambientes urbanos — outdoor, busdoor, painéis e mídia de rua.",
    heroImage: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=1200&q=80",
    accent: "#1a0a2e",
    accentRgb: "26,10,46",
    resolve:
      "Marcas que querem ampliar presença física mas não têm materiais de OOH que funcionem nos formatos e distâncias de leitura da mídia exterior.",
    envolve:
      "Planejamento criativo para mídia exterior, adaptação de identidade para formatos OOH, criação de peças para outdoor, busdoor, metrô, shopping e outros suportes.",
    recebe: "Peças prontas para cada formato de mídia com especificações técnicas dos veículos.",
    deliverables: [
      { icon: "▣", label: "Outdoor & Painéis" },
      { icon: "◉", label: "Busdoor & Transit" },
      { icon: "◆", label: "Mídia de Shopping" },
      { icon: "✦", label: "Adaptações por Formato" },
      { icon: "◎", label: "Mockups de Apresentação" },
      { icon: "Aa", label: "Campanhas Integradas" },
    ],
    phases: [
      { num: "01", title: "Estratégia de Mídia", body: "Definição dos formatos, locais e contextos de leitura das peças para garantir eficiência comunicacional." },
      { num: "02", title: "Conceito Criativo", body: "Desenvolvimento de conceito que funcione com leitura rápida, distância variável e contexto urbano." },
      { num: "03", title: "Criação & Adaptação", body: "Desenvolvimento das peças em todos os formatos necessários mantendo consistência de mensagem e identidade." },
      { num: "04", title: "Entrega Técnica", body: "Arte-final com especificações de cada veículo de mídia, resolução e perfis de cor para impressão em larga escala." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80", caption: "Painel Urbano" },
      { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", caption: "Mídia Exterior" },
    ],
  },
  {
    id: "estruturacao-de-marca",
    title: "Estruturação de Marca",
    subtitle: "Branding",
    description: "Para marcas que cresceram sem base. Posicionamento, identidade e brandbook conectados em sistema.",
    heroImage: "/hero-brandding.jpg",
    accent: "#252422",
    accentRgb: "37,36,34",
    resolve:
      "Marcas que cresceram pela qualidade do serviço mas cuja comunicação ainda não sustenta o nível que entregam.",
    envolve:
      "Diagnóstico estratégico, posicionamento de marca, construção de identidade visual completa e brandbook documentado.",
    recebe: "Uma marca estruturada que comunica no nível do que entrega.",
    deliverables: [
      { icon: "◉", label: "Posicionamento" },
      { icon: "◆", label: "Identidade Visual" },
      { icon: "Aa", label: "Tom de Voz" },
      { icon: "▣", label: "Brandbook" },
      { icon: "◎", label: "Arquivos Fonte" },
      { icon: "✦", label: "Manual de Marca" },
    ],
    phases: [
      { num: "01", title: "Diagnóstico", body: "Análise profunda da marca atual, mercado, concorrência e percepção dos clientes." },
      { num: "02", title: "Estratégia", body: "Definição de posicionamento, proposta de valor, arquitetura de marca e plataforma de comunicação." },
      { num: "03", title: "Identidade", body: "Construção do sistema visual: logo, cores, tipografia e todos os elementos da identidade." },
      { num: "04", title: "Documentação", body: "Brandbook completo com todos os componentes e diretrizes de uso da marca." },
    ],
    gallery: [
      { src: "/hero-brandding.jpg", caption: "Branding Symplice" },
      { src: "/solid-full.png", caption: "Branding Solid+" },
    ],
  },
  {
    id: "sistema-de-conteudo",
    title: "Sistema de Conteúdo",
    subtitle: "Conteúdo",
    description: "Linha editorial que transforma presença digital em algo previsível, consistente e alinhado à marca.",
    heroImage: "/natrave-social.png",
    accent: "#0d3b1e",
    accentRgb: "13,59,30",
    resolve:
      "Marcas que publicam sem estratégia. Conteúdo existe, mas não segue uma linha e não reforça o posicionamento.",
    envolve:
      "Definição de linha editorial, planejamento de conteúdo por canal, criação de diretrizes de tom e voz e direção criativa.",
    recebe: "Uma linha editorial documentada e um sistema de produção que se sustenta.",
    deliverables: [
      { icon: "◉", label: "Linha Editorial" },
      { icon: "◆", label: "Guia de Tom de Voz" },
      { icon: "Aa", label: "Templates Visuais" },
      { icon: "▣", label: "Calendário de Conteúdo" },
      { icon: "◎", label: "Diretrizes por Canal" },
      { icon: "✦", label: "Primeiros Ciclos" },
    ],
    phases: [
      { num: "01", title: "Imersão", body: "Análise da comunicação atual, benchmarking e entendimento do público e do objetivo de negócio." },
      { num: "02", title: "Estratégia Editorial", body: "Definição de pilares de conteúdo, formatos, frequência e distribuição por canal." },
      { num: "03", title: "Criação do Sistema", body: "Templates, guia de linguagem, banco de referências e estrutura de produção." },
      { num: "04", title: "Ativação", body: "Primeiros ciclos de conteúdo com acompanhamento e ajustes estratégicos." },
    ],
    gallery: [
      { src: "/natrave-social.png", caption: "Sistema de Conteúdo NaTrave" },
    ],
  },
  {
    id: "presenca-digital",
    title: "Presença Digital",
    subtitle: "Web & Digital",
    description: "Site que organiza a comunicação, melhora percepção de valor e facilita a conversão.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    accent: "#1a1a2e",
    accentRgb: "26,26,46",
    resolve:
      "Marcas que não são bem apresentadas online. O site não comunica valor e a conversão depende de sorte.",
    envolve:
      "Estratégia de conteúdo para web, wireframe, direção de UX/UI, copywriting e implementação com foco em performance.",
    recebe: "Um site que organiza a comunicação e facilita a conversão.",
    deliverables: [
      { icon: "◉", label: "Estratégia Web" },
      { icon: "◆", label: "Wireframes" },
      { icon: "Aa", label: "UX/UI Design" },
      { icon: "▣", label: "Copywriting" },
      { icon: "◎", label: "Desenvolvimento" },
      { icon: "✦", label: "SEO & Performance" },
    ],
    phases: [
      { num: "01", title: "Estratégia", body: "Definição de objetivos, jornada do usuário, arquitetura de informação e hierarquia de conteúdo." },
      { num: "02", title: "UX Design", body: "Wireframes, prototipagem e validação da jornada de navegação." },
      { num: "03", title: "UI & Copywriting", body: "Interface visual alinhada à marca, textos orientados à conversão e experiência de usuário refinada." },
      { num: "04", title: "Desenvolvimento", body: "Implementação com foco em performance, SEO técnico e responsividade." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", caption: "Presença Digital" },
    ],
  },
  {
    id: "marketing-de-influencia",
    title: "Marketing de Influência",
    subtitle: "Influencer Marketing",
    description: "Estratégia de parcerias com influenciadores que amplificam a marca com autenticidade e precisão.",
    heroImage: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80",
    accent: "#2d0a1a",
    accentRgb: "45,10,26",
    resolve:
      "Marcas que querem alcance orgânico e credibilidade através de vozes que o público já confia.",
    envolve:
      "Mapeamento de influenciadores, estratégia de parceria, briefing criativo, acompanhamento de produção e análise de resultados.",
    recebe: "Campanhas com influenciadores alinhados à marca e relatório de performance.",
    deliverables: [
      { icon: "◉", label: "Mapeamento de Creators" },
      { icon: "◆", label: "Estratégia de Parceria" },
      { icon: "Aa", label: "Briefing Criativo" },
      { icon: "▣", label: "Curadoria de Conteúdo" },
      { icon: "◎", label: "Gestão de Campanha" },
      { icon: "✦", label: "Relatório de Performance" },
    ],
    phases: [
      { num: "01", title: "Mapeamento", body: "Identificação e análise de influenciadores alinhados à marca, público e objetivos de campanha." },
      { num: "02", title: "Estratégia", body: "Definição de formato de parceria, investimento, expectativas e métricas de sucesso." },
      { num: "03", title: "Ativação", body: "Briefing criativo, coordenação de produção e garantia de alinhamento com a identidade da marca." },
      { num: "04", title: "Análise", body: "Monitoramento de resultados, análise de engajamento e relatório final com aprendizados." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80", caption: "Marketing de Influência" },
      { src: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800&q=80", caption: "Campanhas Digitais" },
    ],
  },
];

function ServicoPage() {
  const { id } = Route.useParams();
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servico = servicos.find((s) => s.id === id);

  if (!servico) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="container-site text-center">
          <h1 className="mb-8">Serviço não encontrado</h1>
          <Link to="/" className="btn btn-arrow">
            Voltar ao início <span className="arrow" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={revealRef}>
      {/* Hero */}
      <section
        className="min-h-screen flex items-end pb-20 relative overflow-hidden"
        style={{ backgroundColor: servico.accent }}
      >
        {/* Parallax image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            backgroundImage: `url(${servico.heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
          }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to top, ${servico.accent} 50%, rgba(${servico.accentRgb},0.5) 100%)`,
          }}
        />

        <div className="container-site relative z-20 w-full">
          <div className="max-w-[900px]">
            <span className="text-[10px] font-mono uppercase tracking-tight mb-6 block text-white/50">
              Serviço — {servico.subtitle}
            </span>
            <h1 className="anim-fade-in text-white" style={{ lineHeight: 0.88 }}>
              {servico.title}
            </h1>
            <p className="mt-8 text-xl lg:text-2xl font-medium anim-fade-in delay-250 text-white/70 max-w-[600px]">
              {servico.description}
            </p>
          </div>
        </div>
      </section>

      {/* O Problema */}
      <section className="section-spacing border-b border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">O que resolve</span>
            </div>
            <div className="lg:col-span-8">
              <p className="scroll-reveal text-2xl lg:text-4xl font-bold line-height-tight tracking-tight uppercase">
                {servico.resolve}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O Processo */}
      <section className="section-spacing border-b border-border">
        <div className="container-site">
          <div className="flex items-center justify-between mb-16">
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">Como funciona</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servico.phases.map((phase, i) => (
              <div key={i} className="scroll-reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="text-[10px] font-mono uppercase tracking-tight text-secondary mb-6 block">{phase.num}</span>
                <div
                  className="w-full h-[1px] mb-6"
                  style={{ backgroundColor: "var(--border)" }}
                />
                <h4 className="text-lg font-bold uppercase mb-4">{phase.title}</h4>
                <p className="text-sm text-secondary leading-relaxed">{phase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-spacing border-b border-border" style={{ backgroundColor: "var(--foreground)" }}>
        <div className="container-site">
          <div className="flex items-center justify-between mb-16">
            <span className="text-[10px] font-mono uppercase tracking-tight text-background/50">O que você recebe</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {servico.deliverables.map((d, i) => (
              <div
                key={i}
                className="scroll-reveal border border-background/10 p-6 flex items-center gap-4"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="text-2xl text-background/20">{d.icon}</span>
                <span className="text-sm font-medium uppercase tracking-tight text-background/80">{d.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-12 border-t border-background/10">
            <p className="text-xl lg:text-2xl font-bold uppercase text-background/80 max-w-[700px]">
              {servico.envolve}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {servico.gallery.length > 0 && (
        <section className="section-spacing border-b border-border">
          <div className="container-site">
            <div className="flex items-center justify-between mb-12">
              <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">Referências Visuais</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servico.gallery.map((item, i) => (
                <div key={i} className="scroll-reveal" style={{ transitionDelay: `${i * 150}ms` }}>
                  <figure className="project-card">
                    <div className="media-wrap" style={{ aspectRatio: "4/3" }}>
                      <img
                        src={item.src}
                        alt={item.caption}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="mt-4">
                      <span className="card-label">{servico.subtitle}</span>
                      <span className="font-bold text-lg uppercase leading-tight block">{item.caption}</span>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-tight text-secondary mb-6 block">Próximo passo</span>
              <h2 className="uppercase">
                Vamos estruturar<br />
                <span className="text-secondary font-medium">sua marca?</span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/trabalho" className="btn btn-secondary">Ver trabalhos</Link>
              <Link to="/contato" className="btn btn-primary">Falar comigo</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
