import { useEffect, useState } from "react";

const campusImages = [
  "/campus/fcca-palmera.jpg",
  "/campus/umsnh-entrada.jpg",
  "/campus/fcca-arcos.jpg",
  "/campus/fcca-aerea.jpg",
];

const SLIDE_INTERVAL_MS = 4500;

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % campusImages.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative isolate h-[320px] overflow-hidden bg-slate-200 sm:h-[400px]"
      aria-label="Campus de la Facultad de Contaduría y Ciencias Administrativas"
    >
      {campusImages.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-in-out"
          style={{ transform: `translateX(${(i - index) * 100}%)` }}
        />
      ))}
    </section>
  );
}
