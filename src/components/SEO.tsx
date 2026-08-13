import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

const SITE_URL = "https://play-to-sky-two.vercel.app";

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

    const canonicalUrl = `${SITE_URL}${path}`;

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

