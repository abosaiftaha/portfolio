import { useState, useEffect } from "react";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [hoverNav, setHoverNav] = useState(false);
  const [hoverDrag, setHoverDrag] = useState(false);

  useEffect(() => {
    const handlePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.pageX, y: e.pageY });

      if (
        (e.target as HTMLElement).tagName === "A" ||
        (e.target as HTMLElement).getAttribute("class")?.includes("link-icon")
      ) {
        setHoverNav(true);
      } else {
        setHoverNav(false);
      }

      if ((e.target as HTMLElement).getAttribute("class")?.includes("drag")) {
        setHoverDrag(true);
      } else {
        setHoverDrag(false);
      }
    };

    window.addEventListener("mousemove", handlePosition);
    return () => window.removeEventListener("mousemove", handlePosition);
  }, []);
  return { ...mousePosition, hoverNav, hoverDrag };
};
