import React from "react";
import styles from "./ButtonCalc.module.scss";

export default function ButtonNum({ number, onClick, data }) {
    return (
        <button
            className={styles["btn-calc"]}
            onClick={(e) => {
                data != "0"
                    ? onClick(data + e.target.innerHTML)
                    : onClick(e.target.innerHTML);
            }}
        >
            {number}
        </button>
    );
}
