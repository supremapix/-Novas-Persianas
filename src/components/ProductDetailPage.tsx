import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Sparkles, 
  MessageSquare, 
  CheckCircle, 
  Info, 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  Ruler, 
  Phone, 
  ArrowLeft,
  Share2
} from "lucide-react";
import { PRODUCTS } from "../data";
import { Helmet } from "react-helmet-async";

interface ProductDetailPageProps {
  highContrast: boolean;
  slug: string;
  onNavigateHome: () => void;
  setActivePage: (page: string) => void;
}

export default function ProductDetailPage({ 
  highContrast, 
  slug, 
  onNavigateHome, 
  setActivePage 
}: ProductDetailPageProps) {
  // Find product by slug
  const product = PRODUCTS.find(p => p.slug === slug);

  // Form State
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    mensagem: `Gostaria de solicitar um orçamento para o produto ${product?.name || ""}.`
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
        <button 
          onClick={onNavigateHome}
          className="px-6 py-3 bg-brand-blue text-white rounded-xl font-bold"
        >
          Voltar para Home
        </button>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Pre-fill WhatsApp URL
  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Olá! Estava navegando na página da *${product.name}* no seu site e gostaria de um orçamento personalizado!\n\n` +
      `*Meus Dados:*\n` +
      `• Nome: ${formData.nome || "Não informado"}\n` +
      `• Contato: ${formData.telefone || "Não informado"}\n` +
      `• Dúvida/Pedido: ${formData.mensagem}`
    );
    return `https://api.whatsapp.com/send/?phone=5541995507310&text=${text}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Direct redirect to WhatsApp on form submit
    setTimeout(() => {
      window.open(getWhatsAppLink(), "_blank");
    }, 800);
  };

  const handleShare = () => {
    const shareUrl = window.location.href;
    const shareTitle = `${product.name} sob Medida em Curitiba - Nova's Persianas`;
    
    if (navigator.share) {
      navigator.share({
        title: shareTitle,
        text: `Confira este produto no site da Nova's Persianas: ${product.name}`,
        url: shareUrl
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      });
    }
  };

  return (
    <div className={`pt-6 pb-20 transition-colors duration-300 ${
      highContrast ? "bg-black text-white" : "bg-stone-50 text-stone-800"
    }`}>
      {/* Dynamic SEO Meta Tags via React Helmet */}
      <Helmet>
        <title>{`${product.name} sob Medida em Curitiba | Nova's Persianas`}</title>
        <meta name="description" content={`${product.description} Fabricação sob medida com materiais premium, instalação garantida de 1 ano e orçamento grátis sem compromisso em Curitiba e Região.`} />
        <meta property="og:title" content={`${product.name} sob Medida em Curitiba | Nova's Persianas`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta property="og:type" content="product" />
        <link rel="canonical" href={`https://novaspersianascuritiba.com.br/${product.slug}`} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
          <button onClick={onNavigateHome} className="hover:text-brand-blue transition-colors cursor-pointer">
            Início
          </button>
          <span>/</span>
          <button 
            onClick={() => {
              setActivePage("home");
              setTimeout(() => {
                const section = document.getElementById("modelos");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }} 
            className="hover:text-brand-blue transition-colors cursor-pointer"
          >
            Produtos
          </button>
          <span>/</span>
          <span className={highContrast ? "text-yellow-400" : "text-stone-700"}>
            {product.name}
          </span>
        </div>

        {/* Action Header */}
        <div className="mb-8 flex flex-wrap justify-between items-center gap-4">
          <button
            onClick={onNavigateHome}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
              highContrast
                ? "bg-yellow-400 text-black border-2 border-black"
                : "bg-white text-stone-700 hover:text-brand-blue shadow-md border border-stone-200/60 hover:scale-105"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para Home</span>
          </button>

          <button
            onClick={handleShare}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
              highContrast
                ? "bg-yellow-400 text-black border-2 border-black"
                : "bg-white text-stone-700 hover:text-brand-blue shadow-md border border-stone-200/60 hover:scale-105"
            }`}
          >
            <Share2 className="w-4 h-4" />
            <span>{copiedLink ? "Link Copiado!" : "Compartilhar"}</span>
          </button>
        </div>

        {/* Product Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Image & Key Highlights (Lg Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className={`relative rounded-3xl overflow-hidden border shadow-xl ${
              highContrast ? "border-white" : "border-stone-250/60"
            }`}>
              <img 
                src={product.image} 
                alt={`${product.name} instalada sob medida pela Nova's Persianas`} 
                className="w-full object-cover aspect-[4/3] sm:aspect-video lg:aspect-square"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-emerald-600 text-white font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Sob Medida</span>
                </span>
              </div>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-3">
              <div className={`p-4 rounded-2xl text-center border ${
                highContrast ? "bg-stone-950 border-white" : "bg-white border-stone-200/60 shadow-md"
              }`}>
                <Clock className="w-5 h-5 mx-auto mb-1 text-brand-blue" />
                <span className="block text-[10px] font-black uppercase text-slate-400">Instalação</span>
                <span className="text-xs font-extrabold text-stone-700">Rápida</span>
              </div>

              <div className={`p-4 rounded-2xl text-center border ${
                highContrast ? "bg-stone-950 border-white" : "bg-white border-stone-200/60 shadow-md"
              }`}>
                <Ruler className="w-5 h-5 mx-auto mb-1 text-brand-blue" />
                <span className="block text-[10px] font-black uppercase text-slate-400">Medição</span>
                <span className="text-xs font-extrabold text-stone-700">Grátis</span>
              </div>

              <div className={`p-4 rounded-2xl text-center border ${
                highContrast ? "bg-stone-950 border-white" : "bg-white border-stone-200/60 shadow-md"
              }`}>
                <ShieldCheck className="w-5 h-5 mx-auto mb-1 text-brand-blue" />
                <span className="block text-[10px] font-black uppercase text-slate-400">Garantia</span>
                <span className="text-xs font-extrabold text-stone-700">1 Ano</span>
              </div>
            </div>
          </div>

          {/* RIGHT: High Converting Info, Details & Lead Form (Lg Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-3 ${
                highContrast ? "bg-yellow-400 text-black" : "bg-brand-blue/10 text-brand-blue border border-brand-blue/20"
              }`}>
                <Sparkles className="w-3 h-3" />
                <span>Modelo Exclusivo</span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight mb-4 font-display">
                {product.name}
              </h1>
              
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed font-medium mb-6">
                {product.description}
              </p>
            </div>

            {/* Rich semantic details tabs */}
            <div className="flex flex-col gap-6">
              {/* Long description text block */}
              {product.longDescription && (
                <div className={`p-6 sm:p-8 rounded-2xl border ${
                  highContrast ? "bg-stone-950 border-white" : "bg-white border-stone-200/60 shadow-md"
                }`}>
                  <h3 className="text-sm font-black uppercase tracking-wider text-brand-blue mb-3 flex items-center gap-1.5">
                    <Info className="w-4 h-4" />
                    <span>Detalhes do Produto</span>
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed font-medium">
                    {product.longDescription}
                  </p>
                </div>
              )}

              {/* Specifications and Ideal For side-by-side or stacked */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Specifications */}
                {product.specifications && product.specifications.length > 0 && (
                  <div className={`p-6 rounded-2xl border ${
                    highContrast ? "bg-stone-950 border-white" : "bg-white border-stone-200/60 shadow-md"
                  }`}>
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4">
                      Ficha Técnica
                    </h3>
                    <ul className="flex flex-col gap-2.5 text-xs">
                      {product.specifications.map((spec, i) => (
                        <li key={i} className="flex gap-2 items-start text-stone-600">
                          <CheckCircle className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                          <span className="font-medium">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Ideal For */}
                {product.idealFor && product.idealFor.length > 0 && (
                  <div className={`p-6 rounded-2xl border ${
                    highContrast ? "bg-stone-950 border-white" : "bg-white border-stone-200/60 shadow-md"
                  }`}>
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4">
                      Ambientes Recomendados
                    </h3>
                    <ul className="flex flex-col gap-2.5 text-xs">
                      {product.idealFor.map((ideal, i) => (
                        <li key={i} className="flex gap-2 items-start text-stone-600">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="font-medium">{ideal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* High Conversion Lead Capture Section */}
            <div className={`p-6 sm:p-8 rounded-3xl border-2 ${
              highContrast 
                ? "bg-black border-yellow-400" 
                : "bg-slate-950 text-white border-brand-blue/30 shadow-2xl relative overflow-hidden"
            }`}>
              {/* Premium Background ambient glow decoration */}
              {!highContrast && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-blue/10 to-transparent blur-3xl rounded-full pointer-events-none" />
              )}

              <div className="relative z-10">
                <div className="mb-6">
                  <span className="text-xs font-black uppercase tracking-widest text-brand-blue">
                    Orçamento Grátis e sem Compromisso
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight mt-1 mb-2 font-display">
                    Gostou deste modelo? Peça já sua cotação!
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    Preencha os campos abaixo para iniciar seu atendimento prioritário via WhatsApp ou telefone. Medição gratuita inclusa em Curitiba!
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-6 bg-emerald-950/40 border border-emerald-500/50 rounded-2xl text-center">
                    <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-3 animate-pulse" />
                    <h4 className="text-lg font-bold text-emerald-400 mb-1">Solicitação Iniciada!</h4>
                    <p className="text-xs text-slate-300 max-w-sm mx-auto">
                      Estamos redirecionando você para o WhatsApp de nosso especialista técnico para finalizar seu orçamento personalizado.
                    </p>
                    <a 
                      href={getWhatsAppLink()} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-black tracking-wider uppercase transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Ir para WhatsApp Manualmente</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Nome */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="form-nome" className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                          Seu Nome *
                        </label>
                        <input 
                          type="text"
                          id="form-nome"
                          name="nome"
                          required
                          value={formData.nome}
                          onChange={handleInputChange}
                          placeholder="Ex: João Silva"
                          className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:border-brand-blue focus:outline-none transition-colors text-white placeholder-slate-500"
                        />
                      </div>

                      {/* Telefone */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="form-telefone" className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                          Seu Telefone / WhatsApp *
                        </label>
                        <input 
                          type="tel"
                          id="form-telefone"
                          name="telefone"
                          required
                          value={formData.telefone}
                          onChange={handleInputChange}
                          placeholder="Ex: (41) 99550-7310"
                          className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:border-brand-blue focus:outline-none transition-colors text-white placeholder-slate-500"
                        />
                      </div>
                    </div>

                    {/* Mensagem */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-mensagem" className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                        Sua Mensagem ou Medidas (Opcional)
                      </label>
                      <textarea 
                        id="form-mensagem"
                        name="mensagem"
                        rows={3}
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        placeholder="Ex: Gostaria de cobrir duas janelas de 1,5m x 1,8m..."
                        className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:border-brand-blue focus:outline-none transition-colors text-white placeholder-slate-500 resize-none"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between mt-2 pt-2 border-t border-slate-800/60">
                      {/* Call direct button */}
                      <a 
                        href="tel:+5541995507310"
                        className="flex items-center justify-center gap-1.5 text-xs text-slate-300 font-bold hover:text-amber-400 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Prefere ligar? (41) 99550-7310</span>
                      </a>

                      <button
                        type="submit"
                        className={`px-6 py-4.5 rounded-xl font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer ${
                          highContrast
                            ? "bg-yellow-400 text-black border-2 border-black"
                            : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/20"
                        }`}
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Falar com Especialista</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
