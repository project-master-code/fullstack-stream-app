import { z } from 'zod';

// Enum untuk user role
const UserRole = z.enum(['USER', 'ADMIN']);
const Status = z.enum(['ACTIVE', 'INACTIVE']);
// User DTO untuk menampilkan data user
export const UserDto = z.object({
  id: z.number(),
  email: z.string().email(),
  name: z.string(),
  role: UserRole,
  status: Status,
  createdAt: z.date(),
  updatedAt: z.date(),
});
export type UserDtoType = z.infer<typeof UserDto>;
