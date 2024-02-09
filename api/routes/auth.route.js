import express from 'express';
import { google, signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();

// (req,res,next)=>{
//     console.log("i run singup middleware!");
//     next();

// }
router.post('/signup' , signup);
// (req,res,next)=>{
//     console.log("body:",req.body);
//     next();

// }
router.post('/signin',signin);
router.post('/google', google)

export default router;