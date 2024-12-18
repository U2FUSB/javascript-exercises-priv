const reverseString = function (inputString) {
    const inputCharArray = inputString.split("");
    const outputCharArray = [];
    for (inputChar of inputCharArray) {
        outputCharArray.unshift(inputChar);
    }
    return outputCharArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
