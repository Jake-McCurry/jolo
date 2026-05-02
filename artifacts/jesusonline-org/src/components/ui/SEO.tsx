import { useEffect } from "react";

const SITE_URL = "https://jesusonline.org";
const OG_IMAGE = `${SITE_URL}/opengraph.jpg`;

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

export function SEO({ title, description, path }: SEOProps) {
  const siteTitle = `${title} | JesusOnline`;
  const canonical = path ? `${SITE_URL}${path}` : SITE_URL;

  useEffect(() => {
    document.title = siteTitle;

    const setMeta = (selector: string, content: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        const match = selector.match(/\[(.+?)="(.+?)"\]/);
        if (match) el.setAttribute(match[1], match[2]);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.rel = rel;
        document.head.appendChild(el);
      }
      el.href = href;
    };

    setMeta(`meta[name="description"]`, description);
    setLink("canonical", canonical);

    setMeta(`meta[property="og:title"]`, siteTitle);
    setMeta(`meta[property="og:description"]`, description);
    setMeta(`meta[property="og:type"]`, "website");
    setMeta(`meta[property="og:url"]`, canonical);
    setMeta(`meta[property="og:image"]`, OG_IMAGE);
    setMeta(`meta[property="og:image:width"]`, "1200");
    setMeta(`meta[property="og:image:height"]`, "630");
    setMeta(`meta[property="og:site_name"]`, "JesusOnline");

    setMeta(`meta[name="twitter:card"]`, "summary_large_image");
    setMeta(`meta[name="twitter:title"]`, siteTitle);
    setMeta(`meta[name="twitter:description"]`, description);
    setMeta(`meta[name="twitter:image"]`, OG_IMAGE);
  }, [siteTitle, description, canonical]);

  return null;
}
