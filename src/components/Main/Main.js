import React from 'react'
import Title from '../Title/Title'
import Subtitle from '../Subtitle/Subtitle'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import styles from './main.module.css'

function Main() {
  const navigate = useNavigate()
  const joinNowHandler = () => {
    navigate('/login')
  }
  return (
    <div className={styles.main}>
      <Title>Empower Your Productivity</Title>
      <Subtitle>Make every day count with our task management solution.</Subtitle>
      <Button onClick={joinNowHandler}>Join Now</Button>
    </div>
  )
}

export default Main