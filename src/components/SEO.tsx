import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

const SITE_URL = "https://playtosky.com"; // sans barre finale : path commence par « / »

export default function SEO({
  title,
  description,
  path = "/",
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    let descriptionTag = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.name = "description";
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.content = description;

    const canonicalUrl = `${SITE_URL}${path.startsWith("/") ? path : "/" + path}`;

    let canonicalTag = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.rel = "canonical";
      document.head.appendChild(canonicalTag);
    }

    canonicalTag.href = canonicalUrl;
  }, [title, description, path]);

  return null;
}

