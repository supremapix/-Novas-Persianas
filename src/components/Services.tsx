/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { MessageSquare, Sparkles, Wrench, Shield, CheckCircle } from "lucide-react";
import { SERVICES } from "../data";

interface ServicesProps {
  highContrast: boolean;
}

export default function Services({ highContrast }: ServicesProps) {
  
  const getWhatsAppServiceLink = (serviceName: string) => {
    const text = encodeURIComponent(
      `Olá, achei seu site no *Google* e *gostaria de:* solicitar o serviço de: *${serviceName}*`
    );
    return `https://api.whatsapp.com/send/?phone=5541995507310&text=${text}`;
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      id="servicos"
      className={`py-10 md:py-16 px-4 border-b ${
        highContrast ? "bg-black text-white border-white" : "bg-white"
      }`}
      aria-labelledby="services-title"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1 bg-brand-blue/10 text-brand-blue font-bold px-3 py-1 rounded-full text-xs uppercase mb-3 border border-brand-blue/20">
            <Wrench className="w-4 h-4 text-brand-blue" />
            <span>Serviços Especializados</span>
          </div>
          <h2 id="services-title" className={`text-3xl md:text-5xl font-black mb-4 font-display tracking-tight leading-tight uppercase ${
            highContrast ? "text-yellow-300" : "text-slate-900"
          }`}>
            Manutenção, Limpeza e Instalação de Persianas
          </h2>
          <p className="text-base text-slate-500 font-medium leading-relaxed">
            Nossos técnicos próprios realizam a higienização completa, reparo de cordões e comandos, além de instalações sob medida com total segurança e asseio.
          </p>
        </div>

        {/* Services Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <article 
              key={service.id}
              className={`rounded-2xl overflow-hidden border flex flex-col justify-between transition-all duration-300 ${
                highContrast 
                  ? "bg-black border-white text-white" 
                  : "bg-white border-slate-100 hover:border-brand-blue/30 shadow-sm hover:shadow-md"
              }`}
              aria-label={`Serviço: ${service.name}`}
            >
              <div>
                {/* Image */}
                <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`Imagem ilustrativa de ${service.name}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute bottom-3 left-3 px-3 py-1.5 rounded-lg text-[10px] tracking-wider uppercase font-extrabold flex items-center gap-1 shadow-md ${
                    highContrast ? "bg-yellow-400 text-black" : "bg-brand-blue text-white"
                  }`}>
                    <Shield className="w-3.5 h-3.5" />
                    <span>Equipe Própria Autorizada</span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 tracking-tight uppercase ${
                    highContrast ? "text-yellow-300" : "text-slate-900 font-display"
                  }`}>
                    {service.name}
                  </h3>
                  
                  <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet Spec list - easy reading for seniors */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">O que está incluso:</span>
                    {service.details.map((detail, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-slate-600 font-semibold leading-relaxed">
                        <CheckCircle className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button - COMPACT & SOPHISTICATED */}
              <div className="p-6 pt-0 mt-auto">
                <a
                  href={getWhatsAppServiceLink(service.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 px-4 rounded-xl font-extrabold text-[11px] tracking-wider flex items-center justify-center gap-1.5 shadow hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 min-h-[40px] cursor-pointer uppercase ${
                    highContrast 
                      ? "bg-yellow-400 text-black border-2 border-black" 
                      : "bg-brand-blue hover:bg-brand-blue-hover text-white"
                  }`}
                  aria-label={`Agendar ${service.name} no WhatsApp`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Agendar</span>
                </a>
              </div>

            </article>
          ))}
        </div>

        {/* Informative Warning Frame for Seniors */}
        <div className={`mt-12 p-6 rounded-2xl border flex flex-col md:flex-row gap-5 items-center ${
          highContrast ? "bg-black border-white" : "bg-slate-50 border-slate-100"
        }`}>
          <span className="text-4xl text-brand-blue">💡</span>
          <div className="text-center md:text-left">
            <h4 className={`text-base font-bold mb-1 ${
              highContrast ? "text-yellow-300" : "text-slate-900"
            }`}>
              Dica Importante para Conservação:
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Especialistas recomendam lavar e higienizar suas persianas a cada <strong>12 meses</strong> para eliminar ácaros e poeiras que causam alergias respiratórias e danificam o tecido. Faça um orçamento com a gente!
            </p>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
