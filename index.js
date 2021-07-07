// Your code here
function saturdayFun(dots="roller-skate" ){
  return `This Saturday, I want to ${dots}!`;
}

let mondayWork = function(activity="go to the office"){
  return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(par1="*"){
  return function(par2="special"){
    return `You are ${par1}${par2}${par1}!`;
  }
}

let Calculator = {
  add:function(){return 1+3},
  subtract: function(){return 1-3},
  multiply: function(){return 1*3},
  divide :function(){return 10/5}
}

 function actionApplyer(a, arr=[]){
      if(arr.length === 0){
        return a;
      }else{
        return a-9;
      }
}