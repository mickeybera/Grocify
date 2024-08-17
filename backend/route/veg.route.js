import express from 'express';
import {getVeg} from '../controller/veg.controller.js';

const router=express.Router();
router.get("/",getVeg);

export default router;