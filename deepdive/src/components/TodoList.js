import {useState, useEffect} from "react";
import TodoItem from "./TodoItem";

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
            id: todos.length + 1, 
            text: e.target.value
        };

        setTodos(state => [
            ...state,
            todo
        ])
    }

    return (
        <>
            <label htmlFor="todo-name">To DO</label>
            <input id="todo-name" type="text" onBlur={onTodoInputBlur} name="todo" />
            <ul>
                {todos.map(todo => <TodoItem key={todo.id} text={todo.text} />)}
            </ul>
        </>
    )
}