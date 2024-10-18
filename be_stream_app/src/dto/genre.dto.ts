import { z } from 'zod';

export const GenreDto = z.object({
  id: z.number(),
  name: z.string(),
});

export type GenreDtoType = z.infer<typeof GenreDto>;
