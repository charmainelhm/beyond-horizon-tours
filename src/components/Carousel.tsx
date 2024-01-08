"use client";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import React, { useState, useEffect, useCallback } from "react";

interface CarouselProps {
  /**
   * Array of components to be displayed in the carousel
   */
  content: React.ReactNode[];
  /**
   * Number of slides to show at a time
   */
  slidesToShow?: number;
  /**
   *
   */
  slidesToScroll?: number;
  /**
   * Gap between slides
   */
  slidesGap?: "sm" | "md" | "lg";
  /**
   * Whether or not the carousel should loop
   */
  loop?: boolean;
  /**
   * For adding any custom classes to component
   */
  className?: string;
  /**
   * Set state function passed from parent component when used as part of a content slideshow (see under Examples)
   */
  setCurrentIndex?: React.Dispatch<React.SetStateAction<number>>;
  scrollTo: number;
}

const SLIDES_GAP = {
  sm: "gap-x-2",
  md: "gap-x-4",
  lg: "gap-x-6",
};

/**
 *
 * Displays images in a carousel. Height will need to be defined in order for the carousel to display properly, else having a flex parent will also work. If height is set to 100%, the container element must have a fixed height.
 */

const Carousel: React.FC<CarouselProps> = ({
  content,
  slidesToShow = 1,
  slidesToScroll = 1,
  slidesGap = "",
  loop = false,
  className = "",
  setCurrentIndex,
  scrollTo,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop,
    slidesToScroll,
    align: "start",
  });

  emblaApi && emblaApi.scrollTo(scrollTo);

  const onScroll = useCallback((emblaApi: UseEmblaCarouselType[1]) => {
    setCurrentIndex && setCurrentIndex(emblaApi?.selectedScrollSnap() || 0);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll(emblaApi);
    emblaApi.on("reInit", onScroll);
    emblaApi.on("scroll", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div
      className={`overflow-hidden relative flex ${className}`}
      ref={emblaRef}
    >
      <div
        className={`flex grow ${
          slidesGap ? SLIDES_GAP[slidesGap as keyof typeof SLIDES_GAP] : ""
        }`}
      >
        {content.map((slide, index) => (
          <div
            key={`slide-${index}`}
            style={{ flexBasis: `${100 / slidesToShow}%` }}
            className="relative grow-0 shrink-0 min-w-0"
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
