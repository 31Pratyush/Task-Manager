import React,{useState} from 'react'
import { Form, Button } from 'react-bootstrap'
function AddTodo(props) {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description Empty");
        }
        else{
        setTitle("");
        setDesc("");
    }
        props.addTodo(title,desc);
    }
    return (
        <div className="container text-left">
            <h3 className="my-3">Add a Todo</h3>
            <Form onSubmit={submit}>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label >Title</Form.Label>
                    <Form.Control for="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder="Enter Title" />
                    <Form.Text className="text-muted">
                        Lets begin work
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicDesc">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} for="desc" placeholder="Description" />
                </Form.Group>
                <Button variant="success" type="submit" className="btn btn-sm">
                    Submit
                </Button>
            </Form>
        </div>
    );
} export default AddTodo;