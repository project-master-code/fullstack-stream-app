import { Router } from 'express';
import { Request, Response } from 'express';
const genreRouter = Router();

/**
 * @route GET /api/genres
 * @desc Get all genres
 */
genreRouter.post('/', (req: Request, res: Response) => {
  res.send('Get all genres');
});

/**
 * @route POST /api/genres
 * @desc Create a new genre (admin only)
 */
genreRouter.get('/', (req: Request, res: Response) => {
  res.send('Create a new genre (admin only)');
});

/**
 * @route DELETE /api/genres/:genreId
 * @desc Delete a genre (admin only)
 */
genreRouter.delete('/:genreId', (req: Request, res: Response) => {
  res.send('Delete a genre (admin only)');
});
export default genreRouter;
