import {useState} from "react";
import {v4 as uuidv4} from 'uuid';

export default function TodoList(){
    let [todos,setTodos]=useState([{task:"sample task",id:uuidv4()}]);
    let [newTodo,setNewTodo]=useState("");

    let addnewTask=()=>{
        setTodos((prevTodos)=>{
           return [...prevTodos,{task:newTodo,id:uuidv4()}]
            });
        setNewTodo("");
    };
    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    };
    let deleteTodo=(id)=>{
        setTodos((prevTodos)=>todos.filter((prevTodos)=> prevTodos.id!=id));
        
    };
    let upperCaseAll=()=>{
        setTodos((prevtodos)=>(
            prevtodos.map((todo)=>{
            return{
                ...todo,
                task:todo.task.toUpperCase(),
            }})
        ));
        
    }
    let upperCaseOne=(id)=>{
        setTodos((prevTodos)=>
        prevTodos.map((todo)=>{
            if(todo.id===id){
                return{
                    ...todo,
                    task:todo.task.toUpperCase(),
                };
            }
            else{
                return todo;
            }
        }));
    };
    return(
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
            <br></br>
            <button onClick={addnewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h4>Tasks Todo</h4>
            <ul>
                {
                    todos.map((todo)=>{
                        return <li key={todo.id}>
                            <span>{todo.task}</span>
                            &nbsp; &nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                            <button onClick={()=>upperCaseOne(todo.id)}>Make UpperCase</button>
                        </li>
                    })
                }
            </ul>
            <br></br>
            <button onClick={upperCaseAll}>Upper Case All</button>
            
        </div>
    )
}