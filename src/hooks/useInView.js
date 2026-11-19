import { useEffect, useRef, useState } from "react";

// Tracks whether an element is near the viewport so offscreen 3D canvases can stop rendering.
export default function useInView(rootMargin = "100px") {
  const ref = useRef(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, inView];
}
