// Your code here
//---------
function saturdayFun(pass="roller-skate"){
  return `This Saturday, I want to ${pass}!`;
 
}
 console.log(saturdayFun());
 
//----------
let mondayWork=function(pass="go to the office")
{
  return `This Monday, I will ${pass}.`
}
mondayWork();
//----------


function wrapAdjective(str="*"){
  return function(pass="special"){
    return `You are ${str}${pass}${str}!`
  }
}

let encouragingPromptFunction = wrapAdjective("!!!");
wrapAdjective("%")("a dedicated programmer") //=> "You are %a dedicated programmer%!"

//----------------------

 let Calculator={
   add(num1,num2){return num1+num2;},
   subtract(num1,num2){return num1-num2;},
   multiply(num1,num2){return num1*num2;},
   divide(num1,num2){return num1/num2;}
   
 }
 Calculator.add(1,3);
 Calculator.subtract(1,3);
 Calculator.multiply(1,3);
 Calculator.divide(10,5);
 
 function actionApplyer(start,array){
   if(!array.length)
return start;
  return array[2](array[1](array[0](start)))
  
 }
 actionApplyer(3,[]);
  arrayOfTransforms = [
          function(a){ return a * 2 },
          function(a){ return a + 1000},
          function(a){ return a % 7 }
        ]
    actionApplyer(13,arrayOfTransforms);