import React from "react";
import styles from "./Calculator.module.scss";
import ButtonNum from "./ButtonCalc/ButtonNum";
import ButtonCount from "./ButtonCount/ButtonCount";
import { useState, useEffect } from "react";

export default function Calculator() {
    const [counts, setCounts] = useState("0");
    const [result, setResult] = useState("");

    const nums = Array.from(Array(10).keys()).reverse();
    const expressions = ["÷", "×", "-", "+"];

    const applyExpression = (countedNum) => {
        setCounts(countedNum);
        setResult(eval(counts));
    };

    const replaceSymbols = (expression) => {
        return expression.replace(/×/g, "*").replace(/÷/g, "/");
    };

    const formatDisplay = (expression) => {
        return expression.replace(/\*/g, "×").replace(/\//g, "÷");
    };

    const handleEqualClick = () => {
        if (/[\+\-\*\/]$/.test(counts)) {
            setCounts(counts.slice(0, -1));
        } else {
            const evaluatedResult = eval(replaceSymbols(counts));
            setCounts(evaluatedResult.toString());
            setResult("");
        }
    };

    const addDot = (counts) => {
        const lastNumber = counts.split(/[+\-*/]/).pop();
        if (!lastNumber.includes(".")) {
            return counts + ".";
        }
        return counts;
    };

    const handleKeyDown = (event) => {
        const { key } = event;

        if (!isNaN(key)) {
            setCounts((prev) => (prev === "0" ? key : prev + key));
        } else if (key === "+" || key === "-" || key === "*" || key === "/") {
            setCounts(
                (prev) => prev + (key === "*" ? "×" : key === "/" ? "÷" : key)
            );
        } else if (key === "Enter") {
            handleEqualClick();
        } else if (key === "Backspace") {
            setCounts((prev) => (prev.length === 1 ? "0" : prev.slice(0, -1)));
        } else if (key === ".") {
            setCounts((prev) => addDot(prev));
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [counts]);

    return (
        <div className={styles["calculator"]}>
            <div className={styles["calculator__block-result"]}>
                <div className={styles["calculator__counts"]}>
                    {formatDisplay(counts)}
                </div>
                <div className={styles["calculator__result"]}>{result}</div>
            </div>
            <div className={styles["calculator__block-btn"]}>
                <div className={styles["calculator__block-expressions"]}>
                    {expressions.map((expression, index) => (
                        <ButtonCount
                            key={index}
                            expression={expression}
                            data={counts}
                            onClick={() =>
                                applyExpression(
                                    counts +
                                        (expression === "×"
                                            ? "*"
                                            : expression === "÷"
                                            ? "/"
                                            : expression)
                                )
                            }
                        />
                    ))}
                    <button
                        className={styles["calculator__btn-equal"]}
                        onClick={handleEqualClick}
                    >
                        =
                    </button>
                </div>
                <div className={styles["calculator__block-number"]}>
                    <button
                        className={styles["calculator__btn-grey"]}
                        onClick={() => {
                            setCounts("0");
                            setResult("");
                        }}
                    >
                        C
                    </button>
                    <button
                        className={styles["calculator__btn-grey"]}
                        onClick={() => {
                            setCounts((prev) => {
                                if (prev.startsWith("-")) {
                                    return prev.slice(1);
                                } else {
                                    return "-" + prev;
                                }
                            });
                        }}
                    >
                        +/-
                    </button>
                    <button
                        className={styles["calculator__btn-grey"]}
                        onClick={() =>
                            setCounts((prev) =>
                                (parseFloat(prev) / 100).toString()
                            )
                        }
                    >
                        %
                    </button>
                    {nums.map((number) => {
                        if (number === 0) {
                            return (
                                <>
                                    <button
                                        key={number + 1}
                                        className={
                                            styles["calculator__btn-dot"]
                                        }
                                        onClick={() =>
                                            setCounts(addDot(counts))
                                        }
                                    >
                                        .
                                    </button>
                                    <ButtonNum
                                        key={number}
                                        number={number}
                                        data={counts}
                                        onClick={setCounts}
                                    />
                                </>
                            );
                        } else {
                            return (
                                <ButtonNum
                                    key={number}
                                    number={number}
                                    data={counts}
                                    onClick={setCounts}
                                />
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
}
