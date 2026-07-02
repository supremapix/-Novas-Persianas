import React from "react";
import { motion } from "motion/react";
import { Star, CheckCircle, ExternalLink, ThumbsUp, MapPin } from "lucide-react";

interface GoogleReviewsProps {
  highContrast: boolean;
}

export default function GoogleReviews({ highContrast }: GoogleReviewsProps) {
  // Google Colors for Avatars
  const googleColors = [
    "bg-[#4285F4]", // Blue
    "bg-[#EA4335]", // Red
    "bg-[#FBBC05]", // Yellow
    "bg-[#34A853]"  // Green
  ];

  const reviews = [
    {
      id: 1,
      name: "Maria da Conceição",
      initial: "M",
      color: googleColors[0],
      stars: 5,
      time: "Há 3 dias",
      text: "Atendimento maravilhoso e de muito respeito! Vieram tirar a medida na minha casa e foram extremamente pacientes comigo, explicando tudo devagar. As persianas Double Vision ficaram perfeitas e fáceis de abrir. Nota 1000!",
      verified: true,
      likes: 12
    },
    {
      id: 2,
      name: "Afonso de Lara",
      initial: "A",
      color: googleColors[1],
      stars: 5,
      time: "Há 1 semana",
      text: "Instalação extremamente rápida e limpa no meu apartamento aqui no Portão. Comprei a persiana Rolô para o quarto e o bloqueio de luz é fantástico. Instaladores simpáticos e deixaram tudo aspirado.",
      verified: true,
      likes: 8
    },
    {
      id: 3,
      name: "Carlos Eduardo Mendes",
      initial: "C",
      color: googleColors[2],
      stars: 5,
      time: "Há 2 semanas",
      text: "Excelente pós-venda. Tive uma dúvida na regulagem e no mesmo dia mandaram um técnico para ajustar de cortesia. Muito atenciosos com a minha mãe idosa, o atendimento para idosos é de fato diferenciado.",
      verified: true,
      likes: 5
    },
    {
      id: 4,
      name: "Tereza de Souza",
      initial: "T",
      color: googleColors[3],
      stars: 5,
      time: "Há 3 semanas",
      text: "Fiz a lavagem e reforma de duas persianas antigas que eu tinha e ficaram novinhas! O serviço de higienização é impecável, tirou todas as manchas e o cheiro de guardado. Preço justo e honestidade.",
      verified: true,
      likes: 9
    },
    {
      id: 5,
      name: "Geraldo Silveira",
      initial: "G",
      color: googleColors[0],
      stars: 5,
      time: "Há 1 mês",
      text: "Comprei persianas motorizadas para a sala. Agora minha esposa consegue controlar tudo pelo controle remoto sem precisar fazer esforço físico. Trabalho de alto nível, recomendo sem medo.",
      verified: true,
      likes: 14
    },
    {
      id: 6,
      name: "Rosana Portela",
      initial: "R",
      color: googleColors[1],
      stars: 5,
      time: "Há 1 mês",
      text: "Tudo feito sob medida com muita precisão e entrega dentro do prazo combinado. O atendimento do consultor pelo WhatsApp foi excelente e me ajudou a escolher a cor perfeita para combinar com os móveis.",
      verified: true,
      likes: 7
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
          <div className="inline-flex items-center gap-1 bg-[#4285F4]/10 text-[#4285F4] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-3">
            <span className="text-[#EA4335]">G</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#34A853]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
            <span className="ml-1 text-stone-600 font-bold font-sans">Maps Review</span>
          </div>

          <h2 
            id="reviews-heading" 
            className={`text-2xl md:text-4xl font-black uppercase font-display tracking-tight mb-4 ${
              highContrast ? "text-yellow-300" : "text-stone-900"
            }`}
          >
            Opinião de Quem Confia em Nosso Trabalho
          </h2>

          {/* GMaps Rating Badge */}
          <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-center gap-4 ${
            highContrast ? "bg-stone-950 border-white text-white" : "bg-white border-stone-200/80 shadow-md"
          }`}>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black text-stone-900 font-display">4.9</span>
              <div className="flex flex-col items-start leading-none">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>
                <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider mt-1">
                  Nota no Google Maps
                </span>
              </div>
            </div>
            <div className="hidden sm:block w-[1px] h-8 bg-stone-200" />
            <span className="text-xs font-semibold text-stone-500">
              Mais de <strong className="text-stone-800 font-black">180+ avaliações reais</strong> de clientes de Curitiba e região!
            </span>
          </div>
        </div>

        {/* REVIEWS GRID WITH BOTTOM-TO-TOP ANIMATIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className={`p-5 rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${
                highContrast 
                  ? "bg-stone-950 border-white text-white shadow-none" 
                  : "bg-white border-stone-150 shadow-md hover:shadow-xl hover:border-stone-200"
              }`}
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-start justify-between gap-2.5 mb-4">
                  <div className="flex items-center gap-3">
                    {/* Standard First Letter Avatar with Google Palette */}
                    <div 
                      className={`w-11 h-11 rounded-full ${review.color} text-white font-black text-lg flex items-center justify-center shrink-0 shadow-sm`}
                      aria-hidden="true"
                    >
                      {review.initial}
                    </div>

                    <div className="flex flex-col leading-tight">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`text-sm font-black font-sans uppercase tracking-tight ${
                          highContrast ? "text-yellow-300" : "text-stone-900"
                        }`}>
                          {review.name}
                        </span>
                        
                        {/* Google Logo Image next to name as requested */}
                        <img 
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs8zh7UANfJplGXGabzqebHplfewEdleJPEvx4WCMauw&s=10" 
                          alt="Google Verified" 
                          className="w-3.5 h-3.5 shrink-0 object-contain rounded-full"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      
                      <div className="flex items-center gap-1 mt-0.5">
                        <span className="text-[10px] text-stone-400 font-bold">{review.time}</span>
                        <span className="text-stone-300 text-[10px]">•</span>
                        <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-wider flex items-center gap-0.5">
                          <CheckCircle size={8} className="fill-current text-emerald-500" />
                          Verificado
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex text-amber-400 mb-3" aria-label="Avaliação: 5 estrelas">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={15} className="fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className={`text-sm leading-relaxed mb-4 ${
                  highContrast ? "text-stone-200" : "text-stone-600 font-medium"
                }`}>
                  "{review.text}"
                </p>
              </div>

              {/* Review Footer actions (like helpful tag) */}
              <div className="flex items-center justify-between pt-3 border-t border-stone-100/60 text-xs">
                <span className="text-stone-400 flex items-center gap-1 font-semibold">
                  <ThumbsUp size={12} className="text-stone-400" />
                  Gostou? ({review.likes})
                </span>
                
                <span className="text-[10px] text-stone-400 uppercase tracking-wider font-mono flex items-center gap-0.5">
                  <MapPin size={10} className="text-red-500" /> Curitiba, PR
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CALL TO ACTION FOR GOOGLE REVIEWS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <a
            href="https://share.google/UZ4TJH0aoxwaonagc"
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] min-h-[44px] shadow-md ${
              highContrast
                ? "bg-yellow-400 text-black border-2 border-black font-black"
                : "bg-white text-stone-800 border border-stone-200 hover:bg-stone-50"
            }`}
          >
            <Star size={14} className="text-amber-500 fill-amber-500" />
            <span>Deixar Minha Avaliação</span>
          </a>

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
            <span>Ver Todas no Google Maps</span>
            <ExternalLink size={13} className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
