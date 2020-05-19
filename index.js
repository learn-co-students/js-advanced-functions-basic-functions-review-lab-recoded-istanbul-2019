// Your code here
function saturdayFun(activity = 'roller-skate') {
        return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string = "*") {
    return function (param = "special") {
            return `You are ${string}${param}${string}!`
        }
}
wrapAdjective("%")("a dedicated programmer")

const Calculator = {
    add: (a,b) => a+b,
    subtract: (c,d) => c-d,
    multiply: (e,f) => e*f,
    divide: (g,h) => g/h
}

function actionApplyer (integer, arr) { 
    for (let i = 0; i < arr.length; i++) {
        integer = arr[i](integer)
    }
    return integer;
}