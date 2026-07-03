import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { Phone, MessageSquare, Play, Pause, Volume2, VolumeX } from "lucide-react";

interface VideoSectionProps {
  activePage: string;
  highContrast: boolean;
}

export default function VideoSection({ activePage, highContrast }: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Helper function to resolve localized SEO title and semantic description based on route/page
  const getVideoSEOContent = (route: string) => {
    const clean = route.replace(/^\/|\/$/g, "");

    if (clean === "home" || clean === "") {
      return {
        title: "Vídeo Institucional da Nova's Persianas Curitiba | Showroom e Fábrica no Hauer",
        description: "Assista ao nosso vídeo oficial e veja os bastidores da fabricação própria de persianas sob medida em Curitiba. Mostramos em detalhe a alta qualidade das nossas cortinas rolô, romana, double vision, verticais e venezianas térmicas. Compre direto de fábrica com medição 100% gratuita no seu domicílio e as melhores facilidades de pagamento da região.",
        whatsAppMsg: "Olá! Assisti ao vídeo na página inicial e gostaria de solicitar um orçamento para persianas sob medida."
      };
    } else if (clean === "quem-somos" || clean === "sobre") {
      return {
        title: "Tradição, Tecnologia e Carinho: Nossa Oficina Própria no Bairro Hauer em Curitiba",
        description: "Conheça a história e a estrutura industrial por trás da loja de persianas mais recomendada de Curitiba. Nosso vídeo demonstra o rigoroso controle de costura de tecidos importados e a montagem de cabeçotes metálicos autolubrificantes. Veja o showroom de atendimento adaptado para todas as idades na Rua Frei Henrique de Coimbra, 1750.",
        whatsAppMsg: "Olá! Assisti ao vídeo na página Sobre Nós e gostaria de agendar uma visita com mostruários."
      };
    } else if (clean === "contato") {
      return {
        title: "Atendimento Humanizado Nova's Persianas: Agende Sua Medição Grátis no Seu Endereço",
        description: "Descubra como nossa equipe móvel realiza visitas técnicas com trenas a laser de forma rápida e silenciosa. Levamos mostruários completos de persianas e venezianas externas diretamente até o seu apartamento ou sobrado, cobrindo todos os bairros de Curitiba e cidades vizinhas, sem qualquer custo de deslocamento ou visita.",
        whatsAppMsg: "Olá! Assisti ao vídeo na página de Contato e gostaria de agendar uma visita técnica gratuita."
      };
    } else if (clean === "mapa-do-site") {
      return {
        title: "Mapa Completo de Nossos Serviços e Soluções Visuais em Vídeo Exclusivo",
        description: "Seja para rolô blackout no quarto, tela solar na varanda ou venezianas externas de alumínio duplo com preenchimento térmico, nosso vídeo resume a engenharia de proteção solar que desenvolvemos. Navegue estruturadamente por nossas linhas de produtos, reparos mecânicos rápidos e motorização inteligente com automação.",
        whatsAppMsg: "Olá! Assisti ao vídeo do Mapa do Site e gostaria de consultar as opções de persianas disponíveis."
      };
    } else if (clean === "404") {
      return {
        title: "Encontre a Solução Ideal: Vídeo Demonstrativo de Persianas e Cortinas",
        description: "Mesmo em uma página de erro, nosso compromisso em lhe entregar conforto acústico e privacidade permanece. Assista ao nosso vídeo de demonstração e conheça nossa ampla gama de persianas manuais e automáticas sob medida, além de nossos técnicos credenciados prontos para atendê-lo em Curitiba.",
        whatsAppMsg: "Olá! Acessei o site da Nova's e gostaria de falar com um especialista sobre persianas sob medida."
      };
    } else {
      // Decode route for precise customized title
      const decoded = clean.replace(/-/g, " ");
      const isVeneziana = clean.includes("veneziana");
      const isManutencao = clean.includes("manutencao") || clean.includes("conserto") || clean.includes("reparo") || clean.includes("higienizacao") || clean.includes("lavagem");
      const isAutomacao = clean.includes("automat") || clean.includes("motor");
      const isNeighborhood = clean.includes("hauer") || clean.includes("boqueirao") || clean.includes("portao") || clean.includes("agua-verde") || clean.includes("batel") || clean.includes("centro") || clean.includes("xaxim") || clean.includes("pinheirinho") || clean.includes("novo-mundo") || clean.includes("capao-raso") || clean.includes("uberaba") || clean.includes("reboucas") || clean.includes("jardim-das-americas") || clean.includes("santa-felicidade") || clean.includes("cic") || clean.includes("cabral") || clean.includes("bacacheri") || clean.includes("juveve") || clean.includes("merces") || clean.includes("cristo-rei") || clean.includes("alto-da-xv") || clean.includes("seminario") || clean.includes("prado-velho") || clean.includes("ahu") || clean.includes("jardim-botanico") || clean.includes("bigorrilho") || clean.includes("campina-do-siqueira") || clean.includes("bairro-alto") || clean.includes("cajuru") || clean.includes("pilarzinho") || clean.includes("vista-alegre") || clean.includes("bom-retiro");

      let neighborhoodName = "Curitiba";
      if (isNeighborhood) {
        if (clean.includes("jardim-das-americas")) neighborhoodName = "Jardim das Américas";
        else if (clean.includes("campina-do-siqueira")) neighborhoodName = "Campina do Siqueira";
        else if (clean.includes("alto-da-xv")) neighborhoodName = "Alto da XV";
        else if (clean.includes("bom-retiro")) neighborhoodName = "Bom Retiro";
        else if (clean.includes("jardim-botanico")) neighborhoodName = "Jardim Botânico";
        else if (clean.includes("prado-velho")) neighborhoodName = "Prado Velho";
        else if (clean.includes("vista-alegre")) neighborhoodName = "Vista Alegre";
        else if (clean.includes("santa-felicidade")) neighborhoodName = "Santa Felicidade";
        else if (clean.includes("novo-mundo")) neighborhoodName = "Novo Mundo";
        else if (clean.includes("capao-raso")) neighborhoodName = "Capão Raso";
        else if (clean.includes("agua-verde")) neighborhoodName = "Água Verde";
        else if (clean.includes("bairro-alto")) neighborhoodName = "Bairro Alto";
        else {
          const parts = clean.split("-");
          const word = parts[parts.length - 1];
          neighborhoodName = word.charAt(0).toUpperCase() + word.slice(1);
        }
      }

      const pageTitle = decoded.split(" ").map(w => w === "de" || w === "e" || w === "para" || w === "em" ? w : w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

      if (isVeneziana) {
        if (isManutencao || clean.includes("tecnico")) {
          return {
            title: `Vídeo Técnico de Conserto e Manutenção de Venezianas em Curitiba`,
            description: `Assista aos nossos técnicos licenciados executando o conserto e a manutenção preventiva de venezianas de rolar em Curitiba. Veja no vídeo como fazemos a troca da fita recolhedora desfiada de nylon, a substituição de molas de aço de parede e o alinhamento de lâminas de alumínio e PVC para garantir deslizamento suave sem ruídos.`,
            whatsAppMsg: `Olá! Assisti ao vídeo na página de ${pageTitle} e gostaria de agendar uma manutenção técnica de venezianas.`
          };
        } else if (isAutomacao) {
          return {
            title: `Vídeo Demonstrativo: Automatização de Venezianas de Rolar Externas`,
            description: `Confira o acionamento elétrico e inteligente de venezianas automáticas no vídeo demonstrativo da Nova's. Mostramos o retrofit de sistemas manuais pesados de fita para motores tubulares silenciosos com Wi-Fi de alta tecnologia e controle por voz pela Alexa. Oferecemos garantia estendida de 5 anos direto de fábrica.`,
            whatsAppMsg: `Olá! Assisti ao vídeo na página de ${pageTitle} e gostaria de solicitar um orçamento para automatizar venezianas.`
          };
        } else {
          return {
            title: `Vídeo de Instalação Técnica: Venezianas sob Medida em Alumínio Térmico`,
            description: `Veja em nosso vídeo o passo a passo da fabricação e instalação de venezianas externas de alumínio duplo injetadas com poliuretano expandido (RPU). Descubra como essa blindagem protege suas janelas de vidro contra tempestades de vento ou granizo em Curitiba, bloqueando o frio e reduzindo barulhos em até 25dB.`,
            whatsAppMsg: `Olá! Assisti ao vídeo na página de ${pageTitle} e gostaria de agendar uma medição sem custo para venezianas novas.`
          };
        }
      } else if (isManutencao) {
        return {
          title: `Vídeo de Assistência Técnica: Lavagem e Reforma de Persianas no Hauer`,
          description: `Assista e descubra por que somos a oficina técnica preferida de Curitiba. O vídeo apresenta nossos processos especializados de higienização ultrassônica de persianas rolô e romana, remoção profunda de ácaros e mofos alergênicos, consertos rápidos de comandos e substituição de tecidos e cordões antigos.`,
          whatsAppMsg: `Olá! Assisti ao vídeo na página de ${pageTitle} e preciso consertar/lavar minhas persianas.`
        };
      } else if (isAutomacao) {
        return {
          title: `Vídeo Exclusivo: Persianas Automáticas Motorizadas Integradas à Alexa`,
          description: `Veja a elegância de nossas persianas automáticas motorizadas sob medida em funcionamento real. O vídeo demonstra o controle via aplicativo móvel e comandos inteligentes por voz pela Alexa ou Google Home. Proteção solar moderna, design limpo, ausência de fios perigosos (child & pet safety) e máxima sofisticação.`,
          whatsAppMsg: `Olá! Assisti ao vídeo na página de ${pageTitle} e gostaria de conhecer as marcas de motorização de persianas.`
        };
      } else if (isNeighborhood) {
        return {
          title: `Vídeo de Atendimento Nova's Persianas no Bairro ${neighborhoodName}`,
          description: `Prezado morador do bairro ${neighborhoodName}, preparamos um vídeo explicativo com nossa consultoria presencial gratuita. Saiba como levamos mostruários completos em tamanho real e realizamos a medição milimétrica a laser no seu endereço em Curitiba, garantindo atendimento de alto padrão e preço direto da nossa fábrica do Hauer.`,
          whatsAppMsg: `Olá! Assisti ao vídeo focado no bairro ${neighborhoodName} e gostaria de agendar uma visita técnica gratuita.`
        };
      } else {
        return {
          title: `Vídeo Demonstrativo de ${pageTitle} sob Medida em Curitiba`,
          description: `Confira no vídeo a alta costura de nossas ${pageTitle} confeccionadas com maquinário industrial no Hauer. Demonstramos as texturas dos tecidos, a robustez dos componentes metálicos e a suavidade no recolhimento manual e automático. Adquira peças direto de fábrica com medição e orçamento gratuitos.`,
          whatsAppMsg: `Olá! Assisti ao vídeo na página de ${pageTitle} e gostaria de falar com um consultor.`
        };
      }
    }
  };

  const seoContent = getVideoSEOContent(activePage);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.error("Video play failed: ", err);
        });
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Contact links
  const whatsAppUrl = `https://api.whatsapp.com/send/?phone=5541995507310&text=${encodeURIComponent(seoContent.whatsAppMsg)}`;
  const phoneUrl = "tel:+554132788598";

  return (
    <section 
      id="video-apresentacao-premium" 
      className={`py-12 md:py-16 transition-colors duration-300 ${
        highContrast ? "bg-black border-y-4 border-white text-white" : "bg-stone-50/70 text-stone-800"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Decorative badge */}
        <div className="flex justify-center mb-4">
          <span className={`text-xs font-black tracking-widest uppercase px-3.5 py-1.5 rounded-full border ${
            highContrast 
              ? "bg-white text-black border-white" 
              : "bg-brand-blue/10 text-brand-blue border-brand-blue/20"
          }`}>
            🎥 Apresentação em Vídeo
          </span>
        </div>

        {/* Structured SEO Heading and Semantic description */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className={`text-2xl md:text-4xl font-black uppercase tracking-tight font-display mb-4 ${
            highContrast ? "text-yellow-300" : "text-stone-900"
          }`}>
            {seoContent.title}
          </h2>
          <p className={`text-sm md:text-base leading-relaxed ${
            highContrast ? "text-stone-200" : "text-stone-600 font-medium"
          }`}>
            {seoContent.description}
          </p>
        </div>

        {/* Premium Interactive Video Player and Controls Frame */}
        <div className="max-w-4xl mx-auto mb-10 relative">
          <div className={`relative overflow-hidden rounded-2xl md:rounded-3xl border-2 transition-all duration-300 shadow-xl group ${
            highContrast ? "border-white bg-stone-950" : "border-stone-200 bg-black"
          }`}>
            
            {/* HTML5 Video element */}
            <video
              ref={videoRef}
              src="https://img.novaspersianascuritiba.com.br/Novas-persianas-hauer-em-curitiba-parana.mp4"
              className="w-full h-auto aspect-video object-cover cursor-pointer"
              playsInline
              preload="metadata"
              onClick={togglePlay}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Custom Interactive Player Overlays */}
            <div className="absolute inset-0 bg-black/15 pointer-events-none group-hover:bg-black/25 transition-all duration-300" />

            {/* Center Play Button Overlay (Visible when paused) */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-200 scale-100 hover:scale-110 shadow-2xl cursor-pointer ${
                  highContrast 
                    ? "bg-yellow-400 text-black border-4 border-black" 
                    : "bg-brand-blue text-white hover:bg-brand-blue-hover border-4 border-white/25"
                }`}
                aria-label="Reproduzir Vídeo Institucional"
                id="video-play-overlay-btn"
              >
                <Play className="w-7 h-7 md:w-9 md:h-9 fill-current ml-1" />
              </button>
            )}

            {/* Micro Controls strip on bottom */}
            <div className={`absolute bottom-4 left-4 right-4 flex items-center justify-between p-2 rounded-xl backdrop-blur-md transition-opacity duration-300 opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 ${
              highContrast ? "bg-black/90 border border-white" : "bg-black/60 border border-white/10"
            }`}>
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-1.5 hover:bg-white/15 rounded-lg text-white transition-colors cursor-pointer"
                  title={isPlaying ? "Pausar" : "Reproduzir"}
                  id="video-play-strip-btn"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                </button>
                <span className="text-white text-xs font-bold tracking-wider font-mono">
                  {isPlaying ? "Executando..." : "Vídeo Carregado"}
                </span>
              </div>
              
              <button
                onClick={toggleMute}
                className="p-1.5 hover:bg-white/15 rounded-lg text-white transition-colors cursor-pointer"
                title={isMuted ? "Ativar som" : "Desativar som"}
                id="video-mute-strip-btn"
              >
                {isMuted ? <VolumeX className="w-5 h-5 text-red-400" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Premium Call to Action Area */}
        <div className={`p-6 md:p-8 rounded-2xl md:rounded-3xl border text-center transition-all duration-300 ${
          highContrast 
            ? "bg-stone-950 border-white shadow-none" 
            : "bg-white border-stone-200/60 shadow-md"
        }`}>
          <h3 className={`text-lg md:text-xl font-extrabold uppercase font-display tracking-tight mb-3 ${
            highContrast ? "text-yellow-300" : "text-stone-900"
          }`}>
            Solicite Sua Visita Sem Custo Diretamente da Fábrica
          </h3>
          <p className={`text-xs md:text-sm max-w-2xl mx-auto mb-6 ${
            highContrast ? "text-stone-300" : "text-stone-500 font-medium"
          }`}>
            Nossos consultores técnicos levam o Showroom com catálogos completos e trena laser no conforto do seu lar. Atendimento pontual de fábrica com garantia completa de instalação.
          </p>

          {/* Premium call buttons and accessibility actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            {/* WhatsApp Breathing Premium Button */}
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 w-full sm:w-auto shadow-lg hover:-translate-y-0.5 cursor-pointer select-none group ${
                highContrast
                  ? "bg-yellow-400 text-black border-2 border-black hover:bg-yellow-500"
                  : "bg-emerald-600 hover:bg-emerald-700 text-white"
              }`}
              id="video-whats-cta-btn"
            >
              {/* Pulse glow background effect */}
              {!highContrast && (
                <span className="absolute -inset-1 bg-emerald-500/20 rounded-xl blur animate-pulse group-hover:scale-105 transition-all duration-300" />
              )}
              <MessageSquare className="w-5 h-5 shrink-0" />
              <span>Chamar no WhatsApp</span>
            </a>

            {/* Dial Direct Button */}
            <a
              href={phoneUrl}
              className={`flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 w-full sm:w-auto shadow-md border-2 hover:-translate-y-0.5 cursor-pointer ${
                highContrast
                  ? "bg-black text-white border-white hover:bg-white/10"
                  : "bg-white text-stone-700 border-stone-250 hover:bg-stone-50/50 hover:text-brand-blue-hover"
              }`}
              id="video-phone-cta-btn"
            >
              <Phone className="w-5 h-5 shrink-0 text-brand-blue" />
              <span>Ligar (41) 3278-8598</span>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
