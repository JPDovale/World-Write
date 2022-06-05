import { Router } from "express";

import HelloController from "./controllers/HelloController";
import UserController from './controllers/UserControllers'
import { auth, adm } from "./middlewares/auth";

const router = new Router()

router.post('/user/register', UserController.register)
router.post('/user/login', UserController.login)

router.use(auth)
router.use(adm)

router.get('/hello', HelloController.hello)


export default router