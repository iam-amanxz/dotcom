import type { CollectionEntry } from "astro:content";

const getSortedPosts = (posts: CollectionEntry<"blog">[]) => {
  return posts.sort(
    (a, b) => (b.data.publishedDate as any) - (a.data.publishedDate as any)
  );
};

export default getSortedPosts;
