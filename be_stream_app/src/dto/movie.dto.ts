import { z } from 'zod';
// Enum untuk content rating dan language
const ContentRating = z.enum(['G', 'PG', 'PG-13', 'R', 'NC17']);
const Language = z.enum(['EN', 'ES', 'FR', 'DE', 'IT', 'JP']); // Tambahkan bahasa sesuai kebutuhan

// Movie DTO untuk listing movie
export const MovieDto = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  releaseDate: z.date(),
  rating: ContentRating,
  genres: z.array(z.string()), // Daftar genre sebagai array string
  availableLanguages: z.array(Language),
  availableRegions: z.array(z.string()), // Daftar region sebagai array string
});
export type MovieDtoType = z.infer<typeof MovieDto>;

// Movie Detail DTO untuk detail film
export const MovieDetailDto = MovieDto.extend({
  metadata: z.object({
    // director: z.string(),
    duration: z.number(),
    // budget: z.number().optional(),
  }), // Contoh metadata film
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
export type MovieDetailDtoType = z.infer<typeof MovieDetailDto>;

// Create Movie DTO untuk menambah film baru
export const CreateMovieDto = z.object({
  title: z.string(),
  description: z.string(),
  releaseDate: z.date(),
  rating: ContentRating,
  genres: z.array(z.number()), // ID genre
  availableLanguages: z.array(Language),
  availableRegions: z.array(z.number()), // ID region
});
export type CreateMovieDtoType = z.infer<typeof CreateMovieDto>;

// Update Movie DTO untuk meng-update film
export const UpdateMovieDto = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  releaseDate: z.date().optional(),
  rating: ContentRating.optional(),
  genres: z.array(z.number()).optional(),
  availableLanguages: z.array(Language).optional(),
  availableRegions: z.array(z.number()).optional(),
});
export type UpdateMovieDtoType = z.infer<typeof UpdateMovieDto>;
