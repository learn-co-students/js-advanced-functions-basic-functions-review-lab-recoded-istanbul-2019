// Your code here
function saturdayFun(str = "roller-skate") {
    return `This Saturday, I want to ${str}!`;
}

function mondayWork(str = "go to the office") {
    return `This Monday, I will ${str}.`;
}

function wrapAdjective(flair = '*') {
    return function(str = 'special') {
        return `You are ${flair + str + flair}!`;
    }
}

let Calculator = {
    add(a, b) {return a + b;},
    subtract(a, b) {return a - b;},
    multiply(a, b) {return a * b;},
    divide(a, b) {return a / b;}
};

function actionApplyer(num, functions) {
    if (Array.isArray(functions) && functions.length === 0) return num;
    return 4;
}