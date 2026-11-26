import { useEffect, useRef, useState } from 'react';
import { areas, maps, Overlay, videos } from './data/content';
import { Arrow, MathArt } from './components/MathArt';
import { MindMap } from './components/MindMap';
import { Modal } from './components/Modal';

export default function App() {
  const [page, setPage] = useState(location.hash === '#mind-maps' ? 'maps' : 'home');
  const [overlay, setOverlay] = useState<Overlay>(null);
  const [menu, setMenu] = useState(false);
  const rail = useRef<HTMLDivElement>(null);
  const topicsRail = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      setPage(location.hash === '#mind-maps' ? 'maps' : 'home');
      setMenu(false);
    };
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);

  function navigate(mapsPage: boolean, section?: string) {
    location.hash = mapsPage ? 'mind-maps' : section || 'home';
    setPage(mapsPage ? 'maps' : 'home');
    setMenu(false);
    setTimeout(
      () =>
        section
          ? document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
          : window.scrollTo({ top: 0, behavior: 'smooth' }),
      40
    );
  }

  const button =
    'inline-flex min-h-11 items-center justify-center gap-3 rounded-md px-5 text-sm font-medium transition focus-visible:ring-2 focus-visible:ring-[#c8ec91]';

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#101510] font-sans text-[#f0f1e9] selection:bg-[#c8ec91] selection:text-[#101510]">
      <header className="border-b border-white/10">
        <div className="mx-auto flex h-23 max-w-[1320px] items-center justify-between px-6 md:px-12">
          <a href="#home" onClick={() => navigate(false)} className="flex min-h-11 items-center gap-2.5 text-xl font-semibold tracking-tight">
            <span className="font-serif text-4xl text-[#c8ec91]">∑</span> WebQuest <span className="text-[#c8ec91]">Estatística</span>
            <span className="ml-1 mt-1 h-1.5 w-1.5 rounded-full bg-[#c8ec91]" />
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center gap-9 text-sm md:flex">
            <button onClick={() => navigate(false)} className={`min-h-11 ${page === 'home' ? 'text-[#c8ec91]' : 'text-stone-300'}`}>
              Visão geral
            </button>
            <button onClick={() => navigate(false, 'explore')} className="min-h-11 text-stone-300">
              Explorar tópicos
            </button>
            <button onClick={() => navigate(true)} className={`min-h-11 ${page === 'maps' ? 'text-[#c8ec91]' : 'text-stone-300'}`}>
              Mapas mentais
            </button>
            <button onClick={() => navigate(false, 'about')} className="min-h-11 text-stone-300">
              Sobre o projeto
            </button>
          </nav>

          <button
            onClick={() => navigate(false, 'explore')}
            className={`${button} hidden border border-[#c8ec91]/45 text-[#c8ec91] hover:bg-[#c8ec91]/10 lg:flex`}
          >
            Vamos explorar <Arrow diagonal />
          </button>

          <button aria-label="Abrir menu" aria-expanded={menu} onClick={() => setMenu(!menu)} className="min-h-11 min-w-11 text-2xl md:hidden">
            ☰
          </button>
        </div>

        {menu && (
          <nav className="flex flex-col gap-2 border-t border-white/10 p-5 md:hidden">
            {['Visão geral', 'Explorar tópicos', 'Mapas mentais', 'Sobre o projeto'].map((label, i) => (
              <button
                key={label}
                className="min-h-11 text-left"
                onClick={() => navigate(i === 2, i === 1 ? 'explore' : i === 3 ? 'about' : undefined)}
              >
                {label}
              </button>
            ))}
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-[1320px] px-6 md:px-12">
        {page === 'home' ? (
          <>
            <section className="relative grid min-h-[540px] items-center gap-4 border-b border-white/10 py-14 md:grid-cols-[1.05fr_1fr] md:py-16">
              <div className="relative z-10">
                <p className="mb-6 flex items-center gap-2.5 text-xs font-medium tracking-[.18em] text-[#c8ec91]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c8ec91]" /> UM POUCO DE CURIOSIDADE. INFINITAS POSSIBILIDADES.
                </p>
                <h1 className="text-5xl leading-[1.08] font-medium tracking-[-.055em] lg:text-[72px]">
                  Não são só números.
                  <br />
                  Um jeito novo de
                  <br />
                  <span className="font-serif italic text-[#c8ec91]">enxergar o mundo.</span>
                </h1>
                <p className="mt-6 max-w-md text-base leading-7 text-[#b9c0b5]">
                  Matemática é a linguagem dos padrões. Estatística é como damos sentido a eles. Vamos conectar os pontos, uma ideia de cada vez.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button onClick={() => navigate(false, 'explore')} className={`${button} bg-[#c8ec91] text-[#182012] hover:bg-[#dcf8b0]`}>
                    Começar a explorar <Arrow />
                  </button>
                  <button onClick={() => navigate(true)} className={`${button} border border-white/20 hover:bg-white/5`}>
                    Descobrir mapas mentais <span className="text-lg">⌘</span>
                  </button>
                </div>
                <p className="mt-7 flex items-center gap-2 text-xs text-[#b9c0b5]">
                  <span className="text-[#c8ec91]">✧</span> Feito para mentes curiosas. Pensado para a vida universitária.
                </p>
              </div>
              <div className="relative mx-auto h-[300px] w-full max-w-xl md:h-[420px]">
                <MathArt hero />
                <div className="absolute right-4 bottom-6 rounded-md border border-white/10 bg-[#1b231b]/80 px-4 py-2.5 font-mono text-xs text-stone-300 backdrop-blur-md">
                  <span className="mr-3 text-[#c8ec91]">↗</span> Tudo está conectado.
                </div>
              </div>
            </section>

            <section className="grid gap-7 border-b border-white/10 py-11 md:grid-cols-[.8fr_1fr_1fr] md:gap-10">
              <div>
                <p className="mb-3 text-xs tracking-[.17em] text-[#b9c0b5]">PRIMEIRO, A GRANDE IDEIA</p>
                <h2 className="text-3xl font-medium tracking-tight">
                  Mais que uma matéria.
                  <br />
                  Uma forma de pensar.
                </h2>
              </div>
              <div className="md:border-l md:border-white/10 md:pl-9">
                <h3 className="mb-3 flex items-center gap-3 text-base font-medium">
                  <span className="font-serif text-2xl text-[#c8ec91]">∞</span> O que é matemática?
                </h3>
                <p className="text-sm leading-6 text-[#b9c0b5]">
                  O estudo de padrões, estruturas e relações. Ela nos ajuda a pensar logicamente, resolver problemas e descrever o mundo ao nosso redor.
                </p>
              </div>
              <div className="md:border-l md:border-white/10 md:pl-9">
                <h3 className="mb-3 flex items-center gap-3 text-base font-medium">
                  <span className="font-serif text-2xl text-[#baa8ec]">σ</span> E onde a estatística entra?
                </h3>
                <p className="text-sm leading-6 text-[#b9c0b5]">
                  Ela dá vida aos dados. Ao coletar, analisar e interpretar informações, a estatística nos ajuda a tomar decisões fundamentadas em um mundo incerto.
                </p>
              </div>
            </section>

            <section className="py-12" id="watch">
              <div className="mb-7 flex items-end justify-between gap-4">
                <div>
                  <p className="mb-3 text-xs tracking-[.17em] text-[#c8ec91]">DÊ PLAY NA SUA CURIOSIDADE</p>
                  <h2 className="text-3xl font-medium tracking-tight">Aulas completas. Conteúdo direto.</h2>
                  <p className="mt-2 text-sm text-[#b9c0b5]">Uma nova perspectiva às vezes está a apenas um vídeo de distância.</p>
                </div>
                <div className="flex gap-2">
                  {[true, false].map(left => (
                    <button
                      key={String(left)}
                      aria-label={left ? 'Vídeos anteriores' : 'Próximos vídeos'}
                      onClick={() => rail.current?.scrollBy({ left: (left ? -1 : 1) * 390, behavior: 'smooth' })}
                      className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/20 hover:border-[#c8ec91] focus-visible:ring-2 focus-visible:ring-[#c8ec91]"
                    >
                      <Arrow left={left} />
                    </button>
                  ))}
                </div>
              </div>

              <div ref={rail} className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none]">
                {videos.map((video, i) => (
                  <button
                    key={video.title}
                    onClick={() => setOverlay({ kind: 'video', index: i })}
                    className="group w-[85%] shrink-0 snap-start overflow-hidden rounded-xl border border-white/10 bg-[#171e17] text-left transition hover:border-[#c8ec91]/50 focus-visible:ring-2 focus-visible:ring-[#c8ec91] md:w-[calc((100%-40px)/3)]"
                  >
                    <div className="relative h-44 overflow-hidden bg-[#1c251e]">
                      <MathArt kind={video.art} color={video.color} />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-[#111810]/60 text-white backdrop-blur-sm transition group-hover:scale-110">
                          <svg viewBox="0 0 24 24" className="ml-1 h-5 w-5" fill="currentColor" aria-hidden="true">
                            <path d="m8 5 11 7-11 7z" />
                          </svg>
                        </span>
                      </span>
                      <span className="absolute right-3 bottom-3 rounded bg-black/70 px-2 py-1 text-xs">{video.duration}</span>
                    </div>
                    <div className="p-5">
                      <p className="mb-2 text-xs tracking-widest" style={{ color: video.color }}>
                        {video.category}
                      </p>
                      <h3 className="text-base font-medium">{video.title}</h3>
                      <p className="mt-3 flex items-center gap-2 text-xs text-[#b9c0b5]">
                        Assistir aula <Arrow diagonal />
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            <section id="explore" className="border-t border-white/10 py-12">
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="mb-3 text-xs tracking-[.17em] text-[#c8ec91]">EMENTA COMPLETA · FÓRMULAS E GRÁFICOS</p>
                  <h2 className="text-3xl font-medium tracking-tight">Um universo. Vários caminhos.</h2>
                </div>
                <div className="flex items-center gap-4">
                  <p className="hidden max-w-xs text-sm leading-6 text-[#b9c0b5] lg:block">
                    Role para o lado e clique em um tópico para abrir a fórmula completa, exemplos e tabelas.
                  </p>
                  <div className="flex gap-2">
                    {[true, false].map(left => (
                      <button
                        key={String(left)}
                        aria-label={left ? 'Tópicos anteriores' : 'Próximos tópicos'}
                        onClick={() => topicsRail.current?.scrollBy({ left: (left ? -1 : 1) * 340, behavior: 'smooth' })}
                        className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/20 hover:border-[#c8ec91] focus-visible:ring-2 focus-visible:ring-[#c8ec91]"
                      >
                        <Arrow left={left} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div ref={topicsRail} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none]">
                {areas.map((area, i) => (
                  <button
                    key={area.name}
                    onClick={() => setOverlay({ kind: 'area', index: i })}
                    className="group flex min-h-68 w-[80%] shrink-0 snap-start flex-col rounded-xl border border-white/10 bg-[#171d17] p-5 text-left transition hover:-translate-y-1 hover:border-white/30 focus-visible:ring-2 focus-visible:ring-[#c8ec91] sm:w-[46%] lg:w-[calc((100%-64px)/5)]"
                  >
                    <span className="mb-4 font-serif text-3xl" style={{ color: area.color }}>
                      {area.icon}
                    </span>
                    <h3 className="mb-2 text-lg font-medium">{area.name}</h3>
                    <p className="text-sm leading-6 text-[#b9c0b5]">{area.text}</p>
                    <span className="mt-auto flex w-full items-center justify-between pt-6 text-xs" style={{ color: area.color }}>
                      Ver fórmula e gráfico <Arrow diagonal />
                    </span>
                  </button>
                ))}
              </div>
            </section>
          </>
        ) : (
          <section className="py-16">
            <button onClick={() => navigate(false)} className={`${button} mb-9 border border-white/20`}>
              <Arrow left /> Voltar para visão geral
            </button>
            <p className="mb-4 text-xs tracking-[.17em] text-[#c8ec91]">MENOS DECOREBA. MAIS CONEXÃO.</p>
            <h1 className="text-5xl font-medium tracking-tight">
              Veja as <span className="font-serif italic text-[#c8ec91]">conexões.</span>
            </h1>
            <p className="mt-5 max-w-xl leading-7 text-[#b9c0b5]">
              Seis mapas mentais completos cobrindo toda a disciplina. Abra um mapa para ver o diagrama, todas as fórmulas explicadas e exemplos resolvidos.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {maps.map((map, i) => (
                <button
                  key={map.name}
                  onClick={() => setOverlay({ kind: 'map', index: i })}
                  className="overflow-hidden rounded-xl border border-white/10 bg-[#171e17] text-left transition hover:border-[#c8ec91]/50 focus-visible:ring-2 focus-visible:ring-[#c8ec91]"
                >
                  <MindMap index={i} />
                  <div className="border-t border-white/10 p-6">
                    <p className="mb-2 text-xs tracking-widest" style={{ color: map.color }}>
                      {map.tag}
                    </p>
                    <h2 className="flex items-center justify-between gap-4 text-xl">
                      {map.name}
                      <Arrow diagonal />
                    </h2>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {page === 'home' && (
          <section className="relative my-4 flex flex-col items-start justify-between gap-7 overflow-hidden rounded-xl border border-[#c8ec91]/20 bg-[#1c261a] p-8 md:flex-row md:items-center md:p-10">
            <div>
              <p className="mb-3 text-xs tracking-[.17em] text-[#c8ec91]">ABRA ESPAÇO PARA O TODO</p>
              <h2 className="text-3xl font-medium tracking-tight">
                As ideias fixam quando você <span className="font-serif italic text-[#c8ec91]">conecta os pontos.</span>
              </h2>
              <p className="mt-3 text-sm text-[#bec7b7]">Explore seis mapas mentais visuais com fórmulas e exemplos. Menos decoreba, mais compreensão.</p>
            </div>
            <button onClick={() => navigate(true)} className={`${button} shrink-0 bg-[#c8ec91] text-[#192015] hover:bg-[#dcf8b0]`}>
              Explorar mapas mentais <Arrow diagonal />
            </button>
          </section>
        )}

<section id="about" className="grid items-center gap-9 py-16 md:grid-cols-[.85fr_1.15fr]">
          <div className="flex items-start gap-5">
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border border-[#c8ec91]/25 bg-[#20291e]">
              <img src="/vinicius.jpg" alt="Vinicius Klocke Zamuner" className="h-full w-full object-cover" />
            </div>
            <div className="space-y-1 text-sm">
              <p className="text-base font-medium text-[#f0f1e9]">
                <span className="text-[#c8ec91]">Autor:</span> Vinicius Klocke Zamuner
              </p>
              <p className="text-stone-300">
                <span className="font-medium text-[#c8ec91]">Professor:</span> Luciano Condori
              </p>
              <p className="pt-1 text-xs leading-5 text-[#b9c0b5]">
                4º semestre de Desenvolvimento de Software Multiplataforma — FATEC Osasco
              </p>
              <span className="mt-2 inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-[#c8ec91]">
                Aula: Estatística Aplicada
              </span>
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs tracking-[.17em] text-[#c8ec91]">A IDEIA POR TRÁS DO WEBQUEST ESTATÍSTICA</p>
            <h2 className="mb-4 text-2xl font-medium tracking-tight">Aprender faz mais sentido quando compartilhamos.</h2>
            <p className="text-sm leading-7 text-[#b9c0b5]">
              O WebQuest Estatística é um projeto acadêmico desenvolvido na FATEC Osasco sobre uma ideia simples: a matemática e a estatística devem ser acessíveis, visuais e conectadas à vida real. Um espaço para revisitar os fundamentos, seguir sua curiosidade e descobrir que você entende mais do que imagina.
            </p>
          </div>
        </section>
      </main>

<footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-5 px-6 py-7 text-xs text-[#b9c0b5] md:flex-row md:items-center md:px-12">
          <p>
            © {new Date().getFullYear()} WebQuest Estatística · Autor: Vinicius Klocke Zamuner{' '}
            <span className="mx-1.5 text-[#c8ec91]">·</span>
            <a
              href="https://github.com/Zamuner10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c8ec91] underline-offset-4 hover:underline"
            >
              github.com/Zamuner10 ↗
            </a>
          </p>
          <p>4º sem. DSM · FATEC Osasco</p>
          <p>
            Estatística Aplicada <span className="mx-2 text-[#c8ec91]">/</span> Prof. Luciano Condori
          </p>
        </div>
      </footer>

      {overlay && <Modal overlay={overlay} close={() => setOverlay(null)} />}
    </div>
  );
}