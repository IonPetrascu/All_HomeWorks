function comparison() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  let answer1 = document.getElementById("answer1");

  if (number1 < number2) {
    return (answer1.innerHTML = -1);
  } else if (number1 > number2) {
    return (answer1.innerHTML = 1);
  } else {
    return (answer1.innerHTML = 0);
  }
}

function factorial() {
  let number3 = document.getElementById("numberFactorial").value;
  let answer2 = document.getElementById("answer2");
  let result = 1;

  for (i = 1; i <= number3; i++) {
    result = result * i;
  }
  answer2.innerHTML = result;
}

function calcUnion() {
  let answer = document.getElementById("answer3");
  let number = document.getElementById("numberUnion").value;

  answer.innerHTML = number.replace(/ /g, "");
}
function calcPerimeter() {
  let width = document.getElementById("width").value;
  let height = document.getElementById("height").value;
  let answer = document.getElementById("answer4");
  let perimeter;

  if (!height) {
    perimeter = `Patratul are parimetrul de : ${width * 4}`;
  } else if (!width) {
    perimeter = `Patratul are parimetrul de : ${height * 4}`;
  } else {
    perimeter = `Dreptunghiul are parimetrul de : ${height * width}`;
  }

  answer.innerHTML = perimeter;
}

//5
function perfectNumber() {
  let number = +document.querySelector("#perfectNumber").value;
  let answer = document.getElementById("answer5");
  let array = [];
  let sum = 0;

  for (i = 0; i < number; i++) {
    if (number % i == 0) array.push(i);
  }
  array.forEach((num) => {
    sum += num;
  });
  if (sum === number) {
    answer.innerHTML = `Numarul ${number} este un numar perfect`;
  } else {
    answer.innerHTML = `Numarul ${number} nu este un numar perfect`;
  }
}


//6

function perfectNumberRange() {
  let startNumber = +document.querySelector("#startNumber").value;
  let endNumber = +document.querySelector("#endNumber").value;
  let arrayRange = [];
  let answer = document.getElementById("answer6");
  answer.innerHTML = "Numerele perfecte dintre acest diapazon sunt";

  for (let i = startNumber; i <= endNumber; i++) {
    arrayRange.push(i);
  }
  arrayRange.forEach((number) => {
    let array = [];
    let sum = 0;
    let result = [];
    for (i = 0; i < number; i++) {
      if (number % i == 0) array.push(i);
    }
    array.forEach((num) => {
      sum += num;
    });
    if (sum === number) {
      result.push(sum);
      answer.innerHTML += ` ${sum}.`;
    }
  });
}



function time(){
  let answer = document.getElementById("answer7");

    let h = prompt("Scrieti hh ")
    let m = prompt("Scrieti mm ")
    let s = prompt("Scrieti ss ")
    
    if(isNaN(h)){
        return alert("Orele sunt introduse gresit,utilizat cifre")
    }
    if(isNaN(m)){
        return  alert("Minutele sunt introduse gresit,utilizat cifre")
    }
    if(isNaN(s)){
        return  alert("Secundele sunt introduse gresit,utilizat cifre")
    } 

    if(s > 60){
        alert("Nu pot fi mai mult de 60 de secunde")
    }
    if(m > 60){
        alert("Nu pot fi mai mult de 60 de minute")
    }
    if(h > 24){
        alert("Nu pot fi mai mult de 24 de ore")
    }

if(h < 10) h = "0" + h
if(m < 10) m = "0" + m
if(s < 10) s = "0" + s

answer.innerHTML = `${h}:${m}:${s}`

}

function hoursToSeconds(h){
    return h * 3600;
}
function MinutsToSeconds(m){
    return m * 60;
}
function timeInSecond(){
    let h = +document.getElementById("timeH").value
    let m = +document.getElementById("timeM").value
    let s = +document.getElementById("timeS").value

    let answer = document.getElementById("answer8")
    answer.innerHTML = hoursToSeconds(h) + MinutsToSeconds(m) + s;
}

//9

function secondInTime () {
  let answer = document.getElementById("answer9");
  const secondsInput = +document.getElementById("secondsInput").value 
  const date = new Date(secondsInput).toISOString();
  
  answer.innerHTML = date.slice(11,19)
}


//10
function calc(hh1, mm1, ss1, hh2, mm2, ss2) {
  const secunde1 = hh1 * 3600 + mm1 * 60 + ss1;
  const secunde2 = hh2 * 3600 + mm2 * 60 + ss2;

  const rezultat = (Math.abs(secunde1 - secunde2)* 1000);
  const time = new Date(rezultat).toISOString();
  return time.slice(11, 19);
}
console.log(`Diferenta intre ore este de : `);
console.log(calc(14,10,10,14,30,20));

