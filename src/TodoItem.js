import React from 'react'
import {Button} from 'react-bootstrap'
function TodoItem(props){
    return (
        <div className="my-5">
            <h4>{props.todo.title}</h4>
            <p>{props.todo.description}</p>
            <Button className="btn-sm" variant="danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</Button>
            <hr></hr>
        </div>
    );
} 
export default TodoItem;