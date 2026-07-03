/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import AccessibilityPanel from "./components/AccessibilityPanel";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import PromoBanners from "./components/PromoBanners";
import FeaturedProducts from "./components/FeaturedProducts";
import AboutSection from "./components/AboutSection";
import Services from "./components/Services";
import GoogleReviews from "./components/GoogleReviews";
import InstagramFeed from "./components/InstagramFeed";
import QuemSomosPage from "./components/QuemSomosPage";
import ContatoPage from "./components/ContatoPage";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import { HelmetProvider } from "react-helmet-async";
import EnhancedSEO from "./components/EnhancedSEO";
import SeoLandingPage from "./components/SeoLandingPage";
import Redirect301 from "./components/Redirect301";
import NotFoundPage from "./components/NotFoundPage";

import SitemapPage from "./components/SitemapPage";
import { ALL_SEO_ROUTES } from "./data/seoContent";
import VideoSection from "./components/VideoSection";

const VALID_SEO_ROUTES = ALL_SEO_ROUTES;

export default function App() {
  const [fontSizeLevel, setFontSizeLevel] = useState(0); // 0: Normal, 1: Medium, 2: Large, 3: Very Large
  const [highContrast, setHighContrast] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAccessibilityBar, setShowAccessibilityBar] = useState(false);
  const [activePage, setActivePage] = useState<string>("home");

  // Check URL path on mount to route correctly
  React.useEffect(() => {
    const path = window.location.pathname.replace(/^\/|\/$/g, "");
    if (path === "") {
      setActivePage("home");
    } else if (path === "sobre") {
      setActivePage("quem-somos");
    } else if (path === "contato") {
      setActivePage("contato");
    } else if (path === "mapa-do-site") {
      setActivePage("mapa-do-site");
    } else if (path === "shop") {
      setActivePage("home");
      setTimeout(() => {
        const modelsSection = document.getElementById("modelos");
        if (modelsSection) {
          modelsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 800);
    } else if (["instalacoes", "instalacao", "instalacao-de-persianas"].includes(path)) {
      setActivePage("redirect-instalacao");
    } else if (VALID_SEO_ROUTES.includes(path)) {
      setActivePage(path);
    } else {
      setActivePage("404");
    }
  }, []);

  // Listen to popstate for back/forward browser button navigation
  React.useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\/|\/$/g, "");
      if (path === "") {
        setActivePage("home");
      } else if (path === "sobre") {
        setActivePage("quem-somos");
      } else if (path === "contato") {
        setActivePage("contato");
      } else if (path === "mapa-do-site") {
        setActivePage("mapa-do-site");
      } else if (path === "shop") {
        setActivePage("home");
        setTimeout(() => {
          const modelsSection = document.getElementById("modelos");
          if (modelsSection) {
            modelsSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 800);
      } else if (["instalacoes", "instalacao", "instalacao-de-persianas"].includes(path)) {
        setActivePage("redirect-instalacao");
      } else if (VALID_SEO_ROUTES.includes(path)) {
        setActivePage(path);
      } else {
        setActivePage("404");
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Safe navigation proxy that updates address bar
  const navigateTo = (page: string) => {
    let urlPath = "/";
    if (page === "quem-somos") {
      urlPath = "/sobre";
    } else if (page === "contato") {
      urlPath = "/contato";
    } else if (page !== "home") {
      urlPath = `/${page}`;
    }
    
    if (window.location.pathname !== urlPath) {
      window.history.pushState({}, "", urlPath);
    }
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilterProduct = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <HelmetProvider>
      <div 
        className={`min-h-screen flex flex-col transition-colors duration-300 ${
          highContrast 
            ? "bg-black text-white dark-theme" 
            : "bg-white text-brand-text"
        }`}
        style={{
          // Line height and letter spacing adjustments for high readability
          lineHeight: "1.65",
          letterSpacing: "0.015em"
        }}
      >
        {/* Dynamic SEO Meta Tags & structured schemas Injector */}
        <EnhancedSEO activePage={activePage} />

      {/* 1. TOP BAR - ACCESSIBILITY HUB (Zoom + High Contrast) */}
      <AccessibilityPanel
        fontSizeLevel={fontSizeLevel}
        setFontSizeLevel={setFontSizeLevel}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        isOpen={showAccessibilityBar}
        setIsOpen={setShowAccessibilityBar}
      />

      {/* 2. MAIN HEADER (Sticky with scroll shrinking, large mobile targets) */}
      <Header 
        highContrast={highContrast} 
        setHighContrast={setHighContrast}
        fontSizeLevel={fontSizeLevel}
        setFontSizeLevel={setFontSizeLevel}
        onFilterProduct={handleFilterProduct} 
        activePage={activePage as any}
        setActivePage={(page) => navigateTo(page)}
      />

      {/* MAIN MAIN CONTENT CONTAINER */}
      <main id="main-content" role="main" className="flex-grow">
        
        {activePage === "home" && (
          <>
            {/* 3. HERO / MAIN CAROUSEL */}
            <Hero highContrast={highContrast} />

            {/* NEW VIDEO SECTION RIGHT AFTER HERO */}
            <VideoSection activePage="home" highContrast={highContrast} />

            {/* 4. PRIMARY BENEFITS (Garantia, Entrega, Suporte) */}
            <Benefits highContrast={highContrast} type="primary" />

            {/* 5. TOP CATEGORIES BANNER */}
            <PromoBanners 
              highContrast={highContrast} 
              type="top-categories" 
              onSelectCategory={handleFilterProduct} 
            />

            {/* 6. SPECIAL OFFERS / DETAILED PRODUCTS GRID */}
            <FeaturedProducts
              highContrast={highContrast}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            {/* 7. CHOOSE IDEAL PRODUCT BANNER */}
            <PromoBanners 
              highContrast={highContrast} 
              type="choose-ideal" 
            />

            {/* 8. INSTITUTIONAL ABOUT US (with live animated metrics counter) */}
            <AboutSection highContrast={highContrast} />

            {/* 9. DETAILED SERVICE BLOCKS (Instalações, Lavagem, Consertos) */}
            <Services highContrast={highContrast} />

            {/* 10. GOOGLE REVIEWS SECTION (with bottom to top animation and GMaps card design) */}
            <GoogleReviews highContrast={highContrast} />

            {/* 11. SECONDARY BENEFITS (Medição Grátis, Segurança, etc) */}
            <Benefits highContrast={highContrast} type="secondary" />

            {/* 12. INSTAGRAM FEED INTEGRATION */}
            <InstagramFeed highContrast={highContrast} />
          </>
        )}

        {activePage === "quem-somos" && (
          <QuemSomosPage 
            highContrast={highContrast} 
            onNavigateHome={() => navigateTo("home")}
          />
        )}

        {activePage === "contato" && (
          <ContatoPage 
            highContrast={highContrast} 
            onNavigateHome={() => navigateTo("home")}
          />
        )}

        {activePage === "mapa-do-site" && (
          <SitemapPage 
            highContrast={highContrast} 
            onNavigateHome={() => navigateTo("home")}
            setActivePage={(page) => navigateTo(page)}
          />
        )}

        {/* Dynamic SEO Landing Pages Routing */}
        {VALID_SEO_ROUTES.includes(activePage) && (
          <SeoLandingPage
            highContrast={highContrast}
            route={activePage}
            onNavigateHome={() => navigateTo("home")}
            setActivePage={(page) => navigateTo(page)}
          />
        )}

        {/* Server/Client-side 301 redirection fallback */}
        {activePage === "redirect-instalacao" && (
          <Redirect301 to="/instalacao-de-persianas-curitiba" />
        )}

        {/* Fallback 404 Intelligent Page */}
        {activePage === "404" && (
          <NotFoundPage
            highContrast={highContrast}
            onNavigate={(page) => navigateTo(page)}
          />
        )}

        {/* VideoSection for all non-home pages right before footer */}
        {activePage !== "home" && activePage !== "redirect-instalacao" && (
          <VideoSection activePage={activePage} highContrast={highContrast} />
        )}

      </main>

      {/* 11. DETAILED FOOTER (with 4 columns & Map location) */}
      <Footer 
        highContrast={highContrast} 
        onFilterProduct={handleFilterProduct} 
        activePage={activePage as any}
        setActivePage={(page) => navigateTo(page)}
        onOpenAccessibility={() => {
          setShowAccessibilityBar(true);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* 12. FLOATING STICKY CONTROLS (Back-to-top & breathing WhatsApp button) */}
      <FloatingContact highContrast={highContrast} />

      </div>
    </HelmetProvider>
  );
}
