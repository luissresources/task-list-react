import React from 'react';
import '../stylesheets/Task.css';
import {AiFillCloseCircle} from 'react-icons/ai';


function Task({id, text, completed, completeTask, removeTask}) {
    return (
        <div className={completed ? 'container-task completed' : 'container-task'} >
            <div 
                className='task-item'
                onClick = {() => completeTask(id)}>
                {text}
            </div>
            <div 
                className='task-container-icons'
                onClick = {() => removeTask(id)}>
                <AiFillCloseCircle className='task-icon' />
            </div>
        </div>
    )
}

export default Task;