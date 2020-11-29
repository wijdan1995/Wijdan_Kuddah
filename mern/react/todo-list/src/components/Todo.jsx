import React from 'react'

export default function Todo({todo, id, todoList, setTodoList}) {
    const handleCheck = (id) => {
        let newTodoList = [...todoList]
        newTodoList[id].completed = !newTodoList[id].completed
        // console.log(newTodoList);
        setTodoList(newTodoList)
    }
    const handleDelete = (id) => {
        let newTodoList =  todoList.filter( (todo, index) => index !== id)
        // console.log(newTodoList);
        setTodoList(newTodoList)
    }
    return (
        <>
        <li className={todo.completed ? `list-group-item text-muted col-10`:`list-group-item col-10`} style={todo.completed ? {textDecoration: 'line-through'} :{}}>
            <span>{todo.value} </span>
            <label className="ml-2">
                <input type="checkbox" checked={todo.completed} onChange={()=>handleCheck(id)}/>
            </label>
            <span className="col-2 btn btn-link text-danger" onClick={()=>handleDelete(id)}>Delete</span>
            </li>
        
        </>
    )
}
