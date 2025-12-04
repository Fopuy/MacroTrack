import {useState} from 'react'

export function AddMeal(){
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [carbs, setCarbs] = useState('');

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const caloriesNum = parseInt(calories)
    const proteinNum = parseInt(protein)
    const fatNum = parseInt(fat)
    const carbsNum = parseInt(carbs)
    const res = await fetch('http://localhost:3000/api/addmeal', {
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
    }

    return (
    <>
    <div className = "flex justify-center h-full">
      <div className = "border flex flex-col justify-center max-w-3/4 items-center w-full h-full">
        <h1 className="text-4xl py-4">MacroTracker</h1>
        <form className = "flex flex-col space-y-2" onSubmit={handleSubmit}>
          <label htmlFor = "meal">
            Meal: 
            <input 
              value={name} 
              id="meal" 
              type = "text" 
              placeholder="Food" 
              onChange={((e)=>setName(e.target.value))}/>
          </label>
          <label htmlFor = "calories">
            Calories: 
            <input 
              value={calories}
              id="calories" 
              type = "number" 
              placeholder="Calories in grams" 
              onChange={(e)=>setCalories(e.target.value)}/>
          </label>
          <label htmlFor = "protein">
            Protein:
            <input 
              value={protein}
              id ="protein" 
              type = "number" 
              placeholder="Protein in grams" 
              onChange={(e)=>setProtein(e.target.value)}/>
          </label>
          <label htmlFor = "fat">
            Fat: 
            <input 
              value={fat}
              id="fat" 
              type = "number" 
              placeholder="Fat in grams" 
              onChange={(e)=>setFat(e.target.value)}/>
          </label>
          <label htmlFor = "carbs">
            Carbs: 
            <input 
              value={carbs}
              id="carbs" 
              type = "number" 
              placeholder="Carbs in grams" 
              onChange={(e)=>setCarbs(e.target.value)}/>
          </label>
          <button className = "bg-blue-400 rounded-2xl py-4 cursor-pointer text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
    </>)
}