import { Router } from 'express';
import { Request, Response } from 'express';
const favoriteRouter = Router();
/**
 * @route POST /api/favorites
 * @desc Add movie or TV show to favorites
 */
favoriteRouter.post('/favorites', (req: Request, res: Response) => {
  res.send('Add movie or TV show to favorites');
});
/**
 * @route DELETE /api/favorites
 * @desc Remove movie or TV show from favorites
 */
favoriteRouter.delete('/favorites', (req: Request, res: Response) => {
  res.send('Remove movie or TV show from favorites');
});
/**
 * @route GET /api/favorites
 * @desc Get user's favorite list
 */
favoriteRouter.get('/favorites', (req: Request, res: Response) => {
  res.send('Get users favorite list');
});
export default favoriteRouter;
