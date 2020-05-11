// Your code here
function saturdayFun(activity="roller-skate") {
   return "This Saturday, I want to "+ activity +"!"
};
    

let mondayWork = function (activity="go to the office") {
    return "This Monday, I will "+ activity +"."
};

function wrapAdjective (wrapper = '*'){
    return function (string = 'special') {
        return `You are ${wrapper}${string}${wrapper}!`;
    }
}



let Calculator = {
    add(x,y) {
    return x + y
},
    subtract(x,y) {
    return x - y
},
    multiply(x,y) {
    return x * y
},
    divide(x,y) {
    return x / y
    }
}

function actionApplyer(integer, array) {
    for (let i = 0; i < array.length; i++) {
        integer = array[i](integer)
    }
    return integer
} 






