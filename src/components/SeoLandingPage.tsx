import React from "react";
import { motion } from "motion/react";
import { Sparkles, CheckCircle2, Ruler, Phone, MessageSquare, MapPin, ShieldCheck, Heart, Star, ChevronDown, Award } from "lucide-react";
import { PRODUCTS, SERVICES } from "../data";

interface SeoLandingPageProps {
  highContrast: boolean;
  route: string;
  onNavigateHome: () => void;
  setActivePage: (page: "home" | "quem-somos" | "contato" | string) => void;
}

export default function SeoLandingPage({ highContrast, route, onNavigateHome, setActivePage }: SeoLandingPageProps) {
  // Determine page metadata based on route
  const getPageData = () => {
    switch (route) {
      case "persianas-curitiba":
        return {
          title: "Cortinas e Persianas Curitiba | Loja Especializada Sob Medida",
          subtitle: "A melhor loja de persianas de Curitiba com sede no bairro Hauer",
          heroImage: "https://www.neoflexpersianas.com.br/images/produto-02.webp",
          intro: "Procurando a melhor loja de cortinas e persianas em Curitiba? A Nova's Persianas é líder regional em persianas sob medida, atendendo residências e escritórios de alto padrão com consultoria, medição grátis e instalação técnica certificada.",
          content: "Com mais de 20 anos de tradição em Curitiba, fabricamos persianas personalizadas que valorizam seu ambiente, garantem conforto térmico e bloqueio de raios UV. Nossos produtos utilizam mecanismos importados de alta durabilidade e tecidos laváveis com tratamento de cor contra amarelamento por exposição solar.",
          faq: [
            { q: "Onde fica a loja da Nova's Persianas em Curitiba?", a: "Nossa sede física está localizada na R. Frei Henrique de Coimbra, 1750, no bairro Hauer em Curitiba. Atendemos com mostruário completo no local ou vamos até você para medição grátis." },
            { q: "Quais bairros de Curitiba a Nova's atende?", a: "Atendemos todos os bairros de Curitiba, incluindo Hauer, Boqueirão, Portão, Batel, Água Verde, Centro, Rebouças, Santa Felicidade, Jardim das Américas e região metropolitana." },
            { q: "A medição em domicílio é gratuita mesmo?", a: "Sim! Enviamos um consultor técnico com mostruários reais à sua residência ou empresa sem qualquer taxa de deslocamento ou compromisso de compra." }
          ],
          showProducts: true,
          categoryFilter: "all"
        };
      case "persianas-sob-medida-curitiba":
        return {
          title: "Persianas Sob Medida Curitiba | Qualidade de Fábrica",
          subtitle: "Projetos milimétricos com tecidos premium e acabamento de alta costura",
          heroImage: "https://imperiopersianas.com.br/wp-content/uploads/2019/10/Double-Vision-03-2.jpg",
          intro: "Persianas sob medida são ideais para vãos fora do padrão, portas de correr de sacada e salas que necessitam de perfeita vedação solar. A Nova's projeta cada persiana do zero de acordo com as especificações da sua janela.",
          content: "Não compre persianas prontas de lojas de departamento que não encaixam no seu vão e quebram facilmente. Nosso projeto sob medida garante que o bando ou acabamento superior em alumínio esconda o rolo perfeitamente, proporcionando harmonia estética inigualável. Nossas persianas são indicadas para controle acústico, térmico e privacidade absoluta.",
          faq: [
            { q: "Por que escolher persianas sob medida em vez de tamanhos padrão?", a: "As persianas sob medida cobrem o vão milimetricamente, impedindo frestas de luz incômodas nas laterais e utilizando materiais e comandos robustos que duram décadas, ao contrário das descartáveis de tamanho padrão." },
            { q: "Como funciona a medição técnica?", a: "Nosso técnico vai até seu endereço em Curitiba, analisa o tipo de parede (gesso, alvenaria, teto rebaixado) e define as folgas necessárias para que o produto funcione sem travar." }
          ],
          showProducts: true,
          categoryFilter: "all"
        };
      case "persianas-verticais-curitiba":
        return {
          title: "Persianas Verticais Curitiba | Praticidade e Custo-Benefício",
          subtitle: "Perfeitas para salas de estar, escritórios corporativos e janelas amplas",
          heroImage: "https://www.persianil.com.br/wp-content/uploads/2020/12/WhatsApp-Image-2021-02-18-at-11.10.02-1.jpeg",
          intro: "As persianas verticais são extremamente duráveis, oferecem giro de lâminas de 180 graus para controle fino de luz e são fáceis de operar. Ideais para grandes vãos em clínicas, escritórios e salas residenciais em Curitiba.",
          content: "Disponíveis em PVC lavável (altamente higiênico, ideal para pessoas alérgicas) ou em tecidos refinados Translúcidos e Blackout. Nossos trilhos de alumínio anodizado garantem um deslizamento silencioso e extremamente leve, sem travar os carrinhos de movimentação.",
          faq: [
            { q: "Persiana vertical acumula poeira?", a: "Os modelos em PVC são os mais fáceis de higienizar e acumulam pouquíssima poeira devido à sua disposição vertical. Basta uma flanela úmida para deixá-los novos." },
            { q: "Elas são indicadas para portas de correr de sacada?", a: "Sim, são ótimas para portas de sacada, pois permitem o recolhimento total de um lado só ou bipartido no centro, facilitando a passagem de pedestres." }
          ],
          showProducts: true,
          categoryFilter: "Vertical"
        };
      case "persianas-horizontais-curitiba":
        return {
          title: "Persianas Horizontais Curitiba | Madeira e Alumínio Premium",
          subtitle: "A beleza clássica com ajuste de lâminas preciso para luz e privacidade",
          heroImage: "https://71026.cdn.simplo7.net/static/71026/sku/persianas-persiana-madeira-persiana-horizontal-de-madeira-natural-branca-50mm-com-fita--p-1631664913801.jpg",
          intro: "As persianas horizontais agregam um ar retrô e refinado aos ambientes. Oferecemos as tradicionais em alumínio de 25mm para cozinhas e escritórios, e as magníficas de madeira natural de 50mm para salas e escritórios executivos em Curitiba.",
          content: "Nossas persianas de madeira recebem tratamento especial de estufa contra empenamento, garantindo que as lâminas permaneçam retas mesmo sob o sol forte de Curitiba. Elas podem ser montadas com fitas decorativas de tecido que escondem os furos de passagem dos cordões, adicionando sofisticação extrema.",
          faq: [
            { q: "Qual a diferença entre a persiana horizontal de madeira e a sintética?", a: "A de madeira natural é mais leve e possui os veios originais da árvore, sendo extremamente sofisticada. A de madeira sintética (ou bambu) é mais resistente à umidade, recomendada para cozinhas ou banheiros." },
            { q: "As lâminas de alumínio entortam com o vento?", a: "Nossas lâminas de alumínio utilizam liga de alta resiliência (alumínio virgem), o que impede que elas dobrem ou marquem permanentemente ao menor toque ou vento." }
          ],
          showProducts: true,
          categoryFilter: "Horizontal"
        };
      case "persianas-rolo-curitiba":
        return {
          title: "Persianas Rolô Curitiba | Blackout e Tela Solar Moderna",
          subtitle: "Visual clean e recolhimento compacto para varandas e dormitórios",
          heroImage: "https://images.tcdn.com.br/img/img_prod/1175294/persiana_rolo_tela_solar_5_1_60m_x_1_60m_preto_bella_janela_6045_1_ef36aeb9847d26324b3f53fa5d6325f5.jpg",
          intro: "A persiana rolô é a favorita da arquitetura contemporânea devido ao seu design minimalista. Quando aberta, ela se recolhe em um cilindro superior discreto, deixando a paisagem totalmente livre e limpa.",
          content: "Fabricamos em três acabamentos térmicos: Blackout (bloqueio 100% da luz, ideal para quartos com TV), Tela Solar Screen (bloqueia calor e raios UV mantendo a visibilidade de fora) e Translúcida (permite claridade suave bloqueando a visão externa). Perfeitas para envidraçamento de sacadas no Hauer e Portão.",
          faq: [
            { q: "A persiana rolô tela solar protege os móveis do sol?", a: "Sim! Ela bloqueia de 95% a 99% dos raios ultravioleta (UV), que são os principais responsáveis por desbotar pisos de madeira, sofás e tapetes." },
            { q: "Como limpar persianas rolô?", a: "Por possuírem superfície plana, basta usar um aspirador de pó com bocal de escova periodicamente ou agendar nossa higienização profissional anual para manchas profundas." }
          ],
          showProducts: true,
          categoryFilter: "Rolô"
        };
      case "persianas-romana-curitiba":
        return {
          title: "Persianas Romana Curitiba | Design em Gomos Sofisticado",
          subtitle: "Camadas horizontais de tecido que se dobram com elegância clássica",
          heroImage: "https://www.arquiprojeto.art.br/wp-content/uploads/2020/04/Cortina-painel-blackout-quarto.jpg",
          intro: "A persiana romana destaca-se pelo seu recolhimento em dobras horizontais consecutivas. Ela une o aconchego clássico das cortinas de tecido tradicionais com o controle de altura prático das persianas modernas.",
          content: "Indicada para salas de jantar, bibliotecas e quartos aconchegantes. A Nova's oferece persianas romanas em linho sintético, tecidos translúcidos decorativos de alta costura ou com forro blackout emborrachado para escurecimento impecável de salas de home theater em Curitiba.",
          faq: [
            { q: "Quais tecidos estão disponíveis para a persiana romana?", a: "Temos uma vasta coleção que inclui linhos finos, tecidos com texturas rústicas, fibras naturais, além de opções blackout e telas solares com proteção térmica." },
            { q: "Elas ocupam muito espaço quando recolhidas?", a: "Cada gomo se dobra sobre o outro, ocupando cerca de 25cm a 30cm no topo da janela. Nossa equipe técnica calcula o espaço com precisão para não obstruir a abertura de janelas comuns." }
          ],
          showProducts: true,
          categoryFilter: "Romana"
        };
      case "persianas-double-vision-curitiba":
        return {
          title: "Persiana Double Vision Curitiba | O Luxo das Faixas Paralelas",
          subtitle: "O modelo mais desejado de Curitiba com regulagem de luz inovadora",
          heroImage: "https://cdn.leroymerlin.com.br/products/persiana_double_vision_de_medida_1,70_l_x_1,70_a_com_bando_br_1572217505_7edd_600x600.jpg",
          intro: "A Double Vision (ou Rainbow) possui um sistema de tecido duplo em faixas alternadas que deslizam em paralelo. Você escolhe se quer focar na entrada de luz difusa, visão parcial do exterior ou privacidade total.",
          content: "Na Nova's, todas as persianas Double Vision acompanham o bando superior integrado em alumínio anodizado na cor do tecido, ocultando o rolo e dando acabamento estético sofisticado. Excelente para salas residenciais e quartos em bairros nobres como Batel e Água Verde.",
          faq: [
            { q: "A Double Vision bloqueia totalmente a claridade?", a: "Temos a versão 'Double Vision Semi Blackout' que bloqueia cerca de 85% a 90% da luminosidade, garantindo excelente privacidade. Para vedação 100% de luz solar, recomendamos a Rolô Blackout ou a Persiana Caixa." },
            { q: "Quais cores de bandô de alumínio estão disponíveis?", a: "Trabalhamos com bandôs em branco, preto, bronze, cinza anodizado e creme, sempre combinando com a cor do tecido escolhida para o seu projeto." }
          ],
          showProducts: true,
          categoryFilter: "Double Vision"
        };
      case "persianas-painel-curitiba":
        return {
          title: "Persianas Painel Curitiba | Trilhos Deslizantes para Grandes Vãos",
          subtitle: "Painéis de tecido largos que correm lateralmente com extrema leveza",
          heroImage: "https://www.persianil.com.br/wp-content/uploads/2020/12/WhatsApp-Image-2021-02-18-at-11.10.02-1.jpeg",
          intro: "As persianas modelo painel são ideais para grandes aberturas, divisórias de escritórios ou portas de sacada de correr. Seus painéis largos de tecido correm por trilhos paralelos silenciosos.",
          content: "Os painéis podem ser recolhidos de forma coordenada para as laterais, permitindo uma abertura livre total. É um modelo imponente, que traz elegância arquitetônica e sofisticação única às salas com pé-direito alto ou varandas gourmets integradas em Curitiba.",
          faq: [
            { q: "Quantas vias de trilho são necessárias para a persiana painel?", a: "Isso depende da largura total do vão e da quantidade de painéis necessária (geralmente de 2 a 5 painéis). Nosso consultor projeta a melhor distribuição técnica para você." },
            { q: "Ela pode ser usada para dividir ambientes?", a: "Sim, é uma solução espetacular e de baixo custo para criar divisórias móveis e elegantes em clínicas, estúdios ou escritórios de coworking." }
          ],
          showProducts: true,
          categoryFilter: "Painel"
        };
      case "persianas-automizadas-curitiba":
        return {
          title: "Persianas Motorizadas e Automatizadas Curitiba | Luxo Inteligente",
          subtitle: "Controle suas persianas com apenas um toque no controle, celular ou por Alexa",
          heroImage: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHTFQj6NuJDjW8sfkkHIhJ4Kw-5EQSw60Fxeqr2IjTc4wFsZUa1i0Jqy219iTSuQhiDH33kJJ45ac9bwZE19jA7i-RRz94ibg7y-SUJ3CjYvlS017X4Av4uLy0c-lwXvPFdZYQ=s680-w680-h510-rw",
          intro: "A motorização de persianas traz o auge do conforto e sofisticação para sua casa. Indicado especialmente para janelas altas de difícil alcance, salas de cinema doméstico, idosos ou pessoas com mobilidade reduzida.",
          content: "Trabalhamos com motores silenciosos de última geração (marcas líderes de mercado) que podem ser acionados via controle remoto por rádiofrequência, aplicativos móveis de automação ou integrados com assistentes virtuais de voz como Alexa e Google Assistant. Garantia estendida de motorização inclusa no contrato.",
          faq: [
            { q: "É preciso quebrar a parede para instalar motor de persiana?", a: "Não necessariamente! Dispomos de motores modernos recarregáveis via bateria de longa duração (que dura até 6 meses com uma única carga), eliminando totalmente a necessidade de fiação ou quebra de gesso." },
            { q: "As persianas motorizadas são seguras para idosos?", a: "Sim, são extremamente recomendadas, pois evitam o esforço físico de puxar cordões pesados e eliminam os riscos de acidentes com correntes soltas." }
          ],
          showProducts: true,
          categoryFilter: "all"
        };
      case "manutencao-de-persianas-curitiba":
        return {
          title: "Conserto e Manutenção de Persianas Curitiba | Lavagem Profissional",
          subtitle: "Traga de volta a beleza e o funcionamento original de sua persiana antiga",
          heroImage: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAECt_kTJA5gfecqhKF5JW5Frd_dD2peOb2Vpq3EzFN168vcWhxGJ2yyKusEVf8Ch1T8IWH1GBRmr-mHTXbPaH6wmZIMbafdzk298fHK9tadUlNKB9IZqWVxpyrXcVM38HxJ1IsQ=s680-w680-h510-rw",
          intro: "Sua persiana travou, arrebentou o cordão ou está muito suja? Não gaste dinheiro comprando uma nova! A Nova's Persianas em Curitiba oferece o serviço especializado de higienização profunda e reforma de mecanismos multimarcas.",
          content: "Retiramos a persiana em sua casa com toda a segurança, realizamos a lavagem química com produtos bactericidas que removem ácaros, fungos e mofo sem desbotar o tecido, substituímos as peças quebradas, cordões ou comandos desgastados e reinstalamos com funcionamento impecável.",
          faq: [
            { q: "Quanto tempo demora o serviço de lavagem e manutenção?", a: "Nosso prazo médio é de 3 a 5 dias úteis. Retiramos, realizamos todo o processo especializado de secagem natural na fábrica e reinstalamos com agendamento." },
            { q: "Vocês consertam persianas compradas de outras marcas?", a: "Sim! Nossa equipe possui amplo estoque de peças de reposição de quase todas as marcas do mercado brasileiro de persianas nacionais e importadas." }
          ],
          showProducts: false,
          serviceId: "s2"
        };
      case "instalacao-de-persianas-curitiba":
        return {
          title: "Instalação de Persianas Curitiba | Serviço Técnico com Garantia",
          subtitle: "Instaladores próprios, pontuais e equipados para furações sem sujeira",
          heroImage: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHTFQj6NuJDjW8sfkkHIhJ4Kw-5EQSw60Fxeqr2IjTc4wFsZUa1i0Jqy219iTSuQhiDH33kJJ45ac9bwZE19jA7i-RRz94ibg7y-SUJ3CjYvlS017X4Av4uLy0c-lwXvPFdZYQ=s680-w680-h510-rw",
          intro: "Instalar persianas exige ferramentas de precisão para que o trilho fique perfeitamente nivelado, garantindo o recolhimento do tecido reto e evitando desgaste prematuro das bordas. Evite furações erradas na sua parede de gesso ou alvenaria.",
          content: "Nossos instaladores são funcionários próprios, treinados para realizar furações limpas (utilizando aspiradores de poeira acoplados), respeitando o silêncio do seu lar. Oferecemos 1 ano de garantia total na fixação mecânica de todas as persianas instaladas por nossa marca.",
          faq: [
            { q: "Vocês instalam persianas em teto de gesso rebaixado?", a: "Sim, utilizamos buchas específicas de gesso acartonado (bucha fly/ancoragem) ou reforços de teto se necessário, garantindo total segurança para que a persiana não caia." },
            { q: "Quanto tempo dura a instalação de uma persiana?", a: "Em média, instalamos cada persiana em 20 a 30 minutos, deixando o ambiente perfeitamente limpo e testando o funcionamento junto com o cliente." }
          ],
          showProducts: false,
          serviceId: "s1"
        };
      case "orcamento-persianas-curitiba":
        return {
          title: "Orçamento de Persianas Curitiba | Agende Medição Gratuita Hoje",
          subtitle: "Preço justo, condições de pagamento em até 10x e atendimento via WhatsApp",
          heroImage: "https://www.neoflexpersianas.com.br/images/produto-02.webp",
          intro: "Quer saber quanto custa uma persiana sob medida de qualidade para o seu lar em Curitiba? Solicite um orçamento conosco! O atendimento é rápido, transparente e sem burocracia direta pelo WhatsApp.",
          content: "Oferecemos três formatos de orçamento: 1) Envie as medidas aproximadas pelo WhatsApp e receba uma estimativa de preço instantânea. 2) Agende uma visita de medição gratuita com mostruários em sua casa. 3) Visite nosso Showroom no Hauer. Aceitamos parcelamento facilitado em até 10x sem juros ou concedemos descontos generosos para pagamentos no PIX.",
          faq: [
            { q: "Qual o preço por metro quadrado (m²) de uma persiana?", a: "O valor varia de acordo com o modelo (Rolô, Double Vision, Horizontal) e o tecido selecionado (translúcido, blackout, tela solar). Entre em contato e calculamos uma simulação na hora." },
            { q: "Em quanto tempo recebo meu orçamento escrito?", a: "Para estimativas de WhatsApp, o cálculo é feito em poucos minutos. Para visitas presenciais, o orçamento final é entregue na hora do atendimento." }
          ],
          showProducts: true,
          categoryFilter: "all"
        };
      default:
        return {
          title: "Cortinas e Persianas Curitiba Sob Medida | Nova's Persianas",
          subtitle: "Consultoria gratuita, fabricação milimétrica e instalação especializada",
          heroImage: "https://www.neoflexpersianas.com.br/images/produto-02.webp",
          intro: "Nova's Persianas Curitiba é a sua principal escolha para o design de cortinas e persianas personalizadas.",
          content: "Oferecemos atendimento atencioso focado no Hauer, Portão, Batel, Água Verde e região metropolitana.",
          faq: [],
          showProducts: true,
          categoryFilter: "all"
        };
    }
  };

  const data = getPageData();

  // Helper filter for highlighted items on subpages
  const getSubpageProducts = () => {
    if (data.categoryFilter === "all") {
      return PRODUCTS;
    }
    return PRODUCTS.filter(p => p.category.toLowerCase().includes(data.categoryFilter.toLowerCase()) || p.name.toLowerCase().includes(data.categoryFilter.toLowerCase()));
  };

  const getWhatsAppLink = (productName: string) => {
    const text = encodeURIComponent(
      `Olá! Vi a página de *${data.title}* no seu site e gostaria de agendar um orçamento para: *${productName}*`
    );
    return `https://api.whatsapp.com/send/?phone=5541995507310&text=${text}`;
  };

  return (
    <div className={`pt-6 pb-16 transition-colors duration-300 ${
      highContrast ? "bg-black text-white" : "bg-stone-50/50 text-stone-800"
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
          <button onClick={onNavigateHome} className="hover:text-brand-blue transition-colors cursor-pointer">
            Início
          </button>
          <span>/</span>
          <span className={highContrast ? "text-yellow-400" : "text-stone-700"}>
            {route.replace(/-/g, " ")}
          </span>
        </div>

        {/* Return Button */}
        <div className="mb-8">
          <button
            onClick={onNavigateHome}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
              highContrast
                ? "bg-yellow-400 text-black border-2 border-black"
                : "bg-white text-stone-700 hover:text-brand-blue shadow-md border border-stone-150 hover:scale-105"
            }`}
          >
            <span>← Voltar para a Home</span>
          </button>
        </div>

        {/* HERO SECTION DESIGNED TO REPEL SEO BOUNCE */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-xl border border-stone-200/40">
          <div className="absolute inset-0 z-0">
            <img 
              src={data.heroImage} 
              alt={data.title} 
              className="w-full h-full object-cover filter brightness-[0.3]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 px-6 py-12 md:py-20 text-center max-w-4xl mx-auto text-white">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 ${
              highContrast ? "bg-yellow-400 text-black" : "bg-brand-blue text-white"
            }`}>
              <Sparkles className="w-3 h-3" />
              <span>Selo de Qualidade Nova's</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 font-display leading-tight">
              {data.title}
            </h1>
            <p className="text-sm md:text-lg text-stone-200 font-medium leading-relaxed max-w-2xl mx-auto">
              {data.subtitle}
            </p>
          </div>
        </div>

        {/* HIGH VALUE SEMANTIC CONTENT BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          
          {/* Main text & SEO GEO section */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className={`p-6 sm:p-8 rounded-2xl border ${
              highContrast ? "bg-stone-950 border-white" : "bg-white border-stone-250/60 shadow-md"
            }`}>
              <h2 className={`text-2xl font-black uppercase tracking-tight font-display mb-4 ${
                highContrast ? "text-yellow-300" : "text-stone-900"
              }`}>
                Soluções Sob Medida de Alta Durabilidade para sua Janela
              </h2>
              <div className={`text-base md:text-lg leading-relaxed flex flex-col gap-4 ${
                highContrast ? "text-stone-200" : "text-stone-600 font-medium"
              }`}>
                <p className="font-semibold text-stone-800 dark:text-yellow-100/90">
                  {data.intro}
                </p>
                <p>
                  {data.content}
                </p>
                <p>
                  Nossa empresa possui uma longa história no coração de Curitiba, com foco de atendimento no tradicional bairro <strong>Hauer</strong>, onde localiza-se nossa sede física. Atendemos com extrema agilidade também moradores de bairros circundantes como <strong>Boqueirão, Portão, Batel, Água Verde, Rebouças, Centro, Jardim das Américas, Uberaba, Capão Raso, CIC e Santa Felicidade</strong>.
                </p>
                <p>
                  Cada projeto que realizamos acompanha um selo de segurança e facilidade de manuseio, especialmente adaptados para idosos e famílias que priorizam segurança digital, durabilidade e controle solar impecável.
                </p>
              </div>
            </div>

            {/* NEIGHBORHOOD CITATIONS (LOCAL SEO SECURING GOOGLE GEO POSITIONING) */}
            <div className={`p-6 rounded-2xl border ${
              highContrast ? "bg-stone-950 border-white" : "bg-stone-100 border-stone-200"
            }`}>
              <h3 className={`text-base font-black uppercase tracking-wider mb-4 flex items-center gap-1.5 ${
                highContrast ? "text-yellow-300" : "text-brand-blue"
              }`}>
                <MapPin size={16} /> Atendimento Local em Curitiba e Região Metropolitana:
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                highContrast ? "text-stone-300" : "text-stone-600 font-medium"
              }`}>
                Não cobramos nenhuma taxa extra de deslocamento para visitas técnicas e agendamento de orçamentos nos seguintes bairros de Curitiba:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {["Hauer (Sede)", "Boqueirão", "Portão", "Água Verde", "Batel", "Rebouças", "Centro", "Jardim das Américas", "Uberaba", "Capão Raso", "Xaxim", "Santa Felicidade"].map((place) => (
                  <div key={place} className={`px-3 py-2 rounded-xl border text-xs font-bold text-center ${
                    highContrast 
                      ? "bg-black border-white text-white" 
                      : "bg-white border-stone-200 text-stone-700 hover:border-brand-blue transition-colors"
                  }`}>
                    📍 {place}
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ ACCORDION SECTION (SEO FRIENDLY SCHEMA) */}
            {data.faq.length > 0 && (
              <div className="flex flex-col gap-4">
                <h2 className={`text-2xl font-black uppercase tracking-tight font-display ${
                  highContrast ? "text-yellow-300" : "text-stone-900"
                }`}>
                  Perguntas Frequentes Sobre {route.replace(/-/g, " ")}
                </h2>
                <div className="flex flex-col gap-3">
                  {data.faq.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`p-5 rounded-xl border ${
                        highContrast ? "bg-stone-950 border-white" : "bg-white border-stone-200/80 shadow-sm"
                      }`}
                    >
                      <h3 className={`text-base font-black uppercase tracking-tight mb-2 flex items-start gap-1.5 ${
                        highContrast ? "text-yellow-300" : "text-stone-900"
                      }`}>
                        <span className="text-brand-blue text-sm">Q:</span>
                        {item.q}
                      </h3>
                      <p className={`text-sm leading-relaxed pl-5 ${
                        highContrast ? "text-stone-200" : "text-stone-600 font-medium"
                      }`}>
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column: Sticky Side Card for immediate Lead conversion */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col gap-6">
            
            {/* Lead Form card */}
            <div className={`p-6 rounded-2xl border ${
              highContrast ? "bg-stone-950 border-white" : "bg-white border-stone-150 shadow-lg"
            }`}>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-stone-100">
                <Award className="w-5 h-5 text-brand-blue" />
                <span className={`text-sm font-black uppercase tracking-wider ${
                  highContrast ? "text-yellow-300" : "text-stone-900"
                }`}>Consultoria Grátis</span>
              </div>
              <h3 className={`text-lg font-black uppercase tracking-tight mb-2 ${
                highContrast ? "text-yellow-300" : "text-stone-900 font-display"
              }`}>
                Agende Sua Visita Técnica Gratuita
              </h3>
              <p className={`text-xs leading-relaxed mb-5 ${
                highContrast ? "text-stone-300" : "text-stone-500 font-medium"
              }`}>
                Nossa equipe vai até você no seu horário, leva os catálogos físicos e tira as medidas milimétricas com laser. Sem compromisso de compra!
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={`https://api.whatsapp.com/send/?phone=5541995507310&text=${encodeURIComponent(
                    `Olá! Vi a página de *${data.title}* no Google e gostaria de agendar uma medição técnica grátis em minha casa.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs tracking-widest uppercase rounded-xl flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer min-h-[44px]"
                >
                  <MessageSquare size={16} />
                  <span>Chamar no WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setActivePage("contato");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`w-full py-3 px-4 border text-xs font-bold tracking-widest uppercase rounded-xl transition-all cursor-pointer min-h-[44px] ${
                    highContrast
                      ? "bg-black text-white border-white hover:bg-stone-900"
                      : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50 hover:border-brand-blue"
                  }`}
                >
                  Ver Outros Contatos
                </button>
              </div>
            </div>

            {/* Brand credentials */}
            <div className={`p-5 rounded-2xl border text-center ${
              highContrast ? "bg-stone-950 border-white" : "bg-stone-50 border-stone-200"
            }`}>
              <span className="text-3xl block mb-2">⭐</span>
              <h4 className="font-black text-xs uppercase tracking-wider text-stone-500 mb-1">
                Satisfação de Curitiba
              </h4>
              <p className={`text-[11px] leading-relaxed font-bold ${
                highContrast ? "text-yellow-300" : "text-stone-800"
              }`}>
                Avaliação de 4.9 estrelas no Google Maps baseada em mais de 180 depoimentos reais.
              </p>
            </div>

          </div>

        </div>

        {/* Dynamic products catalog segment */}
        {data.showProducts && (
          <div className="border-t border-stone-200/50 pt-12 mt-8">
            <h2 className={`text-2xl md:text-3xl font-black uppercase font-display tracking-tight text-center mb-4 ${
              highContrast ? "text-yellow-300" : "text-stone-900"
            }`}>
              Modelos de Persianas Recomendados para Este Projeto
            </h2>
            <p className="text-sm text-center text-stone-500 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              Oferecemos designs variados para combinar perfeitamente com a decoração do seu quarto, cozinha ou escritório.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {getSubpageProducts().slice(0, 4).map((product) => (
                <div 
                  key={product.id}
                  className={`rounded-2xl overflow-hidden border flex flex-col transition-all duration-300 hover:scale-[1.02] ${
                    highContrast ? "bg-black border-white text-white" : "bg-white border-stone-150 shadow-sm"
                  }`}
                >
                  <div className="h-44 bg-stone-100 overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                    <div>
                      <h3 className={`font-bold uppercase tracking-tight text-base ${
                        highContrast ? "text-yellow-300" : "text-stone-900"
                      }`}>{product.name}</h3>
                      <p className="text-xs text-stone-500 font-semibold leading-relaxed line-clamp-2 mt-1">{product.description}</p>
                    </div>
                    <a
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-2 px-3 rounded-xl font-bold text-[10px] tracking-wider text-center uppercase transition-all duration-150 min-h-[38px] cursor-pointer block ${
                        highContrast 
                          ? "bg-yellow-400 text-black border border-black" 
                          : "bg-brand-blue hover:bg-brand-blue-hover text-white"
                      }`}
                    >
                      Solicitar Orçamento
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
