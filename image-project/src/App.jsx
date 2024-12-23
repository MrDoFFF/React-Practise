
import { useState } from 'react'
import './App.css'

function App() {
  // const [navOpen, setnavOpen] = useState(false)
  const [todo, settodo] = useState([])
  // arrayimizi daxil edirik 
  const [todoInp, settodoInp] = useState("")
  // burda ise inputumuzu yazirig
  function handleSubmit(e) {
    e.preventDefault()
    if (todoInp === "") {
      return
    }
    // funksiyamizi yazirig  sehife refresh olunmasin deye pd veirik ve eger bos enter edirikse eneter olmasn 
    settodo([...todo, { id:Math.random(), name: todoInp}])
    // burda daxil elediyimiz inputu evvelki ile elaqelendiririk 
    settodoInp("")
  }
  function handleDelete (todoItem) {
    settodo(todo.filter((x) => x.id !== todoItem.id))
  }
  return (
    <>
    <button onClick={()=> settodo([])} style={{backgroundColor:"red", color:"white", border:"none", borderRadius:"5px", margin:"20px"}}>Cl  ose All</button>
        <form onSubmit={handleSubmit}>
      <input type="text" placeholder='daxil et' value={todoInp} onChange={(e) => settodoInp(e.target.value)} />
      <button>ADD</button>
    </form>
    <ol>
      {todo.map((todoItem, i) => 
        <li key={i}>
          <span>{todoItem.name}</span>
          <button onClick={() => handleDelete(todoItem)} style={{backgroundColor:"red" , color:"white", border:"none" , borderRadius:"5px"}}>X
          </button>
          </li>
       
     )} 
    </ol>


     {/* <div className="input">
     <h2>DOLLAR TO AZN</h2>
    <input type="number" value={inputs} onChange={(e) => setinputs(e.target.value)} />
    <h1 className='ans'>{(inputs * 1.7).toFixed(2)}</h1>
    //  </div> */}
    {/* <button onClick={()=> setnavOpen(!navOpen)} style={{width:"30px", height:"30px", backgroundColor:"red" , color:"white"}}>
      {navOpen ? "X" : "="}
    </button>
    {navOpen ? (
      <ul style={{backgroundColor:"blue"}}>
        <li>Header</li>
        <li>Header</li>
        <li>Header</li>
        <li>Header</li>
      </ul>
    ) :null} */}

    </>
  )
}

export default App
