import { Router } from 'express';
import { Request, Response } from 'express';

const subscribeRouter = Router();

/**
 * @router POST /api/subscriptions/create
 * @desc create a new subscription
 */
subscribeRouter.post('/create', (req: Request, res: Response) => {
  res.send('create subscription');
});

/**
 * @route GET /api/subscription/:userId
 * @desc Get subscription details by user ID
 */
subscribeRouter.get('/:userId', (req: Request, res: Response) => {
  res.send('get subscription by user ID');
});
/**
 * @route POST /api/subscription/:userId/cancel
 * @desc Cancel the user's subscription
 */
subscribeRouter.post('/:userId/cancel', (req: Request, res: Response) => {
  res.send('cancel user subscription');
});
export default subscribeRouter;
