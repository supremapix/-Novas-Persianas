import React from "react";
import { motion } from "motion/react";
import { Sparkles, CheckCircle2, History, Award, Users, Heart, ArrowLeft, MessageSquare } from "lucide-react";

interface QuemSomosPageProps {
  highContrast: boolean;
  onNavigateHome: () => void;
}

export default function QuemSomosPage({ highContrast, onNavigateHome }: QuemSomosPageProps) {
  const values = [
    {
      icon: <Award className="w-6 h-6 text-brand-blue" />,
      title: "Qualidade Absoluta",
      description: "Utilizamos apenas materiais premium, tecidos com tratamento UV e mecanismos de altíssima durabilidade."
    },
    {
      icon: <Users className="w-6 h-6 text-brand-blue" />,
      title: "Foco na Terceira Idade",
      description: "Nossos consultores são altamente treinados para oferecer um atendimento paciente, didático e extremamente respeitoso."
    },
    {
      icon: <Heart className="w-6 h-6 text-brand-blue" />,
      title: "Atendimento Humanizado",
      description: "Não vendemos apenas persianas, criamos relações de confiança. O seu bem-estar e conforto são nossa prioridade máxima."
    },
    {
      icon: <History className="w-6 h-6 text-brand-blue" />,
      title: "Tradição em Curitiba",
      description: "Nascemos no coração de Curitiba para suprir a demanda por produtos personalizados com prazos de entrega reais e rápidos."
    }
  ];

  const timeline = [
    {
      year: "Fundação",
      title: "O Início de um Sonho",
      description: "A Nova's Persianas nasceu em Curitiba com a missão de redefinir o mercado de persianas sob medida, priorizando um serviço transparente e atencioso."
    },
    {
      year: "Expansão",
      title: "Referência no Hauer e Região",
      description: "Consolidamos nossa sede física no bairro Hauer, equipando nossa estrutura para atender Curitiba e toda a região metropolitana com agilidade única."
    },
    {
      year: "Inovação",
      title: "Selo de Acessibilidade",
      description: "Implementamos programas de capacitação e adaptamos nossos canais para sermos a marca mais recomendada e segura para clientes idosos e suas famílias."
    }
  ];

  return (
    <div className={`pt-8 pb-16 transition-colors duration-300 ${
      highContrast ? "bg-black text-white" : "bg-stone-50/50 text-stone-800"
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumb & Return button */}
        <div className="mb-8">
          <button
            onClick={onNavigateHome}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
              highContrast
                ? "bg-yellow-400 text-black border-2 border-black"
                : "bg-white text-stone-700 hover:text-brand-blue shadow-md border border-stone-150"
            }`}
            aria-label="Voltar para a Página Inicial"
          >
            <ArrowLeft size={14} />
            <span>Voltar ao Início</span>
          </button>
        </div>

        {/* HERO BANNER SECTION */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-xl">
          {/* Cover image with filter */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://www.facilpersianas.com.br/cdn/shop/files/Double_Vision_Plus_Preta_8_60046441-bed2-405d-a669-5271781f10e6.jpg?v=1751491915&width=1445" 
              alt="Ambiente elegante com persiana sob medida" 
              className="w-full h-full object-cover filter brightness-[0.35]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 px-6 py-16 md:py-24 text-center max-w-4xl mx-auto text-white">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase mb-4 ${
              highContrast ? "bg-yellow-400 text-black" : "bg-brand-blue text-white"
            }`}>
              <Sparkles className="w-3 h-3" />
              <span>Conheça Nossa História</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 font-display">
              Quem Somos • Nova's Persianas
            </h1>
            <p className="text-sm md:text-lg text-stone-200 font-medium leading-relaxed max-w-2xl mx-auto">
              Compromisso com o design sofisticado, prazos de entrega imbatíveis e um atendimento feito com todo o respeito e carinho que você merece.
            </p>
          </div>
        </div>

        {/* TWO COLUMN CONTENT BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-center">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <span className={`text-xs font-extrabold tracking-widest uppercase ${
              highContrast ? "text-yellow-400" : "text-brand-blue"
            }`}>
              Nossa Essência
            </span>
            <h2 className={`text-2xl md:text-3xl font-black uppercase font-display tracking-tight ${
              highContrast ? "text-yellow-300" : "text-stone-900"
            }`}>
              Persianas Feitas Sob Medida para Transformar Seu Lar
            </h2>
            <div className={`text-base md:text-lg leading-relaxed flex flex-col gap-4 ${
              highContrast ? "text-stone-200" : "text-stone-600 font-medium"
            }`}>
              <p>
                A <strong className={highContrast ? "text-yellow-300" : "text-stone-900"}>Nova's Persianas Curitiba</strong> é especializada na consultoria, venda, instalação sob medida, higienização e conserto de persianas de alta qualidade. Com sede fixa em Curitiba, no tradicional bairro Hauer, atendemos residências e escritórios buscando aliar conforto térmico, controle de luminosidade e sofisticação estética.
              </p>
              <p>
                Entendemos que comprar persianas é um investimento no seu bem-estar. Por isso, desenvolvemos um atendimento inteiramente diferenciado, prestando total assistência desde a medição gratuita em sua residência até a instalação e suporte pós-venda permanente.
              </p>
              <p>
                Nossa equipe tem o cuidado de explicar cada detalhe de funcionamento dos produtos de forma transparente, garantindo que você faça a escolha ideal para o seu ambiente, sem surpresas e com total segurança.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className={`absolute -inset-2 rounded-3xl blur-lg opacity-30 ${
              highContrast ? "bg-white" : "bg-brand-blue"
            }`} />
            <div className={`relative rounded-3xl overflow-hidden border-2 p-3 ${
              highContrast ? "bg-black border-white" : "bg-white border-stone-200 shadow-2xl"
            }`}>
              <img 
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAHTFQj6NuJDjW8sfkkHIhJ4Kw-5EQSw60Fxeqr2IjTc4wFsZUa1i0Jqy219iTSuQhiDH33kJJ45ac9bwZE19jA7i-RRz94ibg7y-SUJ3CjYvlS017X4Av4uLy0c-lwXvPFdZYQ=s680-w680-h510-rw" 
                alt="Showroom de Persianas Nova's" 
                className="w-full h-auto rounded-2xl object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* OUR VALUES CARD GRID */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className={`text-2xl md:text-3xl font-black uppercase font-display tracking-tight mb-3 ${
              highContrast ? "text-yellow-300" : "text-stone-900"
            }`}>
              Valores que Nos Guiam
            </h2>
            <p className={highContrast ? "text-stone-200" : "text-stone-500 font-medium"}>
              Construímos nossa marca com base em pilares sólidos para garantir sua total tranquilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                  highContrast 
                    ? "bg-stone-950 border-white text-white" 
                    : "bg-white border-stone-200 shadow-md hover:shadow-xl"
                }`}
              >
                <div className="flex gap-4 items-start">
                  <div className={`p-3 rounded-xl shrink-0 ${
                    highContrast ? "bg-yellow-400 text-black" : "bg-brand-blue/10 text-brand-blue"
                  }`}>
                    {value.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold uppercase tracking-tight mb-2 ${
                      highContrast ? "text-yellow-300" : "text-stone-900"
                    }`}>
                      {value.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      highContrast ? "text-stone-200" : "text-stone-600 font-medium"
                    }`}>
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TIMELINE / HISTORIC ROADMAP */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className={`text-2xl md:text-3xl font-black uppercase font-display tracking-tight mb-3 ${
              highContrast ? "text-yellow-300" : "text-stone-900"
            }`}>
              Nossa Trajetória
            </h2>
            <p className={highContrast ? "text-stone-200" : "text-stone-500 font-medium"}>
              Como nos tornamos uma das marcas mais confiáveis no mercado de Curitiba.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto pl-6 sm:pl-0">
            {/* Center line */}
            <div className={`absolute top-0 bottom-0 left-3 sm:left-1/2 w-1 -translate-x-1/2 rounded ${
              highContrast ? "bg-white" : "bg-stone-200"
            }`} />

            <div className="flex flex-col gap-10">
              {timeline.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className="relative flex flex-col sm:flex-row items-stretch">
                    
                    {/* Circle marker */}
                    <div className={`absolute top-1 left-3 sm:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 flex items-center justify-center z-10 ${
                      highContrast 
                        ? "bg-black border-yellow-400" 
                        : "bg-white border-brand-blue"
                    }`} />

                    <div className={`w-full sm:w-1/2 pl-8 sm:pl-0 sm:pr-8 ${isEven ? "sm:text-right" : "sm:translate-x-full sm:pl-8 sm:text-left"}`}>
                      <div className={`p-5 rounded-2xl border ${
                        highContrast 
                          ? "bg-stone-950 border-white text-white" 
                          : "bg-white border-stone-150 shadow-sm"
                      }`}>
                        <span className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-bold tracking-widest uppercase mb-2 ${
                          highContrast ? "bg-yellow-400 text-black" : "bg-brand-blue text-white"
                        }`}>
                          {item.year}
                        </span>
                        <h3 className={`text-lg font-black uppercase tracking-tight mb-1 font-display ${
                          highContrast ? "text-yellow-300" : "text-stone-900"
                        }`}>
                          {item.title}
                        </h3>
                        <p className={`text-xs sm:text-sm leading-relaxed ${
                          highContrast ? "text-stone-200" : "text-stone-600 font-medium"
                        }`}>
                          {item.description}
                        </p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM CTA CARD */}
        <div className={`p-8 rounded-3xl border-2 text-center max-w-4xl mx-auto flex flex-col items-center gap-5 ${
          highContrast ? "bg-black border-white" : "bg-white border-stone-200/60 shadow-xl"
        }`}>
          <h2 className={`text-2xl md:text-3xl font-black uppercase font-display tracking-tight ${
            highContrast ? "text-yellow-300" : "text-stone-900"
          }`}>
            Quer ver as persianas de perto e tirar suas medidas?
          </h2>
          <p className={`text-sm md:text-base max-w-2xl ${
            highContrast ? "text-stone-200" : "text-stone-600 font-semibold"
          }`}>
            Nossa equipe técnica vai até sua residência ou empresa em Curitiba e Região Metropolitana para realizar uma consultoria e tirar as medidas com precisão milimétrica. Totalmente de graça!
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5541995507310&text=Ol%C3%A1%2C%20achei%20seu%20site%20no%20%2AGoogle%2A%20e%20%2Agostaria%20de%20agendar%20uma%20visita%20técnica%3A%2A"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-extrabold text-[11px] tracking-wider shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer uppercase ${
              highContrast
                ? "bg-yellow-400 text-black border-black"
                : "bg-brand-blue text-white hover:bg-brand-blue-hover"
            }`}
            aria-label="Falar com consultor agora pelo WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar com Consultor</span>
          </a>
        </div>

      </div>
    </div>
  );
}
