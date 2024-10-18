import { Request, Response } from 'express';
import { Router } from 'express';

const adminRouter = Router();
/**
 * @route GET /api/admin/users
 * @desc get user profile information (Admin only)
 */
adminRouter.get('/users', (req: Request, res: Response) => {
  res.send('get user profile information');
});

/**
 * @route DELETE /api/admin/users/:userId
 * @desc update user profile (Admin only)
 */
adminRouter.delete('/users/:userId', (req: Request, res: Response) => {
  res.send('update user profile');
});

/**
 * @route POST /api/admin/movies
 * @desc Add new movie (Admin only)
 */
adminRouter.post('/movies', (req: Request, res: Response) => {
  res.send('Add new movie (Admin only)');
});

/**
 * @route DELETE /api/admin/movies/:movieId
 * @desc Delete a movie (Admin only)
 */
adminRouter.delete('/movies/:movieId', (req: Request, res: Response) => {
  res.send('Delete a movie (Admin only)');
});
export default adminRouter;
