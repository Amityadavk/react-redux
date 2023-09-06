import React, { useState } from 'react'
import myStore from '../Redux/Store'
import {useDispatch} from "react-redux"
import { TODO } from '../Redux/ActionTypes'
import { todoAction } from '../Redux/Action'

const Todo = () => {
  const [state, setState] = useState("")

  const dispatch = useDispatch()
console.log("dfegfegfgergrg")
  const sendDataToStore = () => {
    // myStore.dispatch({
    //   type: "todo",
    //   payload: state
    // })

    // dispatch({
    //   type: Todo,
    //   payload: state
    // })
    dispatch(todoAction(state))


    setState("")
  }
  return (
    <div>
      <h2>TODO App</h2>
      <input type="text" placeholder='text'
        onChange={(e) => { setState(e.target.value) }} value={state} />
      <button onClick={sendDataToStore}>Submit</button>
    </div>
  )
}

export default Todo;
