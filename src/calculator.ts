import "./style.css";

const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result") as HTMLTextAreaElement;

function calc(): string[] {

  const regex = /[+*%/\-]/g;

  let numberValues = result.value.split(regex);
  let operators = result.value.match(regex)!;
  let tempResult = 0;

  while (numberValues.length !== 1) {
    for (let i = 0; i < operators.length; i++) {
      if (operators[i] === "*") {
        tempResult =
          parseFloat(numberValues[i]!) * parseFloat(numberValues[i + 1]!);
        numberValues.splice(i, 2, `${tempResult}`);
        operators.splice(i, 1);
      }
      if (operators[i] === "/") {
        tempResult =
          parseFloat(numberValues[i]!) / parseFloat(numberValues[i + 1]!);
        numberValues.splice(i, 2, `${tempResult}`);
        operators.splice(i, 1);
      }
      if (operators[i] === "%") {
        tempResult =
          (parseFloat(numberValues[i]!) / 100) *
          parseFloat(numberValues[i + 1]!);

        numberValues.splice(i, 2, `${tempResult}`);
        operators.splice(i, 1);
        i--;
      }
    }

    for (let i = 0; i < operators.length; i++) {
      if (operators[i] === "+") {
        tempResult =
          parseFloat(numberValues[i]!) + parseFloat(numberValues[i + 1]!);
        numberValues.splice(i, 2, `${tempResult}`);
        operators.splice(i, 1);
      }
      if (operators[i] === "-") {
        tempResult =
          parseFloat(numberValues[i]!) - parseFloat(numberValues[i + 1]!);
        numberValues.splice(i, 2, `${tempResult}`);
        operators.splice(i, 1);
      }
    }
  }

  return numberValues;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.value === "=") {
      result.value = calc()[0];
    } else if (button.value === "reset") {
      reset();
    } else if (button.value === "del") {
      result.value = result.value.slice(0, -1);
    } else {
      result.value += button.value;
    }
  });
});

function reset(): void {
  result.value = "";
}
