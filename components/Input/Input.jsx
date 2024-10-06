import React from 'react';
import styles from './Input.module.scss';

export default function Input({children, onChange, value}) {
  return (
    <input type="text" placeholder={children} className={styles.input} value={value} onChange={(e) => onChange(e.target.value)}/>
  )
}
