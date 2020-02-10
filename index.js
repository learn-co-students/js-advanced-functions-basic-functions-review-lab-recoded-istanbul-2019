// Your code here
function saturdayFun(activity="roller-skate" ){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(string="*" ){
  return function(newat="special"){
    return `You are ${string}${newat}${string}!`
  }
}

let encouragingPromptFunction = wrapAdjective("!!!")



let Calculator = {
  Calculator:{},
  add:function(){ return 1+3},
  subtract:function(){return 1-3},
  multiply:function(){return 1*3},
  divide:function() {return 10/5}
  }
 
 
 
 
  arrayOfTransforms = [
          function(a){ return a * 2 },
          function(a){ return a + 1000},
          function(a){ return a % 7 }
        ]
  
  function actionApplyer(int,arr=[]){
    return arr.reduce(arr.map(el => arr.el(int)))
    
  }





