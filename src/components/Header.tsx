/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Menu, X, ChevronDown, Phone, MessageSquare, ArrowRight, ExternalLink, ZoomIn, ZoomOut, Contrast, Mail, MapPin, Star, Navigation, Settings, BookOpen } from "lucide-react";
import { PERSIANA_CATEGORIES } from "../data";

interface HeaderProps {
  highContrast: boolean;
  setHighContrast: (val: boolean) => void;
  fontSizeLevel: number;
  setFontSizeLevel: (level: number) => void;
  onFilterProduct: (category: string) => void;
  activePage: "home" | "quem-somos" | "contato";
  setActivePage: (page: "home" | "quem-somos" | "contato") => void;
}

export default function Header({ 
  highContrast, 
  setHighContrast,
  fontSizeLevel,
  setFontSizeLevel,
  onFilterProduct,
  activePage,
  setActivePage
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Dropdown Open States (Desktop)
  const [isPersianasOpen, setIsPersianasOpen] = useState(false);
  const [isServicosOpen, setIsServicosOpen] = useState(false);

  // Accordion Open States (Mobile)
  const [isMobilePersianasOpen, setIsMobilePersianasOpen] = useState(false);
  const [isMobileServicosOpen, setIsMobileServicosOpen] = useState(false);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);

  // Timeouts for smooth dropdown delay (250ms)
  const persianasTimeoutRef = useRef<number | null>(null);
  const servicosTimeoutRef = useRef<number | null>(null);

  // Handle Scroll to shrink header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dropdown Handlers with Delay (Desktop)
  const handlePersianasEnter = () => {
    if (persianasTimeoutRef.current) clearTimeout(persianasTimeoutRef.current);
    setIsPersianasOpen(true);
  };

  const handlePersianasLeave = () => {
    persianasTimeoutRef.current = window.setTimeout(() => {
      setIsPersianasOpen(false);
    }, 250);
  };

  const handleServicosEnter = () => {
    if (servicosTimeoutRef.current) clearTimeout(servicosTimeoutRef.current);
    setIsServicosOpen(true);
  };

  const handleServicosLeave = () => {
    servicosTimeoutRef.current = window.setTimeout(() => {
      setIsServicosOpen(false);
    }, 250);
  };

  // Safe navigation click that handles auto closing mobile menu
  const handleNavItemClick = (hashId: string, categoryFilter?: string) => {
    setIsMobileMenuOpen(false);
    
    if (categoryFilter) {
      onFilterProduct(categoryFilter);
    }

    if (hashId === "sobre") {
      setActivePage("quem-somos");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (hashId === "contato") {
      setActivePage("contato");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setActivePage("home");

    setTimeout(() => {
      const element = document.getElementById(hashId);
      if (element) {
        // Calculate header offset
        const headerOffset = 120;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 120);
  };

  return (
    <>
      {/* 1. ABOVE HEADER - TICKER / LETREIRO (SUPER ACCESSIBLE & CLICÁVEL) */}
      <div 
        className={`w-full py-2.5 overflow-hidden transition-colors duration-300 border-b flex items-center ${
          highContrast 
            ? "bg-black text-white border-white" 
            : "bg-brand-dark text-slate-200 border-slate-800"
        }`}
        role="region"
        aria-label="Letreiro com Informações de Contato e Endereço"
      >
        <div className="marquee-container select-none">
          <div className="marquee-content gap-12 text-xs md:text-sm font-bold tracking-wide">
            {/* Element group 1 */}
            <a 
              href="tel:+554132788598" 
              className="inline-flex items-center gap-2 hover:text-amber-300 focus:text-amber-300 focus:underline hover:underline transition-colors focus:outline-none bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20"
              title="Ligar para o Telefone Fixo destacado"
            >
              <Phone className="w-4 h-4 text-amber-400 shrink-0 animate-pulse" />
              <span className="text-amber-300">FIXO: (41) 3278-8598</span>
            </a>
            <span className="text-slate-600 font-normal shrink-0">•</span>
            <a 
              href="tel:+5541995507310" 
              className="inline-flex items-center gap-2 hover:text-brand-blue focus:text-brand-blue focus:underline hover:underline transition-colors focus:outline-none"
              title="Ligar para Nova's Persianas"
            >
              <Phone className="w-4 h-4 text-brand-blue shrink-0" />
              <span>CELULAR: (41) 99550-7310</span>
            </a>
            <span className="text-slate-600 font-normal shrink-0">•</span>
            <a 
              href="https://api.whatsapp.com/send/?phone=5541995507310&text=Ol%C3%A1%2C%20achei%20seu%20site%20no%20%2AGoogle%2A%20e%20%2Agostaria%20de%3A%2A" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 hover:text-emerald-400 focus:text-emerald-400 focus:underline hover:underline transition-colors focus:outline-none"
              title="Falar no WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>WHATSAPP: (41) 99550-7310</span>
            </a>
            <span className="text-slate-600 font-normal shrink-0">•</span>
            <a 
              href="mailto:contato@novaspersianascuritiba.com.br" 
              className="inline-flex items-center gap-2 hover:text-brand-blue focus:text-brand-blue focus:underline hover:underline transition-colors focus:outline-none"
              title="Enviar um e-mail"
            >
              <Mail className="w-4 h-4 text-sky-400 shrink-0" />
              <span>E-MAIL: contato@novaspersianascuritiba.com.br</span>
            </a>
            <span className="text-slate-600 font-normal shrink-0">•</span>
            <a 
              href="https://maps.app.goo.gl/cywjDuMVyBH4QiDD8?g_st=ac" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 hover:text-brand-blue focus:text-brand-blue focus:underline hover:underline transition-colors focus:outline-none"
              title="Abrir no Google Maps"
            >
              <MapPin className="w-4 h-4 text-red-500 shrink-0" />
              <span>ENDEREÇO: R. Frei Henrique de Coimbra, 1750 - Hauer, Curitiba - PR</span>
            </a>
            <span className="text-slate-600 font-normal mr-8 shrink-0">•</span>
          </div>
          
          <div className="marquee-content gap-12 text-xs md:text-sm font-bold tracking-wide" aria-hidden="true">
            {/* Element group 2 for seamless loop */}
            <a 
              href="tel:+554132788598" 
              className="inline-flex items-center gap-2 hover:text-amber-300 focus:text-amber-300 focus:underline hover:underline transition-colors focus:outline-none bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20"
              tabIndex={-1}
            >
              <Phone className="w-4 h-4 text-amber-400 shrink-0 animate-pulse" />
              <span className="text-amber-300">FIXO: (41) 3278-8598</span>
            </a>
            <span className="text-slate-600 font-normal shrink-0">•</span>
            <a 
              href="tel:+5541995507310" 
              className="inline-flex items-center gap-2 hover:text-brand-blue focus:text-brand-blue focus:underline hover:underline transition-colors focus:outline-none"
              tabIndex={-1}
            >
              <Phone className="w-4 h-4 text-brand-blue shrink-0" />
              <span>CELULAR: (41) 99550-7310</span>
            </a>
            <span className="text-slate-600 font-normal shrink-0">•</span>
            <a 
              href="https://api.whatsapp.com/send/?phone=5541995507310&text=Ol%C3%A1%2C%20achei%20seu%20site%20no%20%2AGoogle%2A%20e%20%2Agostaria%20de%3A%2A" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 hover:text-emerald-400 focus:text-emerald-400 focus:underline hover:underline transition-colors focus:outline-none"
              tabIndex={-1}
            >
              <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>WHATSAPP: (41) 99550-7310</span>
            </a>
            <span className="text-slate-600 font-normal shrink-0">•</span>
            <a 
              href="mailto:contato@novaspersianascuritiba.com.br" 
              className="inline-flex items-center gap-2 hover:text-brand-blue focus:text-brand-blue focus:underline hover:underline transition-colors focus:outline-none"
              tabIndex={-1}
            >
              <Mail className="w-4 h-4 text-sky-400 shrink-0" />
              <span>E-MAIL: contato@novaspersianascuritiba.com.br</span>
            </a>
            <span className="text-slate-600 font-normal shrink-0">•</span>
            <a 
              href="https://maps.app.goo.gl/cywjDuMVyBH4QiDD8?g_st=ac" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 hover:text-brand-blue focus:text-brand-blue focus:underline hover:underline transition-colors focus:outline-none"
              tabIndex={-1}
            >
              <MapPin className="w-4 h-4 text-red-500 shrink-0" />
              <span>ENDEREÇO: R. Frei Henrique de Coimbra, 1750 - Hauer, Curitiba - PR</span>
            </a>
            <span className="text-slate-600 font-normal mr-8 shrink-0">•</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAV BAR (STICKY WITH SHRINK EFFECT) */}
      <motion.header 
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          highContrast 
            ? "bg-black text-white border-b-4 border-white" 
            : "bg-brand-dark/95 text-white shadow-lg py-3 backdrop-blur-md border-b border-slate-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          
          {/* Logo - Premium Image with Interactive/Idle Animations */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => handleNavItemClick("hero")}
              className="py-1 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 rounded-xl flex items-center justify-center group cursor-pointer overflow-hidden relative"
              aria-label="Página Inicial - Nova's Persianas logo"
            >
              <div className="relative flex items-center">
                {/* Premium Golden/Blue Ambient Shine Behind the Logo (Idle Breathe & Glow) */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 via-sky-400/10 to-brand-blue/20 blur-xl rounded-full"
                  animate={{
                    scale: [0.9, 1.15, 0.9],
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Floating Logo Element */}
                <motion.div
                  animate={{
                    y: [0, -3, 0],
                  }}
                  whileHover={{
                    scale: 1.08,
                    filter: highContrast 
                      ? "drop-shadow(0 0 12px #fff)" 
                      : "drop-shadow(0 0 12px rgba(56, 189, 248, 0.6))",
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    scale: {
                      type: "spring",
                      stiffness: 400,
                      damping: 15
                    }
                  }}
                  className="relative z-10 flex items-center"
                >
                  <img
                    src="https://img.novaspersianascuritiba.com.br/novapercianas-removebg-preview.png"
                    alt="Nova's Persianas Curitiba"
                    referrerPolicy="no-referrer"
                    className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
                  />
                  
                  {/* Premium Shimmer Sweep effect across the logo on Hover */}
                  <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-lg">
                    <motion.div
                      className="absolute -inset-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                      initial={{ x: "-100%" }}
                      whileHover={{
                        x: ["100%", "-100%"],
                        transition: { duration: 1.2, ease: "easeOut" }
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </button>
          </motion.div>

          {/* Desktop Navigation Menu (Matching image: INÍCIO, PRODUTOS, SOBRE NÓS, GALERIA, DEPOIMENTOS, CONTATO) */}
          <nav className="hidden xl:flex items-center gap-1" role="navigation" aria-label="Menu principal de navegação">
            {/* Início */}
            <button
              onClick={() => handleNavItemClick("hero")}
              className="px-3.5 py-2 font-bold hover:text-brand-blue focus:text-brand-blue rounded-lg text-sm uppercase tracking-wider transition-colors cursor-pointer text-white"
              aria-label="Ir para seção Inicial"
            >
              Início
            </button>

            {/* Persianas Dropdown (PRODUTOS) */}
            <div 
              className="relative"
              onMouseEnter={handlePersianasEnter}
              onMouseLeave={handlePersianasLeave}
            >
              <button
                className={`px-3.5 py-2 font-bold hover:text-brand-blue focus:text-brand-blue rounded-lg text-sm uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer text-white ${
                  isPersianasOpen ? "text-brand-blue" : ""
                }`}
                aria-expanded={isPersianasOpen}
                aria-haspopup="true"
                aria-label="Menu Produtos. Clique ou passe o mouse para expandir"
              >
                <span>Produtos</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isPersianasOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Delayed Dropdown Menu Container (Grid of 18 items) */}
              {isPersianasOpen && (
                <div 
                  className={`absolute left-1/2 -translate-x-1/2 mt-1 w-[680px] p-5 rounded-xl shadow-2xl grid grid-cols-3 gap-3 border transition-all duration-200 ${
                    highContrast 
                      ? "bg-black text-white border-2 border-white" 
                      : "bg-brand-dark border-slate-800 text-slate-100 animate-slide-down"
                  }`}
                  role="menu"
                  aria-label="Lista de modelos de Persianas"
                >
                  <div className="col-span-3 border-b border-slate-800 pb-2 mb-2">
                    <span className="font-bold text-sm text-brand-blue block uppercase tracking-wider">Nossos Produtos</span>
                    <span className="text-xs text-slate-400">Modelos modernos fabricados sob medida para seu ambiente</span>
                  </div>
                  {PERSIANA_CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleNavItemClick("modelos", category)}
                      className="px-3 py-2 rounded-lg text-left text-xs font-semibold hover:bg-brand-blue hover:text-white focus:bg-brand-blue focus:text-white focus:outline-none transition-colors truncate cursor-pointer text-slate-300"
                      role="menuitem"
                      title={`Filtrar por ${category}`}
                    >
                      • {category}
                    </button>
                  ))}
                  <div className="col-span-3 bg-slate-900/60 p-2.5 rounded-lg mt-2 flex justify-between items-center text-xs border border-slate-800">
                    <span className="font-semibold text-slate-400">Fale direto com nossa equipe e agende sua medição grátis</span>
                    <a 
                      href="https://api.whatsapp.com/send/?phone=5541995507310&text=Ol%C3%A1%2C%20achei%20seu%20site%20no%20%2AGoogle%2A%20e%20%2Agostaria%20de%3A%2A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue font-bold hover:underline flex items-center gap-1"
                    >
                      Solicitar ajuda <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Quem Somos */}
            <button
              onClick={() => handleNavItemClick("sobre")}
              className="px-3.5 py-2 font-bold hover:text-brand-blue focus:text-brand-blue rounded-lg text-sm uppercase tracking-wider transition-colors cursor-pointer text-white"
              aria-label="Ir para seção Sobre Nós"
            >
              Sobre Nós
            </button>

            {/* Serviços (GALERIA / SERVIÇOS) */}
            <div 
              className="relative"
              onMouseEnter={handleServicosEnter}
              onMouseLeave={handleServicosLeave}
            >
              <button
                className={`px-3.5 py-2 font-bold hover:text-brand-blue focus:text-brand-blue rounded-lg text-sm uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer text-white ${
                  isServicosOpen ? "text-brand-blue" : ""
                }`}
                aria-expanded={isServicosOpen}
                aria-haspopup="true"
                aria-label="Menu Serviços e Galeria. Clique ou passe o mouse para expandir"
              >
                <span>Serviços</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicosOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Delayed Dropdown Menu Container */}
              {isServicosOpen && (
                <div 
                  className={`absolute left-0 mt-1 w-64 p-3 rounded-xl shadow-2xl flex flex-col gap-1 border transition-all duration-200 ${
                    highContrast 
                      ? "bg-black text-white border-2 border-white" 
                      : "bg-brand-dark border-slate-800 text-slate-100 animate-slide-down"
                  }`}
                  role="menu"
                  aria-label="Lista de serviços especializados"
                >
                  <button
                    onClick={() => handleNavItemClick("servicos")}
                    className="px-4 py-2 rounded-lg text-left text-xs font-bold hover:bg-brand-blue hover:text-white focus:bg-brand-blue focus:outline-none transition-colors cursor-pointer text-slate-300"
                    role="menuitem"
                  >
                    Instalações Especializadas
                  </button>
                  <button
                    onClick={() => handleNavItemClick("servicos")}
                    className="px-4 py-2 rounded-lg text-left text-xs font-bold hover:bg-brand-blue hover:text-white focus:bg-brand-blue focus:outline-none transition-colors cursor-pointer text-slate-300"
                    role="menuitem"
                  >
                    Higienização e Lavagem
                  </button>
                  <button
                    onClick={() => handleNavItemClick("servicos")}
                    className="px-4 py-2 rounded-lg text-left text-xs font-bold hover:bg-brand-blue hover:text-white focus:bg-brand-blue focus:outline-none transition-colors cursor-pointer text-slate-300"
                    role="menuitem"
                  >
                    Consertos e Reformas
                  </button>
                </div>
              )}
            </div>

            {/* Depoimentos */}
            <button
              onClick={() => handleNavItemClick("depoimentos")}
              className="px-3.5 py-2 font-bold hover:text-brand-blue focus:text-brand-blue rounded-lg text-sm uppercase tracking-wider transition-colors cursor-pointer text-white"
              aria-label="Ir para seção de Depoimentos"
            >
              Depoimentos
            </button>

            {/* Contato */}
            <button
              onClick={() => handleNavItemClick("contato")}
              className="px-3.5 py-2 font-bold hover:text-brand-blue focus:text-brand-blue rounded-lg text-sm uppercase tracking-wider transition-colors cursor-pointer text-white"
              aria-label="Ir para informações de contato"
            >
              Contato
            </button>

            {/* Catálogo */}
            <a
              href="https://wa.me/c/554195507310"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 font-black text-emerald-400 hover:text-emerald-300 focus:text-emerald-300 rounded-lg text-sm uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
              aria-label="Ver Catálogo de Persianas no WhatsApp (abre em nova janela)"
              title="Ver Catálogo de Persianas no WhatsApp"
            >
              <BookOpen className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Catálogo</span>
            </a>

            {/* Avaliar (Review) - Highlighted Link */}
            <a
              href="https://share.google/UZ4TJH0aoxwaonagc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 font-black hover:text-amber-300 focus:text-amber-300 rounded-lg text-sm uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer text-amber-400"
              aria-label="Avaliar Nova's Persianas no Google (abre em nova janela)"
              title="Deixar avaliação no Google"
            >
              <Star className="w-4 h-4 fill-amber-400/20 text-amber-400 shrink-0" />
              <span>Avaliar</span>
            </a>

            {/* Rotas (Routes) - Highlighted Link */}
            <a
              href="https://maps.app.goo.gl/cywjDuMVyBH4QiDD8?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 font-black hover:text-sky-300 focus:text-sky-300 rounded-lg text-sm uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer text-sky-400"
              aria-label="Como chegar no mapa - Rotas (abre em nova janela)"
              title="Ver rotas no Google Maps"
            >
              <Navigation className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Rotas</span>
            </a>
          </nav>

            <div className="hidden xl:flex items-center gap-2.5">
            <a
              href="tel:+554132788598"
              className={`px-4 py-2 rounded-xl font-black text-[12px] tracking-wider flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md border-2 ${
                highContrast 
                  ? "bg-black text-yellow-400 border-yellow-400" 
                  : "bg-amber-500 text-slate-950 border-amber-400 hover:bg-amber-400"
              }`}
              id="header-btn-fixo"
              aria-label="Ligar para o Telefone Fixo"
              title="Ligar para o Telefone Fixo (41) 3278-8598"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>FIXO: (41) 3278-8598</span>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5541995507310&text=Ol%C3%A1%2C%20achei%20seu%20site%20no%20%2AGoogle%2A%20e%20%2Agostaria%20de%3A%2A"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-xl font-extrabold text-[11px] tracking-wider flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md ${
                highContrast 
                  ? "bg-yellow-400 text-black border-2 border-black" 
                  : "bg-brand-blue text-white hover:bg-brand-blue-hover"
              }`}
              id="header-btn-budget"
              aria-label="Solicitar Orçamento via WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>ORÇAMENTO</span>
            </a>
          </div>

          {/* Mobile Menu Open Button - LARGE & ACCESSIBLE (minimum 48x48px touch target) */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`p-2 px-3.5 rounded-lg border flex items-center gap-1.5 transition-colors cursor-pointer min-w-[48px] min-h-[48px] focus:ring-4 focus:ring-brand-blue ${
                highContrast 
                  ? "bg-yellow-400 text-black border-black" 
                  : "bg-slate-800/80 text-white border-slate-700 hover:bg-slate-700"
              }`}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-overlay"
              aria-label="Abrir Menu de Navegação"
              id="btn-mobile-menu-open"
            >
              <Menu className="w-5 h-5 text-brand-blue" />
              <span className="text-xs font-bold uppercase tracking-wider">Menu</span>
            </button>
          </div>

        </div>
      </motion.header>

      {/* 3. MOBILE MENU FULL-SCREEN OVERLAY (SENIOR OPTIMIZED) */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-navigation-overlay"
          className="fixed inset-0 z-50 flex flex-col bg-slate-900/60 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          {/* Menu Drawer Container - Full screen dark overlay */}
          <div 
            className={`w-full max-w-md ml-auto h-full flex flex-col shadow-2xl overflow-y-auto ${
              highContrast 
                ? "bg-black text-white border-l-4 border-white" 
                : "bg-brand-dark text-white border-l border-slate-800"
            }`}
          >
            {/* Header of Mobile Menu with LARGE closing target */}
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <span id="mobile-menu-title" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Navegação
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className={`p-3 rounded-lg border-2 flex items-center gap-1.5 transition-colors cursor-pointer min-w-[48px] min-h-[48px] focus:ring-4 focus:ring-brand-blue ${
                  highContrast 
                    ? "bg-yellow-400 text-black border-black" 
                    : "bg-slate-800 text-white border-slate-700 hover:bg-slate-700"
                }`}
                aria-label="Fechar Menu de Navegação"
                id="btn-mobile-menu-close"
              >
                <span className="text-sm font-bold">Fechar</span>
                <X className="w-5 h-5 text-brand-blue" />
              </button>
            </div>

            {/* ⭐ BOTÕES PRIORITÁRIOS (ALTAMENTE VISÍVEIS) */}
            <div className={`p-4 border-b border-slate-800 flex flex-col gap-2.5 ${highContrast ? 'bg-zinc-950' : 'bg-slate-900/40'}`}>
              <div className="text-xs font-black uppercase tracking-wider text-brand-blue flex items-center gap-1.5 mb-0.5">
                <span className="text-yellow-400">★</span>
                <span>Canais Rápidos e Principais</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {/* 1. Orçamento WhatsApp */}
                <a
                  href="https://api.whatsapp.com/send/?phone=5541995507310&text=Ol%C3%A1%2C%20achei%20seu%20site%20no%20%2AGoogle%2A%20e%20%2Agostaria%20de%3A%2A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-center shadow-md active:scale-95 transition-all min-h-[72px] border border-emerald-500 cursor-pointer"
                  aria-label="Solicitar Orçamento no WhatsApp"
                >
                  <MessageSquare className="w-5 h-5 mb-1 text-white animate-bounce" />
                  <span className="text-[11px] font-black tracking-tight uppercase">Orçamento</span>
                </a>

                {/* 2. Rotas */}
                <a
                  href="https://maps.app.goo.gl/cywjDuMVyBH4QiDD8?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-center shadow-md active:scale-95 transition-all min-h-[72px] border border-sky-500 cursor-pointer"
                  aria-label="Ver rota para a loja física"
                >
                  <Navigation className="w-5 h-5 mb-1 text-sky-200" />
                  <span className="text-[11px] font-black tracking-tight uppercase">Rotas</span>
                </a>

                {/* 3. Avaliar */}
                <a
                  href="https://share.google/UZ4TJH0aoxwaonagc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-center shadow-md active:scale-95 transition-all min-h-[72px] border border-amber-400 cursor-pointer"
                  aria-label="Avaliar a loja no Google"
                >
                  <Star className="w-5 h-5 mb-1 fill-slate-950 text-slate-950" />
                  <span className="text-[11px] font-black tracking-tight uppercase text-slate-950">Avaliar</span>
                </a>

                {/* 4. Ligar Telefone */}
                <a
                  href="tel:+5541995507310"
                  className="flex flex-col items-center justify-center p-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-center shadow-md active:scale-95 transition-all min-h-[72px] border border-slate-700 cursor-pointer"
                  aria-label="Ligar por telefone"
                >
                  <Phone className="w-5 h-5 mb-1 text-brand-blue" />
                  <span className="text-[11px] font-black tracking-tight uppercase">Ligar</span>
                </a>
              </div>
            </div>

            {/* Menu Items - LISTA VERTICAL GRANDE, ESPAÇAMENTO MÍNIMO 16PX, TOQUE MÍNIMO 48PX */}
            <nav className="p-5 flex-1 flex flex-col gap-4 text-lg font-bold">
              
              {/* Home */}
              <button
                onClick={() => handleNavItemClick("hero")}
                className="w-full text-left p-4 rounded-xl border-b border-slate-800 hover:bg-slate-800/40 focus:bg-slate-800/40 transition-colors min-h-[60px] flex items-center cursor-pointer text-white"
                aria-label="Ir para a página inicial"
              >
                Início (Home)
              </button>

              {/* Quem Somos */}
              <button
                onClick={() => handleNavItemClick("sobre")}
                className="w-full text-left p-4 rounded-xl border-b border-slate-800 hover:bg-slate-800/40 focus:bg-slate-800/40 transition-colors min-h-[60px] flex items-center cursor-pointer text-white"
                aria-label="Ir para seção sobre a empresa"
              >
                Quem Somos
              </button>

              {/* Persianas Accordion Section */}
              <div className="border-b border-slate-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => setIsMobilePersianasOpen(!isMobilePersianasOpen)}
                  className="w-full text-left p-4 hover:bg-slate-800/40 focus:bg-slate-800/40 transition-colors min-h-[60px] flex items-center justify-between cursor-pointer text-white"
                  aria-expanded={isMobilePersianasOpen}
                  aria-label="Menu Persianas. Clique para expandir a lista de categorias."
                >
                  <span>Persianas</span>
                  <span className="text-xl font-black text-brand-blue">
                    {isMobilePersianasOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Submenu de Persianas em lista vertical espaçada */}
                {isMobilePersianasOpen && (
                  <div className="bg-slate-900/60 p-2 flex flex-col gap-2 max-h-[250px] overflow-y-auto">
                    {PERSIANA_CATEGORIES.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleNavItemClick("modelos", category)}
                        className="w-full text-left py-3 px-6 text-base font-medium hover:bg-brand-blue/30 rounded-lg min-h-[48px] flex items-center text-slate-300 hover:text-white border-l-4 border-brand-blue/50 cursor-pointer"
                        title={`Filtrar modelos por ${category}`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Serviços Accordion Section */}
              <div className="border-b border-slate-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => setIsMobileServicosOpen(!isMobileServicosOpen)}
                  className="w-full text-left p-4 hover:bg-slate-800/40 focus:bg-slate-800/40 transition-colors min-h-[60px] flex items-center justify-between cursor-pointer text-white"
                  aria-expanded={isMobileServicosOpen}
                  aria-label="Menu Serviços. Clique para expandir a lista de serviços."
                >
                  <span>Serviços</span>
                  <span className="text-xl font-black text-brand-blue">
                    {isMobileServicosOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Submenu de Serviços */}
                {isMobileServicosOpen && (
                  <div className="bg-slate-900/60 p-2 flex flex-col gap-2">
                    <button
                      onClick={() => handleNavItemClick("servicos")}
                      className="w-full text-left py-3 px-6 text-base font-medium hover:bg-brand-blue/30 rounded-lg min-h-[48px] flex items-center text-slate-300 cursor-pointer"
                    >
                      Instalação de Persianas
                    </button>
                    <button
                      onClick={() => handleNavItemClick("servicos")}
                      className="w-full text-left py-3 px-6 text-base font-medium hover:bg-brand-blue/30 rounded-lg min-h-[48px] flex items-center text-slate-300 cursor-pointer"
                    >
                      Higienização / Lavagem
                    </button>
                    <button
                      onClick={() => handleNavItemClick("servicos")}
                      className="w-full text-left py-3 px-6 text-base font-medium hover:bg-brand-blue/30 rounded-lg min-h-[48px] flex items-center text-slate-300 cursor-pointer"
                    >
                      Consertos e Peças
                    </button>
                  </div>
                )}
              </div>

              {/* Contato */}
              <button
                onClick={() => handleNavItemClick("contato")}
                className="w-full text-left p-4 rounded-xl border-b border-slate-800 hover:bg-slate-800/40 focus:bg-slate-800/40 transition-colors min-h-[60px] flex items-center cursor-pointer text-white"
                aria-label="Ir para rodapé com contatos"
              >
                Fale Conosco (Contato)
              </button>

              {/* Catálogo no WhatsApp */}
              <a
                href="https://wa.me/c/554195507310"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left p-4 rounded-xl border-b border-slate-800 hover:bg-emerald-900/20 focus:bg-emerald-900/20 text-emerald-400 font-extrabold transition-colors min-h-[60px] flex items-center gap-3 cursor-pointer"
                aria-label="Ver Catálogo de Persianas no WhatsApp"
              >
                <BookOpen className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Catálogo no WhatsApp</span>
              </a>
            </nav>

            {/* COLLAPSIBLE ACCESSIBILITY PANEL (SENIOR OPTIONS COLLAPSED AT THE BOTTOM) */}
            <div className="p-4 border-t border-slate-800 bg-slate-900/20">
              <button
                onClick={() => setIsAccessibilityOpen(!isAccessibilityOpen)}
                className="w-full py-3.5 px-4 bg-slate-800/60 hover:bg-slate-800 text-slate-200 hover:text-white font-extrabold text-sm rounded-xl border border-slate-700 flex items-center justify-between transition-colors cursor-pointer min-h-[52px]"
                aria-expanded={isAccessibilityOpen}
                aria-label="Opções de Acessibilidade para Idosos. Clique para expandir ou contrair controles de tamanho de letra e contraste."
              >
                <span className="flex items-center gap-2">
                  <Settings className="w-4.5 h-4.5 text-brand-blue" />
                  <span>Ajustes para Idosos (Letras e Contraste)</span>
                </span>
                <span className="text-lg font-black text-brand-blue">
                  {isAccessibilityOpen ? "−" : "+"}
                </span>
              </button>

              {/* Expandable Option Controls */}
              {isAccessibilityOpen && (
                <div className="mt-3 p-4 bg-slate-950/80 rounded-xl border border-slate-800 flex flex-col gap-4 animate-slide-down">
                  {/* Contrast Control */}
                  <button
                    onClick={() => setHighContrast(!highContrast)}
                    className={`w-full p-4 rounded-xl border flex items-center justify-between text-left cursor-pointer min-h-[56px] transition-all ${
                      highContrast 
                        ? "bg-yellow-400 text-black border-black font-black" 
                        : "bg-slate-800 text-slate-100 border-slate-700 font-bold"
                    }`}
                    aria-pressed={highContrast}
                  >
                    <span className="flex items-center gap-2 text-sm uppercase tracking-wider">
                      <Contrast className="w-5 h-5 shrink-0" />
                      Alto Contraste
                    </span>
                    <span className="text-xs bg-black/10 px-2 py-0.5 rounded font-mono uppercase">
                      {highContrast ? "Ativo" : "Desativado"}
                    </span>
                  </button>

                  {/* Font Size Zoom Controls */}
                  <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700 flex flex-col gap-2">
                    <span className="text-xs text-slate-300 font-bold uppercase tracking-wider block">
                      Tamanho das Letras:
                    </span>
                    <div className="flex gap-2 items-center">
                      <button
                        onClick={() => fontSizeLevel > 0 && setFontSizeLevel(fontSizeLevel - 1)}
                        disabled={fontSizeLevel === 0}
                        className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 rounded-lg text-white font-extrabold text-base flex items-center justify-center gap-1 cursor-pointer min-h-[48px]"
                        aria-label="Diminuir letra"
                      >
                        <ZoomOut className="w-4 h-4" />
                        <span>Letra A-</span>
                      </button>
                      <button
                        onClick={() => fontSizeLevel < 3 && setFontSizeLevel(fontSizeLevel + 1)}
                        disabled={fontSizeLevel === 3}
                        className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 rounded-lg text-white font-extrabold text-base flex items-center justify-center gap-1 cursor-pointer min-h-[48px]"
                        aria-label="Aumentar letra"
                      >
                        <ZoomIn className="w-4 h-4" />
                        <span>Letra A+</span>
                      </button>
                    </div>
                    <div className="text-center text-xs text-slate-300 font-bold uppercase tracking-wider mt-1">
                      Atual: <span className="text-brand-blue">{fontSizeLevel === 0 ? "Normal" : fontSizeLevel === 1 ? "Grande" : fontSizeLevel === 2 ? "Muito Grande" : "Máximo"}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Section - FIXED WHATSAPP BUTTON EM TELA MOBILE */}
            <div className="p-4 border-t border-slate-800 bg-slate-950 mt-auto">
              <a
                href="https://api.whatsapp.com/send/?phone=5541995507310&text=Ol%C3%A1%2C%20achei%20seu%20site%20no%20%2AGoogle%2A%20e%20%2Agostaria%20de%3A%2A"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-brand-blue hover:bg-brand-blue-hover text-white font-extrabold text-lg rounded-xl shadow-lg flex items-center justify-center gap-2.5 transition-colors cursor-pointer min-h-[56px]"
                aria-label="Falar com Especialista pelo WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
                <span>FALE CONOSCO AGORA</span>
              </a>
              <div className="text-center text-xs text-slate-400 mt-2">
                Atendimento Rápido e Humano • Curitiba/PR
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
