const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach((button) => {
        button.addEventListener("click", () => {
            operator = button.textContent;
        })
    });
    


 numberButtons.forEach((button) => {
        button.addEventListener("click", () =>{
           
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