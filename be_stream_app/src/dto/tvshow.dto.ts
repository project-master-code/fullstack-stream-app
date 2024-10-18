import { z } from 'zod';

const Language = z.enum(['EN', 'ES', 'FR', 'DE']); // Tambahkan bahasa sesuai kebutuhan

// TV Show DTO untuk listing
export const TVShowDto = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  releaseDate: z.date(),
  genres: z.array(z.string()),
  availableLanguages: z.array(Language),
  availableRegions: z.array(z.string()),
});
export type TVShowDtoType = z.infer<typeof TVShowDto>;

// TV Show Detail DTO
export const TVShowDetailDto = TVShowDto.extend({
  seasons: z.array(
    z.object({
      seasonNumber: z.number(),
      episodes: z.array(
        z.object({
          id: z.number(),
          title: z.string(),
          duration: z.number(),
        })
      ),
    })
  ),
  metadata: z.object({
    creator: z.string(),
    network: z.string(),
  }),
  reviews: z.array(
    z.object({
      id: z.number(),
      content: z.string(),
      rating: z.number().min(1).max(5),
    })
  ),
  comments: z.array(
    z.object({
      id: z.number(),
      content: z.string(),
      userId: z.number(),
      createdAt: z.date(),
    })
  ),
  likes: z.number(),
});

export type TVShowDetailDtoType = z.infer<typeof TVShowDetailDto>;

// Create TV Show DTO
export const CreateTVShowDto = z.object({
  title: z.string(),
  description: z.string(),
  releaseDate: z.date(),
  genres: z.array(z.number()), // Genre ID
  availableLanguages: z.array(Language),
  availableRegions: z.array(z.number()), // Region ID
});

export type CreateTVShowDtoType = z.infer<typeof CreateTVShowDto>;

// Update TV Show DTO
export const UpdateTVShowDto = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  releaseDate: z.date().optional(),
  genres: z.array(z.number()).optional(),
  availableLanguages: z.array(Language).optional(),
  availableRegions: z.array(z.number()).optional(),
});

export type UpdateTVShowDtoType = z.infer<typeof UpdateTVShowDto>;
