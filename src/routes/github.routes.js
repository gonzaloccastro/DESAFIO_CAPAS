import { Router } from "express";
import passport from "passport";
import {githubCallback} from "../controller/github.controller.js"

const router = Router();

router.get('/github', passport.authenticate('github', { scope: ['user:email'] }), (req, res) => {});

router.get('/githubcallback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {githubCallback})

export default router;