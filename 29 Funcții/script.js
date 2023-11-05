function comparison(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let answer1 = document.getElementById("answer1");
  
    if(number1 < number2){
        return answer1.innerHTML = -1;
    }else if (number1 > number2){
        return answer1.innerHTML = 1;
    }else{
        return answer1.innerHTML = 0;
    }

}


function factorial(){
    let number3 = document.getElementById("numberFactorial").value;
    let answer2 = document.getElementById("answer2");
    let result = 1;

    for(i = 1; i <= number3; i++){
        result = result * i;
    }
    answer2.innerHTML = result;

}

function calcUnion(){
    let answer = document.getElementById("answer3");
    let number = document.getElementById("numberUnion").value;

    answer.innerHTML = number.replace(/ /g,"");

}
function calcPerimeter(){
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    let answer = document.getElementById("answer4");
    let perimeter;

    if(!height){
        perimeter = `Patratul are parimetrul de : ${width * 4}`
    }else if(!width){
        perimeter = `Patratul are parimetrul de : ${height * 4}`
    }else {
        perimeter = `Dreptunghiul are parimetrul de : ${height * width}`
    }

    answer.innerHTML =  perimeter;
}

function perfectNumber(){
    array = [1];
    for (let index = 1; index < 6; index++) {
        if(index % 1 == 0){
            array.push(index);
            console.log(index)
        }else{

        }
        
        
        
    }
    console.log(array)
}
perfectNumber()