import { useEffect, useRef, useState } from "react";

export function useContainerBounds<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [bounds, setBounds] = useState<DOMRect | null>(null);

  useEffect(() => {
    const updateBounds = () => {
      if (ref.current) {
        setBounds(ref.current.getBoundingClientRect());
      }
    };

    updateBounds(); // set initial bounds

    // Update on resize
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  return { ref, bounds };
}
