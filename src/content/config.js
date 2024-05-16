import { defineCollection, z } from 'astro:content';

const eventCollection = defineCollection({ 
  type: 'data',
  schema: z.object({
    title: z.string(),
    id: z.string(),
    datetime: z.date(),
    link: z.nullable(z.string().url())
  }),
});

export const collections = {
  'events': eventCollection,
};