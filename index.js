// Your code here

function saturdayFun (text = 'roller-skate'){
return `This Saturday, I want to ${text}!`
}
saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(text = "go to the office"){
    return `This Monday, I will ${text}.`
}

mondayWork();
mondayWork("work from home")

/*
 function wrapAdjective(){
    return `You are ${adj}${text}${adj}!`
}

let result = wrapAdjective()
let emphatic = result("a dedicated programmer" , adj = "||");
*/

let Calculator = {}

Calculator.add = function(a , b){
    return a+b;
}

Calculator.subtract = function(a , b){
    return a-b;
}

Calculator.multiply = function(a , b){
    return a*b;
}

Calculator.divide = function(a , b){
    return a/b;
}

add(1 ,3);
subtract(1 ,3);
multiply(1 ,3);
divide(10 ,5);


function wrapAdjective(special = "*"){
    return function(text){
        return `You are ${special}${text}${special}!`
    }
}


let fncs = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
]  


function actionApplyer (start, Arr){
    for (let i = 0 ; i < Arr.length; i++){
       start = Arr[i](start);
    }
    return start;
}