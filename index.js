function saturdayFun(activety='roller-skate') {
    return `This Saturday, I want to ${activety}!`
}

function mondayWork(activety='go to the office') {
    return `This Monday, I will ${activety}.`
}

function wrapAdjective(string="*") {
    return function(adjective="special") {
         return `You are ${string}${adjective}${string}!`
    }
}

const Calculator = {
    add: function  add(a, b){
        return a + b 
        },
    subtract: function subtract(a, b) {
        return a - b
        },
    multiply: function multiply(a, b) {
        return a * b
    },
    divide: function divide(a, b){
        return a / b
    }
}

const array = function actionMAth(number) {
    return ((number*2) + 1000) % 7;
}

function actionApplyer(integer, array) {
 let number = integer
 for(let i = 0; i < array.length ; i++){
    number = array[i](number)
 }
 return number;
}