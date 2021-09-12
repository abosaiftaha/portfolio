import { useState, useEffect } from "react";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [hoverNav, setHoverNav] = useState(false);
  const [hoverMainTitle, setMainTitle] = useState(false);

  useEffect(() => {
    const handlePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      if ((e.target as HTMLElement).id === "ahmadTaha") {
        setMainTitle(true);
      } else {
        setMainTitle(false);
      }

      if ((e.target as HTMLElement).tagName === "A") {
        setHoverNav(true);
      } else {
        setHoverNav(false);
      }
    };

    window.addEventListener("mousemove", handlePosition);
    return () => window.removeEventListener("mousemove", handlePosition);
  }, []);
  return { ...mousePosition, hoverNav, hoverMainTitle };
};
