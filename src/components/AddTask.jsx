import React, {useContext, useState } from 'react'
import { TaskContext } from '../context/context'
import {useNavigate} from 'react-router-dom'

const AddTask = () => {
    const { tasks, setTasks} = useContext(TaskContext)
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [venue, setVenue] = useState('')
 
    const handleAddTask = (e) => {
        e.preventDefault()

        if (name.trim() === '' || description.trim() === '' || venue.trim() === '') {
            alert('Name, Venue or Description cannot be empty')
            return
        }
        const newTask = {
            name,
            description,
            venue
        }
        setTasks((prev) => [...prev, newTask])

        setName('')
        setDescription('')
        setVenue('')
    }


  return (
      <form className='flex flex-col w-1/2 m-auto bg-gray-500 rounded my-4'>
          <input className='border my-2 w-1/2 rounded m-auto outline-none' 
              type="text"
              value={name}
              placeholder='Tasks?'
              onChange={(e) => setName(e.target.value)} />
          <input className='border my-2 w-1/2 rounded m-auto outline-none'
              type="text"
              value={description}
              placeholder='description'
              onChange={(e) => setDescription(e.target.value)}
          />
          <input className='border my-2 w-1/2 rounded m-auto outline-none'
              type="text"
              value={venue}
              placeholder='venue'
              onChange={(e) => setVenue(e.target.value)}
          />
          <button onClick={handleAddTask}  className='bg-green-700 rounded px-2 py-1 m-auto w-1/2 my-4 text-white text-bold'>Add</button>
          <button className = ' bg-green-700 w-1/2 m-auto my-4 text-bold text-white rounded' onClick={()=> navigate('/')}>View Tasks</button>

      </form>
  )
}

export default AddTask