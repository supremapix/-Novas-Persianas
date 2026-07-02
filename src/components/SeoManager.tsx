import React, { useEffect } from "react";
import { generateSeoContent } from "../data/seoContent";

interface SeoManagerProps {
  activePage: string;
}

export default function SeoManager({ activePage }: SeoManagerProps) {
  useEffect(() => {
    // 1. PAGE METADATA DEFINITIONS
    let title = "Nova's Persianas Curitiba | Persianas Sob Medida no Hauer";
    let description = "A Nova's Persianas em Curitiba é especializada em persianas sob medida residenciais e comerciais. Medição gratuita em domicílio, instalação rápida e facilidade de pagamento em até 10x.";
    let canonical = `https://novaspersianascuritiba.com.br`;
    let isLandingPage = false;
    let landingData: any = null;

    if (activePage === "quem-somos") {
      title = "Quem Somos | Nova's Persianas Curitiba - Tradição e Confiança";
      description = "Conheça a história de excelência da Nova's Persianas no Hauer, Curitiba. Atendimento atencioso e adaptado para a terceira idade. Garantia total e materiais premium.";
      canonical = `https://novaspersianascuritiba.com.br/sobre`;
    } else if (activePage === "contato") {
      title = "Fale Conosco | Nova's Persianas Curitiba - Agende Medição Gratuita";
      description = "Entre em contato conosco e agende hoje mesmo a sua visita técnica com mostruários em Curitiba. Telefone e WhatsApp: (41) 99550-7310.";
      canonical = `https://novaspersianascuritiba.com.br/contato`;
    } else if (activePage !== "home" && activePage !== "") {
      // Pull dynamically from the SEO content engine!
      landingData = generateSeoContent(activePage);
      title = landingData.title;
      description = landingData.description;
      canonical = `https://novaspersianascuritiba.com.br/${activePage}`;
      isLandingPage = true;
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
    updateOrCreateMeta("og:image", "https://scontent.fbfh15-1.fna.fbcdn.net/v/t39.30808-6/648959460_863100380114830_786683706665261508_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x2340&ctp=s1080x2340&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFXI1kAWI4sZxK8lFAGtC5bPrwGqdIyTYw-vAap0jJNjN4bpEC-qY8xX26pdfWNzTLvChSUddKgvju-qcLATn4i&_nc_ohc=VzlnOesbaNEQ7kNvwEAKwMe&_nc_oc=AdoQ_Pdg8_rCFwnSHrTHOjC96hYPuvfoQ8v5sOqsfvLdUjNyR0DFkF0_teucOb_02VABoli6_zWp7qz1Ywuuz2dH&_nc_zt=23&_nc_ht=scontent.fbfh15-1.fna&_nc_gid=yxj8pZ1GplcKklaL01qizw&_nc_ss=7b2a8&oh=00_AQBstcjvky5YYZRv7K28_o9ZfM4dMHHmm3t93AzAiPDPqA&oe=6A4C620F", true);
    updateOrCreateMeta("og:site_name", "Nova's Persianas", true);
    updateOrCreateMeta("og:locale", "pt_BR", true);

    // Twitter Card Tags
    updateOrCreateMeta("twitter:card", "summary_large_image");
    updateOrCreateMeta("twitter:title", title);
    updateOrCreateMeta("twitter:description", description);
    updateOrCreateMeta("twitter:image", "https://scontent.fbfh15-1.fna.fbcdn.net/v/t39.30808-6/648959460_863100380114830_786683706665261508_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x2340&ctp=s1080x2340&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFXI1kAWI4sZxK8lFAGtC5bPrwGqdIyTYw-vAap0jJNjN4bpEC-qY8xX26pdfWNzTLvChSUddKgvju-qcLATn4i&_nc_ohc=VzlnOesbaNEQ7kNvwEAKwMe&_nc_oc=AdoQ_Pdg8_rCFwnSHrTHOjC96hYPuvfoQ8v5sOqsfvLdUjNyR0DFkF0_teucOb_02VABoli6_zWp7qz1Ywuuz2dH&_nc_zt=23&_nc_ht=scontent.fbfh15-1.fna&_nc_gid=yxj8pZ1GplcKklaL01qizw&_nc_ss=7b2a8&oh=00_AQBstcjvky5YYZRv7K28_o9ZfM4dMHHmm3t93AzAiPDPqA&oe=6A4C620F");

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
          "item": "https://novaspersianascuritiba.com.br"
        },
        activePage !== "home" && activePage !== "" ? {
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
    if (isLandingPage && landingData && landingData.faq && landingData.faq.length > 0) {
      const faqPageSchema = {
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
      };
      injectJsonLd(faqPageSchema);

      // Also inject a specific Service / Offer schema to dominate search!
      const serviceSchema = {
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
          "sameAs": "https://en.wikipedia.org/wiki/Curitiba"
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
      };
      injectJsonLd(serviceSchema);
    }

  }, [activePage]);

  return null;
}
