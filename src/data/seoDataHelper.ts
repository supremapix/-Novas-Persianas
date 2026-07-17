/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { generateSeoContent } from "./seoContent";

export function getSEOData(activePage: string) {
  let title = "Nova's Persianas | Instalação, Manutenção e Higienização em Curitiba/PR";
  let description = "Especialistas em persianas em Curitiba. Instalação, manutenção, higienização, automação e persianas sob medida para residências e empresas. Solicite seu orçamento!";
  let canonical = "https://www.novaspersianascuritiba.com.br/";
  let image = "https://img.novaspersianascuritiba.com.br/persianas-curitiba.webp";
  let isLandingPage = false;
  let landingData: any = null;

  const cleanPage = activePage.replace(/^\/|\/$/g, "");

  if (cleanPage === "quem-somos" || cleanPage === "sobre") {
    title = "Quem Somos | Nova's Persianas Curitiba - Tradição e Confiança";
    description = "Conheça a história de excelência da Nova's Persianas no Hauer, Curitiba. Atendimento atencioso adaptado para todas as idades. Fábrica própria e materiais premium.";
    canonical = "https://www.novaspersianascuritiba.com.br/sobre";
  } else if (cleanPage === "contato") {
    title = "Fale Conosco | Nova's Persianas Curitiba - Agende Medição Gratuita";
    description = "Entre em contato conosco e agende hoje mesmo a sua visita técnica com mostruários físicos em Curitiba. Telefone e WhatsApp: (41) 99550-7310.";
    canonical = "https://www.novaspersianascuritiba.com.br/contato";
  } else if (cleanPage === "mapa-do-site") {
    title = "Mapa do Site | Nova's Persianas Curitiba - Navegação Estruturada";
    description = "Acesse o mapa do site completo da Nova's Persianas Curitiba. Encontre modelos de persianas sob medida, bairros atendidos e guias informativos.";
    canonical = "https://www.novaspersianascuritiba.com.br/mapa-do-site";
  } else if (cleanPage !== "home" && cleanPage !== "") {
    landingData = generateSeoContent(cleanPage);
    title = landingData.title;
    description = landingData.description;
    canonical = `https://www.novaspersianascuritiba.com.br/${cleanPage}`;
    image = landingData.heroImage || "https://img.novaspersianascuritiba.com.br/persianas-curitiba.webp";
    isLandingPage = true;
  }

  // 1. Structured Data Markup definitions
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://www.novaspersianascuritiba.com.br/#localbusiness",
    "name": "Nova's Persianas",
    "legalName": "Nova's Persianas Curitiba",
    "alternateName": "Novas Persianas",
    "description": "Líder regional em persianas sob medida em Curitiba. Higienização, conserto e instalação técnica no Hauer, Portão e região.",
    "url": "https://www.novaspersianascuritiba.com.br",
    "logo": {
      "@type": "ImageObject",
      "url": "https://scontent.fbfh15-1.fna.fbcdn.net/v/t39.30808-6/648959460_863100380114830_786683706665261508_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x2340&ctp=s1080x2340&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFXI1kAWI4sZxK8lFAGtC5bPrwGqdIyTYw-vAap0jJNjN4bpEC-qY8xX26pdfWNzTLvChSUddKgvju-qcLATn4i&_nc_ohc=VzlnOesbaNEQ7kNvwEAKwMe&_nc_oc=AdoQ_Pdg8_rCFwnSHrTHOjC96hYPuvfoQ8v5sOqsfvLdUjNyR0DFkF0_teucOb_02VABoli6_zWp7qz1Ywuuz2dH&_nc_zt=23&_nc_ht=scontent.fbfh15-1.fna&_nc_gid=yxj8pZ1GplcKklaL01qizw&_nc_ss=7b2a8&oh=00_AQBstcjvky5YYZRv7K28_o9ZfM4dMHHmm3t93AzAiPDPqA&oe=6A4C620F",
      "width": "1080",
      "height": "2340"
    },
    "image": "https://scontent.fbfh15-1.fna.fbcdn.net/v/t39.30808-6/648959460_863100380114830_786683706665261508_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x2340&ctp=s1080x2340&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFXI1kAWI4sZxK8lFAGtC5bPrwGqdIyTYw-vAap0jJNjN4bpEC-qY8xX26pdfWNzTLvChSUddKgvju-qcLATn4i&_nc_ohc=VzlnOesbaNEQ7kNvwEAKwMe&_nc_oc=AdoQ_Pdg8_rCFwnSHrTHOjC96hYPuvfoQ8v5sOqsfvLdUjNyR0DFkF0_teucOb_02VABoli6_zWp7qz1Ywuuz2dH&_nc_zt=23&_nc_ht=scontent.fbfh15-1.fna&_nc_gid=yxj8pZ1GplcKklaL01qizw&_nc_ss=7b2a8&oh=00_AQBstcjvky5YYZRv7K28_o9ZfM4dMHHmm3t93AzAiPDPqA&oe=6A4C620F",
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
        "item": "https://www.novaspersianascuritiba.com.br"
      },
      cleanPage !== "home" && cleanPage !== "" ? {
        "@type": "ListItem",
        "position": 2,
        "name": cleanPage.replace(/-/g, " "),
        "item": canonical
      } : null
    ].filter(Boolean)
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nova's Persianas",
    "url": "https://www.novaspersianascuritiba.com.br",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.novaspersianascuritiba.com.br/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const faqPageSchema = isLandingPage && landingData?.faq?.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": landingData.faq.map((item: any) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  } : null;

  const serviceSchema = isLandingPage && landingData ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": landingData.title,
    "serviceType": "Instalação e Venda de Persianas sob Medida",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Nova's Persianas",
      "telephone": "+55-41-99550-7310",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "R. Frei Henrique de Coimbra, 1750",
        "addressLocality": "Curitiba",
        "addressRegion": "PR",
        "postalCode": "81630-140",
        "addressCountry": "BR"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Curitiba",
      "sameAs": "https://pt.wikipedia.org/wiki/Curitiba"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "BRL",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceType": "https://schema.org/MinimumPrice",
        "billingIncrement": 1,
        "description": "Orçamento e medição gratuita a laser em Curitiba"
      }
    }
  } : null;

  return {
    title,
    description,
    canonical,
    image,
    localBusinessSchema,
    breadcrumbSchema,
    websiteSchema,
    faqPageSchema,
    serviceSchema
  };
}
