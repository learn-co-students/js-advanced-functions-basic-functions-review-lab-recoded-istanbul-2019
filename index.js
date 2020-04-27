// Your code here
function saturdayFun(param = "roller-skate") {
    console.log(`This Saturday, I want to ${param}`)
    return `This Saturday, I want to ${param}!`

}
let mondayWork = function (param = "go to the office") {
    console.log(`This Saturday, I want to ${param}`)
    return `This Monday, I will ${param}.`

}
let wrapAdjective = function (flair = "*") {

    return function (param = "special") {
        return `You are ${flair}${param}${flair}!`
    }
}
let encouragingPromptFunction = wrapAdjective("%")("a dedicated programmer")
console.log(encouragingPromptFunction)
const Calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b
    },
    multiply: function (a, b) {
        return a * b
    },
    divide: function (a, b) {
        return a / b;
    }
}

console.log(Calculator.add(1, 3))
function add(a) {
    return `1 + ${a}`
}
function actionApplyer(str, array) {
    let temp = str

    array.forEach(element => {
        temp = element(temp)
    });
    console.log(temp)
    return temp
}

const array_of_functions = [
    add
]
actionApplyer("13", array_of_functions)