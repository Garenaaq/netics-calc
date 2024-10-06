import React from 'react';
import styles from './Button.module.scss';
import PropTypes from "prop-types";


export default function MainButton({children, onClick}) {
  return (
    <button className={styles.button} onClick={onClick}>{children}</button>
  )
}

MainButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}