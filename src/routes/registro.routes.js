import { Router } from "express";
import passport from 'passport';
import {showRegister, failRegister} from "../controller/registro.controller.js";

const router = Router();

router.get('/', (req, res) => {showRegister})

router.post('/', passport.authenticate('register', {failureRedirect: '/failregister'}), async (req, res) => { res.send({status: 'success', message: 'Usuario creado correctamente'})
})
router.get('/failregister', (req, res) => {failRegister})

export default router