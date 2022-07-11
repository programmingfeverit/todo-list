import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    //console.log(todo);
  }, [todo]);
  useEffect(() => {
    //console.log(todoList);
  }, [todoList]);

  return (
    <div>
      <div className="header">
        <h1>To-Do App</h1>
      </div>

      <TodoForm
        setTodo={setTodo}
        setTodoList={setTodoList}
        todoList={todoList}
        todo={todo}
      />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
