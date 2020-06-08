// Your code here
function saturdayFun(string="roller-skate"){
    return(`This Saturday, I want to ${string}!`)
}

let mondayWork = function (string='go to the office'){
return(`This Monday, I will ${string}.`)
}

function wrapAdjective(flair="*"){
    return function(parameter="special"){
        return `You are ${flair}${parameter}${flair}!`
    }
}
let Calculator = {
    add : function(x,y){
        return x + y;
    },
    subtract: function (x,y){
        return x-y;
    },
    multiply: function (x,y){
        return x*y;
    },
    divide: function (x,y){
        return x/y;
    }
}

let actionApplyer = function(starting, array){
    
        for (let el of array) {
            starting = el(starting)
        }
        return starting
}

