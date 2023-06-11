import {useState, useEffect} from "react";
import TodoItem from "./TodoItem";
import uniqid from 'uniqid';

export default function TodoList() {
    const [todos, setTodos] = useState([
        {id: 1, text: 'Clean my room'},
        {id: 2, text: 'Wash the dishes'},
        {id: 3, text: 'Go to the gym'}
    ]);

    console.log('render')

    useEffect(() => {
        console.log('Mounted');
    }, []);

    const onTodoInputBlur = (e) => {
        let todo = {
            id: uniqid(), 
            text: e.target.value
        };

        setTodos(state => [
            ...state,
            todo
        ]);

        e.target.value = '';
    } 

    const deleteTodoItemClickHandler = (id) => {
        setTodos(oldTodos => oldTodos.filter(todo => todo.id !== id));
    }

    return (
        <>
            <label htmlFor="todo-name">To DO</label>
            <input id="todo-name" type="text" onBlur={onTodoInputBlur} name="todo" />
            <ul>
                {todos.map(todo => <TodoItem key={todo.id} id={todo.id} text={todo.text} onDelete={deleteTodoItemClickHandler} />)}
            </ul>
        </>
    )
}