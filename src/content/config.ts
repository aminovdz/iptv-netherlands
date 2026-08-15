import { defineCollection, z } from 'astro:content';

const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    date: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    author: z.string().default('IPTV Nederlandse Redactie'),
    category: z.string().default('Gidsen & Tips'),
    readTime: z.string().default('5 min leestijd'),
  }),
});

export const collections = {
  'guides': guidesCollection,
};
