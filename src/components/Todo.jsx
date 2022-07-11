import React from 'react'
import './Todo.css'
export default function Todo(props) {

    function handleDeleteClick() {
        const indx = props.index;

        props.setTodoList([
            ...props.todos.slice(0, indx),
            ...props.todos.slice(indx + 1, props.todos.length),
        ]);
    }

    const updateState = (e) => {
        const newState = props.todos.map(obj => {
            // 👇️ if id equals 2, update country property
            // console.log(obj)
            //console.log('PROPS Index : ' + props.index)
            if (obj.id === props.arrId) {
                console.log("meeeee")
                console.log(e.target.checked)
                return { ...obj, completed: Boolean(e.target.checked) };
            }

            // 👇️ otherwise return object as is
            return obj;
        });

        props.setTodoList(newState);
    };

    return (
        <div className='todo-item'>
            <input type="checkbox" checked={props.todos[props.index]['completed']} onChange={updateState} value={props.todos[props.index]['completed']} />
            <p style={{ textDecoration: props.todos[props.index]['completed'] ? "line-through" : "none" }}>{props.text}</p>
            <button className='delete-todo-btn' onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}
