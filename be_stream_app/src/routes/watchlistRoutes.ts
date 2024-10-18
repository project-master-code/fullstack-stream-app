import { Router } from 'express';
import { Request, Response } from 'express';
const watchlistRouter = Router();

/**
 * @route POST /api/watchlist
 * @desc add movie or Tv Show to watchlist
 */
watchlistRouter.post('/', (req: Request, res: Response) => {
  res.send('add new list a movies');
});

/**
 * @route DELETE /api/watchlist
 * @desc Remove movie or TV show from watchlist
 */
watchlistRouter.delete('/:itemId', (req: Request, res: Response) => {
  res.send('Remove movie or TV show from watchlist');
});
/**
 * @route GET /api/watchlist
 * @desc Get user's watchlist
 */
watchlistRouter.get('/', (req: Request, res: Response) => {
  res.send('Get users watchlist');
});

export default watchlistRouter;
