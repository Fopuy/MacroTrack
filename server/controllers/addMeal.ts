import {prisma} from '../prisma.js'

import type { Request, Response } from 'express'

export default async function addMeal(req:Request, res:Response){
    console.log(req.body);
    const {name, calories, protein, fat, carbs } = req.body;
        await prisma.meal.create({
            data: {
                name,
                calories,
                protein,
                fat,
                carbs
            }
        })
        res.json({success: true});
        console.log('Meal added successfully');
}       