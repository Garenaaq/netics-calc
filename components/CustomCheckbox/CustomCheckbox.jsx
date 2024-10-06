import React from 'react';
import styles from './CustomCheckbox.module.scss';

export default function CustomCheckbox({children, checked, onChange}) {
    return (
        <label className={styles['checkbox-container']}>
            <input 
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <span className={styles['label']}>{children}</span>
        </label>
    )
}
