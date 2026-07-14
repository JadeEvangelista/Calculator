function appendNumber(number) {
    return document.getElementById("display").value += number;
}

function appendOperator(operator) {
     return document.getElementById("display").value += operator;
}

function appendDecimal() {
    
}

function clearDisplay() {
return document.getElementById("display").value = "";
}


function deleteLast() {
  let display = document.getElementById("display");
  
    display.value = display.value.slice(0,-1);
}
 


function percent() {

}

function toggleSign() {

}

function calculate() {
    let expression = document.getElementById("display").value;
    let operator;
    if (expression.includes("+")){
        operator = "+";
    }
    else if (expression.includes("-")){
        operator = "-";
    }
    else if (expression.includes("*")){
        operator = "*";
    }
    else if (expression.includes("/")){
        operator = "/";
    }
    

    let ind = expression.indexOf(operator);
    let num1 = Number(expression.slice(0, ind));
    let num2 = Number(expression.slice(ind +1));

    let answer;
    if(expression.includes("+")){answer = num1 + num2}
else if(expression.includes("-")){answer = num1 - num2}
else if(expression.includes("*")){answer = num1 * num2}
else if(expression.includes("/")){answer = num1 / num2}

return document.getElementById("display").value = answer;


}