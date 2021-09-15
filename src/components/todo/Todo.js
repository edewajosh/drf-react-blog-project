import React from "react";

const Todo = ({key,title}) => {
    return (
        <div className='todo-card'>
            <h1>Title: {title}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Quod molestiae corporis necessitatibus voluptatibus ducimus beatae 
                voluptatum a cupiditate doloremque, 
                velit aliquam laborum sint veritatis illum, asperiores nulla incidunt numquam maxime.</p>
        </div>
    )
}

export default Todo;