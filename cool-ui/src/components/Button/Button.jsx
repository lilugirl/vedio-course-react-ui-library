import React from "react"
import styles from './Button.module.scss'
export const Button=({children,type='primary',onClick=()=>{}})=>{
    return <button className={styles.btn} onClick={onClick}>{type}: {children}</button>
}