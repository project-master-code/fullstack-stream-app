import { Request, Response } from 'express';
import { Router } from 'express';

const adminRouter = Router();
/**
 * @route GET /api/admin/users
 * @desc get user profile information
 */
adminRouter.get('/users', (req: Request, res: Response) => {
  res.send('get user profile information');
});

/**
 * @route DELETE /api/admin/users/:userId
 * @desc update user profile
 */
adminRouter.delete('/users', (req: Request, res: Response) => {
  res.send('update user profile');
});
export default adminRouter;
