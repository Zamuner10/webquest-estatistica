export function Logo() {
  return (
    <span className="group inline-flex items-center gap-3">
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className="h-10 w-10 shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        <rect width="64" height="64" rx="16" fill="#171f17" />
        <rect x="1.5" y="1.5" width="61" height="61" rx="14.5" stroke="#c8ec91" strokeOpacity="0.4" strokeWidth="2" />
        <rect x="14" y="34" width="7" height="16" rx="2" fill="#c8ec91" fillOpacity="0.3" />
        <rect x="23.5" y="24" width="7" height="26" rx="2" fill="#c8ec91" fillOpacity="0.55" />
        <rect x="33.5" y="18" width="7" height="32" rx="2" fill="#c8ec91" />
        <rect x="43" y="29" width="7" height="21" rx="2" fill="#c8ec91" fillOpacity="0.45" />
        <path
          d="M 10 47 C 20 47, 25 14, 32 14 C 39 14, 44 47, 54 47"
          stroke="#f0f1e9"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <circle cx="32" cy="14" r="3.2" fill="#baa8ec" />
      </svg>

      <span className="flex flex-col leading-none">
        <span className="text-lg font-semibold tracking-tight text-[#f0f1e9]">
          WebQuest <span className="text-[#c8ec91]">Estatística</span>
        </span>
        <span className="mt-1 text-[10px] font-medium tracking-[0.2em] text-[#b9c0b5] uppercase">
          FATEC Osasco
        </span>
      </span>
    </span>
  );
}