import React, { useState } from 'react'
import Todo from './Todo'
import './TodoList.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Select from 'react-select'
import { render } from '@testing-library/react';

export default function TodoList(props) {

    const options = [
        { value: 'all', label: 'All' },
        { value: 'pending', label: 'Pending' },
        { value: 'completed', label: 'Completed' }
    ]
    const statusHandler = (e) => {
        console.log(e.value)
        props.setStatus(e.value)
    }
    return (
        <div className='todo-list'>
            <div className="list-head">
                {props.todoList.length > 0 ? <h1>To-Do's</h1> : <h1>No TO-DO's</h1>}
                <Select onChange={statusHandler} options={options} defaultValue={options[0]} className="filter-cbo" />
            </div>

            <TransitionGroup component="div">
                {
                    props.filteredTodos.length > 0 ?
                        [...props.filteredTodos.keys()].map((k) => (
                            <CSSTransition key={k} timeout={700} classNames="item">
                                <Todo key={k} text={props.filteredTodos[k]['text']} arrId={props.filteredTodos[k]['id']} index={k} filteredTodos={props.filteredTodos} todos={props.todoList} setTodoList={props.setTodoList} />
                            </CSSTransition>
                        ))
                        : <p></p>
                }
            </TransitionGroup>
        </div>
    )
}

