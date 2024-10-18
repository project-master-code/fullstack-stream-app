import { Router } from 'express';
import { Request, Response } from 'express';
const ratingRouter = Router();

/**
 * @route POST /api/ratings
 * @desc Add rating to a movie/TV show
 */
ratingRouter.post('/', (req: Request, res: Response) => {
  res.send('Add rating to a movie/TV show');
});

/**
 * @route GET /api/ratings/:itemId
 * @desc Get ratings for a movie/TV show
 */
ratingRouter.get('/:itemId', (req: Request, res: Response) => {
  res.send('Get ratings for a movie/TV show');
});
export default ratingRouter;
