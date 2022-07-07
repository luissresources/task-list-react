import React, {useState} from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import '../stylesheets/TaskForm.css';

function TaskList(){

    const [tasks, setTask] = useState([]);

    const addTask = task => {
        if (task.text.trim()){
            task.text = task.text.trim();
            const tasksUpdate = [task, ...tasks];
            setTask(tasksUpdate);
        }
    }

    const removeTask = id => {
        const tasksUpdate = tasks.filter(task => task.id !== id);
        setTask(tasksUpdate);
    }

    const completeTask = id => {
        const tasksUpdate = tasks.map(task => {
            if (task.id === id){
                task.completed = !task.completed;
            }
            return task;
        });
        setTask(tasksUpdate);
    }

    return (
        <>
            <TaskForm 
                onSubmit = {addTask}
            />
            <div className='tasklist-container'>
                {
                    tasks.map((task) =>
                        < Task 
                            key={task.id}   // ojo no se pasa como prop. Es normal duplicar esta parte
                            id = {task.id}
                            text = {task.text}
                            completed = {task.completed}
                            completeTask = {completeTask}
                            removeTask = {removeTask}
                        />
                    )
                }
            </div>
        </>
    )
}

export default TaskList;