const removeFromArray = function () {
    const argumentsArray = Array.from(arguments);
    const inputArray = argumentsArray[0];
    argumentsArray.shift();
    const elementsToRemove = argumentsArray;

    elementsToRemove.forEach((element) => {
        while (inputArray.includes(element)) {
            const indexOfElement = inputArray.findIndex((value) => value === element);
            inputArray.splice(indexOfElement, 1);
        }
    });
    return inputArray;
};
// Do not edit below this line
module.exports = removeFromArray;
