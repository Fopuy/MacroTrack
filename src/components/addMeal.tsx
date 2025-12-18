import {useState} from 'react'
import { useNavigate } from 'react-router';

export function AddMeal(){
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [carbs, setCarbs] = useState('');
  const navigate=useNavigate();

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!name || !calories || !protein || !fat || !carbs){
      alert("Please fill in all fields");
      return;
    }
    const caloriesNum = parseInt(calories)
    const proteinNum = parseInt(protein)
    const fatNum = parseInt(fat)
    const carbsNum = parseInt(carbs)
    const res = await fetch('https://macrotrack.onrender.com/', {
      method:"POST",
      headers: {
        'Content-Type': 'application/json'  
      },
      body: JSON.stringify({
        name,
        caloriesNum,
        proteinNum,
        fatNum,
        carbsNum
      })})
      console.log({name, calories, protein, fat, carbs});
    const data = await res.json();
    console.log(data);
    setName('')
    setCalories('')
    setProtein('')
    setFat('')
    setCarbs('')
    navigate("/");
    }

    return (
    <>
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-md">
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Add Food</h1>
              <form className = "space-y-4" onSubmit={handleSubmit}>
                  <label htmlFor = "meal" className="block text-sm font-medium text-gray-700 mb-1">
                    Meal: 
                    <input 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      value={name} 
                      id="meal" 
                      type = "text" 
                      placeholder="e.g. Chicken Breast" 
                      onChange={((e)=>setName(e.target.value))}/>
                  </label>
                  <label htmlFor = "calories" className="block text-sm font-medium text-gray-700 mb-1">
                    Calories: 
                    <input 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      value={calories}
                      id="calories" 
                      type = "number" 
                      placeholder="kcal" 
                      onChange={(e)=>setCalories(e.target.value)}/>
                  </label>

                  <div className="grid grid-cols-3 gap-4">

                    <label htmlFor = "protein" className="block text-sm font-medium text-gray-700 mb-1">
                      Protein:
                      <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        value={protein}
                        id ="protein" 
                        type = "number" 
                        placeholder="g" 
                        onChange={(e)=>setProtein(e.target.value)}/>
                    </label>
                    <label htmlFor = "fat" className="block text-sm font-medium text-gray-700 mb-1">
                      Fat: 
                      <input 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        value={fat}
                        id="fat" 
                        type = "number" 
                        placeholder="g" 
                        onChange={(e)=>setFat(e.target.value)}/>
                    </label>
                    <label htmlFor = "carbs" className="block text-sm font-medium text-gray-700 mb-1">
                      Carbs: 
                      <input 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        value={carbs}
                        id="carbs" 
                        type = "number" 
                        placeholder="g" 
                        onChange={(e)=>setCarbs(e.target.value)}/>
                    </label>
                  </div>
                  <button className = "w-full bg-indigo-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-600">
                    Submit
                  </button>
              </form>
        </section>
        <section>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Search</h2>
            <label htmlFor="food-search" className="block text-sm font-medium text-gray-700 mb-1">
              <input 
                type='text' 
                placeholder="Search for foods..." 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500">
              </input>
            </label>
        </section>
      </div>
    </div>
    </>)
}