export default function handler(req, res) {
    if (req.method === "POST") {
        const {
            uppercase,
            lowercase,
            numbers,
            symbols,
            avoidRepetition,
            inputValue,
        } = req.body;

        const listPasswords = [];

        for (let i = 0; i < 4; ++i)
            listPasswords.push(
                generatePass(
                    uppercase,
                    lowercase,
                    numbers,
                    symbols,
                    avoidRepetition,
                    inputValue
                )
            );

        res.status(200).json({ listPasswords });
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Метод ${req.method} не разрешен`);
    }
}

function generatePass(
    uppercase,
    lowercase,
    numbers,
    symbols,
    avoidRepetition,
    inputValue
) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "%*?)@#$~";

    console.log(numbers, lowercase);

    // Сбор всех доступных символов
    let allChars = "";
    if (uppercase) allChars += uppercaseChars;
    if (lowercase) allChars += lowercaseChars;
    if (numbers) allChars += numberChars;
    if (symbols) allChars += symbolChars;

    // Проверка, выбраны ли символы
    if (allChars.length === 0) {
        return "Пожалуйста, выберите хотя бы один тип символов";
    }

    let password = "";

    // Генерация пароля
    while (password.length < inputValue) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        const char = allChars[randomIndex];

        // Проверка на повторение символов
        if (avoidRepetition) {
            if (!password.includes(char)) {
                password += char;
            }
        } else {
            password += char;
        }
    }

    return password;
}
