/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Service, CarouselSlide, Benefit } from "./types";

// 18 official Persianas categories for the submenus
export const PERSIANA_CATEGORIES = [
  "Persiana Caixa",
  "Persiana Horizontal Alumínio",
  "Persiana Horizontal Madeira",
  "Persiana Painel Blackout",
  "Persiana Painel Tela Solar",
  "Persiana Painel Translúcido",
  "Persiana Romana Blackout",
  "Persiana Romana Tela Solar",
  "Persiana Romana Translúcido",
  "Persiana Shangrilá",
  "Persiana Vertical Blackout",
  "Persiana Vertical PVC",
  "Persiana Vertical Translúcido",
  "Persianas Double Vision",
  "Persianas Double Vision Semi Blackout",
  "Rolô Blackout",
  "Rolô Tela Solar",
  "Rolô Translúcida"
];

// Carousel Slides
export const HERO_SLIDES: CarouselSlide[] = [
  {
    id: 1,
    title: "A Novas Persianas cuida de cada detalhe do seu espaço de forma exclusiva!",
    description: "Mais de 20 anos de tradição em Curitiba. Oferecemos consultoria personalizada gratuita, produtos de altíssima qualidade e instalação com garantia total.",
    image: "https://www.neoflexpersianas.com.br/images/produto-02.webp",
    ctaText: "Ver Catálogo de Modelos",
    ctaLink: "#modelos",
    secondaryText: "Falar pelo WhatsApp",
    secondaryLink: "https://api.whatsapp.com/send/?phone=5541995507310&text=Ol%C3%A1%2C%20achei%20seu%20site%20no%20%2AGoogle%2A%20e%20%2Agostaria%20de%3A%2A"
  },
  {
    id: 2,
    title: "Transforme sua casa ou empresa com conforto térmico e elegância",
    description: "Nossas persianas Tela Solar e Blackout reduzem até 90% do calor, protegem seus móveis contra raios UV e oferecem privacidade absoluta para seus ambientes.",
    image: "https://imperiopersianas.com.br/wp-content/uploads/2019/10/Double-Vision-03-2.jpg",
    ctaText: "Agendar Visita Gratuita",
    ctaLink: "https://api.whatsapp.com/send/?phone=5541995507310&text=Ol%C3%A1%2C%20achei%20seu%20site%20no%20%2AGoogle%2A%20e%20%2Agostaria%20de%3A%2A"
  },
  {
    id: 3,
    title: "Sofisticação e controle de luminosidade perfeitos para seu ambiente",
    description: "Conheça nossos modelos exclusivos Double Vision com bandô de acabamento em alumínio. Design que valoriza a arquitetura do seu lar.",
    image: "https://cdn.leroymerlin.com.br/products/persiana_double_vision_de_medida_1,70_l_x_1,70_a_com_bando_br_1572217505_7edd_600x600.jpg",
    ctaText: "Solicitar Orçamento",
    ctaLink: "https://api.whatsapp.com/send/?phone=5541995507310&text=Ol%C3%A1%2C%20achei%20seu%20site%20no%20%2AGoogle%2A%20e%20%2Agostaria%20de%3A%2A"
  },
  {
    id: 4,
    title: "Beleza e praticidade com as melhores marcas de persianas do mercado",
    description: "Trabalhamos com matéria-prima de altíssima resistência e durabilidade. Peça uma demonstração de mostruário em sua residência gratuitamente.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPapViaRfzi7V15-9ypJob0MOPornbtHTkFIBWPj62qkyCju4arDmp4Ig&s=10",
    ctaText: "Falar com Consultor",
    ctaLink: "https://api.whatsapp.com/send/?phone=5541995507310&text=Ol%C3%A1%2C%20achei%20seu%20site%20no%20%2AGoogle%2A%20e%20%2Agostaria%20de%3A%2A"
  },
  {
    id: 5,
    title: "A harmonia perfeita entre decoração, aconchego e privacidade",
    description: "As melhores soluções sob medida para sua sala de estar, quarto ou escritório em Curitiba. Entrega e instalação ágeis garantidas.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvWHx2idO3_ZjMtKAqP4mUSaQJ9yB69uCVIU9sA-iT7o6gv12-FK6DIuWI&s=10",
    ctaText: "Chamar no WhatsApp",
    ctaLink: "https://api.whatsapp.com/send/?phone=5541995507310&text=Ol%C3%A1%2C%20achei%20seu%20site%20no%20%2AGoogle%2A%20e%20%2Agostaria%20de%3A%2A"
  }
];

// Primary Benefits / Diferenciais (3 Column)
export const BENEFITS_PRIMARY: Benefit[] = [
  {
    title: "Garantia Total de Fábrica",
    description: "Trabalhamos exclusivamente com materiais de alta durabilidade e oferecemos garantia certificada contra defeitos de fabricação e instalação.",
    iconName: "ShieldCheck"
  },
  {
    title: "Entrega Rápida em Curitiba",
    description: "Atendimento ágil em toda a região metropolitana de Curitiba com equipe própria e transporte especializado de forma segura.",
    iconName: "Truck"
  },
  {
    title: "Suporte e Atendimento Online",
    description: "Consultores sempre prontos no WhatsApp para tirar dúvidas e ajudar a escolher o modelo ideal para cada tipo de janela.",
    iconName: "MessageSquare"
  }
];

// Secondary Benefits (4 Column)
export const BENEFITS_SECONDARY: Benefit[] = [
  {
    title: "Medição e Visita Grátis",
    description: "Levamos todos os mostruários de tecidos e fazemos a medição técnica sem custos em Curitiba.",
    iconName: "Ruler"
  },
  {
    title: "Atendimento Personalizado",
    description: "Profissionais preparados para atender com paciência e clareza, explicando detalhadamente cada tipo de mecanismo.",
    iconName: "UserCheck"
  },
  {
    title: "Facilidade de Pagamento",
    description: "Parcelamos seu orçamento em até 10x sem juros no cartão, PIX com desconto especial ou boleto faturado.",
    iconName: "CreditCard"
  },
  {
    title: "Segurança Digital Garantida",
    description: "Seus dados de contato estão protegidos e o direcionamento para o WhatsApp é direto, rápido e 100% seguro.",
    iconName: "Lock"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Persiana Caixa",
    slug: "produto-persiana-caixa",
    category: "Persiana Caixa",
    description: "Modelo premium com estrutura box de alumínio que envolve as bordas do tecido, garantindo vedação de luz lateral e excelente controle acústico. Excelente para dormitórios e salas de TV.",
    longDescription: "A Persiana Caixa (ou Persiana com Bandô e Guias Laterais Box) é a escolha máxima para quem busca o escurecimento completo de um ambiente associado a um acabamento estético impecável. Sua estrutura robusta em alumínio envolve totalmente o rolo do tecido na parte superior (bandô box) e as laterais da janela (guias em U), impedindo que qualquer feixe de luz externa passe pelas frestas. Essa vedação técnica de alta precisão não apenas proporciona um efeito blackout insuperável de 100%, mas também auxilia significativamente no isolamento térmico e acústico do cômodo. Fabricada sob medida em Curitiba pela Nova's Persianas, ela se integra perfeitamente à moldura da janela, proporcionando um visual limpo, moderno e minimalista.",
    image: "https://loja.persianascrisdan.com.br/arquivos/produtos/imagens_adicionais/webp/8bd069b3e34f4c5c4462ac923956c34b5b06dacb.jpeg.webp",
    features: ["Bloqueio lateral de luminosidade de 100%", "Visual integrado à moldura da janela", "Estrutura moderna e elegante em alumínio"],
    specifications: ["Estrutura: Alumínio extrudado com pintura eletrostática", "Opções de tecido: Blackout vinílico ou acrílico premium", "Acionamento: Manual por corrente redutora ou motorizado por controle remoto/Alexa", "Limpeza: Pano úmido e detergente neutro de fácil assepsia"],
    idealFor: ["Quartos residenciais e dormitórios de bebês", "Salas de Home Theater e projeção de vídeo", "Salas de reunião e auditórios corporativos"]
  },
  {
    id: "p2",
    name: "Persiana Double Vision Semi Blackout",
    slug: "produto-persiana-double-vision-semi-blackout",
    category: "Persianas Double Vision Semi Blackout",
    description: "O requinte das faixas horizontais que alternam entre tecidos opacos e translúcidos. Oferece o equilíbrio perfeito entre privacidade, entrada de luz solar e excelente design decorativo.",
    longDescription: "A Persiana Double Vision Semi Blackout combina de forma genial a elegância decorativa das listras horizontais com a funcionalidade de um tecido de alta densidade. Composta por duas camadas de tecido que deslizam paralelamente, ela alterna faixas opacas com faixas de tela translúcida. O modelo Semi Blackout utiliza um tecido especial que bloqueia até 85% da incidência solar direta nas faixas fechadas, permitindo uma redução térmica formidável e uma atmosfera aconchegante e reservada. Ajustando a altura da persiana, você tem total controle dinâmico da luminosidade.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8tL94EjoBOCaVVHUcjwBPPdejUC7kyQ36SwvfqUlPvw&s=10",
    features: ["Efeito listrado decorativo elegante", "Excelente escurecimento e redução de calor", "Regulagem de altura e sobreposição dinâmica"],
    specifications: ["Material: 100% Poliéster de alta resistência", "Bloqueio Solar: Até 85% de retenção de luminosidade", "Acabamento: Bandô curvo de alumínio com pintura premium", "Controle: Manual por cordão de nylon ou automatizado por aplicativo"],
    idealFor: ["Salas de estar sofisticadas e livings integrados", "Quartos que necessitam de luz filtrada confortável", "Escritórios executivos de alto padrão"]
  },
  {
    id: "p3",
    name: "Persiana Double Vision Translúcida",
    slug: "produto-persiana-double-vision",
    category: "Persianas Double Vision",
    description: "Permite a entrada suave da luz do dia enquanto bloqueia a visão de fora para dentro. Ideal para salas de estar, cozinhas e escritórios que exigem ambientes claros e aconchegantes.",
    longDescription: "Para quem valoriza ambientes banhados por uma luminosidade suave, clara e agradável, a Persiana Double Vision Translúcida é a solução ideal. O seu sofisticado mecanismo de faixas alternadas permite criar jogos de luz e sombra extraordinários. Quando alinhada em modo aberto, a luz externa entra de forma difusa e homogênea, clareando o espaço sem ofuscamento, enquanto protege pisos e móveis contra os raios UV. Em modo fechado, oferece privacidade completa sem escurecer o ambiente, impedindo a visão de fora para dentro.",
    image: "https://beneflexpersianas.com.br/wp-content/uploads/2024/10/11-2.jpg",
    features: ["Entrada de luz natural difusa e aconchegante", "Proteção de privacidade diurna e noturna", "Design moderno e contemporâneo com bandô de acabamento"],
    specifications: ["Material: Tecido sintético premium com tramas translúcidas", "Proteção UV: Filtração de até 70% dos raios solares", "Eixo: Tubo de alumínio reforçado para evitar empenamento", "Mecanismo: Comando manual leve com corrente redutora de esforço"],
    idealFor: ["Cozinhas planejadas e copas residenciais", "Salas de jantar e recepções comerciais", "Consultórios e salas de atendimento humanizado"]
  },
  {
    id: "p4",
    name: "Persiana Horizontal Alumínio",
    slug: "produto-persiana-horizontal-aluminio",
    category: "Persiana Horizontal Alumínio",
    description: "A clássica e funcional persiana de alumínio com lâminas de 16mm ou 25mm. Extremamente fácil de limpar, altamente resistente à umidade e ideal para cozinhas, banheiros e escritórios.",
    longDescription: "A Persiana Horizontal de Alumínio é sinônimo de praticidade, durabilidade e excelente relação custo-benefício. Com lâminas de liga especial de alumínio de 16mm ou 25mm, ela resiste perfeitamente à umidade e ao calor, sendo imune a deformações provocadas pelo vapor de água. O controle da luminosidade e da ventilação é extremamente preciso, realizado através de um simples giro da haste de comando que angula as lâminas em até 180 graus. Por ter superfícies lisas, sua limpeza é extremamente rápida e prática.",
    image: "https://andrelux.com.br/arquivos/produtos/imagens_adicionais/webp/66afd033d2c71068b30a0e165aa4857a41eb2ab8.jpeg.webp",
    features: ["Lâminas ajustáveis de precisão de 16mm ou 25mm", "Altamente resistente a água, umidade e vapores", "Excelente custo-benefício e durabilidade prolongada"],
    specifications: ["Material: Alumínio temperado de alta flexibilidade", "Espessura das lâminas: 0.21mm com pintura esmaltada no forno", "Acionamento: Cordão de nylon para subida e haste de acrílico para giro", "Instalação: Teto, parede ou entre vãos com suportes discretos"],
    idealFor: ["Cozinhas residenciais e industriais", "Banheiros, lavabos e áreas de serviço", "Escritórios administrativos e comércios em geral"]
  },
  {
    id: "p5",
    name: "Persiana Horizontal Madeira",
    slug: "produto-persiana-horizontal-madeira",
    category: "Persiana Horizontal Madeira",
    description: "Oferece o calor e o aconchego da madeira natural ou sintética em lâminas de 50mm. Agrega sofisticação única a salas, escritórios executivos e ambientes de lazer requintados.",
    longDescription: "Com lâminas imponentes de 50mm, a Persiana Horizontal de Madeira traz o aconchego orgânico e o requinte inigualável da madeira natural para o design de interiores. Cada lâmina é submetida a tratamentos rigorosos contra empenamento, cupins e raios solares, garantindo uma vida útil longa com estabilidade dimensional fantástica. Além do apelo visual luxuoso, a madeira é um excelente isolante térmico natural, mantendo o ambiente agradável durante todo o ano.",
    image: "https://71026.cdn.simplo7.net/static/71026/sku/persianas-persiana-madeira-persiana-horizontal-de-madeira-natural-branca-50mm-com-fita--p-1631664913801.jpg",
    features: ["Madeira nobre tratada de alta qualidade", "Controle térmico e acústico natural", "Visual imponente, elegante e extremamente luxuoso"],
    specifications: ["Lâminas: Madeira natural de reflorestamento com 50mm de largura", "Acabamento opcional: Fitas de algodão decorativas largas (cadarço)", "Opções de cor: Mogno, Tabaco, Mel, Branca, Preta e tons acinzentados", "Mecanismo: Cabeçote reforçado com engrenagens de alta resistência"],
    idealFor: ["Salas de estar residenciais de luxo", "Home office e bibliotecas de leitura", "Escritórios de advocacia e salas de diretoria executiva"]
  },
  {
    id: "p6",
    name: "Persiana Painel Blackout",
    slug: "produto-persiana-painel-blackout",
    category: "Persiana Painel Blackout",
    description: "Excelente para grandes vãos, portas de sacada e janelas amplas. Os painéis deslizam horizontalmente sobre trilhos paralelos, proporcionando escurecimento total e manuseio leve.",
    longDescription: "Especialmente desenvolvida para cobrir grandes vãos envidraçados, portas de correr de sacadas e divisórias de ambientes amplos, a Persiana Painel Blackout é composta por painéis de tecido verticais largos que correm suavemente sobre trilhos paralelos de alumínio. Graças ao tecido blackout emborrachado ou resinado de alta densidade, ela bloqueia 100% da radiação de luz solar direta. Quando recolhida, os painéis se sobrepõem de forma muito compacta nas laterais, otimizando o vão livre da porta.",
    image: "https://www.arquiprojeto.art.br/wp-content/uploads/2020/04/Cortina-painel-blackout-quarto.jpg",
    features: ["Ideal para portas de correr, divisórias e grandes sacadas", "Recolhimento lateral super compacto e discreto", "Bloqueio absoluto de luz solar com proteção térmica"],
    specifications: ["Tecido: Blackout premium com toque emborrachado de fácil limpeza", "Trilho: Alumínio anodizado com canais múltiplos (de 2 a 5 vias)", "Deslizamento: Carrinhos com rodízios de nylon auto-lubrificantes", "Acionamento: Cordão lateral ou bastão acrílico de controle direto"],
    idealFor: ["Portas de correr integrando salas a sacadas ou varandas", "Divisórias de ambientes em lofts e escritórios", "Grandes vãos envidraçados em coberturas e apartamentos"]
  },
  {
    id: "p7",
    name: "Persiana Painel Tela Solar",
    slug: "produto-persiana-painel-tela-solar",
    category: "Persiana Painel Tela Solar",
    description: "A solução perfeita para varandas gourmets e escritórios ensolarados. Filtra os raios UV prejudiciais aos móveis, diminui drasticamente o calor e mantém a visibilidade da paisagem externa.",
    longDescription: "A Persiana Painel em Tela Solar (Screen) de alto desempenho é o segredo dos arquitetos para proteger grandes janelas e portas de varanda contra a incidência térmica severa, sem bloquear a iluminação natural e sem esconder a paisagem exterior. O tecido tecnológico é composto por filamentos de poliéster revestidos com PVC, criando aberturas precisas. Esse tramado bloqueia de forma inteligente até 95% do calor solar radiante e barra os raios UV prejudiciais.",
    image: "https://images.tcdn.com.br/img/img_prod/1175294/persiana_rolo_tela_solar_5_1_60m_x_1_60m_preto_bella_janela_6045_1_ef36aeb9847d26324b3f53fa5d6325f5.jpg",
    features: ["Bloqueia até 95% dos raios UV e do calor solar", "Reduz o calor mantendo a vista externa", "Tecido tecnológico lavável, antialérgico e muito durável"],
    specifications: ["Composição: Poliéster revestido com PVC de alta tenacidade", "Fator de abertura (Aberturas visuais): 1%, 3% ou 5% (sob escolha)", "Certificações: Proteção antichamas (NFPA 701) e livre de chumbo", "Limpeza: Lavagem simples com água e sabão neutro sem desbotar"],
    idealFor: ["Varandas gourmet e churrasqueiras integradas", "Sacadas envidraçadas expostas ao sol forte da tarde", "Escritórios corporativos e salas de reuniões amplas"]
  },
  {
    id: "p8",
    name: "Persiana Painel Translúcida",
    slug: "produto-persiana-painel-translucida",
    category: "Persiana Painel Translúcido",
    description: "Painéis verticais largos em tecidos especiais que criam uma barreira leve, filtrando a luz solar de forma homogênea. Agrega leveza visual e aconchego aos maiores vãos da sua residência.",
    longDescription: "Unindo a fluidez das cortinas tradicionais à elegância retilínea dos painéis modernos, a Persiana Painel Translúcida destaca-se por clarear os grandes ambientes de forma delicada e bem distribuída. Seus painéis de tecido translúcido filtram a luz forte do sol, transformando-a em uma iluminação interna aconchegante e agradável, perfeita para ler e trabalhar sem reflexos irritantes nas telas.",
    image: "https://www.persianil.com.br/wp-content/uploads/2020/12/WhatsApp-Image-2021-02-18-at-11.10.02-1.jpeg",
    features: ["Luminosidade suave, aconchegante e bem distribuída", "Visual limpo, plano e fluido sem fendas", "Fácil manuseio sobre trilhos suaves e silenciosos"],
    specifications: ["Tecidos disponíveis: Linho sintético, rústicos e poliéster macio", "Trilho: Alumínio anodizado sob medida de alta espessura", "Fixação: Teto ou parede com suportes de encaixe rápido", "Garantia: Total contra falhas de fabricação e montagem"],
    idealFor: ["Salas de estar integradas a jardins e quintais", "Divisões de ambientes corporativos abertos", "Espaços integrados de lofts e estúdios modernos"]
  },
  {
    id: "p9",
    name: "Persiana Romana Blackout",
    slug: "produto-persiana-romana-blackout",
    category: "Persiana Romana Blackout",
    description: "Modelo de dobras horizontais clássicas que se recolhem em camadas sucessivas. Proporciona bloqueio total de luz com sofisticação de alta costura em quartos e salas de estar.",
    longDescription: "A Persiana Romana Blackout traz o charme inconfundível do design clássico europeu combinado com a máxima barreira de luminosidade. Sua principal característica visual é o recolhimento em dobras horizontais e sequenciais que formam gomos elegantes à medida que a cortina é suspensa. Com tecido blackout estruturado por varetas horizontais invisíveis, ela garante 100% de vedação contra a luz solar direta, sendo uma opção excelente para criar um ambiente perfeito para sono profundo e relaxamento.",
    image: "https://http2.mlstatic.com/D_NQ_NP_936618-MLB51202363314_082022-O.webp",
    features: ["Recolhimento charmoso em gomos horizontais", "Bloqueio absoluto de 100% de claridade externa", "Acabamento luxuoso que substitui as cortinas tradicionais"],
    specifications: ["Tecido: Poliéster blackout texturizado ou vinílico emborrachado", "Varetas: Hastes internas de alumínio para sustentação perfeita", "Acionamento: Manual por corrente redutora ou motorizado por controle remoto", "Instalação: Necessita de vão superior livre de pelo menos 25cm para gomos recolhidos"],
    idealFor: ["Dormitórios residenciais e suítes de casal", "Quartos infantis e berçários", "Salas de TV aconchegantes e salas de cinema privativas"]
  },
  {
    id: "p10",
    name: "Persiana Shangrilá",
    slug: "produto-persiana-shangrila",
    category: "Persiana Shangrilá",
    description: "A fusão perfeita entre a persiana horizontal e a cortina de tecido fino. Lâminas horizontais de tecido flutuam suavemente entre duas camadas de voil translúcido.",
    longDescription: "A Persiana Shangrilá representa o topo do luxo e do design contemporâneo no segmento de coberturas para janelas. Ela é composta por lâminas horizontais de tecido macio de poliéster que parecem flutuar suspensas de forma mágica entre duas telas paralelas de voil finíssimo e transparente. Esse desenho único permite bascular e ajustar o ângulo das lâminas internas em qualquer altura da persiana, regulando a entrada de luz com precisão artística de forma semelhante a uma persiana horizontal clássica.",
    image: "https://persianasypisos.net/wp-content/uploads/2021/10/8.jpg",
    features: ["Fusão primorosa de voil transparente e tecido estruturado", "Controle rotativo de claridade de precisão incrível", "Estética sofisticada digna das melhores mostras de arquitetura"],
    specifications: ["Material: 100% Poliéster de toque ultra suave", "Ajuste de lâminas: Mecanismo rotativo integrado e silencioso", "Proteção UV: Tela dupla que mitiga em até 80% o impacto solar", "Acabamento: Bandô luxuoso de alumínio com design integrado"],
    idealFor: ["Salas de estar sofisticadas e livings integrados", "Quartos de casal elegantes e suítes master", "Escritórios de presidência e salas de atendimento VIP"]
  },
  {
    id: "p11",
    name: "Persiana Vertical Translúcido",
    slug: "produto-persiana-vertical-translucido",
    category: "Persiana Vertical Translúcido",
    description: "Lâminas de tecido verticais que giram em 180° e correm para as laterais. Oferece controle direcional da luz natural de forma leve e arejada em grandes janelas.",
    longDescription: "A Persiana Vertical em Tecido Translúcido é uma das soluções mais versáteis e eficientes do mercado para janelas de grande altura ou portas de sacada. Suas lâminas de poliéster tratado giram suavemente em torno do próprio eixo em até 180 graus, permitindo que você controle com exatidão a direção de entrada dos feixes de luz natural no decorrer do dia, além de poder recolher todo o conjunto de lâminas para as laterais.",
    image: "https://cdn.leroymerlin.com.br/products/persiana_vertical_em_tecido_com_bando_crisdan_largura_2,00_x_1567102403_5939_300x300.png",
    features: ["Giro de lâminas de 180° com controle angular preciso", "Ideal para janelas altas e portas de sacadas residenciais", "Acabamento decorativo de alta qualidade"],
    specifications: ["Tecido: Poliéster translúcido com tratamento anti-poeira", "Trilho: Alumínio extrudado pintado no forno com corrediças autolubrificantes", "Aberturas disponíveis: Lateral esquerda, lateral direita ou abertura central", "Opcionais: Bandô superior decorativo com o próprio tecido inserido"],
    idealFor: ["Salas de estar com pé-direito duplo ou janelas bem altas", "Portas de correr com saída para sacadas ou varandas", "Salas de aula, comércios e escritórios amplos"]
  },
  {
    id: "p12",
    name: "Rolô Blackout",
    slug: "produto-rolo-blackout",
    category: "Rolô Blackout",
    description: "O modelo de rolo mais vendido pela praticidade e facilidade de limpeza. Tecido blackout de toque emborrachado para bloqueio de 100% da claridade externa.",
    longDescription: "A Cortina Rolô Blackout destaca-se como o modelo de rolo de maior preferência nacional devido à sua incrível funcionalidade e facilidade absoluta de manutenção. Seu tecido de alta tecnologia possui revestimento vinílico triplo no verso, bloqueando totalmente (100%) a passagem de luz externa, além de criar uma excelente barreira térmica contra o calor ou frio que entra pelos vidros. Quando recolhida, o tecido enrola-se de forma compacta em um tubo de alumínio superior.",
    image: "https://product-hub-prd.madeiramadeira.com.br/941677960/images/f265afa6-d4df-4547-b952-57fa32bc91b36a29a74282fb5bde91bkbranca.jpg",
    features: ["Bloqueio solar absoluto de 100% com vedação total", "Material vinílico triplo impermeável e super durável", "Fácil de limpar, ideal para pessoas alérgicas"],
    specifications: ["Composição: Poliéster e fibra de vidro revestidos com PVC", "Espessura do tecido: 0.40mm de alta durabilidade", "Acionamento: Comando manual por corrente de polímero ou motorizado por botão/Alexa", "Limpeza: Bucha macia com detergente neutro e água, secagem rápida"],
    idealFor: ["Quartos de casal, de solteiro e dormitórios infantis", "Salas de TV, home theater e salas de videoconferência", "Salas comerciais com forte incidência direta do sol"]
  },
  {
    id: "p13",
    name: "Persiana Romana Tela Solar",
    slug: "produto-persiana-romana-tela-solar",
    category: "Persiana Romana Tela Solar",
    description: "O caimento sofisticado em gomos horizontais confeccionado em tecido tecnológico de tela solar. Excelente proteção térmica e visual refinado.",
    longDescription: "A Persiana Romana Tela Solar reúne as dobras estéticas charmosas do modelo Romano com as propriedades de controle solar incomparáveis da tela screen tecnológica de PVC com poliéster. À medida que se recolhe para o topo, ela exibe listras volumosas e elegantes que trazem uma sensação acolhedora e clássica de alta decoração para o ambiente. A tela solar filtra a luz solar excessiva e impede o superaquecimento do cômodo.",
    image: "https://tse2.mm.bing.net/th/id/OIP.afM-bLsLooLIiToemXf0YwHaD7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    features: ["Efeito de dobras horizontais clássicas sofisticadas", "Bloqueio inteligente de até 95% do calor solar radiante", "Proteção solar avançada mantendo a visibilidade exterior"],
    specifications: ["Material: Tela solar screen de alta tecnologia (Poliéster e PVC)", "Fator de abertura: 3% ou 5% (sob medida)", "Hastes de sustentação: Alumínio leve embutido nas dobras", "Controle: Comando manual de nylon reforçado ou automação Wi-Fi"],
    idealFor: ["Varandas gourmet e cozinhas residenciais modernas", "Escritórios de advocacia, clínicas e consultórios elegantes", "Salas de estar voltadas para áreas ensolaradas de Curitiba"]
  },
  {
    id: "p14",
    name: "Persiana Vertical Blackout",
    slug: "produto-persiana-vertical-blackout",
    category: "Persiana Vertical Blackout",
    description: "Lâminas verticais com revestimento em blackout para grandes vãos que necessitam de escurecimento total com ajuste direcional flexível.",
    longDescription: "Ideal para quartos de casal com grandes portas-janela ou salas de conferência amplas, a Persiana Vertical Blackout une o controle angular preciso das lâminas verticais com o bloqueio absoluto de luminosidade (100%). Suas lâminas recebem tratamento especial emborrachado na parte traseira que impede integralmente a passagem da luz solar. O trilho em alumínio anodizado garante um deslizamento suave e ultra-silencioso.",
    image: "https://tse4.mm.bing.net/th/id/OIP.Qb9o8-8QNHjzxePJN011rwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    features: ["Bloqueio absoluto de 100% de luz solar direta", "Giro angular flexível para controle direcional do sol", "Ideal para vãos altos ou portas de correr"],
    specifications: ["Tecido: Lâminas de poliéster com resina blackout emborrachada", "Largura das lâminas: 90mm padrão com acabamento perfeito nas bordas", "Trilho: Alumínio anodizado pesado com rodízios de alto impacto", "Controle: Corrente plástica para rotação e cordão para recolhimento"],
    idealFor: ["Salas de projeção de vídeo corporativas", "Quartos com portas balcão ou janelas panorâmicas", "Consultórios médicos que necessitam de privacidade instantânea"]
  },
  {
    id: "p15",
    name: "Rolô Tela Solar",
    slug: "produto-rolo-tela-solar",
    category: "Rolô Tela Solar",
    description: "Filtra o calor e os raios UV em até 95%, mantendo a luminosidade agradável e permitindo visibilidade total do ambiente externo.",
    longDescription: "A Cortina Rolô Tela Solar é o produto ideal para proteção térmica e controle de raios solares no ambiente residencial ou corporativo. Confeccionada com trama de filamento de fibra de vidro ou poliéster revestido com PVC, ela protege carpetes, sofás, assoalhos e eletrodomésticos do desgaste solar agressivo, além de reduzir em até 90% a temperatura de entrada.",
    image: "https://www.neoluxpersianas.com.br/upload/service/FLlfKpJzU7UXSuY3Vgsv4ChSG1Y9TpoeFPNKRg71.jpeg",
    features: ["Excelente isolamento térmico (reduz em até 90% o calor)", "Trama tecnológica com fator de abertura de 1%, 3% ou 5%", "Proteção contra raios UV prejudiciais aos móveis"],
    specifications: ["Tecido: Tramado screen de poliéster e PVC importado de alta solidez", "Fator de abertura: 5% (médio), 3% (fechado) ou 1% (fechamento severo)", "Tubo superior: Alumínio trefilado reforçado de 38mm ou 47mm de diâmetro", "Limpeza: Pano úmido, espanador ou lavagem técnica com equipe Nova's"],
    idealFor: ["Sacadas envidraçadas e áreas gourmets de condomínios", "Cozinhas modernas e lavanderias ensolaradas", "Escritórios, recepções e salas comerciais com computadores"]
  },
  {
    id: "p16",
    name: "Persiana Romana Translúcida",
    slug: "produto-persiana-romana-translucido",
    category: "Persiana Romana Translúcido",
    description: "O refinado recolhimento em dobras sucessivas em tecidos nobres translúcidos como linho. Visual suave, poético e muito elegante para salas de jantar.",
    longDescription: "A Persiana Romana Translúcida confere aos cômodos sociais uma atmosfera poética, suave e rica em detalhes estéticos. Confeccionada com tecidos sofisticados (linho, algodão trabalhado ou poliéster texturizado de luxo), ela permite a passagem de uma luminosidade suave que valoriza toda a mobília do espaço. Suas listras horizontais e o caimento em gomos agregam volume e transformam janelas comuns em verdadeiras obras de arte decorativas.",
    image: "https://acdn-us.mitiendanube.com/stores/005/970/332/products/f06d1574beab16a371afd70c5282b588-5540c42ad17a471de217454644440971-480-0.webp",
    features: ["Gomos horizontais elegantes de caimento sofisticado", "Filtra a luz forte de forma homogênea e harmônica", "Tecidos nobres de alto padrão decorativo (efeito linho)"],
    specifications: ["Tecido: Fibras sintéticas nobres com toque e visual de algodão/linho", "Mecanismo: Comando por corrente redutora metálica ou em policarbonato", "Hastes internas: Polímero flexível invisível para costuras sem marcas", "Customização: Disponível com ou sem forro protetor traseiro"],
    idealFor: ["Salas de jantar requintadas e livings sociais", "Suítes de casal e dormitórios de hóspedes aconchegantes", "Clinicas estéticas e salas de atendimento acolhedoras"]
  },
  {
    id: "p17",
    name: "Persiana Vertical PVC",
    slug: "produto-persiana-vertical-pvc",
    category: "Persiana Vertical PVC",
    description: "O modelo mais higiênico e durável, totalmente imune à umidade e poeira profunda. Ideal para consultórios, hospitais, clínicas e escritórios comerciais.",
    longDescription: "A Persiana Vertical de PVC é a escolha definitiva para ambientes que requerem assepsia impecável, altíssima durabilidade e total praticidade na rotina. Fabricada com lâminas de PVC rígido de alto impacto, ela não possui fibras têxteis, o que impede totalmente o acúmulo de poeira profunda, fungos, mofo, ácaros e odores. É 100% lavável e imune a vapores d'água ou respingos de umidade.",
    image: "https://tse2.mm.bing.net/th/id/OIP.cTgc5Hrsx_eiomTNbKIT5wHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    features: ["Lâminas de PVC rígido de altíssima resistência a impactos", "Superfície 100% lavável e imune à umidade e poeira", "Controle de luminosidade dinâmico e flexível"],
    specifications: ["Material: PVC sólido virgem com proteção anti-ressecamento e UV", "Largura das lâminas: 90mm de espessura uniforme", "Trilho superior: Alumínio trefilado reforçado com engrenagens autolubrificadas", "Acionamento: Sistema de subida/recolhimento independente do giro angular"],
    idealFor: ["Consultórios médicos, odontológicos e laboratórios", "Clínicas de estética, hospitais e salas de cirurgia", "Escritórios corporativos, escolas e repartições públicas"]
  },
  {
    id: "p18",
    name: "Rolô Translúcida",
    slug: "produto-rolo-translucida",
    category: "Rolô Translúcida",
    description: "Design reto e minimalista com tecido translúcido que difunde a luz natural de forma agradável e charmosa em ambientes integrados.",
    longDescription: "A Cortina Rolô Translúcida destaca-se pelo seu desenho plano e minimalista, operando como uma barreira leve que clareia o cômodo suavemente, sem reflexos fortes. O seu tecido especial protege sua privacidade impedindo a visão interna do espaço de quem passa na rua, enquanto mantém o cômodo iluminado e extremamente agradável no dia a dia.",
    image: "https://www.facilpersianas.com.br/cdn/shop/files/rolo-translucida-estampada-xadrez-1.webp?v=1778780182&width=713",
    features: ["Design reto, limpo e extremamente discreto", "Garante privacidade sem escurecer o ambiente", "Filtração de raios solares nocivos de forma uniforme"],
    specifications: ["Tecido: Mistura especial de poliéster e viscose translúcida", "Eixo superior: Alumínio de alta resistência para evitar frestas", "Acionamento: Mecanismo manual por cordão de nylon de tração macia", "Garantia: Total contra problemas de montagem ou fixação técnica"],
    idealFor: ["Cozinhas integradas e lavanderias modernas", "Banheiros residenciais e lavabos elegantes", "Salas de jantar, varandas internas e recepções comerciais"]
  }
];

// Services list
export const SERVICES: Service[] = [
  {
    id: "s1",
    name: "Instalação Profissional",
    description: "Instalação especializada realizada por técnicos capacitados e com ferramentas de precisão. Garantimos que sua persiana fique perfeitamente alinhada, com funcionamento suave e sem danos à sua estrutura.",
    details: ["Agendamento pontual e flexível", "Limpeza pós-serviço inclusa", "Garantia de 1 ano de fixação técnica", "Instaladores com treinamento de cortesia"],
    image: "https://img.novaspersianascuritiba.com.br/venezianas-persianas-novas.webp"
  },
  {
    id: "s2",
    name: "Higienização & Lavagem Especializada",
    description: "A lavagem correta prolonga a vida útil dos tecidos, remove poeira profunda, fungos, ácaros e restaura a cor original das persianas. Utilizamos produtos neutros específicos que não danificam as fibras.",
    details: ["Retirada e reinstalação inclusas", "Secagem natural à sombra controlada", "Remoção de odores e poeira alergênica", "Higienização de mecanismos internos"],
    image: "https://img.novaspersianascuritiba.com.br/tecnico-persianas-e-venezianas.webp"
  },
  {
    id: "s3",
    name: "Consertos & Manutenção de Mecanismos",
    description: "Não troque a sua persiana por qualquer falha de cordão ou engrenagem! Realizamos consertos rápidos em mechanisms de subida, troca de comandos, substituição de lâminas danificadas e trilhos.",
    details: ["Troca de cordões, correntes e freios", "Substituição de lâminas de PVC e madeira", "Ajustes de altura e largura de tecidos", "Peças de reposição originais multimarcas"],
    image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEVK11qO7O-gzOMYuc3oVbM-Ka61OI8hST_PF0EaA2qOtfm5pSXpHxjCiDkFTYqDUntY5wC2RDVEAfw9RH_68T-hsqxtF5bT5IbMToRdq4uNIasmzm83e0ReNfaXaPqB7IDgU0Q=s680-w680-h510-rw"
  }
];
