import {prisma} from '../prisma.js'

import type { Request, Response } from 'express'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nhjyqsdirnmpgvidbeeh.supabase.co'
//const supabaseKey = process.env.SUPABASE_KEY
//const supabase = createClient(supabaseUrl, supabaseKey)

export default async function addMeal(req:Request, res:Response){
    console.log(req.body);
    const {name, caloriesNum, proteinNum, fatNum, carbsNum } = req.body;
        /* await prisma.meal.create({
            data: {
                name,
                calories:caloriesNum,
                protein:proteinNum,
                fat:fatNum,
                carbs:carbsNum
            }
        })*/

        res.json({success: true, message: 'Meal added successfully'});
        console.log('Meal added successfully');
}       