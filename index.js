// Your code here
function saturdayFun(place='roller-skate') {
    return (`This Saturday, I want to ${place}!`)
}

function mondayWork(act='go to the office'){
    return (`This Monday, I will ${act}.`)
}

function wrapAdjective(param=`*`){

    return function innerWrap(adj='special'){
       return (`You are ${param}${adj}${param}!`)
 
    }
}


{
 let Calculator = {add:(function(){return 1+3}),
                   subtract:(function(){return 1-3}),
                   multiply:(function(){return 1*3}),
                   divide:(function(){return 10/5}),
                }
}




/*
arrayOfFn = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
  ]*/

function actionApplyer(startingIng, arrOfFn){
    return arrOfFn.length===0?startingIng:arrOfFn.reduce((t,c)=> c(t),startingIng)
}