import React from 'react'
import styles from '@/ui/login/login.module.css'
import LoginForm from '@/ui/login/loginform/LoginForm'

export default function Login() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  )
}
