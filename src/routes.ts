import { Router } from 'express';
import CoordinatesController from './controllers/CoordinatesController';
import MovementController from './controllers/MovementController';

const routes = Router();

// endpoint que retorna as coordenadas atuais: x, y e direção da sonda
routes.get('/coordinates', CoordinatesController.index);

// endpoint que envia a sonda para a posição inicial
routes.put('/reset', CoordinatesController.reset);

routes.post('/move', MovementController.move);

export default routes;