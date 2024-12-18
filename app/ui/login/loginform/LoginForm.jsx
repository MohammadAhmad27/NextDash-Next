import React from 'react'
import styles from './loginform.module.css'
import { authenticate } from '@/app/lib/actions'

export default function LoginForm() {
    return (
        <form action={authenticate} className={styles.form}>
            <h1>Login</h1>
            <input type="text" placeholder="username" name="username" />
            <input type="password" placeholder="password" name="password" />
            <button>Login</button>
        </form>
    )
}
