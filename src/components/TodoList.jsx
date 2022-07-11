import React, { useEffect, useState } from 'react'
import Todo from './Todo'
import './TodoList.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function TodoList(props) {

    return (
        <div className='todo-list'>
            <TransitionGroup component="div">
                {props.todoList.length > 0 ? <h1>To-Do's</h1> : <h1>No TO-DO's</h1>}
                {
                    props.todoList.length > 0 ?
                        [...props.todoList.keys()].map((k) => (
                            <CSSTransition key={k} timeout={700} classNames="item">
                                <Todo key={k} text={props.todoList[k]} index={k} todos={props.todoList} setTodoList={props.setTodoList} />
                            </CSSTransition>
                        ))
                        : <p></p>
                }
            </TransitionGroup>
        </div>
    )
}
