import { S, TOKEN } from "../styles";
import { useIsMobile } from "../hooks";

const SOCIAL_LINKS = ["Instagram", "LinkedIn", "Email"] as const;

export function Footer() {
  const isMobile = useIsMobile();

  return (
    <footer style={{ ...S.footer, ...(isMobile ? { padding: "2rem 1.25rem" } : {}) }}>
      <div
        style={{
          ...S.container,
          ...S.footerInner,
          ...(isMobile
            ? { alignItems: "flex-start", flexDirection: "column" }
            : {}),
        }}
      >

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <span style={{ color: TOKEN.terracotta, fontSize: "0.9rem" }}>✦</span>
          <span style={S.footerLogo}>Layla Hassan</span>
        </div>

        {/* Copyright */}
        <p style={S.footerCopy}>
          © {new Date().getFullYear()} · Architectural Design Studio
        </p>

        {/* Social links */}
        <div style={{ ...S.footerLinks, ...(isMobile ? { flexWrap: "wrap", gap: "1rem" } : {}) }}>
          {SOCIAL_LINKS.map((link) => (
            <a key={link} href="#" style={S.footerLink}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
