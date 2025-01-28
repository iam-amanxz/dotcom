import { SITE } from "@/config";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      title: z.string(),
      publishedDate: z.coerce.date(),
      featured: z.boolean().default(false),
      category: z.string(),
      tags: z.array(z.string()).optional(),
      ogImage: image()
        .refine((img) => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      canonicalURL: z.string().optional(),
      readTime: z.string(),
      coverImage: image().optional(),
      excerpt: z.string().optional(),
      cardColor: z.string().optional(),
    }),
});

export const collections = { blog };
