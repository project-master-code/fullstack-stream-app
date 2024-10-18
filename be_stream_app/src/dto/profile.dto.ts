import { z } from 'zod';

// User Profile DTO
export const UserProfileDto = z.object({
  id: z.number(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  avatarUrl: z.string().optional(),
  bio: z.string().optional(),
  birthdate: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type UserProfileDtoType = z.infer<typeof UserProfileDto>;
