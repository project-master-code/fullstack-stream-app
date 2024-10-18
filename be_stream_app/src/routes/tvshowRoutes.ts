import { Router } from 'express';
import { Request, Response } from 'express';
const tvShowRouter = Router();

/**
 * @route GET /api/tvshows
 * @desc Get all TV shows
 */
tvShowRouter.get('/', (req: Request, res: Response) => {
  res.send('Get all TV shows');
});
/**
 * @route GET /api/tvshows/:id
 * @desc Get TV show details by ID
 */
tvShowRouter.get('/:id', (req: Request, res: Response) => {
  res.send('Get TV show details by ID');
});
/**
 * @route GET /api/tvshows/episodes/:showId
 * @desc Get episodes for a specific TV show
 */
tvShowRouter.get('/episodes/:showId', (req: Request, res: Response) => {
  res.send('Get episodes for a specific TV show');
});
/**
 * @route GET /api/tvshows/genre/:genreId
 * @desc Get TV shows by genre
 */
tvShowRouter.get('/genre/:genreId', (req: Request, res: Response) => {
  res.send('Get TV shows by genre');
});
export default tvShowRouter;
