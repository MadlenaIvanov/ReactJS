import styles from './TodoItem.module.css'
import React, { useEffect } from "react"

export default function TodoItem({
    todo,
    onDelete,
    onClick
}) {

    useEffect(() => {
        console.log(`${todo.id} - Mounted`);

        return () => {
            console.log('Unmount')
        }
    }, [todo.id])

    return (
        <li onClick={() => onClick(todo.id)} className={todo.isDone ? styles['todo-item-done'] : ''}>
            {todo.text} 
            <button onClick={(e) => onDelete(e, todo.id)}>x</button>
        </li>
    );
}