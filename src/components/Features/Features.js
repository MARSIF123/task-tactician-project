import React from 'react'
import Title from '../Title/Title'
import Subtitle from '../Subtitle/Subtitle'
import styles from "./features.module.css"

function Features() {
  return (
    <div className={styles.main}>
        <Title>Your Ultimate Productivity Companion </Title>
       <ul className={styles.list}> 
        <li>Quick and easy task creation.</li>
        <li>Organize tasks into to different groups for clarity of mind.</li>
        <li>Set Priority levels to focus on important tasks.</li>
        <li>Set reminders to stay on the top of your tasks list.</li>
       </ul>
    </div>
  )
}

export default Features