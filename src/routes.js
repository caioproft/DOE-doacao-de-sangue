import { Router } from 'express';
import DonorController from './app/controller/DonorController';

const routes = new Router();

routes.get('/', function (req, res) {
  return res.render("index.html")
});

routes.post('/', DonorController.store)


export default routes;