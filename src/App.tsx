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
import InstagramFeed from "./components/InstagramFeed";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

export default function App() {
  const [fontSizeLevel, setFontSizeLevel] = useState(0); // 0: Normal, 1: Medium, 2: Large, 3: Very Large
  const [highContrast, setHighContrast] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAccessibilityBar, setShowAccessibilityBar] = useState(false);

  const handleFilterProduct = (category: string) => {
    setSelectedCategory(category);
  };

  return (
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
      />

      {/* MAIN MAIN CONTENT CONTAINER */}
      <main id="main-content" role="main" className="flex-grow">
        
        {/* 3. HERO / MAIN CAROUSEL */}
        <Hero highContrast={highContrast} />

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

        {/* 10. SECONDARY BENEFITS (Medição Grátis, Segurança, etc) */}
        <Benefits highContrast={highContrast} type="secondary" />

        {/* 11. INSTAGRAM FEED INTEGRATION */}
        <InstagramFeed highContrast={highContrast} />

      </main>

      {/* 11. DETAILED FOOTER (with 4 columns & Map location) */}
      <Footer 
        highContrast={highContrast} 
        onFilterProduct={handleFilterProduct} 
        onOpenAccessibility={() => {
          setShowAccessibilityBar(true);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* 12. FLOATING STICKY CONTROLS (Back-to-top & breathing WhatsApp button) */}
      <FloatingContact highContrast={highContrast} />

    </div>
  );
}
