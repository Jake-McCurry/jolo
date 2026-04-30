import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  url?: string;
}

export function SEO({ title, description, url }: SEOProps) {
  const siteTitle = `${title} | JesusOnline`;

  useEffect(() => {
    document.title = siteTitle;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    setMeta("og:title", siteTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    if (url) setMeta("og:url", url, "property");
  }, [siteTitle, description, url]);

  return null;
}
