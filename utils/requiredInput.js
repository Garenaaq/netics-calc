export default function validateInput() {
    const listWithInput = [...document.getElementsByTagName("input")];
    let hasError = false;

    listWithInput.forEach((input) => {
        if (!input.value.trim()) {
            input.style.border = "1px solid rgba(226, 68, 68, 1)";
            hasError = true;
        } else {
            input.style.border = "";
        }
    });

    return hasError;
}
