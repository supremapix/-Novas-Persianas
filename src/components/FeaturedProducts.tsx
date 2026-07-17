/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MessageSquare, Search, Sparkles, SlidersHorizontal, Info, Check, BookOpen } from "lucide-react";
import { PRODUCTS } from "../data";
import { Product } from "../types";

interface FeaturedProductsProps {
  highContrast: boolean;
  selectedCategory: string; // Passed down if filtered from header dropdown
  setSelectedCategory: (cat: string) => void;
  setActivePage?: (page: string) => void;
}

export default function FeaturedProducts({ 
  highContrast, 
  selectedCategory,
  setSelectedCategory,
  setActivePage
}: FeaturedProductsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  // Grouped quick filters
  const filters = [
    { name: "Todos", shortName: "Todos", value: "all" },
    { name: "Cortinas Rolô", shortName: "Rolô", value: "Rolo" },
    { name: "Double Vision", shortName: "Double Vision", value: "Double Vision" },
    { name: "Romana", shortName: "Romana", value: "Romana" },
    { name: "Painel", shortName: "Painel", value: "Painel" },
    { name: "Vertical", shortName: "Vertical", value: "Vertical" },
    { name: "Horizontais", shortName: "Horizontais", value: "Horizontal" },
    { name: "Modelos Premium", shortName: "Premium", value: "Premium" },
  ];

  // Sync scroll on header filter changes
  useEffect(() => {
    if (selectedCategory && selectedCategory !== "all") {
      // If category is selected from header, we clear text search to avoid conflict
      setSearchTerm("");
    }
  }, [selectedCategory]);

  // Filter products based on active category tab AND text search
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch = 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());

    if (selectedCategory === "all" || !selectedCategory) {
      return matchesSearch;
    }

    // Advanced category match (robust and accent-insensitive)
    const normCategory = selectedCategory.toLowerCase();
    const normProductCat = product.category.toLowerCase();
    const normProductName = product.name.toLowerCase();

    let matchesCategory = false;

    if (normCategory === "rolo") {
      matchesCategory = normProductCat.includes("rolo") || normProductCat.includes("rolô") || normProductName.includes("rolo") || normProductName.includes("rolô");
    } else if (normCategory === "premium") {
      matchesCategory = ["produto-persiana-caixa", "produto-persiana-shangrila"].includes(product.slug);
    } else {
      const cleanNorm = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      matchesCategory = 
        cleanNorm(product.category).includes(cleanNorm(selectedCategory)) ||
        cleanNorm(selectedCategory).includes(cleanNorm(product.category)) ||
        cleanNorm(product.name).includes(cleanNorm(selectedCategory));
    }

    return matchesCategory && matchesSearch;
  });

  const handleToggleExpand = (id: string) => {
    if (expandedProduct === id) {
      setExpandedProduct(null);
    } else {
      setExpandedProduct(id);
    }
  };
  const getWhatsAppLink = (productName: string) => {
    const text = encodeURIComponent(
      `Olá, achei seu site no *Google* e *gostaria de:* saber mais sobre o modelo: *${productName}*`
    );
    return `https://api.whatsapp.com/send/?phone=5541995507310&text=${text}`;
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      id="modelos"
      className={`py-12 md:py-20 px-4 relative overflow-hidden ${
        highContrast ? "bg-black text-white border-b border-white" : "bg-slate-50/70"
      }`}
      aria-labelledby="products-title"
    >
      {/* Elegância e Sofisticação: Imagem de fundo sutil */}
      {!highContrast && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.04] pointer-events-none select-none mix-blend-overlay"
          style={{ 
            backgroundImage: `url('https://www.facilpersianas.com.br/cdn/shop/files/Double_Vision_Plus_Preta_8_60046441-bed2-405d-a669-5271781f10e6.jpg?v=1751491915&width=1445')`,
          }}
        />
      )}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title and Intro */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1 bg-brand-blue/10 text-brand-blue font-bold px-3 py-1 rounded-full text-xs uppercase mb-3 border border-brand-blue/20">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            <span>Nossa Seleção Especial</span>
          </div>
          <h2 id="products-title" className={`text-3xl md:text-4xl font-black mb-4 font-display tracking-tight uppercase ${
            highContrast ? "text-yellow-300" : "text-stone-900"
          }`}>
            Escolha o Modelo Perfeito para Sua Janela
          </h2>
          <p className="text-base text-slate-600 font-medium leading-relaxed">
            Nossos modelos campeões de vendas em Curitiba. Clique em <strong>Orçamento</strong> para falar com nossos consultores ou em <strong>Ficha Técnica</strong> para ver os detalhes de cada produto.
          </p>
        </div>

        {/* Catálogo Completo WhatsApp Prominent Banner/Highlight */}
        <div className={`mb-10 p-6 md:p-8 rounded-2xl border-2 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 relative overflow-hidden ${
          highContrast 
            ? "bg-black border-yellow-400 text-white" 
            : "bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-white border-emerald-500/25 shadow-xl"
        }`}>
          {/* Decorative Back Light */}
          {!highContrast && (
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          )}

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-400 border border-emerald-500/35 shrink-0 animate-pulse">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-block mb-1.5">
                Catálogo Oficial
              </span>
              <h3 className="text-xl md:text-2xl font-black font-display tracking-tight uppercase">
                Acesse Nosso Catálogo Completo no WhatsApp
              </h3>
              <p className="text-stone-300 text-sm mt-1 max-w-xl font-medium">
                Conheça todas as variações de tecidos, cores e opções de motorização inteligente diretamente no catálogo oficial Nova's Persianas.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/c/554195507310"
            target="_blank"
            rel="noopener noreferrer"
            className={`relative z-10 px-6 py-4 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-md shrink-0 hover:scale-105 active:scale-95 cursor-pointer min-h-[48px] ${
              highContrast
                ? "bg-yellow-400 text-black border-2 border-black"
                : "bg-emerald-500 hover:bg-emerald-600 text-white border border-emerald-400"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Ver Catálogo Completo</span>
          </a>
        </div>

        {/* Search & Accessibility Filter Controls */}
        <div className={`p-4 rounded-2xl mb-8 border ${
          highContrast ? "bg-black border-white" : "bg-white border-slate-100 shadow-sm"
        }`}>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            
            {/* Search Input Box */}
            <div className="relative w-full lg:max-w-md">
              <label htmlFor="search-input" className="sr-only">Pesquisar persianas por nome ou estilo</label>
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-slate-400" />
              </div>
              <input
                type="text"
                id="search-input"
                className={`w-full pl-11 pr-4 py-3.5 rounded-xl border-2 text-base font-semibold focus:outline-none transition-colors ${
                  highContrast 
                    ? "bg-black text-white border-white focus:border-yellow-400" 
                    : "bg-slate-50 border-slate-200 text-slate-900 focus:border-brand-blue"
                }`}
                placeholder="Ex: Romana, Blackout, Madeira, Tela Solar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Quick Filter Tabs - LARGE TARGETS (WCAG 48x48px) */}
            <div className="w-full lg:w-auto flex flex-wrap items-center gap-2" role="group" aria-label="Abas de categorias rápidos">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1 hidden sm:inline flex items-center gap-1">
                <SlidersHorizontal className="w-4 h-4 text-brand-blue" />
                Filtrar:
              </span>
              {filters.map((filter) => {
                const isActive = selectedCategory === filter.value || (!selectedCategory && filter.value === "all");
                return (
                  <button
                    key={filter.value}
                    onClick={() => setSelectedCategory(filter.value)}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl font-extrabold text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer min-h-[36px] sm:min-h-[40px] border-2 ${
                      isActive
                        ? highContrast
                          ? "bg-yellow-400 text-black border-black scale-105"
                          : "bg-brand-blue border-brand-blue text-white scale-105 shadow-md"
                        : highContrast
                        ? "bg-black text-white border-white hover:bg-stone-900"
                        : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                    }`}
                    aria-label={`Mostrar ${filter.name}`}
                    id={`filter-btn-${filter.value}`}
                  >
                    <span className="hidden sm:inline">{filter.name}</span>
                    <span className="sm:hidden">{filter.shortName}</span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Active filter display indicator */}
          {selectedCategory && selectedCategory !== "all" && (
            <div className="mt-3 flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold uppercase text-slate-400">Filtro ativo:</span>
              <span className="bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 border border-brand-blue/20 animate-fade-in">
                <span>"{selectedCategory}"</span>
                <button 
                  onClick={() => setSelectedCategory("all")} 
                  className="font-black text-xs hover:text-red-700 p-1 rounded-full focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  aria-label="Limpar filtro"
                >
                  ✕
                </button>
              </span>
            </div>
          )}
        </div>

        {/* Empty State when no items matched */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200 max-w-lg mx-auto">
            <span className="text-5xl block mb-3">🔍</span>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Nenhum modelo encontrado</h3>
            <p className="text-slate-500 text-base max-w-sm mx-auto mb-6">
              Não encontramos nenhuma persiana para "{searchTerm || selectedCategory}". Tente usar palavras mais simples.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="px-6 py-3 bg-brand-blue hover:bg-brand-blue-hover text-white rounded-full font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
            >
              Mostrar todas as Persianas
            </button>
          </div>
        )}

        {/* Products Grid (High Contrast, Accessible, min 18px text sizes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => {
            const isExpanded = expandedProduct === product.id;
            return (
              <article 
                key={product.id}
                className={`rounded-2xl overflow-hidden border flex flex-col transition-all duration-300 h-full ${
                  highContrast 
                    ? "bg-black border-white text-white" 
                    : "bg-white border-slate-100 hover:border-brand-blue/30 shadow-sm hover:shadow-lg"
                }`}
                aria-label={`Card do produto: ${product.name}`}
              >
                {/* Product Image Frame */}
                <div 
                  onClick={() => {
                    if (setActivePage) {
                      setActivePage(product.slug);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="relative h-56 w-full bg-slate-100 overflow-hidden shrink-0 cursor-pointer group"
                >
                  <img
                    src={product.image}
                    alt={`Foto instalada de ${product.name}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-brand-blue hover:bg-brand-blue-hover text-white text-[10px] uppercase font-black tracking-widest px-4 py-2.5 rounded-xl shadow-lg">
                      Ver Detalhes do Produto
                    </span>
                  </div>
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-bold shadow-md ${
                    highContrast ? "bg-yellow-400 text-black" : "bg-brand-blue text-white"
                  }`}>
                    {product.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 
                    onClick={() => {
                      if (setActivePage) {
                        setActivePage(product.slug);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className={`text-xl font-bold mb-2 tracking-tight uppercase cursor-pointer hover:text-brand-blue transition-colors ${
                      highContrast ? "text-yellow-300" : "text-slate-900 font-display"
                    }`}
                  >
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-slate-500 font-medium leading-relaxed mb-4 flex-1">
                    {product.description}
                  </p>

                  {/* Accordion specs for seniors (Ficha Técnica) */}
                  <div className="mb-4">
                    <button
                      onClick={() => handleToggleExpand(product.id)}
                      className={`w-full py-2 px-3 rounded-xl border flex items-center justify-between text-[11px] tracking-wider uppercase font-bold transition-colors cursor-pointer min-h-[40px] ${
                        highContrast 
                          ? "bg-stone-900 hover:bg-stone-800 text-white border-white" 
                          : "bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200"
                      }`}
                      aria-expanded={isExpanded}
                      aria-label={`Ver Ficha Técnica e características de ${product.name}`}
                      id={`tech-btn-${product.id}`}
                    >
                      <span className="flex items-center gap-1.5">
                        <Info className="w-3.5 h-3.5 text-brand-blue" />
                        Ficha Técnica
                      </span>
                      <span>{isExpanded ? "Fechar −" : "Ver Detalhes +"}</span>
                    </button>

                    {isExpanded && (
                      <div className={`mt-2 p-3.5 rounded-xl border text-sm leading-relaxed ${
                        highContrast ? "bg-stone-900 border-white text-stone-100" : "bg-slate-50 border-slate-100 text-slate-600"
                      } animate-slide-down`}>
                        <h4 className="font-bold text-slate-900 mb-2 border-b border-slate-100 pb-1 text-xs">Características Principais:</h4>
                        <ul className="space-y-1.5">
                          {product.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-1.5 font-medium">
                              <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-3 pt-2 border-t border-dashed border-slate-200 text-xs text-slate-400 font-semibold">
                          * Medição sob medida em Curitiba gratuita.
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Budget Direct WhatsApp Button - COMPACT TOUCH TARGET */}
                  <a
                    href={getWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 px-4 rounded-xl font-extrabold text-[11px] tracking-wider flex items-center justify-center gap-2 shadow hover:scale-[1.02] transition-all duration-150 min-h-[40px] cursor-pointer uppercase ${
                      highContrast 
                        ? "bg-yellow-400 text-black border-2 border-black" 
                        : "bg-brand-blue hover:bg-brand-blue-hover text-white"
                    }`}
                    aria-label={`Solicitar orçamento da ${product.name} pelo WhatsApp`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Orçamento Grátis</span>
                  </a>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
}
