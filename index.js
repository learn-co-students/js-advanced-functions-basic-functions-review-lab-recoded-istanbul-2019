// Your code here
function saturdayFun(string="roller-skate"){
    return `This Saturday, I want to ${string}!`;
}

function mondayWork(string="go to the office"){
    return `This Monday, I will ${string}.`;
}

function wrapAdjective(flair="*"){
    return function(par="special"){
        return `You are ${flair}${par}${flair}!`
    }
}
let Calculator = {
    add : function(num1,num3){
return num1 + num3;
    },
    subtract: function (num1,num3){
        return num1-num3;
    },
    multiply: function (num1,num3){
        return num1*num3;
    },
    divide: function (num1,num3){
        return num1/num3;
    }
}

function actionApplyer(strtint=1,arrOfFun=[]){
// let arrOfFun = [function num1(){
//     return strtint-5;
// }, function num2(){
//     return (num1)-4;
// },function num3(){}];

}