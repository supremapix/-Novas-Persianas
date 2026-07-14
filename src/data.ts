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

// 8 Featured Products (Ofertas Especiais) with details & descriptions optimized for easy reading
export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Persiana Caixa",
    category: "Persiana Caixa",
    description: "Modelo premium com estrutura box de alumínio que envolve as bordas do tecido, garantindo vedação de luz lateral e excelente controle acústico. Excelente para dormitórios e salas de TV.",
    image: "https://loja.persianascrisdan.com.br/arquivos/produtos/imagens_adicionais/webp/8bd069b3e34f4c5c4462ac923956c34b5b06dacb.jpeg.webp",
    features: ["Bloqueio lateral de luminosidade", "Visual integrado à moldura da janela", "Estrutura moderna e elegante"]
  },
  {
    id: "p2",
    name: "Persiana Double Vision Semi Blackout",
    category: "Persianas Double Vision Semi Blackout",
    description: "O requinte das faixas horizontais que alternam entre tecidos opacos e translúcidos. Oferece o equilíbrio perfeito entre privacidade, entrada de luz solar e excelente design decorativo.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8tL94EjoBOCaVVHUcjwBPPdejUC7kyQ36SwvfqUlPvw&s=10",
    features: ["Efeito listrado decorativo", "Excelente escurecimento de ambiente", "Regulagem de altura dinâmica"]
  },
  {
    id: "p3",
    name: "Persiana Double Vision Translúcida",
    category: "Persianas Double Vision",
    description: "Permite a entrada suave da luz do dia enquanto bloqueia a visão de fora para dentro. Ideal para salas de estar, cozinhas e escritórios que exigem ambientes claros e aconchegantes.",
    image: "https://beneflexpersianas.com.br/wp-content/uploads/2024/10/11-2.jpg",
    features: ["Entrada de luz natural difusa", "Proteção de privacidade diurna", "Design moderno e contemporâneo"]
  },
  {
    id: "p4",
    name: "Persiana Horizontal Alumínio",
    category: "Persiana Horizontal Alumínio",
    description: "A clássica e funcional persiana de alumínio com lâminas de 16mm ou 25mm. Extremamente fácil de limpar, altamente resistente à umidade e ideal para cozinhas, banheiros e escritórios.",
    image: "https://andrelux.com.br/arquivos/produtos/imagens_adicionais/webp/66afd033d2c71068b30a0e165aa4857a41eb2ab8.jpeg.webp",
    features: ["Lâminas ajustáveis de precisão", "Altamente resistente a água e vapores", "Excelente custo-benefício"]
  },
  {
    id: "p5",
    name: "Persiana Horizontal Madeira",
    category: "Persiana Horizontal Madeira",
    description: "Oferece o calor e o aconchego da madeira natural ou sintética em lâminas de 50mm. Agrega sofisticação única a salas, escritórios executivos e ambientes de lazer requintados.",
    image: "https://71026.cdn.simplo7.net/static/71026/sku/persianas-persiana-madeira-persiana-horizontal-de-madeira-natural-branca-50mm-com-fita--p-1631664913801.jpg",
    features: ["Madeira nobre tratada de alta qualidade", "Controle térmico natural", "Visual imponente e muito elegante"]
  },
  {
    id: "p6",
    name: "Persiana Painel Blackout",
    category: "Persiana Painel Blackout",
    description: "Excelente para grandes vãos, portas de sacada e janelas amplas. Os painéis deslizam horizontalmente sobre trilhos paralelos, proporcionando escurecimento total e manuseio leve.",
    image: "https://www.arquiprojeto.art.br/wp-content/uploads/2020/04/Cortina-painel-blackout-quarto.jpg",
    features: ["Ideal para portas de correr e sacadas", "Recolhimento lateral super compacto", "Bloqueio absoluto de luz solar"]
  },
  {
    id: "p7",
    name: "Persiana Painel Tela Solar",
    category: "Persiana Painel Tela Solar",
    description: "A solução perfeita para varandas gourmets e escritórios ensolarados. Filtra os raios UV prejudiciais aos móveis, diminui drasticamente o calor e mantém a visibilidade da paisagem externa.",
    image: "https://images.tcdn.com.br/img/img_prod/1175294/persiana_rolo_tela_solar_5_1_60m_x_1_60m_preto_bella_janela_6045_1_ef36aeb9847d26324b3f53fa5d6325f5.jpg",
    features: ["Bloqueia até 95% dos raios UV prejudiciais", "Reduz o calor mantendo a vista externa", "Tecido lavável e muito durável"]
  },
  {
    id: "p8",
    name: "Persiana Painel Translúcida",
    category: "Persiana Painel Translúcido",
    description: "Painéis verticais largos em tecidos especiais que criam uma barreira leve, filtrando a luz solar de forma homogênea. Agrega leveza visual e aconchego aos maiores vãos da sua residência.",
    image: "https://www.persianil.com.br/wp-content/uploads/2020/12/WhatsApp-Image-2021-02-18-at-11.10.02-1.jpeg",
    features: ["Luminosidade suave e bem distribuída", "Visual limpo e fluido sem fendas", "Fácil manuseio sobre trilhos suaves"]
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
