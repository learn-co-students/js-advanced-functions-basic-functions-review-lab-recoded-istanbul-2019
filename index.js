// Your code here

function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
};

function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(adj = '*') {
  return function () {
    return `You are ${adj}a ${adj === '*' ? 'hard worker' : 'dedicated programmer'}${adj}!`
  }
};

const Calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  }
};

function actionApplyer(int, arr) {
  let result = int;
  if (arr.length === 0) {
    return int;
  } else {
    arr.forEach(el => {
      result = el(result);
    });
    return result;
  }
}