import { Request, Response } from 'express';
import { Router } from 'express';

const usersRouter = Router();
/**
 * @route GET /api/users/profile
 * @desc get user profile information
 */
usersRouter.get('/profile', (req: Request, res: Response) => {
  res.send('get user profile information');
});

/**
 * @route PUT /api/users/profile
 * @desc update user profile
 */
usersRouter.put('/profile', (req: Request, res: Response) => {
  res.send('update user profile');
});
export default usersRouter;
