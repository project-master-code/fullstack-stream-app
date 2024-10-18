import { z } from 'zod';

// Review DTO untuk menampilkan review
export const ReviewDto = z.object({
  id: z.number(),
  content: z.string(),
  rating: z.number().min(1).max(5),
  userId: z.number(),
  userName: z.string(),
  createdAt: z.date(),
});

// Create Review DTO
export const CreateReviewDto = z.object({
  content: z.string(),
  rating: z.number().min(1).max(5),
  userId: z.number(),
  movieId: z.number().optional(),
  tvShowId: z.number().optional(),
});

// Update Review DTO
export const UpdateReviewDto = z.object({
  content: z.string().optional(),
  rating: z.number().min(1).max(5).optional(),
});

// Type inference
export type ReviewDtoType = z.infer<typeof ReviewDto>;
export type CreateReviewDtoType = z.infer<typeof CreateReviewDto>;
export type UpdateReviewDtoType = z.infer<typeof UpdateReviewDto>;
