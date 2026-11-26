import { VisualType } from '../data/content';

export function TopicVisual({ type, color }: { type?: VisualType; color: string }) {
  if (!type) return null;

  if (type === 'freq-table') {
    const rows = [
      { classe: '10 ⊢ 18', xi: '14', fi: '5', fri: '12,5%', Fi: '5' },
      { classe: '18 ⊢ 26', xi: '22', fi: '10', fri: '25,0%', Fi: '15' },
      { classe: '26 ⊢ 34', xi: '30', fi: '13', fri: '32,5%', Fi: '28' },
      { classe: '34 ⊢ 42', xi: '38', fi: '8', fri: '20,0%', Fi: '36' },
      { classe: '42 ⊢ 50', xi: '46', fi: '4', fri: '10,0%', Fi: '40' },
    ];
    return (
      <div className="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-[#101510] p-4">
        <p className="mb-3 text-xs tracking-widest text-stone-400">TABELA EXEMPLO · DISTRIBUIÇÃO COM INTERVALO DE CLASSES (n = 40, h = 8)</p>
        <table className="w-full text-left text-xs md:text-sm">
          <thead>
            <tr className="border-b border-white/15 text-[#c8ec91]">
              <th className="py-2 pr-3">Classes</th>
              <th className="py-2 px-3">Ponto Médio (xᵢ)</th>
              <th className="py-2 px-3">Freq. Abs. (fᵢ)</th>
              <th className="py-2 px-3">Freq. Rel. (frᵢ)</th>
              <th className="py-2 pl-3">Freq. Acum. (Fᵢ)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-stone-300">
            {rows.map(r => (
              <tr key={r.classe}>
                <td className="py-2 pr-3 font-mono">{r.classe}</td>
                <td className="py-2 px-3 font-mono">{r.xi}</td>
                <td className="py-2 px-3 font-mono">{r.fi}</td>
                <td className="py-2 px-3 font-mono">{r.fri}</td>
                <td className="py-2 pl-3 font-mono">{r.Fi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (type === 'histogram-poly') {
    const bars = [
      { label: '10-18', mid: '14', h: 55, x: 90 },
      { label: '18-26', mid: '22', h: 110, x: 155 },
      { label: '26-34', mid: '30', h: 145, x: 220 },
      { label: '34-42', mid: '38', h: 90, x: 285 },
      { label: '42-50', mid: '46', h: 45, x: 350 },
    ];
    const points = `57,210 ${bars.map(b => `${b.x + 32},${210 - b.h}`).join(' ')} 447,210`;
    return (
      <div className="mt-6 rounded-xl border border-white/10 bg-[#101510] p-4">
        <p className="mb-2 text-xs tracking-widest text-stone-400">GRÁFICO · HISTOGRAMA (BARRAS CONTÍGUAS) + POLÍGONO DE FREQUÊNCIA (LINHA)</p>
        <svg viewBox="0 0 500 250" className="h-56 w-full">
          <line x1="50" y1="210" x2="465" y2="210" stroke="#ffffff" strokeOpacity="0.3" />
          <line x1="50" y1="30" x2="50" y2="210" stroke="#ffffff" strokeOpacity="0.3" />
          {bars.map(b => (
            <g key={b.label}>
              <rect x={b.x} y={210 - b.h} width="65" height={b.h} fill={color} fillOpacity="0.22" stroke={color} strokeWidth="1.5" />
              <text x={b.x + 32} y="228" fill="#b9c0b5" fontSize="11" textAnchor="middle">{b.label}</text>
            </g>
          ))}
          <polyline fill="none" stroke="#f0f1e9" strokeWidth="2.5" points={points} />
          {bars.map(b => (
            <circle key={b.mid} cx={b.x + 32} cy={210 - b.h} r="4.5" fill="#f0f1e9" />
          ))}
        </svg>
      </div>
    );
  }

  if (type === 'central-table') {
    return (
      <div className="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-[#101510] p-4">
        <p className="mb-3 text-xs tracking-widest text-stone-400">COMPARATIVO · MEDIDAS DE TENDÊNCIA CENTRAL</p>
        <table className="w-full text-left text-xs md:text-sm">
          <thead>
            <tr className="border-b border-white/15 text-[#9bcbd8]">
              <th className="py-2 pr-3">Medida</th>
              <th className="py-2 px-3">Fórmula / Regra</th>
              <th className="py-2 pl-3">Quando usar</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-stone-300">
            <tr><td className="py-2 pr-3 font-medium">Média Simples (x̄)</td><td className="py-2 px-3 font-mono">∑xᵢ / n</td><td className="py-2 pl-3">Dados simétricos sem valores extremos</td></tr>
            <tr><td className="py-2 pr-3 font-medium">Média Ponderada (x̄ₚ)</td><td className="py-2 px-3 font-mono">∑(xᵢ·pᵢ) / ∑pᵢ</td><td className="py-2 pl-3">Notas com pesos ou dados agrupados por fᵢ</td></tr>
            <tr><td className="py-2 pr-3 font-medium">Mediana (Md)</td><td className="py-2 px-3 font-mono">Posição (n + 1) / 2</td><td className="py-2 pl-3">Quando há outliers (valores discrepantes)</td></tr>
            <tr><td className="py-2 pr-3 font-medium">Moda (Mo)</td><td className="py-2 px-3 font-mono">Maior frequência (fᵢ)</td><td className="py-2 pl-3">Dados qualitativos ou pico mais comum</td></tr>
          </tbody>
        </table>
      </div>
    );
  }

  if (type === 'dispersion-table') {
    const rows = [
      { xi: '4', diff: '4 − 7 = −3', sq: '(−3)² = 9' },
      { xi: '6', diff: '6 − 7 = −1', sq: '(−1)² = 1' },
      { xi: '8', diff: '8 − 7 = +1', sq: '(+1)² = 1' },
      { xi: '10', diff: '10 − 7 = +3', sq: '(+3)² = 9' },
    ];
    return (
      <div className="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-[#101510] p-4">
        <p className="mb-3 text-xs tracking-widest text-stone-400">PASSO A PASSO · CÁLCULO DOS DESVIOS EM RELAÇÃO À MÉDIA (x̄ = 7)</p>
        <table className="w-full text-left text-xs md:text-sm">
          <thead>
            <tr className="border-b border-white/15 text-[#e7b5c6]">
              <th className="py-2 pr-3">Valor (xᵢ)</th>
              <th className="py-2 px-3">Desvio (xᵢ − x̄)</th>
              <th className="py-2 pl-3">Desvio Quadrático (xᵢ − x̄)²</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-stone-300">
            {rows.map(r => (
              <tr key={r.xi}>
                <td className="py-2 pr-3 font-mono">{r.xi}</td>
                <td className="py-2 px-3 font-mono">{r.diff}</td>
                <td className="py-2 pl-3 font-mono">{r.sq}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (type === 'regression-chart') {
    const pts = [
      { x: 95, y: 185 }, { x: 130, y: 165 }, { x: 175, y: 145 },
      { x: 220, y: 120 }, { x: 270, y: 105 }, { x: 325, y: 78 }, { x: 380, y: 55 },
    ];
    return (
      <div className="mt-6 rounded-xl border border-white/10 bg-[#101510] p-4">
        <p className="mb-2 text-xs tracking-widest text-stone-400">GRÁFICO · DIAGRAMA DE DISPERSÃO E RETA DE REGRESSÃO (ŷ = a + bx)</p>
        <svg viewBox="0 0 460 220" className="h-52 w-full">
          <line x1="55" y1="195" x2="420" y2="195" stroke="#ffffff" strokeOpacity="0.3" />
          <line x1="55" y1="25" x2="55" y2="195" stroke="#ffffff" strokeOpacity="0.3" />
          <line x1="75" y1="190" x2="405" y2="42" stroke={color} strokeWidth="2.5" />
          {pts.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="5" fill="#f0f1e9" />
          ))}
          <text x="330" y="42" fill={color} fontSize="12" fontFamily="monospace">ŷ = a + b·x (r = 0,94)</text>
          <text x="240" y="213" fill="#b9c0b5" fontSize="11" textAnchor="middle">Variável Independente (X)</text>
        </svg>
      </div>
    );
  }

  if (type === 'prob-table') {
    return (
      <div className="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-[#101510] p-4">
        <p className="mb-3 text-xs tracking-widest text-stone-400">TABELA DE CONTINGÊNCIA · PROBABILIDADE CONDICIONAL (BARALHO 52 CARTAS)</p>
        <table className="w-full text-left text-xs md:text-sm">
          <thead>
            <tr className="border-b border-white/15 text-[#baa8ec]">
              <th className="py-2 pr-3">Evento</th>
              <th className="py-2 px-3">Vermelha</th>
              <th className="py-2 px-3">Preta</th>
              <th className="py-2 pl-3">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-stone-300 font-mono">
            <tr><td className="py-2 pr-3 font-sans">Ás</td><td className="py-2 px-3">2</td><td className="py-2 px-3">2</td><td className="py-2 pl-3">4</td></tr>
            <tr><td className="py-2 pr-3 font-sans">Não Ás</td><td className="py-2 px-3">24</td><td className="py-2 px-3">24</td><td className="py-2 pl-3">48</td></tr>
            <tr className="text-[#baa8ec]"><td className="py-2 pr-3 font-sans font-medium">Total</td><td className="py-2 px-3">26</td><td className="py-2 px-3">26</td><td className="py-2 pl-3">52</td></tr>
          </tbody>
        </table>
      </div>
    );
  }

  if (type === 'va-discrete-table') {
    return (
      <div className="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-[#101510] p-4">
        <p className="mb-3 text-xs tracking-widest text-stone-400">DISTRIBUIÇÃO DE PROBABILIDADE · X = NÚMERO DE CARAS EM 2 MOEDAS</p>
        <table className="w-full text-left text-xs md:text-sm">
          <thead>
            <tr className="border-b border-white/15 text-[#e9b58f]">
              <th className="py-2 pr-3">xᵢ</th>
              <th className="py-2 px-3">P(X = xᵢ)</th>
              <th className="py-2 px-3">xᵢ · P(xᵢ)</th>
              <th className="py-2 pl-3">xᵢ² · P(xᵢ)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-stone-300 font-mono">
            <tr><td className="py-2 pr-3">0</td><td className="py-2 px-3">0,25</td><td className="py-2 px-3">0,00</td><td className="py-2 pl-3">0,00</td></tr>
            <tr><td className="py-2 pr-3">1</td><td className="py-2 px-3">0,50</td><td className="py-2 px-3">0,50</td><td className="py-2 pl-3">0,50</td></tr>
            <tr><td className="py-2 pr-3">2</td><td className="py-2 px-3">0,25</td><td className="py-2 px-3">0,50</td><td className="py-2 pl-3">1,00</td></tr>
            <tr className="text-[#e9b58f]"><td className="py-2 pr-3">Soma</td><td className="py-2 px-3">1,00</td><td className="py-2 px-3">E(X)=1,0</td><td className="py-2 pl-3">E(X²)=1,5</td></tr>
          </tbody>
        </table>
      </div>
    );
  }

  if (type === 'binomial-chart' || type === 'poisson-chart') {
    const probs =
      type === 'binomial-chart'
        ? [
            { k: 'k=0', p: '6,25%', h: 25 },
            { k: 'k=1', p: '25,0%', h: 95 },
            { k: 'k=2', p: '37,5%', h: 145 },
            { k: 'k=3', p: '25,0%', h: 95 },
            { k: 'k=4', p: '6,25%', h: 25 },
          ]
        : [
            { k: 'k=0', p: '5,0%', h: 25 },
            { k: 'k=1', p: '14,9%', h: 72 },
            { k: 'k=2', p: '22,4%', h: 115 },
            { k: 'k=3', p: '22,4%', h: 115 },
            { k: 'k=4', p: '16,8%', h: 82 },
            { k: 'k=5', p: '10,1%', h: 48 },
          ];
    return (
      <div className="mt-6 rounded-xl border border-white/10 bg-[#101510] p-4">
        <p className="mb-2 text-xs tracking-widest text-stone-400">
          {type === 'binomial-chart' ? 'GRÁFICO · DISTRIBUIÇÃO BINOMIAL B(n=4, p=0,5)' : 'GRÁFICO · DISTRIBUIÇÃO DE POISSON (λ = 3)'}
        </p>
        <svg viewBox="0 0 460 210" className="h-48 w-full">
          <line x1="40" y1="175" x2="430" y2="175" stroke="#ffffff" strokeOpacity="0.3" />
          {probs.map((item, i) => {
            const x = 60 + i * 62;
            return (
              <g key={item.k}>
                <rect x={x} y={175 - item.h} width="36" height={item.h} rx="4" fill={color} fillOpacity="0.65" />
                <text x={x + 18} y={168 - item.h} fill="#f0f1e9" fontSize="10" textAnchor="middle">{item.p}</text>
                <text x={x + 18} y="193" fill="#b9c0b5" fontSize="11" textAnchor="middle">{item.k}</text>
              </g>
            );
          })}
        </svg>
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-xl border border-white/10 bg-[#101510] p-4">
      <p className="mb-2 text-xs tracking-widest text-stone-400">GRÁFICO · CURVA NORMAL DE GAUSS N(μ, σ²) E REGRA EMPÍRICA</p>
      <svg viewBox="0 0 500 210" className="h-48 w-full">
        <path d="M 30 175 C 120 175, 165 30, 250 30 C 335 30, 380 175, 470 175" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2.5" />
        <line x1="250" y1="25" x2="250" y2="175" stroke="#f0f1e9" strokeDasharray="4 4" />
        <line x1="185" y1="80" x2="185" y2="175" stroke={color} strokeOpacity="0.6" strokeDasharray="3 3" />
        <line x1="315" y1="80" x2="315" y2="175" stroke={color} strokeOpacity="0.6" strokeDasharray="3 3" />
        <line x1="30" y1="175" x2="470" y2="175" stroke="#ffffff" strokeOpacity="0.3" />
        <text x="250" y="193" fill="#f0f1e9" fontSize="11" textAnchor="middle">μ (Z=0)</text>
        <text x="185" y="193" fill="#b9c0b5" fontSize="10" textAnchor="middle">−1σ</text>
        <text x="315" y="193" fill="#b9c0b5" fontSize="10" textAnchor="middle">+1σ</text>
        <text x="250" y="125" fill="#f0f1e9" fontSize="11" textAnchor="middle">68,2% dos dados</text>
      </svg>
    </div>
  );
}