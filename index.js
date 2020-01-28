// Your code here

function saturdayFun(activity = 'roller-skate'){

    return `This Saturday, I want to ${activity}!`;
}


function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}


function wrapAdjective(activity = '*'){
    return function(adjective = 'special'){
        return `You are ${activity}${adjective}${activity}!`
    }
}

let Calculator = {
    add(value1, value2) {
      return value1 + value2
    },
    subtract(value1, value2) {
      return value1 - value2
    },
    multiply(value1, value2) {
      return value1 * value2
    },
    divide(value1, value2) {
      return value1 / value2
    }
  }

  function actionApplyer(int, fns) {
    if (fns.length === 0) {
      return int;
    } else {
      let a = fns[0](int);
      let b = fns[1](a);
      let c = fns[2](b);
      return c
    }
  }