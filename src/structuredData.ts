import {
  type Article,
  type Person,
  type WebSite,
  type WithContext,
} from "schema-dts";
import avatar from "../public/favicon.svg";
import type { CollectionEntry } from "astro:content";

export const blogWebsite: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: `${import.meta.env.SITE}/blog/`,
  name: "Husnul's blog",
  description: "Husnul's blog",
  inLanguage: "en_US",
};

export const mainWebsite: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: import.meta.env.SITE,
  name: "Husnul Aman - Full Stack Developer",
  description: "Husnul's contact page, portfolio and blog",
  inLanguage: "en_US",
};

export const personSchema: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Husnul Aman",
  url: "https://husnulaman.com",
  image: `${import.meta.env.SITE}${avatar.src}`,
  sameAs: [
    "https://github.com/iam-amanxz",
    "https://www.linkedin.com/in/iam-amanxz97",
  ],
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Grafana",
    url: "https://grafana.com",
  },
};

export function getArticleSchema(post: CollectionEntry<"blog">) {
  const articleStructuredData: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.data.title,
    url: `${import.meta.env.SITE}/blog/${post.slug}/`,
    image: {
      "@type": "ImageObject",
      url: `${import.meta.env.SITE}${post.data.cover_image.src}/`,
    },
    description: post.data.excerpt,
    datePublished: post.data.date.toString(),
    publisher: {
      "@type": "Person",
      name: "Husnul Aman",
      url: import.meta.env.SITE,
      image: import.meta.env.SITE + avatar.src,
    },
    author: {
      "@type": "Person",
      name: "Husnul Aman",
      url: import.meta.env.SITE,
      image: import.meta.env.SITE + avatar.src,
    },
  };
  return articleStructuredData;
}
