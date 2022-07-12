import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [firstRender, setFirstRender] = useState(true);
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("all");

  const filterTodos = (sts) => {
    const todos = JSON.parse(localStorage.getItem("todo"));
    if (todos) {
      switch (sts) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "pending":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }

      // setTodoList(todos);
      setFirstRender(false);
    }
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todo"));

    if (todos === null) {
      localStorage.setItem("todo", JSON.stringify([]));
      todos = JSON.parse(localStorage.getItem("todo"));
    }

    setTodoList(todos);
    filterTodos("all");
  }, []);

  useEffect(() => {
    if (!firstRender) {
      localStorage.setItem("todo", JSON.stringify(todoList));
      filterTodos(status);
    }
  }, [todoList]);

  useEffect(() => {
    filterTodos(status);
  }, [status]);

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
        filteredTodos={filteredTodos}
      />

      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        setStatus={setStatus}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
