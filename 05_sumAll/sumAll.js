const sumAll = function (numStart, numEnd) {
    if (numStart > numEnd) {
        const buffer = numStart;
        numStart = numEnd;
        numEnd = buffer;
    }
    if (
        !(
            Number.isInteger(numStart) &&
            numStart > 0 &&
            Number.isInteger(numEnd) &&
            numEnd > 0
        )
    )
        return "ERROR";
    const sum = function sumAllRecursion(_numStart, _numEnd) {
        if (_numStart === _numEnd) return _numEnd;
        return _numStart + sumAllRecursion(_numStart + 1, _numEnd);
    };
    return sum(numStart, numEnd);
};

// Do not edit below this line
module.exports = sumAll;
