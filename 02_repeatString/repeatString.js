const repeatString = function (inputString, repeatTimes) {
    let outputString = "";
    if (repeatTimes < 0) return "ERROR";
    for (let index = 1; index <= repeatTimes; index++) {
        outputString += inputString;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
