import { Router } from 'express';
import DonorController from './app/controller/DonorController';

const routes = new Router();

routes.get('/', DonorController.index);

routes.post('/', DonorController.store);


export default routes;