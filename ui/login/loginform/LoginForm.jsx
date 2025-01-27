"use client";
import React from "react";
import styles from "./loginform.module.css";
import Link from 'next/link';

export default function LoginForm() {
    return (
        <form className={styles.form}>
            <Link href="/dashboard" style={{ color: "#008AF2" }}>
                Navigate to Dashboard
            </Link>
            <h1>Login</h1>
            <input type="text" placeholder="username: waleed" name="username" />
            <input type="password" placeholder="password: waleed" name="password" />
            <button>Login</button>
        </form>
    );
}
