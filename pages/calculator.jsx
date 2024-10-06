import React from "react";
import styles from "../styles/calculator.module.scss";
import Calculator from "../components/Calculator/Calculator";

export default function CalculatorPage() {
    return (
        <div className={styles["calculator-section"]}>
            <div className={styles["calculator-section__info"]}>
                <h1 className={styles["title"]}>Калькулятор</h1>
                <p className={styles["calculator-section__text"]}>
                    Очень Простой калькулятор обычный - только стандартные
                    функции калькулятора: сложение, вычитание, умножение и
                    деление. Простой калькулятор работает на смартфонах и ПК
                    даже без интернета, не требует установки, быстро загружается
                    и работает онлайн.
                </p>
            </div>
            <Calculator />
        </div>
    );
}
