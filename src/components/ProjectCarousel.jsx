import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import { Button } from "@/components/ui/button";

export function ProjectCarousel({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg touch-pan-y" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div className="relative aspect-[16/9] min-w-0 flex-[0_0_100%]" key={index}>
              <img
                src={image.url || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Update navigation dots for better touch targets */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 px-4">
        {images.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className={`h-3 w-3 rounded-full p-0 ${index === currentIndex ? "bg-primary" : "bg-primary/50"}`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Update navigation buttons for better touch targets */}
      <div className="absolute inset-y-1/2 flex w-full items-center justify-between px-2 md:px-4">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
          disabled={!canScrollPrev}
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
          disabled={!canScrollNext}
          onClick={scrollNext}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </div>
  );
}