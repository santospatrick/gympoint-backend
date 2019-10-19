import { Router } from 'express';

const routes = Router();

routes.get('/', (_req, res) => {
  return res.json({ message: 'top top' });
});

export default routes;
