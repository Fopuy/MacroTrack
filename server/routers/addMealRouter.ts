import express from 'express'
import addMeal from '../controllers/addMeal.js';
const router = express.Router();

router.post('/', addMeal)

export default router;

