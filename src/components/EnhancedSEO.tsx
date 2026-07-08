/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Helmet } from "react-helmet-async";
import { getSEOData } from "../data/seoDataHelper";

interface EnhancedSEOProps {
  activePage: string;
}

export default function EnhancedSEO({ activePage }: EnhancedSEOProps) {
  const seo = getSEOData(activePage);

  return (
    <Helmet>
      {/* 1. Page Title & Basic Descriptions */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.canonical} />

      {/* 2. Advanced Robots Controls */}
      <meta name="google-site-verification" content="--YYzSM40sRmYIbqW1zow176bzEcuZcOrekRYy-MyCw" />
      <meta name="msvalidate.01" content="274D1FA5C55C0D2283EAE94551589DFC" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Nova's Persianas" />
      <meta name="language" content="pt-BR" />

      {/* 3. OpenGraph Social Tags */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content="Nova's Persianas" />
      <meta property="og:locale" content="pt_BR" />

      {/* 4. Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* 5. Geo Targeting Meta Tags */}
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Curitiba" />
      <meta name="geo.position" content="-25.4852924;-49.2562215" />
      <meta name="ICBM" content="-25.4852924, -49.2562215" />

      {/* 6. Resource Hints (preconnect / prefetch) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://api.whatsapp.com" />

      {/* 7. Font Optimization */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

      {/* 8. Critical inline CSS to optimize paint times and prevent layout shifts (CLS) */}
      <style type="text/css">{`
        body {
          background-color: #fafaf9;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        #root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 99px;
        }
      `}</style>

      {/* 9. Inline Service Worker Registration logic */}
      <script type="text/javascript">{`
        if ('serviceWorker' in navigator) {
          window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').then(reg => {
              console.log('SW registrado com sucesso para performance offline:', reg.scope);
            }).catch(err => {
              console.warn('Falha no registro do SW:', err);
            });
          });
        }
      `}</script>

      {/* 10. Dynamic JSON-LD Structured Data Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(seo.localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(seo.breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(seo.websiteSchema)}
      </script>
      {seo.faqPageSchema && (
        <script type="application/ld+json">
          {JSON.stringify(seo.faqPageSchema)}
        </script>
      )}
      {seo.serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(seo.serviceSchema)}
        </script>
      )}
    </Helmet>
  );
}
