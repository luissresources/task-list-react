import React from 'react';
import TaskForm from './TaskForm';

function TaskList(){
    return (
        <>
            <TaskForm />
            <div className='tasklist-container'>
                "Tareas"
            </div>
        </>
    )
}

export default TaskList;