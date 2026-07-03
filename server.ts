import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { getSEOData } from "./src/data/seoDataHelper";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API health route
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
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
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    
    // Serve static files from the build output directory
    app.use(express.static(distPath));
    
    // Fallback all SPA routes to index.html with dynamic, on-the-fly pre-rendering injection
    app.get("*", (req, res) => {
      const routeKey = req.path.replace(/^\/|\/$/g, "") || "home";
      const indexPath = path.join(distPath, "index.html");
      
      if (!fs.existsSync(indexPath)) {
        return res.sendStatus(404);
      }

      try {
        let html = fs.readFileSync(indexPath, "utf-8");
        const seo = getSEOData(routeKey);

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

    <!-- Schema.org JSON-LD structured schemas -->
    <script type="application/ld+json">${JSON.stringify(seo.localBusinessSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(seo.breadcrumbSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(seo.websiteSchema)}</script>
    ${seo.faqPageSchema ? `<script type="application/ld+json">${JSON.stringify(seo.faqPageSchema)}</script>` : ""}
    ${seo.serviceSchema ? `<script type="application/ld+json">${JSON.stringify(seo.serviceSchema)}</script>` : ""}
        `;

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
        console.error("Dynamic pre-rendering injection failed:", err);
        res.sendFile(indexPath);
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
