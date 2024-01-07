import React, { useContext } from "react";
import { TaskContext } from '../context/context';
import { useNavigate } from 'react-router-dom';

const Tasks = () => {
    const { tasks } = useContext(TaskContext);
    const navigate = useNavigate();

    return (
        <div>
            <h2 className="text-center font-bold">My tasks</h2>
            <div className="w-3/4 m-auto bg-gray-400">
                {tasks.length === 0 ? (
                    <h1>No tasks</h1>
                ) : (
                    tasks.map((task, index) => (
                        <div key={index} className="flex border p-2 my-2">
                            <div className="flex-1">
                                <div className="font-bold text-lg">Name:</div>
                                <div>{task.name}</div>
                            </div>
                            <div className="flex-1">
                                <div className="font-bold text-lg">Description:</div>
                                <div>{task.description}</div>
                            </div>
                            <div className="flex-1">
                                <div className="font-bold text-lg">Venue:</div>
                                <div>{task.venue}</div>
                            </div>
                            <button onClick={()=> navigate(`details/${task.name}`)} className="bg-green-700 py-1 px-2 rounded text-white my-2 outline-none">View details</button>
                        </div>
                    ))
                )}
            </div>
            <button onClick={() => navigate('addtasks')} className="bg-green-700 text-white rounded px-2 py-1">Add Task</button>
        </div>
    );
};

export default Tasks;
