let calculatorState = {
    input: [],
};
const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.value === "=") {
            result.value = String(calc(calculatorState));
        }
        else if (button.value === "reset") {
            reset();
        }
        else if (button.value === "del") {
            result.value = result.value.slice(0, -1);
        }
        else {
            result.value += button.value;
        }
    });
});
function reset() {
    calculatorState = {
        input: [],
    };
    result.value = "";
}
function calc(calculatorState) {
    const regex = /[+*/\-]/g;
    let numberValues = result.value.split(regex);
    let operators = result.value.match(regex);
    let tempResult = 0;
    while (numberValues.length !== 1) {
        for (let i = 0; i < operators.length; i++) {
            if (operators[i] === "*") {
                tempResult = parseFloat(numberValues[i]) * parseFloat(numberValues[i + 1]);
                numberValues.splice(i, 2, `${tempResult}`);
                operators.splice(i, 1);
            }
            if (operators[i] === "/") {
                tempResult = parseFloat(numberValues[i]) / parseFloat(numberValues[i + 1]);
                numberValues.splice(i, 2, `${tempResult}`);
                operators.splice(i, 1);
            }
        }
        for (let i = 0; i < operators.length; i++) {
            if (operators[i] === "+") {
                tempResult = parseFloat(numberValues[i]) + parseFloat(numberValues[i + 1]);
                numberValues.splice(i, 2, `${tempResult}`);
                operators.splice(i, 1);
            }
            if (operators[i] === "-") {
                tempResult = parseFloat(numberValues[i]) - parseFloat(numberValues[i + 1]);
                numberValues.splice(i, 2, `${tempResult}`);
                operators.splice(i, 1);
            }
        }
    }
    return numberValues;
}
export {};
//# sourceMappingURL=calculator.js.map