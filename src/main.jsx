import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Tasks from './components/Tasks.jsx'
import TaskContextProvider from './context/TaskContextProvider.jsx'
import AddTask from './components/AddTask.jsx'
import TaskDetails from './components/TaskDetails.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Tasks />} />
      <Route path='addtasks' element={<AddTask />} />
      <Route path='Details/:name' element={<TaskDetails/> } />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <RouterProvider router={router}/>
    </TaskContextProvider>

  </React.StrictMode>
)
