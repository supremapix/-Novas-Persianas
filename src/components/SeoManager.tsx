import React, { useEffect } from "react";

interface SeoManagerProps {
  activePage: string;
}

export default function SeoManager({ activePage }: SeoManagerProps) {
  useEffect(() => {
    // 1. PAGE METADATA DEFINITIONS
    let title = "Nova's Persianas Curitiba | Persianas Sob Medida no Hauer";
    let description = "A Nova's Persianas em Curitiba é especializada em persianas sob medida residenciais e comerciais. Medição gratuita em domicílio, instalação rápida e facilidade de pagamento em até 10x.";
    let canonical = `https://novaspersianascuritiba.com.br`;

    if (activePage === "quem-somos") {
      title = "Quem Somos | Nova's Persianas Curitiba - Tradição e Confiança";
      description = "Conheça a história de excelência da Nova's Persianas no Hauer, Curitiba. Atendimento atencioso e adaptado para a terceira idade. Garantia total e materiais premium.";
      canonical = `https://novaspersianascuritiba.com.br/sobre`;
    } else if (activePage === "contato") {
      title = "Fale Conosco | Nova's Persianas Curitiba - Agende Medição Gratuita";
      description = "Entre em contato conosco e agende hoje mesmo a sua visita técnica com mostruários em Curitiba. Telefone e WhatsApp: (41) 99550-7310.";
      canonical = `https://novaspersianascuritiba.com.br/contato`;
    } else if (activePage === "persianas-curitiba") {
      title = "Cortinas e Persianas Curitiba | Loja Especializada Sob Medida";
      description = "A melhor loja de cortinas e persianas em Curitiba com sede física no Hauer. Modelos Double Vision, Rolô, Romana e Verticais sob medida. Fale conosco!";
      canonical = `https://novaspersianascuritiba.com.br/persianas-curitiba`;
    } else if (activePage === "persianas-sob-medida-curitiba") {
      title = "Persianas Sob Medida Curitiba | Qualidade Direto da Fábrica";
      description = "Projetos milimétricos com tecidos premium em Curitiba. Adquira persianas sob medida para salas, quartos e escritórios com a Nova's Persianas.";
      canonical = `https://novaspersianascuritiba.com.br/persianas-sob-medida-curitiba`;
    } else if (activePage === "persianas-verticais-curitiba") {
      title = "Persianas Verticais Curitiba | Modelos em PVC, Blackout e Tecido";
      description = "Sua melhor opção em persianas verticais em Curitiba. Controle preciso de luminosidade para grandes janelas no Hauer e região. Orçamento grátis!";
      canonical = `https://novaspersianascuritiba.com.br/persianas-verticais-curitiba`;
    } else if (activePage === "persianas-horizontais-curitiba") {
      title = "Persianas Horizontais Curitiba | Madeira Nobre e Alumínio Clássico";
      description = "Persianas horizontais sob medida em Curitiba. Alumínio resistente de 25mm e nobres de madeira natural de 50mm. Melhor preço e qualidade garantidos.";
      canonical = `https://novaspersianascuritiba.com.br/persianas-horizontais-curitiba`;
    } else if (activePage === "persianas-rolo-curitiba") {
      title = "Persianas Rolô Curitiba | Blackout e Tela Solar Sacada";
      description = "As melhores persianas rolô sob medida de Curitiba. Proteção térmica, bloqueio total de luz e redução de calor em sua varanda ou quarto.";
      canonical = `https://novaspersianascuritiba.com.br/persianas-rolo-curitiba`;
    } else if (activePage === "persianas-romana-curitiba") {
      title = "Persianas Romana Curitiba | Sofisticação em Gomos Elegantes";
      description = "Persianas romanas sob medida em Curitiba. Design requintado em gomos horizontais para salas e quartos. Cores translúcidas e blackout.";
      canonical = `https://novaspersianascuritiba.com.br/persianas-romana-curitiba`;
    } else if (activePage === "persianas-double-vision-curitiba") {
      title = "Persiana Double Vision Curitiba | Luxo e Elegância Sob Medida";
      description = "A persiana queridinha de Curitiba: Double Vision com bandô de alumínio. Controle de luz contemporâneo. Agende sua visita de medição gratuita.";
      canonical = `https://novaspersianascuritiba.com.br/persianas-double-vision-curitiba`;
    } else if (activePage === "persianas-painel-curitiba") {
      title = "Persianas Painel Curitiba | Trilhos Deslizantes para Grandes Vãos";
      description = "Persianas modelo painel sob medida em Curitiba para portas de correr, divisórias de ambientes e sacadas integradas. Leveza e beleza com garantia.";
      canonical = `https://novaspersianascuritiba.com.br/persianas-painel-curitiba`;
    } else if (activePage === "persianas-automizadas-curitiba") {
      title = "Persianas Motorizadas e Automatizadas Curitiba | Luxo Inteligente";
      description = "Automatize suas persianas sob medida em Curitiba. Motores silenciosos com controle por controle remoto, Alexa ou celular. Ideal para idosos.";
      canonical = `https://novaspersianascuritiba.com.br/persianas-automizadas-curitiba`;
    } else if (activePage === "manutencao-de-persianas-curitiba") {
      title = "Conserto e Manutenção de Persianas Curitiba | Lavagem e Reparos";
      description = "Serviço profissional de higienização profunda, lavagem antibactericida, troca de cordas, comandos e reformas de persianas sob medida em Curitiba.";
      canonical = `https://novaspersianascuritiba.com.br/manutencao-de-persianas-curitiba`;
    } else if (activePage === "instalacao-de-persianas-curitiba") {
      title = "Instalação de Persianas Curitiba | Técnicos Rápidos e Sem Sujeira";
      description = "Instalação profissional de persianas e cortinas em Curitiba. Furações precisas com coletor de poeira e garantia de fixação mecânica de 1 ano.";
      canonical = `https://novaspersianascuritiba.com.br/instalacao-de-persianas-curitiba`;
    } else if (activePage === "orcamento-persianas-curitiba") {
      title = "Orçamento de Persianas Curitiba | Preço e Visita Grátis Hoje";
      description = "Solicite estimativa de orçamento de persiana sob medida em Curitiba. Parcelamento facilitado em até 10x sem juros ou desconto à vista no PIX.";
      canonical = `https://novaspersianascuritiba.com.br/orcamento-persianas-curitiba`;
    }

    // 2. UPDATE DOCUMENT HEAD DOM ELEMENTS
    document.title = title;
    
    // Helper function to update meta description
    const updateOrCreateMeta = (nameOrProperty: string, value: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${nameOrProperty}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, nameOrProperty);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", value);
    };

    updateOrCreateMeta("description", description);
    updateOrCreateMeta("robots", "index, follow");
    updateOrCreateMeta("author", "Nova's Persianas");
    updateOrCreateMeta("language", "pt-BR");

    // OpenGraph Social Tags
    updateOrCreateMeta("og:title", title, true);
    updateOrCreateMeta("og:description", description, true);
    updateOrCreateMeta("og:url", canonical, true);
    updateOrCreateMeta("og:type", "website", true);
    updateOrCreateMeta("og:image", "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHTFQj6NuJDjW8sfkkHIhJ4Kw-5EQSw60Fxeqr2IjTc4wFsZUa1i0Jqy219iTSuQhiDH33kJJ45ac9bwZE19jA7i-RRz94ibg7y-SUJ3CjYvlS017X4Av4uLy0c-lwXvPFdZYQ=s680-w680-h510-rw", true);
    updateOrCreateMeta("og:site_name", "Nova's Persianas", true);
    updateOrCreateMeta("og:locale", "pt_BR", true);

    // Twitter Card Tags
    updateOrCreateMeta("twitter:card", "summary_large_image");
    updateOrCreateMeta("twitter:title", title);
    updateOrCreateMeta("twitter:description", description);
    updateOrCreateMeta("twitter:image", "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHTFQj6NuJDjW8sfkkHIhJ4Kw-5EQSw60Fxeqr2IjTc4wFsZUa1i0Jqy219iTSuQhiDH33kJJ45ac9bwZE19jA7i-RRz94ibg7y-SUJ3CjYvlS017X4Av4uLy0c-lwXvPFdZYQ=s680-w680-h510-rw");

    // Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical);

    // 3. GENERATE SCHEMA.ORG JSON-LD STRUCTURAL MARKUP DYNAMICALLY
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": ["HomeAndConstructionBusiness", "ProfessionalService", "LocalBusiness"],
      "@id": "https://novaspersianascuritiba.com.br/#localbusiness",
      "name": "Nova's Persianas",
      "legalName": "Nova's Persianas Curitiba",
      "alternateName": "Novas Persianas",
      "description": "Líder regional em persianas sob medida em Curitiba. Higienização, conserto e instalação técnica no Hauer, Portão e região.",
      "url": "https://novaspersianascuritiba.com.br",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHTFQj6NuJDjW8sfkkHIhJ4Kw-5EQSw60Fxeqr2IjTc4wFsZUa1i0Jqy219iTSuQhiDH33kJJ45ac9bwZE19jA7i-RRz94ibg7y-SUJ3CjYvlS017X4Av4uLy0c-lwXvPFdZYQ=s680-w680-h510-rw",
        "width": "680",
        "height": "510"
      },
      "image": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHTFQj6NuJDjW8sfkkHIhJ4Kw-5EQSw60Fxeqr2IjTc4wFsZUa1i0Jqy219iTSuQhiDH33kJJ45ac9bwZE19jA7i-RRz94ibg7y-SUJ3CjYvlS017X4Av4uLy0c-lwXvPFdZYQ=s680-w680-h510-rw",
      "telephone": "+55-41-99550-7310",
      "email": "contato@novaspersianascuritiba.com.br",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "R. Frei Henrique de Coimbra, 1750",
        "addressLocality": "Curitiba",
        "addressRegion": "PR",
        "postalCode": "81630-140",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-25.4852924",
        "longitude": "-49.2562215"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday"],
          "opens": "09:00",
          "closes": "13:00"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-41-99550-7310",
        "contactType": "customer service",
        "areaServed": "BR",
        "availableLanguage": ["Portuguese"]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "184",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://novaspersianascuritiba.com.br"
        },
        activePage !== "home" ? {
          "@type": "ListItem",
          "position": 2,
          "name": activePage.replace(/-/g, " "),
          "item": canonical
        } : null
      ].filter(Boolean)
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Nova's Persianas",
      "url": "https://novaspersianascuritiba.com.br",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://novaspersianascuritiba.com.br/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // Remove any previous dynamic JSON-LD scripts
    const oldScripts = document.querySelectorAll('script[data-dynamic-seo="true"]');
    oldScripts.forEach(script => script.remove());

    // Inject dynamic script tags
    const injectJsonLd = (schemaObj: any) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-dynamic-seo", "true");
      script.text = JSON.stringify(schemaObj);
      document.head.appendChild(script);
    };

    injectJsonLd(localBusinessSchema);
    injectJsonLd(breadcrumbSchema);
    injectJsonLd(websiteSchema);

    // Dynamic FAQ Schema specifically for the landing pages
    if (activePage !== "home" && activePage !== "quem-somos" && activePage !== "contato") {
      // Create specific FAQ Page schemas for the landing routes
      let faqItems = [
        { q: "Qual o prazo de entrega das persianas sob medida em Curitiba?", a: "Nosso prazo médio de fabricação e instalação técnica em Curitiba é de 7 a 10 dias úteis após a aprovação do projeto e das medidas finas." },
        { q: "Vocês atendem no bairro Hauer em Curitiba?", a: "Sim! Nossa sede física fica exatamente no Hauer, na R. Frei Henrique de Coimbra, 1750. Atendemos com imensa rapidez toda a região." }
      ];

      const faqPageSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      };
      injectJsonLd(faqPageSchema);
    }

  }, [activePage]);

  return null;
}
