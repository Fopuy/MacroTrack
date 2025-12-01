import {useState} from 'react'

export function App (){
  //const [test, setTest]=useState('');
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbs, setCarbs] = useState(0);

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /* const res = await fetch('http://localhost:3000/api/index', {
      method: "GET",
    });
    const data = await res.json();
    setTest(JSON.stringify(data, null, 2)); */
    const res = await fetch('http://localhost:3000/api/addmeal', {
      method:"POST",
      headers: {
        'Content-Type': 'application/json'  
      },
      body: JSON.stringify({
        name,
        calories,
        protein,
        fat,
        carbs
      })})
      console.log({name, calories, protein, fat, carbs});
    const data = await res.json();
    console.log(data);
    }

  return (
    <>
    <div className = "flex justify-center h-full">
      <div className = "border flex flex-col justify-center max-w-3/4 items-center w-full h-full">
        <h1 className="text-4xl py-4">MacroTracker</h1>
        <form className = "flex flex-col space-y-2" onSubmit={handleSubmit}>
          <label htmlFor = "meal">
            Meal: 
            <input id="meal" type = "text" placeholder="Food" onChange={((e)=>setName(e.target.value))}/>
          </label>
          <label htmlFor = "calories">
            Calories: 
            <input id="calories" type = "number" placeholder="Calories in grams" onChange={(e)=>setCalories(parseInt(e.target.value))}/>
          </label>
          <label htmlFor = "protein">
            Protein:
            <input id ="protein" type = "number" placeholder="Protein in grams" onChange={(e)=>setProtein(parseInt(e.target.value))}/>
          </label>
          <label htmlFor = "fat">
            Fat: 
            <input id="fat" type = "number" placeholder="Fat in grams" onChange={(e)=>setFat(parseInt(e.target.value))}/>
          </label>
          <label htmlFor = "carbs">
            Carbs: 
            <input id="carbs" type = "number" placeholder="Carbs in grams" onChange={(e)=>setCarbs(parseInt(e.target.value))}/>
          </label>
          <button className = "bg-blue-400 rounded-2xl py-4 cursor-pointer text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  )
}