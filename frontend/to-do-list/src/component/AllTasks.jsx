import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AllTasks = () => {
//tasks is a arrays so []
    const [tasks, setTasks] =useState([])
    // const [completedtask ,setCompletedTask]=useState([])
    useEffect(()=>{
        const fecthdata =async()=>{
            await axios.get("http://localhost:8000/api/getall")
            .then(res=>{
                console.log(res.data.task);
                setTasks(res.data.task)
            })
            .catch(err=>(console.log(err)))
        }
        fecthdata()
    },[])


    const deleteUser =async(taskID)=>{
        //get task id to taskID
        //axios delete the taskID
        //update the setTask by filtring out 
            await axios.delete(`http://localhost:8000/api/delete/${taskID}`)
            .then((res)=>{
                setTasks((prevTask)=>prevTask.filter((tasks)=>tasks._id!==taskID))
            console.log(res)})
            .catch((err)=>console.log(err))
        
    }

    const completedTasks =async(taskID)=>{
        //get task id to taskID
        //axios remove task from home
        await axios.patch(`http://localhost:8000/api/completed/${taskID}`)
        .then((res)=>{
            setTasks((prevTask)=>prevTask.filter((tasks)=>tasks._id!==taskID))
            // res.json(prevTask)
            // navigator("/")
        })
        .catch((err)=>console.log(err))
    }
    const updateTask =async(taskID)=>{
        await axios.put(`http://localhost:8000/api/update/${taskID}`)
        .then((res)=>{
            console.log(res.data);
            // res.json(res.data)
        })
        .catch((err)=>console.log(err))
    }

    
  return (
    <div className='alltasks'>
        <Link to={"/add"} className="add tasks">Add tasks</Link>
        <Link to={"/completed"} className='ml-8'> completed</Link>
        <table className='' border={1} cellPadding={10} cellSpacing={5}>
            <thead>
                <tr map>
                    <th>S.no</th>
                    <th>task</th>
                    <th className=' ml-5'>status</th>

                </tr>
            </thead>
            <tbody>
               { tasks.map((task, index)=>{
                    return(
                        <tr key={task._id}>
                        <td>{index+1}</td>
                        <Link to={`/update/${task._id}`}>{task.task}</Link>
                        {/* <td Link to ={"/update"}>{task.task}</td> */}
                        <td>
                            <button onClick={()=>completedTasks(task._id)} className=' text-green-500'>completed</button>   
                            <button onClick={()=>deleteUser(task._id) } className='ml-5 text-red-500' >delete</button></td>
    
                    </tr>

                    )
                })}
               
            </tbody>
        </table>
    </div>
  )
}

export default AllTasks