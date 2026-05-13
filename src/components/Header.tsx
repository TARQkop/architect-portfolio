import { useEffect, useState } from "react";
import { S } from "../styles";
import { NAV_ITEMS } from "../data";

interface HeaderProps {
  scrollY: number;
}

export function Header({ scrollY }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isElevated = scrollY > 40;

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header style={{ ...S.header, ...(isElevated ? S.headerElevated : {}) }}>

      {/* Logo */}
      <a href="#hero" style={S.logo}>
        <span style={S.logoMark}>✦</span>
        <span style={S.logoText}>Layla Hassan</span>
      </a>

      {/* Desktop nav */}
      <nav style={{ ...S.nav, display: isMobile ? "none" : "flex" }}>
        {NAV_ITEMS.map((item) => (
          <a key={item.label} href={item.href} style={S.navLink}>
            {item.label}
          </a>
        ))}
        <a href="#contact" style={S.navCta}>Let&apos;s Talk</a>
      </nav>

      {/* Hamburger — visible on mobile via inline display override */}
      <button
        style={{ ...S.hamburger, display: isMobile ? "flex" : "none" }}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span
          style={{
            ...S.hamburgerLine,
            transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
          }}
        />
        <span style={{ ...S.hamburgerLine, opacity: menuOpen ? 0 : 1 }} />
        <span
          style={{
            ...S.hamburgerLine,
            transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
          }}
        />
      </button>

      {/* Mobile nav dropdown */}
      {isMobile && menuOpen && (
        <div style={S.mobileMenu}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={S.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
