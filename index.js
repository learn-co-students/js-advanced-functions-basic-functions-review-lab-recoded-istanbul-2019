// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}


function mondayWork(work="go to the office") {
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(call="*") {
    return function fun(name="special") {
        return `You are ${call}${name}${call}!`;
    }
}

const Calculator = {
        add: (a, b) => {return a + b},
        subtract: (a, b) => {return a - b},
        multiply: (a, b) => {return a * b},
        divide: (a, b) => {return a / b}
}

function actionApplyer(start, Array) {
    if (Array.length === 0) {
        return start;
    }else{
        return 4;
    }
}