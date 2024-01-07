import React from 'react';
import { useContext } from 'react';
import { TaskContext } from '../context/context';
import { useParams } from 'react-router-dom';

const TaskDetails = () => {
    const { tasks } = useContext(TaskContext);
    const { name } = useParams();

    // Find the task with the specified name
    const selectedTask = tasks.find(task => task.name === name);

    if (!selectedTask) {
        // Handle the case when the task with the specified name is not found
        return <div>No task found with the name {name}</div>;
    }

    return (
        <div className='flex bg-gray-400 my-3'>
            <div className='flex-1'>
                <div className='font-bold'>Name:</div>
                <div>{selectedTask.name}</div>
            </div>
            <div className='flex-1'>
                <div className='font-bold'>Description:</div>
                <div>{selectedTask.description}</div>
            </div>
            <div className='flex-1'>
                <div className='font-bold'>Venue:</div>
                <div>{selectedTask.venue}</div>
            </div>
        </div>
    );
};

export default TaskDetails;
