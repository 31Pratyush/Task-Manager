import './App.css';
import {useEffect, useState} from 'react';
import Header from './Header';
import Todos from './Todos';
import AddTodo from './AddTodo';
import Footer from './Footer';
function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const addTodo=(title,desc)=>{
    console.warn(title,desc)
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
    sno =todos[todos.length-1].sno+1;
  }
    const myTodo={
      sno:sno,
      title:title,
      description:desc
    }
    setTodos([...todos,myTodo]);
    
  }  
  const[todos, setTodos]=useState(initTodo);
  const onDelete=(todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }
    ))
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  localStorage.getItem("todos");
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);
  return (
    <div className="App">
     <Header title="My Todo list"/>
     <AddTodo addTodo={addTodo}/>
     <Todos todo={todos} onDelete={onDelete}/>
     <Footer/>
    </div>
  );
}

export default App;
