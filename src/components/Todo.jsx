import React from 'react'
import './Todo.css'
import { CSSTransition } from 'react-transition-group';
export default function Todo(props) {

    function handleSubmit() {
        const indx = props.index;

        props.setTodoList([
            ...props.todos.slice(0, indx),
            ...props.todos.slice(indx + 1, props.todos.length),
        ]);
    }

    return (
        <div className='todo-item'>
            <p>{props.text}</p>
            <button className='delete-todo-btn' onClick={handleSubmit}>Delete</button>
        </div>
    )
}
