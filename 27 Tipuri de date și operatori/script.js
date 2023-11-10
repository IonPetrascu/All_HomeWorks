//1
let number = document.getElementById("number");
number.onchange = function numberComparison (){
    let arr = number.value.toString().split("");
    let answer = document.getElementById("answer");
   
    if(arr.length == 3){
        if(arr[0] == arr[1] && arr[0] == arr[2] ){
            answer.innerHTML = `Cifrele ${arr[0]},${arr[0]},${arr[0]} sunt identice`
        }else if (!(arr[0] == arr[1] && arr[0] == arr[2] )){
            answer.innerHTML = "Cifrele nu sunt identice";
        }else{
            answer.innerHTML = "";
        }
    }else if (arr.length < 3){
        answer.innerHTML = `Numarul are mai putin decat 3 cifre in el`
    }else if (arr.length > 3){
        answer.innerHTML = `Numarul are mai mult decat 3 cifre in el`
    }else{
        answer.innerHTML = "";
    }
   
}

//2
let palindrom = document.getElementById("palindrom");
palindrom.onchange = ()=>{

    let palindromReverse =  palindrom.value.toString().split("").reverse().join("")
    let answer2 = document.getElementById("answer2");
   
    if(palindrom.value.length == 5){
        if(palindrom.value.toString() == palindromReverse){
                answer2.innerHTML = (`Numarul ${palindrom.value} este un palindrom ,bravo!`);
        }else{
            answer2.innerHTML = `Numarul ${palindrom.value} nu este palindrom.Incercati alt numar`
        } 
     }else if(palindrom.value.length < 5){
        answer2.innerHTML = `Numarul ${palindrom.value} are mai putin de 5 cifre!`
     }else {
        answer2.innerHTML = `Numarul ${palindrom.value} are mai mult decat 5 cifre!`
     }
}

//3

const RATES = {
    usd:0.055,
    eur:0.052,
    sek:2.38,
    aud:0.34
}

function convert(amount,currency){
    if(!RATES[currency]){
        return null;
    }
    return amount * RATES[currency]
}

document.getElementById("inputNumber").addEventListener("input",
     () => {
        let inputNumber =  document.getElementById("inputNumber").value;
        let listCurrencies =  document.getElementById("listCurrencies").value;
        let answer3 = document.getElementById("answer3");
        
        answer3.innerText = (convert(inputNumber,listCurrencies)) + " " + listCurrencies;
 }
) 

document.getElementById("listCurrencies").addEventListener("change",()=>{
    let inputNumber =  document.getElementById("inputNumber").value;
        let listCurrencies =  document.getElementById("listCurrencies").value;
        let answer3 = document.getElementById("answer3");
    
        answer3.innerText = (convert(inputNumber,listCurrencies)) + " " + listCurrencies;
})


//4
let answer4 = document.getElementById("answer4");




perimeterSquare.addEventListener("change",function calc(){
    let circumference = document.getElementById("circumference").value;
    let perimeterSquare = document.getElementById("perimeterSquare").value;


    circumference = Number(circumference);
    perimeterSquare = Number(perimeterSquare);

    let radius = circumference / (2 * Math.PI );
    let side = perimeterSquare / 4;

    if(radius <= side / 2){
        answer4.innerText = `Circumferinta ${circumference} poate sa incapa in patratul cu perimetrul de ${perimeterSquare}`
    }else{
        answer4.innerText = `Circumferinta ${circumference} nu poate sa incapa in patratul cu perimetrul de ${perimeterSquare}`
    }
    
  })

circumference.addEventListener("change",function calc(){
    let circumference = document.getElementById("circumference").value;
    let perimeterSquare = document.getElementById("perimeterSquare").value;


    circumference = Number(circumference);
    perimeterSquare = Number(perimeterSquare);

    let radius = circumference / (2 * Math.PI );
    let side = perimeterSquare / 4;

    if(radius <= side / 2){
        answer4.innerText = `Circumferinta ${circumference} poate sa incapa in patratul cu perimetrul de ${perimeterSquare}`
    }else{
        answer4.innerText = `Circumferinta ${circumference} nu poate sa incapa in patratul cu perimetrul de ${perimeterSquare}`
    }
    
  })


/* function nextDate(){
    let zi = document.getElementById("zi").value;
    let luna = document.getElementById("luna").value;
    let an = document.getElementById("an").value;
    console.log(zi,luna,an)

    let date = new Date();
    


if(an >= 1900 && an <= date){
   if(zi == 31){
    zi = 1;
    luna++
   if(luna >= 12){
    luna = 1;
    an++
   }else if (luna >= 1 && luna < 12){
    
   }
}else if(zi >= 1 && zi < 31){
    zi++
    if(luna >= 1 && luna < 12){
       
    }
}
}
 */

/* if(an >= 1900 && an <= date ){
    if(an % 4 == 0 || an % 400 == 0){
        if(zi == 29 && luna == 2){
            zi = 0;
            luna++;
            
        }else if(zi == 28 && luna == 2){
            zi = 0;
            luna++;
        }else if(zi >= 1 && zi < 31){
            zi++;
        }
    } 
} */
/* alert(`Data urmatoare va fi zi:${zi} ,luna:${luna},anul:${an}`) */
   

   /*  if(an % 4 == 0 || an % 400 == 0){
        if(luna == 2 && zi == 29){
            alert(`anul este bisec`)
        }else if(luna >= 1 && luna <= 12){
        }

    }
     if(zi >= 1 && zi <= 31 ){
        if(luna >= 1 && luna <= 12){
            if(an >= 1900 && an <= date.getFullYear() ){
                    
            }
        }
    } */

/* }
function verificaDate(zi, luna, an) {
    if (isNaN(zi) || zi < 1 || zi > 31) return "Ziua introdusă nu este validă.";
    if (isNaN(luna) || luna < 1 || luna > 12)  return "Luna introdusă nu este validă.";
    if (isNaN(an))  return "Anul introdus nu este valid.";

   
    var esteBisect = (an % 4 === 0 && an % 100 !== 0) || (an % 400 === 0);
    if (luna === 2 && zi > 29 && !esteBisect) {
        return "Februarie nu poate avea mai mult de 28 de zile în anii non-bisecți.";
    }

  
    if ((luna === 4 || luna === 6 || luna === 9 || luna === 11) && zi > 30) {
        return "Luna introdusă nu poate avea mai mult de 30 de zile.";
    }


    if(an){
        if(an >= 1900 && an <= date){
            if((an % 4 === 0 && an % 100 !== 0) || (an % 400 === 0)){
                if(luna == 2){
                    if(zi == 29){

                    }else if(zi > 29 ){

                    }else if (zi >= 1 && zi <= 28){

                    }
                }else if(luna < 2 && luna > 2){

                }
            }else{
                
            }
        }else return "an gresit"
    }

   


}

*/

function determinaDataUrmatoare() {
   
    var dataUtilizator = prompt("Introduceți data în formatul zz:ll:aa");

 
    var [zi, luna, an] = dataUtilizator.split(':').map(Number);

 
    var esteBisect = (an % 4 === 0 && an % 100 !== 0) || (an % 400 === 0);
    var zileInFebruarie = esteBisect ? 29 : 28;


    zi++;

    
    if (zi > 31 || (luna === 2 && zi > zileInFebruarie) || (zi > 30 && (luna === 4 || luna === 6 || luna === 9 || luna === 11))) {
        zi = 1;
        luna++;

        if (luna > 12) {
            luna = 1;
            an++;
        }
    }

   
    console.log("Data următoare este: " + zi + ":" + luna + ":" + an);
}


determinaDataUrmatoare();





