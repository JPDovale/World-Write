import { Router } from "express";

import HelloController from "./controllers/HelloController";

const routes = new Router()

routes.get('/hello', HelloController.hello)

export default routes