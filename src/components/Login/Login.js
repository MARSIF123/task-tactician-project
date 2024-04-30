import React from 'react'
import styles from './login.module.css'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    const LoginSubmissionHandler = (event) => {
        event.preventDefault();

        navigate('/')
    }
    return (
        <form className={styles.form} onSubmit={LoginSubmissionHandler}>
            <div className={styles.data}>
                <label className={styles.label} htmlFor='email'>Email:</label>
                <input className={styles.input} id='email' type='email' />

                <label className={styles.label} htmlFor='password'>Password:</label>
                <input className={styles.input} style={{ marginBottom: 20 }} id='password' type='password' />
                <Button width={'100%'}>Login</Button>

            </div>

        </form>
    )
}

export default Login