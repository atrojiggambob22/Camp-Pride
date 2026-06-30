import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/event1.jpg",
  "/images/event5.jpg",
  "/images/event6.jpg",
  "/images/event7.jpg",
 
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < images.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div
        className="flex gap-4 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(calc(-${current} * 70%))`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-[70%] md:min-w-[60%] lg:min-w-[55%] overflow-hidden rounded-xl flex-shrink-0"
          >
            <img
              src={image}
              alt=""
              className="h-[420px] w-full object-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white"
      >
        <ChevronRight />
      </button>
    </div>
  );
}