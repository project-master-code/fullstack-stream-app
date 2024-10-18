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
 * @route GET /api/subscriptions/:userId
 * @desc Get subscription details by user ID
 */
subscribeRouter.get('/:userId', (req: Request, res: Response) => {
  res.send('get subscription by user ID');
});

/**
 * @route GET /api/subscriptions
 * @desc Get all available subscription plans
 */
subscribeRouter.get('/', (req: Request, res: Response) => {
  res.send('Get all available subscription plans');
});

/**
 * @route POST /api/subscriptions/:userId/cancel
 * @desc Cancel the user's subscription
 */
subscribeRouter.post('/:userId/cancel', (req: Request, res: Response) => {
  res.send('cancel user subscription');
});

/**
 * @route GET /api/subscriptions/user
 * @desc Get user's current subscription
 */
subscribeRouter.get('/user', (req: Request, res: Response) => {
  res.send('Get users current subscription');
});
export default subscribeRouter;
