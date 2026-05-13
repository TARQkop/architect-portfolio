import { S, TOKEN } from "../styles";

const SOCIAL_LINKS = ["Instagram", "LinkedIn", "Email"] as const;

export function Footer() {
  return (
    <footer style={S.footer}>
      <div style={{ ...S.container, ...S.footerInner }}>

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
        <div style={S.footerLinks}>
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
