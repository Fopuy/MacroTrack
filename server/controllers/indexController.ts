import {prisma} from '../prisma.js'
import type { Request, Response } from 'express'

export async function getMeal(req:Request, res:Response){  
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const meals = await prisma.meal.findMany({
        where: {
            date: {
                gte: today,
                lt: tomorrow
        }}
    }
    );
    res.json(meals);
    console.log(meals)
}