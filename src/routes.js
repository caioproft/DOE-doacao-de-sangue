import { Router } from 'express';

const routes = new Router();

routes.get('/', function (req, res) {
  return res.render("index.html")
})

export default routes;