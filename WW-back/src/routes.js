import { Router } from "express";

import HelloController from "./controllers/HelloController";
import StudyPlanerController from "./controllers/StudyPlanerController";
import UserController from './controllers/UserControllers'

import { auth, adm } from "./middlewares/auth";

const router = new Router()

router.post('/user/register', UserController.register)
router.post('/user/login', UserController.login)

router.use(auth)


router.get('/hello', HelloController.hello)
router.get('/all/study-planer/:_id', StudyPlanerController.getAll)
router.post('/new/study-planer/:_id', StudyPlanerController.new )
router.delete('/delete/study-planer/:_id', StudyPlanerController.remove)
router.put('/update/study-planer/:_id', StudyPlanerController.update)

router.use(adm)

export default router