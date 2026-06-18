const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear")
let firstNumber = "";
let secondNumber = "";
let operator = ""; 
let resultDisplayed = false;

operatorButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (firstNumber !== "" &&
                secondNumber !== "" &&
                operator !== ""){
                    const result = operate(
                operator, 
                Number(firstNumber),
                Number(secondNumber));
                display.textContent = result;

                firstNumber = result.toString();
                secondNumber = "";
            }
            operator = button.textContent;
        })
    });
    


 numberButtons.forEach((button) => {
        button.addEventListener("click", () =>{
            if (resultDisplayed){
                firstNumber = "";
                secondNumber = "";
                operator = "";
                resultDisplayed = false;
            }
            if (operator === ""){
                firstNumber += button.textContent;
                display.textContent = firstNumber;
            } else {
                secondNumber += button.textContent;
                display.textContent = secondNumber;    
            }
          
        })
    })

     function operate(operator, num1, num2) {

    if (operator === "+") {
        return add(num1, num2);
    }

    if (operator === "-") {
        return subtract(num1, num2);
    }

    if (operator === "*") {
        return multiply(num1, num2);
    }

    if (operator === "/") {
        return divide(num1, num2);
    }
}



    function add(a, b) {
              return a + b;
        }

    function subtract(a, b) {
              return a - b;
        }

    function multiply(a, b) {
                return a * b;
        }   

    function divide(a, b) {
            if (b === 0) return "Nice try 😏";
            return a / b;
        }

          equalsButton.addEventListener("click", () =>{
            const result = operate(
                operator, 
                Number(firstNumber),
                Number(secondNumber));
            display.textContent = result
            firstNumber = result;
            secondNumber= "";
            operator = "";  
            resultDisplayed = true
        })