import { useScrollY, usePlayfairFont } from "./hooks";
import {
  Cursor,
  Header,
  HeroSection,
  WorkSection,
  AboutSection,
  ServicesSection,
  ContactSection,
  Footer,
} from "./components";
import { TOKEN } from "./styles";

export default function App() {
  usePlayfairFont();
  const scrollY = useScrollY();

  return (
    <div style={{ fontFamily: TOKEN.sans, background: TOKEN.ivoryLight, overflowX: "hidden" }}>
      <Cursor />
      <Header scrollY={scrollY} />
      <main>
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
