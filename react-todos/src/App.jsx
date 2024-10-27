import { useState } from 'react';
import Todo from './components/Todo';
import './App.css'

const todos_array = [
  {
    title: "Go to gym",
    description : "from 7-9",
    completed: false
  },
  {
    title: "Study",
    description : "9-11",
    completed: true
  }
];
function App() {
  const [todos, setTodos] = useState(todos_array);

  function addTodo(){
    setTodos([...todos, {
      title: "New Todo Title",
      description: "New Todo Desc",
      completed: false,
    }]);
  }
  return (
    <>
      <button onClick={addTodo}>Add a Todo</button>
      <div style={{display:"flex"}}>
        {todos.map((todo, index)=>{
          return (
            <Todo title={todo.title} description={todo.description} completed={todo.completed} index={index}></Todo>
          );
        })}
      </div>
    </>
  )
}

export default App
