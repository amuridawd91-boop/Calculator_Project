const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");



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
