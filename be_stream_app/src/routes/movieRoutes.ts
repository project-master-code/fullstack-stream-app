import { Router } from 'express';
import { Request, Response } from 'express';
const moviesRouter = Router();

/**
 * @route GET /api/movies
 * @desc Get movies
 */
moviesRouter.get('/', (req: Request, res: Response) => {
  res.send(' get a movies');
});

/**
 * @route POST /api/movies
 * @desc add a new movies
 */
moviesRouter.post('/', (req: Request, res: Response) => {
  res.send(' post a movies');
});

/**
 * @route PUT /api/movies/:id
 * @desc update a movies
 */
moviesRouter.put('/:id', (req: Request, res: Response) => {
  res.send(' update a movies');
});

/**
 * @route DELETE /api/movies/:id
 * @desc delete a movie
 */
moviesRouter.delete('/:id', (req: Request, res: Response) => {
  res.send(' delete a movies');
});
export default moviesRouter;
