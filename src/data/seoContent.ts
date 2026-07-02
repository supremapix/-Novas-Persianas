/**
 * SEO / GEO Content Generator Engine - Nova's Persianas Curitiba
 * Generates rich, highly optimized, non-repetitive, localized landing page content.
 * Guarantees a minimum of 1500 words of authentic, high-value text for search engines and AI models.
 */

export interface PageMetadata {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  intro: string;
  content: string;
  fullBodyText: string; // Dynamic rich content to guarantee 1500+ words
  faq: Array<{ q: string; a: string }>;
  showProducts: boolean;
  categoryFilter: string;
  breadcrumbs: Array<{ name: string; url: string }>;
}

// Map of neighborhoods in Curitiba with specific characteristics for precise local SEO/GEO targeting
const NEIGHBORHOODS: Record<string, { name: string; type: string; details: string; landmarks: string }> = {
  hauer: {
    name: "Hauer",
    type: "comercial e residencial",
    details: "nosso showroom e fábrica própria estão situados aqui, garantindo atendimento instantâneo e entregas expressas para residências e empresas",
    landmarks: "perto do Terminal do Hauer e da Rua Frei Henrique de Coimbra"
  },
  boqueirao: {
    name: "Boqueirão",
    type: "residencial e industrial",
    details: "bairro de forte tradição residencial com amplas janelas e galpões comerciais que exigem soluções robustas em persianas verticais e tela solar",
    landmarks: "próximo ao Terminal do Carmo e às grandes avenidas de comércio local"
  },
  portao: {
    name: "Portão",
    type: "residencial denso e vertical",
    details: "uma das regiões mais populosas de Curitiba com centenas de novos condomínios verticais de apartamentos que demandam persianas rolô blackout e double vision sob medida",
    landmarks: "perto do Shopping Palladium, Shopping Ventura e Igreja do Portão"
  },
  "agua-verde": {
    name: "Água Verde",
    type: "residencial nobre e vertical",
    details: "bairro tradicional com edifícios de alto padrão e apartamentos modernos, perfeito para cortinas romanas em linho e persianas motorizadas integradas à Alexa",
    landmarks: "próximo à Praça do Japão, Arena da Baixada e Clube Curitibano"
  },
  batel: {
    name: "Batel",
    type: "residencial de altíssimo padrão e comercial premium",
    details: "região mais nobre da cidade com coberturas duplex, escritórios corporativos elegantes e clínicas médicas requintadas que buscam persianas de madeira de 50mm e modelos automatizados importados",
    landmarks: "perto do Shopping Pátio Batel, Shopping Novo Batel e Avenida Batel"
  },
  centro: {
    name: "Centro",
    type: "histórico, residencial e comercial denso",
    details: "edifícios históricos e modernos com janelas de variados tamanhos fora do padrão, exigindo fabricação milimétrica sob medida para controle de ruído, calor e luz do sol",
    landmarks: "próximo à Rua XV de Novembro, Praça Tiradentes e Universidade Federal do Paraná"
  },
  xaxim: {
    name: "Xaxim",
    type: "estritamente residencial familiar",
    details: "bairro com forte crescimento de sobrados modernos e residências de médio padrão, ideais para persianas horizontais de alumínio em cozinhas e rolô tela solar em churrasqueiras gourmets",
    landmarks: "perto da Linha Verde Curitibana e Rua Francisco Derosso"
  },
  pinheirinho: {
    name: "Pinheirinho",
    type: "comercial, residencial e industrial",
    details: "região em plena expansão residencial e com forte presença de comércios que necessitam de persianas baratas, duráveis e funcionais de fácil higienização",
    landmarks: "próximo ao Terminal do Pinheirinho e Hospital do Idoso"
  },
  "novo-mundo": {
    name: "Novo Mundo",
    type: "residencial e comercial",
    details: "bairro estratégico com residências amplas e condomínios fechados novos que buscam conforto térmico superior contra as frentes frias tradicionais de Curitiba",
    landmarks: "perto do Shopping Palladium e ao longo da rápida sentido Centro"
  },
  "capao-raso": {
    name: "Capão Raso",
    type: "residencial familiar e de classe média",
    details: "região com crescimento acelerado de edifícios residenciais e comerciais, demandando instalações de persianas rolô práticas e de fácil manutenção",
    landmarks: "próximo à Faculdade Santa Cruz e ao Terminal do Capão Raso"
  },
  uberaba: {
    name: "Uberaba",
    type: "residencial e logístico",
    details: "bairro de fácil acesso que conta com condomínios fechados horizontais que priorizam segurança, privacidade e controle de luminosidade em salas de TV e home office",
    landmarks: "perto da Avenida das Torres e divisa com São José dos Pinhais"
  },
  reboucas: {
    name: "Rebouças",
    type: "industrial histórico, universitário e comercial",
    details: "polo de agências de tecnologia, estúdios de design, universidades e clínicas que exigem persianas de rolo translúcidas ou persianas de alumínio para um visual estritamente industrial e contemporâneo",
    landmarks: "perto da UniCuritiba, UTFPR, Estação Shopping e Teatro Paiol"
  },
  "jardim-das-americas": {
    name: "Jardim das Américas",
    type: "residencial nobre e universitário",
    details: "bairro de alto padrão caracterizado por grandes casas e sobrados com janelas imponentes, perfeitos para persianas blackout automatizadas e motorizadas",
    landmarks: "próximo ao Centro Politécnico da UFPR e Shopping Jardim das Américas"
  },
  "santa-felicidade": {
    name: "Santa Felicidade",
    type: "gastronômico, turístico e residencial nobre",
    details: "famoso bairro italiano com belíssimas mansões, restaurantes de grande porte e residências de alto padrão que demandam persianas de madeira natural de 50mm e romanas de linho",
    landmarks: "perto dos tradicionais restaurantes Madalosso, Família Fadanelli e Portal de Santa Felicidade"
  },
  cic: {
    name: "CIC (Cidade Industrial de Curitiba)",
    type: "industrial de grande porte e residencial amplo",
    details: "maior bairro de Curitiba, abrigando grandes escritórios corporativos e áreas fabris que necessitam de persianas verticais de PVC de alta durabilidade e baixo custo",
    landmarks: "perto das principais indústrias da Linha Verde e rodovias de acesso"
  },
  cabral: {
    name: "Cabral",
    type: "residencial vertical de luxo e comercial sofisticado",
    details: "bairro elegante com edifícios residenciais de altíssimo padrão caracterizados por amplas sacadas de vidro que exigem projetos integrados de persianas rolô tela solar screen 3%",
    landmarks: "perto do campus de Artes da UFPR, Avenida Paraná e Juvevê"
  },
  bacacheri: {
    name: "Bacacheri",
    type: "residencial familiar e militar",
    details: "bairro tradicional do norte de Curitiba com excelente infraestrutura residencial e comercial de médio-alto padrão, ideal para persianas rolô e cortinas romanas modernas",
    landmarks: "próximo ao Parque Bacacheri e Aeroporto do Bacacheri"
  }
};

// Map of product-specific terms
const PRODUCTS_MAP: Record<string, { name: string; synonym: string; description: string; benefits: string; washCare: string }> = {
  rolo: {
    name: "Persiana Rolô",
    synonym: "cortina de rolo",
    description: "design minimalista caracterizado pelo recolhimento total do tecido em torno de um tubo superior de alumínio de alta resistência",
    benefits: "oferece visual totalmente limpo, proteção contra poeira na versão com bando de alumínio e controle térmico eficiente",
    washCare: "fácil limpeza com aspirador de pó e pano levemente úmido. Altamente durável e resistente a vincos"
  },
  romana: {
    name: "Persiana Romana",
    synonym: "cortina romana em gomos",
    description: "sistema clássico que se dobra horizontalmente em gomos consecutivos de tecido conforme é suspensa, unindo a elegância da cortina ao controle da persiana",
    benefits: "perfeita para criar ambientes sofisticados e acolhedores, muito indicada para salas de estar, quartos e bibliotecas em Curitiba",
    washCare: "tecido com tratamento antiestático. Lavagem profissional recomendada a cada 18 meses para preservar as varetas internas"
  },
  horizontal: {
    name: "Persiana Horizontal",
    synonym: "persiana horizontal de lâminas",
    description: "modelo tradicional de lâminas ajustáveis de 25mm ou 50mm, permitindo inclinação de até 180° para controle fino de iluminação e privacidade",
    benefits: "ideal para escritórios, cozinhas e banheiros devido ao ajuste milimétrico de luz. Disponível em ligas nobres de alumínio ou madeira natural",
    washCare: "limpeza prática com espanador de pó ou aspirador de baixa potência. Resistente à gordura e vapor no modelo de alumínio"
  },
  vertical: {
    name: "Persiana Vertical",
    synonym: "persiana vertical de trilho",
    description: "clássica persiana com lâminas verticais giratórias suspensas em trilho de alumínio de alta durabilidade, ideal para vãos muito largos e portas-janelas",
    benefits: "excelente controle direcional de luz, deslizamento suave e melhor custo-benefício para cobrir grandes áreas envidraçadas",
    washCare: "lâminas de PVC impermeável altamente higiênicas, laváveis individualmente em casa com água e sabão neutro"
  },
  "double-vision": {
    name: "Persiana Double Vision",
    synonym: "persiana rainbow ou rolo dupla",
    description: "modelo inovador com faixas horizontais translúcidas e opacas que deslizam paralelamente, criando efeitos alternados de luz e privacidade",
    benefits: "a queridinha da decoração moderna de Curitiba. Oferece controle único de luminosidade sem precisar recolher totalmente a peça",
    washCare: "tecido de poliéster resinado de alta qualidade. Requer espanador de pó regular e cuidado ao manusear as correntes laterais"
  },
  painel: {
    name: "Persiana Painel",
    synonym: "cortina painel japonesa",
    description: "sistema de painéis verticais largos de tecido que correm lateralmente em trilhos sobrepostos, indicados para portas de sacada e divisões internas",
    benefits: "perfeito para transições de ambientes e grandes janelas de sacada de apartamentos. Evita frestas laterais de iluminação",
    washCare: "limpeza semelhante ao modelo rolô, bastando aspirar as folhas de tecido e usar pano úmido se necessário"
  },
  blackout: {
    name: "Persiana Blackout",
    synonym: "persiana blecaute 100% escura",
    description: "tecido emborrachado ou vinílico com tripla camada de poliuretano projetado para vedar completamente a passagem de raios solares no ambiente",
    benefits: "ideal para quartos, salas de home theater e escritórios que usam projetores. Melhora o sono e reduz significativamente o calor",
    washCare: "material 100% lavável e impermeável, extremamente resistente ao acúmulo de poeira e ácaros"
  },
  aluminio: {
    name: "Persiana de Alumínio",
    synonym: "persiana horizontal metálica",
    description: "fabricada com ligas de alumínio de alta resiliência e pintura eletrostática que previne ferrugem e descascamento sob sol e umidade",
    benefits: "resistência total a ambientes úmidos como cozinhas e banheiros. Extremamente leve e moderna",
    washCare: "totalmente lavável, de fácil limpeza semanal e excelente vida útil sem deformação de lâminas"
  },
  pvc: {
    name: "Persiana de PVC",
    synonym: "persiana vertical plástica",
    description: "estrutura sólida de PVC com tratamento anti-UV que previne o amarelamento e ressecamento causados pelo sol constante",
    benefits: "100% higiênica e antialérgica. Não acumula ácaros ou mofo, ideal para clínicas médicas e quartos infantis",
    washCare: "superfície lisa e impermeável de limpeza imediata. Pode ser lavada com água diretamente"
  },
  madeira: {
    name: "Persiana de Madeira",
    synonym: "persiana de madeira natural de 50mm",
    description: "confeccionada com madeira nobre de reflorestamento com secagem em estufa e tratamento contra cupins e umidade",
    benefits: "agrega sofisticação luxuosa, excelente isolamento acústico e térmico natural para salas executivas e de estar",
    washCare: "limpeza apenas com lustra-móveis ou pano seco. Evitar contato direto com umidade excessiva"
  },
  automatica: {
    name: "Persiana Automática",
    synonym: "persiana automatizada inteligente",
    description: "motorização integrada com tubos de enrolamento equipados com motores tubulares silenciosos acionados por controle ou sensores",
    benefits: "praticidade incrível, elimina cordões e correntes penduradas (segurança total para pets e crianças), ideal para idosos",
    washCare: "manutenção zero no motor, apenas limpeza padrão do tecido da persiana correspondente"
  },
  motorizada: {
    name: "Persiana Motorizada",
    synonym: "persiana elétrica sob medida",
    description: "sistema motorizado de alta performance integrável com sistemas de automação residencial como Alexa, Google Home e automação Control4",
    benefits: "programação de horários para abrir/fechar, controle de voz de qualquer lugar do mundo e valorização do imóvel",
    washCare: "motores de alta durabilidade com garantia de 5 anos. Dispensa lubrificação ou fiações aparentes"
  }
};

export function generateSeoContent(route: string): PageMetadata {
  const cleanRoute = route.replace(/^\/|\/$/g, "");
  
  // Initialize default metadata
  let title = "Nova's Persianas Curitiba | Fábrica Sob Medida no Hauer";
  let subtitle = "A melhor loja de cortinas e persianas de Curitiba com fabricação própria, preço de fábrica e medição grátis";
  let description = "Compre cortinas e persianas sob medida em Curitiba direto da fábrica Nova's Persianas. Atendimento técnico especializado no Hauer, Batel, Portão e região com até 10x sem juros.";
  let heroImage = "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHTFQj6NuJDjW8sfkkHIhJ4Kw-5EQSw60Fxeqr2IjTc4wFsZUa1i0Jqy219iTSuQhiDH33kJJ45ac9bwZE19jA7i-RRz94ibg7y-SUJ3CjYvlS017X4Av4uLy0c-lwXvPFdZYQ=s680-w680-h510-rw";
  let intro = "Seja muito bem-vindo à Nova's Persianas Curitiba! Se você está buscando transformar seus ambientes residenciais ou comerciais com persianas sob medida de qualidade de fábrica, durabilidade extrema e acabamento de alto padrão, você acaba de encontrar a parceira ideal em Curitiba e região metropolitana.";
  let content = "Com uma trajetória consolidada e sede física no tradicional bairro Hauer, nos dedicamos a projetar e fabricar persianas que resolvem problemas reais: controlam frestas de luz incômodas, protegem seus móveis e pisos de madeira contra desbotamento pelos raios UV, proporcionam isolamento acústico e privacidade total. Nossas soluções sob medida garantem encaixe milimétrico para que seus espaços fiquem visualmente amplos e confortáveis.";
  let categoryFilter = "all";
  let showProducts = true;

  // CLASSIFICATION 1: NEIGHBORHOOD SEO PAGES (e.g. /persianas-hauer, /persianas-batel)
  const isNeighborhoodRoute = cleanRoute.startsWith("persianas-") && !cleanRoute.endsWith("-curitiba") && !cleanRoute.includes("para-") && !cleanRoute.includes("sob-medida") && !cleanRoute.includes("promocao") && !cleanRoute.includes("preco") && !cleanRoute.includes("baratas") && !cleanRoute.includes("residenciais") && !cleanRoute.includes("comerciais") && !cleanRoute.includes("modernas") && !cleanRoute.includes("personalizadas");
  
  if (isNeighborhoodRoute) {
    const neighborhoodKey = cleanRoute.replace("persianas-", "");
    const neighborhood = NEIGHBORHOODS[neighborhoodKey] || {
      name: neighborhoodKey.charAt(0).toUpperCase() + neighborhoodKey.slice(1).replace(/-/g, " "),
      type: "residencial e comercial",
      details: "atendimento residencial focado em condomínios fechados, sobrados e apartamentos modernos na região",
      landmarks: "atendimento personalizado em domicílio com mostruário completo"
    };

    title = `Persianas no ${neighborhood.name} Curitiba | Sob Medida Nova's`;
    subtitle = `Projetos de cortinas e persianas personalizadas para residências e escritórios no ${neighborhood.name}`;
    description = `Procurando cortinas e persianas sob medida no bairro ${neighborhood.name} em Curitiba? A Nova's Persianas oferece medição com laser gratuita em domicílio, mostruários físicos e instalação sem sujeira.`;
    heroImage = "https://www.neoflexpersianas.com.br/images/produto-02.webp";
    
    intro = `Se você reside ou possui um empreendimento comercial no bairro ${neighborhood.name} em Curitiba, sabe a importância de contar com fornecedores locais de confiança. A Nova's Persianas oferece uma experiência completa e sem estresse para quem quer instalar persianas sob medida no ${neighborhood.name}. Nós enviamos um especialista técnico até o seu endereço para coletar as medidas milimetricamente e apresentar nossos catálogos de tecidos sem compromisso.`;
    
    content = `Como o bairro ${neighborhood.name} possui características de perfil ${neighborhood.type}, nós desenvolvemos soluções exclusivas que se alinham perfeitamente ao estilo de vida da região. Seja para grandes coberturas envidraçadas ${neighborhood.landmarks}, ou para apartamentos compactos que precisam de otimização de espaço com persianas rolô ou double vision, nossa fábrica própria garante preço justo, acabamento de costura impecável e instalação profissional limpa e ágil.`;
  }

  // CLASSIFICATION 2: PRODUCT-SPECIFIC SEO PAGES (e.g. /persiana-rolo-curitiba, /persiana-madeira-curitiba)
  const isProductRoute = cleanRoute.startsWith("persiana-") && cleanRoute.endsWith("-curitiba");
  if (isProductRoute) {
    const productKey = cleanRoute.replace("persiana-", "").replace("-curitiba", "");
    const product = PRODUCTS_MAP[productKey] || {
      name: productKey.charAt(0).toUpperCase() + productKey.slice(1).replace(/-/g, " "),
      synonym: `cortina ${productKey}`,
      description: "design funcional de alta durabilidade para controle de luz e calor sob medida",
      benefits: "perfeita para modernizar o visual de salas, quartos e escritórios com alto desempenho térmico",
      washCare: "limpeza simples com espanador de pó ou aspiração leve periódica"
    };

    title = `${product.name} Curitiba | Modelos de Fábrica Sob Medida`;
    subtitle = `Descubra a elegância, durabilidade e praticidade da ${product.name} sob medida para sua residência ou empresa`;
    description = `Adquira a autêntica ${product.name} em Curitiba diretamente da fábrica Nova's Persianas. Projetos personalizados com mostruário completo, medição grátis e até 1 ano de garantia de instalação.`;
    heroImage = productKey === "madeira" 
      ? "https://71026.cdn.simplo7.net/static/71026/sku/persianas-persiana-madeira-persiana-horizontal-de-madeira-natural-branca-50mm-com-fita--p-1631664913801.jpg"
      : productKey === "rolo" || productKey === "blackout"
      ? "https://images.tcdn.com.br/img/img_prod/1175294/persiana_rolo_tela_solar_5_1_60m_x_1_60m_preto_bella_janela_6045_1_ef36aeb9847d26324b3f53fa5d6325f5.jpg"
      : "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHTFQj6NuJDjW8sfkkHIhJ4Kw-5EQSw60Fxeqr2IjTc4wFsZUa1i0Jqy219iTSuQhiDH33kJJ45ac9bwZE19jA7i-RRz94ibg7y-SUJ3CjYvlS017X4Av4uLy0c-lwXvPFdZYQ=s680-w680-h510-rw";
    
    intro = `A escolha pelo modelo de ${product.name} é excelente para quem valoriza ${product.description}. Conhecida também como ${product.synonym}, esta peça se destaca no mercado decorativo de Curitiba por proporcionar uma transição perfeita entre luminosidade natural e privacidade. Na Nova's Persianas, produzimos este modelo sob medida utilizando eixos de alumínio reforçado que evitam o desgaste do tecido nas laterais.`;
    
    content = `Os benefícios principais da ${product.name} incluem ${product.benefits}. Ela é muito indicada tanto para salas residenciais aconchegantes quanto para escritórios corporativos elegantes. Em relação à limpeza e conservação, trata-se de um produto muito prático: ${product.washCare}. Nossa equipe técnica realiza a instalação com buchas de alta fixação mecânica de modo que a persiana permaneça perfeitamente nivelada e suave de operar por muitos anos.`;
    
    categoryFilter = product.name.replace("Persiana ", "").trim();
  }

  // CLASSIFICATION 3: INTENT / SEARCH QUERIES (e.g. /quanto-custa-uma-persiana, /persianas-para-sala)
  const isIntentRoute = !isNeighborhoodRoute && !isProductRoute && (
    cleanRoute.includes("quanto-custa") || 
    cleanRoute.includes("onde-comprar") || 
    cleanRoute.includes("qual-a-melhor") || 
    cleanRoute.startsWith("persianas-para-") ||
    cleanRoute.startsWith("persianas-") || 
    cleanRoute.startsWith("loja-de-") || 
    cleanRoute.startsWith("empresa-de-") ||
    cleanRoute.startsWith("orcamento-") ||
    ["persianas-curitiba", "persianas-sob-medida-curitiba", "orcamento-persianas-curitiba", "manutencao-de-persianas-curitiba", "instalacao-de-persianas-curitiba"].includes(cleanRoute)
  );

  if (isIntentRoute) {
    if (cleanRoute.includes("quanto-custa") || cleanRoute.includes("preco") || cleanRoute.includes("baratas")) {
      title = "Quanto Custa uma Persiana Curitiba | Preços e Promoções de Fábrica";
      subtitle = "Tabela de preços de persianas sob medida no m², fatores de variação e descontos no PIX";
      description = "Descubra quanto custa instalar persianas sob medida em Curitiba. Preços direto da fábrica Nova's Persianas no Hauer, parcelamento em 10x sem juros e orçamentos grátis.";
      intro = "Uma das maiores dúvidas ao planejar a decoração ou reforma de uma casa ou escritório em Curitiba é: afinal, quanto custa uma persiana sob medida de alta qualidade? O preço de uma persiana é calculado por metro quadrado (m²) e varia principalmente de acordo com o modelo selecionado (Rolô, Romana, Madeira, Double Vision, Vertical), o tipo de acionamento (manual ou motorizado) e a especificação do tecido (translúcido, blackout ou tela solar screen).";
      content = "Na Nova's Persianas, trabalhamos com uma política de preços altamente competitiva e transparente por sermos fabricantes. Eliminamos intermediários para entregar persianas direto para o consumidor final em Curitiba. Oferecemos ótimos descontos para pagamentos à vista via PIX ou facilitamos em até 10 vezes sem juros no cartão de crédito. Além disso, nosso serviço de medição técnica em domicílio e consultoria estética com catálogo físico são totalmente gratuitos em Curitiba.";
      showProducts = true;
    } else if (cleanRoute.includes("onde-comprar") || cleanRoute.includes("loja-de") || cleanRoute.includes("empresa-de")) {
      title = "Onde Comprar Persianas em Curitiba | Showroom no Bairro Hauer";
      subtitle = "Conheça a Nova's Persianas: Showroom com mostruários reais e consultoria presencial";
      description = "Procurando a melhor loja para comprar persianas sob medida em Curitiba? Visite o showroom da Nova's Persianas na Rua Frei Henrique de Coimbra, 1750 - Hauer ou solicite visita técnica grátis.";
      intro = "Se você está se perguntando onde comprar persianas sob medida em Curitiba com total segurança, garantia estendida e mostruário real de tecidos, a Nova's Persianas é o seu destino ideal. Com mais de duas décadas de atuação no mercado curitibano de proteção solar, nossa sede física está situada no tradicional bairro Hauer, na Rua Frei Henrique de Coimbra, 1750. Um espaço dedicado a apresentar o que há de mais moderno em design de interiores.";
      content = "Nossa loja oferece atendimento próximo e atencioso, muito recomendado para famílias, idosos e profissionais de arquitetura que não abrem mão de ver e sentir a textura real do tecido antes de comprar. Se você não puder vir ao nosso showroom, não se preocupe: nosso veículo de atendimento móvel leva todos os mostruários até sua residência ou empresa em qualquer bairro de Curitiba, com medição eletrônica a laser gratuita e sem qualquer compromisso de compra.";
      showProducts = true;
    } else if (cleanRoute.includes("para-sala") || cleanRoute.includes("para-quarto") || cleanRoute.includes("para-cozinha") || cleanRoute.includes("para-apartamento") || cleanRoute.includes("para-escritorio") || cleanRoute.includes("para-clinicas")) {
      const roomType = cleanRoute.includes("sala") ? "Salas de Estar e Jantar" :
                       cleanRoute.includes("quarto") ? "Quartos e Suítes" :
                       cleanRoute.includes("cozinha") ? "Cozinhas e Áreas de Serviço" :
                       cleanRoute.includes("apartamento") ? "Varandas e Apartamentos" :
                       cleanRoute.includes("escritorio") ? "Escritórios e Home Offices" : "Clínicas e Consultórios Médicos";

      title = `Persianas para ${roomType} Curitiba | Modelos Sob Medida`;
      subtitle = `Soluções ideais de controle de luz, conforto térmico e design elegante para seu ambiente`;
      description = `Encontre a persiana ideal para sua ${roomType} em Curitiba. Modelos blackout, tela solar e translúcidos sob medida com medição grátis e alta costura pela Nova's Persianas.`;
      intro = `Decorar e climatizar uma ${roomType} exige a escolha correta do modelo de persiana. Cada ambiente possui necessidades funcionais e térmicas diferentes. Em Curitiba, onde as frentes frias e a alta umidade são frequentes, escolher tecidos laváveis com tratamento térmico e anti-fungo é fundamental para garantir a saúde da família e a conservação dos móveis.`;
      content = `Para as ${roomType}, a Nova's projeta desde persianas rolô blackout de vedação total de luz para um sono reparador, até persianas rolô de tela solar screen 3% para varandas gourmets e escritórios, que protegem os móveis dos raios ultravioleta mantendo a visibilidade externa. Se você busca elegância, os modelos romana de linho ou de madeira de 50mm trazem sofisticação extrema com acionamentos manuais leves ou motorizados com comando de voz via Alexa.`;
      showProducts = true;
    } else if (cleanRoute.includes("manutencao") || cleanRoute.includes("conserto") || cleanRoute.includes("reparo") || cleanRoute.includes("troca")) {
      title = "Conserto e Manutenção de Persianas Curitiba | Lavagem Profissional";
      subtitle = "Substituição de cordões, comandos, trilhos e higienização profunda bactericida";
      description = "Sua persiana quebrou ou está suja? Realizamos reforma, conserto e lavagem de persianas multimarcas em Curitiba com retirada e entrega ágeis. Ligue já!";
      intro = "Antes de descartar sua persiana sob medida por estar travada, suja ou com os cordões arrebentados, fale com a equipe de assistência técnica da Nova's Persianas. Nós somos especialistas na manutenção, reforma e higienização profunda de persianas de todas as marcas nacionais e importadas em Curitiba, resgatando a beleza e o perfeito funcionamento do produto por uma fração do preço de um novo.";
      content = "Nosso serviço de higienização profissional utiliza detergentes antibactericidas específicos que eliminam ácaros, mofo e fungos acumulados nas tramas do tecido, sendo fundamental para pessoas com rinite ou problemas respiratórios, muito comuns no clima úmido de Curitiba. Retiramos as persianas em seu endereço com todo cuidado, efetuamos a lavagem química e secagem natural em nossa estufa, substituímos acessórios quebrados (garras, comandos, correntes e pêndulos) e as reinstalamos com funcionamento suave e garantia técnica.";
      showProducts = false;
    }
  }

  // -------------------------------------------------------------------------------------------------------------
  // GUARANTEE MINIMUM OF 1,500 WORDS FOR ADVANCED SEO / GEO RANKING (DEEP BRAIN TEXT STRUCTURE)
  // -------------------------------------------------------------------------------------------------------------
  const readableRouteTitle = cleanRoute.replace(/-/g, " ").toUpperCase();
  
  const fullBodyText = `
    <h2>1. O Guia Definitivo Sobre ${title} – Nova's Persianas Curitiba</h2>
    <p>
      Seja muito bem-vindo ao portal de alta performance e autoridade máxima em proteção solar de Curitiba. Se você está pesquisando exaustivamente sobre <strong>${readableRouteTitle}</strong>, sabe que a harmonia visual, a privacidade e o controle térmico de um imóvel dependem de uma escolha madura e qualificada. Em Curitiba, as janelas e fachadas de vidro não servem apenas para contemplar as belíssimas paisagens dos nossos parques, mas representam pontos cruciais de troca de calor. 
    </p>
    <p>
      Nossa cidade é internacionalmente conhecida pela variação térmica brusca. Em um único dia, podemos experimentar as quatro estações do ano, com manhãs frias e úmidas, seguidas por tardes de sol intenso e noites de geada. Esse estresse climático exige que as cortinas e persianas possuam características técnicas superiores. Persianas de baixa qualidade compradas prontas em magazines tendem a ressecar, amolecer as engrenagens de plástico sob o calor da tarde e acumular umidade que favorece a proliferação de ácaros e mofos nos períodos de inverno.
    </p>
    <p>
      É por isso que a <strong>Nova's Persianas</strong>, instalada fisicamente na <em>Rua Frei Henrique de Coimbra, 1750, no bairro Hauer em Curitiba</em>, adota um processo de produção 100% industrializado de alta costura e sob medida. Nós garantimos que cada componente utilizado – desde os tubos internos de liga estrutural de alumínio até as correntes de nylon de alta densidade e os motores silenciosos – suporte anos de operação sem apresentar fadiga. Nosso foco é prover uma experiência premium de ponta a ponta: da medição gratuita à instalação com aspirador de pó acoplado.
    </p>

    <h2>2. A Importância das Persianas Sob Medida vs. Tamanhos Padronizados de Magazine</h2>
    <p>
      Muitos proprietários de imóveis em bairros como <strong>Batel, Água Verde, Portão e Cabral</strong> inicialmente consideram comprar persianas prontas de tamanhos genéricos para economizar. No entanto, essa decisão frequentemente resulta em frustrações estéticas e prejuízos de vedação. Janelas de edifícios modernos em Curitiba raramente seguem vãos padronizados milimetricamente. Uma fresta de apenas 1 centímetro nas laterais de uma cortina rolô de quarto é suficiente para que a luz dos postes de rua ou do sol da manhã invada o ambiente, arruinando a qualidade do seu sono e gerando reflexos indesejados na tela da TV ou do computador.
    </p>
    <p>
      Quando você opta pela consultoria personalizada da Nova's Persianas:
    </p>
    <ul>
      <li><strong>Encaixe Milimétrico:</strong> Nosso consultor utiliza trenas eletrônicas de alta precisão para medir a largura, altura e as diagonais do vão. Isso previne frestas de iluminação e assegura que o bando superior de alumínio ou a galeria oculte totalmente o rolo de tecido.</li>
      <li><strong>Estudo de Alvenaria e Fixação:</strong> Paredes de gesso acartonado (drywall), tetos rebaixados ou divisórias corporativas necessitam de buchas de expansão ou ancoragem específicas (como as buchas de nylon do tipo fly). Instalar uma persiana pesada sem esse cuidado pode causar rachaduras no gesso ou até a queda do produto. Nossos instaladores dominam essas técnicas.</li>
      <li><strong>Tecidos com Barreira de Raios UV:</strong> Nossos tecidos translúcidos, blackout e telas solares recebem banho químico com protetores UV de alta resistência, o que impede que o tecido amareleça, desbote ou esfarele sob a ação contínua do sol curitibano.</li>
      <li><strong>Mecanismos de Alta Performance:</strong> Os comandos de acionamento que utilizamos possuem esferas internas autolubrificantes. Isso significa que mesmo persianas muito largas e pesadas podem ser recolhidas de forma extremamente leve, sem exigir força física dos moradores.</li>
    </ul>

    <h2>3. Tecnologias de Proteção Térmica para o Clima de Curitiba</h2>
    <p>
      Curitiba possui o clima mais frio dentre todas as capitais brasileiras. Durante os meses de outono e inverno, o isolamento térmico das janelas é fundamental para reduzir o consumo de energia com aquecedores elétricos e ar-condicionado. As janelas de vidro são os principais pontos de fuga do calor interno de uma residência. Ao cobrir essas áreas com persianas estruturadas, você cria uma bolsa de ar isolante entre o vidro frio e o interior do ambiente, estabilizando a temperatura interna de forma espetacular.
    </p>
    <p>
      Nossas persianas modelo <strong>Rolô Tela Solar Screen</strong> (com aberturas de 1%, 3% ou 5%) são compostas por uma malha de poliéster revestida com PVC de alta tecnologia. Elas bloqueiam até 99% da radiação solar nociva e reduzem a entrada de calor térmico em até 70%, tudo isso sem bloquear a luminosidade natural e mantendo a visibilidade total da paisagem de fora para dentro durante o dia. Para quem busca privacidade absoluta e escuridão total para dormir ou assistir a um filme, nossas <strong>Persianas Blackout Emborrachadas</strong> possuem toque aveludado e revestimento acrílico de tripla barreira que barra 100% da luz solar.
    </p>
    <p>
      Se o seu objetivo é o controle estético clássico, a <strong>Persiana de Madeira de 50mm</strong> é um verdadeiro isolante térmico e acústico natural. A madeira possui células internas que barram a passagem de ondas sonoras e de temperatura, trazendo uma sensação incrível de aquecimento visual e aconchego para salas de estar em Santa Felicidade ou escritórios de advocacia no Centro Cívico.
    </p>

    <h2>4. Motorização Inteligente de Persianas e Integração Residencial com Alexa e Google</h2>
    <p>
      A automação residencial deixou de ser um artigo futurista e se tornou uma realidade indispensável em projetos modernos de Curitiba. A Nova's Persianas é pioneira na instalação de <strong>Persianas Motorizadas e Automatizadas</strong> integradas com assistentes virtuais por comando de voz (como Amazon Alexa, Google Assistant e Apple HomeKit) e centrais inteligentes de automação (como Broadlink ou Tuya).
    </p>
    <p>
      Imagine acordar pela manhã e, com um simples comando de voz – <em>'Alexa, bom dia!'</em> – todas as persianas do seu quarto e da sua sala se abrirem de forma sincronizada e silenciosa para receber o sol da manhã. Ou, nos dias frios, programar para que as persianas se fechem automaticamente às 18h para manter o calor da casa preservado. Esse sistema é altamente recomendado para idosos, pessoas com mobilidade reduzida ou para janelas de pé-direito duplo de difícil acesso manual.
    </p>
    <p>
      Nossos motores de alta tecnologia funcionam com alimentação elétrica tradicional ou via baterias de lítio recarregáveis de longa duração, eliminando a necessidade de passar conduítes elétricos ou quebrar paredes de gesso para fiações. Com apenas uma carga de bateria de 6 horas, a persiana pode ser operada por até 6 meses seguidos.
    </p>

    <h2>5. Diferenciais e Compromisso com a Terceira Idade</h2>
    <p>
      Na Nova's Persianas, compreendemos que o atendimento humanizado e atencioso faz toda a diferença. Por termos sede no tradicional bairro Hauer e atendermos muitos clientes seniores em regiões como o Batel, Água Verde, Juvevê e Centro, refinamos nossa metodologia de atendimento. Nossos consultores são extremamente pacientes, detalham minuciosamente o funcionamento de cada modelo e auxiliam na configuração de aplicativos de automação de forma didática.
    </p>
    <p>
      Além disso, desenvolvemos sistemas de segurança 'child and pet safety', eliminando correntes e cordões soltos através de presilhas tensionadoras fixas de parede ou incentivando a adoção de sistemas automatizados que previnem acidentes domésticos de estrangulamento de animais e crianças. Visamos a paz de espírito e a segurança do seu lar.
    </p>

    <h2>6. Serviços Especializados de Higienização, Lavagem e Conserto de Persianas em Curitiba</h2>
    <p>
      O acúmulo de poeira, fumaça de carros e poluição urbana nas persianas é inevitável com o passar do tempo. Em Curitiba, a umidade do ar frequentemente causa o aparecimento de manchas pretas de mofo e proliferação de colônias de ácaros que agravam quadros alérgicos de rinite, asma e bronquite. Limpar persianas em casa com panos encharcados ou produtos químicos inadequados pode desbotar o tecido, manchar as tramas e oxidar as engrenagens de ferro internas.
    </p>
    <p>
      A Nova's Persianas possui uma lavanderia industrial própria equipada com tanques ultrassônicos e produtos biodegradáveis com ação bactericida e fungicida que higienizam o tecido profundamente sem afetar a resina protetora solar. Nosso serviço inclui a retirada gratuita da persiana em seu endereço, desinstalação técnica, substituição de acessórios desgastados pelo tempo (troca de correntes de nylon, cordões de tração, suportes de fixação e trilhos) e reinstalação profissional com agendamento pontual. Sua persiana antiga volta a ter a mesma aparência e suavidade de uma nova.
    </p>

    <h2>7. Conexão e Rede de Atendimento em Toda a Região Metropolitana</h2>
    <p>
      Atendemos com o mesmo padrão de excelência e pontualidade moradores de Curitiba e de municípios da Região Metropolitana, incluindo <strong>São José dos Pinhais, Pinhais, Colombo, Araucária, Campo Largo e Almirante Tamandaré</strong>. Nosso Showroom no Hauer está aberto para visitas de segunda a sábado, com estacionamento privativo e uma ampla variedade de modelos funcionais em exposição para que você possa testar os acionamentos e visualizar as texturas dos tecidos reais.
    </p>
    <p>
      Nossa missão é transformar seus sonhos de decoração em projetos tangíveis de alta durabilidade, agregando valor estético, conforto acústico, térmico e privacidade impecável para sua residência ou empresa. Entre em contato com a Nova's Persianas hoje mesmo pelo WhatsApp ou telefone e agende sua visita de medição gratuita!
    </p>
  `;

  // Create highly complete FAQs based on route type to address search intent perfectly
  let faq = [
    { 
      q: `Como é feito o orçamento para ${cleanRoute.replace(/-/g, " ")} em Curitiba?`, 
      a: "O orçamento é totalmente personalizado. Você pode nos enviar as medidas aproximadas pelo WhatsApp para receber uma estimativa rápida de preço, ou agendar uma visita técnica gratuita em que nosso especialista vai ao seu endereço, realiza a medição fina com laser e apresenta o catálogo com mostruários físicos." 
    },
    { 
      q: "Qual o prazo de fabricação e instalação técnica em Curitiba?", 
      a: "Nosso prazo médio de entrega para persianas sob medida em Curitiba é de 7 a 10 dias úteis após a confirmação das medidas técnicas finais. Nós agendamos a instalação no seu dia e horário de preferência com técnicos treinados e sem sujeira." 
    },
    { 
      q: "Quais as formas de pagamento disponíveis na Nova's Persianas?", 
      a: "Buscamos facilitar ao máximo para nossos clientes de Curitiba. Parcelamos o seu projeto em até 10x sem juros em todos os cartões de crédito. Para pagamentos à vista via PIX ou dinheiro, concedemos descontos generosos de fábrica." 
    },
    { 
      q: "As persianas possuem garantia?", 
      a: "Sim! Todas as nossas persianas acompanham garantia de fábrica contra defeitos de fabricação de tecidos e componentes de até 2 anos. Além disso, oferecemos 1 ano de garantia total na nossa instalação técnica de fixação mecânica." 
    },
    { 
      q: "Vocês realizam serviços de limpeza e manutenção de persianas antigas?", 
      a: "Sim! Somos especialistas na lavagem técnica antibactericida profunda e na reforma e troca de peças de mecanismos de persianas nacionais e importadas em toda Curitiba. Retiramos e reinstalamos com agilidade." 
    }
  ];

  // If neighborhood, add a neighborhood-specific FAQ item
  if (isNeighborhoodRoute) {
    const neighborhoodKey = cleanRoute.replace("persianas-", "");
    const neighborhoodName = NEIGHBORHOODS[neighborhoodKey]?.name || neighborhoodKey;
    faq.unshift({
      q: `A Nova's cobra taxa de deslocamento para atender no bairro ${neighborhoodName} em Curitiba?`,
      a: `De forma alguma! Por termos sede própria no Hauer, enviamos nossa equipe de atendimento móvel para o bairro ${neighborhoodName} com mostruários e trenas digitais para realizar a medição grátis sem qualquer taxa ou compromisso de compra.`
    });
  }

  // If product-specific, add product FAQ
  if (isProductRoute) {
    const productKey = cleanRoute.replace("persiana-", "").replace("-curitiba", "");
    const productName = PRODUCTS_MAP[productKey]?.name || productKey;
    faq.unshift({
      q: `Qual a melhor especificação de tecido para o modelo de ${productName}?`,
      a: `Depende da necessidade do seu espaço! Para quartos e salas com TV, o tecido Blackout é ideal pois veda 100% da claridade. Para varandas gourmet e escritórios, a Tela Solar Screen é a mais recomendada pois bloqueia raios UV e calor excessivo sem tirar a visibilidade externa da paisagem de Curitiba.`
    });
  }

  // Breadcrumbs array
  const breadcrumbs = [
    { name: "Início", url: "/" },
    { name: cleanRoute.replace(/-/g, " "), url: `/${cleanRoute}` }
  ];

  return {
    title,
    subtitle,
    description,
    heroImage,
    intro,
    content,
    fullBodyText,
    faq,
    showProducts,
    categoryFilter,
    breadcrumbs
  };
}

// Generate the complete programmatic list of all 74+ valid routes
export const CORE_SEO_ROUTES = [
  "persianas-curitiba",
  "persianas-sob-medida-curitiba",
  "persianas-promocao-curitiba",
  "persianas-preco-curitiba",
  "persianas-baratas-curitiba",
  "persianas-residenciais-curitiba",
  "persianas-comerciais-curitiba",
  "persianas-para-apartamento-curitiba",
  "persianas-para-escritorio-curitiba",
  "persianas-modernas-curitiba",
  "persianas-personalizadas-curitiba",
  "orcamento-persianas-curitiba",
  "empresa-de-persianas-curitiba",
  "loja-de-persianas-curitiba",
  "instalacao-de-persianas-curitiba",
  "manutencao-de-persianas-curitiba",
  "reparo-de-persianas-curitiba",
  "conserto-de-persianas-curitiba",
  "troca-de-persianas-curitiba"
];

export const PRODUCT_SEO_ROUTES = [
  "persiana-rolo-curitiba",
  "persiana-romana-curitiba",
  "persiana-horizontal-curitiba",
  "persiana-vertical-curitiba",
  "persiana-double-vision-curitiba",
  "persiana-painel-curitiba",
  "persiana-blackout-curitiba",
  "persiana-aluminio-curitiba",
  "persiana-pvc-curitiba",
  "persiana-madeira-curitiba",
  "persiana-automatica-curitiba",
  "persiana-motorizada-curitiba"
];

export const NEIGHBORHOOD_SEO_ROUTES = [
  "persianas-hauer",
  "persianas-boqueirao",
  "persianas-portao",
  "persianas-agua-verde",
  "persianas-batel",
  "persianas-centro",
  "persianas-xaxim",
  "persianas-pinheirinho",
  "persianas-novo-mundo",
  "persianas-capao-raso",
  "persianas-uberaba",
  "persianas-reboucas",
  "persianas-jardim-das-americas",
  "persianas-santa-felicidade",
  "persianas-cic",
  "persianas-cabral",
  "persianas-bacacheri"
];

export const INTENT_SEO_ROUTES = [
  "onde-comprar-persianas-em-curitiba",
  "qual-a-melhor-empresa-de-persianas",
  "quanto-custa-uma-persiana",
  "quanto-custa-instalar-persianas",
  "persianas-sob-medida",
  "persianas-personalizadas",
  "persianas-para-sala",
  "persianas-para-quarto",
  "persianas-para-cozinha",
  "persianas-para-escritorio",
  "persianas-para-empresas",
  "persianas-para-clinicas",
  "persianas-para-consultorios",
  "persianas-para-apartamentos",
  "persianas-para-casas",
  "persianas-para-cobertura",
  "persianas-para-varanda",
  "persianas-para-sacada",
  "persianas-para-janelas-grandes",
  "persianas-para-portas",
  "persianas-blackout",
  "persianas-modernas",
  "persianas-elegantes",
  "persianas-minimalistas",
  "persianas-de-luxo",
  "persianas-premium"
];

// Plural fallback versions for smooth backwards compatibility
export const OLD_PLURAL_ROUTES = [
  "persianas-verticais-curitiba",
  "persianas-horizontais-curitiba",
  "persianas-rolo-curitiba",
  "persianas-romana-curitiba",
  "persianas-double-vision-curitiba",
  "persianas-painel-curitiba",
  "persianas-automizadas-curitiba"
];

export const ALL_SEO_ROUTES = [
  ...CORE_SEO_ROUTES,
  ...PRODUCT_SEO_ROUTES,
  ...NEIGHBORHOOD_SEO_ROUTES,
  ...INTENT_SEO_ROUTES,
  ...OLD_PLURAL_ROUTES
];
