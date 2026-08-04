import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/event1.jpg",
  "/images/event5.jpg",
  "/images/event6.jpg",
  "/images/event7.jpg",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = (index) => {
    setCurrent((index + images.length) % images.length);
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="relative w-full overflow-hidden py-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex gap-4 transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(calc(-${current} * 70%))` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-[70%] overflow-hidden rounded-2xl shadow-lg sm:min-w-[60%] lg:min-w-[55%]"
          >
            <img
              src={image}
              alt="Event at Camp and Pride"
              className="h-64 w-full object-cover sm:h-80 md:h-[420px]"
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-navy-900/70 p-3 text-white shadow-lg transition-colors hover:bg-navy-900"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-navy-900/70 p-3 text-white shadow-lg transition-colors hover:bg-navy-900"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to image ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              index === current
                ? "w-8 bg-gold-500"
                : "w-2.5 bg-navy-200 hover:bg-navy-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
