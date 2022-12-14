import express, { Router } from 'express';
import authRoute from './auth.route';
import userRoute from './user.route';
import claimRoute from './claim.route';
import commentRoute from './comment.route';

const router = express.Router();

interface IRoute {
  path: string;
  route: Router;
}

const defaultIRoute: IRoute[] = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/claims',
    route: claimRoute,
  },
  {
    path: '/comments',
    route: commentRoute,
  },
];

defaultIRoute.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
