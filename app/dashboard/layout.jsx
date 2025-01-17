import Footer from '@/ui/dashboard/footer/Footer'
import Navbar from '@/ui/dashboard/navbar/Navbar'
import Sidebar from '@/ui/dashboard/sidebar/Sidebar'
import styles from '@/ui/dashboard/dashboard.module.css';
import React from 'react'


export default function layout({ children }) {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    )
}
