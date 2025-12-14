import {useEffect, useState} from "react";
import { ProgressBar } from "./circleProgressBar";
import { RecentMeals } from "./recentMeals";

export function Dashboard() {
    type Meal = {
    name: string;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    };

    const [meal, setMeal] = useState<Meal[]>([]);
    const calorieGoal = 2000;

    useEffect(() => {
        const fetchMeal = async () => {
        const res = await fetch('http://localhost:3000/api/index', {
        method: "GET",
        });
        const data = await res.json();
        setMeal(data);
    }
        fetchMeal();
    },[])

    const dailyCalories = meal.reduce((total: number, meal: Meal) => total + meal.calories, 0);
    const dailyProtein = meal.reduce((total: number, meal: Meal) => total + meal.protein, 0);
    const dailyFat = meal.reduce((total: number, meal: Meal) => total + meal.fat, 0);
    const dailyCarbs = meal.reduce((total: number, meal: Meal) => total + meal.carbs, 0);
    const progress = Math.min(dailyCalories / calorieGoal, 1) * 100

    return (
        <>
        <div className = "bg-gray-50 min-h-screen">
            <div className = "relative mx-auto px-4 py-8 max-w-md">
                <div className="absolute top-8 right-5 w-12 text-5xl cursor-pointer bg-indigo-200 rounded-full aspect-square flex items-center justify-center">
                    <a href="/addmeal">+</a>
                </div>
                <section className = "not-even:mb-8">
                    <h1 className="text-2xl font-bold tex-gray-800 mb-6">Today's Nutrition</h1>
                    <ProgressBar dailyCalories={dailyCalories} calorieGoal={calorieGoal}/>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                            <div className="font-semibold mb-1">Protein:</div>
                            <div className="text-2xl font-bold text-gray-800">{dailyProtein}</div>
                            <div className="text-xs text-gray-500">{((dailyProtein/175)*100).toFixed(0)}% of goal</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                            <div className="text-primary-500 font-semibold mb-1">Fat:</div>
                            <div className="text-2xl font-bold text-gray-800">{dailyFat}</div>
                            <div className="text-xs text-gray-500">{((dailyFat/204)*100).toFixed(0)}% of goal</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                            <div className="text-primary-500 font-semibold mb-1">Carbs:</div>
                            <div className="text-2xl font-bold text-gray-800">{dailyCarbs}</div>
                            <div className="text-xs text-gray-500">{((dailyCarbs/91)*100).toFixed(0)}% of goal</div>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-semibold text-gray-800">Daily Goal</h3>
                                <p className="text-sm text-gray-500">{calorieGoal} kcal</p>
                            </div>
                            <div className="text-primary-500 font-bold">
                                {((dailyCalories/2000)*100).toFixed(0)}%
                            </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                              <div
                                    className="bg-linear-to-r from-indigo-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${progress}%` }}
                                />
                        </div>
                    </div>
                </section>
                <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Meals</h2>
                    <RecentMeals meal={meal}/>
                </section>
            </div>
        </div>
        </>
    )
}