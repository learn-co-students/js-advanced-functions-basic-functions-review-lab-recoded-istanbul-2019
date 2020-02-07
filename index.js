function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }
function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(warp="*"){
    return function(adj="special"){
     return  'You are ${warp}${adj}${warp}!' 
    }
}

function wrapAdjective(s="*"){
    return function(adj="a hard worker") {
      return `You are ${s}${adj}${s}!`
    }
  }

const Calculator ={}

Calculator.add = function(a,b){
    return a + b;
}

Calculator.subtract = function(a,b){
    return a - b;
}

Calculator.multiply = function(a,b){
    return a * b;
}

Calculator.divide = function(a,b){
    return a / b;
}

function actionApplyer(par1, par2) {
    let j = par1
  
    for (let i = 0; i < par2.length; i++ ){
      j = par2[i](j)
    }
  
    return j
  }