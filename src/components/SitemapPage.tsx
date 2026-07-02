/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Map, ArrowLeft, Layers, MapPin, HelpCircle, FileText, Settings } from "lucide-react";
import { 
  CORE_SEO_ROUTES, 
  PRODUCT_SEO_ROUTES, 
  NEIGHBORHOOD_SEO_ROUTES, 
  INTENT_SEO_ROUTES 
} from "../data/seoContent";

interface SitemapPageProps {
  highContrast: boolean;
  onNavigateHome: () => void;
  setActivePage: (page: string) => void;
}

export default function SitemapPage({ highContrast, onNavigateHome, setActivePage }: SitemapPageProps) {
  
  const formatRouteName = (route: string) => {
    return route
      .replace("persianas-", "Persianas no ")
      .replace("persiana-", "Persiana ")
      .replace("-curitiba", " Curitiba")
      .replace(/-/g, " ")
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleRouteClick = (route: string) => {
    setActivePage(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`pt-8 pb-20 transition-colors duration-300 ${
      highContrast ? "bg-black text-white" : "bg-stone-50/50 text-stone-800"
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-400">
          <button onClick={onNavigateHome} className="hover:text-brand-blue transition-colors cursor-pointer">
            Início
          </button>
          <span>/</span>
          <span className={highContrast ? "text-yellow-400" : "text-stone-700"}>
            Mapa do Site
          </span>
        </div>

        {/* Back Button */}
        <button
          onClick={onNavigateHome}
          className={`inline-flex items-center gap-2 mb-8 text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
            highContrast 
              ? "text-yellow-300 hover:text-white" 
              : "text-brand-blue hover:text-brand-blue-hover"
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para o Início</span>
        </button>

        {/* Header Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue/10 mb-4 text-brand-blue">
            <Map className="w-8 h-8" />
          </div>
          <h1 className={`text-3xl md:text-5xl font-black uppercase font-display tracking-tight mb-4 ${
            highContrast ? "text-yellow-300" : "text-stone-900"
          }`}>
            Mapa do Site completo
          </h1>
          <p className="text-sm md:text-base text-stone-500 font-semibold leading-relaxed">
            Navegue de forma transparente e estruturada por todas as seções institucionais, modelos de persianas sob medida sob encomenda e regiões de atendimento local em Curitiba e Região Metropolitana.
          </p>
        </div>

        {/* Directory Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Section 1: Institutional Pages */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`p-6 rounded-2xl border ${
              highContrast ? "bg-stone-950 border-white" : "bg-white border-stone-200/60 shadow-sm"
            }`}
          >
            <div className="flex items-center gap-2.5 mb-5 border-b pb-3 border-stone-200/50">
              <FileText className="w-5 h-5 text-brand-blue" />
              <h2 className={`text-base font-black uppercase tracking-wider ${
                highContrast ? "text-yellow-300" : "text-brand-blue"
              }`}>
                Páginas Institucionais
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <button
                onClick={onNavigateHome}
                className={`text-left text-sm font-bold hover:underline transition-all cursor-pointer ${
                  highContrast ? "text-stone-300 hover:text-yellow-400" : "text-stone-600 hover:text-brand-blue"
                }`}
              >
                🏠 Página Inicial (Home)
              </button>
              <button
                onClick={() => handleRouteClick("quem-somos")}
                className={`text-left text-sm font-bold hover:underline transition-all cursor-pointer ${
                  highContrast ? "text-stone-300 hover:text-yellow-400" : "text-stone-600 hover:text-brand-blue"
                }`}
              >
                👥 Quem Somos (Sobre nós)
              </button>
              <button
                onClick={() => handleRouteClick("contato")}
                className={`text-left text-sm font-bold hover:underline transition-all cursor-pointer ${
                  highContrast ? "text-stone-300 hover:text-yellow-400" : "text-stone-600 hover:text-brand-blue"
                }`}
              >
                📞 Fale Conosco & Contatos
              </button>
              <button
                onClick={() => {
                  setActivePage("home");
                  setTimeout(() => {
                    const el = document.getElementById("modelos");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }, 500);
                }}
                className={`text-left text-sm font-bold hover:underline transition-all cursor-pointer ${
                  highContrast ? "text-stone-300 hover:text-yellow-400" : "text-stone-600 hover:text-brand-blue"
                }`}
              >
                📐 Showroom de Produtos
              </button>
            </div>
          </motion.div>

          {/* Section 2: Product Routes */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`p-6 rounded-2xl border md:col-span-1 ${
              highContrast ? "bg-stone-950 border-white" : "bg-white border-stone-200/60 shadow-sm"
            }`}
          >
            <div className="flex items-center gap-2.5 mb-5 border-b pb-3 border-stone-200/50">
              <Layers className="w-5 h-5 text-brand-blue" />
              <h2 className={`text-base font-black uppercase tracking-wider ${
                highContrast ? "text-yellow-300" : "text-brand-blue"
              }`}>
                Modelos de Persianas
              </h2>
            </div>
            <div className="flex flex-col gap-2 max-h-72 overflow-y-auto pr-2 custom-scrollbar">
              {PRODUCT_SEO_ROUTES.map((route) => (
                <button
                  key={route}
                  onClick={() => handleRouteClick(route)}
                  className={`text-left text-xs font-bold py-1 hover:underline transition-all cursor-pointer ${
                    highContrast ? "text-stone-300 hover:text-yellow-400" : "text-stone-600 hover:text-brand-blue"
                  }`}
                >
                  👉 {formatRouteName(route)}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Section 3: Neighborhood Geotargeting */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className={`p-6 rounded-2xl border ${
              highContrast ? "bg-stone-950 border-white" : "bg-white border-stone-200/60 shadow-sm"
            }`}
          >
            <div className="flex items-center gap-2.5 mb-5 border-b pb-3 border-stone-200/50">
              <MapPin className="w-5 h-5 text-brand-blue" />
              <h2 className={`text-base font-black uppercase tracking-wider ${
                highContrast ? "text-yellow-300" : "text-brand-blue"
              }`}>
                Bairros Atendidos Curitiba
              </h2>
            </div>
            <div className="flex flex-col gap-2 max-h-72 overflow-y-auto pr-2 custom-scrollbar">
              {NEIGHBORHOOD_SEO_ROUTES.map((route) => (
                <button
                  key={route}
                  onClick={() => handleRouteClick(route)}
                  className={`text-left text-xs font-bold py-1 hover:underline transition-all cursor-pointer ${
                    highContrast ? "text-stone-300 hover:text-yellow-400" : "text-stone-600 hover:text-brand-blue"
                  }`}
                >
                  📍 {formatRouteName(route)}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Section 4: Search Intents & Guides */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className={`p-6 rounded-2xl border md:col-span-2 ${
              highContrast ? "bg-stone-950 border-white" : "bg-white border-stone-200/60 shadow-sm"
            }`}
          >
            <div className="flex items-center gap-2.5 mb-5 border-b pb-3 border-stone-200/50">
              <HelpCircle className="w-5 h-5 text-brand-blue" />
              <h2 className={`text-base font-black uppercase tracking-wider ${
                highContrast ? "text-yellow-300" : "text-brand-blue"
              }`}>
                Dúvidas, Planejamento e Guias de Preços
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
              {INTENT_SEO_ROUTES.map((route) => (
                <button
                  key={route}
                  onClick={() => handleRouteClick(route)}
                  className={`text-left text-xs font-bold py-1 hover:underline transition-all cursor-pointer truncate ${
                    highContrast ? "text-stone-300 hover:text-yellow-400" : "text-stone-600 hover:text-brand-blue"
                  }`}
                >
                  💬 {route.replace(/-/g, " ").replace(/^\w/, c => c.toUpperCase())}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Section 5: Core Landings & Services */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className={`p-6 rounded-2xl border ${
              highContrast ? "bg-stone-950 border-white" : "bg-white border-stone-200/60 shadow-sm"
            }`}
          >
            <div className="flex items-center gap-2.5 mb-5 border-b pb-3 border-stone-200/50">
              <Settings className="w-5 h-5 text-brand-blue" />
              <h2 className={`text-base font-black uppercase tracking-wider ${
                highContrast ? "text-yellow-300" : "text-brand-blue"
              }`}>
                Páginas de Destaque
              </h2>
            </div>
            <div className="flex flex-col gap-2.5">
              {CORE_SEO_ROUTES.slice(0, 10).map((route) => (
                <button
                  key={route}
                  onClick={() => handleRouteClick(route)}
                  className={`text-left text-xs font-bold py-1 hover:underline transition-all cursor-pointer ${
                    highContrast ? "text-stone-300 hover:text-yellow-400" : "text-stone-600 hover:text-brand-blue"
                  }`}
                >
                  ⚡ {route.replace(/-/g, " ").replace(/^\w/, c => c.toUpperCase())}
                </button>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
