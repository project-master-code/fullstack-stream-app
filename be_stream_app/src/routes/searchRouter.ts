import { Router } from 'express';
import { Request, Response } from 'express';
const searchRouter = Router();

/**
 * @route GET /api/movies/search
 * @desc search movies
 */
searchRouter.get('/search', (req: Request, res: Response) => {
  res.send(' search a movies');
});

export default searchRouter;
