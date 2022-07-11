import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [firstRender, setFirstRender] = useState(true);
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todo"));
    if (todos) {
      setTodoList(todos);
      setFirstRender(false);
    }
  }, []);

  useEffect(() => {
    if (!firstRender) {
      localStorage.setItem("todo", JSON.stringify(todoList));
    }
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
