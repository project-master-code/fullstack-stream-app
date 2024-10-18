import express, { Express, Request, Response } from 'express';
import { setupSwagger } from './docs/swaggerDoc';
import authRoutes from './routes/authRoutes';
import moviesRouter from './routes/movieRoutes';
import subscribeRouter from './routes/subscriptionRoutes';
import watchlistRouter from './routes/watchlistRoutes';
import favoriteRouter from './routes/favoriteRoute';
import searchRouter from './routes/searchRouter';
import notificationRouter from './routes/notificationRoutes';
import usersRouter from './routes/usersRoutes';
import recommendationsRouter from './routes/recommendationRoutes';

const app: Express = express();

const port = process.env.PORT || 3000;

app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

setupSwagger(app);

// =================================================================
// ROUTES
// =================================================================
app.use('/api/auth', authRoutes);
app.use('/api/movies', moviesRouter);
app.use('/api/movies', searchRouter);
app.use('/api/subscriptions', subscribeRouter);
app.use('/api/watchlist', watchlistRouter);
app.use('/api/favorites', favoriteRouter);
app.use('/api/notifications', notificationRouter);
app.use('/api/users', usersRouter);
app.use('/api/reccomendations', recommendationsRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
