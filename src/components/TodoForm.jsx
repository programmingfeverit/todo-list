import React from 'react'
import './TodoForm.css'

export default function TodoForm(props) {

  function handleSubmit(e) {
    e.preventDefault();
    props.setTodoList([...props.todoList, props.todo])
    props.setTodo('')
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit} >
      <label>To-Do : </label>
      <input required type='text' className='todoInputBox' name='todo' value={props.todo} onChange={(e) => {
        props.setTodo(e.target.value);
      }} />
      <button type='submit' className='btn-submit'>Save</button>
    </form>
  )
}
