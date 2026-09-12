import React from "react";
import { motion } from "motion/react";
import { ExternalLink, MapPin, ShieldCheck, Ruler, Wrench } from "lucide-react";

interface GoogleReviewsProps {
  highContrast: boolean;
}

export default function GoogleReviews({ highContrast }: GoogleReviewsProps) {
  const pillars = [
    {
      id: 1,
      icon: Ruler,
      title: "Medição e Consultoria no Local",
      description: "Avaliamos cada janela e ambiente para orientar sobre o melhor modelo, tecido, acionamento e controle de luminosidade sem custos adicionais."
    },
    {
      id: 2,
      icon: ShieldCheck,
      title: "Instalação Técnica com Garantia",
      description: "Instaladores próprios e experientes em Curitiba e RMC, assegurando nivelamento preciso, fixação reforçada e acabamento impecável."
    },
    {
      id: 3,
      icon: Wrench,
      title: "Manutenção e Suporte Permanente",
      description: "Prestamos assistência completa com lavagem, consertos, troca de correntes e motores para persianas residenciais e comerciais."
    }
  ];

  return (
    <section
      id="depoimentos"
      className={`py-12 md:py-20 px-4 relative overflow-hidden transition-colors duration-300 ${
        highContrast
          ? "bg-black text-white border-b border-white"
          : "bg-stone-50/40 text-stone-800 border-b border-stone-100"
      }`}
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 bg-brand-blue/10 text-brand-blue px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-3">
            <MapPin size={13} className="text-red-500" />
            <span>Curitiba e Região Metropolitana</span>
          </div>

          <h2 
            id="reviews-heading" 
            className={`text-2xl md:text-4xl font-black uppercase font-display tracking-tight mb-4 ${
              highContrast ? "text-yellow-300" : "text-stone-900"
            }`}
          >
            Atendimento Personalizado e Projetos Sob Medida em Curitiba e Região Metropolitana
          </h2>

          <p className={`text-sm md:text-base leading-relaxed ${
            highContrast ? "text-stone-200" : "text-stone-600 font-medium"
          }`}>
            Projetos residenciais e corporativos sob medida com pontualidade, transparência e suporte pós-venda garantido.
          </p>
        </div>

        {/* PILLARS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] ${
                  highContrast 
                    ? "bg-stone-950 border-white text-white shadow-none" 
                    : "bg-white border-stone-150 shadow-md hover:shadow-lg"
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    highContrast ? "bg-yellow-400 text-black" : "bg-brand-blue/10 text-brand-blue"
                  }`}>
                    <Icon size={24} />
                  </div>
                  <h3 className={`text-lg font-black uppercase tracking-tight mb-2 ${
                    highContrast ? "text-yellow-300" : "text-stone-900"
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    highContrast ? "text-stone-200" : "text-stone-600 font-medium"
                  }`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CALL TO ACTION FOR GOOGLE REVIEWS & MAPS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <a
            href="https://maps.app.goo.gl/cywjDuMVyBH4QiDD8?g_st=ac"
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] min-h-[44px] shadow-md ${
              highContrast
                ? "bg-yellow-400 text-black border-2 border-black font-black"
                : "bg-brand-blue text-white hover:bg-brand-blue-hover"
            }`}
          >
            <MapPin size={14} className="text-red-400" />
            <span>Veja nossa localização e avaliações no Google Maps</span>
            <ExternalLink size={13} className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>

          <a
            href="https://share.google/UZ4TJH0aoxwaonagc"
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] min-h-[44px] shadow-md ${
              highContrast
                ? "bg-stone-900 text-white border border-white"
                : "bg-white text-stone-800 border border-stone-200 hover:bg-stone-50"
            }`}
          >
            <span>Deixar Minha Avaliação no Google</span>
          </a>
        </div>

      </div>
    </section>
  );
}
