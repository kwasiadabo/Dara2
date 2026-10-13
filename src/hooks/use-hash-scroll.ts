import { useEffect, useState } from "react";

export function useHashScroll() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

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
