import React, { useState } from 'react'

export default function AddTodo({todoList, setTodoList}) {
    const [todo, setTodo] = useState({value: "", completed: false})
    const handleSubmit = (event) => {
        setTodoList([...todoList, todo])
        setTodo({value: "", completed: false})
        event.preventDefault()
    }
    return (
        <form className="form-row" onSubmit={handleSubmit}>
            <div className="col-10 form-group">
                <input type="text" placeholder="add todo" className="form-control" value={todo.value} onChange={(e) => setTodo({...todo, value: e.target.value})} required/> 
                
            </div>
            <button type="submit" className=" col-2 form-control btn btn-dark" >Add</button>
        </form>
    )
}
