import { Router } from 'express';
import { Request, Response } from 'express';
const reviewRouter = Router();

/**
 * @route POST /api/reviews
 * @desc Add a review for a movie/TV show
 */
reviewRouter.post('/reviews', (req: Request, res: Response) => {
  res.send('Add a review for a movie/TV show');
});

/**
 * @route GET /api/reviews/:itemId
 * @desc Get all reviews for a specific movie/TV show
 */
reviewRouter.get('/reviews/:itemId', (req: Request, res: Response) => {
  res.send('Get all reviews for a specific movie/TV show');
});
/**
 * @route DELETE /api/reviews/:reviewId
 * @desc Delete a review (Only by the user who created it)
 */
reviewRouter.delete('/reviews/:reviewId', (req: Request, res: Response) => {
  res.send('Delete a review (Only by the user who created it)');
});
export default reviewRouter;
