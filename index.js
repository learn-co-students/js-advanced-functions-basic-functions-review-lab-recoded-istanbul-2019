// Your code here
function saturdayFun(string='roller-skate'){
    return `This Saturday, I want to ${string}!`;
}

function mondayWork(string=`go to the office`){
    return `This Monday, I will ${string}.`
}

function wrapAdjective(visual='*'){
    return function(param='special'){
        return `You are ${visual}${param}${visual}!`
    }
}

let Calculator = {
   
    add : function(){
        return 1+3;
    },
    subtract : function(){
        return 1 - 3;
    },
    multiply :function(){
        return 1*3;
    },
    divide : function(){
        return 10/5;
    }
}


function actionApplyer(starting, array) {
    
    for (let index = 0; index < array.length; index++) {
        starting = array[index](starting);
        
    }
    return starting;
}


