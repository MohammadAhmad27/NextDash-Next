"use client"
import React from 'react'
import styles from "./menulink.module.css"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MenuLink({ item }) {
  const pathname = usePathname();
  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}
