import React from 'react'
import TodoItem from './TodoItem'
function Todos(props){
    return(
        <div className="container">
            <h3 className="my-3 text-left">Todos List</h3>
            {props.todo.length===0? "No Works Left":
            props.todo.map((todos)=>{
                return <TodoItem todo={todos} key={props.todo.sno} onDelete={props.onDelete}/>
            })
             }
        </div>
    );
} export default Todos;