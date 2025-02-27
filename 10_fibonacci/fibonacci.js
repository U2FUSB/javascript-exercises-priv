const fibonacci = function (position) {
    let firstNumber = 1;
    let secondNumber = 0;
    for (let index = 1; index <= position; index++) {
        const buffer = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = buffer;
        console.log(`iteration ${index}, firstNumber=${firstNumber}, secondNumber=${secondNumber}` )
    }
    return secondNumber
};
console.log(fibonacci(12))
// Do not edit below this line
module.exports = fibonacci;
