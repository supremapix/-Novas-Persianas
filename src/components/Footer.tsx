/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, ShieldCheck, CheckSquare, MessageSquare, ExternalLink, Heart } from "lucide-react";

interface FooterProps {
  highContrast: boolean;
  onFilterProduct: (category: string) => void;
  activePage: "home" | "quem-somos" | "contato";
  setActivePage: (page: "home" | "quem-somos" | "contato") => void;
  onOpenAccessibility?: () => void;
}

export default function Footer({ 
  highContrast, 
  onFilterProduct, 
  activePage,
  setActivePage,
  onOpenAccessibility 
}: FooterProps) {
  
  const handleScrollToSection = (hashId: string, categoryFilter?: string) => {
    if (categoryFilter) {
      onFilterProduct(categoryFilter);
    }

    if (hashId === "sobre") {
      setActivePage("quem-somos");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (hashId === "contato") {
      setActivePage("contato");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setActivePage("home");

    setTimeout(() => {
      const element = document.getElementById(hashId);
      if (element) {
        const headerOffset = 120;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 120);
  };

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      id="footer"
      className={`border-t-2 transition-colors duration-300 ${
        highContrast 
          ? "bg-black text-white border-white" 
          : "bg-gradient-to-b from-stone-900 via-stone-950 to-neutral-950 text-stone-200 border-brand-blue/20"
      }`}
      aria-label="Rodapé do site com contatos e links"
    >
      {/* MAPA & COMO CHEGAR (Visibilidade especial de localização Curitiba) */}
      <div className={`p-6 border-b ${
        highContrast ? "border-white bg-stone-950" : "bg-stone-950/40 border-stone-800"
      }`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 text-center lg:text-left">
            <h3 className="text-xl font-bold text-white mb-2 font-display">Nossa Localização em Curitiba</h3>
            <p className="text-sm text-stone-400 font-medium leading-relaxed mb-4">
              Atendemos de forma ágil em todos os bairros de Curitiba (Batel, Mercês, Água Verde, Portão, Centro Cívico, etc.) e cidades da Região Metropolitana.
            </p>
            <a 
              href="https://maps.app.goo.gl/cywjDuMVyBH4QiDD8?g_st=ac" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm border transition-transform hover:scale-105 min-h-[44px] ${
                highContrast ? "bg-yellow-400 text-black border-black" : "bg-stone-800 text-white hover:bg-stone-700 border-stone-700"
              }`}
              aria-label="Abrir mapa de Curitiba no Google Maps em nova janela"
            >
              <MapPin className="w-4 h-4 text-red-500" />
              <span>Rotas no Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="lg:col-span-7 h-64 rounded-xl overflow-hidden border-2 border-stone-700 relative shadow-inner">
            {/* Semantic Map description for screen readers */}
            <span className="sr-only">Mapa ilustrativo mostrando que a Nova's Persianas cobre a cidade de Curitiba e região metropolitana</span>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14404.504494223083!2d-49.33423775000001!3d-25.500839900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x94dcfba8b9bf414f%3A0xd52483c6d982af6c!2sNovas%20Persianas%2C%20R.%20Frei%20Henrique%20de%20Coimbra%2C%201750%20-%20Hauer%2C%20Curitiba%20-%20PR%2C%2081650-060!3m2!1d-25.4824515!2d-49.2581649!5e0!3m2!1spt-BR!2sbr!4v1783006628520!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de cobertura em Curitiba e Região Metropolitana"
              className={highContrast ? "grayscale invert contrast-125" : ""}
            />
          </div>

        </div>
      </div>

      {/* CORE 4 COLUMNS FOOTER */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Animated Footer Logo & Brand Identity */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 mb-12 pb-8 border-b border-stone-800 text-center"
        >
          <div className="relative flex items-center justify-center">
            {/* Ambient Back Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 via-sky-400/5 to-brand-blue/10 blur-xl rounded-full"
              animate={{
                scale: [0.95, 1.2, 0.95],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Interactive Image Container with Floating */}
            <motion.div
              animate={{
                y: [0, -3, 0]
              }}
              whileHover={{
                scale: 1.08,
                filter: highContrast 
                  ? "drop-shadow(0 0 12px #fff)" 
                  : "drop-shadow(0 0 12px rgba(56, 189, 248, 0.5))",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{
                y: {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                scale: {
                  type: "spring",
                  stiffness: 400,
                  damping: 15
                }
              }}
              className="relative z-10 cursor-pointer"
              onClick={() => handleScrollToSection("hero")}
            >
              <img
                src="https://img.novaspersianascuritiba.com.br/novapercianas-removebg-preview.png"
                alt="Nova's Persianas"
                referrerPolicy="no-referrer"
                className="h-16 md:h-20 w-auto object-contain transition-all duration-300 hover:brightness-110"
              />
              
              {/* Premium Shimmer Sweep effect across the logo on Hover */}
              <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-lg">
                <motion.div
                  className="absolute -inset-full bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{
                    x: ["100%", "-100%"],
                    transition: { duration: 1.2, ease: "easeOut" }
                  }}
                />
              </div>
            </motion.div>
          </div>

          <p className="text-stone-400 text-xs mt-2 font-medium max-w-md">
            Líder em Persianas Sob Medida • Atendimento humanizado e focado no conforto e facilidade para a Terceira Idade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: MAPA DO SITE */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold text-white border-b border-stone-700 pb-2 font-display uppercase tracking-wider">
              Mapa do Site
            </h4>
            <ul className="flex flex-col gap-3 text-base font-semibold">
              <li>
                <button 
                  onClick={() => handleScrollToSection("hero")}
                  className="hover:underline focus:underline text-left text-stone-300 hover:text-white cursor-pointer min-h-[40px] flex items-center"
                >
                  Página Inicial (Home)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection("sobre")}
                  className="hover:underline focus:underline text-left text-stone-300 hover:text-white cursor-pointer min-h-[40px] flex items-center"
                >
                  Quem Somos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection("modelos", "all")}
                  className="hover:underline focus:underline text-left text-stone-300 hover:text-white cursor-pointer min-h-[40px] flex items-center"
                >
                  Todos os Modelos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection("modelos", "Rolô")}
                  className="hover:underline focus:underline text-left text-stone-300 hover:text-white cursor-pointer min-h-[40px] flex items-center"
                >
                  Persianas Modelo Rolô
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection("servicos")}
                  className="hover:underline focus:underline text-left text-stone-300 hover:text-white cursor-pointer min-h-[40px] flex items-center"
                >
                  Nossos Serviços
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: LINKS ÚTEIS */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold text-white border-b border-stone-700 pb-2 font-display uppercase tracking-wider">
              Links Úteis
            </h4>
            <ul className="flex flex-col gap-3 text-base font-semibold">
              <li>
                <a href="#politica" className="hover:underline focus:underline text-stone-300 hover:text-white min-h-[40px] flex items-center">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#devolucoes" className="hover:underline focus:underline text-stone-300 hover:text-white min-h-[40px] flex items-center">
                  Política de Devoluções
                </a>
              </li>
              <li>
                <a href="#termos" className="hover:underline focus:underline text-stone-300 hover:text-white min-h-[40px] flex items-center">
                  Termos & Condições
                </a>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection("contato")}
                  className="hover:underline focus:underline text-left text-stone-300 hover:text-white cursor-pointer min-h-[40px] flex items-center"
                >
                  Contate-nos
                </button>
              </li>
              {onOpenAccessibility && (
                <li>
                  <button 
                    onClick={onOpenAccessibility}
                    className="hover:underline focus:underline text-left text-brand-blue hover:text-white cursor-pointer min-h-[40px] flex items-center gap-1.5"
                    aria-label="Abrir Painel de Acessibilidade no topo do site"
                  >
                    <span>♿ Acessibilidade (Topo)</span>
                  </button>
                </li>
              )}
              <li>
                <a href="#noticias" className="hover:underline focus:underline text-stone-300 hover:text-white min-h-[40px] flex items-center">
                  Últimas Notícias
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: CENTRAL DO CLIENTE */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold text-white border-b border-stone-700 pb-2 font-display uppercase tracking-wider">
              Central do Cliente
            </h4>
            <ul className="flex flex-col gap-3 text-base font-semibold">
              <li>
                <a href="#conta" className="hover:underline focus:underline text-stone-300 hover:text-white min-h-[40px] flex items-center">
                  Minha Conta / Acesso
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send/?phone=5541995507310&text=Ol%C3%A1%2C%20achei%20seu%20site%20no%20%2AGoogle%2A%20e%20%2Agostaria%20de%3A%2A" target="_blank" rel="noopener noreferrer" className="hover:underline focus:underline text-stone-300 hover:text-white min-h-[40px] flex items-center">
                  Orçamentos Online
                </a>
              </li>
              <li>
                <a href="#desejos" className="hover:underline focus:underline text-stone-300 hover:text-white min-h-[40px] flex items-center">
                  Lista de Desejos
                </a>
              </li>
              <li>
                <a href="#favoritos" className="hover:underline focus:underline text-stone-300 hover:text-white min-h-[40px] flex items-center">
                  Seus Favoritos
                </a>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection("servicos")}
                  className="hover:underline focus:underline text-left text-stone-300 hover:text-white cursor-pointer min-h-[40px] flex items-center"
                >
                  Agendar Limpeza/Higienização
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTATOS & CONFIAVEL BADGE */}
          <div className={`flex flex-col gap-5 p-6 rounded-2xl border transition-all duration-300 ${
            highContrast 
              ? "bg-black border-white text-white" 
              : "bg-stone-900/90 text-stone-200 border-stone-800 shadow-2xl"
          }`}>
            <h4 className="text-lg font-black text-white border-b border-stone-700 pb-2.5 font-display uppercase tracking-wider">
              Contatos Rápidos
            </h4>
            <div className="flex flex-col gap-4 text-base font-semibold">
              
              {/* Phone Click */}
              <a 
                href="tel:+5541995507310" 
                className="group flex items-center gap-3 text-stone-300 hover:text-brand-blue transition-colors p-1.5 rounded-xl hover:bg-stone-800/40 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                title="Ligar para Nova's Persianas"
                aria-label="Ligar para o telefone (41) 99550-7310"
              >
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                  <Phone className="w-5 h-5 shrink-0 animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-stone-400 font-bold uppercase tracking-wider">Telefone & WhatsApp</span>
                  <span className="text-lg font-extrabold text-white group-hover:underline">(41) 99550-7310</span>
                </div>
              </a>

              {/* Email Click */}
              <a 
                href="mailto:contato@novaspersianascuritiba.com.br" 
                className="group flex items-center gap-3 text-stone-300 hover:text-brand-blue transition-colors p-1.5 rounded-xl hover:bg-stone-800/40 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                title="Enviar e-mail para contato@novaspersianascuritiba.com.br"
                aria-label="Enviar e-mail para contato@novaspersianascuritiba.com.br"
              >
                <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all">
                  <Mail className="w-5 h-5 shrink-0" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-xs text-stone-400 font-bold uppercase tracking-wider">E-mail Comercial</span>
                  <span className="text-sm font-extrabold text-white group-hover:underline truncate">contato@novaspersianascuritiba.com.br</span>
                </div>
              </a>

              {/* Address Click */}
              <a 
                href="https://maps.app.goo.gl/cywjDuMVyBH4QiDD8?g_st=ac" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-stone-300 hover:text-brand-blue transition-colors p-1.5 rounded-xl hover:bg-stone-800/40 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                title="Ver endereço no Google Maps"
                aria-label="Nossa sede no bairro Hauer em Curitiba. Clique para abrir rotas no Google Maps."
              >
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-all">
                  <MapPin className="w-5 h-5 shrink-0" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-stone-400 font-bold uppercase tracking-wider">Endereço Física / Sede</span>
                  <span className="text-xs font-extrabold text-stone-200 leading-tight group-hover:underline">Rua Frei Henrique de Coimbra, 1750, Hauer, Curitiba - PR</span>
                </div>
              </a>

              {/* SELO DE SITE CONFIÁVEL / SITE SEGURO */}
              <div className={`mt-2 p-3.5 rounded-xl border flex items-center gap-3 ${
                highContrast ? "bg-stone-900 border-white text-white" : "bg-stone-900/90 text-emerald-100 border-stone-800"
              }`}>
                <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
                <div className="text-xs">
                  <span className="font-extrabold block text-white uppercase tracking-wider text-[10px]">Site 100% Confiável</span>
                  <span className="text-stone-400 block mt-0.5 text-[10px]">Navegação e contatos criptografados e seguros</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* SOCIAL LINKS & FINAL LINE */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-stone-400 text-sm font-semibold">Siga-nos nas Redes Sociais:</span>
            
            {/* Facebook (Large accessible size 44x44px) */}
            <a 
              href="https://www.facebook.com/novaspersianass" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-11 h-11 rounded-full bg-stone-800 hover:bg-brand-blue text-white flex items-center justify-center transition-colors shadow focus:ring-2 focus:ring-brand-blue focus:outline-none"
              aria-label="Acessar nosso perfil do Facebook em nova janela"
            >
              <span className="text-xl font-bold font-sans">f</span>
            </a>

            {/* Instagram (Large accessible size 44x44px) */}
            <a 
              href="https://www.instagram.com/novaspersianas/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-11 h-11 rounded-full bg-stone-800 hover:bg-brand-blue text-white flex items-center justify-center transition-colors shadow focus:ring-2 focus:ring-brand-blue focus:outline-none"
              aria-label="Acessar nosso perfil do Instagram em nova janela"
            >
              <span className="text-base font-bold font-sans">ig</span>
            </a>

            {onOpenAccessibility && (
              <button 
                onClick={onOpenAccessibility}
                className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-brand-blue hover:text-white text-stone-300 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-stone-700 hover:border-brand-blue min-h-[44px]"
                aria-label="Abrir Painel de Acessibilidade"
              >
                <span>♿ Acessibilidade</span>
              </button>
            )}
          </div>

          <div className="text-center md:text-right">
            <p className="text-stone-400 text-sm font-medium">
              © 2026 Nova's Persianas. Todos os direitos reservados.
            </p>
            <p className="text-stone-500 text-xs mt-1">
              CNPJ: 12.345.678/0001-90 • Curitiba, PR
            </p>
          </div>
        </div>

        {/* Suprema Credit Section with deep elegance and perfect brand alignment */}
        <SupremaCredit />

      </div>
    </motion.footer>
  );
}

export function SupremaCredit() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-4 border-t border-slate-800/50 flex justify-center items-center">
      <div className="bg-slate-950/70 border border-slate-800/80 rounded-full px-6 py-2.5 shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]">
        <p className="text-slate-200 hover:text-white transition-colors duration-200 text-sm sm:text-base font-bold flex flex-wrap items-center justify-center gap-2">
          <span className="opacity-90">Desenvolvido com</span> 
          
          {/* Coração pulsante com efeito de sombra */}
          <Heart 
            size={14} 
            className="text-red-500 animate-[pulse_1.5s_infinite] shrink-0 filter drop-shadow-[0_0_3px_rgba(239,68,68,0.7)]" 
          /> 
          
          <span className="opacity-90">por</span>
          
          {/* Link para o site da Suprema */}
          <a 
            id="developer-suprema-link"
            href="https://supremasite.com.br" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-yellow-400 hover:text-yellow-300 transition-all font-black inline-flex items-center gap-2 cursor-pointer border-b border-dashed border-yellow-400/50 hover:border-yellow-300 text-sm sm:text-base"
          >
            Suprema Sites Express
            
            {/* Logotipo oficial com efeito de iluminação */}
            <img 
              src="https://img.supremamidia.com/suprema-img.png" 
              alt="Suprema" 
              className="h-[18px] w-auto inline select-none shrink-0 filter drop-shadow-[0_0_2px_rgba(250,204,21,0.5)] transition-transform duration-300 hover:scale-110" 
              referrerPolicy="no-referrer"
            />
          </a>
        </p>
      </div>
    </div>
  );
}
