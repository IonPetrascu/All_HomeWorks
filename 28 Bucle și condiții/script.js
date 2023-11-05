//1

document.getElementById("inputNumber").addEventListener("change", 
 function numberSum(){
    let number = document.getElementById("inputNumber").value;
    let sum = ""
    let answer = document.getElementById("answer");
    for (let i = 1; i <= number; i++) {
        sum = +(sum + i);
    }
    answer.innerHTML = sum; 
    
})

//2

function commonDivisor(a,b){
    if(a != 0 && b != 0){
        if(a > b){
            a = a % b
            return commonDivisor(a,b)
        }else{
            b = b % a
            return commonDivisor(a,b)
        }
    }else{
    }
    return answer2.innerHTML = b;
}

let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    let firstNumber = document.getElementById("firstNumber").value
    let secondNumber = document.getElementById("secondNumber").value
    let answer2 = document.getElementById("answer2");
    

    firstNumber = +firstNumber
    secondNumber = +secondNumber

    commonDivisor(firstNumber,secondNumber); 
})


//3

inputNumber2 = document.getElementById("inputNumber2");
inputNumber2.addEventListener("change",()=>{
    let answer3 = document.getElementById("answer3");

    numberArray = inputNumber2.value.split("")
    answer3.innerHTML = numberArray.length;
})


//6







function calculatorLoop() {
    while (true) {
       
        let num1 = parseFloat(prompt("Introduceți primul număr:"));
        let num2 = parseFloat(prompt("Introduceți al doilea număr:"));
        let operator = prompt("Introduceți un operator (+, -, *, /):");

        let result;

   
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    alert("Eroare! Nu se poate împărți la zero.");
                    continue;
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                alert("Operator invalid!");
                continue;
        }

    
        alert("Rezultat: " + result);

    
        let response = prompt("Doriți să continuați? (Da/Nu):");
        if (response.toLowerCase() !== 'da') {
            return; 
        }
    }
}



function calc(){
    let answer4 = document.getElementById("answer4");
    let number1 = document.getElementById("number2").value
    let numberMutation = document.getElementById("number3").value
    array1 = number1.split("");
    array2 = array1.splice(0,numberMutation)
    array3 = []
    array3 = array3.concat(array1,array2)
    answer4.innerHTML = array3;
}

let a = 2;
let b = 10;

for(y = a;y < b;y++){
    for(i = a;i <= 9;i++){
        console.log(`${y} * ${i} = ${sum(a,i)}`)
        
    }
}
function sum(a ,b){
    return a + b
}


/* 
function ghicesteNumarul() {
    let intervalStart = 0;
    let intervalEnd = 100;

    alert("Alege un număr între 0 și 100 și voi încerca să-l ghicesc!");

    while (true) {
        let guess = Math.floor((intervalStart + intervalEnd) / 2);
        console.log(guess)
        let userInput = prompt("Este numărul > " + guess + ", < " + guess + " sau == " + guess + "? Introdu >, < sau =:");
        console.log(userInput)
        if (userInput === '>') {
            intervalStart = guess + 1;
            console.log(intervalStart)
        } else if (userInput === '<') {
            intervalEnd = guess - 1;
            console.log(intervalEnd)
        } else if (userInput === '=') {
            alert("Numărul pe care l-ai ales este: " + guess);
            break;
        } else {
            alert("Te rog introdu >, < sau =.");
        }

        if (intervalStart > intervalEnd) {
            alert("Pare a fi o greșeală în alegerea numărului sau răspunsurile date. Te rog să reiei jocul.");
            break;
        }
    }
}


 */