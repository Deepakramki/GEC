import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface PromoSlide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  link: string;
  ctaText: string;
}

const PROMO_SLIDES: PromoSlide[] = [
  {
    id: 'bingx',
    title: 'BingX Official Listing',
    subtitle: '$GEC / USDT Officially Listed on BingX',
    image: '/banners/bingx-listing.png',
    alt: '$GEC / USDT Officially Listed on BingX',
    link: 'https://bingx.com',
    ctaText: 'Trade on BingX',
  },
  {
    id: 'taskon',
    title: 'Community Quest Campaign',
    subtitle: 'Complete tasks on TaskOn to earn GreenCoin rewards',
    image: '/banners/taskon-campaign.png',
    alt: 'GreenCoin x TaskOn Community Quest Campaign',
    link: 'https://taskon.xyz',
    ctaText: 'Participate Now',
  },
];

export const PromoBannerSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % PROMO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + PROMO_SLIDES.length) % PROMO_SLIDES.length);
  }, []);

  // Auto-swipe every 5 seconds when not hovered/touched
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 50;

    if (diff > minSwipeDistance) {
      nextSlide();
    } else if (diff < -minSwipeDistance) {
      prevSlide();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const currentSlide = PROMO_SLIDES[currentIndex];

  return (
    <section
      className="w-full max-w-[1400px] mx-auto mt-6 rounded-[40px] overflow-hidden shadow-sm border border-slate-200/50 relative bg-slate-950 group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Full-Cover Slide Container */}
      <div className="relative w-full h-[260px] sm:h-[380px] md:h-[460px] lg:h-[520px] xl:h-[580px] overflow-hidden">
        {/* Sliding Track */}
        <div
          className="flex w-full h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {PROMO_SLIDES.map((slide) => (
            <div key={slide.id} className="w-full h-full shrink-0 relative overflow-hidden">
              <a
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full cursor-pointer relative"
              >
                {/* Full-Cover Image */}
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                />

                {/* Subtle Edge Lighting & Contrast Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
              </a>
            </div>
          ))}
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 cursor-pointer opacity-80 sm:opacity-0 group-hover:opacity-100"
          aria-label="Previous Poster"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 cursor-pointer opacity-80 sm:opacity-0 group-hover:opacity-100"
          aria-label="Next Poster"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Bottom Floating Bar: Indicators & Direct CTA */}
        <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-8 flex items-center justify-between gap-4 pointer-events-none">
          {/* Progress Indicators (Pill Dots) */}
          <div className="flex items-center gap-2 pointer-events-auto bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/15 shadow-lg">
            {PROMO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 bg-white shadow-sm'
                    : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Action Button */}
          <a
            href={currentSlide.link}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/95 hover:bg-white text-slate-950 font-semibold text-xs sm:text-sm transition-all shadow-xl backdrop-blur-md hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>{currentSlide.ctaText}</span>
            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
