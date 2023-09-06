import React from 'react'
import { useSelector } from 'react-redux';

const TodoList = () => {
    const todoListData = useSelector((storeData) => {
        return storeData.todo;
    })
    // console.log(todoListData);
    return (
        <div>
            <h1>Todo List</h1>
            {todoListData.map((item, index) => (
                <div key={index+1} style={{ border: "1px solid red", margin: "1rem", paddingLeft: "1rem", width: "30%" }}>

                    <p>{index + 1}</p>
                    <p>{item}</p>

                </div>
            ))}

        </div>
    )
}

export default TodoList;
