import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>NextDash</div>
            <div className={styles.text}>© All rights reserved.</div>
        </footer>
    )
}
