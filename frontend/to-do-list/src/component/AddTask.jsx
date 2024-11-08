import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddTask = () => {
  const navigate =useNavigate();
  const tasks ={
    task:""
}

    const [task, setTasks]=useState(tasks)

    const inputHandler=(e)=>{
      // const name aur value ko target krna h
      const {name , value} = e.target;
      setTasks({...task, [name]:value})


    }

    const submitForm =async(e)=>{
      //post task in axios API 
      //log the value
      //navigate to home
      e.preventDefault();
      await axios.post("http://localhost:8000/api/create",task)
      .then((res)=>{
        console.log(res);
        navigate('/')
        })
      .catch((err)=>console.log(err))
    }
  return (
    <div>AddTask
        <form onSubmit={submitForm}>
          <div>
          <input type="text" onChange={inputHandler} autoComplete='off'  name='task' placeholder='what to do '/>

          </div>
          <div>
            <button>Add user</button>
          </div>

        </form>
    </div>
  )
}

export default AddTask