import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import AdminMiddleware from './app/middlewares/admin';

const routes = Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(AdminMiddleware);
routes.post('/students', StudentController.store);
routes.put('/students', StudentController.update);

export default routes;
