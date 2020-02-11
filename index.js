// Your code here

function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
  }

  function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
  }
  mondayWork()

  function wrapAdjective(string="*")
  {
  return function (message="a hard worker"){ 
  return  `You are ${string}${message}${string}!`
  } 
 }
  
  wrapAdjective()
  
  let Calculator = 
  {
      add(a,b)
    { 
      return a+b;
    },
    subtract(a,b)
    {
      return a-b;
    },
    multiply(a,b)
    {
      return a*b;
    },
    divide(a,b)
    {
      return a/b;
    }
  }
  

  function actionApplyer(start,array)
{ 
for(let i=0; i<array.length; i++){
    start=array[i](start)
}
return start
}