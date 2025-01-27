import React from 'react'
import styles from '@/ui/login/login.module.css'
import LoginForm from '@/ui/login/loginform/LoginForm'
import { connectToDB } from '@/lib/utils';

export default function Login() {
  connectToDB();
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  )
}
