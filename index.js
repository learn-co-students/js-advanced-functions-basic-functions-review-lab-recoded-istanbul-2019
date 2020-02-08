// Your code here
function saturdayFun(str = 'roller-skate'){
    return `This Saturday, I want to ${str}!`
}
function mondayWork(str = 'go to the office'){
    return `This Monday, I will ${str}.`
}
function wrapAdjective(wrapper = '*'){

    return function(activity){
        return `You are ${wrapper}${activity}${wrapper}!`
    }

    
}

const Calculator={
    add: function(a,b){return a+b},
    subtract: function(a,b){return a-b},
    multiply: function(a,b){return a*b},
    divide: function(a,b){return a/b}

}

function actionApplyer(start,arr){
    if(!arr.length)return start;
    return arr.reduce((memo ,curr ) =>{return curr(memo)},start);
}