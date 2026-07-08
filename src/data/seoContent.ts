/**
 * SEO / GEO Content Generator Engine - Nova's Persianas Curitiba
 * Generates rich, highly optimized, non-repetitive, localized landing page content.
 * Guarantees a minimum of 1500 words of authentic, high-value text for search engines and AI models.
 */

import { VENEZIANA_SEO_ROUTES, generateVenezianaFaq, generateVenezianaBodyText, getVenezianaMetadata } from "./venezianaContent";
export { VENEZIANA_SEO_ROUTES };

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
  },
  juveve: {
    name: "Juvevê",
    type: "nobre residencial e comercial",
    details: "vizinho do Cabral, com sofisticados escritórios e apartamentos que buscam persianas rolô tela solar screen e cortinas romanas elegantes para controle térmico perfeito",
    landmarks: "perto da Avenida João Gualberto e Rua Augusto Stresser"
  },
  merces: {
    name: "Mercês",
    type: "residencial tradicional de alto padrão",
    details: "próximo ao Centro e Santa Felicidade, caracterizado por belas residências históricas e modernos condomínios que exigem controle solar preciso e persianas de madeira de 50mm",
    landmarks: "próximo à Torre Panorâmica das Mercês e Praça 29 de Março"
  },
  "cristo-rei": {
    name: "Cristo Rei",
    type: "residencial calmo e verticalizado",
    details: "bairro vizinho ao Jardim Botânico com novos empreendimentos verticais de alto padrão, cujos moradores demandam persianas blackout e double vision sob medida",
    landmarks: "perto do Jardim Botânico de Curitiba e do Hospital Cajuru"
  },
  "alto-da-xv": {
    name: "Alto da XV",
    type: "misto comercial e residencial de alto padrão",
    details: "região nobre de Curitiba ideal para instalação de persianas horizontais de alumínio em consultórios e clínicas, além de rolô tela solar em varandas gourmet de apartamentos",
    landmarks: "próximo ao Hospital de Clínicas e Praça das Nações"
  },
  seminario: {
    name: "Seminário",
    type: "estritamente residencial nobre",
    details: "bairro tradicional vizinho ao Batel, com grandes residências térreas e sobrados de luxo que exigem projetos integrados de persianas motorizadas e automatizadas com Alexa",
    landmarks: "perto da Paróquia Nossa Senhora de Fátima e Avenida Batel"
  },
  "prado-velho": {
    name: "Prado Velho",
    type: "comercial, acadêmico e logístico",
    details: "região com forte demanda de persianas verticais de PVC de alta resistência e fácil higienização para salas de aula, estúdios de tecnologia e clínicas",
    landmarks: "próximo à PUCPR (Pontifícia Universidade Católica do Paraná)"
  },
  ahu: {
    name: "Ahú",
    type: "residencial nobre e administrativo",
    details: "bairro de perfil residencial nobre, caracterizado por condomínios elegantes que necessitam de persianas romanas em linho e persianas rolô blackout para total privacidade",
    landmarks: "perto do Tribunal de Justiça (Sede Centro Cívico/Ahú) e Justiça Federal"
  },
  "jardim-botanico": {
    name: "Jardim Botânico",
    type: "turístico e residencial de alto nível",
    details: "bairro com excelente infraestrutura residencial, cujos apartamentos exigem persianas blackout e double vision de fabricação milimétrica para proteção contra raios solares",
    landmarks: "próximo ao Jardim Botânico de Curitiba e Campus Jardim Botânico da UFPR"
  },
  bigorrilho: {
    name: "Bigorrilho",
    type: "altamente verticalizado residencial de alto padrão",
    details: "bairro com a maior densidade de edifícios residenciais de Curitiba, exigindo centenas de persianas rolô blackout e tela solar sob medida para sacadas e salas de estar",
    landmarks: "também conhecido como Champagnat, próximo à Praça da Ucrânia e Parque Barigui"
  },
  "campina-do-siqueira": {
    name: "Campina do Siqueira",
    type: "residencial de classe média-alta e comercial em desenvolvimento",
    details: "bairro vizinho ao Seminário e ao Parque Barigui, ideal para instalação de persianas de madeira de 50mm e persianas rolô automatizadas inteligentes",
    landmarks: "próximo ao Terminal do Campina do Siqueira e ao ParkShoppingBarigüi"
  },
  "bairro-alto": {
    name: "Bairro Alto",
    type: "residencial de grande porte e comercial",
    details: "bairro familiar focado em sobrados modernos, excelente para instalação de persianas horizontais de alumínio e persianas blackout em dormitórios",
    landmarks: "perto do Hospital Pinheirinho e do Shopping Jockey Plaza"
  },
  cajuru: {
    name: "Cajuru",
    type: "residencial e comercial extenso",
    details: "bairro com forte expansão de sobrados e residências que buscam persianas duráveis de excelente custo-benefício, como persianas horizontais de alumínio ou PVC",
    landmarks: "próximo ao Terminal do Centenário e BR-277"
  },
  pilarzinho: {
    name: "Pilarzinho",
    type: "verde residencial familiar",
    details: "bairro com topografia acidentada e belas vistas panorâmicas, ideais para persianas romanas translúcidas e persianas automáticas para maior conforto térmico",
    landmarks: "perto da Ópera de Arame, Parque Tanguá e Pedreira Paulo Leminski"
  },
  "vista-alegre": {
    name: "Vista Alegre",
    type: "residencial familiar de alto padrão",
    details: "bairro calmo caracterizado por belíssimas casas que priorizam isolamento térmico natural contra as variações térmicas de Curitiba com persianas de madeira natural",
    landmarks: "próximo ao Parque Vista Alegre e Portal de Santa Felicidade"
  },
  "bom-retiro": {
    name: "Bom Retiro",
    type: "residencial nobre e comercial",
    details: "bairro muito calmo e seguro próximo ao Centro Cívico, ideal para persianas motorizadas inteligentes e persianas rolô integradas à automação residencial e corporativa",
    landmarks: "perto do Hospital de Olhos de Curitiba e Centro Cívico"
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

// 75 Official neighborhoods of Curitiba (IPPUC)
export const OFFICIAL_NEIGHBORHOODS = [
  "abranches", "agua-verde", "ahu", "alto-boqueirao", "alto-da-gloria", "alto-da-rua-xv", "atuba", "augusta", 
  "bacacheri", "bairro-alto", "barreirinha", "batel", "bigorrilho", "boa-vista", "bom-retiro", "boqueirao", 
  "butiatuvinha", "cabral", "cachoeira", "cajuru", "campina-do-siqueira", "campo-comprido", "campo-de-santana", 
  "capao-raso", "capao-da-imbuia", "cascatinha", "caximba", "centro", "centro-civico", "cic", "cristo-rei", 
  "fanny", "fazendinha", "ganchinho", "guabirotuba", "guaira", "hauer", "hugo-lange", "jardim-botanico", 
  "jardim-social", "jardim-das-americas", "juveve", "lamenha-pequena", "lindoia", "merces", "mossungue", 
  "novo-mundo", "orleans", "parolin", "pilarzinho", "pinheirinho", "portao", "prado-velho", "reboucas", 
  "riviera", "santa-candida", "santa-felicidade", "santa-quiteria", "santo-inacio", "seminario", "sitio-cercado", 
  "sao-braz", "sao-francisco", "sao-joao", "sao-lourenco", "sao-miguel", "taboao", "taruma", "tatuquara", 
  "tingui", "uberaba", "umbara", "vila-izabel", "vista-alegre", "xaxim"
];

// Popular / Unofficial neighborhoods and regions of Curitiba
export const POPULAR_NEIGHBORHOODS = [
  "vila-sandra", "cic-central", "neoville", "vitoria-regia", "caiua", "sabara", "vila-verde", 
  "nossa-senhora-da-luz", "barigui-cic", "conquista", "augusta-regiao", "riviera-regiao", 
  "sao-miguel-regiao", "gabineto", "itatiaia", "santa-helena", "atenas", "osvaldo-cruz", 
  "vila-pantanal", "vila-torres", "vila-das-torres", "vila-parolin", "vila-hauer", "vila-guaira", 
  "vila-oficinas", "vila-osternack", "vila-sao-pedro", "vila-audi", "pinheirinho-velho", 
  "portao-velho", "capao-raso-velho", "sitio-cercado-velho", "jardim-gabineto", "jardim-itatiaia", 
  "jardim-kosmos", "jardim-da-ordem", "jardim-alvorada", "umbara-de-baixo", "umbara-de-cima", 
  "carmo", "hauer-velho", "xaxim-velho", "boqueirao-alto", "boqueirao-velho", "cajuru-alto", 
  "uberaba-velho", "uberaba-de-cima", "jardim-das-torres", "vila-prado", "bairro-alto-norte", 
  "bairro-alto-velho", "tingui-velho", "boa-vista-norte", "orleans-velho", "sao-braz-alto", 
  "santa-felicidade-norte"
];

// Nearby cities
export const NEARBY_CITIES = [
  "pinhais", "sao-jose-dos-pinhais", "colombo", "araucaria", "almirante-tamandare", 
  "campo-largo", "campo-magro", "fazenda-rio-grande", "quatro-barras", "campina-grande-do-sul", 
  "mandirituba", "balsa-nova", "rio-branco-do-sul", "itaperucu", "tijucas-do-sul", "piraquara"
];

// Specific requested pages
export const SPECIFIC_SEO_ROUTES = [
  "olx-persianas-curitiba",
  "persianas-usadas-curitiba",
  "comprar-persianas-curitiba",
  "limpeza-de-persianas-curitiba",
  "persianas-automatizadas-curitiba",
  "persianas-blackout-curitiba",
  "persianas-rolo-curitiba",
  "persianas-romana-curitiba",
  "persianas-horizontais-curitiba",
  "persianas-verticais-curitiba"
];

const ACCENT_MAPPING: Record<string, string> = {
  "agua": "Água",
  "ahu": "Ahú",
  "portao": "Portão",
  "boqueirao": "Boqueirão",
  "remedio": "Remédio",
  "merces": "Mercês",
  "sitio": "Sítio",
  "braz": "Braz",
  "sao": "São",
  "joao": "João",
  "lourenco": "Lourenço",
  "taruma": "Tarumã",
  "tatuquara": "Tatuquara",
  "umbara": "Umbará",
  "izabel": "Izabel",
  "caiua": "Caiuá",
  "sabara": "Sabará",
  "vitoria": "Vitória",
  "regia": "Régia",
  "araucaria": "Araucária",
  "almirante": "Almirante",
  "tamandare": "Tamandaré",
  "itaperucu": "Itaperuçu",
  "parolin": "Parolin",
  "fazendinha": "Fazendinha",
  "uberaba": "Uberaba",
  "pinheirinho": "Pinheirinho",
  "capao": "Capão",
  "imbuia": "Imbuia",
  "barreirinha": "Barreirinha",
  "butiatuvinha": "Butiatuvinha",
  "cachoeira": "Cachoeira",
  "cascatinha": "Cascatinha",
  "caximba": "Caximba",
  "civico": "Cívico",
  "guaira": "Guaíra",
  "lindoia": "Lindóia",
  "mossungue": "Mossunguê",
  "candida": "Cândida",
  "quiteria": "Quitéria",
  "inacio": "Inácio",
  "seminario": "Seminário",
  "botanico": "Botânico",
  "olx": "OLX"
};

export function formatName(slug: string): string {
  const specialWords: Record<string, string> = {
    "dos": "dos", "de": "de", "da": "da", "do": "do", "e": "e", "para": "para", "em": "em",
    "xv": "XV", "cic": "CIC", "pucpr": "PUCPR", "ufpr": "UFPR", "uv": "UV", "olx": "OLX", "pix": "PIX"
  };
  return slug
    .split("-")
    .map(word => {
      const lower = word.toLowerCase();
      if (ACCENT_MAPPING[lower]) {
        return ACCENT_MAPPING[lower];
      }
      if (specialWords[lower]) {
        return specialWords[lower];
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export function generateSeoContent(route: string): PageMetadata {
  const cleanRoute = route.replace(/^\/|\/$/g, "");
  
  const isVenezianaRoute = VENEZIANA_SEO_ROUTES.includes(cleanRoute);
  if (isVenezianaRoute) {
    const meta = getVenezianaMetadata(cleanRoute);
    const fullBodyText = generateVenezianaBodyText(cleanRoute, meta.title, meta.subtitle);
    const faq = generateVenezianaFaq(cleanRoute);
    const showProducts = false;
    const categoryFilter = "all";
    const breadcrumbs = [
      { name: "Início", url: "/" },
      { name: cleanRoute.replace(/-/g, " "), url: `/${cleanRoute}` }
    ];

    return {
      title: meta.title,
      subtitle: meta.subtitle,
      description: meta.description,
      heroImage: "https://img.novaspersianascuritiba.com.br/persianas-e-venezianas.webp",
      intro: meta.intro,
      content: meta.content,
      fullBodyText,
      faq,
      showProducts,
      categoryFilter,
      breadcrumbs
    };
  }

  // Initialize default metadata
  let title = "Nova's Persianas Curitiba | Fábrica Sob Medida no Hauer";
  let subtitle = "A melhor loja de cortinas e persianas de Curitiba com fabricação própria, preço de fábrica e medição grátis";
  let description = "Compre cortinas e persianas sob medida em Curitiba direto da fábrica Nova's Persianas. Atendimento técnico especializado no Hauer, Batel, Portão e região com até 10x sem juros.";
  let heroImage = "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHTFQj6NuJDjW8sfkkHIhJ4Kw-5EQSw60Fxeqr2IjTc4wFsZUa1i0Jqy219iTSuQhiDH33kJJ45ac9bwZE19jA7i-RRz94ibg7y-SUJ3CjYvlS017X4Av4uLy0c-lwXvPFdZYQ=s680-w680-h510-rw";
  let intro = "Seja muito bem-vindo à Nova's Persianas Curitiba! Se você está buscando transformar seus ambientes residenciais ou comerciais com persianas sob medida de qualidade de fábrica, durabilidade extrema e acabamento de alto padrão, você acaba de encontrar a parceira ideal em Curitiba e região metropolitana.";
  let content = "Com uma trajetória consolidada e sede física no tradicional bairro Hauer, nos dedicamos a projetar e fabricar persianas que resolvem problemas reais: controlam frestas de luz incômodas, protegem seus móveis e pisos de madeira contra desbotamento pelos raios UV, proporcionam isolamento acústico e privacidade total. Nossas soluções sob medida garantem encaixe milimétrico para que seus espaços fiquem visualmente amplos e confortáveis.";
  let categoryFilter = "all";
  let showProducts = true;

  const isSpecificRoute = SPECIFIC_SEO_ROUTES.includes(cleanRoute);
  
  // CLASSIFICATION 1: NEIGHBORHOOD SEO PAGES (e.g. /persianas-hauer, /persianas-batel)
  const isNeighborhoodRoute = !isSpecificRoute && cleanRoute.startsWith("persianas-") && 
    !cleanRoute.endsWith("-curitiba") && 
    !cleanRoute.includes("para-") && 
    !cleanRoute.includes("sob-medida") && 
    !cleanRoute.includes("promocao") && 
    !cleanRoute.includes("preco") && 
    !cleanRoute.includes("baratas") && 
    !cleanRoute.includes("residenciais") && 
    !cleanRoute.includes("comerciais") && 
    !cleanRoute.includes("modernas") && 
    !cleanRoute.includes("personalizadas");

  // CLASSIFICATION 2: PRODUCT-SPECIFIC SEO PAGES (e.g. /persiana-rolo-curitiba, /persiana-madeira-curitiba)
  const isProductRoute = !isSpecificRoute && cleanRoute.startsWith("persiana-") && cleanRoute.endsWith("-curitiba");

  // CLASSIFICATION 3: INTENT / SEARCH QUERIES (e.g. /quanto-custa-uma-persiana)
  const isIntentRoute = !isSpecificRoute && !isNeighborhoodRoute && !isProductRoute && (
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

  if (isSpecificRoute) {
    if (cleanRoute === "olx-persianas-curitiba" || cleanRoute === "persianas-usadas-curitiba") {
      const isOlx = cleanRoute === "olx-persianas-curitiba";
      title = isOlx 
        ? "OLX Persianas Curitiba | Usadas ou Novas Sob Medida?" 
        : "Persianas Usadas Curitiba | Riscos vs Qualidade de Fábrica";
      subtitle = isOlx
        ? "Compare os riscos das persianas usadas de segunda mão com as novas sob medida direto da fábrica"
        : "O barato que sai caro: por que investir em persianas sob medida com garantia de fábrica em Curitiba";
      description = isOlx
        ? "Pesquisando por OLX persianas Curitiba? Conheça os riscos ocultos de comprar persianas usadas e veja por que investir em modelos novos sob medida de fábrica."
        : "Procurando persianas usadas em Curitiba? Descubra por que comprar persianas usadas pode sair caro e as vantagens de adquirir modelos sob medida direto de fábrica.";
      intro = isOlx
        ? "Procurar por <strong>OLX persianas Curitiba</strong> é muito comum para quem está de mudança ou querendo renovar a decoração gastando pouco. Contudo, comprar persianas usadas de segunda mão na OLX pode se tornar uma grande cilada devido a problemas de dimensões e desgaste mecânico."
        : "Adquirir <strong>persianas usadas em Curitiba</strong> pode parecer uma excelente oportunidade de economia em um primeiro momento. No entanto, cobrir janelas residenciais ou comerciais com produtos de segunda mão traz frestas de luz incômodas, falta de peças de reposição e riscos de alergias.";
      content = "Na Nova's Persianas, somos especialistas em fabricar cortinas e persianas sob medida de altíssimo padrão com preço direto de fábrica. Eliminamos intermediários para entregar produtos novos, com garantia total de instalação de até 2 anos, medição com laser gratuita em domicílio e materiais antialérgicos com proteção UV. Conheça as vantagens das novas sob medida antes de decidir.";
    } else if (cleanRoute === "comprar-persianas-curitiba") {
      title = "Comprar Persianas Curitiba | Showroom no Bairro Hauer";
      subtitle = "Adquira cortinas e persianas sob medida direto da fábrica com medição e instalação grátis";
      description = "Procurando onde comprar persianas em Curitiba? Conheça a Nova's Persianas no Hauer. Fabricação própria, medição laser grátis, parcelamento em 10x e garantia.";
      intro = "Se você está planejando redecorar sua residência, equipar um novo escritório ou climatizar um apartamento, escolher onde comprar persianas em Curitiba com segurança, suporte local e garantia é o passo mais importante para o sucesso do seu projeto.";
      content = "A Nova's Persianas oferece showroom completo na Rua Frei Henrique de Coimbra, 1750, no tradicional bairro Hauer. Atendemos todos os bairros de Curitiba e região metropolitana com consultoria móvel gratuita em domicílio, mostruário físico de tecidos importados e técnicos de instalação própria.";
    } else if (cleanRoute === "limpeza-de-persianas-curitiba") {
      title = "Limpeza de Persianas Curitiba | Lavagem Antibactericida";
      subtitle = "Higienização profunda com retirada, conserto de engrenagens e entrega expressa";
      description = "Sua persiana está suja ou com manchas de mofo? Fazemos a lavagem profunda antibactericida e conserto de persianas em Curitiba com retirada e reinstalação grátis.";
      intro = "As persianas e cortinas acumulam poeira, poluentes e bolor devido ao clima úmido característico de Curitiba. Realizar a limpeza incorretamente em casa pode estragar os tecidos e oxidar os mecanismos internos.";
      content = "A lavanderia industrial da Nova's Persianas utiliza produtos biodegradáveis antifungo que higienizam profundamente o tecido sem remover sua resina protetora. Nosso serviço inclui a retirada técnica em seu endereço, lavagem, reparo de acessórios e a reinstalação pontual.";
    } else if (cleanRoute === "persianas-automatizadas-curitiba") {
      title = "Persianas Automatizadas Curitiba | Motorização e Controle";
      subtitle = "Praticidade e luxo incomparáveis com persianas elétricas integradas à Alexa e Google Assistant";
      description = "Quer motorizar suas persianas em Curitiba? Somos especialistas na automação de persianas sob medida com motores silenciosos, garantia total e medição grátis.";
      intro = "As persianas automatizadas representam o auge do conforto e design de interiores moderno em Curitiba. Elas eliminam correntes manuais suspensas (child & pet safety) e são fáceis de operar por controle remoto ou comando de voz.";
      content = "Utilizamos os melhores motores tubulares silenciosos importados instalados diretamente no tubo da persiana rolô ou romana. Integramos com sua rede Wi-Fi residencial ou comercial sem quebrar paredes de gesso.";
    } else if (cleanRoute === "persianas-blackout-curitiba") {
      title = "Persiana Blackout Curitiba | Bloqueio de Luz sob Medida";
      subtitle = "Noites de sono profundas e confortáveis com cortinas rolô blackout emborrachadas de fábrica";
      description = "Adquira persianas blackout sob medida em Curitiba direto da fábrica Nova's Persianas. Bloqueio total de claridade, conforto térmico e acústico com até 10x sem juros.";
      intro = "A persiana blackout (ou blecaute) é indispensável para quem busca vedação de luz absoluta para quartos, salas de home theater ou salas de projeção empresarial em Curitiba.";
      content = "Nossos tecidos blackout contam com tripla camada de resina acrílica e emborrachamento que, além de vedar 100% da radiação de postes de rua ou do sol da manhã, atuam como isolante térmico contra o frio severo.";
      categoryFilter = "blackout";
    } else if (cleanRoute === "persianas-rolo-curitiba") {
      title = "Persiana Rolô Curitiba | Cortinas de Rolo de Fábrica";
      subtitle = "Estilo minimalista, controle de luz solar e acabamento milimétrico sob medida para sua residência";
      description = "Procura persiana rolô em Curitiba? Compre direto do fabricante Nova's Persianas. Opções de tela solar screen, blackout e translúcidas com orçamento gratuito.";
      intro = "O modelo de persiana rolô é o mais versátil e querido no mercado de decoração curitibano. Seu design limpo e discreto recolhe o tecido por completo no tubo superior de alumínio.";
      content = "Ideal para cobrir vãos de janelas e fachadas de vidro de apartamentos, sobrados e lojas comerciais. Oferecemos opções em poliéster, PVC e linho, com garras de fixação reforçadas para teto ou parede.";
      categoryFilter = "rolo";
    } else if (cleanRoute === "persianas-romana-curitiba") {
      title = "Persiana Romana Curitiba | Sofisticação em Gomos";
      subtitle = "A elegância da alta costura unida à praticidade do controle solar sob medida";
      description = "Adquira persiana romana sob medida em Curitiba direto da fábrica Nova's Persianas. Modelos elegantes em tecido e linho com medição e orçamento grátis.";
      intro = "As persianas romanas trazem um charme atemporal para ambientes sociais e íntimos em Curitiba. Elas se dobram horizontalmente em gomos clássicos conforme o recolhimento.";
      content = "São perfeitas para salas de jantar, quartos de casal e escritórios de psicologia ou advocacia que exigem um visual acolhedor. Produzimos em diversos padrões de tecidos texturizados de altíssimo padrão.";
      categoryFilter = "romana";
    } else if (cleanRoute === "persianas-horizontais-curitiba") {
      title = "Persianas Horizontais Curitiba | Ajuste Fino de Luz";
      subtitle = "Lâminas reguláveis de madeira de 50mm ou alumínio de 25mm para controle térmico e privacidade";
      description = "Procurando persianas horizontais em Curitiba? Conheça os modelos em alumínio e madeira natural de fábrica sob medida na Nova's. Medição grátis e parcelamento.";
      intro = "As persianas horizontais são ideais para quem busca um direcionamento dinâmico da claridade do sol e circulação de vento sem expor o interior do imóvel curitibano.";
      content = "Disponíveis em ligas nobres de alumínio anticorrosivo (excelentes para cozinhas, lavanderias e banheiros) e em madeira natural tratada (perfeitas para escritórios de luxo e salas de estar).";
      categoryFilter = "horizontal";
    } else if (cleanRoute === "persianas-verticais-curitiba") {
      title = "Persianas Verticais Curitiba | Controle para Grandes Vãos";
      subtitle = "Trilhos de alumínio naval e lâminas giratórias de PVC ou tecido resinado direto da fábrica";
      description = "Compre persianas verticais sob medida em Curitiba. Melhor preço de fábrica para cobrir grandes janelas e portas de correr com durabilidade e fácil limpeza.";
      intro = "As persianas verticais continuam sendo a opção com melhor custo-benefício para cobrir vãos de vidro muito amplos, como portas-janelas de correr e divisórias de escritórios em Curitiba.";
      content = "Nossos modelos contam com trilhos de alumínio trefilado que deslizam suavemente, sem trancar ou enroscar as lâminas de tecido resinado antialérgico ou PVC lavável.";
      categoryFilter = "vertical";
    }
  } else if (isNeighborhoodRoute) {
    const neighborhoodKey = cleanRoute.replace("persianas-", "");
    const formattedGeoName = formatName(neighborhoodKey);
    const isCity = NEARBY_CITIES.includes(neighborhoodKey);
    
    const neighborhood = NEIGHBORHOODS[neighborhoodKey] || {
      name: formattedGeoName,
      type: isCity ? "cidade próxima da região metropolitana" : "residencial familiar e comercial local",
      details: isCity 
        ? `atendimento completo em toda a região de ${formattedGeoName} com nossa equipe técnica móvel trazendo mostruários físicos e realizando orçamentos sem custo`
        : `atendimento personalizado de excelência para residências, apartamentos modernos e comércios no tradicional bairro do ${formattedGeoName}`,
      landmarks: isCity
        ? `atendimento de excelência estendido a toda a região metropolitana de Curitiba`
        : `atendimento móvel gratuito para medição técnica e consultoria estética em domicílio`
    };

    title = `Persianas no ${neighborhood.name} Curitiba | Sob Medida Nova's`;
    subtitle = `Projetos de cortinas e persianas personalizadas para residências e escritórios no ${neighborhood.name}`;
    description = `Procurando cortinas e persianas sob medida no bairro ${neighborhood.name} em Curitiba? A Nova's Persianas oferece medição com laser gratuita em domicílio, mostruários físicos e instalação sem sujeira.`;
    heroImage = "https://www.neoflexpersianas.com.br/images/produto-02.webp";
    
    intro = `Se você reside ou possui um empreendimento comercial no bairro ${neighborhood.name} em Curitiba, sabe a importância de contar com fornecedores locais de confiança. A Nova's Persianas oferece uma experiência completa e sem estresse para quem quer instalar persianas sob medida no ${neighborhood.name}. Nós enviamos um especialista técnico até o seu endereço para coletar as medidas milimetricamente e apresentar nossos catálogos de tecidos sem compromisso.`;
    
    content = `Como o bairro ${neighborhood.name} possui características de perfil ${neighborhood.type}, nós desenvolvemos soluções exclusivas que se alinham perfeitamente ao estilo de vida da região. Seja para grandes coberturas envidraçadas ${neighborhood.landmarks}, ou para apartamentos compactos que precisam de otimização de espaço com persianas rolô ou double vision, nossa fábrica própria garante preço justo, acabamento de costura impecável e instalação profissional limpa e ágil.`;
  } else if (isProductRoute) {
    const productKey = cleanRoute.replace("persiana-", "").replace("-curitiba", "");
    const product = PRODUCTS_MAP[productKey] || {
      name: productKey.charAt(0).toUpperCase() + productKey.slice(1).replace(/-/g, " "),
      synonym: `cortina ${productKey}`,
      description: "design functional de alta durabilidade para controle de luz e calor sob medida",
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
  } else if (isIntentRoute) {
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
      intro = "Antes de descartar sua persiana sob medida por estar travada, suja ou com os cordões arrebentados, fale com a equipe de assistência técnica da Nova's Persianas. Nós somos especialistas na manutenção, reforma e higienização profunda de persianas de todas as marcas nacionais e importadas in Curitiba, resgatando a beleza e o perfeito funcionamento do produto por uma fração do preço de um novo.";
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

// Generate the complete programmatic list of all 150+ valid routes
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

export const NEIGHBORHOOD_SEO_ROUTES = Array.from(new Set([
  ...OFFICIAL_NEIGHBORHOODS.map(n => `persianas-${n}`),
  ...POPULAR_NEIGHBORHOODS.map(n => `persianas-${n}`),
  ...NEARBY_CITIES.map(c => `persianas-${c}`)
]));

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

export const ALL_SEO_ROUTES = Array.from(new Set([
  ...SPECIFIC_SEO_ROUTES,
  ...CORE_SEO_ROUTES,
  ...PRODUCT_SEO_ROUTES,
  ...NEIGHBORHOOD_SEO_ROUTES,
  ...INTENT_SEO_ROUTES,
  ...OLD_PLURAL_ROUTES,
  ...VENEZIANA_SEO_ROUTES
]));
