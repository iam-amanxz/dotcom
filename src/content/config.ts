import { defineCollection, z } from "astro:content";


const postsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      category: z.string(),
      tags: z.array(z.string()),
      read_time: z.string(),
      cover_image: image(),
      excerpt: z.string(),
      card_color: z.string().nullable(),
    }),
});

// This key should match your collection directory name in "src/content"
export const collections = {
  blog: postsCollection,
};
