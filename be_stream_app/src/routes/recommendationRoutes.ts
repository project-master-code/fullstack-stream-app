import { Router } from 'express';
import { Request, Response } from 'express';
const recommendationsRouter = Router();

/**
 * @route GET /api/recommendations
 * @desc Get recommendations for the user
 */
recommendationsRouter.get('/', (req: Request, res: Response) => {
  res.send(' recommendations a movies');
});

export default recommendationsRouter;
