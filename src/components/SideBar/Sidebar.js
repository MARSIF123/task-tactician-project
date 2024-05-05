import React from 'react'
import styles from './sidebar.module.css'
import logo from '../../assets/Logo.png'
import { FaSearch, FaStar, FaCalendar, FaArrowDown, FaPlus, FaCheckSquare } from 'react-icons/fa'
import { tasksCtx } from '../../context/TasksContextProvider'


function Sidebar() {
    const { filterTasks, groups, filterByGroup , searchTasks} = React.useContext(tasksCtx)
    const [searchTerm, setSeacrhTerm] = React.useState('')
    const [isOpen, setIsOpen] = React.useState(false)
    const [type, setType] = React.useState('')

    React.useEffect(() => {
        filterTasks(type)

    }, [type])

    const searchHandler=(event)=>{
        event.preventDefault()
        searchTasks(searchTerm)

    }
    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" />
            </div>
            <form className={styles.search} onSubmit={searchHandler}> 
                <input required
                    placeholder='Search'
                    className={styles['search-input']}
                    value={searchTerm}
                    onChange={(event) => {
                        setSeacrhTerm(event.target.value)
                    }} />
                <button className={styles.button} type="submit"><FaSearch /></button>
            </form>
            <div className={styles.actions}>
                <button className={styles.button} onClick={() => { setType('all-tasks') }}><FaPlus /> Add Task</button>
                <button className={styles.button} onClick={() => { setType('important') }}><FaStar /> Important</button>
                <button className={styles.button} onClick={() => { setType('today') }}><FaCalendar /> Today</button>
                <button className={styles.button} onClick={() => { setType('completed') }}><FaCheckSquare /> Completed</button>
                <button className={styles.button} onClick={() => { setIsOpen(!isOpen) }}><FaArrowDown /> My Projects</button>
               {isOpen && <div>
                    {groups.map(g=>(
                    <button className={styles.button} key={g.groupId} style={{marginLeft: 10}} onClick={() => { filterByGroup(g.groupId) }}>#{g.title}</button>
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default Sidebar