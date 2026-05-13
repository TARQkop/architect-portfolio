export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 480 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: 480 }}
      aria-label="Architectural illustration of a building"
      role="img"
    >
      <rect width="480" height="560" fill="#F7F0E8" rx="24" />
      <rect x="0" y="0" width="480" height="220" fill="#EDE4D8" rx="24" />
      <rect x="0" y="400" width="480" height="160" fill="#E8DDD1" />
      <rect x="100" y="160" width="280" height="240" fill="#D4C8B8" />

      {[140, 180, 220, 260, 300, 340].map((x) => (
        <rect key={`v-${x}`} x={x} y="160" width="1" height="240" fill="#C4B8A8" opacity="0.6" />
      ))}

      {[120, 180, 240, 300].map((x) =>
        [190, 260, 330].map((y) => (
          <rect key={`w-${x}-${y}`} x={x} y={y} width="30" height="38" fill="#B8A898" rx="2" />
        ))
      )}

      <rect x="210" y="320" width="60" height="80" fill="#C4B4A0" />
      <ellipse cx="240" cy="320" rx="30" ry="18" fill="#C4B4A0" />
      <ellipse cx="240" cy="320" rx="24" ry="12" fill="#D4C8B8" />

      <rect x="90" y="150" width="300" height="14" fill="#C4B0A0" rx="3" />

      <rect x="40" y="220" width="70" height="180" fill="#CEC2B2" />
      {[55, 75, 95].map((x) =>
        [240, 290, 340].map((y) => (
          <rect key={`lw-${x}-${y}`} x={x} y={y} width="20" height="26" fill="#B8A898" rx="1" />
        ))
      )}

      <rect x="370" y="220" width="70" height="180" fill="#CEC2B2" />
      {[380, 400, 420].map((x) =>
        [240, 290, 340].map((y) => (
          <rect key={`rw-${x}-${y}`} x={x} y={y} width="20" height="26" fill="#B8A898" rx="1" />
        ))
      )}

      <rect x="185" y="400" width="110" height="8" fill="#C4B8A8" />
      <rect x="195" y="408" width="90"  height="8" fill="#BCAE9E" />

      <ellipse cx="60"  cy="360" rx="30" ry="50" fill="#A8B89A" opacity="0.7" />
      <rect    x="57"   y="400"  width="6" height="30" fill="#8E7E6E" />
      <ellipse cx="80"  cy="380" rx="22" ry="36" fill="#98A88A" opacity="0.6" />

      <ellipse cx="420" cy="360" rx="30" ry="50" fill="#A8B89A" opacity="0.7" />
      <rect    x="417"  y="400"  width="6" height="30" fill="#8E7E6E" />
      <ellipse cx="400" cy="380" rx="22" ry="36" fill="#98A88A" opacity="0.6" />

      <ellipse cx="380" cy="60" rx="45" ry="22" fill="#E0D4C4" />
      <ellipse cx="340" cy="80" rx="30" ry="14" fill="#E4D8C8" />
      <ellipse cx="110" cy="70" rx="38" ry="16" fill="#E0D4C4" />

      <circle cx="390" cy="40" r="18" fill="#D4A882" opacity="0.5" />
      <circle cx="390" cy="40" r="10" fill="#C89660" opacity="0.6" />

      <ellipse cx="240" cy="405" rx="140" ry="8" fill="#C4B4A0" opacity="0.3" />
    </svg>
  );
}
