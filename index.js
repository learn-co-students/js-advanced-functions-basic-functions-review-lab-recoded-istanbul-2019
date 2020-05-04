// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};

function mondayWork(string="go to the office") {
 return `This Monday, I will ${string}.`
};

function wrapAdjective(string = "*") {
    return function(adjective = "special") {
        return `You are ${string}${adjective}${string}!`
    }
};
let encouragingPromptFunction = wrapAdjective("!!!")

let Calculator = {
    add(x, y) {return x + y},
    subtract(x, y) {return x - y},
    multiply(x, y) {return x * y},
    divide(x, y) {return x / y},
};

function actionApplyer(int, fnArr) {
    for (let i = 0; i < fnArr.length; i++) {
        int = fnArr[i](int);
    }
    return int;
};
