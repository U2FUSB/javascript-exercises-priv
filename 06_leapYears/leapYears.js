const leapYears = function (year) {
    // leapYear = year%4===0 && (year%100!==0 || year%400===0)
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? true : false;
};

// Do not edit below this line
module.exports = leapYears;
