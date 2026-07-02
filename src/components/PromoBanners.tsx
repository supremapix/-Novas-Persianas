/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { MessageSquare, Sparkles, CheckCircle2, Ruler } from "lucide-react";

interface PromoBannersProps {
  highContrast: boolean;
  type: "top-categories" | "choose-ideal";
  onSelectCategory?: (category: string) => void;
}

export default function PromoBanners({ highContrast, type, onSelectCategory }: PromoBannersProps) {
  
  // Section 2: "Top Categorias" - Banner Largo de Destaque
  if (type === "top-categories") {
    const categories = [
      { name: "Linha Rolô", img: "https://beneflexpersianas.com.br/wp-content/uploads/2024/10/2-2.jpg", tag: "Campeã de Vendas" },
      { name: "Linha Romana", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQuV6Mx9pMVgez3WzPHRhoKcznNTjohGkTjoldJySO4zFIVCTO1ErWMbS&s=10", tag: "Elegante & Sofisticada" },
      { name: "Double Vision", img: "https://www.designpaperhome.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/r/o/rolo_dupla.jpg", tag: "Controle de Luz Incrível" },
      { name: "Painel & Vertical", img: "https://www.asafedecor.com.br/persianas/imagens/persiana-vertical-para-porta.jpg", tag: "Ideal para Grandes Vãos" }
    ];

    const handleCategoryClick = (catName: string) => {
      if (onSelectCategory) {
        // Strip out "Linha " for proper product matching
        const filterName = catName.replace("Linha ", "");
        onSelectCategory(filterName);

        // Scroll to products grid smoothly
        const el = document.getElementById("modelos");
        if (el) {
          const headerOffset = 125;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }
    };

    return (
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className={`py-10 md:py-16 px-4 border-b ${
          highContrast ? "bg-black text-white border-white" : "bg-slate-50"
        }`}
        aria-labelledby="categories-banner-title"
      >
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 id="categories-banner-title" className={`text-2xl md:text-3xl font-black mb-2 font-display uppercase tracking-wider ${
              highContrast ? "text-yellow-300" : "text-slate-900"
            }`}>
              Nossas Linhas Mais Procuradas
            </h2>
            <p className="text-base text-slate-500 font-semibold">
              Clique em uma das linhas abaixo para filtrar nosso catálogo de modelos instantaneamente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => handleCategoryClick(cat.name)}
                className={`relative rounded-2xl overflow-hidden h-72 border text-left group cursor-pointer transition-transform duration-300 hover:scale-[1.02] focus:ring-4 focus:ring-brand-blue ${
                  highContrast ? "border-white bg-black" : "border-slate-100 shadow-sm"
                }`}
                aria-label={`Filtrar catálogo por ${cat.name}`}
              >
                <img 
                  src={cat.img} 
                  alt="" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-brand-blue/90 mb-2 inline-block ${
                    highContrast ? "bg-yellow-400 text-black font-extrabold" : ""
                  }`}>
                    {cat.tag}
                  </span>
                  <h3 className="text-2xl font-black font-display tracking-tight leading-tight group-hover:underline">
                    {cat.name}
                  </h3>
                  <span className="text-xs text-slate-300 font-semibold block mt-1">Ver modelos disponíveis →</span>
                </div>
              </button>
            ))}
          </div>

        </div>
      </motion.section>
    );
  }

  // Section 5: "Escolha o Modelo Ideal" - Banner de Destaque para Orçamento
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`py-10 md:py-16 px-4 ${
        highContrast ? "bg-black text-white border-b border-white" : "bg-brand-dark text-white border-y border-slate-800"
      }`}
      aria-label="Campanha de Orçamento Personalizado"
    >
      <div className="max-w-5xl mx-auto text-center">
        
        <div className="inline-flex items-center gap-1.5 bg-white/5 text-brand-blue font-bold px-4 py-1.5 rounded-full text-xs uppercase mb-6 border border-white/10">
          <Sparkles className="w-4 h-4 text-brand-blue" />
          <span>Atendimento Prático para o seu Espaço</span>
        </div>

        <h2 className={`text-3xl md:text-5xl font-black mb-6 font-display tracking-tight leading-tight uppercase ${
          highContrast ? "text-yellow-300" : "text-white"
        }`}>
          Dúvidas sobre qual o Modelo Ideal para sua Janela?
        </h2>

        <p className="text-base md:text-lg text-slate-300 font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
          Nós levamos todos os mostruários de tecidos e fazemos a medição técnica gratuita na sua casa! Agende uma visita sem compromisso em qualquer bairro de Curitiba.
        </p>

        {/* Informative Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
          
          <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 flex items-start gap-4">
            <span className="text-xl bg-brand-blue rounded-full w-10 h-10 flex items-center justify-center font-bold text-white shrink-0">1</span>
            <div>
              <h3 className="font-bold text-base mb-1">Agende no WhatsApp</h3>
              <p className="text-sm text-slate-400">Escolha o dia e hora que melhor se adaptam à sua rotina diária.</p>
            </div>
          </div>

          <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 flex items-start gap-4">
            <span className="text-xl bg-brand-blue rounded-full w-10 h-10 flex items-center justify-center font-bold text-white shrink-0">2</span>
            <div>
              <h3 className="font-bold text-base mb-1">Mostruários em Casa</h3>
              <p className="text-sm text-slate-400">Veja e toque nos tecidos (Blackout, Translúcido, Solar) no seu próprio ambiente.</p>
            </div>
          </div>

          <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 flex items-start gap-4">
            <span className="text-xl bg-brand-blue rounded-full w-10 h-10 flex items-center justify-center font-bold text-white shrink-0">3</span>
            <div>
              <h3 className="font-bold text-base mb-1">Medição e Preço</h3>
              <p className="text-sm text-slate-400">Tiramos as medidas certas e fazemos seu orçamento na hora, sem surpresas.</p>
            </div>
          </div>

        </div>

        {/* Compact & Sophisticated Button */}
        <a
          href="https://api.whatsapp.com/send/?phone=5541995507310&text=Ol%C3%A1%2C%20achei%20seu%20site%20no%20%2AGoogle%2A%20e%20%2Agostaria%20de%3A%2A"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl font-extrabold text-[11px] tracking-wider shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer uppercase ${
            highContrast 
              ? "bg-yellow-400 text-black border-2 border-black" 
              : "bg-brand-blue hover:bg-brand-blue-hover text-white"
          }`}
          aria-label="Agendar Visita Técnica pelo WhatsApp"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Agendar Visita</span>
        </a>

        <div className="text-xs text-slate-500 font-semibold mt-3">
          * Sem taxa de visita técnica em Curitiba • Atendimento especializado para a terceira idade
        </div>

      </div>
    </motion.section>
  );
}
