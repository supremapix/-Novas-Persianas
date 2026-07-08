/**
 * Specialized SEO Content Generator for Venezianas (Shutters)
 * Nova's Persianas Curitiba
 * Focuses on Search Intent, EEAT, NLP entities, and provides 2500-3500 words and 20+ comprehensive FAQs.
 */

export const VENEZIANA_SEO_ROUTES = [
  "manutencao-de-venezianas",
  "instalacao-de-venezianas",
  "instalacao-de-venezianas-automaticas",
  "tecnico-de-venezianas",
  "automatizacao-de-venezianas",
  "conserto-de-venezianas",
  "assistencia-tecnica-em-venezianas",
  "reparo-de-venezianas",
  "reforma-de-venezianas",
  "limpeza-de-venezianas",
  "venezianas-automaticas",
  "manutencao-de-venezianas-automaticas",
  "conversao-para-motorizacao",
  "troca-de-pecas-de-venezianas",
  "troca-de-cordoes-de-venezianas",
  "troca-de-fitas-de-venezianas",
  "troca-de-correntes-de-venezianas",
  "regulagem-de-venezianas",
  "lubrificacao-de-venezianas",
  "revisao-preventiva-de-venezianas",
  "atendimento-residencial-venezianas",
  "atendimento-comercial-venezianas",
  "atendimento-corporativo-venezianas",
  "atendimento-industrial-venezianas"
];

export interface VenezianaMeta {
  title: string;
  subtitle: string;
  description: string;
  intro: string;
  content: string;
}

export function getVenezianaMetadata(route: string): VenezianaMeta {
  const metaMap: Record<string, VenezianaMeta> = {
    "manutencao-de-venezianas": {
      title: "Manutenção de Venezianas Curitiba | Conserto e Assistência Técnica",
      subtitle: "Manutenção preventiva e corretiva de venezianas integradas, manuais e automáticas externas",
      description: "Precisa de manutenção de venezianas em Curitiba? Somos especialistas no conserto, lubrificação e troca de acessórios para venezianas de alumínio e PVC sob medida.",
      intro: "Se você tem venezianas externas de rolar em Curitiba, sabe que a poeira e a umidade podem causar travamentos e desgaste de fitas e molas. A Nova's Persianas oferece assistência técnica especializada para manter suas venezianas deslizando suavemente.",
      content: "Nosso serviço técnico inclui a limpeza das guias verticais, lubrificação com silicone de alto desempenho, troca de fitas recolhedoras desgastadas e regulagem mecânica de eixos e ponteiras. Fazemos o orçamento sem custo no seu domicílio."
    },
    "instalacao-de-venezianas": {
      title: "Instalação de Venezianas Curitiba | Modelos Externos sob Medida",
      subtitle: "Instalação profissional de venezianas de rolar em alumínio térmico e PVC para portas e janelas",
      description: "Procura instalação de venezianas em Curitiba? Oferecemos fabricação própria sob medida, alta isolação térmica e acústica com equipe técnica certificada.",
      intro: "Transforme suas fachadas e janelas com venezianas de enrolar externas de altíssima durabilidade. Produzidas sob medida pela Nova's, elas trazem vedação de luz 100% e conforto acústico incomparável para o seu imóvel.",
      content: "Nossas venezianas externas de alumínio injetado com poliuretano expandido barram o vento, o frio e o calor extremo de Curitiba. Contamos com instaladores próprios de alta qualificação que garantem o perfeito nivelamento e acabamento."
    },
    "instalacao-de-venezianas-automaticas": {
      title: "Instalação de Venezianas Automáticas Curitiba | Motorizadas sob Medida",
      subtitle: "Venezianas elétricas de enrolar integradas com controle remoto, Alexa e sensores inteligentes",
      description: "Especialistas em instalação de venezianas automáticas em Curitiba. Motorização silenciosa de alta durabilidade com garantia e medição grátis no Hauer e região.",
      intro: "Praticidade e sofisticação incomparáveis com as venezianas automáticas externas sob medida da Nova's. Abra e feche suas janelas pesadas com apenas um toque ou por comando de voz sincronizado com sua casa inteligente.",
      content: "Utilizamos motores tubulares silenciosos importados com certificação internacional de qualidade. Projetos integrados com centrais de automação e final de curso eletrônico de precisão regulado por técnicos experientes."
    },
    "tecnico-de-venezianas": {
      title: "Técnico de Venezianas Curitiba | Assistência Rápida em Domicílio",
      subtitle: "Técnicos especialistas para conserto, manutenção, troca de fitas e regulagem de motores",
      description: "Precisa de um técnico de venezianas em Curitiba? Atendimento rápido para resolver travamentos, trocar molas, fitas e configurar automação no seu endereço.",
      intro: "Evite dores de cabeça tentando consertar sistemas complexos de proteção solar por conta própria. Chame nosso técnico especialista em venezianas externas de rolar para um diagnóstico mecânico preciso e seguro no seu imóvel.",
      content: "Nossa equipe técnica móvel atende Curitiba e Região Metropolitana no mesmo dia para emergências. Carregamos componentes originais em nossos veículos para resolver o seu problema na primeira visita de forma definitiva."
    },
    "automatizacao-de-venezianas": {
      title: "Automatização de Venezianas Curitiba | Motorização de Venezianas",
      subtitle: "Transforme sua veneziana manual externa em automática e inteligente sem quebrar paredes",
      description: "Realizamos automatização de venezianas em Curitiba com motores tubulares importados de alta qualidade. Controle suas venezianas por aplicativo e comando de voz.",
      intro: "Sua veneziana de rolar manual de fita está pesada e difícil de puxar? Realizamos o retrofit mecânico instalando motores elétricos ou a bateria recarregável silenciosos dentro do eixo oco, sem quebrar sua alvenaria ou gesso.",
      content: "Modernize seu imóvel com economia e tecnologia. Nossos sistemas automatizados eliminam de vez cordões e fitas de tração (child & pet safety), agregando enorme valor estético e ergonômico para idosos e crianças."
    },
    "conserto-de-venezianas": {
      title: "Conserto de Venezianas Curitiba | Reforma e Assistência Técnica",
      subtitle: "Reparo de venezianas externas travadas, lâminas quebradas, troca de mola recolhedora e fitas",
      description: "Sua veneziana de rolar travou? Fazemos o conserto de venezianas em Curitiba no mesmo dia com peças de reposição originais e técnicos especializados.",
      intro: "Não gaste uma fortuna trocando suas esquadrias velhas de janela! O conserto especializado da Nova's resgata o perfeito funcionamento mecânico da sua veneziana por uma fração insignificante do valor de uma nova.",
      content: "Consertamos lâminas longitudinais entortadas por vento ou granizo, trocamos fitas desfiadas ou partidas, consertamos molas recolhedoras cansadas e trocamos rolamentos engripados com garantia e técnicos certificados."
    },
    "assistencia-tecnica-em-venezianas": {
      title: "Assistência Técnica em Venezianas Curitiba | Conserto e Reforma",
      subtitle: "Assistência técnica especializada em venezianas externas de rolar, motorizadas e manuais",
      description: "Melhor assistência técnica em venezianas de Curitiba. Atendemos venezianas de alumínio, PVC, integradas e externas com peças originais e garantia técnica.",
      intro: "Mantenha o perfeito controle de luz e isolamento térmico em sua casa com a assistência técnica líder em Curitiba. Consertamos venezianas externas de todas as marcas com rapidez e excelência.",
      content: "Seja para destravamento, troca de motor, troca de fita recolhedora ou reparo nas lâminas de alumínio térmico, nossa equipe oferece diagnóstico eletrônico a laser e troca de componentes no mesmo dia."
    },
    "reparo-de-venezianas": {
      title: "Reparo de Venezianas Curitiba | Assistência de Emergência",
      subtitle: "Reparo rápido de venezianas externas de enrolar travadas, fitas rompidas e motores queimados",
      description: "Realizamos reparo de venezianas em Curitiba com atendimento express em domicílio. Conserto de lâminas amassadas, recolhedores mecânicos e retrofit de eixos.",
      intro: "Sua veneziana de rolar travou de lado ou a fita arrebentou e ela desabou? Não se preocupe! Nossa equipe de técnicos móveis executa o reparo imediato com total segurança e peças de reposição de fábrica.",
      content: "Atendemos apartamentos e residências no Batel, Portão, Água Verde e demais regiões de Curitiba, reestabelecendo a leveza de operação e o isolamento termoacústico no mesmo dia."
    },
    "reforma-de-venezianas": {
      title: "Reforma de Venezianas Curitiba | Restauração Completa de Fábrica",
      subtitle: "Reforma e modernização de venezianas externas antigas de PVC, madeira e alumínio",
      description: "Sua veneziana está velha e pesada? Fazemos reforma completa de venezianas em Curitiba. Substituição de eixos, polias, garras e motorização de sistemas antigos.",
      intro: "Antes de gastar muito dinheiro trocando suas esquadrias, considere a reforma estrutural e estética da sua veneziana externa de enrolar. A Nova's Persianas restaura o pleno funcionamento e o brilho original de fábrica.",
      content: "Substituímos eixos de madeira por liga especial de alumínio estrutural, trocamos rolamentos velhos por esferas de aço autolubrificantes e repomos lâminas quebradas com pintura eletrostática idêntica."
    },
    "limpeza-de-venezianas": {
      title: "Limpeza de Venezianas Curitiba | Lavagem e Higienização Química",
      subtitle: "Higienização profunda contra mofo, fungos e poluição urbana com retirada e reinstalação",
      description: "Sua veneziana está preta de fuligem ou mofada? Realizamos limpeza de venezianas em Curitiba com produtos bactericidas biodegradáveis que eliminam ácaros.",
      intro: "O clima úmido de Curitiba favorece o acúmulo de manchas escuras de bolor e ácaros nas venezianas externas de rolar. Nossa lavagem industrial profunda protege a saúde de sua família eliminando mofo de forma definitiva.",
      content: "Utilizamos agentes químicos biodegradáveis que limpam as tramas das fitas e as lâminas sem agredir a pintura eletrostática ou enferrujar os componentes da caixa superior de enrolamento."
    },
    "venezianas-automaticas": {
      title: "Venezianas Automáticas Curitiba | Motorização e Conforto sob Medida",
      subtitle: "Instalação de venezianas elétricas de enrolar com controle remoto e integração inteligente",
      description: "Especialistas em venezianas automáticas em Curitiba. Fabricação própria sob medida, motores tubulares silenciosos e integração com Alexa e celular.",
      intro: "As venezianas automáticas trazem o máximo de elegância, ergonomia e facilidade para sua rotina diária em Curitiba. Abra e feche suas janelas com apenas um toque ou por agendamento automático no smartphone.",
      content: "Substituímos mecanismos pesados manuais de fita por motores tubulares modernos instalados dentro do eixo da veneziana, mantendo o visual limpo, livre de fios e seguro para crianças e pets."
    },
    "manutencao-de-venezianas-automaticas": {
      title: "Manutenção de Venezianas Automáticas Curitiba | Assistência em Motores",
      subtitle: "Manutenção preventiva e corretiva de motores tubulares, centrais e sensores de automação",
      description: "Sua veneziana elétrica parou de funcionar ou desregulou? Oferecemos assistência técnica especializada em manutenção de venezianas automáticas em Curitiba.",
      intro: "Venezianas automáticas exigem precisão técnica absoluta. Quando o limite de curso desregula ou o motor produz estalos metálicos, nossa assistência faz o diagnóstico fino para preservar a integridade do sistema elétrico.",
      content: "Testamos a tensão da fiação, ajustamos o sensor eletrônico de parada fina, lubrificamos as guias laterais e substituímos centrais RF ou receptores com garantia técnica direto de fábrica."
    },
    "conversao-para-motorizacao": {
      title: "Conversão para Motorização de Venezianas Curitiba | Retrofit de Fita para Motor",
      subtitle: "Transforme sua veneziana manual de fita em automática sem quebrar gesso ou alvenaria",
      description: "Diga adeus à fita pesada! Fazemos a conversão para motorização de venezianas em Curitiba com motores tubulares importados de até 5 anos de garantia.",
      intro: "Sua veneziana manual está pesada e quebrando a fita de tração constantemente? O serviço de conversão para motorização (retrofit mecânico) da Nova's instala motores elétricos ou a bateria de forma limpa e rápida.",
      content: "Aproveitamos toda a estrutura existente, substituindo apenas os mechanisms internos antigos por um tubo de alumínio de alta densidade equipado com motor tubular silencioso integrado ao seu Wi-Fi."
    },
    "troca-de-pecas-de-venezianas": {
      title: "Troca de Peças de Venezianas Curitiba | Acessórios Originais",
      subtitle: "Substituição técnica de recolhedores, eixos, rolamentos e garras com peças de fábrica",
      description: "Precisa de peças para venezianas em Curitiba? Fornecemos e instalamos acessórios originais com garantia: molas, garras, rolamentos e ponteiras guia.",
      intro: "O funcionamento macio de uma veneziana externa depende da saúde mecânica de cada pequena engrenagem. A Nova's Persianas mantém um amplo estoque de peças originais para reposição imediata no seu endereço.",
      content: "Nossos técnicos andam com veículos equipados com polias de nylon, molas espirais, rolamentos vedados de esferas de aço e garras de segurança para resolver qualquer falha mecânica na primeira visita técnica."
    },
    "troca-de-cordoes-de-venezianas": {
      title: "Troca de Cordões de Venezianas Curitiba | Assistência Técnica Rápida",
      subtitle: "Substituição de cordões de tração desfiados ou rompidos com agilidade em domicílio",
      description: "Seu cordão de veneziana arrebentou? Realizamos a troca de cordões de venezianas em Curitiba no mesmo dia com nylon duplo de alta resistência mecânica.",
      intro: "Mecanismos de venezianas com cordão manual exigem cabos de alta performance que suportem o atrito contínuo. Se o seu cordão arrebentou, o conserto da Nova's devolve o perfeito funcionamento de forma segura.",
      content: "Instalamos cordões industriais de poliamida com costura reforçada anti-desgaste, substituímos polias trincadas e regulamos a tração interna do cabeçote para que a subida fique extremamente leve."
    },
    "troca-de-fitas-de-venezianas": {
      title: "Troca de Fitas de Venezianas Curitiba | Conserto e Substituição",
      subtitle: "Troca de correias (fitas) de nylon de parede para venezianas externas de enrolar",
      description: "Fita da veneziana desfiou ou quebrou? Fazemos a troca de fitas de venezianas em Curitiba no mesmo dia com poliéster reforçado com tratamento UV.",
      intro: "A fita recolhedora de nylon de parede é o componente mecânico que mais sofre esforço físico diário. A Nova's Persianas realiza a troca preventiva e corretiva da fita em toda a grande Curitiba de forma expressa.",
      content: "Substituímos a fita antiga por um modelo premium de poliéster duplo industrial, revisamos o recolhedor mecânico de parede e regulamos o tensionador de mola para garantir uma operação sem emperramentos."
    },
    "troca-de-correntes-de-venezianas": {
      title: "Troca de Correntes de Venezianas Curitiba | Conserto de Acessórios",
      subtitle: "Substituição de correntes de nylon e metal de acionamento para venezianas e persianas",
      description: "Corrente de acionamento quebrou ou travou? Realizamos a troca de correntes de venezianas em Curitiba com componentes reforçados de alta resistência.",
      intro: "As correntes de esferas plásticas ou metálicas controlam o basculamento ou recolhimento das lâminas de sua veneziana. Oferecemos correntes de nylon de alta densidade anti-estiramento com excelente durabilidade.",
      content: "Nossos instaladores substituem correntes arrebentadas, adicionam limitadores de curso mecânicos e instalam garras fixadoras de parede (child safety) para evitar perigos com crianças e animais de estimação."
    },
    "regulagem-de-venezianas": {
      title: "Regulagem de Venezianas Curitiba | Alinhamento e Prumo Fino",
      subtitle: "Ajuste técnico de prumo, nivelamento de lâminas e sincronização mecânica",
      description: "Sua veneziana está subindo torta ou batendo? Oferecemos regulagem de venezianas em Curitiba com nível a laser e técnicos licenciados. Evite queimas de motor.",
      intro: "Lâminas desalinhadas lateralmente causam atrito excessivo contra as guias verticais, forçando o mecanismo e correndo o risco de engavetar. A regulagem fina da Nova's preserva a vida útil de todo o sistema.",
      content: "Alinhamos as lâminas longitudinalmente utilizando prumo digital tridimensional, instalamos ponteiras guias de nylon, regulamos a tensão da mola de mastro e eliminamos ruídos e chiados metálicos incômodos."
    },
    "lubrificacao-de-venezianas": {
      title: "Lubrificação de Venezianas Curitiba | Silicone Técnico de Alta Performance",
      subtitle: "Limpeza de canaletas e lubrificação técnica com silicone que repele poeira e fuligem",
      description: "Veneziana pesada ou rangendo? Realizamos lubrificação de venezianas em Curitiba com silicone seco industrial que não acumula sujeira. Atendimento rápido.",
      intro: "Nunca use óleo mineral, graxa ou grafite em pó nas guias de sua veneziana! Esses lubrificantes comuns se misturam à poeira e fuligem de Curitiba, criando uma crosta abrasiva que destrói as engrenagens e as lâminas.",
      content: "Nossa lubrificação especializada limpa quimicamente todos os detritos dos trilhos e aplica uma película protetora de silicone seco autolubrificante que repele poeira e garante um deslizar livre e silencioso."
    },
    "revisao-preventiva-de-venezianas": {
      title: "Revisão Preventiva de Venezianas Curitiba | Evite Quebras e Danos",
      subtitle: "Check-up técnico completo de venezianas de enrolar com limpeza e ajustes periódicos",
      description: "Faça uma revisão preventiva de venezianas em Curitiba e economize muito! Testamos molas, engrenagens, fitas e motores com técnicos próprios especializados.",
      intro: "Assim como em um automóvel, realizar um check-up mecânico periódico em suas venezianas externas de enrolar a cada 18 ou 24 meses evita paradas surpresas, acidentes domésticos e custos elevados com reparos emergenciais.",
      content: "Nosso técnico examina o nível de desgaste das fitas, o balanceamento de peso no eixo central, a fixação dos suportes na parede e a assepsia geral contra mofo e poeira rígida, aplicando os ajustes mecânicos necessários."
    },
    "atendimento-residencial-venezianas": {
      title: "Atendimento Residencial de Venezianas Curitiba | Conforto no Seu Lar",
      subtitle: "Assistência técnica rápida e humanizada de venezianas para casas, sobrados e apartamentos",
      description: "Melhor atendimento residencial para venezianas em Curitiba. Técnicos discretos, pontuais e equipados com aspirador de pó para instalações limpas no seu lar.",
      intro: "Prezamos pelo absoluto conforto, silêncio e segurança do seu ambiente residencial em Curitiba. Nossa equipe móvel realiza visitas agendadas, respeitando os horários do condomínio e a privacidade de sua família.",
      content: "Seja para consertar a veneziana do quarto do bebê de forma silenciosa ou motorizar as janelas da sala de estar para idosos no Batel ou Cabral, oferecemos o tratamento humanizado e cuidadoso de alto padrão que você merece."
    },
    "atendimento-comercial-venezianas": {
      title: "Atendimento Comercial de Venezianas Curitiba | Proteção para Sua Loja",
      subtitle: "Instalação, manutenção e automação de venezianas externas para comércios e lojas",
      description: "Precisa de manutenção ou venezianas novas para sua empresa? Oferecemos atendimento comercial de venezianas em Curitiba com condições especiais e NF-e.",
      intro: "A fachada comercial de sua empresa ou loja em Curitiba necessita de segurança rígida contra arrombamentos, excelente controle solar térmico para proteger vitrines de produtos e um visual sofisticado de alto padrão.",
      content: "Desenvolvemos projetos de venezianas externas sob medida de alta segurança em ligas nobres de alumínio anodizado, com sistemas automáticos sincronizados por controle remoto e suporte de manutenção técnica expressa."
    },
    "atendimento-corporativo-venezianas": {
      title: "Atendimento Corporativo de Venezianas Curitiba | Escritórios e Empresas",
      subtitle: "Projetos de proteção solar e automação de venezianas externas para escritórios e corporações",
      description: "Atendimento corporativo especializado para venezianas e persianas em Curitiba. Projetos sob medida, facilidade de faturamento e suporte de engenharia.",
      intro: "Otimize o consumo de ar-condicionado e elimine reflexos de luz solar nas telas de computadores em seu escritório de Curitiba. Nossas venezianas térmicas sob medida agregam produtividade, silêncio acústico e ergonomia.",
      content: "Atendemos construtoras, escritórios de arquitetura, clínicas e sedes empresariais com contratos de manutenção preventiva programada, faturamento simplificado em CNPJ e cumprimento rigoroso de normas técnicas de segurança."
    },
    "atendimento-industrial-venezianas": {
      title: "Atendimento Industrial de Venezianas Curitiba | Galpões e Indústrias",
      subtitle: "Venezianas de alta segurança, isolação térmica e acústica de alta performance para indústrias",
      description: "Manutenção e instalação de venezianas de enrolar industriais em Curitiba e RMC. Equipe com EPI completa, certificações de segurança (NR-35) e suporte técnico.",
      intro: "Galpões e indústrias na CIC, Pinhais ou Araucária exigem sistemas de proteção mecânica robustos que resistam a intempéries severas e tragam alta isolação acústica para reduzir ruídos produtivos externos.",
      content: "Instalamos venezianas industriais de enrolar automáticas com ligas estruturais pesadas de alumínio injetadas com poliuretano de alta densidade, com técnicos certificados pelas normas NR-35 (trabalho em altura) e NR-12."
    }
  };

  return metaMap[route] || {
    title: "Serviço de Veneziana Curitiba | Nova's Persianas",
    subtitle: "Soluções técnicas sob medida com preço de fábrica e medição grátis",
    description: "Serviço técnico especializado de venezianas externas em Curitiba. Equipe própria, peças originais, orçamento grátis e pagamento facilitado.",
    intro: "Mantenha o perfeito funcionamento mecânico de suas venezianas com a equipe qualificada da Nova's Persianas. Oferecemos soluções eficientes em Curitiba.",
    content: "Atendimento técnico em domicílio com rapidez, componentes originais e garantia estendida direta do fabricante."
  };
}

export function generateVenezianaFaq(route: string): Array<{ q: string; a: string }> {
  const isManutencao = route.includes("manutencao");
  const isInstalacao = route.includes("instalacao") && !route.includes("automaticas");
  const isAutomatica = route.includes("automaticas") || route.includes("automatizacao");
  const isTecnico = route.includes("tecnico");
  const isConserto = route.includes("conserto");

  return [
    {
      q: "Qual é a diferença real entre a manutenção preventiva e o conserto corretivo de venezianas externas?",
      a: "A manutenção preventiva de venezianas externas de rolar consiste em vistorias periódicas para higienização profunda das lâminas, lubrificação das guias laterais com silicone de alto desempenho (nunca grafite ou graxa comum), reaperto dos parafusos das ponteiras e alinhamento milimétrico do eixo de sustentação. O objetivo é evitar falhas graves. Já o conserto corretivo intervém de forma direta para sanar problemas já instalados, como o travamento total das lâminas na caixa, o rompimento da fita de tração de nylon ou a queima mecânica do motor tubular nas venezianas automatizadas, devolvendo a plena operacionalidade ao sistema."
    },
    {
      q: "Quanto custa em média o conserto ou a manutenção de uma veneziana externa em Curitiba?",
      a: "O custo médio varia conforme a extensão do dano e as peças que precisam de substituição técnica. Serviços simples de regulagem, limpeza dos canais e lubrificação iniciam em valores bastante acessíveis. Já reparos que exigem a substituição de componentes específicos, como a fita recolhedora (correia), a mola recolhedora mecânica de alumínio, garras de fixação ou a troca de lâminas de alumínio danificadas por granizo, dependem das medidas exatas do vão da janela. Na Nova's Persianas, somos fabricantes, o que elimina a taxa de intermediários, oferecendo preço justo direto de fábrica, orçamento rápido via WhatsApp e facilidade de pagamento em até 10 vezes sem juros."
    },
    {
      q: "Como funciona o processo de motorização e automatização de venezianas de rolar antigas?",
      a: "A automatização de venezianas externas de rolar manuais é extremamente prática e limpa quando realizada por especialistas licenciados. Nós substituímos o eixo de sustentação de madeira ou ferro por um eixo de alumínio estrutural oco. Dentro deste tubo de enrolamento, inserimos um motor tubular silencioso da especificação correta para o peso das lâminas (calculado em Newtons/Metro). Em seguida, fazemos a conexão elétrica e configuramos a central de automação e os finais de curso eletrônicos. Todo o processo leva poucas horas e dispensa reformas de alvenaria ou fiações externas aparentes, transformando uma veneziana pesada em um sistema inteligente acionado por controle ou aplicativo móvel."
    },
    {
      q: "Quais são as vantagens de optar por venezianas externas de alumínio sob medida em relação às de PVC ou madeira?",
      a: "As venezianas de alumínio sob medida oferecem excelente custo-benefício e durabilidade máxima no clima úmido e instável de Curitiba. Nossas lâminas de alumínio dupla face possuem preenchimento térmico e acústico interno de poliuretano expandido injetado (RPU), o que forma uma barreira intransponível contra o frio intenso do inverno e o calor do verão, além de reduzir drasticamente os ruídos urbanos. Diferente do PVC comum que pode sofrer ressecamento ou amarelamento sob radiação UV contínua, ou da madeira natural que requer lixamento e aplicação periódica de verniz contra umidade e pragas, o alumínio recebe pintura eletrostática a pó que mantém a cor vívida, livre de corrosão e sem necessidade de manutenção estética por décadas."
    },
    {
      q: "Com qual frequência de tempo é recomendável contratar um técnico de venezianas para fazer uma revisão?",
      a: "Para venezianas de rolar externas que enfrentam exposição diária à chuva, sol e poeira urbana de Curitiba, recomendamos uma revisão preventiva completa a cada 18 ou 24 meses. Em apartamentos ou residências próximas a avenidas de tráfego pesado de ônibus (como as canaletas expressas do Hauer, Portão ou Cabral), o acúmulo de fuligem preta de óleo diesel nas guias é muito acelerado, sendo ideal realizar a higienização técnica e lubrificação a cada 12 meses. Esse cuidado simples evita o atrito excessivo, reduzindo o esforço mecânico sobre a mola de tração ou o motor elétrico, dobrando a vida útil útil de todos os componentes internos."
    },
    {
      q: "A Nova's Persianas cobra alguma taxa de deslocamento para realizar o orçamento em domicílio na cidade de Curitiba?",
      a: "De forma alguma! Nossos consultores e técnicos técnicos realizam visitas de avaliação milimétrica em domicílio com frota de atendimento própria em todos os bairros de Curitiba (como Batel, Portão, Água Verde, Santa Felicidade, Centro Cívico, Juvevê, Cabral) de forma 100% gratuita, sem qualquer cobrança de deslocamento ou taxa de visita. O técnico avalia o estado geral da veneziana, diagnostica a falha com precisão e passa o orçamento na hora, sem qualquer compromisso de compra por parte do cliente."
    },
    {
      q: "Qual é o prazo médio que a equipe leva para consertar ou instalar uma veneziana automática?",
      a: "Para consertos emergenciais de venezianas travadas ou rompidas, buscamos prestar o atendimento técnico no mesmo dia ou em no máximo 24 horas úteis após o chamado, sabendo que a falta de segurança ou claridade incomoda muito. Já para a fabricação e instalação de venezianas externas de rolar sob medida inteiramente novas, o prazo médio de produção em nossa fábrica própria situada no bairro Hauer varia de 7 a 10 dias úteis, com agendamento pontual da instalação técnica de acordo com a preferência do morador."
    },
    {
      q: "Quais marcas de motores de venezianas e componentes técnicos vocês atendem e oferecem reposição?",
      a: "Nossa equipe técnica possui treinamento avançado e ampla experiência em todas as marcas de motorização e acessórios de proteção solar nacionais e importados atuantes no mercado brasileiro, incluindo marcas líderes como Somfy, Emteco, Udinese, Weinor, Nice, Tuya e Broadlink. Mantemos em nosso estoque próprio do Showroom no Hauer um amplo estoque de componentes de reposição originais, como botoeiras, transmissores remotos, centrais receptoras RF, rolamentos, polias de nylon, eixos octogonais e lâminas de reposição de diversas cores."
    },
    {
      q: "O que costuma causar o travamento frequente das venezianas externas de enrolar manuais?",
      a: "O travamento de venezianas de rolar pode ter várias origens físicas. As principais são: 1) Lâminas desalinhadas lateralmente por falta de ponteiras guia, fazendo com que as bordas de alumínio engatem nos perfis de alumínio das guias verticais; 2) Acúmulo de sujeira rígida, fuligem, folhas ou insetos mortos dentro dos trilhos, impedindo o livre curso; 3) Desgaste e ressecamento dos rolamentos internos do eixo superior da caixa de recolhimento; 4) Ruptura parcial da fita de tração ou quebra da mola de aço do recolhedor mecânico de parede, o que faz com que o peso despenque torto e trave."
    },
    {
      q: "Ainda é possível consertar e restaurar venezianas de PVC antigas de marcas que já saíram do mercado?",
      a: "Sim, perfeitamente! Embora muitas marcas e modelos antigos de venezianas de PVC tenham saído de linha, nossa equipe possui alta capacitação em engenharia de adaptação de venezianas. Nós conseguimos substituir lâminas rachadas ou quebradas por modelos equivalentes compatíveis com pintura idêntica, reestruturar caixas internas de alvenaria desreguladas e modernizar o sistema de rolamento antigo para eixos de alumínio autolubrificantes modernos, devolvendo o perfeito deslizamento suave e prolongando a vida útil de peças vintage sem descaracterizar a fachada do prédio."
    },
    {
      q: "Quais cuidados essenciais o morador deve ter na limpeza diária de suas venezianas automáticas para evitar danos?",
      a: "A limpeza regular deve ser simples e segura. Para a poeira diária, utilize espanador ou o bocal escova do aspirador de pó com baixa potência de sucção. Para remover manchas e marcas de chuva ácida ou poluição nas lâminas externas de alumínio, passe um pano de microfibra limpo umedecido em uma mistura de água morna com sabão neutro biodegradável. Nunca utilize jatos de água de alta pressão (lava-jatos) diretamente sobre a caixa superior de recolhimento, pois isso pode infiltrar umidade na cabeça eletrônica do motor elétrico tubular e causar curto-circuito irreparável. Evite também palhas de aço ou solventes abrasivos que removem a pintura protetora eletrostática."
    },
    {
      q: "Vocês realizam a troca apenas da fita (cordão) ou do cabo de aço de venezianas que arrebentaram?",
      a: "Sim, este é um dos serviços de assistência corretiva mais comuns que executamos diariamente em Curitiba. A fita de tração de nylon, devido ao atrito contínuo de subida e descida contra a guia mecânica de parede, sofre desgaste natural por fricção e tende a desfiar até arrebentar. Nós realizamos a troca completa da fita velha por uma fita premium de poliéster reforçado com costura dupla industrial, substituímos o passador de fita de metal para evitar atrito desnecessário e revisamos a pressão interna da mola espiral do recolhedor, garantindo recolhimento leve, suave e super seguro."
    },
    {
      q: "O que é o sistema de segurança 'child and pet safety' aplicado nas venezianas automatizadas?",
      a: "O conceito de segurança infantil e pet em proteção solar foca na eliminação total de cordões livres e fitas suspensas que podem gerar riscos de estrangulamento acidental ou quedas para crianças pequenas e animais domésticos. Com a automatização total das venezianas externas Nova's, não existem fios ou amarras penduradas. O controle é 100% digital e sem fio por rádio frequência ou comando de voz via assistentes inteligentes, mantendo o ambiente totalmente seguro, esteticamente limpo e moderno."
    },
    {
      q: "Como as venezianas externas protegem as janelas de vidro de tempestades de vento ou granizo em Curitiba?",
      a: "As tempestades de verão com fortes ventos e severas chuvas de granizo (pedras de gelo) são uma realidade recorrente em Curitiba que frequentemente causam a quebra de vidraças de apartamentos e sobrados. Ao fechar totalmente suas venezianas de alumínio térmico de rolar da Nova's, as lâminas formam um escudo mecânico externo rígido e altamente resistente que absorve integralmente a energia do impacto do granizo, blindando o vidro interno de danos. Além disso, a estrutura de travamento lateral impede que a forte pressão do vento force as folhas de vidro das janelas, prevenindo trincas estruturais."
    },
    {
      q: "Como integrar as venezianas automáticas com a assistente virtual Alexa ou Google Home em Curitiba?",
      a: "Nossos motores tubulares de veneziana automática utilizam protocolo de comunicação por rádio frequência de 433MHz ou conexão Wi-Fi direta de 2.4GHz. Através de um pequeno hub de automação inteligente (como a central Broadlink RM4 Pro ou dispositivo inteligente Tuya Smart), fazemos o pareamento das venezianas. Uma vez configuradas no aplicativo do smartphone, instalamos a 'skill' correspondente no aplicativo da Amazon Alexa ou Google Home. Isso permite criar rotinas automáticas de comando por voz altamente customizadas, facilitando o controle diário e trazendo extrema sofisticação tecnológica ao imóvel."
    },
    {
      q: "Existe diferença técnica na durabilidade entre motores elétricos tradicionais e motores à bateria recarregável?",
      a: "Ambos os tipos de motores tubulares modernos possuem altíssima tecnologia e durabilidade estendida com garantia completa de fábrica de até 5 anos. A principal diferença reside na facilidade de instalação física: motores elétricos tradicionais exigem um ponto de energia elétrica próximo de 110V ou 220V na caixa de recolhimento. Já os motores recarregáveis por bateria de lítio de alta densidade dispensam qualquer tipo de fiação ou conduíte elétrico, sendo perfeitos para janelas onde não há preparação elétrica na parede. Uma única carga completa da bateria de lítio via cabo micro-USB proporciona até 6 meses de uso contínuo diário de subida e descida."
    },
    {
      q: "Por que a veneziana de rolar motorizada começa a subir torta ou produz estalos mecânicos ao movimentar?",
      a: "Esses sintomas físicos indicam necessidade urgente de assistência técnica especializada para evitar a quebra total do sistema. Os estalos mecânicos geralmente são causados por garras de fixação desgastadas que prendem a primeira lâmina ao eixo octogonal, ou por lâminas que se deslocaram lateralmente e estão batendo na borda de ferro da caixa de recolhimento. A veneziana subindo torta indica desregulagem ou quebra de um dos tirantes laterais de nylon ou aço, fazendo com que o eixo puxe apenas um dos lados com força, o que pode sobrecarregar o motor tubular e causar a queima do enrolamento interno."
    },
    {
      q: "Qual é a cobertura de garantia estendida que a Nova's Persianas oferece nos serviços de manutenção e conserto?",
      a: "Temos orgulho de oferecer o melhor padrão de qualidade técnica de Curitiba. Em todas as nossas instalações de venezianas novas sob medida de alumínio e PVC, oferecemos até 2 anos de garantia completa contra falhas de fabricação e material de tecidos e componentes metálicos, além de 1 ano de garantia total na nossa instalação técnica de fixação estrutural. Para serviços de conserto corretivo e manutenção de peças (como a troca de fitas, recolhedor ou motores), fornecemos garantia técnica integral de 90 dias a 1 ano sobre os componentes substituídos e a mão de obra especializada contratada."
    },
    {
      q: "Quais bairros e cidades próximas de Curitiba possuem atendimento técnico ágil de emergência?",
      a: "Atendemos com técnicos motorizados e equipe própria em toda a extensão urbana de Curitiba, cobrindo bairros residenciais e comerciais como Batel, Portão, Água Verde, Cabral, Hauer, Boqueirão, CIC, Centro, Jardim Social, Mercês, Bigorrilho, Santa Felicidade, Ecoville, e Bacacheri. Estendemos nosso atendimento completo de vendas, medição grátis e manutenção para cidades vizinhas da Região Metropolitana, como São José dos Pinhais, Pinhais, Colombo, Araucária, Campo Largo, Quatro Barras e Piraquara, garantindo a mesma pontualidade britânica e qualidade."
    },
    {
      q: "Como posso entrar em contato rápido para agendar uma visita técnica gratuita com a Nova's?",
      a: "Entrar em contato com nossa central de atendimento humanizada é extremamente rápido, fácil e prático. Você pode nos ligar diretamente em nosso telefone fixo destacado **(41) 3278-8598** ou falar de forma instantânea com nossa equipe comercial através do WhatsApp oficial **(41) 99550-7310**. Se preferir uma experiência presencial completa de alto padrão, visite o nosso Showroom físico localizado no bairro Hauer, na **Rua Frei Henrique de Coimbra, 1750, Curitiba**, onde contamos com estacionamento privativo privativo, café quente e uma ampla gama de modelos em tamanho real para teste de acionamentos."
    }
  ];
}

export function generateVenezianaBodyText(route: string, title: string, subtitle: string): string {
  const isManutencao = route.includes("manutencao") || route.includes("revisao");
  const isInstalacao = (route.includes("instalacao") && !route.includes("automaticas")) || route.includes("residencial") || route.includes("comercial") || route.includes("corporativo") || route.includes("industrial");
  const isAutomatica = route.includes("automaticas") || route.includes("automatizacao") || route.includes("motorizacao");
  const isTecnico = route.includes("tecnico") || route.includes("assistencia");
  const isConserto = route.includes("conserto") || route.includes("reparo") || route.includes("reforma") || route.includes("limpeza") || route.includes("troca") || route.includes("regulagem") || route.includes("lubrificacao") || (!route.includes("manutencao") && !route.includes("instalacao") && !route.includes("tecnico") && !route.includes("automatizacao") && !route.includes("revisao") && !route.includes("assistencia"));

  let h1 = title;
  let dynamicKeyword = isManutencao ? "manutenção preventiva de venezianas de rolar" :
                       isInstalacao ? "instalação técnica de venezianas sob medida" :
                       isAutomatica ? "automação e motorização inteligente de venezianas" :
                       isTecnico ? "assistência técnica com técnico especializado em venezianas" :
                       isConserto ? "conserto corretivo e restauração de venezianas" : "serviços especializados de venezianas";

  let focusIntroduction = "";
  let focusSection2 = "";
  let focusSection3 = "";
  let focusSection4 = "";
  let focusSection5 = "";
  let focusSection6 = "";

  if (isManutencao) {
    focusIntroduction = `
      <p>
        A <strong>manutenção de venezianas em Curitiba</strong> é um serviço essencial para garantir o pleno conforto térmico e a segurança de residências e edifícios comerciais. As venezianas externas de enrolar (também conhecidas como persianas integradas ou persianas externas de rolar) desempenham um papel térmico fundamental em nossa cidade, caracterizada por oscilações térmicas severas e alta umidade do ar. Quando o morador negligencia a revisão preventiva, a fricção contínua das lâminas contra as guias verticais pode desgastar as garras metálicas de fixação, acumular poeira rígida e mofo fúngico nas frestas e acelerar o estresse físico do recolhedor mecânico de parede, gerando falhas que exigem reparos custosos no futuro.
      </p>
      <p>
        Na Nova's Persianas, nossa metodologia de manutenção preventiva vai muito além de uma simples lubrificação rápida. Nós realizamos um diagnóstico completo em domicílio que avalia minuciosamente o estado de fadiga mecânica das molas espirais de aço, a integridade estrutural das lâminas de alumínio térmico com poliuretano expandido, o alinhamento central do eixo octogonal de alumínio e o nível de atrito da fita de tração. Nosso foco é agir preventivamente para restabelecer a leveza de operação e impedir o travamento repentino da peça, garantindo o sono silencioso e a privacidade absoluta de nossos clientes.
      </p>
    `;
    focusSection2 = `
      <h3>Manutenção Preventiva de Venezianas: Como prolongar a vida útil de suas peças em Curitiba</h3>
      <p>
        O clima úmido de Curitiba é o principal acelerador do desgaste de mecanismos de proteção solar externa. O mofo se prolifera nas tramas da fita de nylon e a umidade contínua oxida rolamentos de ferro em sistemas antigos que não utilizam ligas inoxidáveis de alta tecnologia. Realizar uma manutenção periódica preventiva a cada 18 ou 24 meses impede esse declínio funcional. Nosso processo envolve a retirada dos perfis laterais, a higienização química bactericida e fungicida profunda de todas as lâminas e guias, e a aplicação de silicone técnico autolubrificante (nunca grafite em pó ou graxa industrial pesada, que acumulam sujeira e formam uma massa abrasiva que emperra os trilhos).
      </p>
      <p>
        Benefícios práticos da manutenção técnica periódica:
      </p>
      <ul>
        <li><strong>Redução drástica do esforço físico:</strong> O acionamento manual por fita ou cabo de aço torna-se extremamente suave e leve de recolher, eliminando riscos de rompimento das cordas por atrito.</li>
        <li><strong>Prevenção de queima mecânica do motor elétrico:</strong> Nas venezianas automatizadas, o alinhamento das lâminas reduz o torque exigido do motor tubular, evitando superaquecimento eletrônico e falhas prematuras.</li>
        <li><strong>Economia financeira substancial:</strong> Realizar pequenos ajustes de alinhamento e lubrificação é de 5 a 8 vezes mais barato do que substituir motores tubulares queimados ou lâminas retorcidas e amassadas após um travamento severo na caixa de rolar superior.</li>
        <li><strong>Eliminação total de ruídos e estalos indesejados:</strong> Removemos ruídos metálicos desagradáveis causados pelo desalinhamento das lâminas de alumínio e atrito com as bordas laterais das guias verticais de ferro ou PVC rígido.</li>
      </ul>
    `;
    focusSection3 = `
      <h3>Procedimentos Técnicos Avançados de Limpeza e Troca de Acessórios</h3>
      <p>
        Nosso técnico especialista realiza a vistoria mecânica diretamente no local da instalação. Caso seja identificada a necessidade de troca de acessórios desgastados pelo tempo (como o recolhedor mecânico de mola de parede, ponteiras guias de lâmina, garras metálicas de suporte do eixo ou a troca da fita de náilon desfiada), realizamos a substituição na hora com componentes originais de fábrica de alta durabilidade mecânica.
      </p>
      <p>
        A substituição preventiva da fita recolhedora é crucial. Fitas velhas desfiadas perdem a resistência mecânica de tração e podem arrebentar de repente, fazendo com que todo o peso da veneziana (que pode chegar a 15kg ou 20kg em janelas grandes) despenque com força sobre o peitoril de granito, o que quebra as lâminas inferiores e amassa as guias. Nossos técnicos utilizam fitas especiais de poliéster duplo industrial reforçado com tratamento químico anti-fricção e anti-mofo que garantem anos de subida e descida livres de desgaste.
      </p>
    `;
  } else if (isInstalacao) {
    focusIntroduction = `
      <p>
        A <strong>instalação de venezianas em Curitiba</strong> representa um investimento estratégico de alto padrão para quem valoriza conforto térmico, isolamento acústico superior, privacidade impecável e proteção rígida contra intempéries. Diferente de cortinas de tecido tradicionais internas, as venezianas externas de enrolar formam uma blindagem externa física que impede os raios solares de atingirem o vidro da janela, diminuindo em até 70% a entrada de calor térmico no verão e conservando o calor dos aquecedores no inverno de Curitiba.
      </p>
      <p>
        Na Nova's Persianas, oferecemos um serviço completo e integrado de fabricação própria e instalação técnica milimétrica sob medida de venezianas de alumínio e PVC de rolar externas. Nossos consultores realizam medição técnica com trenas eletrônicas a laser em domicílio de forma totalmente gratuita, avaliando as características específicas da estrutura de alvenaria e o tipo de fixação mecânica adequado (seja para paredes de gesso drywall, vigas de concreto armado ou fachadas de edifícios residenciais de bairros como Batel, Portão, Cabral e Ecoville).
      </p>
    `;
    focusSection2 = `
      <h3>O Processo de Fabricação sob Medida de Venezianas de Alumínio e PVC de Rolar</h3>
      <p>
        Nossa fábrica própria situada no tradicional bairro Hauer em Curitiba utiliza maquinários industriais de última geração de alta precisão para produzir venezianas que atendem de forma perfeita a frestas e vãos milimétricos. Nossas lâminas de alumínio de alta resistência possuem dupla face estrutural preenchida internamente com poliuretano expandido (RPU) de alta densidade injetado. Esse recheio térmico funciona como um verdadeiro colchão de ar isolante acústico e de temperatura contra o frio extremo das madrugadas de Curitiba e os fortes ruídos urbanos.
      </p>
      <p>
        Além disso, todas as nossas venezianas de alumínio recebem pintura eletrostática a pó de alta resistência térmica que impede o desbotamento, descascamento ou aparecimento de manchas amareladas causadas pelo tempo e radiação ultravioleta. Para quem busca uma solução antialérgica de alta assepsia e excelente durabilidade, nossas venezianas de PVC rígido reforçado possuem tratamento químico anti-UV de última geração e são fáceis de higienizar com água neutra e sabão biodegradável.
      </p>
    `;
    focusSection3 = `
      <h3>Instalação Técnica Avançada: Precisão milimétrica que evita falhas funcionais</h3>
      <p>
        A qualidade de uma veneziana externa depende 50% de sua fabricação sob medida e 50% de sua instalação mecânica. Uma veneziana montada fora do prumo por instaladores desqualificados sofrerá atrito lateral excessivo em um dos lados, fazendo com que as lâminas subam tortas e danifiquem as ponteiras de nylon guias, desgastem o recolhedor mecânico de parede e forcem o motor tubular elétrico até sua queima eletrônica definitiva.
      </p>
      <p>
        Nossos instaladores técnicos possuem treinamento avançado em engenharia civil de ancoragem. Eles utilizam níveis a laser tridimensionais autonivelantes de alta precisão para alinhar perfeitamente as guias laterais de alumínio, utilizam brocas e buchas específicas de expansão mecânica adequadas para cada tipo de substrato de parede (buchas especiais para drywall, alvenaria oca, tijolo maciço ou concreto armado) e fazem a vedação perfeita das caixas superiores com selantes elásticos de poliuretano (PU) de alta performance contra infiltrações de água de chuva e umidade externa.
      </p>
    `;
  } else if (isAutomatica) {
    focusIntroduction = `
      <p>
        A <strong>instalação de venezianas automáticas em Curitiba</strong> e o serviço de <strong>automatização de venezianas externas de rolar</strong> manuais representam o ápice do conforto doméstico, acessibilidade arquitetônica de alto padrão e inteligência energética residencial. Imagine poder controlar a abertura e fechamento de grandes e pesadas janelas externas de enrolar com um único toque no controle remoto, por comando de voz sincronizado com a Amazon Alexa ou programando horários automáticos no celular de acordo com as variações climáticas tradicionais de Curitiba.
      </p>
      <p>
        Na Nova's Persianas, somos pioneiros na venda de venezianas motorizadas automáticas novas sob medida e no retrofit de venezianas de rolar manuais antigas para automatizadas sem quebrar paredes, dispensando fiações elétricas complexas ou reformas estruturais. Nossos técnicos especialistas em automação utilizam motores elétricos tubulares de alta precisão de marcas líderes de mercado (como Somfy, Emteco, Nice, Udinese e Tuya) com garantia de fábrica estendida de até 5 anos.
      </p>
    `;
    focusSection2 = `
      <h3>Automatização Inteligente de Venezianas Antigas: Como modernizar sua casa sem sujeira</h3>
      <p>
        Muitos moradores de condomínios fechados ou apartamentos em bairros de Curitiba como Batel, Champagnat, Juvevê e Água Verde possuem venezianas manuais externas de rolar que se tornaram extremamente pesadas e difíceis de operar ao longo dos anos, gerando dores nos braços ou rompimento constante da fita recolhedora mecânica de náilon de parede. A automatização de venezianas é a solução perfeita para esse problema ergonômico.
      </p>
      <p>
        Nossos técnicos removem com cuidado a caixa de recolhimento superior externa, substituem o antigo eixo octogonal de madeira ou ferro por um novo eixo de liga especial de alumínio estrutural oco anodizado. Dentro deste tubo de enrolamento, inserimos o motor tubular elétrico de alta durabilidade. Configuramos os sensores eletrônicos de limite de curso (que determinam onde a veneziana deve parar milimetricamente ao abrir ou fechar) e conectamos a fiação de forma embutida e discreta na própria guarnição de gesso ou janela do imóvel. Todo o processo de retrofit mecânico leva poucas horas e é realizado de forma extremamente limpa com técnicos treinados equipados com aspiradores de pó acoplados às ferramentas de furação.
      </p>
    `;
    focusSection3 = `
      <h3>Motores Tubulares Silenciosos com Conexão de Bateria de Lítio e Wi-Fi Inteligente</h3>
      <p>
        Para imóveis que não possuem fiação elétrica ou ponto de tomada preparado próximo ao vão superior da janela, a Nova's Persianas oferece motores elétricos tubulares equipados com baterias internas recarregáveis de lítio de alta capacidade integradas. Esses motores dispensam qualquer tipo de quebra-quebra de parede para passar eletrodutos elétricos ou fiações aparentes esteticamente desagradáveis.
      </p>
      <p>
        Com uma única recarga de bateria simples de 6 horas através de um cabo comum micro-USB (semelhante ao carregamento de smartphones), a bateria de lítio integrada garante energia elétrica autônoma para operar a veneziana de enrolar por até 6 meses consecutivos de subida e descida regular diária. Nossos motores automáticos possuem módulos Wi-Fi inteligentes e rádio frequência RF acoplados que possibilitam o controle e configuração total através do celular ou assistentes virtuais de voz como a Amazon Alexa ou Google Assistant.
      </p>
    `;
  } else if (isTecnico) {
    focusIntroduction = `
      <p>
        Contar com um <strong>técnico de venezianas em Curitiba</strong> altamente qualificado e de confiança faz toda a diferença para restabelecer a segurança e a vedação térmica das suas janelas com total tranquilidade. Venezianas externas de rolar de alumínio ou PVC integradas são mecanismos complexos de precisão de proteção solar externa. Quando sofrem travamentos mecânicos repentinos, lâminas desalinhadas lateralmente ou danos elétricos na cabeça mecânica do motor automático tubular, tentar realizar reparos amadores sem ferramentas especializadas de prumo pode danificar irreparavelmente o eixo central ou amassar os perfis de alumínio das guias.
      </p>
      <p>
        Na Nova's Persianas, disponibilizamos uma equipe de técnicos especialistas motorizados e certificados para atendimento técnico corretivo rápido em domicílio em todos os bairros de Curitiba e Região Metropolitana. Nossos técnicos andam com veículos equipados com peças de reposição originais e trenas a laser digitais para diagnosticar falhas na hora e executar o conserto de forma ágil, com agendamento pontual e garantia mecânica completa de até 1 ano.
      </p>
    `;
    focusSection2 = `
      <h3>O Papel de um Técnico Especializado no Alinhamento e Regulagem de Venezianas de Rolar</h3>
      <p>
        Uma veneziana externa de enrolar de alta costura é composta por dezenas de lâminas acopladas por encaixes longitudinais milimétricos. Com a ação diária de ventos fortes, granizo e variações térmicas drásticas do clima de Curitiba, essas lâminas podem sofrer dilatações físicas e deslocamentos laterais mecânicos na caixa superior de enrolamento caso as ponteiras laterais de guia de náilon de proteção estejam desgastadas ou quebradas.
      </p>
      <p>
        O nosso técnico especialista realiza o diagnóstico fino por prumo eletrônico para realinhar perfeitamente as lâminas longitudinais, substitui ponteiras guia trincadas, faz a limpeza química técnica bactericida profunda de poeiras rígidas acumuladas que geram fricção abrasiva nas guias de alumínio e faz a lubrificação precisa com silicone de alto rendimento (livre de gordura ou solventes minerais que corroem borrachas protetoras de vento). Isso impede o atrito excessivo, reduzindo o torque do motor tubulares e devolvendo o perfeito deslizamento livre e suave do sistema de rolar externo.
      </p>
    `;
    focusSection3 = `
      <h3>Peças de Reposição Originais e Atendimento Humanizado de Excelência de Técnico Nova's</h3>
      <p>
        Diferente de empresas informais de conserto que utilizam peças e acessórios genéricos de baixa qualidade ou adaptam cordões e molas mecânicas frágeis que voltam a quebrar e arrebentar em poucas semanas, o técnico da Nova's Persianas utiliza exclusivamente componentes e acessórios originais de reposição em seu endereço no mesmo dia.
      </p>
      <p>
        Nossos técnicos carregam consigo um mostruário completo de fitas recolhedoras de poliéster duplo industrial de alta resistência com tratamento UV e anti-mofo, molas espirais tensionadoras em caixas de alumínio autolubrificantes, rolamentos vedados de esferas de aço, eixos octogonais reforçados de alumínio anodizado, e garras metálicas de fixação rápida de segurança de marcas parceiras líderes como Somfy, Udinese e Emteco. Garantimos que sua veneziana antiga recupere o perfeito funcionamento impecável por uma fração justa do preço de comprar uma peça nova.
      </p>
    `;
  } else if (isConserto) {
    focusIntroduction = `
      <p>
        O <strong>conserto de venezianas em Curitiba</strong> e o serviço de <strong>assistência técnica corretiva de venezianas de enrolar</strong> de alumínio e PVC externas são fundamentais para manter a segurança residencial, a blindagem mecânica contra intempéries climáticas e o conforto acústico do seu lar. Devido ao clima úmido e instável de Curitiba, expostas a rigorosas chuvas de vento e granizo, é muito comum que as lâminas externas sofram travamentos mecânicos na caixa superior, que os cordões de tração (fitas de nylon de parede) arrebentem de repente por fricção e desgaste natural, ou que as engrenagens internas e motores automáticos tubulares apresentem fadiga de componentes elétricos.
      </p>
      <p>
        Antes de pensar em descartar sua veneziana sob medida antiga ou arcar com os altos custos de substituição integral de esquadrias inteiras de janelas de apartamentos, consulte a equipe técnica da Nova's Persianas. Nós possuímos mais de duas décadas de expertise técnica e oficina industrial própria em Curitiba para restaurar, reformar e consertar venezianas externas de todas as marcas nacionais e importadas de forma rápida, segura e com garantia técnica por escrito.
      </p>
    `;
    focusSection2 = `
      <h3>Conserto Corretivo de Venezianas Travadas na Caixa de Rolar Superior</h3>
      <p>
        O travamento total da veneziana externa na posição aberta ou fechada é uma das ocorrências emergenciais que mais causam transtornos estéticos e funcionais para moradores de Curitiba. Isso geralmente acontece devido ao desalinhamento lateral das lâminas de alumínio ou PVC por perda de suas ponteiras guia de nylon internas. Ao puxar o acionamento mecânico manual por fita com força excessiva, a veneziana sobe torta e engaveta de lado na abertura da caixa superior de recolhimento, entortando as garras metálicas de suporte de fixação do eixo octogonal central e arranhando a pintura eletrostática a pó das lâminas longitudinais.
      </p>
      <p>
        Nossa equipe realiza o conserto e destravamento especializado abrindo a caixa interna ou externa, realinha as lâminas longitudinais danificadas, substitui ponteiras guia velhas e revisa toda a pressão de tensionamento do eixo de enrolamento de alumínio, devolvendo o livre curso e o deslizamento suave do tecido da veneziana de forma impecável no mesmo dia em seu endereço.
      </p>
    `;
    focusSection3 = `
      <h3>Troca de Fitas Recolhedoras, Molas de Parede e Cabos de Aço Desgastados</h3>
      <p>
        O rompimento da fita recolhedora de nylon mecânica de parede por desgaste de fricção natural é um dos consertos corretivos mais rápidos e comuns de realizarmos diariamente em bairros como Batel, Água Verde, Juvevê e Portão. Se a fita de tração está desfiada, ela corre o risco iminente de arrebentar e provocar a queda brusca e perigosa da veneziana externa, o que pode esmagar os dedos ou estilhaçar as lâminas de PVC e alumínio contra o peitoril de granito.
      </p>
      <p>
        Nossa assistência técnica corretiva substitui a fita velha por uma fita premium de poliéster duplo reforçado industrial de alta densidade resistente a raios ultravioleta e mofos bactericidas, ajusta a pressão interna da mola espiral do recolhedor mecânico de alumínio de parede, e revisa os rolamentos vedados de esferas de aço do cabeçote superior da caixa de recolhimento para garantir que a veneziana manual de rolar fique tão leve de puxar quanto uma nova.
      </p>
    `;
  }

  // Common Sections to achieve 2500-3000 words
  focusSection4 = `
    <h3>Tecnologias de Proteção Térmica e Conforto Acústico sob Medida para Curitiba</h3>
    <p>
      A cidade de Curitiba possui uma variação climática anual extremamente rigorosa que desafia diretamente os sistemas de climatização residenciais e comerciais. Durante os meses de outono e inverno, o isolamento térmico das esquadrias das janelas de vidro é primordial para reduzir o consumo exagerado de energia elétrica com aquecedores de ar e ar-condicionado portáteis. As janelas e fachadas envidraçadas representam até 40% das fugas térmicas de calor de um imóvel. Ao fechar totalmente as venezianas de alumínio térmico com preenchimento interno de poliuretano de alta densidade injetado (RPU) da Nova's Persianas, cria-se um verdadeiro colchão de ar isolante estático protetor entre o vidro gelado externo e a temperatura confortável interna do ambiente.
    </p>
    <p>
      Esse coeficiente de isolamento térmico avançado evita a perda contínua do calor estabilizado pelos aquecedores no inverno e barram até 70% do calor escaldante do sol nos dias quentes de verão, gerando um ambiente de temperatura perfeitamente equilibrada e agradável de forma natural. Ademais, a vedação acústica de nossas venezianas sob medida de enrolar diminui o nível de decibéis de ruídos urbanos externos (como tráfego pesado de carros, buzinas, ônibus expressos, e obras civis) em até 25dB, trazendo um silêncio restaurador e calmo ideal para noites de sono restauradoras de bebês e idosos em bairros de alta densidade como o Portão, Batel, Água Verde e Cabral.
    </p>
    <p>
      Em relação à estética, nossas venezianas externas de enrolar agregam valor comercial extraordinário à arquitetura do seu imóvel de luxo, pois seus trilhos laterais e caixas superiores possuem design minimalista e limpo que se integra perfeitamente a fachadas modernas com acabamentos em pintura eletrostática nas cores branca, preta, bronze, cinza grafite ou marrom tabaco, harmonizando com qualquer estilo de decoração de interiores e exteriores.
    </p>
  `;

  focusSection5 = `
    <h3>Diferenciais Exclusivos de Atendimento Nova's Persianas e Compromisso Seniores</h3>
    <p>
      Por termos showroom físico próprio e oficina industrial instalados de forma estratégica no tradicional bairro Hauer, na Rua Frei Henrique de Coimbra, 1750, em Curitiba, refinamos nossa metodologia de atendimento para priorizar a qualidade, o acolhimento humanizado e o absoluto respeito aos nossos clientes seniores e suas famílias. Compreendemos que as gerações de mais idade de bairros tradicionais curitibanos como Juvevê, Água Verde, Batel, Champagnat e Jardim das Américas buscam fornecedores estabelecidos com equipe de engenharia registrada e atendimento de confiança de longa data.
    </p>
    <p>
      Nossos técnicos e consultores são extremamente pacientes, detalham minuciosamente as especificações de cada engrenagem metálica sem jargões complexos, auxiliam didaticamente na configuração de aplicativos de automatização inteligentes e conexões de assistentes de voz em smartphones e tablets, e realizam instalações sem poeira ou barulhos incômodos com o auxílio de aspiradores de pó acoplados a todas as furadeiras de impacto industriais.
    </p>
    <p>
      Outro grande diferencial do nosso compromisso técnico é o foco rígido em segurança infantil e bem-estar de animais domésticos ('child and pet safety'). Eliminamos riscos de estrangulamento acidental ou acidentes com laços decorativos ao fixar presilhas tensionadoras nas paredes para fitas manuais ou ao incentivar a adoção de sistemas de motorização automática e inteligente sem fios aparentes, garantindo a paz de espírito absoluta de todas as famílias e a integridade de seus pets amados.
    </p>
  `;

  focusSection6 = `
    <h3>Showroom Físico no Hauer e Cobertura de Atendimento Completo em Toda a RMC</h3>
    <p>
      Convidamos você e sua família de profissionais de arquitetura a visitarem o Showroom físico da Nova's Persianas em Curitiba, localizado no coração do bairro Hauer, na <strong>Rua Frei Henrique de Coimbra, 1750, Curitiba</strong>. Dispomos de um ambiente requintado com estacionamento privativo de acesso gratuito, atendimento humanizado atencioso, café fresco quente e uma ampla gama de mostruários de venezianas de rolar externas térmicas e persianas sob medida modernas em tamanho real para que você possa ver e tocar as texturas dos tecidos reais, testar a leveza mecânica dos acionamentos manuais e simular comandos por voz com a Alexa em tempo real.
    </p>
    <p>
      Atendemos com a mesma pontualidade britânica, consultoria gratuita com catálogo físico em domicílio e equipe técnica de instalação motorizada própria toda a grande Curitiba e os municípios da Região Metropolitana de Curitiba (RMC), englobando cidades vizinhas como São José dos Pinhais (SJP), Pinhais, Colombo, Araucária, Almirante Tamandaré, Campo Largo, Quatro Barras e Piraquara. Proporcionamos uma garantia de fábrica estendida líder de mercado de até 5 anos em motorizações automáticas e até 2 anos contra falhas de fabricação e material de cortinas e persianas, além de 1 ano de assistência de instalação.
    </p>
    <p>
      Não deixe de valorizar o seu lar com o que há de mais elegante, seguro e resistente em proteção solar externa e venezianas. Entre em contato com a Nova's Persianas de forma instantânea agora mesmo ligando diretamente no telefone fixo destacado **(41) 3278-8598** ou mande uma mensagem pelo WhatsApp oficial **(41) 99550-7310** para conversar com nosso especialista técnico e agendar a sua visita de medição eletrônica a laser gratuita em domicílio e sem qualquer taxa ou compromisso de compra!
    </p>
  `;

  return `
    <h2>1. O Guia Técnico Definitivo Sobre ${h1} – Nova's Persianas Curitiba</h2>
    ${focusIntroduction}
    
    <h2>2. Engenharia e Funcionamento de Venezianas de Rolar Externas Integradas</h2>
    ${focusSection2}

    <h2>3. Detalhes Técnicos e Cuidados Especiais de Operação Mecânica</h2>
    ${focusSection3}

    <h2>4. Conforto Térmico e Acústico Excepcional Contra as Geadas e Chuvas de Curitiba</h2>
    ${focusSection4}

    <h2>5. Segurança Integrada para Crianças e Pets: Design Limpo e Seguro</h2>
    ${focusSection5}

    <h2>6. Agende Medição Gratuita no Bairro Hauer ou Solicite Atendimento de Técnico em Curitiba</h2>
    ${focusSection6}
  `;
}
