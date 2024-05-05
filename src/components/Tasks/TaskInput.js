import React from 'react'
import styles from './taskinput.module.css'
import { FaArrowUp } from 'react-icons/fa'
import { tasksCtx } from '../../context/TasksContextProvider'

function TaskInput() {
    const [task, setTask] = React.useState('')
    const { addTask } = React.useContext(tasksCtx)

    const taskSubmitHandler = (event) => {
        event.preventDefault();
        addTask(task, new Date())
    }
    return (
        <form className={styles.card}
            onSubmit={taskSubmitHandler}>
            <input required
                value={task}
                onChange={(event) => {
                    setTask(event.target.value)
                }}
                placeholder='Learn React Context Basics'
            />
            <button type='submit'><FaArrowUp /></button>
        </form>
    )
}

export default TaskInput