import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useHashScroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.slice(1);
    const scroll = () =>
      document.getElementById(id)?.scrollIntoView({ behavior: "instant" as ScrollBehavior });

    const frame = requestAnimationFrame(scroll);
    const settle = setTimeout(scroll, 400);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(settle);
    };
  }, [hash]);
}
