/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ZoomIn, ZoomOut, Contrast, BookOpen, Volume2, HelpCircle } from "lucide-react";

interface AccessibilityPanelProps {
  fontSizeLevel: number;
  setFontSizeLevel: (level: number) => void;
  highContrast: boolean;
  setHighContrast: (val: boolean) => void;
  isOpen?: boolean;
  setIsOpen?: (val: boolean) => void;
}

export default function AccessibilityPanel({
  fontSizeLevel,
  setFontSizeLevel,
  highContrast,
  setHighContrast,
  isOpen,
  setIsOpen,
}: AccessibilityPanelProps) {
  const [readingGuide, setReadingGuide] = useState(false);
  const [guideY, setGuideY] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const [localIsOpen, setLocalIsOpen] = useState(false);

  const isPanelOpen = isOpen !== undefined ? isOpen : localIsOpen;

  const togglePanel = () => {
    if (setIsOpen) {
      setIsOpen(!isPanelOpen);
    } else {
      setLocalIsOpen(!localIsOpen);
    }
  };

  // Apply font size globally on mount/change
  useEffect(() => {
    // 1.0 is standard (18px)
    // 1.15 is medium zoom (20.7px)
    // 1.30 is high zoom (23.4px)
    // 1.45 is extreme zoom (26.1px)
    let size = 18;
    if (fontSizeLevel === 1) size = 20;
    if (fontSizeLevel === 2) size = 22;
    if (fontSizeLevel === 3) size = 24;
    
    document.documentElement.style.fontSize = `${size}px`;
  }, [fontSizeLevel]);

  // Reading guide listener
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (readingGuide) {
        setGuideY(e.clientY);
      }
    };

    if (readingGuide) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [readingGuide]);

  const handleZoomIn = () => {
    if (fontSizeLevel < 3) {
      setFontSizeLevel(fontSizeLevel + 1);
    }
  };

  const handleZoomOut = () => {
    if (fontSizeLevel > 0) {
      setFontSizeLevel(fontSizeLevel - 1);
    }
  };

  return (
    <>
      {/* 1. TOP BAR PANEL - ONLY VISIBLE WHEN OPENED */}
      {isPanelOpen && (
        <div 
          className={`w-full py-2.5 px-4 transition-all duration-300 border-b text-xs flex flex-wrap items-center justify-between gap-3 sticky top-0 z-[60] shadow-md animate-slide-down ${
            highContrast 
              ? "bg-yellow-400 text-black border-black" 
              : "bg-slate-100 text-slate-800 border-slate-200"
          }`}
          role="region"
          aria-label="Controles de Acessibilidade"
          id="accessibility-controls"
        >
          <div className="flex items-center gap-2">
            <span className="font-bold flex items-center gap-1">
              <HelpCircle className="w-4 h-4 text-brand-blue" />
              <span>Acessibilidade para Idosos:</span>
            </span>
            <span className="hidden sm:inline">Ajuste o tamanho do texto e contraste abaixo.</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Font size adjustments */}
            <div className="flex items-center bg-white/40 dark:bg-black/10 rounded-lg p-0.5 border border-current">
              <button
                onClick={handleZoomOut}
                disabled={fontSizeLevel === 0}
                className="p-1 px-2.5 rounded hover:bg-white/60 font-bold flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed text-sm"
                title="Diminuir tamanho da letra"
                aria-label="Diminuir tamanho do texto"
                id="btn-zoom-out"
              >
                <ZoomOut className="w-4 h-4" />
                <span>A-</span>
              </button>
              
              <span className="px-2 font-semibold text-sm" aria-live="polite">
                {fontSizeLevel === 0 ? "Normal" : fontSizeLevel === 1 ? "Médio" : fontSizeLevel === 2 ? "Grande" : "Muito Grande"}
              </span>

              <button
                onClick={handleZoomIn}
                disabled={fontSizeLevel === 3}
                className="p-1 px-2.5 rounded hover:bg-white/60 font-bold flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed text-sm"
                title="Aumentar tamanho da letra"
                aria-label="Aumentar tamanho do texto"
                id="btn-zoom-in"
              >
                <ZoomIn className="w-4 h-4" />
                <span>A+</span>
              </button>
            </div>

            {/* High contrast toggle */}
            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`px-3 py-1.5 rounded-lg border border-current font-bold hover:opacity-90 flex items-center gap-1.5 text-sm cursor-pointer ${
                highContrast ? "bg-black text-yellow-400" : "bg-white text-slate-800"
              }`}
              title="Alternar modo de alto contraste para leitura fácil"
              aria-label={highContrast ? "Desativar Alto Contraste" : "Ativar Alto Contraste"}
              aria-pressed={highContrast}
              id="btn-high-contrast"
            >
              <Contrast className="w-4 h-4" />
              <span>{highContrast ? "Modo Padrão" : "Alto Contraste"}</span>
            </button>

            {/* Reading Guide Line */}
            <button
              onClick={() => setReadingGuide(!readingGuide)}
              className={`px-3 py-1.5 rounded-lg border border-current font-bold hover:opacity-90 flex items-center gap-1.5 text-sm cursor-pointer ${
                readingGuide ? "bg-brand-blue text-white" : "bg-white text-slate-800"
              }`}
              title="Linha guia para leitura"
              aria-label={readingGuide ? "Desativar Guia de Leitura" : "Ativar Guia de Leitura"}
              aria-pressed={readingGuide}
              id="btn-reading-guide"
            >
              <BookOpen className="w-4 h-4" />
              <span>{readingGuide ? "Ocultar Guia" : "Guia de Leitura"}</span>
            </button>

            {/* Accessibility Info Modal Toggle */}
            <button
              onClick={() => setShowHelp(!showHelp)}
              className="p-1.5 px-3 rounded-lg border border-current font-bold hover:opacity-90 bg-white text-slate-800 text-sm cursor-pointer"
              aria-label="Ajuda de Acessibilidade"
              id="btn-acc-help"
            >
              Dúvidas?
            </button>

            {/* Dismiss Button */}
            <button
              onClick={togglePanel}
              className="p-1.5 px-3 rounded-lg bg-stone-800 text-white hover:bg-stone-700 font-bold text-sm cursor-pointer border border-stone-600 transition-colors"
              aria-label="Ocultar painel de acessibilidade"
              id="btn-close-panel"
            >
              Fechar X
            </button>
          </div>
        </div>
      )}

      {/* 2. FLOATING BUTTON ON THE BOTTOM-LEFT FOR PC (With tooltip) */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex flex-col items-start group">
        <button
          onClick={togglePanel}
          className={`w-15 h-15 rounded-full shadow-2xl flex items-center justify-center border hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer ${
            highContrast
              ? "bg-yellow-400 text-black border-black text-2xl font-black"
              : "bg-brand-dark hover:bg-slate-800 text-white border-slate-700 text-2xl"
          }`}
          title="Controles de Acessibilidade (Tamanho do Texto / Contraste)"
          aria-label="Abrir Painel de Acessibilidade"
          aria-pressed={isPanelOpen}
          id="btn-floating-accessibility"
        >
          <span>♿</span>
        </button>
        {/* Tooltip text */}
        <span className="absolute left-18 top-1/2 -translate-y-1/2 bg-brand-dark text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-xl border border-slate-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Ajustar Letra e Contraste (Acessibilidade)
        </span>
      </div>

      {/* Dynamic Reading Guide Overlay */}
      {readingGuide && (
        <div
          className="fixed left-0 right-0 h-4 bg-brand-blue/20 border-y border-brand-blue/50 pointer-events-none z-50 shadow-[0_0_10px_rgba(75,160,214,0.3)]"
          style={{ top: `${guideY - 8}px` }}
          aria-hidden="true"
        />
      )}

      {/* Accessible Help Modal Overlay */}
      {showHelp && (
        <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="acc-modal-title">
          <div className="bg-white text-black p-6 rounded-xl max-w-lg w-full border-4 border-brand-blue shadow-2xl animate-fade-in">
            <h2 id="acc-modal-title" className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b-2 border-slate-100 pb-2">
              <Volume2 className="w-6 h-6 shrink-0" />
              Recursos de Acessibilidade
            </h2>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                Este site foi desenhado com carinho para o <strong>público idoso</strong> e pessoas com dificuldades visuais:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>A+ / A-:</strong> Aumente o tamanho das letras para ler sem esforçar os olhos.</li>
                <li><strong>Alto Contraste:</strong> Muda as cores para preto e amarelo forte, melhorando a visualização de botões e textos.</li>
                <li><strong>Guia de Leitura:</strong> Ativa uma faixa azul transparente que segue o ponteiro do mouse, ajudando a não se perder nas linhas do texto.</li>
                <li><strong>Navegação por Teclado:</strong> Use a tecla <kbd className="px-1.5 py-0.5 bg-gray-200 border border-gray-400 rounded text-sm">Tab</kbd> para navegar de forma ordenada por todos os botões e links.</li>
              </ul>
              <p className="font-semibold text-brand-blue">Qualquer dúvida, estamos prontos para atender você pelo WhatsApp ou Telefone!</p>
            </div>
            <button
              onClick={() => setShowHelp(false)}
              className="mt-6 w-full py-3 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold rounded-lg text-lg border-2 border-slate-900 transition-colors shadow-md cursor-pointer"
              aria-label="Fechar janela de ajuda"
              id="btn-close-acc-help"
            >
              Entendido / Fechar Janela
            </button>
          </div>
        </div>
      )}
    </>
  );
}
