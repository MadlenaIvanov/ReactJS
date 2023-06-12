import {useState, useEffect} from "react";
import TodoItem from "./TodoItem";
import uniqid from 'uniqid';
import { createTodo } from '../services/todoService'

const API_URL = 'http://localhost:3030/jsonstore';

export default function TodoList() {
    const [todos, setTodos] = useState([
        // {id: 1, text: 'Clean my room', isDone: false},
        // {id: 2, text: 'Wash the dishes', isDone: false},
        // {id: 3, text: 'Go to the gym', isDone: false}
    ]);

    console.log('render')
    useEffect(() => {
        fetch(`${API_URL}/todos`)
        .then(res => res.json())
        .then(todosResult => {
            setTodos(Object.values(todosResult))
        });
    }, []);


    // useEffect(() => {
    //     console.log('Mounted');
    // }, []);

    const onTodoInputBlur = (e) => {
        let todo = {
            id: uniqid(), 
            text: e.target.value,
            isDone: false
        };

        createTodo(todo)
            .then(createdTodo => {
                console.log(createdTodo)
                setTodos(state => [
                    ...state,
                    createdTodo
                ]);                
                e.target.value = '';
            })
            .catch(err => {
                console.log(err)
            })
    } 

    const deleteTodoItemClickHandler = (e, id) => {
        e.stopPropagation();
        setTodos(oldTodos => oldTodos.filter(todo => todo.id !== id));
    }

    const toggleTodoItemClickHandler = (id) => {

        setTodos(oldTodos => {
            let selectedTodo = oldTodos.find(x => x.id === id);
            let toggledTodo = {...selectedTodo, isDone: !selectedTodo.isDone};
            let restTodo = oldTodos.filter(x => x.id !== id);

            return [...restTodo, toggledTodo];
        })
    }

    return (
        <>
            <label htmlFor="todo-name">To DO</label>
            <input id="todo-name" type="text" onBlur={onTodoInputBlur} name="todo" />
            <ul>
                {todos.map(todo => 
                    <TodoItem 
                        key={todo.id} 
                        todo={todo}
                        onDelete={deleteTodoItemClickHandler} 
                        onClick={toggleTodoItemClickHandler}
                    />
                )}
            </ul>
        </>
    )
}