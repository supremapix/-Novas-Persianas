/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { MessageSquare, ArrowUp, Share2, Twitter, Facebook, Linkedin, Copy, Check, X, BookOpen, Phone } from "lucide-react";

interface FloatingContactProps {
  highContrast: boolean;
}

export default function FloatingContact({ highContrast }: FloatingContactProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  const shareText = "Nova's Persianas Curitiba • Persianas sob medida com qualidade premium e atendimento diferenciado em Curitiba e Região!";
  const shareImage = "https://scontent.fbfh15-1.fna.fbcdn.net/v/t39.30808-6/648959460_863100380114830_786683706665261508_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x2340&ctp=s1080x2340&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFXI1kAWI4sZxK8lFAGtC5bPrwGqdIyTYw-vAap0jJNjN4bpEC-qY8xX26pdfWNzTLvChSUddKgvju-qcLATn4i&_nc_ohc=VzlnOesbaNEQ7kNvwEAKwMe&_nc_oc=AdoQ_Pdg8_rCFwnSHrTHOjC96hYPuvfoQ8v5sOqsfvLdUjNyR0DFkF0_teucOb_02VABoli6_zWp7qz1Ywuuz2dH&_nc_zt=23&_nc_ht=scontent.fbfh15-1.fna&_nc_gid=yxj8pZ1GplcKklaL01qizw&_nc_ss=7b2a8&oh=00_AQBstcjvky5YYZRv7K28_o9ZfM4dMHHmm3t93AzAiPDPqA&oe=6A4C620F";

  useEffect(() => {
    setShareUrl(window.location.href);
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareText + " " + shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Safe sharing URLs
  const shareWhatsApp = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
  const shareFacebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const shareTwitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  const shareLinkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const sharePinterest = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&media=${encodeURIComponent(shareImage)}&description=${encodeURIComponent(shareText)}`;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3.5 items-end">
        
        {/* 1. BACK TO TOP BUTTON (Visible on scroll) */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-xl border hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer animate-fade-in ${
              highContrast
                ? "bg-yellow-400 text-black border-black"
                : "bg-brand-dark hover:bg-slate-800 text-white border-slate-700"
            }`}
            aria-label="Voltar ao início da página"
            title="Voltar ao topo"
            id="btn-scroll-top"
          >
            <ArrowUp className="w-5 h-5 stroke-[3px]" />
          </button>
        )}

        {/* 2. FLOATING SHARE BUTTON WITH PULSE EFFECT */}
        <button
          onClick={() => setIsShareOpen(true)}
          className="relative group cursor-pointer"
          aria-label="Compartilhar esta página"
          id="btn-floating-share"
        >
          {/* Breathing background circle pulse (Not annoying, subtle and elegant) */}
          <span className="absolute -inset-2 bg-purple-500/35 rounded-full animate-ping pointer-events-none duration-1000" />
          
          {/* Main Share Button */}
          <div className={`w-15 h-15 rounded-full shadow-2xl flex items-center justify-center border hover:scale-105 active:scale-95 transition-transform duration-200 ${
            highContrast
              ? "bg-yellow-400 text-black border-black"
              : "bg-purple-600 hover:bg-purple-700 text-white border-purple-500/35"
          }`}>
            <Share2 className="w-6 h-6 shrink-0" />
          </div>

          {/* Text tooltip for hover on desktop */}
          <span className="absolute right-18 top-1/2 -translate-y-1/2 bg-brand-dark text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-xl border border-slate-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:inline">
            Compartilhar Página
          </span>
        </button>

        {/* 3. PERSISTENT FLOATING WHATSAPP BUTTON WITH PULSE EFFECT */}
        <a
          href="https://api.whatsapp.com/send/?phone=5541995507310&text=Ol%C3%A1%2C%20achei%20seu%20site%20no%20%2AGoogle%2A%20e%20%2Agostaria%20de%3A%2A"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group cursor-pointer"
          aria-label="Fale conosco agora pelo WhatsApp"
          id="btn-floating-whatsapp"
        >
          {/* Breathing background circle pulse (Not annoying, subtle and elegant) */}
          <span className="absolute -inset-2 bg-brand-blue/35 rounded-full animate-ping pointer-events-none duration-1000" />
          
          {/* Main WhatsApp Button */}
          <div className={`w-15 h-15 rounded-full shadow-2xl flex items-center justify-center border hover:scale-105 active:scale-95 transition-transform duration-200 ${
            highContrast
              ? "bg-yellow-400 text-black border-black"
              : "bg-brand-blue hover:bg-brand-blue-hover text-white border-brand-blue/35"
          }`}>
            <MessageSquare className="w-7 h-7 shrink-0" />
          </div>

          {/* Text tooltip for hover on desktop */}
          <span className="absolute right-18 top-1/2 -translate-y-1/2 bg-brand-dark text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-xl border border-slate-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:inline">
            Falar no WhatsApp (41) 99550-7310
          </span>
        </a>

        {/* 4. PERSISTENT FLOATING CALL NOW (LIGAR AGORA) BUTTON WITH PULSE EFFECT */}
        <a
          href="tel:+554132788598"
          className="relative group cursor-pointer"
          aria-label="Ligar agora para o Telefone Fixo"
          id="btn-floating-call-now"
        >
          {/* Breathing background circle pulse (Subtle and elegant) */}
          <span className="absolute -inset-2 bg-amber-500/35 rounded-full animate-ping pointer-events-none duration-1000" />
          
          {/* Main Call Button */}
          <div className={`w-15 h-15 rounded-full shadow-2xl flex items-center justify-center border hover:scale-105 active:scale-95 transition-transform duration-200 ${
            highContrast
              ? "bg-yellow-400 text-black border-black"
              : "bg-amber-500 hover:bg-amber-600 text-slate-950 border-amber-400/35"
          }`}>
            <Phone className="w-7 h-7 shrink-0 animate-pulse" />
          </div>

          {/* Text tooltip for hover on desktop */}
          <span className="absolute right-18 top-1/2 -translate-y-1/2 bg-brand-dark text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-xl border border-slate-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:inline">
            Ligar Agora (Fixo): (41) 3278-8598
          </span>
        </a>

      </div>

      {/* 4. MODAL DE COMPARTILHAMENTO DE PÁGINA */}
      {isShareOpen && (
        <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="share-modal-title">
          <div className="bg-white text-stone-950 rounded-2xl max-w-md w-full overflow-hidden border-2 border-slate-200 shadow-2xl animate-scale-up relative">
            
            {/* Header / Top Close button */}
            <button
              onClick={() => setIsShareOpen(false)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors z-10 cursor-pointer focus:outline-none"
              aria-label="Fechar janela de compartilhamento"
              id="btn-close-share"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Banner Image */}
            <div className="h-44 w-full overflow-hidden relative bg-stone-100">
              <img 
                src={shareImage} 
                alt="Persiana Double Vision" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                <div>
                  <span className="text-white text-[10px] uppercase font-bold tracking-widest bg-purple-600 px-2.5 py-1 rounded">Compartilhar</span>
                  <h3 id="share-modal-title" className="text-white text-lg font-bold font-display mt-1 tracking-tight">Nova's Persianas Curitiba</h3>
                </div>
              </div>
            </div>

            {/* Content & Social Grid */}
            <div className="p-5">
              <p className="text-stone-600 text-xs font-medium leading-relaxed mb-5 border-l-4 border-purple-500 pl-3">
                {shareText}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-5">
                
                {/* WhatsApp */}
                <a
                  href={shareWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-emerald-100 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-all hover:scale-102 cursor-pointer"
                  title="Compartilhar no WhatsApp"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>

                {/* Facebook */}
                <a
                  href={shareFacebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-blue-100 bg-blue-50 hover:bg-blue-100 text-blue-800 text-xs font-bold transition-all hover:scale-102 cursor-pointer"
                  title="Compartilhar no Facebook"
                >
                  <Facebook className="w-4 h-4 text-blue-600" />
                  <span>Facebook</span>
                </a>

                {/* Twitter */}
                <a
                  href={shareTwitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-800 text-xs font-bold transition-all hover:scale-102 cursor-pointer"
                  title="Compartilhar no Twitter / X"
                >
                  <Twitter className="w-4 h-4 text-stone-700" />
                  <span>Twitter (X)</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={shareLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-sky-100 bg-sky-50 hover:bg-sky-100 text-sky-800 text-xs font-bold transition-all hover:scale-102 cursor-pointer"
                  title="Compartilhar no LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-sky-600" />
                  <span>LinkedIn</span>
                </a>

                {/* Pinterest */}
                <a
                  href={sharePinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-red-100 bg-red-50 hover:bg-red-100 text-red-800 text-xs font-bold transition-all hover:scale-102 cursor-pointer col-span-2 justify-center"
                  title="Compartilhar no Pinterest"
                >
                  <span className="w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-[10px] font-sans">P</span>
                  <span>Pinterest</span>
                </a>

              </div>

              {/* Copy URL */}
              <button
                onClick={handleCopyLink}
                className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-purple-300 hover:border-purple-500 bg-purple-50/50 hover:bg-purple-50 rounded-xl text-purple-900 text-xs font-extrabold transition-all cursor-pointer"
                title="Copiar link e texto para a área de transferência"
                id="btn-copy-share-url"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">Link Copiado com Sucesso!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-purple-600" />
                    <span>Copiar Link + Descrição</span>
                  </>
                )}
              </button>

              {/* Bottom dismissal */}
              <button
                onClick={() => setIsShareOpen(false)}
                className="mt-4 w-full py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold rounded-lg text-xs transition-colors cursor-pointer"
                id="btn-close-share-footer"
              >
                Fechar Painel
              </button>

            </div>

          </div>
        </div>
      )}
       {/* LEFT-SIDE FLOATING WHATSAPP CATALOG BUTTON */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3.5 items-start">
        <a
          href="https://wa.me/c/554195507310"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group cursor-pointer"
          aria-label="Ver nosso Catálogo de Persianas no WhatsApp"
          id="btn-floating-catalog-left"
        >
          {/* Breathing background circle pulse */}
          <span className="absolute -inset-2 bg-emerald-500/35 rounded-full animate-ping pointer-events-none duration-1000" />
          
          {/* Main Catalog Button */}
          <div className={`w-15 h-15 rounded-full shadow-2xl flex items-center justify-center border hover:scale-105 active:scale-95 transition-transform duration-200 ${
            highContrast
              ? "bg-yellow-400 text-black border-black"
              : "bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-500/35"
          }`}>
            <BookOpen className="w-7 h-7 shrink-0 animate-pulse" />
          </div>

          {/* Text tooltip for hover on desktop */}
          <span className="absolute left-18 top-1/2 -translate-y-1/2 bg-brand-dark text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-xl border border-slate-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:inline">
            Catálogo de Persianas 📖
          </span>
        </a>
      </div>

    </>
  );
}
