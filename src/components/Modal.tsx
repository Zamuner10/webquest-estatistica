import { useEffect, useRef } from 'react';
import { areas, maps, Overlay, videos } from '../data/content';
import { MindMap } from './MindMap';
import { TopicVisual } from './TopicVisual';

export function Modal({ overlay, close }: { overlay: NonNullable<Overlay>; close: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const title =
    overlay.kind === 'video'
      ? videos[overlay.index].title
      : overlay.kind === 'area'
      ? areas[overlay.index].name
      : maps[overlay.index].name;

  useEffect(() => {
    const previous = document.activeElement as HTMLElement;
    ref.current?.focus();
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'Tab') {
        const items = ref.current?.querySelectorAll<HTMLElement>('button, iframe, [href]');
        if (!items?.length) return;
        const first = items[0],
          last = items[items.length - 1];
        if (event.shiftKey && (document.activeElement === first || document.activeElement === ref.current)) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
      previous?.focus();
    };
  }, [close]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-xl md:p-10" onClick={close}>
      <div
        ref={ref}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/15 bg-[#141a15] p-5 shadow-2xl outline-none md:p-9"
        onClick={e => e.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between gap-5">
          <h2 id="dialog-title" className="text-2xl font-medium">
            {title}
          </h2>
          <button
            onClick={close}
            aria-label="Fechar janela"
            className="min-h-11 min-w-11 rounded-full border border-white/20 text-2xl hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-lime-200"
          >
            ×
          </button>
        </div>

        {overlay.kind === 'video' && (
          <>
            <iframe
              className="aspect-video w-full rounded-lg bg-black"
              src={`https://www.youtube.com/embed/${videos[overlay.index].id}?autoplay=1&rel=0`}
              title={title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-stone-300">
              <p>Vídeo hospedado no YouTube. A reprodução requer conexão com a internet.</p>
              <a
                href={`https://www.youtube.com/watch?v=${videos[overlay.index].id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[#c8ec91]/40 px-3 py-1.5 text-xs font-medium text-[#c8ec91] hover:bg-[#c8ec91]/10"
              >
                Abrir direto no YouTube ↗
              </a>
            </div>
          </>
        )}

        {overlay.kind === 'area' && (
          <div className="py-2 md:px-4">
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-serif text-5xl" style={{ color: areas[overlay.index].color }}>
                {areas[overlay.index].icon}
              </span>
              <div className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 font-mono text-sm md:text-base" style={{ color: areas[overlay.index].color }}>
                {areas[overlay.index].formula}
              </div>
            </div>

            <p className="my-5 text-base leading-relaxed text-stone-300">{areas[overlay.index].detail}</p>

            <div className="rounded-xl border border-[#c8ec91]/20 bg-[#c8ec91]/5 p-5">
              <p className="mb-2 text-xs tracking-wider uppercase text-[#c8ec91]">{areas[overlay.index].example}</p>
              <p className="break-words font-mono text-base md:text-xl text-[#f0f1e9]">{areas[overlay.index].result}</p>
            </div>

            <TopicVisual type={areas[overlay.index].visual} color={areas[overlay.index].color} />
          </div>
        )}

        {overlay.kind === 'map' && (
          <div>
            <MindMap index={overlay.index} full />
            <p className="mt-2 text-center text-sm text-stone-300">{maps[overlay.index].summary}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {maps[overlay.index].items.map(item => (
                <div key={item.topic} className="rounded-xl border border-white/10 bg-[#1a221a] p-5">
                  <h3 className="text-base font-medium" style={{ color: maps[overlay.index].color }}>
                    {item.topic}
                  </h3>
                  <p className="mt-2 rounded bg-black/40 px-3 py-2 font-mono text-xs text-[#f0f1e9]">{item.formula}</p>
                  <p className="mt-3 text-sm leading-6 text-stone-300">{item.explanation}</p>
                  <p className="mt-3 border-t border-white/10 pt-2.5 text-xs text-[#b9c0b5]">
                    <strong className="text-[#c8ec91]">Exemplo:</strong> {item.example}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}