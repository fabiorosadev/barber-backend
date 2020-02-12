import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// info: O middleware aplica somente nas rotas que vem após a sua aplicação, por isso nas rotas acima, a autenticação não é aplicada.
routes.use(authMiddleware);

routes.put('/users', UserController.update);
export default routes;
