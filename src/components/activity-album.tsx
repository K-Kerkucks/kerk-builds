"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, Images } from "lucide-react";

type ActivityImage = {
  readonly src: string;
  readonly alt: string;
};

type ActivityAlbumProps = {
  images: readonly ActivityImage[];
};

export function ActivityAlbum({ images }: ActivityAlbumProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const moveTo = (nextIndex: number, nextDirection: number) => {
    setDirection(nextDirection);
    setActiveIndex((nextIndex + images.length) % images.length);
  };

  useEffect(() => {
    if (images.length < 2 || isPaused || reduceMotion) return;

    const timer = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [images.length, isPaused, reduceMotion]);

  if (images.length === 0) return null;

  return (
    <div
      className="group/album relative aspect-video overflow-hidden rounded-2xl border border-border/70 bg-zinc-950 shadow-sm"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Speaking and hackathon photo album"
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.img
          key={images[activeIndex].src}
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          className="absolute inset-0 size-full object-contain"
          custom={direction}
          initial={reduceMotion ? false : { opacity: 0, x: direction * 28 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * -28 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-black/65 to-transparent p-3 text-white">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/35 px-2.5 py-1 text-[0.62rem] font-medium tracking-wide backdrop-blur-sm">
          <Images className="size-3" aria-hidden />
          {images.length} photos
        </span>
        <span className="font-mono text-[0.62rem] tabular-nums text-white/85">
          {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
      </div>

      {images.length > 1 ? (
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/75 via-black/25 to-transparent p-3 pt-10">
          <div className="flex items-center gap-1.5" aria-label="Choose photo">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => moveTo(index, index >= activeIndex ? 1 : -1)}
                className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  index === activeIndex
                    ? "w-7 bg-white"
                    : "w-1.5 bg-white/45 hover:bg-white/75"
                }`}
                aria-label={`Show photo ${index + 1}: ${image.alt}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>

          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => moveTo(activeIndex - 1, -1)}
              className="inline-flex size-8 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Previous photo"
            >
              <ArrowLeft className="size-3.5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => moveTo(activeIndex + 1, 1)}
              className="inline-flex size-8 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Next photo"
            >
              <ArrowRight className="size-3.5" aria-hidden />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
