import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import AdminMiddleware from './app/middlewares/admin';
import PlanController from './app/controllers/PlanController';
import RegistrationController from './app/controllers/RegistrationController';

const routes = Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(AdminMiddleware);
routes.post('/students', StudentController.store);
routes.put('/students', StudentController.update);

// Plans
routes.get('/plans', PlanController.index);
routes.post('/plans', PlanController.store);
routes.put('/plans/:id', PlanController.update);
routes.delete('/plans/:id', PlanController.delete);

// Registrations
routes.get('/registrations', RegistrationController.index);
routes.post('/registrations', RegistrationController.store);
routes.put('/registrations/:id', RegistrationController.update);

export default routes;
