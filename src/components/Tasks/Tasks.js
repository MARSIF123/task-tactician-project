import React from 'react'
import TaskInput from './TaskInput'
import { tasksCtx } from '../../context/TasksContextProvider'
import TaskItem from './TaskItem'
import styles from './tasks.module.css'

function Tasks() {
    const { filteredTasks } = React.useContext(tasksCtx)
    console.log(filteredTasks)
    return (
        <><div className={styles.scroll}>
            {filteredTasks?.map((task) => (
                <TaskItem key={task.id} id={task.id} 
                groupId={task.groupId} isCompleted={task.isCompleted} isImportant={task.isImportant} dueDate={task.dueDate}>{task.text}</TaskItem>
            ))}
            {filteredTasks?.length <= 0 && <p className={styles.notFound}>{`No Tasks Found '(`}</p>}
        </div>
            <TaskInput /></>
    )
}

export default Tasks