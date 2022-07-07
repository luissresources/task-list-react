import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../stylesheets/TaskForm.css';

function TaskForm(props) {

    const [input, setInput] = useState('');

    const manageChange = e => {
        setInput(e.target.value);
    }

    const manageSend = e => {
        e.preventDefault();
        const newTask = {
            id : uuidv4(),
            text: input,
            completed: 'false'
        }

        props.onSubmit(newTask);
    };

    return (
        <form 
            className='task-form'
            onSubmit = {manageSend} >
            <input
                className='task-input'
                type='text'
                placeholder='What do you do?'
                name='text' 
                onChange={manageChange}
            />
            <button 
                className='task-button'> Add task</button>
        </form>
    )
}

export default TaskForm;