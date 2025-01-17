"use client";
import React from "react";
import styles from "./loginform.module.css";
import { authenticate } from "@/lib/actions";
import { useFormState } from "react-dom";

export default function LoginForm() {
    const [state, formActiom] = useFormState(authenticate, undefined);

    return (
        <form action={formActiom} className={styles.form}>
            <h1>Login</h1>
            <input type="text" placeholder="username: waleed" name="username" />
            <input type="password" placeholder="password: waleed" name="password" />
            <button>Login</button>
            {state && state}
        </form>
    );
}
