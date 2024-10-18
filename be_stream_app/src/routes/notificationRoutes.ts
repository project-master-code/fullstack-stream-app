import { Router } from 'express';
import { Request, Response } from 'express';
const notificationRouter = Router();

/**
 * @route GET /api/notifications
 * @desc Get user's notifications
 */
notificationRouter.get('/', (req: Request, res: Response) => {
  res.send(' get a movies');
});

/**
 * @route PUT /api/notifications/read
 * @desc Mark notification as read
 */
notificationRouter.put('/read', (req: Request, res: Response) => {
  res.send(' get a movies');
});

export default notificationRouter;
