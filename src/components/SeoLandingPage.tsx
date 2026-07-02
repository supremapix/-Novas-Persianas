import React from "react";
import { motion } from "motion/react";
import { Sparkles, MapPin, MessageSquare, Award } from "lucide-react";
import { PRODUCTS } from "../data";
import { generateSeoContent, PRODUCT_SEO_ROUTES, NEIGHBORHOOD_SEO_ROUTES, INTENT_SEO_ROUTES } from "../data/seoContent";

interface SeoLandingPageProps {
  highContrast: boolean;
  route: string;
  onNavigateHome: () => void;
  setActivePage: (page: "home" | "quem-somos" | "contato" | string) => void;
}

export default function SeoLandingPage({ highContrast, route, onNavigateHome, setActivePage }: SeoLandingPageProps) {
  const data = generateSeoContent(route);

  // Helper filter for highlighted items on subpages
  const getSubpageProducts = () => {
    if (!data.categoryFilter || data.categoryFilter === "all") {
      return PRODUCTS;
    }
    return PRODUCTS.filter(p => 
      p.category.toLowerCase().includes(data.categoryFilter.toLowerCase()) || 
      p.name.toLowerCase().includes(data.categoryFilter.toLowerCase())
    );
  };

  const getWhatsAppLink = (productName: string) => {
    const text = encodeURIComponent(
      `Olá! Vi a página de *${data.title}* no seu site e gostaria de agendar um orçamento para: *${productName}*`
    );
    return `https://api.whatsapp.com/send/?phone=5541995507310&text=${text}`;
  };

  return (
    <div className={`pt-6 pb-16 transition-colors duration-300 ${
      highContrast ? "bg-black text-white" : "bg-stone-50/50 text-stone-800"
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
          <button onClick={onNavigateHome} className="hover:text-brand-blue transition-colors cursor-pointer">
            Início
          </button>
          <span>/</span>
          <span className={highContrast ? "text-yellow-400" : "text-stone-700"}>
            {route.replace(/-/g, " ")}
          </span>
        </div>

        {/* Return Button */}
        <div className="mb-8">
          <button
            onClick={onNavigateHome}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
              highContrast
                ? "bg-yellow-400 text-black border-2 border-black"
                : "bg-white text-stone-700 hover:text-brand-blue shadow-md border border-stone-150 hover:scale-105"
            }`}
          >
            <span>← Voltar para a Home</span>
          </button>
        </div>

        {/* HERO SECTION DESIGNED TO REPEL SEO BOUNCE */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-xl border border-stone-200/40">
          <div className="absolute inset-0 z-0">
            <img 
              src={data.heroImage} 
              alt={data.title} 
              className="w-full h-full object-cover filter brightness-[0.3]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 px-6 py-12 md:py-20 text-center max-w-4xl mx-auto text-white">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 ${
              highContrast ? "bg-yellow-400 text-black" : "bg-brand-blue text-white"
            }`}>
              <Sparkles className="w-3 h-3" />
              <span>Selo de Qualidade Nova's</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 font-display leading-tight">
              {data.title}
            </h1>
            <p className="text-sm md:text-lg text-stone-200 font-medium leading-relaxed max-w-2xl mx-auto">
              {data.subtitle}
            </p>
          </div>
        </div>

        {/* HIGH VALUE SEMANTIC CONTENT BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          
          {/* Main text & SEO GEO section */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className={`p-6 sm:p-8 rounded-2xl border ${
              highContrast ? "bg-stone-950 border-white" : "bg-white border-stone-250/60 shadow-md"
            }`}>
              <div 
                className={`text-base md:text-lg leading-relaxed flex flex-col gap-4 dynamic-seo-content ${
                  highContrast ? "text-stone-200" : "text-stone-600 font-medium"
                }`}
                dangerouslySetInnerHTML={{ __html: data.fullBodyText }}
              />
            </div>

            {/* NEIGHBORHOOD CITATIONS (LOCAL SEO SECURING GOOGLE GEO POSITIONING) */}
            <div className={`p-6 rounded-2xl border ${
              highContrast ? "bg-stone-950 border-white" : "bg-stone-100 border-stone-200"
            }`}>
              <h3 className={`text-base font-black uppercase tracking-wider mb-4 flex items-center gap-1.5 ${
                highContrast ? "text-yellow-300" : "text-brand-blue"
              }`}>
                <MapPin size={16} /> Atendimento Local em Curitiba e Região Metropolitana:
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                highContrast ? "text-stone-300" : "text-stone-600 font-medium"
              }`}>
                Não cobramos nenhuma taxa extra de deslocamento para visitas técnicas e agendamento de orçamentos nos seguintes bairros de Curitiba:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {["Hauer (Sede)", "Boqueirão", "Portão", "Água Verde", "Batel", "Rebouças", "Centro", "Jardim das Américas", "Uberaba", "Capão Raso", "Xaxim", "Santa Felicidade"].map((place) => (
                  <div key={place} className={`px-3 py-2 rounded-xl border text-xs font-bold text-center ${
                    highContrast 
                      ? "bg-black border-white text-white" 
                      : "bg-white border-stone-200 text-stone-700 hover:border-brand-blue transition-colors"
                  }`}>
                    📍 {place}
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ ACCORDION SECTION (SEO FRIENDLY SCHEMA) */}
            {data.faq.length > 0 && (
              <div className="flex flex-col gap-4">
                <h2 className={`text-2xl font-black uppercase tracking-tight font-display ${
                  highContrast ? "text-yellow-300" : "text-stone-900"
                }`}>
                  Perguntas Frequentes Sobre {route.replace(/-/g, " ")}
                </h2>
                <div className="flex flex-col gap-3">
                  {data.faq.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`p-5 rounded-xl border ${
                        highContrast ? "bg-stone-950 border-white" : "bg-white border-stone-200/80 shadow-sm"
                      }`}
                    >
                      <h3 className={`text-base font-black uppercase tracking-tight mb-2 flex items-start gap-1.5 ${
                        highContrast ? "text-yellow-300" : "text-stone-900"
                      }`}>
                        <span className="text-brand-blue text-sm">Q:</span>
                        {item.q}
                      </h3>
                      <p className={`text-sm leading-relaxed pl-5 ${
                        highContrast ? "text-stone-200" : "text-stone-600 font-medium"
                      }`}>
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column: Sticky Side Card for immediate Lead conversion */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col gap-6">
            
            {/* Lead Form card */}
            <div className={`p-6 rounded-2xl border ${
              highContrast ? "bg-stone-950 border-white" : "bg-white border-stone-150 shadow-lg"
            }`}>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-stone-100">
                <Award className="w-5 h-5 text-brand-blue" />
                <span className={`text-sm font-black uppercase tracking-wider ${
                  highContrast ? "text-yellow-300" : "text-stone-900"
                }`}>Consultoria Grátis</span>
              </div>
              <h3 className={`text-lg font-black uppercase tracking-tight mb-2 ${
                highContrast ? "text-yellow-300" : "text-stone-900 font-display"
              }`}>
                Agende Sua Visita Técnica Gratuita
              </h3>
              <p className={`text-xs leading-relaxed mb-5 ${
                highContrast ? "text-stone-300" : "text-stone-500 font-medium"
              }`}>
                Nossa equipe vai até você no seu horário, leva os catálogos físicos e tira as medidas milimétricas com laser. Sem compromisso de compra!
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={`https://api.whatsapp.com/send/?phone=5541995507310&text=${encodeURIComponent(
                    `Olá! Vi a página de *${data.title}* no Google e gostaria de agendar uma medição técnica grátis em minha casa.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs tracking-widest uppercase rounded-xl flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer min-h-[44px]"
                >
                  <MessageSquare size={16} />
                  <span>Chamar no WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setActivePage("contato");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`w-full py-3 px-4 border text-xs font-bold tracking-widest uppercase rounded-xl transition-all cursor-pointer min-h-[44px] ${
                    highContrast
                      ? "bg-black text-white border-white hover:bg-stone-900"
                      : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50 hover:border-brand-blue"
                  }`}
                >
                  Ver Outros Contatos
                </button>
              </div>
            </div>

            {/* Brand credentials */}
            <div className={`p-5 rounded-2xl border text-center ${
              highContrast ? "bg-stone-950 border-white" : "bg-stone-50 border-stone-200"
            }`}>
              <span className="text-3xl block mb-2">⭐</span>
              <h4 className="font-black text-xs uppercase tracking-wider text-stone-500 mb-1">
                Satisfação de Curitiba
              </h4>
              <p className={`text-[11px] leading-relaxed font-bold ${
                highContrast ? "text-yellow-300" : "text-stone-800"
              }`}>
                Avaliação de 4.9 estrelas no Google Maps baseada em mais de 180 depoimentos reais.
              </p>
            </div>

          </div>

        </div>

        {/* Dynamic products catalog segment */}
        {data.showProducts && (
          <div className="border-t border-stone-200/50 pt-12 mt-8">
            <h2 className={`text-2xl md:text-3xl font-black uppercase font-display tracking-tight text-center mb-4 ${
              highContrast ? "text-yellow-300" : "text-stone-900"
            }`}>
              Modelos de Persianas Recomendados para Este Projeto
            </h2>
            <p className="text-sm text-center text-stone-500 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              Oferecemos designs variados para combinar perfeitamente com a decoração do seu quarto, cozinha ou escritório.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {getSubpageProducts().slice(0, 4).map((product) => (
                <div 
                  key={product.id}
                  className={`rounded-2xl overflow-hidden border flex flex-col transition-all duration-300 hover:scale-[1.02] ${
                    highContrast ? "bg-black border-white text-white" : "bg-white border-stone-150 shadow-sm"
                  }`}
                >
                  <div className="h-44 bg-stone-100 overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                    <div>
                      <h3 className={`font-bold uppercase tracking-tight text-base ${
                        highContrast ? "text-yellow-300" : "text-stone-900"
                      }`}>{product.name}</h3>
                      <p className="text-xs text-stone-500 font-semibold leading-relaxed line-clamp-2 mt-1">{product.description}</p>
                    </div>
                    <a
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-2 px-3 rounded-xl font-bold text-[10px] tracking-wider text-center uppercase transition-all duration-150 min-h-[38px] cursor-pointer block ${
                        highContrast 
                          ? "bg-yellow-400 text-black border border-black" 
                          : "bg-brand-blue hover:bg-brand-blue-hover text-white"
                      }`}
                    >
                      Solicitar Orçamento
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CROSS-LINKING SEO DIRECTORY FOR MAXIMUM GEO INDEXABILITY */}
        <div className="border-t border-stone-200/50 pt-12 mt-12">
          <h2 className={`text-xl md:text-2xl font-black uppercase font-display tracking-tight text-center mb-4 ${
            highContrast ? "text-yellow-300" : "text-stone-900"
          }`}>
            Você Também Pode Se Interessar
          </h2>
          <p className="text-xs text-center text-stone-500 font-semibold leading-relaxed max-w-2xl mx-auto mb-8">
            Explore outros modelos sob medida, regiões de atendimento local em Curitiba e nosso guia completo de orçamentos e dicas técnicas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Products links list */}
            <div className={`p-5 rounded-2xl border ${highContrast ? "bg-stone-950 border-white" : "bg-white border-stone-200/60 shadow-sm"}`}>
              <h3 className={`text-sm font-black uppercase tracking-wider mb-4 border-b pb-2 ${highContrast ? "text-yellow-300 border-stone-700" : "text-brand-blue border-stone-100"}`}>
                📐 Modelos sob Medida
              </h3>
              <div className="flex flex-col gap-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar text-left">
                {[...PRODUCT_SEO_ROUTES].map((r) => (
                  <button
                    key={r}
                    onClick={() => {
                      setActivePage(r);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`text-left text-xs font-bold py-1 hover:text-brand-blue transition-colors cursor-pointer ${
                      highContrast ? "text-stone-300 hover:text-yellow-400" : "text-stone-600 hover:text-brand-blue"
                    }`}
                  >
                    👉 {r.replace(/-/g, " ")}
                  </button>
                ))}
              </div>
            </div>

            {/* Neighborhoods links list */}
            <div className={`p-5 rounded-2xl border ${highContrast ? "bg-stone-950 border-white" : "bg-white border-stone-200/60 shadow-sm"}`}>
              <h3 className={`text-sm font-black uppercase tracking-wider mb-4 border-b pb-2 ${highContrast ? "text-yellow-300 border-stone-700" : "text-brand-blue border-stone-100"}`}>
                📍 Regiões Atendidas
              </h3>
              <div className="flex flex-col gap-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar text-left">
                {[...NEIGHBORHOOD_SEO_ROUTES].map((r) => (
                  <button
                    key={r}
                    onClick={() => {
                      setActivePage(r);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`text-left text-xs font-bold py-1 hover:text-brand-blue transition-colors cursor-pointer ${
                      highContrast ? "text-stone-300 hover:text-yellow-400" : "text-stone-600 hover:text-brand-blue"
                    }`}
                  >
                    📍 Persianas no {r.replace("persianas-", "").replace(/-/g, " ")}
                  </button>
                ))}
              </div>
            </div>

            {/* General Intent and Guides list */}
            <div className={`p-5 rounded-2xl border ${highContrast ? "bg-stone-950 border-white" : "bg-white border-stone-200/60 shadow-sm"}`}>
              <h3 className={`text-sm font-black uppercase tracking-wider mb-4 border-b pb-2 ${highContrast ? "text-yellow-300 border-stone-700" : "text-brand-blue border-stone-100"}`}>
                💡 Dúvidas & Planejamento
              </h3>
              <div className="flex flex-col gap-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar text-left">
                {[...INTENT_SEO_ROUTES].slice(0, 15).map((r) => (
                  <button
                    key={r}
                    onClick={() => {
                      setActivePage(r);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`text-left text-xs font-bold py-1 hover:text-brand-blue transition-colors cursor-pointer ${
                      highContrast ? "text-stone-300 hover:text-yellow-400" : "text-stone-600 hover:text-brand-blue"
                    }`}
                  >
                    💬 {r.replace(/-/g, " ")}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
