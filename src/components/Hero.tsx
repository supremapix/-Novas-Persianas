/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, MessageSquare, Eye } from "lucide-react";
import { HERO_SLIDES } from "../data";

interface HeroProps {
  highContrast: boolean;
}

export default function Hero({ highContrast }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Slow auto-sliding (7 seconds) for comfortable reading, paused when hovering or playing is toggled off
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  // Scroll to products section smoothly
  const scrollToProducts = () => {
    const el = document.getElementById("modelos");
    if (el) {
      const headerOffset = 125;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="hero"
      className="relative w-full overflow-hidden"
      aria-label="Destaques e Ofertas de Persianas"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Slides Container */}
      <div className="relative h-[520px] sm:h-[550px] md:h-[580px] lg:h-[650px] w-full bg-stone-900">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
              aria-hidden={!isActive}
            >
              {/* Image with Dark overlay for High-Contrast text reading */}
              <img
                src={slide.image}
                alt="" // Decorative slide image, text describes slide context
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-stone-950/70 flex items-center" />

              {/* Slide Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-4xl mx-auto px-6 text-center text-white w-full py-6 md:py-0">
                  
                  {/* Subtle Accent Tag */}
                  <div className="inline-flex items-center gap-1.5 mb-4 md:mb-6 bg-brand-dark/95 text-brand-blue font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs uppercase tracking-wider border border-brand-blue/30 shadow-md">
                    <span>★ +20 Anos de Liderança e Confiança em Curitiba</span>
                  </div>
 
                  {/* Main Title - Display Font, wide, high-contrast, large size (SUA CASA, SEU ESTILO, NOSSA QUALIDADE!) */}
                  <h1 className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold md:font-black font-display tracking-tight leading-tight mb-4 md:mb-6 uppercase ${
                    highContrast ? "text-yellow-300" : "text-white"
                  }`}>
                    {idx === 0 ? (
                      <>
                        Sua Casa, Seu Estilo, <span className="text-brand-blue text-glow">Nossa Qualidade!</span>
                      </>
                    ) : (
                      slide.title
                    )}
                  </h1>
 
                  {/* Subtext description - large size, line height spaced for senior legibility */}
                  <p className="text-xs sm:text-sm md:text-lg text-slate-300 font-medium max-w-2xl mx-auto mb-6 md:mb-10 leading-relaxed">
                    Persianas sob medida com design moderno, materiais de alta qualidade e instalação especializada em Curitiba e Região Metropolitana.
                  </p>
 
                  {/* LARGE CTA Buttons styled as elegant capsules matching the mockup */}
                  {/* Elegant CTA Buttons - aligned side-by-side on mobile to optimize space and prevent layout cutoff */}
                  <div className="flex flex-row justify-center items-center gap-2.5 md:gap-4 max-w-sm sm:max-w-none mx-auto w-full px-1">
                    {slide.id === 1 ? (
                      <>
                        <a
                          href="https://api.whatsapp.com/send/?phone=5541995507310&text=Ol%C3%A1%2C%20achei%20seu%20site%20no%20%2AGoogle%2A%20e%20%2Agostaria%20de%3A%2A"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 sm:flex-none sm:w-auto px-3.5 py-2 md:px-6 md:py-2.5 rounded-xl font-black text-[10px] sm:text-xs tracking-wider shadow-xl flex items-center justify-center gap-1.5 hover:scale-105 transition-all duration-200 uppercase ${
                            highContrast 
                              ? "bg-yellow-400 text-black border-2 border-black" 
                              : "bg-brand-blue text-white hover:bg-brand-blue-hover"
                          }`}
                          aria-label="Fale conosco via WhatsApp"
                        >
                          <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                          <span>Agendar</span>
                        </a>

                        <button
                          onClick={scrollToProducts}
                          className={`flex-1 sm:flex-none sm:w-auto px-3.5 py-2 md:px-6 md:py-2.5 rounded-xl font-black text-[10px] sm:text-xs tracking-wider shadow-xl flex items-center justify-center gap-1.5 cursor-pointer border-2 hover:scale-105 transition-all duration-200 uppercase ${
                            highContrast 
                              ? "bg-black text-yellow-400 border-yellow-400" 
                              : "border-white text-white hover:bg-white hover:text-brand-dark"
                          }`}
                          aria-label="Ver Modelos de Persianas no Catálogo"
                        >
                          <Eye className="w-3.5 h-3.5 shrink-0" />
                          <span>Modelos</span>
                        </button>
                      </>
                    ) : (
                      <a
                        href={slide.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full max-w-[200px] sm:w-auto px-4 py-2 md:px-6 md:py-2.5 rounded-xl font-black text-[10px] sm:text-xs tracking-wider shadow-xl flex items-center justify-center gap-1.5 cursor-pointer border-2 hover:scale-105 transition-all duration-200 uppercase ${
                          highContrast 
                            ? "bg-yellow-400 text-black border-black" 
                            : "bg-brand-blue hover:bg-brand-blue-hover text-white border-brand-blue"
                        }`}
                        aria-label="Falar com especialista para agendar visita técnica"
                      >
                        <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                        <span>Agendar Visita</span>
                      </a>
                    )}
                  </div>
 
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Large Tactical Navigation Arrows (52x52px) - Hidden on mobile to keep screen elegant & clean */}
      <button
        onClick={handlePrev}
        className={`hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full items-center justify-center border-2 shadow-xl hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer ${
          highContrast 
            ? "bg-yellow-400 text-black border-black" 
            : "bg-white/90 hover:bg-white text-stone-900 border-stone-200"
        }`}
        aria-label="Slide Anterior"
        id="btn-hero-prev"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={handleNext}
        className={`hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full items-center justify-center border-2 shadow-xl hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer ${
          highContrast 
            ? "bg-yellow-400 text-black border-black" 
            : "bg-white/90 hover:bg-white text-stone-900 border-stone-200"
        }`}
        aria-label="Próximo Slide"
        id="btn-hero-next"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Sophisticated Segmented Progress Bar Indicators at the Bottom */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3.5 w-full max-w-[280px] px-4 justify-center"
        role="tablist"
        aria-label="Navegação elegante por progresso"
      >
        {HERO_SLIDES.map((_, idx) => {
          const isActive = idx === currentSlide;
          return (
            <button
              key={idx}
              role="tab"
              aria-selected={isActive}
              aria-label={`Ir para Slide ${idx + 1}`}
              onClick={() => setCurrentSlide(idx)}
              className="flex-1 py-2 group cursor-pointer focus:outline-none"
              id={`btn-hero-progress-${idx}`}
            >
              {/* Outer track line */}
              <div className="h-[3px] w-full bg-white/20 rounded-full overflow-hidden transition-colors group-hover:bg-white/40">
                {/* Active fill with smooth transition */}
                {isActive ? (
                  <motion.div
                    key={`${idx}-${isPlaying}`} // Resets animation on slide change
                    initial={{ width: "0%" }}
                    animate={{ width: isPlaying ? "100%" : "0%" }}
                    transition={{ duration: isPlaying ? 7 : 0, ease: "linear" }}
                    className={`h-full rounded-full ${
                      highContrast ? "bg-yellow-400" : "bg-brand-blue"
                    }`}
                  />
                ) : (
                  <div 
                    className={`h-full rounded-full transition-all duration-300 ${
                      idx < currentSlide 
                        ? highContrast ? "bg-yellow-400" : "bg-brand-blue" 
                        : "bg-transparent"
                    }`}
                    style={{ width: idx < currentSlide ? "100%" : "0%" }}
                  />
                )}
              </div>
            </button>
          );
        })}
      </div>

    </section>
  );
}
