import { z } from 'zod';

// Comment DTO
export const CommentDto = z.object({
  id: z.number(),
  content: z.string(),
  userId: z.number(),
  // userName: z.string(),
  movieId: z.number().optional(),
  tvShowId: z.number().optional(),
  createdAt: z.date(),
});

// Create Comment DTO
export const CreateCommentDto = z.object({
  content: z.string(),
  userId: z.number(),
  movieId: z.number().optional(),
  tvShowId: z.number().optional(),
});

// Update Comment DTO
export const UpdateCommentDto = z.object({
  content: z.string().optional(),
});

// Type inference
export type CommentDtoType = z.infer<typeof CommentDto>;
export type CreateCommentDtoType = z.infer<typeof CreateCommentDto>;
export type UpdateCommentDtoType = z.infer<typeof UpdateCommentDto>;
