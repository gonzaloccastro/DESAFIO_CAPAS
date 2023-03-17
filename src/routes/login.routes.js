import { Router } from "express";
import passport from 'passport';
import {login, failLogin, successLogin, logout} from "../controller/login.controller.js";
const router = Router();

router.get('/', (req, res) => {    
    res.render('login', {});
})

router.post('/user', 
    passport.authenticate('login', {failureRedirect: '/faillogin'}), login);

router.get('/faillogin', (req, res) => {failLogin})

const auth = async (req, res, next) => {
    if (await req.session?.user){
        return next()
    }else{
        return res.status(401).send('error de autenticación')
    }
}

router.get('/products', auth, (req,res)=>{successLogin})

router.get('/logout', (req, res) => {logout})

export default router