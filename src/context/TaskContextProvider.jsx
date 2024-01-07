import React, { useState } from "react";
import { TaskContext } from "./context";

const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContextProvider;
