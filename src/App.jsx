import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos,setTodos] = useState([
    'Go to Gym',
    'Eat healthy food'
  ])

  function handleAddTodos(newTodo){
    const newTodoList = [...todos,newTodo]
    setTodos(newTodoList)
  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos}/>
    </>
  )
}

export default App
