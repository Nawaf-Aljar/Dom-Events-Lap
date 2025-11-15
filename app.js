const buttonElements = document.querySelectorAll(".button")
const resultElement = document.createElement("p")
const displayElement = document.querySelector(".display")
displayElement.appendChild(resultElement)
num1 = null
num2 = null
operator = null
result = null
buttonElements.forEach((button) => {
    button.addEventListener('click', (event) => {
if(event.target.classList.contains("number")){
    console.log(event.target.innerText);
    if(operator === null && num2 === null){
        num1 = event.target.innerText
    displayElement.textContent = num1
    }
    else if (operator !== null ){
        num2 = event.target.innerText
    displayElement.textContent = num1 + " " + operator + " "+ num2
    }
}
 if(event.target.classList.contains("operator")){
    console.log(event.target.innerText);
    if(num1 !== null && num2 === null ){
        operator = event.target.innerText
        displayElement.textContent = num1 + " " + operator 
    } 
}
if(event.target.classList.contains("equals")){
    if (operator !== null){  
    calculate()  
    displayElement.textContent = num1 + " " + operator + " " + num2 + " = " + result
}}
if (event.target.innerText === ("C")){
    clear()
}
  });
});
function calculate(){
if(num1 !== null && operator !== null && num2 !== null && operator === "+"){
        result = Number(num1) + Number(num2)
    }
    else if (num1 !== null && operator !== null && num2 !== null && operator ==="-"){
        result = Number(num1) - Number(num2)
    }
    else if (num1 !== null && operator !== null && num2 !== null && operator ==="/"){
        result = Number(num1) / Number(num2)
    }
    else if (num1 !== null && operator !== null && num2 !== null && operator ==="*"){
        result = Number(num1) * Number(num2)
    }
}
function clear(){
    displayElement.textContent = " "
    num1 = null
    num2 = null
    operator = null
    result = null
}