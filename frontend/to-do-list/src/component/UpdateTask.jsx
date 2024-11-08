import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
const UpdateTask = () => {
    //import usenavigate, useparam, link
    //const empty tasks ,usestate , id ,
    //make inputhandler to update settask
    //make useeffect to getone task
    //make submitform  to submit task
    //make a form to input task
    const navigate = useNavigate()

    const tasks ={
        task:" "
    }

    const {id}=useParams();
    const [task,setTask]=useState(tasks)

// debugger
    const inputHandler =(e)=>{
        const {name , value} =e.target;
        setTask({...task,[name]:value})
        console.log(task);

    }


    useEffect(()=>{
        const fecthdata = async()=>{
            await axios.get(`http://localhost:8000/api/getone/${id}`)
            .then((res)=>{
                console.log(res.data.task);
                setTask(res.data.task)
                // navigate("/")
            })
            .catch((err)=>console.log(err))
        }
        fecthdata()
    },[id])




    const submitForm = async(e)=>{
        e.preventDefault();

        await axios.patch(`http://localhost:8000/api/update/${id}`,task)
        .then((res)=>{
            console.log(id);
            console.log(res)
            navigate("/")
        })
        .catch((err)=>console.log(err))
    }

    
  return (
    <div>UpdateTask
        <form onSubmit={submitForm}>
        <div className='input'>
                <label htmlFor="fname">First name :</label>
                <input type="text" onChange={inputHandler} id='task' name='task' autoComplete='off' placeholder='first name'/>
            </div>
            <div>
                <button >submit</button>
            </div>
        </form>
    </div>
  )
}

export default UpdateTask