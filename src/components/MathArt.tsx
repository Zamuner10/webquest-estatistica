export function Arrow({ diagonal = false, left = false }: { diagonal?: boolean; left?: boolean }) {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d={diagonal ? 'M6 18 18 6M6 6h12v12' : left ? 'M19 12H5m6-6-6 6 6 6' : 'M5 12h14m-6-6 6 6-6 6'} />
    </svg>
  );
}

export function MathArt({ kind = 'orbit', color = '#c8ec91', hero = false }: { kind?: string; color?: string; hero?: boolean }) {
  return (
    <svg viewBox="0 0 500 340" className={`h-full w-full ${hero ? 'motion-safe:animate-[float_9s_ease-in-out_infinite]' : ''}`} fill="none" aria-hidden="true">
      <defs>
        <radialGradient id={`glow-${kind}`}>
          <stop stopColor={color} stopOpacity=".14" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="250" cy="172" rx="210" ry="165" fill={`url(#glow-${kind})`} />
      {kind === 'orbit' ? (
        <g transform="translate(250 170) rotate(-24)" stroke={color}>
          {Array.from({ length: 11 }, (_, i) => (
            <ellipse key={i} rx={142} ry={20 + i * 11} transform={`rotate(${i * 16})`} strokeOpacity={hero ? '.48' : '.65'} strokeWidth=".8" />
          ))}
          <ellipse rx="201" ry="60" strokeOpacity=".55" strokeDasharray="3 6" />
          <circle cx="182" cy="25" r="5" fill={color} stroke="none" />
        </g>
      ) : kind === 'bars' ? (
        <g stroke={color} strokeWidth="1.3">
          {[60, 95, 145, 190, 150, 105, 65].map((h, i) => (
            <path key={i} d={`M${95 + i * 46} 265v-${h}h30v${h}`} fill={color} fillOpacity={i === 3 ? '.55' : '.12'} />
          ))}
          <path d="M70 266h365" />
        </g>
      ) : kind === 'wave' ? (
        <g stroke={color}>
          {Array.from({ length: 12 }, (_, i) => (
            <path key={i} d={`M40 ${200 + i * 5}C140 ${-80 + i * 16} 225 ${390 - i * 7} 460 ${85 + i * 10}`} strokeOpacity=".65" />
          ))}
        </g>
      ) : (
        <g stroke={color} transform="translate(250 170) rotate(-25) skewX(15)">
          {Array.from({ length: 9 }, (_, i) => (
            <g key={i}>
              <path d={`M${-140 + i * 35} -120v240M-140 ${-120 + i * 30}h280`} strokeOpacity=".5" />
            </g>
          ))}
          <path d="m-100 80 160-170M60-90v50m0-50H10" strokeWidth="4" />
        </g>
      )}
      {hero && (
        <g fill="#b9c2b5" fontFamily="serif" fontStyle="italic" fontSize="20">
          <text x="51" y="65">∑</text>
          <text x="415" y="92">∞</text>
          <text x="385" y="283">f(x)</text>
          <text x="53" y="275">π</text>
        </g>
      )}
    </svg>
  );
}