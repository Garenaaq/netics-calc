import React from 'react';
import styles from './Result.module.scss';
import Image from 'next/image';

export default function Result({value}) {
    const handleCopyClick = () => {
        navigator.clipboard.writeText(value)
            .then(() => {
                alert("Пароль скопирован в буфер обмена!");
            })
            .catch(err => {
                console.error('Ошибка при копировании текста:', err);
            });
    };

    return (
        <div className={styles['result-line']}>
            <span className={styles['result-line__text']} contenteditable="false">{value}</span>
            <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleCopyClick}>
                <path d="M11.4993 0.833328H2.33268C1.41602 0.833328 0.666016 1.58333 0.666016 2.49999V13.3333C0.666016 13.7917 1.04102 14.1667 1.49935 14.1667C1.95768 14.1667 2.33268 13.7917 2.33268 13.3333V3.33333C2.33268 2.87499 2.70768 2.49999 3.16602 2.49999H11.4993C11.9577 2.49999 12.3327 2.12499 12.3327 1.66666C12.3327 1.20833 11.9577 0.833328 11.4993 0.833328ZM14.8327 4.16666H5.66602C4.74935 4.16666 3.99935 4.91666 3.99935 5.83333V17.5C3.99935 18.4167 4.74935 19.1667 5.66602 19.1667H14.8327C15.7493 19.1667 16.4993 18.4167 16.4993 17.5V5.83333C16.4993 4.91666 15.7493 4.16666 14.8327 4.16666ZM13.9993 17.5H6.49935C6.04102 17.5 5.66602 17.125 5.66602 16.6667V6.66666C5.66602 6.20833 6.04102 5.83333 6.49935 5.83333H13.9993C14.4577 5.83333 14.8327 6.20833 14.8327 6.66666V16.6667C14.8327 17.125 14.4577 17.5 13.9993 17.5Z" fill="#9B9BA1"/>
            </svg>
        </div>
    )
}
