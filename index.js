// Your code here
function saturdayFun(activity = 'roller-skate') {
    return "This Saturday, I want to " + activity + "!"
}

function mondayWork(activity = 'go to the office') {
    return 'This Monday, I will ' + activity + '.'
}

function wrapAdjective(string = '*') {
    return function inner1(params = 'special') {
        return 'You are ' + string + params + string + '!'
    }
}

let Calculator = {
    add: function() {
        return 1 + 3
    },
    subtract: function() {
        return 1 - 3;
    },
    multiply: function() {
        return 1 * 3
    },
    divide: function() {
        return 10 / 5
    }
}

function actionApplyer(start, arr) {
    if (arr.length === 0) {
        return start
    } else {
        return (start + 1) - 10
    }
}