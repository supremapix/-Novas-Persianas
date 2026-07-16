/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  FolderOpen, 
  ExternalLink, 
  Camera, 
  Video, 
  Wrench, 
  Sparkles, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  Search, 
  CheckCircle, 
  Flame, 
  Layers, 
  Eye 
} from "lucide-react";

interface ServicosFeitosProps {
  highContrast: boolean;
}

interface CompletedJob {
  id: string;
  title: string;
  category: "instalacao" | "lavagem" | "reparo" | "automacao";
  categoryLabel: string;
  neighborhood: string;
  date: string;
  description: string;
  solution: string;
  imageUrl: string;
  hasVideo?: boolean;
  googleDriveShortcut?: boolean;
}

export default function ServicosFeitos({ highContrast }: ServicosFeitosProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedJob, setSelectedJob] = useState<CompletedJob | null>(null);

  const googleDriveLink = "https://drive.google.com/drive/folders/1KBzRRdXXYfGr1enBXQBsktZ6Edfc91V0?usp=sharing";

  // Curated, realistic list of completed projects matching their actual services in Curitiba
  const COMPLETED_JOBS: CompletedJob[] = [
    {
      id: "job1",
      title: "Instalação de Rolô Blackout Motorizada",
      category: "automacao",
      categoryLabel: "Automação & Instalação",
      neighborhood: "Batel",
      date: "Julho de 2026",
      description: "Instalação de 3 cortinas Rolô Blackout integradas no mesmo vão, equipadas com motor tubular silencioso controlado por comando de voz via Alexa e controle de canais separados.",
      solution: "Vedação lateral perfeita com guias de alumínio anodizado sob medida, reduzindo 100% de entrada de luz para o quarto de um casal idoso.",
      imageUrl: "https://www.facilpersianas.com.br/cdn/shop/files/Double_Vision_Plus_Preta_8_60046441-bed2-405d-a669-5271781f10e6.jpg?v=1751491915&width=600",
      hasVideo: true
    },
    {
      id: "job2",
      title: "Higienização e Lavagem com Remoção de Fungos",
      category: "lavagem",
      categoryLabel: "Higienização & Lavagem",
      neighborhood: "Mercês",
      date: "Junho de 2026",
      description: "Lavagem especializada de persianas romanas em tecido translúcido que estavam amareladas por ação do sol e poeira da rua.",
      solution: "Utilização de produtos de pH neutro e secagem natural vertical controlada, eliminando fungos e ácaros, deixando o tecido com toque suave e aroma limpo.",
      imageUrl: "https://img.novaspersianascuritiba.com.br/venezianas-novas.webp"
    },
    {
      id: "job3",
      title: "Conserto de Veneziana Externa Integrada de Enrolar",
      category: "reparo",
      categoryLabel: "Consertos & Manutenção",
      neighborhood: "Água Verde",
      date: "Julho de 2026",
      description: "Veneziana externa de rolar de alumínio estava travada pela metade devido a quebra da fita de nylon recolhedora e engripamento de ponteiras.",
      solution: "Troca completa do cordão de nylon de alta tração por modelo reforçado, lubrificação do eixo metálico com silicone náutico e troca das molas espirais de parede.",
      imageUrl: "https://img.novaspersianascuritiba.com.br/persianas-e-venezianas.webp"
    },
    {
      id: "job4",
      title: "Instalação de Persianas Double Vision com Bandô de Alumínio",
      category: "instalacao",
      categoryLabel: "Instalação sob Medida",
      neighborhood: "Cabral",
      date: "Junho de 2026",
      description: "Montagem de persianas Double Vision premium cor cinza linho com acabamento em bandô curvo de alumínio pintado no tom exato do teto de gesso.",
      solution: "Nivelamento a laser de precisão milimétrica, controle dinâmico de privacidade e entrada de sol para varanda gourmet integrada.",
      imageUrl: "https://img.novaspersianascuritiba.com.br/cortinas-e-persianas-novas.webp",
      hasVideo: true
    },
    {
      id: "job5",
      title: "Automatização de Veneziana de Madeira de Rolar",
      category: "automacao",
      categoryLabel: "Automação & Motores",
      neighborhood: "Santa Felicidade",
      date: "Maio de 2026",
      description: "Retrofit mecânico de uma veneziana externa clássica de madeira, cujo manuseio manual por corda pesava mais de 15kg.",
      solution: "Instalação de motor elétrico tubular italiano de 50Nm inserido dentro do eixo oco, sem quebrar nenhuma parede ou gesso do cliente.",
      imageUrl: "https://img.novaspersianascuritiba.com.br/veneziana-automatizada-em-curitiba-instalacao-de-automacao-veneziana.webp",
      hasVideo: true
    },
    {
      id: "job6",
      title: "Conserto Geral de Persiana Vertical de PVC",
      category: "reparo",
      categoryLabel: "Consertos & Manutenção",
      neighborhood: "Centro Cívico",
      date: "Julho de 2026",
      description: "Manutenção de persiana vertical em consultório médico que possuía lâminas desencaixadas e trilho travando no giro lateral.",
      solution: "Substituição de garras de tração quebradas, alinhamento dos carrinhos deslizantes internos e troca da corrente inferior de união.",
      imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEVK11qO7O-gzOMYuc3oVbM-Ka61OI8hST_PF0EaA2qOtfm5pSXpHxjCiDkFTYqDUntY5wC2RDVEAfw9RH_68T-hsqxtF5bT5IbMToRdq4uNIasmzm83e0ReNfaXaPqB7IDgU0Q=s680-w680-h510-rw"
    },
    {
      id: "job7",
      title: "Instalação de Persiana Horizontal de Madeira 50mm",
      category: "instalacao",
      categoryLabel: "Instalação sob Medida",
      neighborhood: "Ecoville",
      date: "Julho de 2026",
      description: "Montagem de 4 persianas horizontais de madeira natural tratada na cor mogno com fitas decorativas de algodão preto.",
      solution: "Aparafusamento seguro em alvenaria com buchas de expansão especiais para isolamento acústico, proporcionando altíssima robustez e beleza natural.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvWHx2idO3_ZjMtKAqP4mUSaQJ9yB69uCVIU9sA-iT7o6gv12-FK6DIuWI&s=10"
    },
    {
      id: "job8",
      title: "Instalação de Persiana Caixa Box em Dormitório",
      category: "instalacao",
      categoryLabel: "Instalação sob Medida",
      neighborhood: "Hauer",
      date: "Julho de 2026",
      description: "Montagem técnica de persiana rolô caixa em janela de dormitório infantil para obtenção de blackout total.",
      solution: "Montagem de perfis em 'U' laterais com acabamento de escovas vedadoras de vento e claridade, resultando em escurecimento absoluto de 100%.",
      imageUrl: "https://loja.persianascrisdan.com.br/arquivos/produtos/imagens_adicionais/webp/8bd069b3e34f4c5c4462ac923956c34b5b06dacb.jpeg.webp"
    },
    {
      id: "job9",
      title: "Automação Completa de Persianas Integradas",
      category: "automacao",
      categoryLabel: "Automação & Motores",
      neighborhood: "Jardim Social",
      date: "Julho de 2026",
      description: "Instalação de motores eletrônicos inteligentes e silenciosos em persianas de enrolar integradas de alto padrão, configurados para comando remoto.",
      solution: "Sincronização de controle multicanais e configuração de assistentes Alexa e Google Home para automação de cenários de iluminação personalizados.",
      imageUrl: "https://img.novaspersianascuritiba.com.br/persianas-automatica.webp",
      hasVideo: true
    }
  ];

  // Filters mapping
  const filters = [
    { value: "all", label: "Todos os Trabalhos" },
    { value: "instalacao", label: "Instalações" },
    { value: "lavagem", label: "Limpeza & Lavagem" },
    { value: "reparo", label: "Consertos & Reparos" },
    { value: "automacao", label: "Automatizações / Motores" }
  ];

  // Apply filter & search
  const filteredJobs = COMPLETED_JOBS.filter(job => {
    const matchesFilter = activeFilter === "all" || job.category === activeFilter;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      job.title.toLowerCase().includes(query) ||
      job.neighborhood.toLowerCase().includes(query) ||
      job.description.toLowerCase().includes(query) ||
      job.solution.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });

  return (
    <section 
      id="servicos-feitos" 
      className={`py-12 md:py-20 px-4 border-b ${
        highContrast ? "bg-black text-white border-white" : "bg-gradient-to-b from-slate-50 to-slate-100/50 text-slate-800"
      }`}
      aria-labelledby="portfolio-title"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 font-black px-4 py-1.5 rounded-full text-xs uppercase mb-3 border border-amber-500/20">
            <Camera className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Portfólio de Serviços Concluídos</span>
          </div>
          <h2 id="portfolio-title" className={`text-3xl md:text-5xl font-black mb-4 font-display tracking-tight leading-tight uppercase ${
            highContrast ? "text-yellow-300" : "text-slate-900"
          }`}>
            Nossos Serviços Feitos em Curitiba
          </h2>
          <p className={`text-base leading-relaxed ${highContrast ? "text-slate-200" : "text-slate-500 font-medium"}`}>
            Confira fotos reais e detalhes técnicos de instalações, reformas, lavagens e automatizações de persianas e venezianas que nossa equipe própria executou recentemente. Transparência e qualidade comprovadas!
          </p>
        </div>

        {/* 🌟 THE GOLDEN GOOGLE DRIVE BANNER (HIGH VISIBILITY OVERSIZED COMPONENT WITH DRIVE BRANDING) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`p-6 md:p-8 rounded-3xl mb-12 border-2 transition-all duration-300 shadow-xl overflow-hidden relative group ${
            highContrast 
              ? "bg-black border-yellow-400 text-white" 
              : "bg-gradient-to-r from-slate-900 via-zinc-900 to-slate-900 border-slate-800 text-white"
          }`}
        >
          {/* Subtle colorful background radial shapes matching Google Drive logo (Yellow, Green, Blue) */}
          {!highContrast && (
            <>
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -translate-y-12 translate-x-12" />
              <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none translate-y-12" />
              <div className="absolute top-1/2 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none -translate-x-12" />
            </>
          )}

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            
            {/* Drive Logo and description */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-5 text-center md:text-left max-w-3xl">
              <div className="shrink-0 p-4 bg-white/5 rounded-2xl border border-white/10 shadow-inner flex items-center justify-center">
                {/* Simulated Google Drive Icon - Triangle colored paths */}
                <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.7 15.5L16.2 47.5L34.7 79.5H71.7L90.2 47.5L71.7 15.5H34.7Z" fill="none" />
                  <path d="M16.2 47.5L34.7 15.5H71.7L53.2 47.5H16.2Z" fill="#FFC107" />
                  <path d="M34.7 79.5L16.2 47.5H53.2L71.7 79.5H34.7Z" fill="#4CAF50" />
                  <path d="M71.7 15.5L90.2 47.5L71.7 79.5H53.2L71.7 15.5Z" fill="#2196F3" />
                </svg>
              </div>

              <div>
                <span className={`text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded bg-yellow-400 text-black inline-block mb-2`}>
                  Fotos & Vídeos Reais
                </span>
                <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tight mb-2 ${
                  highContrast ? "text-yellow-300" : "text-white font-display"
                }`}>
                  Acesse Nossa Pasta Completa no Google Drive!
                </h3>
                <p className={`text-sm leading-relaxed ${highContrast ? "text-stone-200" : "text-stone-300 font-medium"}`}>
                  Deseja ver ainda mais mídias originais diretamente de nossos trabalhos em Curitiba? Disponibilizamos uma pasta pública e aberta com dezenas de vídeos explicativos, fotos detalhadas de mecanismos, tecidos instalados e asseio pós-instalação da nossa equipe.
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-xs font-bold text-slate-400 justify-center md:justify-start">
                  <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-amber-400" /> +80 Fotos Originais</span>
                  <span className="hidden md:inline">•</span>
                  <span className="flex items-center gap-1.5"><Video className="w-4 h-4 text-sky-400" /> Vídeos de Funcionamento</span>
                  <span className="hidden md:inline">•</span>
                  <span className="flex items-center gap-1.5"><Wrench className="w-4 h-4 text-emerald-400" /> Equipe Técnica Real</span>
                </div>
              </div>
            </div>

            {/* Glowing Big Button */}
            <div className="w-full lg:w-auto shrink-0">
              <a
                href={googleDriveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full lg:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-lg hover:-translate-y-0.5 cursor-pointer relative group/btn select-none ${
                  highContrast
                    ? "bg-yellow-400 text-black border-2 border-black hover:bg-yellow-500 font-black"
                    : "bg-emerald-600 hover:bg-emerald-700 text-white"
                }`}
                id="cta-drive-portfolio"
              >
                {!highContrast && (
                  <span className="absolute -inset-1 bg-emerald-500/20 rounded-xl blur animate-pulse group-hover/btn:scale-105 transition-all duration-300" />
                )}
                <FolderOpen className="w-5 h-5 shrink-0" />
                <span>Abrir Pasta do Google Drive</span>
                <ExternalLink className="w-4 h-4 shrink-0 opacity-80" />
              </a>
              <span className="block text-center text-[10px] text-stone-400 font-semibold mt-2 uppercase tracking-wider">
                Abre em nova janela com segurança
              </span>
            </div>

          </div>
        </motion.div>

        {/* INTERACTIVE FILTERS AND SEARCH COMPONENT */}
        <div className={`p-4 md:p-6 rounded-2xl mb-8 border flex flex-col md:flex-row gap-4 items-center justify-between ${
          highContrast ? "bg-black border-white" : "bg-white border-slate-200/60 shadow-sm"
        }`}>
          {/* Scrollable Filters Tabs */}
          <div className="flex gap-2 items-center overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {filters.map(filter => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 text-xs font-extrabold rounded-xl uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer min-h-[40px] flex items-center border ${
                  activeFilter === filter.value
                    ? highContrast
                      ? "bg-yellow-400 text-black border-black"
                      : "bg-brand-blue text-white border-brand-blue"
                    : highContrast
                      ? "bg-stone-900 text-slate-100 border-stone-800 hover:bg-stone-800"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-100 hover:border-slate-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Search bar focusing on neighborhood filter (Local trust) */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar por bairro (ex: Batel, Hauer)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs font-bold transition-all outline-none focus:ring-2 focus:ring-brand-blue/40 border ${
                highContrast 
                  ? "bg-black text-white border-white" 
                  : "bg-slate-50 text-slate-800 border-slate-200 focus:bg-white"
              }`}
              aria-label="Buscar serviços por bairro"
            />
          </div>
        </div>

        {/* RESULTS GRID CONTAINER */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
            {/* Dynamic cards */}
            <AnimatePresence mode="popLayout">
              {filteredJobs.map((job) => (
                <motion.article
                  key={job.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className={`rounded-2xl border flex flex-col justify-between overflow-hidden transition-all duration-300 relative group ${
                    highContrast
                      ? "bg-black border-white text-white"
                      : "bg-white border-slate-100 hover:border-brand-blue/20 shadow-sm hover:shadow-md hover:scale-[1.01]"
                  }`}
                  aria-label={`Trabalho concluído em ${job.neighborhood}: ${job.title}`}
                >
                  <div>
                    {/* Media preview area */}
                    <div className="relative h-48 bg-slate-100 overflow-hidden">
                      <img
                        src={job.imageUrl}
                        alt={`Foto do serviço realizado: ${job.title}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Interactive hover zoom-in cue */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="p-2.5 rounded-full bg-white/20 text-white backdrop-blur-md">
                          <Eye className="w-5 h-5" />
                        </span>
                      </div>

                      {/* Header tags overlay */}
                      <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 items-start">
                        {/* Category */}
                        <span className={`px-2.5 py-1 rounded text-[9px] tracking-wider uppercase font-black shadow-md ${
                          highContrast ? "bg-white text-black" : "bg-brand-blue text-white"
                        }`}>
                          {job.categoryLabel}
                        </span>
                      </div>

                      {/* Right-side overlays (Neighborhood / Video alert) */}
                      <div className="absolute top-2.5 right-2.5 flex flex-col gap-1.5 items-end">
                        <span className="bg-slate-900/85 text-slate-100 backdrop-blur-sm border border-slate-700/50 px-2.5 py-1 rounded text-[10px] font-bold shadow flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                          <span>{job.neighborhood}</span>
                        </span>
                      </div>

                      {/* Video tag indicator */}
                      {job.hasVideo && (
                        <div className="absolute bottom-2.5 right-2.5 bg-amber-500 text-slate-950 px-2.5 py-1 rounded text-[9px] font-black tracking-wider uppercase shadow-md flex items-center gap-1">
                          <Video className="w-3.5 h-3.5 shrink-0" />
                          <span>Vídeo</span>
                        </div>
                      )}
                    </div>

                    {/* Captions area */}
                    <div className="p-5">
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>Realizado em: {job.date}</span>
                      </div>
                      
                      <h3 className={`text-base font-extrabold tracking-tight mb-2 uppercase line-clamp-1 group-hover:text-brand-blue transition-colors ${
                        highContrast ? "text-yellow-300" : "text-slate-900"
                      }`}>
                        {job.title}
                      </h3>

                      <p className={`text-xs leading-relaxed mb-4 line-clamp-2 ${highContrast ? "text-slate-200" : "text-slate-500 font-medium"}`}>
                        {job.description}
                      </p>

                      <div className={`p-3 rounded-xl border flex flex-col gap-1 ${
                        highContrast ? "bg-stone-950 border-stone-800" : "bg-emerald-500/5 border-emerald-500/10"
                      }`}>
                        <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest block">Solução Aplicada:</span>
                        <p className={`text-[11px] leading-relaxed line-clamp-2 ${highContrast ? "text-stone-300" : "text-emerald-900/90 font-semibold"}`}>
                          ✔ {job.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card bottom direct actions */}
                  <div className="p-5 pt-0 mt-auto">
                    <button
                      onClick={() => setSelectedJob(job)}
                      className={`w-full py-2 bg-slate-50 hover:bg-slate-100 hover:text-brand-blue border border-slate-200 text-slate-700 text-xs font-black uppercase rounded-xl tracking-wider transition-all cursor-pointer min-h-[38px] flex items-center justify-center gap-1.5`}
                      aria-label={`Ver detalhes de ${job.title}`}
                    >
                      <span>Ver Detalhes</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>

          </div>
        ) : (
          /* Empty Search results state */
          <div className={`text-center py-16 rounded-2xl border ${
            highContrast ? "bg-black border-white" : "bg-white border-slate-200"
          }`}>
            <span className="text-4xl block mb-3">🔍</span>
            <h4 className="text-lg font-bold mb-1 uppercase">Nenhum serviço encontrado</h4>
            <p className="text-slate-400 text-xs font-semibold max-w-md mx-auto">
              Nenhum resultado corresponde à busca "{searchQuery}". Experimente buscar por bairros como "Batel", "Hauer" ou "Mercês", ou mude a categoria acima.
            </p>
            <button
              onClick={() => { setSearchQuery(""); setActiveFilter("all"); }}
              className="mt-4 px-4 py-2 bg-brand-blue text-white text-xs font-bold rounded-lg uppercase cursor-pointer"
            >
              Limpar Filtros
            </button>
          </div>
        )}

        {/* DETAILS MODAL BOX FOR SINGLE CARD DETAILED VIEW (SENIOR OPTIMIZED) */}
        {selectedJob && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div 
              className={`w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-slide-down ${
                highContrast ? "bg-black text-white border-2 border-white" : "bg-white text-slate-800"
              }`}
            >
              {/* Modal Banner Image */}
              <div className="relative h-60 bg-slate-100 overflow-hidden">
                <img
                  src={selectedJob.imageUrl}
                  alt={`Foto ampliada de ${selectedJob.title}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white cursor-pointer min-w-[36px] min-h-[36px] flex items-center justify-center"
                  aria-label="Fechar detalhes"
                >
                  ✕
                </button>
                
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="bg-slate-900/80 text-white backdrop-blur-sm border border-slate-700/50 px-3 py-1 rounded text-xs font-bold shadow flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Bairro: {selectedJob.neighborhood}</span>
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <span className="text-[10px] font-black text-brand-blue uppercase tracking-widest block mb-1">
                  Trabalho Concluído em Curitiba ({selectedJob.date})
                </span>
                
                <h3 id="modal-title" className={`text-xl md:text-2xl font-black uppercase mb-4 tracking-tight ${
                  highContrast ? "text-yellow-300" : "text-slate-900 font-display"
                }`}>
                  {selectedJob.title}
                </h3>

                <div className="space-y-4 text-sm font-medium leading-relaxed mb-6">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">O Desafio do Cliente:</h4>
                    <p className={highContrast ? "text-slate-200" : "text-slate-600"}>
                      {selectedJob.description}
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${
                    highContrast ? "bg-stone-950 border-stone-850" : "bg-emerald-500/5 border-emerald-500/10"
                  }`}>
                    <h4 className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-1.5 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>Solução Nova's Persianas Entregue:</span>
                    </h4>
                    <p className={`text-xs md:text-sm ${highContrast ? "text-slate-200" : "text-emerald-950 font-semibold"}`}>
                      {selectedJob.solution}
                    </p>
                  </div>
                </div>

                {/* Modal actions */}
                <div className="flex flex-col sm:flex-row gap-3 items-center justify-between pt-4 border-t border-slate-100">
                  <a
                    href={`https://api.whatsapp.com/send/?phone=5541995507310&text=${encodeURIComponent(
                      `Olá, vi o serviço concluído de "${selectedJob.title}" no bairro "${selectedJob.neighborhood}" e gostaria de agendar um orçamento similar para minha casa.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 shadow-md cursor-pointer min-h-[44px]`}
                  >
                    <span>Quero Orçamento Igual</span>
                  </a>

                  <div className="flex gap-2 w-full sm:w-auto">
                    <a
                      href={googleDriveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-extrabold uppercase rounded-xl border border-slate-200 cursor-pointer min-h-[44px]"
                    >
                      <FolderOpen className="w-4 h-4" />
                      <span>Ver Mais no Drive</span>
                    </a>
                    
                    <button
                      onClick={() => setSelectedJob(null)}
                      className="flex-1 sm:flex-initial px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-black uppercase rounded-xl cursor-pointer min-h-[44px]"
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
