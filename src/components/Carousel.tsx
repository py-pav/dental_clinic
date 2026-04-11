import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  items: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  itemsPerView?: number;
}

const Carousel = ({
  items,
  autoPlay = false,
  interval = 5000,
  showControls = true,
  itemsPerView = 1
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isTransitioning = useRef(false);

  // Создаем расширенный массив для бесконечной прокрутки (добавляем копии в начало и конец)
  const extendedItems = [...items.slice(-itemsPerView), ...items, ...items.slice(0, itemsPerView)];
  const realItemsCount = items.length;
  const startIndex = itemsPerView;

  const [internalIndex, setInternalIndex] = useState(startIndex);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval]);

  const goToPrevious = () => {
    if (isTransitioning.current) return;
    setInternalIndex((prev) => prev - 1);
  };

  const goToNext = () => {
    if (isTransitioning.current) return;
    setInternalIndex((prev) => prev + 1);
  };

  // Эффект для плавного зацикливания без рывка
  useEffect(() => {
    if (isTransitioning.current) return;

    // Если дошли до конца расширенного массива
    if (internalIndex >= realItemsCount + startIndex) {
      isTransitioning.current = true;
      setTimeout(() => {
        setInternalIndex(startIndex);
        setTimeout(() => {
          isTransitioning.current = false;
        }, 50);
      }, 500); // Длительность анимации
    }
    // Если ушли в начало расширенного массива
    else if (internalIndex < startIndex) {
      isTransitioning.current = true;
      setTimeout(() => {
        setInternalIndex(realItemsCount + startIndex - 1);
        setTimeout(() => {
          isTransitioning.current = false;
        }, 50);
      }, 500);
    }
  }, [internalIndex, realItemsCount, startIndex]);

  // Вычисляем реальный индекс для точек навигации
  const getRealIndex = () => {
    let realIndex = (internalIndex - startIndex) % realItemsCount;
    if (realIndex < 0) realIndex += realItemsCount;
    return realIndex;
  };

  const totalSlides = Math.ceil(realItemsCount / itemsPerView);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${internalIndex * (100 / itemsPerView)}%)`,
            transition: isTransitioning.current ? 'none' : 'transform 0.5s ease-in-out'
          }}
        >
          {extendedItems.map((item, index) => (
            <div
              key={index}
              style={{ width: `${100 / itemsPerView}%` }}
              className="flex-shrink-0"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {showControls && items.length > itemsPerView && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary/80 text-primary-foreground p-2 rounded-full hover:bg-primary transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary/80 text-primary-foreground p-2 rounded-full hover:bg-primary transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              const targetInternal = startIndex + (idx * itemsPerView);
              setInternalIndex(targetInternal);
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              Math.floor(getRealIndex() / itemsPerView) === idx ? "bg-primary w-8" : "bg-muted"
            )}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;