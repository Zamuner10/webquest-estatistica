import { maps } from '../data/content';

export function MindMap({ index, full = false }: { index: number; full?: boolean }) {
  const map = maps[index];
  const handFont = { fontFamily: "'Patrick Hand', cursive, sans-serif" };

  return (
    <svg
      viewBox="0 0 1000 540"
      className={`w-full bg-[#131913] ${full ? 'max-h-[70vh]' : 'h-64'}`}
      role="img"
      aria-label={`Mapa mental de ${map.center}`}
    >
      <defs>
        <pattern id={`dots-${index}`} width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#ffffff" fillOpacity="0.06" />
        </pattern>
        <marker id={`arrow-${index}`} viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill={map.color} />
        </marker>
      </defs>

      <rect width="1000" height="540" fill={`url(#dots-${index})`} />

      {/* =====================================================================
          MAPA 0: FLUXO EM CASCATA DE CIMA PARA BAIXO (FREQUÊNCIAS)
      ===================================================================== */}
      {index === 0 && (
        <g>
          {/* Título / Nó Raiz no Topo */}
          <path d="M 370 42 Q 500 22, 630 42 Q 655 75, 625 102 Q 500 118, 375 102 Q 345 75, 370 42 Z" fill={map.color} />
          <text x="500" y="72" fill="#101510" textAnchor="middle" fontSize="26" fontWeight="700" style={handFont}>
            {map.center}
          </text>
          <text x="500" y="93" fill="#101510" textAnchor="middle" fontSize="13" fontWeight="600">
            {map.subCenter}
          </text>

          {/* Setas curvas descendo para o nível 2 */}
          <path d="M 430 108 C 360 150, 290 165, 255 205" fill="none" stroke={map.color} strokeWidth="3.5" markerEnd={`url(#arrow-${index})`} />
          <path d="M 570 108 C 640 150, 710 165, 745 205" fill="none" stroke={map.color} strokeWidth="3.5" markerEnd={`url(#arrow-${index})`} />

          {/* Nível 2 Esquerda: Sturges */}
          <g transform="translate(245, 250)">
            <rect x="-145" y="-38" width="290" height="76" rx="16" fill="#1b231b" stroke={map.color} strokeWidth="2.5" strokeDasharray="8 3" />
            <text x="0" y="-10" fill="#f0f1e9" textAnchor="middle" fontSize="20" style={handFont}>{map.branches[0].label}</text>
            <text x="0" y="14" fill={map.color} textAnchor="middle" fontSize="13" fontFamily="monospace">{map.branches[0].formula}</text>
            <path d="M -80 38 C -100 65, -120 75, -155 85" fill="none" stroke={map.color} strokeWidth="1.8" />
            <text x="-160" y="90" fill="#d6dcd0" textAnchor="end" fontSize="15" style={handFont}>{map.branches[0].subBranches[0]}</text>
            <path d="M 80 38 C 100 65, 115 75, 145 85" fill="none" stroke={map.color} strokeWidth="1.8" />
            <text x="150" y="90" fill="#d6dcd0" textAnchor="start" fontSize="15" style={handFont}>{map.branches[0].subBranches[1]}</text>
          </g>

          {/* Nível 2 Direita: Tabela */}
          <g transform="translate(755, 250)">
            <rect x="-145" y="-38" width="290" height="76" rx="16" fill="#1b231b" stroke={map.color} strokeWidth="2.5" />
            <text x="0" y="-10" fill="#f0f1e9" textAnchor="middle" fontSize="20" style={handFont}>{map.branches[1].label}</text>
            <text x="0" y="14" fill={map.color} textAnchor="middle" fontSize="13" fontFamily="monospace">{map.branches[1].formula}</text>
            <path d="M -70 38 C -90 65, -105 75, -135 85" fill="none" stroke={map.color} strokeWidth="1.8" />
            <text x="-140" y="90" fill="#d6dcd0" textAnchor="end" fontSize="15" style={handFont}>{map.branches[1].subBranches[0]}</text>
            <path d="M 70 38 C 90 65, 105 75, 135 85" fill="none" stroke={map.color} strokeWidth="1.8" />
            <text x="140" y="90" fill="#d6dcd0" textAnchor="start" fontSize="15" style={handFont}>{map.branches[1].subBranches[1]}</text>
          </g>

          {/* Ponte para a Base (Gráficos) */}
          <path d="M 500 112 L 500 375" fill="none" stroke={map.color} strokeWidth="2.5" strokeDasharray="6 6" />
          <path d="M 500 375 C 420 385, 360 405, 310 430" fill="none" stroke={map.color} strokeWidth="3" markerEnd={`url(#arrow-${index})`} />
          <path d="M 500 375 C 580 385, 640 405, 690 430" fill="none" stroke={map.color} strokeWidth="3" markerEnd={`url(#arrow-${index})`} />

          {/* Base Esquerda: Histograma */}
          <g transform="translate(270, 465)">
            <ellipse cx="0" cy="0" rx="145" ry="42" fill="#1d261d" stroke={map.color} strokeWidth="2" />
            <text x="0" y="-6" fill="#f0f1e9" textAnchor="middle" fontSize="19" style={handFont}>{map.branches[2].label} · {map.branches[2].formula}</text>
            <text x="0" y="17" fill="#b9c0b5" textAnchor="middle" fontSize="14" style={handFont}>{map.branches[2].subBranches.join('  •  ')}</text>
          </g>

          {/* Base Direita: Polígono */}
          <g transform="translate(730, 465)">
            <ellipse cx="0" cy="0" rx="145" ry="42" fill="#1d261d" stroke={map.color} strokeWidth="2" />
            <text x="0" y="-6" fill="#f0f1e9" textAnchor="middle" fontSize="19" style={handFont}>{map.branches[3].label} · {map.branches[3].formula}</text>
            <text x="0" y="17" fill="#b9c0b5" textAnchor="middle" fontSize="14" style={handFont}>{map.branches[3].subBranches.join('  •  ')}</text>
          </g>
        </g>
      )}

      {/* =====================================================================
          MAPA 1: ESPINHA DE PEIXE / BALANÇA HORIZONTAL (MEDIDAS RESUMO)
      ===================================================================== */}
      {index === 1 && (
        <g>
          {/* Eixo Espinha Central */}
          <path d="M 110 270 Q 500 255, 890 270" fill="none" stroke={map.color} strokeWidth="5" strokeLinecap="round" />

          {/* Núcleo Central */}
          <g transform="translate(500, 265)">
            <polygon points="-105,0 -65,-42 65,-42 105,0 65,42 -65,42" fill={map.color} />
            <text x="0" y="-4" fill="#101510" textAnchor="middle" fontSize="24" fontWeight="700" style={handFont}>{map.center}</text>
            <text x="0" y="18" fill="#101510" textAnchor="middle" fontSize="12" fontWeight="600">{map.subCenter}</text>
          </g>

          {/* Costela 1 (Superior Esquerda - Médias) */}
          <path d="M 340 264 C 295 200, 250 155, 195 115" fill="none" stroke={map.color} strokeWidth="3.5" />
          <text x="190" y="95" fill="#f0f1e9" textAnchor="middle" fontSize="22" style={handFont}>{map.branches[0].label}</text>
          <text x="190" y="116" fill={map.color} textAnchor="middle" fontSize="14" fontFamily="monospace">{map.branches[0].formula}</text>
          <path d="M 275 180 L 145 170" stroke={map.color} strokeWidth="1.8" />
          <text x="138" y="174" fill="#d6dcd0" textAnchor="end" fontSize="15" style={handFont}>{map.branches[0].subBranches[0]}</text>
          <path d="M 240 150 L 325 130" stroke={map.color} strokeWidth="1.8" />
          <text x="332" y="134" fill="#d6dcd0" textAnchor="start" fontSize="15" style={handFont}>{map.branches[0].subBranches[1]}</text>

          {/* Costela 2 (Superior Direita - Variância) */}
          <path d="M 660 264 C 705 200, 750 155, 805 115" fill="none" stroke={map.color} strokeWidth="3.5" />
          <text x="810" y="95" fill="#f0f1e9" textAnchor="middle" fontSize="22" style={handFont}>{map.branches[1].label}</text>
          <text x="810" y="116" fill={map.color} textAnchor="middle" fontSize="14" fontFamily="monospace">{map.branches[1].formula}</text>
          <path d="M 725 180 L 855 170" stroke={map.color} strokeWidth="1.8" />
          <text x="862" y="174" fill="#d6dcd0" textAnchor="start" fontSize="15" style={handFont}>{map.branches[1].subBranches[0]}</text>
          <path d="M 760 150 L 675 130" stroke={map.color} strokeWidth="1.8" />
          <text x="668" y="134" fill="#d6dcd0" textAnchor="end" fontSize="15" style={handFont}>{map.branches[1].subBranches[1]}</text>

          {/* Costela 3 (Inferior Esquerda - Desvio Padrão) */}
          <path d="M 340 268 C 295 335, 250 385, 195 435" fill="none" stroke={map.color} strokeWidth="3.5" />
          <text x="190" y="458" fill="#f0f1e9" textAnchor="middle" fontSize="22" style={handFont}>{map.branches[2].label}</text>
          <text x="190" y="479" fill={map.color} textAnchor="middle" fontSize="14" fontFamily="monospace">{map.branches[2].formula}</text>
          <path d="M 275 355 L 145 365" stroke={map.color} strokeWidth="1.8" />
          <text x="138" y="369" fill="#d6dcd0" textAnchor="end" fontSize="15" style={handFont}>{map.branches[2].subBranches[0]}</text>
          <path d="M 240 395 L 325 415" stroke={map.color} strokeWidth="1.8" />
          <text x="332" y="419" fill="#d6dcd0" textAnchor="start" fontSize="15" style={handFont}>{map.branches[2].subBranches[1]}</text>

          {/* Costela 4 (Inferior Direita - Coef. Variação) */}
          <path d="M 660 268 C 705 335, 750 385, 805 435" fill="none" stroke={map.color} strokeWidth="3.5" />
          <text x="810" y="458" fill="#f0f1e9" textAnchor="middle" fontSize="22" style={handFont}>{map.branches[3].label}</text>
          <text x="810" y="479" fill={map.color} textAnchor="middle" fontSize="14" fontFamily="monospace">{map.branches[3].formula}</text>
          <path d="M 725 355 L 855 365" stroke={map.color} strokeWidth="1.8" />
          <text x="862" y="369" fill="#d6dcd0" textAnchor="start" fontSize="15" style={handFont}>{map.branches[3].subBranches[0]}</text>
          <path d="M 760 395 L 675 415" stroke={map.color} strokeWidth="1.8" />
          <text x="668" y="419" fill="#d6dcd0" textAnchor="end" fontSize="15" style={handFont}>{map.branches[3].subBranches[1]}</text>
        </g>
      )}

      {/* =====================================================================
          MAPA 2: RETA DIAGONAL DE TENDÊNCIA (CORRELAÇÃO E REGRESSÃO)
      ===================================================================== */}
      {index === 2 && (
        <g>
          {/* Eixos Cartesianos Rabiscados */}
          <path d="M 80 470 L 920 470" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="2" />
          <path d="M 80 60 L 80 470" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="2" />

          {/* Reta de Regressão Principal cortando o mapa em diagonal */}
          <path d="M 110 440 L 890 95" fill="none" stroke={map.color} strokeWidth="5" strokeDasharray="14 6" markerEnd={`url(#arrow-${index})`} />

          {/* Núcleo na Reta */}
          <g transform="translate(500, 268) rotate(-23)">
            <rect x="-105" y="-36" width="210" height="72" rx="36" fill={map.color} />
            <text x="0" y="-3" fill="#101510" textAnchor="middle" fontSize="24" fontWeight="700" style={handFont}>{map.center}</text>
            <text x="0" y="18" fill="#101510" textAnchor="middle" fontSize="13" fontWeight="600">{map.subCenter}</text>
          </g>

          {/* 4 Estações ao longo da reta */}
          {[
            { cx: 230, cy: 386, bx: 210, by: 230, bIdx: 0 },
            { cx: 380, cy: 320, bx: 340, by: 115, bIdx: 1 },
            { cx: 630, cy: 210, bx: 730, by: 310, bIdx: 2 },
            { cx: 790, cy: 140, bx: 780, by: 425, bIdx: 3 },
          ].map(st => {
            const br = map.branches[st.bIdx];
            return (
              <g key={br.label}>
                <circle cx={st.cx} cy={st.cy} r="9" fill="#101510" stroke={map.color} strokeWidth="3.5" />
                <path d={`M ${st.cx} ${st.cy} Q ${(st.cx + st.bx) / 2} ${st.by}, ${st.bx} ${st.by}`} fill="none" stroke={map.color} strokeWidth="2.5" />
                <rect x={st.bx - 115} y={st.by - 42} width="230" height="84" rx="14" fill="#1a221a" stroke={map.color} strokeWidth="2" />
                <text x={st.bx} y={st.by - 16} fill="#f0f1e9" textAnchor="middle" fontSize="19" style={handFont}>{br.label}</text>
                <text x={st.bx} y={st.by + 5} fill={map.color} textAnchor="middle" fontSize="12" fontFamily="monospace">{br.formula}</text>
                <text x={st.bx} y={st.by + 26} fill="#b9c0b5" textAnchor="middle" fontSize="13" style={handFont}>{br.subBranches[0]}</text>
              </g>
            );
          })}
        </g>
      )}

      {/* =====================================================================
          MAPA 3: ÁRVORE DE DECISÃO DA ESQUERDA PARA A DIREITA (PROBABILIDADE)
      ===================================================================== */}
      {index === 3 && (
        <g>
          {/* Tronco Inicial à Esquerda */}
          <g transform="translate(135, 270)">
            <circle cx="0" cy="0" r="76" fill={map.color} />
            <circle cx="0" cy="0" r="69" fill="none" stroke="#101510" strokeWidth="1.5" strokeDasharray="6 4" />
            <text x="0" y="-5" fill="#101510" textAnchor="middle" fontSize="23" fontWeight="700" style={handFont}>{map.center}</text>
            <text x="0" y="18" fill="#101510" textAnchor="middle" fontSize="13" fontWeight="600">{map.subCenter}</text>
          </g>

          {/* 4 Galhos abrindo para a direita em leque */}
          {[75, 205, 335, 465].map((yPos, i) => {
            const br = map.branches[i];
            return (
              <g key={br.label}>
                <path d={`M 212 270 C 310 270, 320 ${yPos}, 415 ${yPos}`} fill="none" stroke={map.color} strokeWidth="3.5" />
                {/* Nó intermediário */}
                <rect x="415" y={yPos - 30} width="215" height="60" rx="30" fill="#1b231b" stroke={map.color} strokeWidth="2.2" />
                <text x="522" y={yPos - 5} fill="#f0f1e9" textAnchor="middle" fontSize="19" style={handFont}>{br.label}</text>
                <text x="522" y={yPos + 16} fill={map.color} textAnchor="middle" fontSize="12" fontFamily="monospace">{br.formula}</text>

                {/* Bifurcação final à direita */}
                <path d={`M 630 ${yPos} C 670 ${yPos}, 680 ${yPos - 18}, 715 ${yPos - 18}`} fill="none" stroke={map.color} strokeWidth="1.8" />
                <text x="724" y={yPos - 13} fill="#e4e8df" textAnchor="start" fontSize="15" style={handFont}>• {br.subBranches[0]}</text>

                <path d={`M 630 ${yPos} C 670 ${yPos}, 680 ${yPos + 18}, 715 ${yPos + 18}`} fill="none" stroke={map.color} strokeWidth="1.8" />
                <text x="724" y={yPos + 23} fill="#b9c0b5" textAnchor="start" fontSize="15" style={handFont}>• {br.subBranches[1]}</text>
              </g>
            );
          })}
        </g>
      )}

      {/* =====================================================================
          MAPA 4: CONSTELAÇÃO ASSIMÉTRICA RADIAL (V.A. DISCRETAS, BINOMIAL, POISSON)
      ===================================================================== */}
      {index === 4 && (
        <g>
          {/* Tentáculos sinuosos assimétricos */}
          <path d="M 465 255 C 360 220, 290 120, 185 105" fill="none" stroke={map.color} strokeWidth="4" />
          <path d="M 455 295 C 330 320, 270 420, 175 435" fill="none" stroke={map.color} strokeWidth="4" />
          <path d="M 545 245 C 640 185, 710 105, 815 95" fill="none" stroke={map.color} strokeWidth="4" />
          <path d="M 555 290 C 660 330, 725 425, 825 435" fill="none" stroke={map.color} strokeWidth="4" />

          {/* Núcleo em Nuvem */}
          <g transform="translate(500, 270)">
            <ellipse cx="0" cy="0" rx="95" ry="52" fill={map.color} />
            <text x="0" y="-4" fill="#101510" textAnchor="middle" fontSize="24" fontWeight="700" style={handFont}>{map.center}</text>
            <text x="0" y="18" fill="#101510" textAnchor="middle" fontSize="13" fontWeight="600">{map.subCenter}</text>
          </g>

          {/* 4 Ilhas Orgânicas */}
          {[
            { x: 185, y: 105, idx: 0, subY: 168 },
            { x: 175, y: 435, idx: 1, subY: 368 },
            { x: 815, y: 95, idx: 2, subY: 162 },
            { x: 825, y: 435, idx: 3, subY: 368 },
          ].map(item => {
            const br = map.branches[item.idx];
            return (
              <g key={br.label}>
                <ellipse cx={item.x} cy={item.y} rx="135" ry="42" fill="#1a221a" stroke={map.color} strokeWidth="2.5" />
                <text x={item.x} y={item.y - 6} fill="#f0f1e9" textAnchor="middle" fontSize="20" style={handFont}>{br.label}</text>
                <text x={item.x} y={item.y + 16} fill={map.color} textAnchor="middle" fontSize="13" fontFamily="monospace">{br.formula}</text>
                <text x={item.x} y={item.subY} fill="#d6dcd0" textAnchor="middle" fontSize="14" style={handFont}>
                  {br.subBranches[0]}  |  {br.subBranches[1]}
                </text>
              </g>
            );
          })}
        </g>
      )}

      {/* =====================================================================
          MAPA 5: CONSTRUÍDO SOBRE A CURVA DE GAUSS (V.A. CONTÍNUA E NORMAL)
      ===================================================================== */}
      {index === 5 && (
        <g>
          {/* Silhueta Gigante da Curva Normal formando a estrutura do mapa */}
          <path
            d="M 70 435 C 240 435, 330 115, 500 115 C 670 115, 760 435, 930 435"
            fill={map.color}
            fillOpacity="0.1"
            stroke={map.color}
            strokeWidth="4.5"
          />
          <line x1="60" y1="435" x2="940" y2="435" stroke={map.color} strokeOpacity="0.4" strokeWidth="2" />
          <line x1="500" y1="115" x2="500" y2="435" stroke={map.color} strokeDasharray="6 6" strokeWidth="2" />

          {/* Núcleo no Pico da Curva */}
          <g transform="translate(500, 75)">
            <rect x="-115" y="-32" width="230" height="64" rx="32" fill={map.color} />
            <text x="0" y="-2" fill="#101510" textAnchor="middle" fontSize="23" fontWeight="700" style={handFont}>{map.center}</text>
            <text x="0" y="18" fill="#101510" textAnchor="middle" fontSize="12" fontWeight="600">{map.subCenter}</text>
          </g>

          {/* Ramo 1: Aba Esquerda (Densidade f(x)) */}
          <g transform="translate(185, 215)">
            <rect x="-125" y="-38" width="250" height="76" rx="18" fill="#1a221a" stroke={map.color} strokeWidth="2" />
            <text x="0" y="-10" fill="#f0f1e9" textAnchor="middle" fontSize="19" style={handFont}>{map.branches[0].label}</text>
            <text x="0" y="12" fill={map.color} textAnchor="middle" fontSize="12" fontFamily="monospace">{map.branches[0].formula}</text>
            <text x="0" y="56" fill="#d6dcd0" textAnchor="middle" fontSize="14" style={handFont}>{map.branches[0].subBranches.join(' · ')}</text>
          </g>

          {/* Ramo 2: Aba Direita (Escore-Z) */}
          <g transform="translate(815, 215)">
            <rect x="-125" y="-38" width="250" height="76" rx="18" fill="#1a221a" stroke={map.color} strokeWidth="2" />
            <text x="0" y="-10" fill="#f0f1e9" textAnchor="middle" fontSize="19" style={handFont}>{map.branches[2].label}</text>
            <text x="0" y="12" fill={map.color} textAnchor="middle" fontSize="13" fontFamily="monospace">{map.branches[2].formula}</text>
            <text x="0" y="56" fill="#d6dcd0" textAnchor="middle" fontSize="14" style={handFont}>{map.branches[2].subBranches.join(' · ')}</text>
          </g>

          {/* Ramo 3: Dentro da Curva (Curva de Gauss) */}
          <g transform="translate(500, 295)">
            <rect x="-130" y="-32" width="260" height="64" rx="14" fill="#131913" stroke={map.color} strokeWidth="2" strokeDasharray="6 4" />
            <text x="0" y="-5" fill="#f0f1e9" textAnchor="middle" fontSize="19" style={handFont}>{map.branches[1].label}</text>
            <text x="0" y="16" fill={map.color} textAnchor="middle" fontSize="14" style={handFont}>{map.branches[1].subBranches.join(' | ')}</text>
          </g>

          {/* Ramo 4: Base da Curva (Regra Empírica) */}
          <g transform="translate(500, 482)">
            <text x="0" y="0" fill={map.color} textAnchor="middle" fontSize="20" style={handFont}>
              {map.branches[3].label}: {map.branches[3].formula}  ({map.branches[3].subBranches.join('  •  ')})
            </text>
          </g>
        </g>
      )}
    </svg>
  );
}