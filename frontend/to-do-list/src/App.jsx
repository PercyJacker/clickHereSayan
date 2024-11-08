import React from 'react'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import AllTasks from './component/AllTasks'
import AddTask from './component/AddTask'
import CompletedTasks from './component/CompletedTasks'
import UpdateTask from './component/UpdateTask'
const App = () => {

  const route = createBrowserRouter([
    {
      path:"/",
      element :<AllTasks/>
    },
    {
      path:"/add",
      element :<AddTask/>
    },
    {
      path:"/edit/:id",
      element :"edit"
    },
    {
      path:"/completed",
      element:<CompletedTasks/>
    },
    {
      path:"/update/:id",
      element:<UpdateTask/>
    }

  ])
  return (
 <div className='router'>
    <RouterProvider router={route}></RouterProvider>
 </div>
  )
}

export default App