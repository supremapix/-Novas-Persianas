import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { getSEOData } from "./src/data/seoDataHelper";
import { ALL_SEO_ROUTES } from "./src/data/seoContent";

function getInjectedHead(seo: any) {
  return `
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
    <meta property="og:image" content="${seo.image}" />
    <meta property="og:site_name" content="Nova's Persianas" />
    <meta property="og:locale" content="pt_BR" />

    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${seo.title}" />
    <meta name="twitter:description" content="${seo.description}" />
    <meta name="twitter:image" content="${seo.image}" />

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
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API health route
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Dynamic sitemap.xml route
  app.get("/sitemap.xml", (req, res) => {
    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    const today = new Date().toISOString().split("T")[0];
    
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    
    // Main paths
    const mainPaths = [
      { path: "", priority: "1.0", changefreq: "daily" },
      { path: "sobre", priority: "0.8", changefreq: "monthly" },
      { path: "contato", priority: "0.8", changefreq: "monthly" },
      { path: "mapa-do-site", priority: "0.8", changefreq: "monthly" }
    ];
    
    for (const item of mainPaths) {
      xml += `  <url>\n`;
      xml += `    <loc>https://www.novaspersianascuritiba.com.br/${item.path}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>${item.changefreq}</changefreq>\n`;
      xml += `    <priority>${item.priority}</priority>\n`;
      xml += `  </url>\n`;
    }
    
    // SEO Landing paths
    for (const route of ALL_SEO_ROUTES) {
      const isProduct = route.endsWith("-curitiba");
      const isNeighborhood = route.startsWith("persianas-") && !route.endsWith("-curitiba");
      const priority = isProduct ? "0.9" : isNeighborhood ? "0.8" : "0.7";
      
      xml += `  <url>\n`;
      xml += `    <loc>https://www.novaspersianascuritiba.com.br/${route}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;
      xml += `  </url>\n`;
    }
    
    xml += `</urlset>`;
    res.send(xml);
  });

  // Handle old site URL redirection for '/shop' or '/shop/' to prevent 404 and redirect to home
  app.get(["/shop", "/shop/"], (req, res) => {
    res.redirect(301, "/");
  });

  // Handle old installation URLs with a 301 Moved Permanently server redirection
  app.get([
    "/instalacoes", 
    "/instalacoes/", 
    "/instalacao", 
    "/instalacao/", 
    "/instalacao-de-persianas", 
    "/instalacao-de-persianas/"
  ], (req, res) => {
    res.redirect(301, "/instalacao-de-persianas-curitiba");
  });

  // Vite middleware for development or serving built files in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });

    // Mount Vite asset-serving middlewares
    app.use(vite.middlewares);

    // Dynamic SEO injection on-the-fly in development mode
    app.get("*", async (req, res, next) => {
      // Exclude static assets or API routes from template rendering
      if (req.path.includes(".") || req.path.startsWith("/api/")) {
        return next();
      }

      try {
        const url = req.originalUrl;
        const templatePath = path.resolve(process.cwd(), "index.html");
        
        if (!fs.existsSync(templatePath)) {
          return next();
        }

        let template = fs.readFileSync(templatePath, "utf-8");
        
        // Let Vite transform the index.html for correct CSS/JS source injection
        template = await vite.transformIndexHtml(url, template);
        
        const routeKey = req.path.replace(/^\/|\/$/g, "") || "home";
        const seo = getSEOData(routeKey);
        const injectedHead = getInjectedHead(seo);

        // Remove default title
        const titleRegex = /<title>[^<]*<\/title>/i;
        if (titleRegex.test(template)) {
          template = template.replace(titleRegex, "");
        }

        // Inject advanced SEO head right before </head>
        template = template.replace("</head>", `${injectedHead}\n</head>`);

        res.status(200).set({ "Content-Type": "text/html; charset=utf-8" }).end(template);
      } catch (err) {
        vite.ssrFixStacktrace(err as Error);
        next(err);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), "dist");
    
    // Serve static assets from build output
    app.use(express.static(distPath));
    
    // Fallback all SPA routes to index.html with dynamic, on-the-fly pre-rendering injection in production
    app.get("*", (req, res) => {
      const routeKey = req.path.replace(/^\/|\/$/g, "") || "home";
      const indexPath = path.join(distPath, "index.html");
      
      if (!fs.existsSync(indexPath)) {
        return res.sendStatus(404);
      }

      try {
        let html = fs.readFileSync(indexPath, "utf-8");
        const seo = getSEOData(routeKey);
        const injectedHead = getInjectedHead(seo);

        // Replace the default title tag completely if present
        const titleRegex = /<title>[^<]*<\/title>/i;
        if (titleRegex.test(html)) {
          html = html.replace(titleRegex, "");
        }

        // Insert new tags right before </head>
        html = html.replace("</head>", `${injectedHead}\n</head>`);

        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.send(html);
      } catch (err) {
        console.error("Dynamic production pre-rendering injection failed:", err);
        res.sendFile(indexPath);
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
