// Your code here

function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork= function(work='go to the office'){
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(string='*'){
    return function( adj='special'){
        return `You are ${string}${adj}${string}!`;
    } 
}
let encouragingPromptFunction = wrapAdjective("!!!");

let Calculator={
    add: function(x,y){return x+y},
    subtract: function(x,y){return x-y},
    multiply: function(x,y){return x*y},
    divide: function(x,y){return x/y}
}

function actionApplyer(startingInt, arrOfFunction){
    let result=startingInt;
    if(arrOfFunction.length == 0){
        return startingInt; 
    }
    else{
        for(const element of arrOfFunction){
            result= element(result);
        }
        return result;
    } 


}
