export interface Project {
  title: string;
  description: string | null;
  tags: string[] | null;
  githubUrl: string | null;
  hostedUrl: string | null;
  demoUrl: string | null;
  dribbbleUrl: string | null;
  category: string | null;
  slug: string | null;
  coverImage: string | null;
  isFeatured: boolean | null;
}
