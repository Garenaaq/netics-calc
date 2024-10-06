import styles from "../styles/index.module.scss";
import Input from "../components/Input/Input";
import MainButton from "../components/Button/MainButton";
import validateInput from "../utils/requiredInput";
import { useState } from "react";
import { useRouter } from "next/router";
import { useUserStore } from "../store/useUserStore";
import SaveIcon from "@mui/icons-material/Save";

export default function Home() {
    const [inputValue, setInputValue] = useState("");

    const router = useRouter();

    const setUsername = useUserStore((state) => state.setUsername);
    const username = useUserStore((state) => state.username);

    const handleSaveUsername = () => {
        if (!username) {
            const hasError = validateInput();

            if (!hasError) {
                setUsername(inputValue);
                alert("Вы успешно сохранили имя");
            } else {
                alert("Придумайте другое имя");
                return;
            }
        } else {
            if (username !== inputValue && inputValue.trim()) {
                setUsername(inputValue);
                alert("Вы успешно сохранили имя");
            }
        }
    };

    const handleRedirect = (path) => {
        if (username) router.push(path);
        else alert("Введите имя пользователя");
    };

    return (
        <div className={styles.form}>
            <div className={styles.form__top}>
                <h4 className={styles.form__title}>Начать</h4>
                <label className={styles.form__label}>Ваше имя</label>
                <div className={styles.form__input}>
                    <Input value={inputValue} onChange={setInputValue}>
                        Как вас зовут?
                    </Input>
                    <SaveIcon
                        style={{ color: "white", cursor: "pointer" }}
                        onClick={handleSaveUsername}
                    />
                </div>
            </div>
            <hr className={styles.form__line}></hr>
            <div className={styles.form__bottom}>
                <MainButton onClick={() => handleRedirect("/calculator")}>
                    Открыть калькулятор
                </MainButton>
                <MainButton
                    onClick={() => handleRedirect("/password-generator")}
                >
                    Открыть генератор
                </MainButton>
            </div>
        </div>
    );
}
