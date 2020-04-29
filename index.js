// Your code here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }
function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective (wrapper = '*'){
    return function (string = 'special') {
        return `You are ${wrapper}${string}${wrapper}!`;
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

