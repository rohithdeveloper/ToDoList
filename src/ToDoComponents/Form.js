import React, { useState } from 'react'
import TodoList from './TodoList'

function Form() {
    const [task,setTask] =useState('')
    const [todos,setTodos]=useState([])
    const changeHandler=(e)=>{
        setTask(e.target.value)
    }
    const deleteHandler=(indexValue)=>{
        const newTodos=todos.filter((todo,index)=>index !== indexValue)
        setTodos(newTodos)
    }
    
    const submitHandler=(e)=>{
        e.preventDefault();
        const add=task
        if(add===''){
            alert("field should not be empty")
        }
        else{
            console.log(task)
            const newTodos=[...todos,task];
            setTodos(newTodos);
            setTask('')
        }
        
    }
    
  return (
    <div>
      <center>
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>Todo Management Application</h5>
                <form onSubmit={submitHandler}>
                    <input type='text'
                             placeholder='add todays tasks' 
                            value={task}
                             name='task'
                             onChange={changeHandler}
                            ></input> &nbsp;
                    <input type='submit' value='Add Task' name='Add' ></input>
                </form>
                <TodoList todolist={todos} deleteHandler={deleteHandler}/>
            </div>
        </div>
      </center>
    </div>
  )
}

export default Form
