// Your code here
function saturdayFun(firstPara = 'roller-skate') {
    return `This Saturday, I want to ${firstPara}!`
}

function mondayWork(scndPara = 'go to the office') {
    return `This Monday, I will ${scndPara}.`
}

function wrapAdjective(first = "*") {
    return function (scned = "special") {
        return `You are ${first}${scned}${first}!`
    }
}

let Calculator = {};

Calculator.add = function() {
    return 1 + 3
}
Calculator.subtract = function() {
    return 1 -3 
}
Calculator.multiply = function() {
    return 1 * 3
}
Calculator.divide = function() {
    return 10 / 5
}
function actionApplyer(starting, array) {
    for (let el of array) {
        starting = el(starting)
    }
    return starting
}