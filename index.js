// Your code here
function saturdayFun (activity = 'roller-skate'){
return "This Saturday, I want to "+ activity+"!";
}

let mondayWork = function (activity = 'go to the office'){
    return "This Monday, I will "+ activity+"." ;
}

function wrapAdjective (wrapper = '*'){
    return function (string = 'special') {
        return `You are ${wrapper}${string}${wrapper}!`;
    }
}

const Calculator = {};

Calculator.add = function (a,b){
return a + b;
}

Calculator.subtract = function (a,b){
    return a - b;
}

Calculator.multiply = function (a,b){
    return a * b;
}

Calculator.divide = function (a,b){
    return a / b;
}

function actionApplyer (start, Arr){
    for (let i = 0 ; i < Arr.length; i++){
       start = Arr[i](start);
    }
    return start;
}
