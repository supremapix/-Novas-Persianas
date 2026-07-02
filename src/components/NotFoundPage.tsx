import React from "react";
import { motion } from "motion/react";
import { Home, Phone, Wrench, ShieldCheck, Compass, Sparkles, MessageSquare } from "lucide-react";

interface NotFoundPageProps {
  highContrast: boolean;
  onNavigate: (page: string) => void;
}

export default function NotFoundPage({ highContrast, onNavigate }: NotFoundPageProps) {
  return (
    <section className={`min-h-[80vh] flex items-center justify-center py-16 px-4 relative overflow-hidden ${
      highContrast ? "bg-black text-white" : "bg-gradient-to-b from-slate-900 to-stone-950 text-white"
    }`}>
      {/* Decorative Background Accents */}
      {!highContrast && (
        <>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        </>
      )}

      <div className="max-w-2xl w-full text-center relative z-10">
        
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 bg-red-500/10 text-red-400 font-bold px-4 py-1.5 rounded-full text-xs uppercase mb-6 border border-red-500/20"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Erro 404 - Página Não Encontrada</span>
        </motion.div>

        {/* Big styled 404 number */}
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className={`text-8xl md:text-9xl font-black font-display tracking-tight leading-none mb-4 ${
            highContrast ? "text-yellow-400" : "bg-gradient-to-r from-brand-blue via-sky-400 to-emerald-400 bg-clip-text text-transparent"
          }`}
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold font-display uppercase tracking-wide mb-4 text-white"
        >
          Desculpe, página não encontrada!
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-stone-300 text-base md:text-lg mb-10 max-w-lg mx-auto"
        >
          O endereço que você tentou acessar pode ter mudado de lugar ou não está mais ativo. Use as opções abaixo para encontrar o que precisa.
        </motion.p>

        {/* Quick helpful navigational items */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto mb-10"
        >
          {/* Option 1: Home */}
          <button
            onClick={() => onNavigate("home")}
            className={`p-4 rounded-xl border flex items-center gap-3.5 transition-all text-sm font-bold uppercase tracking-wider text-left w-full hover:scale-102 focus:scale-102 cursor-pointer ${
              highContrast 
                ? "bg-black border-white text-white hover:bg-zinc-900" 
                : "bg-stone-900/60 border-stone-850 hover:bg-stone-850 text-stone-200"
            }`}
          >
            <div className="w-9 h-9 rounded-full bg-brand-blue/15 flex items-center justify-center text-brand-blue shrink-0">
              <Home className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs text-stone-400 lowercase tracking-normal">Voltar para a</span>
              <span>Página Inicial</span>
            </div>
          </button>

          {/* Option 2: Persianas Curitiba */}
          <button
            onClick={() => onNavigate("persianas-curitiba")}
            className={`p-4 rounded-xl border flex items-center gap-3.5 transition-all text-sm font-bold uppercase tracking-wider text-left w-full hover:scale-102 focus:scale-102 cursor-pointer ${
              highContrast 
                ? "bg-black border-white text-white hover:bg-zinc-900" 
                : "bg-stone-900/60 border-stone-850 hover:bg-stone-850 text-stone-200"
            }`}
          >
            <div className="w-9 h-9 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs text-stone-400 lowercase tracking-normal">Veja os modelos</span>
              <span>Persianas Curitiba</span>
            </div>
          </button>

          {/* Option 3: Persianas Sob Medida */}
          <button
            onClick={() => onNavigate("persianas-sob-medida-curitiba")}
            className={`p-4 rounded-xl border flex items-center gap-3.5 transition-all text-sm font-bold uppercase tracking-wider text-left w-full hover:scale-102 focus:scale-102 cursor-pointer ${
              highContrast 
                ? "bg-black border-white text-white hover:bg-zinc-900" 
                : "bg-stone-900/60 border-stone-850 hover:bg-stone-850 text-stone-200"
            }`}
          >
            <div className="w-9 h-9 rounded-full bg-yellow-500/15 flex items-center justify-center text-yellow-400 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs text-stone-400 lowercase tracking-normal">Projetos especiais</span>
              <span>Persianas Sob Medida</span>
            </div>
          </button>

          {/* Option 4: Instalação de Persianas */}
          <button
            onClick={() => onNavigate("instalacao-de-persianas-curitiba")}
            className={`p-4 rounded-xl border flex items-center gap-3.5 transition-all text-sm font-bold uppercase tracking-wider text-left w-full hover:scale-102 focus:scale-102 cursor-pointer ${
              highContrast 
                ? "bg-black border-white text-white hover:bg-zinc-900" 
                : "bg-stone-900/60 border-stone-850 hover:bg-stone-850 text-stone-200"
            }`}
          >
            <div className="w-9 h-9 rounded-full bg-sky-400/15 flex items-center justify-center text-sky-400 shrink-0">
              <Wrench className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs text-stone-400 lowercase tracking-normal">Nosso serviço técnico</span>
              <span>Instalação de Persianas</span>
            </div>
          </button>
        </motion.div>

        {/* Contact/Support Option */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <button
            onClick={() => onNavigate("contato")}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg ${
              highContrast
                ? "bg-yellow-400 text-black font-extrabold border-2 border-black"
                : "bg-brand-blue hover:bg-brand-blue-hover text-white"
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Precisa de ajuda? Fale Conosco</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
