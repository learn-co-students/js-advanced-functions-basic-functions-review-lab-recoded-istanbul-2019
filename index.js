// Your code here
function razzle() {
  console.log("You've been razzled!");
}
razzle();
function razzle(lawyer="Billy", target="'em") {
  console.log(`${lawyer} razzle-dazzles ${target}!`);
}
razzle() //=> Billy razzle-dazzles 'em!
razzle("Methuselah", "T'challah") //=> Methuselah razzle-dazzles T'challah!
function saturdayFun(str){
  if (typeof str === 'undefined'){
    return `This Saturday, I want to roller-skate!`
  }
  else {
    return  `This Saturday, I want to ${str}!`
  }
}
let mondayWork = function mondayWork(str){
  if (typeof str === 'undefined'){
    return `This Monday, I will go to the office.`
  }
  else {
    return  `This Monday, I will ${str}.`
  }
}
function wrapAdjective(adj="*"){
  return function(name="special"){
    return `You are ${adj}${name}${adj}!`
  }
}
let Calculator = {
  add : function(t1,t2){return t1+t2},
  
};
