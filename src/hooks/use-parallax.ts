import { useState, useEffect, useCallback } from "react";

/**
 * A custom hook to apply a parallax effect to elements.
 * @param speed The speed multiplier of the parallax effect (default: 0.1)
 * @returns The vertical translation value (translateY)
 */
export function useParallax(speed = 0.1) {
  const [offset, setOffset] = useState(0);

  const onScroll = useCallback(() => {
    setOffset(window.scrollY * speed);
  }, [speed]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return offset;
}
