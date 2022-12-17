
import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const[value, setValue] = useState("")

  const HandleSubmit = (e) => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue("")
  }

  const addTodo = (text) => {
    const newTodos = [...todos, { text}];
    setTodos(newTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos[id].isCompleted = true;
    setTodos(newTodos);
  }

  const deleteItem = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
  }

  
  
  return (
    <>

    <div className="main_div">
    <div className="child_div">
      {
        todos.map((curElem, ind) => {
          return(
            <>
            <div className="main_div">
            <div className="child_div">
            
            <p key={ind}    
              style = {{ textDecoration: curElem.isCompleted ? "line-through" : ""}}
            >{curElem.text}  </p>
            <button onClick = {() =>completeTodo(ind) }>Complete</button>
            <a onClick={() => deleteItem(ind)} >X</a>
            </div>
            </div>
            
            </>
           
          )
        })
      }

      <form onSubmit={HandleSubmit}>
        <input type="text" placeholder='Enter Item'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        
        />
       
      
      </form>
    </div>
    </div>

    
    
   
    </>
  );
}

export default App;
