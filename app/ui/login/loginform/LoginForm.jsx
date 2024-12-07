import React from 'react'
import styles from './loginform.module.css'

export default function LoginForm() {
    return (
        <form className={styles.form}>
            <h1>Login</h1>
            <input type="text" placeholder="username" name="username" />
            <input type="password" placeholder="password" name="password" />
            <button>Login</button>
        </form>
    )
}
