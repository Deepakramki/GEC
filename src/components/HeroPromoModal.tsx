import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface HeroPromoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SLIDES = [
  {
    id: 'bingx',
    title: '$GEC Officially Listed on BingX',
    image: '/banners/bingx-listing.png',
    alt: '$GEC / USDT Officially Listed on BingX',
    link: 'https://bingx.com',
    ctaText: 'Trade on BingX',
  },
  {
    id: 'taskon',
    title: 'Community Quest Campaign with TaskOn',
    image: '/banners/taskon-campaign.png',
    alt: 'GreenCoin x TaskOn Community Quest Campaign',
    link: 'https://taskon.xyz',
    ctaText: 'Participate Now',
  },
];

export const HeroPromoModal: React.FC<HeroPromoModalProps> = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Auto-swipe timer: switches every 4 seconds when not paused
  useEffect(() => {
    if (!isOpen || isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isOpen, isPaused, nextSlide]);

  // Keyboard navigation & Escape key close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, nextSlide, prevSlide]);

  // Touch swipe handlers
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
      // Swiped left -> next slide
      nextSlide();
    } else if (diff < -minSwipeDistance) {
      // Swiped right -> prev slide
      prevSlide();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  if (!isOpen) return null;

  const currentSlide = SLIDES[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      onClick={onClose}
    >
      {/* Modal Container with curved corners */}
      <div
        className="relative w-full max-w-xl sm:max-w-2xl lg:max-w-3xl rounded-[28px] sm:rounded-[32px] overflow-hidden bg-slate-900 border border-white/20 shadow-2xl transition-all transform scale-100"
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
          aria-label="Close Announcement"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Carousel Slide Track */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
          <div
            className="flex w-full h-full transition-transform duration-600 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {SLIDES.map((slide) => (
              <div key={slide.id} className="w-full h-full shrink-0 relative">
                <a
                  href={slide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full cursor-pointer group"
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  {/* Subtle Gradient Shadow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95 shadow-md"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95 shadow-md"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Bottom Controls & Action Bar */}
        <div className="bg-slate-900/95 backdrop-blur-md border-t border-white/10 px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          {/* Progress Indicators (Pill Dots) */}
          <div className="flex items-center gap-2">
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-7 bg-white shadow-sm'
                    : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Direct CTA Action Button */}
          <a
            href={currentSlide.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-950 text-xs sm:text-sm font-semibold transition-all shadow-md hover:scale-105 active:scale-95"
          >
            <span>{currentSlide.ctaText}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
