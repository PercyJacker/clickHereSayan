import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CompletedTasks = () => {
    // const completedTasks={

    // }
    const [completedTask ,setCompletedTask] = useState([]);
    

    useEffect(()=>{
        const fetchData = async()=>{
            await axios.get("http://localhost:8000/api/completed")
            .then((res)=>{
                console.log(res.data);
                setCompletedTask(res.data);
            })
            .catch(
                (err)=>console.log(err))
        }
        fetchData()
    },[])
  return (
    <div>CompletedTasks
        <table>
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Tasks</th>
                    <th>Staus</th>

                </tr>
            </thead>
            <tbody>
                {
                   Array.isArray(completedTask) && completedTask.map((task ,index)=>{
                        return(
                            <tr key={task._id || index}>
                                <td>{index+1}</td>
                                <td>{task.task || "no tasks"}</td>
                                <td>completed</td>
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default CompletedTasks