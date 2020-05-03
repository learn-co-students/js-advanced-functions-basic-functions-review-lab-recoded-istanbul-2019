function saturdayFun(activity = 'roller-skate') { return `This Saturday, I want to ${activity}!` };

let mondayWork = function (activity = 'go to the office') { return `This Monday, I will ${activity}.`; }
function wrapAdjective(visualFlair = "*") {
    return function (adjective = 'special') {
        return `You are ${visualFlair}${adjective}${visualFlair}!`;
    }
};
let Calculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y
};
function actionApplyer(a, arrayOfTransforms) {
    for (const action of arrayOfTransforms) {
        a = action(a);
    }
    return a;

};
arrayOfTransforms = [
    function (a) { return a * 2 },
    function (a) { return a + 1000 },
    function (a) { return a % 7 }
];
