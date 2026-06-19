const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const decimalButton = document.querySelector("#decimal");
const deleteButton = document.querySelector("#backspace")
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
            if (resultDisplayed && operator === ""){
                firstNumber = "";
                secondNumber = "";
                
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
        let result = operate(
                operator, 
                Number(firstNumber),
                Number(secondNumber));
        if (typeof result === "number"){
                result = Math.round(result * 1000) / 1000;
            }
        display.textContent = result
        firstNumber = result;
        secondNumber= "";
        operator = "";  
        resultDisplayed = true
    })

    clearButton.addEventListener("click", () =>{
        firstNumber = "";
        secondNumber = "";
        operator = "";
        resultDisplayed = false;
        display.textContent = "0"
    })

    decimalButton.addEventListener("click", () =>{
        if (operator === ""){

            if (firstNumber === "") {
                    firstNumber = "0.";
            } else if (!firstNumber.includes(".")){
                firstNumber += ".";
            }
                display.textContent = firstNumber;

        } else {
            if (secondNumber === ""){
                secondNumber = "0.";                    
            }  else if (!secondNumber.includes(".")){
                secondNumber += ".";
            }
            display.textContent = secondNumber;
        }
    })

 deleteButton.addEventListener("click", () =>{
        if (secondNumber !== ""){
            secondNumber = secondNumber.slice(0, -1);
            display.textContent = secondNumber || "0";

        } else if (operator !== ""){
            operator = "";
        
        } else {
            firstNumber = firstNumber.slice(0, -1);
            display.textContent = firstNumber || "0";
        }
 })

    document.addEventListener("keydown", (event) => {
        if (event.key >= "0" && event.key <= "9"){
            numberButtons.forEach((button) => {
                if (button.textContent === event.key){
                    button.click();
                }
            })
        }

        if (event.key === "+" ||
            event.key === "-" ||
            event.key === "*" ||
            event.key === "/" ) {

                operatorButtons.forEach((button) => {
                    if (button.textContent === event.key){
                        button.click();
                    }
                });
        }
        if (event.key === "."){
            decimalButton.click();
        } 
        if (event.key === "Enter"){
            equalsButton.click();
        }
        if (event.key === "Backspace"){
            deleteButton.click();
        }
        if (event.key === "Escape"){
            clearButton.click();
        }
    })