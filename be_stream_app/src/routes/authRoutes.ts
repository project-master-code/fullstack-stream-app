import { Request, Response } from 'express';
import { Router } from 'express';

const authRouter = Router();
/**
 * @route POST /api/auth/signup
 * @desc Register a user
 */
authRouter.post('/signup', (req: Request, res: Response) => {
  res.send('ini adalah register route');
});
/**
 * @route POST /api/auth/login
 * @desc Login a user
 */
authRouter.post('/login', (req: Request, res: Response) => {
  res.send('ini adalah login route');
});

/**
 * @route POST /api/auth/forget-password
 * @desc forget password a user
 */
authRouter.post('/forget-password', (req: Request, res: Response) => {
  res.send('ini adalah forget password route');
});
/**
 * @route POST /api/auth/reset-password
 * @desc reset password a user
 */
authRouter.post('/reset-password', (req: Request, res: Response) => {
  res.send('ini adalah reset password route');
});

/**
 * @route GET /api/auth/me
 * @desc check if user is authenticated
 */
authRouter.get('/me', (req: Request, res: Response) => {
  res.send('ini adalah me route');
});
export default authRouter;
