import { Router } from 'express';
import { Request, Response } from 'express';
const notificationRouter = Router();

/**
 * @route GET /api/notifications
 * @desc Get all notifications for the user
 */
notificationRouter.get('/', (req: Request, res: Response) => {
  res.send(' Get all notifications for the user');
});

/**
 * @route PUT /api/notifications/read
 * @desc Mark notification as read
 */
notificationRouter.put('/read', (req: Request, res: Response) => {
  res.send(' Mark notification as read');
});

/**
 * @route POST /api/notifications
 * @desc Send notification to a user (admin only)
 */
notificationRouter.post('/', (req: Request, res: Response) => {
  res.send(' Send notification to a user (admin only)');
});
export default notificationRouter;
