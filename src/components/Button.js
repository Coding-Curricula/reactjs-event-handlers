import React from 'react'

import styles from './Button.module.css'

export default function Button({ label, onClick }) {
    return (
        <button className={styles.clickMeButton} onClick={onClick}>
            {label}
        </button>
    )
}
