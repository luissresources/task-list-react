import React from 'react';
import '../stylesheets/Task.css';
import {AiFillCloseCircle} from 'react-icons/ai';


function Task({task, completed}) {
    return (
        <div className={completed ? 'container-task completed' : 'container-task'} >
            <div className='task-item'>
                {task}
            </div>
            <div className='task-container-icons'>
                <AiFillCloseCircle className='task-icon' />
            </div>
        </div>
    )
}

export default Task;