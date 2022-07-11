import React from 'react'
import Todo from './Todo'
import './TodoList.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Select from 'react-select'

export default function TodoList(props) {

    const options = [
        { value: 'all', label: 'All' },
        { value: 'pending', label: 'Pending' },
        { value: 'completed', label: 'Completed' }
    ]

    return (
        <div className='todo-list'>
            {props.todoList.length > 0 ? <h1>To-Do's</h1> : <h1>No TO-DO's</h1>}

            <Select options={options} />

            <TransitionGroup component="div">
                {
                    props.todoList.length > 0 ?
                        [...props.todoList.keys()].map((k) => (
                            <CSSTransition key={k} timeout={700} classNames="item">
                                <Todo key={k} text={props.todoList[k]['text']} arrId={props.todoList[k]['id']} index={k} todos={props.todoList} setTodoList={props.setTodoList} />
                            </CSSTransition>
                        ))
                        : <p></p>
                }
            </TransitionGroup>
        </div>
    )
}

