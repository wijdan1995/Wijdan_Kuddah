import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import AddTodo from './components/AddTodo.jsx'
import Todo from './components/Todo.jsx'
function App() {
  const [todoList, setTodoList] = useState([])
  return (
    <div className="container col-4 mt-5">
      <AddTodo todoList={todoList} setTodoList={setTodoList}/>
      <ul className="list-group">
      {
        todoList.map((todo, i) => <Todo key={i} id={i} todo={todo} todoList={todoList} setTodoList={setTodoList}/>)
      }
    </ul>
    </div>
    
  );
}

export default App;
