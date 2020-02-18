import { Router } from 'express';
import Donor from './app/model/Donor';

const routes = new Router();

routes.get('/', function (req, res) {
  return res.render("index.html")
});

routes.get('/donors', function (req, res) {
  return res.json({ msg: 'oi' })
});

export default routes;