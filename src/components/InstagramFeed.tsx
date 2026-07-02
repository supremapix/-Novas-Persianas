import React from "react";
import { motion } from "motion/react";
import { Instagram, ArrowRight, ShieldCheck } from "lucide-react";

interface InstagramFeedProps {
  highContrast: boolean;
}

export default function InstagramFeed({ highContrast }: InstagramFeedProps) {
  const profileUrl = "https://www.instagram.com/novaspersianas/";
  const profileHandle = "@novaspersianas";

  return (
    <section
      id="instagram-feed"
      className={`py-12 md:py-20 px-4 relative overflow-hidden border-t border-b transition-colors duration-300 ${
        highContrast
          ? "bg-black text-white border-white"
          : "bg-stone-50/60 text-stone-800 border-stone-200"
      }`}
      aria-label="Feed do Instagram"
    >
      {/* Decorative background glow circles (disabled in highContrast for accessibility) */}
      {!highContrast && (
        <>
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-full blur-3xl pointer-events-none select-none" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-br from-amber-400/10 to-pink-400/10 rounded-full blur-3xl pointer-events-none select-none" />
        </>
      )}

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* HEADER SECTION WITH ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 flex flex-col items-center"
        >
          {/* Instagram Badge */}
          <div 
            className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider mb-4 shadow-sm ${
              highContrast 
                ? "bg-yellow-400 text-black border border-black" 
                : "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white"
            }`}
          >
            <Instagram size={14} className="shrink-0" />
            <span>SOCIAL REAL {profileHandle}</span>
          </div>

          {/* Main Title */}
          <h3 className={`text-2xl md:text-4xl font-black uppercase tracking-tight mb-3 font-display ${
            highContrast ? "text-yellow-300" : "text-stone-900"
          }`}>
            Siga-nos no Instagram • {" "}
            <span className={highContrast ? "text-white underline decoration-yellow-400" : "text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 font-extrabold"}>
              {profileHandle}
            </span>
          </h3>

          {/* Subtitle / Description */}
          <p className={`text-sm md:text-base font-medium leading-relaxed max-w-lg ${
            highContrast ? "text-stone-200" : "text-stone-600"
          }`}>
            Acompanhe nossos bastidores, projetos reais instalados em Curitiba, stories diários e dicas exclusivas de decoração!
          </p>
        </motion.div>

        {/* EMBED SECTION WITH ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-[440px] mb-10"
        >
          <div 
            className={`rounded-3xl p-2.5 transition-all duration-300 hover:scale-[1.01] overflow-hidden border-2 ${
              highContrast 
                ? "bg-stone-950 border-white shadow-none" 
                : "bg-white border-stone-200/80 shadow-2xl shadow-stone-200/50 hover:shadow-3xl"
            }`}
          >
            {/* Responsiveness aspect-ratio for embed */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 flex items-center justify-center">
              {/* Subtle visual loading behind the iframe */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-stone-50 text-stone-400 text-xs">
                <Instagram size={36} className="animate-bounce text-pink-500" />
                <span>Carregando feed oficial...</span>
              </div>
              
              <iframe
                id="instagram-embed-iframe"
                src={`${profileUrl}embed`}
                className="absolute inset-0 w-full h-full border-0 rounded-2xl z-10"
                scrolling="no"
                allowFullScreen={false}
                frameBorder="0"
                loading="lazy"
                title="Instagram Feed @novaspersianas"
              />
            </div>
          </div>
        </motion.div>

        {/* CTA & TRUST BADGES WITH ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          {/* Main Instagram Follow Button */}
          <a
            id="follow-instagram-btn"
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] min-h-[44px] shadow-lg ${
              highContrast
                ? "bg-yellow-400 hover:bg-yellow-300 text-black border-2 border-black font-black"
                : "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:brightness-110"
            }`}
          >
            <Instagram size={16} className="shrink-0" />
            <span>Seguir no Instagram Oficial</span>
            <ArrowRight size={14} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Trust / Authority Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl border text-left max-w-xs transition-colors duration-300 ${
              highContrast
                ? "bg-stone-950 border-white text-white"
                : "bg-white border-stone-200 text-stone-700 shadow-md"
            }`}
          >
            <ShieldCheck size={20} className="text-emerald-500 shrink-0" />
            <div className="flex flex-col">
              <span className={`text-[9px] font-mono uppercase font-bold tracking-wider ${
                highContrast ? "text-yellow-400" : "text-emerald-600"
              }`}>
                Comunidade Verificada
              </span>
              <span className="text-[11px] font-extrabold text-stone-800 leading-tight">
                Nova's Persianas Curitiba
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
