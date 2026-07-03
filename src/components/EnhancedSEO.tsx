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
      <meta property="og:image" content="https://scontent.fbfh15-1.fna.fbcdn.net/v/t39.30808-6/648959460_863100380114830_786683706665261508_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x2340&ctp=s1080x2340&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFXI1kAWI4sZxK8lFAGtC5bPrwGqdIyTYw-vAap0jJNjN4bpEC-qY8xX26pdfWNzTLvChSUddKgvju-qcLATn4i&_nc_ohc=VzlnOesbaNEQ7kNvwEAKwMe&_nc_oc=AdoQ_Pdg8_rCFwnSHrTHOjC96hYPuvfoQ8v5sOqsfvLdUjNyR0DFkF0_teucOb_02VABoli6_zWp7qz1Ywuuz2dH&_nc_zt=23&_nc_ht=scontent.fbfh15-1.fna&_nc_gid=yxj8pZ1GplcKklaL01qizw&_nc_ss=7b2a8&oh=00_AQBstcjvky5YYZRv7K28_o9ZfM4dMHHmm3t93AzAiPDPqA&oe=6A4C620F" />
      <meta property="og:site_name" content="Nova's Persianas" />
      <meta property="og:locale" content="pt_BR" />

      {/* 4. Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content="https://scontent.fbfh15-1.fna.fbcdn.net/v/t39.30808-6/648959460_863100380114830_786683706665261508_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x2340&ctp=s1080x2340&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFXI1kAWI4sZxK8lFAGtC5bPrwGqdIyTYw-vAap0jJNjN4bpEC-qY8xX26pdfWNzTLvChSUddKgvju-qcLATn4i&_nc_ohc=VzlnOesbaNEQ7kNvwEAKwMe&_nc_oc=AdoQ_Pdg8_rCFwnSHrTHOjC96hYPuvfoQ8v5sOqsfvLdUjNyR0DFkF0_teucOb_02VABoli6_zWp7qz1Ywuuz2dH&_nc_zt=23&_nc_ht=scontent.fbfh15-1.fna&_nc_gid=yxj8pZ1GplcKklaL01qizw&_nc_ss=7b2a8&oh=00_AQBstcjvky5YYZRv7K28_o9ZfM4dMHHmm3t93AzAiPDPqA&oe=6A4C620F" />

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
