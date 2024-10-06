import React from "react";
import MainButton from "../components/Button/MainButton";
import styles from "../styles/password-generator.module.scss";
import Input from "../components/Input/Input";
import { useState } from "react";
import CustomCheckbox from "../components/CustomCheckbox/CustomCheckbox";
import Result from "../components/Result/Result";

export default function PasswordGenerator() {
    const [inputValue, setInputValue] = useState("");

    const [listPasswords, setListPasswords] = useState([]);

    const [checkboxStates, setCheckboxStates] = useState({
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
        avoidRepetition: false,
    });

    const listCheckboxes = [
        { name: "uppercase", label: "Использовать прописные буквы" },
        { name: "lowercase", label: "Использовать строчные буквы" },
        { name: "numbers", label: "Использовать цифры" },
        {
            name: "symbols",
            label: "Использовать символы: %, *, ), ?, @, #, $, ~",
        },
        { name: "avoidRepetition", label: "Избегать повторения символов" },
    ];

    const handleCheckBoxChange = (checkboxName) => {
        setCheckboxStates((prev) => ({
            ...prev,
            [checkboxName]: !prev[checkboxName],
        }));
    };

    const handleClickGenerate = async () => {
        if (!/^\d*$/.test(inputValue)) {
            alert("Можно вводить только числа!");
            return;
        }

        if (inputValue > 100) {
            alert("Число должно быть меньше 100 :(");
            return;
        }

        if (!inputValue) {
            alert("Укажите число!");
            return;
        }

        const allFalse = Object.values(checkboxStates).every(
            (value) => value === false
        );
        if (allFalse) {
            alert("Пожалуйста, выберите хотя бы один тип символов");
            return;
        }

        const response = await fetch("/api/generate-password", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({ ...checkboxStates, inputValue }),
        });
        console.log(JSON.stringify({ ...checkboxStates, inputValue }));
        if (response.ok) {
            const data = await response.json();
            setListPasswords(data.listPasswords);
            console.log("Сгенерированный пароль - ", data.listPasswords);
        } else {
            console.error("Ошибка при генерации пароля");
        }
    };

    return (
        <div>
            <h1 className={styles["title"]}>Генератор паролей</h1>
            <div className={styles["container-for-block"]}>
                <div className={styles["block-generator-pass"]}>
                    <div className={styles["block-generator-pass__top"]}>
                        <h4
                            className={
                                styles["block-generator-pass__form-title"]
                            }
                        >
                            Начать
                        </h4>
                        <Input value={inputValue} onChange={setInputValue}>
                            Введите число
                        </Input>
                        {listCheckboxes.map(({ name, label }, index) => (
                            <CustomCheckbox
                                key={index}
                                checked={checkboxStates[name]}
                                onChange={() => handleCheckBoxChange(name)}
                            >
                                {label}
                            </CustomCheckbox>
                        ))}
                    </div>
                    <hr className={styles["block-generator-pass__line"]}></hr>
                    <div className={styles["block-generator-pass__bottom"]}>
                        <MainButton onClick={handleClickGenerate}>
                            Сгенерировать пароли
                        </MainButton>
                    </div>
                </div>
                <div className={styles["block-results"]}>
                    <h4 className={styles["block-results__form-title"]}>
                        Результаты
                    </h4>
                    {listPasswords.map((value, index) => (
                        <Result key={index} value={value} />
                    ))}
                </div>
            </div>
        </div>
    );
}
