import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = "https://jesusonline.org";

const ROUTES = [
  {
    path: "/lp/gift-of-heaven-ttn",
    title: "The Gift of Heaven | JesusOnline",
    description:
      "Watch The Gift of Heaven and let us know where you are on your journey with God.",
    image: "/thumb-gift-of-heaven.jpg",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "The Gift of Heaven",
      description:
        "Watch The Gift of Heaven and discover what God offers you.",
      thumbnailUrl: `${SITE_URL}/thumb-gift-of-heaven.jpg`,
      embedUrl: "https://www.youtube.com/embed/XB7wGTnYeaE",
      uploadDate: "2024-01-01",
    },
  },
  {
    path: "/lp/jesus-resurrection-and-you-ttn",
    title: "Jesus, the Resurrection, and You | JesusOnline",
    description:
      "Explore the historical evidence for the resurrection of Jesus and what it means for your life.",
    image: "/thumb-resurrection.jpg",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "Jesus, the Resurrection, and You",
      description:
        "Explore the evidence for the resurrection and discover what it means for you.",
      thumbnailUrl: `${SITE_URL}/thumb-resurrection.jpg`,
      embedUrl: "https://www.youtube.com/embed/SEg4a2xaJyw",
      uploadDate: "2024-01-01",
    },
  },
  {
    path: "/xp/no-i-didnt-pray",
    title: "The Next 3 Steps | JesusOnline",
    description:
      "We're here for you. Share your thoughts and discover what God offers.",
    noindex: true,
  },
  {
    path: "/xp/yes-i-received-jesus",
    title: "You Received Jesus! | JesusOnline",
    description:
      "You just invited Jesus into your life. Discover your next steps.",
    noindex: true,
  },
  {
    path: "/xp/yes-i-rededicated",
    title: "The Next 3 Steps | JesusOnline",
    description:
      "You rededicated your life to Jesus. Here are your next steps.",
    noindex: true,
  },
  {
    path: "/xp/no-already-received",
    title: "The Next 3 Steps | JesusOnline",
    description:
      "You're already part of God's family. Here are resources to help you grow.",
    noindex: true,
  },
];

const template = readFileSync(
  resolve(__dirname, "dist/public/index.html"),
  "utf-8"
);

const { render } = await import("./dist/server/entry-server.js");

for (const route of ROUTES) {
  let appHtml = "";
  try {
    appHtml = render(route.path);
  } catch (err) {
    console.warn(`⚠ SSR failed for ${route.path}, writing meta-only:`, err.message);
  }

  const img = route.image ? `${SITE_URL}${route.image}` : `${SITE_URL}/opengraph.jpg`;

  const headTags = [
    `<title>${route.title}</title>`,
    `<meta name="description" content="${route.description}">`,
    `<link rel="canonical" href="${SITE_URL}${route.path}">`,
    `<meta property="og:title" content="${route.title}">`,
    `<meta property="og:description" content="${route.description}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:url" content="${SITE_URL}${route.path}">`,
    `<meta property="og:image" content="${img}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:site_name" content="JesusOnline">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${route.title}">`,
    `<meta name="twitter:description" content="${route.description}">`,
    `<meta name="twitter:image" content="${img}">`,
  ];

  if (route.noindex) {
    headTags.push(`<meta name="robots" content="noindex, nofollow">`);
  }

  if (route.jsonLd) {
    headTags.push(
      `<script type="application/ld+json">${JSON.stringify(route.jsonLd)}</script>`
    );
  }

  const html = template
    .replace("</head>", `  ${headTags.join("\n  ")}\n</head>`)
    .replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

  const outDir = resolve(__dirname, "dist/public", route.path.slice(1));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, "index.html"), html, "utf-8");
  console.log(`✓ ${route.path}`);
}

console.log("✨ Pre-rendering complete");
