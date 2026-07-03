/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import fs from "fs";
import path from "path";
import { ALL_SEO_ROUTES } from "./src/data/seoContent";
import { getSEOData } from "./src/data/seoDataHelper";

// Define the root build output folder
const DIST_DIR = path.join(process.cwd(), "dist");
const PUBLIC_DIR = path.join(process.cwd(), "public");

async function runPrerender() {
  console.log("🚀 Starting robust SEO Pre-rendering & Sitemap generation engine...");

  const templatePath = path.join(DIST_DIR, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error(`❌ HTML template not found at ${templatePath}. Run 'vite build' first.`);
    process.exit(1);
  }

  // Load the standard template HTML
  const baseHtml = fs.readFileSync(templatePath, "utf-8");

  // Define core paths (excluding / which is the template itself)
  const corePages = ["quem-somos", "sobre", "contato", "mapa-do-site"];
  
  // Combine all routes to pre-render
  const allRoutesToPrerender = [
    ...corePages,
    ...ALL_SEO_ROUTES
  ];

  console.log(`📦 Found ${allRoutesToPrerender.length} routes to pre-render dynamically.`);

  // 1. GENERATE STATIC INDIVIDUAL HTML FILES FOR EACH ROUTE
  for (const route of allRoutesToPrerender) {
    const seo = getSEOData(route);
    
    // Generate the injected tags string
    const injectedHead = `
    <!-- Advanced Dynamic SEO Meta Tags -->
    <title>${seo.title}</title>
    <meta name="google-site-verification" content="--YYzSM40sRmYIbqW1zow176bzEcuZcOrekRYy-MyCw" />
    <meta name="msvalidate.01" content="274D1FA5C55C0D2283EAE94551589DFC" />
    <meta name="description" content="${seo.description}" />
    <link rel="canonical" href="${seo.canonical}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="author" content="Nova's Persianas" />
    <meta name="language" content="pt-BR" />

    <!-- OpenGraph Social Tags -->
    <meta property="og:title" content="${seo.title}" />
    <meta property="og:description" content="${seo.description}" />
    <meta property="og:url" content="${seo.canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://scontent.fbfh15-1.fna.fbcdn.net/v/t39.30808-6/648959460_863100380114830_786683706665261508_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x2340&ctp=s1080x2340&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFXI1kAWI4sZxK8lFAGtC5bPrwGqdIyTYw-vAap0jJNjN4bpEC-qY8xX26pdfWNzTLvChSUddKgvju-qcLATn4i&_nc_ohc=VzlnOesbaNEQ7kNvwEAKwMe&_nc_oc=AdoQ_Pdg8_rCFwnSHrTHOjC96hYPuvfoQ8v5sOqsfvLdUjNyR0DFkF0_teucOb_02VABoli6_zWp7qz1Ywuuz2dH&_nc_zt=23&_nc_ht=scontent.fbfh15-1.fna&_nc_gid=yxj8pZ1GplcKklaL01qizw&_nc_ss=7b2a8&oh=00_AQBstcjvky5YYZRv7K28_o9ZfM4dMHHmm3t93AzAiPDPqA&oe=6A4C620F" />
    <meta property="og:site_name" content="Nova's Persianas" />
    <meta property="og:locale" content="pt_BR" />

    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${seo.title}" />
    <meta name="twitter:description" content="${seo.description}" />
    <meta name="twitter:image" content="https://scontent.fbfh15-1.fna.fbcdn.net/v/t39.30808-6/648959460_863100380114830_786683706665261508_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x2340&ctp=s1080x2340&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFXI1kAWI4sZxK8lFAGtC5bPrwGqdIyTYw-vAap0jJNjN4bpEC-qY8xX26pdfWNzTLvChSUddKgvju-qcLATn4i&_nc_ohc=VzlnOesbaNEQ7kNvwEAKwMe&_nc_oc=AdoQ_Pdg8_rCFwnSHrTHOjC96hYPuvfoQ8v5sOqsfvLdUjNyR0DFkF0_teucOb_02VABoli6_zWp7qz1Ywuuz2dH&_nc_zt=23&_nc_ht=scontent.fbfh15-1.fna&_nc_gid=yxj8pZ1GplcKklaL01qizw&_nc_ss=7b2a8&oh=00_AQBstcjvky5YYZRv7K28_o9ZfM4dMHHmm3t93AzAiPDPqA&oe=6A4C620F" />

    <!-- Geo Targeting Tags -->
    <meta name="geo.region" content="BR-PR" />
    <meta name="geo.placename" content="Curitiba" />
    <meta name="geo.position" content="-25.4852924;-49.2562215" />
    <meta name="ICBM" content="-25.4852924, -49.2562215" />

    <!-- Resource Hints & Font Optimization -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
    <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
    <link rel="dns-prefetch" href="https://api.whatsapp.com" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

    <!-- Critical CSS Block -->
    <style type="text/css">
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
    </style>

    <!-- Inline Service Worker Registration -->
    <script type="text/javascript">
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js').then(reg => {
            console.log('SW registrado com sucesso para performance offline:', reg.scope);
          }).catch(err => {
            console.warn('Falha no registro do SW:', err);
          });
        });
      }
    </script>

    <!-- Schema.org JSON-LD structured schemas -->
    <script type="application/ld+json">${JSON.stringify(seo.localBusinessSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(seo.breadcrumbSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(seo.websiteSchema)}</script>
    ${seo.faqPageSchema ? `<script type="application/ld+json">${JSON.stringify(seo.faqPageSchema)}</script>` : ""}
    ${seo.serviceSchema ? `<script type="application/ld+json">${JSON.stringify(seo.serviceSchema)}</script>` : ""}
    `;

    // Perform head injections
    let finalHtml = baseHtml;

    // Replace the default title tag completely
    const titleRegex = /<title>[^<]*<\/title>/i;
    if (titleRegex.test(finalHtml)) {
      finalHtml = finalHtml.replace(titleRegex, "");
    }

    // Insert new head configurations just before </head>
    finalHtml = finalHtml.replace("</head>", `${injectedHead}\n</head>`);

    // Ensure directory structure exists in dist/
    const pageDir = path.join(DIST_DIR, route);
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }

    // Write pre-rendered index.html
    const outputPath = path.join(pageDir, "index.html");
    fs.writeFileSync(outputPath, finalHtml, "utf-8");
  }

  // Pre-render the core home page template as well with home SEO metadata
  const homeSeo = getSEOData("home");
  const homeInjectedHead = `
  <!-- Advanced Dynamic SEO Meta Tags -->
  <title>${homeSeo.title}</title>
  <meta name="google-site-verification" content="--YYzSM40sRmYIbqW1zow176bzEcuZcOrekRYy-MyCw" />
  <meta name="msvalidate.01" content="274D1FA5C55C0D2283EAE94551589DFC" />
  <meta name="description" content="${homeSeo.description}" />
  <link rel="canonical" href="${homeSeo.canonical}" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <meta name="author" content="Nova's Persianas" />
  <meta name="language" content="pt-BR" />

  <!-- OpenGraph Social Tags -->
  <meta property="og:title" content="${homeSeo.title}" />
  <meta property="og:description" content="${homeSeo.description}" />
  <meta property="og:url" content="${homeSeo.canonical}" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://scontent.fbfh15-1.fna.fbcdn.net/v/t39.30808-6/648959460_863100380114830_786683706665261508_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x2340&ctp=s1080x2340&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFXI1kAWI4sZxK8lFAGtC5bPrwGqdIyTYw-vAap0jJNjN4bpEC-qY8xX26pdfWNzTLvChSUddKgvju-qcLATn4i&_nc_ohc=VzlnOesbaNEQ7kNvwEAKwMe&_nc_oc=AdoQ_Pdg8_rCFwnSHrTHOjC96hYPuvfoQ8v5sOqsfvLdUjNyR0DFkF0_teucOb_02VABoli6_zWp7qz1Ywuuz2dH&_nc_zt=23&_nc_ht=scontent.fbfh15-1.fna&_nc_gid=yxj8pZ1GplcKklaL01qizw&_nc_ss=7b2a8&oh=00_AQBstcjvky5YYZRv7K28_o9ZfM4dMHHmm3t93AzAiPDPqA&oe=6A4C620F" />
  <meta property="og:site_name" content="Nova's Persianas" />
  <meta property="og:locale" content="pt_BR" />

  <!-- Twitter Card Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${homeSeo.title}" />
  <meta name="twitter:description" content="${homeSeo.description}" />
  <meta name="twitter:image" content="https://scontent.fbfh15-1.fna.fbcdn.net/v/t39.30808-6/648959460_863100380114830_786683706665261508_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x2340&ctp=s1080x2340&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFXI1kAWI4sZxK8lFAGtC5bPrwGqdIyTYw-vAap0jJNjN4bpEC-qY8xX26pdfWNzTLvChSUddKgvju-qcLATn4i&_nc_ohc=VzlnOesbaNEQ7kNvwEAKwMe&_nc_oc=AdoQ_Pdg8_rCFwnSHrTHOjC96hYPuvfoQ8v5sOqsfvLdUjNyR0DFkF0_teucOb_02VABoli6_zWp7qz1Ywuuz2dH&_nc_zt=23&_nc_ht=scontent.fbfh15-1.fna&_nc_gid=yxj8pZ1GplcKklaL01qizw&_nc_ss=7b2a8&oh=00_AQBstcjvky5YYZRv7K28_o9ZfM4dMHHmm3t93AzAiPDPqA&oe=6A4C620F" />

  <!-- Geo Targeting Tags -->
  <meta name="geo.region" content="BR-PR" />
  <meta name="geo.placename" content="Curitiba" />
  <meta name="geo.position" content="-25.4852924;-49.2562215" />
  <meta name="ICBM" content="-25.4852924, -49.2562215" />

  <!-- Resource Hints & Font Optimization -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
  <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
  <link rel="dns-prefetch" href="https://api.whatsapp.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

  <!-- Critical CSS Block -->
  <style type="text/css">
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
  </style>

  <!-- Inline Service Worker Registration -->
  <script type="text/javascript">
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(reg => {
          console.log('SW registrado com sucesso para performance offline:', reg.scope);
        }).catch(err => {
          console.warn('Falha no registro do SW:', err);
        });
      });
    }
  </script>

  <!-- Schema.org JSON-LD structured schemas -->
  <script type="application/ld+json">${JSON.stringify(homeSeo.localBusinessSchema)}</script>
  <script type="application/ld+json">${JSON.stringify(homeSeo.breadcrumbSchema)}</script>
  <script type="application/ld+json">${JSON.stringify(homeSeo.websiteSchema)}</script>
  `;

  let homeHtml = baseHtml;
  const homeTitleRegex = /<title>[^<]*<\/title>/i;
  if (homeTitleRegex.test(homeHtml)) {
    homeHtml = homeHtml.replace(homeTitleRegex, "");
  }
  homeHtml = homeHtml.replace("</head>", `${homeInjectedHead}\n</head>`);
  fs.writeFileSync(templatePath, homeHtml, "utf-8"); // Overwrite index.html template with home headers pre-rendered

  console.log("✅ Dynamic route pre-rendering completed successfully!");

  // 2. DYNAMICALLY GENERATE THE SITEMAP FOR ALL PROGRAMMATIC PATHS
  console.log("🗺️ Generating optimized sitemap.xml with all routes...");
  const today = new Date().toISOString().split("T")[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Core Pages -->
  <url>
    <loc>https://www.novaspersianascuritiba.com.br/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`;

  // Append other pages and SEO routes
  for (const page of allRoutesToPrerender) {
    // Determine priority
    let priority = "0.8";
    if (page === "mapa-do-site") priority = "0.7";
    else if (page === "contato") priority = "0.9";
    else if (page === "quem-somos") priority = "0.8";

    xml += `  <url>
    <loc>https://www.novaspersianascuritiba.com.br/${page}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
  }

  xml += `</urlset>`;

  // Write sitemap.xml to public/ and dist/
  fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), xml, "utf-8");
  fs.writeFileSync(path.join(DIST_DIR, "sitemap.xml"), xml, "utf-8");

  console.log("✅ Sitemap.xml generated successfully in both public/ and dist/ folders!");
}

runPrerender().catch((err) => {
  console.error("❌ Pre-rendering process failed:", err);
  process.exit(1);
});
