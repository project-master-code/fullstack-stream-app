import { z } from 'zod';

const SubscriptionPlan = z.enum(['BASIC', 'STANDARD', 'PREMIUM']);

// Subscription DTO
export const SubscriptionDto = z.object({
  id: z.number(),
  plan: SubscriptionPlan,
  price: z.number(),
  userId: z.number(),
  startedAt: z.date(),
  expiresAt: z.date(),
});

// Create Subscription DTO
export const CreateSubscriptionDto = z.object({
  plan: SubscriptionPlan,
  price: z.number(),
  userId: z.number(),
});

// Update Subscription DTO
export const UpdateSubscriptionDto = z.object({
  plan: SubscriptionPlan.optional(),
  price: z.number().optional(),
});

// Type inference
export type SubscriptionDtoType = z.infer<typeof SubscriptionDto>;
export type CreateSubscriptionDtoType = z.infer<typeof CreateSubscriptionDto>;
export type UpdateSubscriptionDtoType = z.infer<typeof UpdateSubscriptionDto>;
