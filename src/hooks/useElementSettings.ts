import { useEffect, useState, useRef, RefObject } from "react";

export type Rect = {
  x: number;
  y: number;
  top: number;
  left: number;
  bottom: number;
  right: number;
  width: number;
  height: number;
}

export const useElementRect = <T extends HTMLElement>(): [RefObject<T>, Rect | null] => {
  const ref = useRef<T>(null);
  const [rect, setRect] = useState<Rect | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateRect = () => {
      const rect = element.getBoundingClientRect();
      setRect({
        x: rect.x,
        y: rect.y,
        top: rect.top,
        left: rect.left,
        bottom: rect.bottom,
        right: rect.right,
        width: rect.width,
        height: rect.height,
      });
    };

    updateRect();

    // Update on resize or scroll
    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect);

    return () => {
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect);
    };
  }, []);

  return [ref, rect];
}