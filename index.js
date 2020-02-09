// Your code here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(visualFlair = "*") {
    return function(hmm = "special") { // The "inner" function
    return `You are ${visualFlair}${hmm}${visualFlair}!`;
  }
}

let Calculator = {

    add(x,y) { return x + y },
    subtract(x,y) { return x - y},
    multiply(x,y) { return x * y},
    divide(x,y) { return x / y},
}

function actionApplyer(startingPoint, arrayOfFunction) {
    if (arrayOfFunction.length > 0) {
        let a = arrayOfFunction[0](startingPoint);
        let b = arrayOfFunction[1](a);
        return arrayOfFunction[2](b);
    } 
    return startingPoint;
}