import React from "react";
import Todo from "./Todo";

const TodoList = ({todos}) => {
    return (
        <>
            {todos.map(todo => (
                <Todo key={todo.id} title={todo.title}/>
            ))}
        </>
    )
}

export default TodoList;