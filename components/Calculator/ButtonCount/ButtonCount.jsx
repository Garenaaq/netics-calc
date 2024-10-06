import React from "react";
import styles from "./ButtonCount.module.scss";

export default function ButtonCount({ data, expression, onClick }) {
    const expressions = /\+|\-|\÷|\×| /;
    const lastNumber = data[data.length - 1];

    const checkExpressionType = () => {
        if (expressions.test(lastNumber)) return;
        onClick(data + expression);
    };

    return (
        <button
            className={styles["btn-count"]}
            onClick={() => checkExpressionType()}
        >
            {expression}
        </button>
    );
}
