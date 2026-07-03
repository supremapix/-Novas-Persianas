import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowLeft, Send, CheckCircle } from "lucide-react";

interface ContatoPageProps {
  highContrast: boolean;
  onNavigateHome: () => void;
}

export default function ContatoPage({ highContrast, onNavigateHome }: ContatoPageProps) {
  // Form States
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    interesse: "Double Vision",
    mensagem: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const productOptions = [
    "Double Vision",
    "Persiana Rolô",
    "Persiana Romana",
    "Persiana Vertical",
    "Persiana Horizontal",
    "Motorização de Persianas",
    "Higienização e Lavagem",
    "Consertos e Reformas"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const getWhatsAppSubmitLink = () => {
    const text = `Olá! Enviei uma mensagem pelo formulário de contato:\n\n*Nome:* ${formData.nome}\n*Telefone:* ${formData.telefone}\n*E-mail:* ${formData.email}\n*Interesse:* ${formData.interesse}\n*Mensagem:* ${formData.mensagem}`;
    return `https://api.whatsapp.com/send/?phone=5541995507310&text=${encodeURIComponent(text)}`;
  };

  return (
    <div className={`pt-8 pb-16 transition-colors duration-300 ${
      highContrast ? "bg-black text-white" : "bg-stone-50/50 text-stone-800"
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumb & Back button */}
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

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className={`text-xs font-extrabold tracking-widest uppercase px-3 py-1 rounded-full ${
            highContrast ? "bg-yellow-400 text-black font-black" : "bg-brand-blue/10 text-brand-blue"
          }`}>
            Canais de Atendimento
          </span>
          <h1 className={`text-3xl md:text-5xl font-black uppercase font-display tracking-tight mt-3 mb-4 ${
            highContrast ? "text-yellow-300" : "text-stone-900"
          }`}>
            Fale Conosco • Nova's Persianas
          </h1>
          <p className={`text-sm md:text-base ${
            highContrast ? "text-stone-200" : "text-stone-500 font-medium"
          }`}>
            Tire suas dúvidas, solicite visitas de medição ou peça um orçamento sem compromisso. Nossa equipe está à sua disposição.
          </p>
        </div>

        {/* TWO COLUMN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT COLUMN: CONTACT DETAILS & MAP */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Contacts Info Box */}
            <div className={`p-6 rounded-2xl border ${
              highContrast 
                ? "bg-stone-950 border-white text-white" 
                : "bg-white border-stone-150 shadow-md"
            }`}>
              <h2 className={`text-lg font-black uppercase tracking-tight mb-5 pb-2 border-b ${
                highContrast ? "text-yellow-300 border-white" : "text-stone-900 border-stone-100"
              }`}>
                Nossos Contatos
              </h2>
              
              <div className="flex flex-col gap-5">
                {/* Telefone Fixo (Destaque) */}
                <a 
                  href="tel:+554132788598" 
                  className={`flex items-start gap-4 p-3 rounded-xl hover:scale-[1.01] transition-all bg-brand-blue/10 border border-brand-blue/30 ${
                    highContrast ? "hover:bg-stone-900" : "hover:bg-brand-blue/5"
                  }`}
                >
                  <div className={`p-2.5 rounded-xl ${
                    highContrast ? "bg-yellow-400 text-black" : "bg-brand-blue text-white"
                  }`}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-brand-blue font-black uppercase tracking-wider">Telefone Fixo</span>
                    <span className="text-lg font-black text-slate-950 dark:text-white">(41) 3278-8598</span>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href="tel:+5541995507310" 
                  className={`flex items-start gap-4 p-2 rounded-lg hover:scale-[1.01] transition-transform ${
                    highContrast ? "hover:bg-stone-900" : "hover:bg-stone-50"
                  }`}
                >
                  <div className={`p-2.5 rounded-xl ${
                    highContrast ? "bg-yellow-400 text-black" : "bg-brand-blue/10 text-brand-blue"
                  }`}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-stone-400 font-semibold uppercase">Telefone Principal</span>
                    <span className="text-base font-bold">(41) 99550-7310</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://api.whatsapp.com/send/?phone=5541995507310&text=Ol%C3%A1%2C%20achei%20seu%20site%20no%20%2AGoogle%2A%20e%20%2Agostaria%20de%3A%2A" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-start gap-4 p-2 rounded-lg hover:scale-[1.01] transition-transform ${
                    highContrast ? "hover:bg-stone-900" : "hover:bg-stone-50"
                  }`}
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-stone-400 font-semibold uppercase">WhatsApp Consultores</span>
                    <span className="text-base font-bold">(41) 99550-7310</span>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href="mailto:contato@novaspersianascuritiba.com.br" 
                  className={`flex items-start gap-4 p-2 rounded-lg hover:scale-[1.01] transition-transform ${
                    highContrast ? "hover:bg-stone-900" : "hover:bg-stone-50"
                  }`}
                >
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-500">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-stone-400 font-semibold uppercase">E-mail Comercial</span>
                    <span className="text-sm font-bold truncate block max-w-[240px] sm:max-w-none">
                      contato@novaspersianascuritiba.com.br
                    </span>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-2">
                  <div className="p-2.5 rounded-xl bg-red-500/10 text-red-500">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-stone-400 font-semibold uppercase">Loja Física / Sede</span>
                    <span className="text-sm font-bold leading-snug">
                      R. Frei Henrique de Coimbra, 1750 - Hauer, Curitiba - PR
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-2">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-stone-400 font-semibold uppercase">Horário de Atendimento</span>
                    <span className="text-sm font-bold leading-snug">
                      Segunda a Sexta: 8h às 18h<br />Sábado: 9h às 13h
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Google Maps Iframe */}
            <div className={`rounded-2xl overflow-hidden border p-1 ${
              highContrast ? "bg-stone-950 border-white" : "bg-white border-stone-150 shadow-md"
            }`}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.5936496464673!2d-49.2562215!3d-25.4852924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcf19356da3df7%3A0x6437648f5ee027bf!2sR.%20Frei%20Henrique%20de%20Coimbra%2C%201750%20-%20Hauer%2C%20Curitiba%20-%20PR%2C%2081630-140!5e0!3m2!1spt-BR!2sbr!4v1719999000000!5m2!1spt-BR!2sbr"
                className="w-full h-64 border-0 rounded-xl"
                allowFullScreen={false} 
                loading="lazy" 
                title="Localização física no Google Maps"
              />
            </div>

          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl border h-full flex flex-col justify-center ${
              highContrast 
                ? "bg-stone-950 border-white text-white" 
                : "bg-white border-stone-150 shadow-lg"
            }`}>
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className={`text-xl font-black uppercase tracking-tight mb-2 pb-2 border-b ${
                      highContrast ? "text-yellow-300 border-white" : "text-stone-900 border-stone-100"
                    }`}>
                      Envie uma Mensagem
                    </h2>

                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="nome" className="text-xs font-bold uppercase tracking-wider text-stone-400">
                        Seu Nome Completo
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleInputChange}
                        placeholder="Ex: João Silva da Rocha"
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold transition-colors focus:outline-none focus:ring-2 ${
                          highContrast
                            ? "bg-black text-white border-white focus:ring-yellow-400"
                            : "bg-stone-50 border-stone-200 text-stone-800 focus:ring-brand-blue"
                        }`}
                      />
                    </div>

                    {/* Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="telefone" className="text-xs font-bold uppercase tracking-wider text-stone-400">
                          Seu Telefone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          id="telefone"
                          name="telefone"
                          required
                          value={formData.telefone}
                          onChange={handleInputChange}
                          placeholder="Ex: (41) 99999-9999"
                          className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold transition-colors focus:outline-none focus:ring-2 ${
                            highContrast
                              ? "bg-black text-white border-white focus:ring-yellow-400"
                              : "bg-stone-50 border-stone-200 text-stone-800 focus:ring-brand-blue"
                          }`}
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-stone-400">
                          Seu E-mail
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Ex: joao.silva@email.com"
                          className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold transition-colors focus:outline-none focus:ring-2 ${
                            highContrast
                              ? "bg-black text-white border-white focus:ring-yellow-400"
                              : "bg-stone-50 border-stone-200 text-stone-800 focus:ring-brand-blue"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Interest Dropdown */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="interesse" className="text-xs font-bold uppercase tracking-wider text-stone-400">
                        Produto ou Serviço de Interesse
                      </label>
                      <select
                        id="interesse"
                        name="interesse"
                        value={formData.interesse}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold transition-colors focus:outline-none focus:ring-2 cursor-pointer ${
                          highContrast
                            ? "bg-black text-white border-white focus:ring-yellow-400"
                            : "bg-stone-50 border-stone-200 text-stone-800 focus:ring-brand-blue"
                        }`}
                      >
                        {productOptions.map(option => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="mensagem" className="text-xs font-bold uppercase tracking-wider text-stone-400">
                        Sua Mensagem / Dúvida
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        required
                        rows={4}
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        placeholder="Escreva brevemente o que você precisa..."
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold transition-colors focus:outline-none focus:ring-2 resize-none ${
                          highContrast
                            ? "bg-black text-white border-white focus:ring-yellow-400"
                            : "bg-stone-50 border-stone-200 text-stone-800 focus:ring-brand-blue"
                        }`}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3.5 px-4 rounded-xl font-extrabold text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer min-h-[44px] ${
                        highContrast
                          ? "bg-yellow-400 text-black border border-black hover:bg-yellow-300 disabled:opacity-50"
                          : "bg-brand-blue hover:bg-brand-blue-hover text-white disabled:opacity-50"
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={14} />
                          <span>Enviar Mensagem</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-card"
                    className="flex flex-col items-center justify-center text-center p-6 gap-5"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <CheckCircle size={64} className="text-emerald-500 shrink-0" />
                    <div>
                      <h2 className={`text-2xl font-black uppercase tracking-tight mb-2 ${
                        highContrast ? "text-yellow-300" : "text-stone-900"
                      }`}>
                        Mensagem Enviada!
                      </h2>
                      <p className={`text-sm leading-relaxed max-w-sm ${
                        highContrast ? "text-stone-200" : "text-stone-500 font-semibold"
                      }`}>
                        Obrigado, {formData.nome}! Suas informações foram recebidas com sucesso e um consultor entrará em contato em breve.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 w-full mt-4">
                      {/* Submit directly to WhatsApp option for speed */}
                      <a
                        href={getWhatsAppSubmitLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs tracking-widest uppercase rounded-xl flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all min-h-[44px]"
                      >
                        <MessageSquare size={16} />
                        <span>Acelerar Atendimento via WhatsApp</span>
                      </a>

                      <button
                        onClick={() => {
                          setIsSuccess(false);
                          setFormData({ nome: "", telefone: "", email: "", interesse: "Double Vision", mensagem: "" });
                        }}
                        className={`w-full py-3.5 px-4 border text-xs font-bold tracking-widest uppercase rounded-xl transition-all cursor-pointer min-h-[44px] ${
                          highContrast
                            ? "bg-black text-white border-white hover:bg-stone-900"
                            : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50"
                        }`}
                      >
                        Enviar Novo Formulário
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
