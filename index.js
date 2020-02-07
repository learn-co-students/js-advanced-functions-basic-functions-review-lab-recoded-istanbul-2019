// Your code here
function saturdayFun(string = "roller-skate"){
    return `This Saturday, I want to ${string}!`
}

const mondayWork = function(string = "go to the office"){
    return `This Monday, I will ${string}.`
}

function wrapAdjective(symbel = "*"){
    return function(special){
        return `You are ${symbel}${special}${symbel}!`
    }
}


let Calculator = new Object
Calculator = {
    add(a,b) {
        return a+b
    },
    subtract(a,b){return a-b},
    multiply(a,b){return a*b},
    divide(a,b){return a/b}
}

function actionApplyer(str,arr){
        if(arr.length === 0){ return str}
        else {return (((str * 2)+1000)%7)}
}
console.log(actionApplyer(0,[]));
