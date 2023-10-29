// 1
function nameUser(){
    let messageForUser = document.getElementById("messageForUser");
    let userName = prompt("What is your name?");

    messageForUser.innerHTML = `Hello ${userName}`
}

// 2
function userAge(){
    let age = prompt("In what year were you born?",2002);
    let messageForUser2 = document.getElementById("messageForUser2");
    let date = new Date();
    let year = date.getFullYear();

    messageForUser2.innerHTML = `You are ${year - age} years old`
}

//3
function perimeterSquare(lengthSide){
    let messageForUser3 = document.getElementById("messageForUser3");
    messageForUser3.innerHTML = `The perimeter of a square with sides of ${lengthSide} cm = ${4 * lengthSide} cm` 
}


//4
function radiusCircle(radius){
    let messageForUser4 = document.getElementById("messageForUser4");
    messageForUser4.innerHTML = `Diameter of a circle with radius of ${radius} = ${2 * radius}` 
}

//5
let btnCities = document.getElementById("btnCities");
btnCities.addEventListener("click",()=>{
    let citiesDistance = document.getElementById("citiesDistance").value;
    let timeForDistance = document.getElementById("timeForDistance").value;

    citiesDistance = Number(citiesDistance);
    timeForDistance = Number(timeForDistance);

    let speed = Math.round(citiesDistance /timeForDistance);
    messageForUser5.innerHTML = `The speed required to cover ${citiesDistance} km in ${timeForDistance} hours it will be ${speed} km/h`;
})

//6
function moneyConverter(valNumber){
    document.getElementById("outputEUR").innerHTML = valNumber * 0.946455;
}

//7
function memoryCalc(valNumber){
    result = valNumber * 1000 / 820;
    document.getElementById("outputMb").innerHTML = result.toFixed(0) + " fisiere de 820MB incap in unitatea flash";
}

//8
let buttonChocolate = document.getElementById("btn");

buttonChocolate.addEventListener("click",()=>{
    let inputMoney = document.getElementById("inputMoney").value;
    let inputChocolateBar = document.getElementById("inputChocolateBar").value;
    let outputRestMoney = document.getElementById("outputRestMoney");
    let numberChocolate = document.getElementById("numberChocolate");

    inputMoney = Number(inputMoney);
    inputChocolateBar = Number(inputChocolateBar);

    outputRestMoney.innerHTML = inputMoney % inputChocolateBar;
    numberChocolate.innerHTML = Math.floor(inputMoney / inputChocolateBar);
});


//9
let buttonBank = document.getElementById("btnBank");

buttonBank.addEventListener("click",()=>{
    let bankDeposits = document.getElementById("bankDeposits").value;
    let rateAnnual = document.getElementById("rateAnnual").value;
    let rateInterest = document.getElementById("rateInterest");
    let numberMonth = document.getElementById("numberMonth").value;
    
    rateInterest.innerHTML = Math.trunc((bankDeposits * (rateAnnual / 100) / 365 * 30) * numberMonth);

})