import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Components/Todo'
import TodoList from './Components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>React Redux</h1>
      </div>
      <Todo/>
      <TodoList/>
    </>
  )
}

export default App
