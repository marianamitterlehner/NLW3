import {Router} from 'express';
import OrphanagerController from './controllers/OrphanagerController';

const routes = Router();

routes.get('/orphanages', OrphanagerController.index)
routes.post('/orphanages', OrphanagerController.create)


export default routes;