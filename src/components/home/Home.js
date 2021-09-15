import React, { useEffect, useState } from 'react';
import TodoList from '../todo/TodoList';
import './Home.css';

const Home = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        const getTasks = async () =>{
            const todosFromServer = await fetchTodos()
            console.log(todosFromServer)
            setTodos(todosFromServer)
        }
        getTasks()
    }, [])

    // Fetch Tasks
    const fetchTodos = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
        const data = await res.json()
        return data
    }
    return (
        <div className='todo-list'>
           <TodoList todos={todos}/>
        </div>
    )
}

export default Home;