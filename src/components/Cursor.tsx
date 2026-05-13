import { useEffect, useRef } from "react";
import { S } from "../styles";

export function Cursor() {
  const pos     = useRef({ x: -100, y: -100 });
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    let raf: number;
    const animate = () => {
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${pos.current.x - 14}px, ${pos.current.y - 14}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  style={S.cursorDot}  />
      <div ref={ringRef} style={S.cursorRing} />
    </>
  );
}
