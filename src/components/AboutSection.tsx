/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { MessageSquare, Award, CheckCircle, Users } from "lucide-react";

interface AboutSectionProps {
  highContrast: boolean;
}

export default function AboutSection({ highContrast }: AboutSectionProps) {
  const [completedWorks, setCompletedWorks] = useState(0);
  const [yearsTradition, setYearsTradition] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  // Run the counter animation once intersecting
  useEffect(() => {
    if (!hasAnimated) return;

    // Years animation (0 to 20 over 1.5s)
    let yearStart = 0;
    const yearEnd = 20;
    const yearDuration = 1500;
    const yearStep = Math.ceil(yearDuration / yearEnd);
    const yearTimer = setInterval(() => {
      yearStart += 1;
      if (yearStart >= yearEnd) {
        setYearsTradition(yearEnd);
        clearInterval(yearTimer);
      } else {
        setYearsTradition(yearStart);
      }
    }, yearStep);

    // Completed works animation (0 to 5000 over 1.5s)
    let worksStart = 0;
    const worksEnd = 5000;
    const worksDuration = 1500;
    const worksStepValue = 125; // Large steps for smooth feel
    const worksStepTime = Math.ceil(worksDuration / (worksEnd / worksStepValue));
    
    const worksTimer = setInterval(() => {
      worksStart += worksStepValue;
      if (worksStart >= worksEnd) {
        setCompletedWorks(worksEnd);
        clearInterval(worksTimer);
      } else {
        setCompletedWorks(worksStart);
      }
    }, worksStepTime);

    return () => {
      clearInterval(yearTimer);
      clearInterval(worksTimer);
    };
  }, [hasAnimated]);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      id="sobre"
      ref={sectionRef}
      className={`py-10 md:py-16 px-4 border-b ${
        highContrast ? "bg-black text-white border-white" : "bg-white"
      }`}
      aria-labelledby="about-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Images Grid Block (Left) */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://scontent.fbfh15-1.fna.fbcdn.net/v/t39.30808-6/611279552_814467461644789_5601742766907040930_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1379&ctp=s1080x1379&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEO2VrTLz3H_xxr4x_SfmAiv8E4V_gpOj6_wThX-Ck6PtIqvD0HY4wzAA7Bm0mPQxBzk6qUu7PKRVWcz3dyNFpf&_nc_ohc=LANmlOodIMEQ7kNvwF6l1v5&_nc_oc=AdoEXzCgSAenUM9gT2ViwEUED3rbsRJLcoTSxfFqyPh6eWmdl0ghcK10tiI_sPvzfTnXp9qXEeC1dR4uty_jBi21&_nc_zt=23&_nc_ht=scontent.fbfh15-1.fna&_nc_gid=XBPhMCbT25-QA0TgwEWPlQ&_nc_ss=7b2a8&oh=00_AQBln_jnN5tyvZ9qW_7ilVqrBocacR8pL3ahLJWfu_RJ1w&oe=6A4C62D8"
                  alt="Trabalho com persianas de alta qualidade"
                  referrerPolicy="no-referrer"
                  className="rounded-2xl object-cover h-64 w-full border border-slate-100 shadow-md"
                />
                <img
                  src="https://scontent.fbfh15-1.fna.fbcdn.net/v/t39.30808-6/472228266_518793247876768_7595922982151912763_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHKDGukvaRIh8ZsRo3_e8Jiplf-EwcF6cumV_4TBwXpy6WxD-Kc6zKHJupGlgd__vVl_hieeelpXKDBMi6DHBJB&_nc_ohc=DIrzEGhM2iAQ7kNvwFPQZke&_nc_oc=AdpMVUfhm9_06VzsP40dWyRgjJVzxQek0zVVmKujkkmk133oNIO6t0WuNua4MRldfqZx2canj6-ayCxSfC4ujPGl&_nc_zt=23&_nc_ht=scontent.fbfh15-1.fna&_nc_gid=wUrl3dZSPNwJAhLYKfVZpg&_nc_ss=7b2a8&oh=00_AQDtnwRpp6lsThSXjTuBFiQ7VMAW9-yJZNRlcPXzwHAfag&oe=6A4C5469"
                  alt="Instalação sob medida com acabamento perfeito"
                  referrerPolicy="no-referrer"
                  className="rounded-2xl object-cover h-44 w-full border border-slate-100 shadow-md"
                />
              </div>
              <div className="pt-8">
                <img
                  src="https://scontent.fbfh15-2.fna.fbcdn.net/v/t39.30808-6/472570446_518793467876746_5900944399952779982_n.jpg?stp=dst-jpg_tt6&cstp=mx540x960&ctp=s540x960&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHffgg0_HG1hQ8ST90FVV_hGkC3KRfc9-saQLcpF9z36yxcsA8JbN5quLBgdft52FwOqt8WFjT3RBUKfBQ_rEJp&_nc_ohc=4PWIIcJNxMQQ7kNvwE6dQPb&_nc_oc=AdodOkh1N82ETstpJdtkVJPg1WlZuTIVB4tQckopr5Yvb0gvtTpIkVA5IItQNgX8WwW_B_vrmXSMGp9y2xGyfeQc&_nc_zt=23&_nc_ht=scontent.fbfh15-2.fna&_nc_gid=jlk2mAdVPd2K2x_8gQTyAA&_nc_ss=7b2a8&oh=00_AQDXJKzeaF7nmOcoPl9JHkTGI-AqRUVw89j5TQMvjydu3Q&oe=6A4C619F"
                  alt="Medição e escolha de tecidos premium"
                  referrerPolicy="no-referrer"
                  className="rounded-2xl object-cover h-[410px] w-full border border-slate-100 shadow-md"
                />
              </div>
            </div>

            {/* Float Badge */}
            <div className={`absolute -bottom-4 -right-4 p-5 rounded-2xl shadow-xl border max-w-[220px] ${
              highContrast ? "bg-black border-white text-white" : "bg-brand-dark text-white border-slate-800"
            }`}>
              <Award className="w-10 h-10 mb-2 text-brand-blue" />
              <span className="text-xs uppercase tracking-wider font-bold block leading-relaxed">Qualidade Certificada e Instalação Garantida</span>
            </div>
          </div>

          {/* Institutional Content Block (Right) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 bg-brand-blue/10 text-brand-blue font-bold px-3 py-1 rounded-full text-xs uppercase mb-4 border border-brand-blue/20">
              <CheckCircle className="w-4 h-4 text-brand-blue" />
              <span>Nossa História</span>
            </div>
            
            <h2 id="about-title" className={`text-3xl md:text-5xl font-black mb-6 font-display tracking-tight leading-tight uppercase ${
              highContrast ? "text-yellow-300" : "text-slate-900"
            }`}>
              Mais de 20 anos de Tradição e Excelência em Curitiba
            </h2>

            <div className="text-base text-slate-600 font-medium space-y-4 leading-relaxed mb-8">
              <p>
                A <strong>Nova’s Persianas</strong> nasceu com o compromisso de oferecer soluções exclusivas para controle solar, privacidade e sofisticação decorativa. Atendemos Curitiba e Região Metropolitana com atendimento humanizado, focado na honestidade, agilidade e satisfação total de nossos clientes.
              </p>
              <p>
                Entendemos que cada janela possui uma necessidade específica de ventilação, incidência de luz e isolamento térmico. Por isso, oferecemos uma <strong>consultoria presencial 100% gratuita</strong>, onde levamos todo o nosso portfólio de tecidos e mostruários diretamente à sua residência ou escritório, para que você faça a escolha ideal de forma prática, assistida e confortável.
              </p>
            </div>

            {/* ANIMATED METRICS COUNTERS (HIGH VISIBILITY FOR ELDERS) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 border-t border-b border-slate-100 py-6">
              
              {/* Works Counter Card */}
              <div className="flex items-center gap-4">
                <div className={`p-4 rounded-xl shrink-0 ${
                  highContrast ? "bg-white text-black" : "bg-brand-blue/10 text-brand-blue"
                }`}>
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <span className={`text-3xl md:text-4xl font-extrabold block leading-none ${
                    highContrast ? "text-yellow-300" : "text-brand-blue"
                  }`} aria-live="polite">
                    +{completedWorks.toLocaleString("pt-BR")}
                  </span>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Trabalhos Concluídos</span>
                </div>
              </div>

              {/* Years Counter Card */}
              <div className="flex items-center gap-4">
                <div className={`p-4 rounded-xl shrink-0 ${
                  highContrast ? "bg-white text-black" : "bg-brand-blue/10 text-brand-blue"
                }`}>
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <span className={`text-3xl md:text-4xl font-extrabold block leading-none ${
                    highContrast ? "text-yellow-300" : "text-brand-blue"
                  }`} aria-live="polite">
                    +{yearsTradition} Anos
                  </span>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">De Tradição Local</span>
                </div>
              </div>

            </div>

            {/* Compact & Sophisticated CTA Button */}
            <a
              href="https://api.whatsapp.com/send/?phone=5541995507310&text=Ol%C3%A1%2C%20achei%20seu%20site%20no%20%2AGoogle%2A%20e%20%2Agostaria%20de%3A%2A"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl font-extrabold text-[11px] tracking-wider shadow-md hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer uppercase ${
                highContrast 
                  ? "bg-yellow-400 text-black border-2 border-black" 
                  : "bg-brand-blue text-white hover:bg-brand-blue-hover"
              }`}
              aria-label="Solicitar visita para orçamento gratuito"
            >
              <span>Solicitar Visita</span>
              <MessageSquare className="w-3.5 h-3.5" />
            </a>

          </div>

        </div>
      </div>
    </motion.section>
  );
}
