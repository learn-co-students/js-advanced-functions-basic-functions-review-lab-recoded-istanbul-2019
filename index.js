// Your code here
const saturdayFun = (arg = 'roller-skate') => `This Saturday, I want to ${arg}!`
saturdayFun("bathe my dog");

const mondayWork = (arg = "go to the office") => `This Monday, I will ${arg}.`
mondayWork("work from home");

const wrapAdjective = (highlight = "*") => (arg) => `You are ${highlight}${arg}${highlight}!`



const Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}
/*const Calculator = new Object();
const { add(a, b) { return a + b } } = Calculator;*/
/*class Calculator {
    constructor(a, b) {
        this.add = a + b;
        this.substract = a - b;
        this.multiply = a * b;
        this.divide = a / b;
    }}
const add = new Calculator(4, 2);
const substract = new Calculator(4, 2);
const multiply = new Calculator(4, 2);
const divide = new Calculator(4, 2);*/

const actionApplyer = (int, arr) => {
    if (Array.isArray(arr) && arr.length) {
        let abc = arr.reduce((acc, curr) => curr(acc), int);
        return abc;
    }
    else { return int }
}